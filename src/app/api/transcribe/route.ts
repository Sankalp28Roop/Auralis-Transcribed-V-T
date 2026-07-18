import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import { v4 as uuidv4 } from "uuid";

const execAsync = promisify(exec);
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== 'string' || url.trim() === '') {
      return NextResponse.json({ error: "A valid video URL is strictly required." }, { status: 400 });
    }

    const rawUrl = url.trim();
    const isYouTube = rawUrl.includes("youtube.com") || rawUrl.includes("youtu.be");
    const startTime = Date.now();
    let transcriptBlocks: any[] = [];
    let rawText = "";

    const tempId = uuidv4();
    const videoPath = path.join("/tmp", `${tempId}.mp4`);
    const audioPath = path.join("/tmp", `${tempId}.wav`);

    try {
      // 1. Download best audio stream using yt-dlp (with 403 bypass args)
      console.log(`Downloading audio from ${url}...`);
      await execAsync(`yt-dlp -f "bestaudio" --extractor-args "youtube:player-client=web,default" --rm-cache-dir -o "${videoPath}" "${url}"`);
      
      // 2. Extract and format audio using ffmpeg
      console.log(`Converting to wav...`);
      await execAsync(`ffmpeg -i "${videoPath}" -vn -acodec pcm_s16le -ar 16000 -ac 1 "${audioPath}"`);

      // 3. Upload to Gemini
      console.log(`Uploading to Gemini...`);
      const uploadResult = await ai.files.upload({
        file: audioPath,
        config: {
          mimeType: "audio/wav",
        }
      });

      // 4. Generate Transcript
      console.log(`Transcribing with Gemini Flash Latest...`);
      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: [
          { fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } },
          "Provide a complete, accurate transcript of this entire audio file. Return the response as a JSON array of objects, where each object has a 'start' (number, in seconds), 'end' (number, in seconds), and 'text' (string). Ensure absolutely every spoken word is captured."
        ],
        config: {
          responseMimeType: "application/json",
        }
      });

      // 5. Parse output
      const jsonOutput = response.text || "[]";
      transcriptBlocks = JSON.parse(jsonOutput);
      rawText = transcriptBlocks.map((t: any) => t.text).join(" ");

      // Cleanup
      fs.unlinkSync(videoPath);
      fs.unlinkSync(audioPath);
    } catch (err: any) {
      if (fs.existsSync(videoPath)) fs.unlinkSync(videoPath);
      if (fs.existsSync(audioPath)) fs.unlinkSync(audioPath);
      return NextResponse.json({ error: "Video Extraction/Transcription Error: " + err.message }, { status: 500 });
    }

    const processingTime = (Date.now() - startTime) / 1000;
    const characterCount = rawText.length;

    // Save to DB
    const job = await prisma.videoJob.create({
      data: {
        url,
        isYouTube,
        transcript: JSON.stringify(transcriptBlocks),
        rawText,
        characterCount,
        processingTime
      }
    });

    return NextResponse.json({ jobId: job.id });

  } catch (error: any) {
    console.error("Transcription error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
