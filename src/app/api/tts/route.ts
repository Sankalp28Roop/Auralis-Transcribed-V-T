import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Chunk text by roughly 4000 characters without breaking words
function chunkText(text: string, maxLen: number = 4000): string[] {
  const chunks: string[] = [];
  let currentChunk = "";
  const sentences = text.match(/[^.!?]+[.!?]+|\s+$/g) || [text];

  for (const sentence of sentences) {
    if (currentChunk.length + sentence.length > maxLen) {
      if (currentChunk) chunks.push(currentChunk.trim());
      currentChunk = sentence;
    } else {
      currentChunk += sentence;
    }
  }
  if (currentChunk) chunks.push(currentChunk.trim());
  return chunks;
}

export async function POST(request: Request) {
  try {
    const { videoJobId, voice } = await request.json();

    if (!videoJobId || !voice) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const job = await prisma.videoJob.findUnique({ where: { id: videoJobId } });
    if (!job || !job.rawText) {
      return NextResponse.json({ error: "Job not found or has no text" }, { status: 404 });
    }

    const startTime = Date.now();
    const chunks = chunkText(job.rawText);
    const audioBuffers: Buffer[] = [];

    // Process chunks sequentially to preserve order
    for (const chunk of chunks) {
      const response = await openai.audio.speech.create({
        model: "tts-1",
        voice: voice as any,
        input: chunk,
      });
      const arrayBuffer = await response.arrayBuffer();
      audioBuffers.push(Buffer.from(arrayBuffer));
    }

    const finalBuffer = Buffer.concat(audioBuffers);
    const fileName = `${uuidv4()}.mp3`;
    const publicDir = path.join(process.cwd(), "public", "audio");
    
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const filePath = path.join(publicDir, fileName);
    fs.writeFileSync(filePath, finalBuffer);

    const audioUrl = `/audio/${fileName}`;
    const processingTime = (Date.now() - startTime) / 1000;

    await prisma.audioSynthesisJob.create({
      data: {
        voiceProfile: voice,
        audioUrl,
        processingTime,
        videoJobId
      }
    });

    return NextResponse.json({ audioUrl });

  } catch (error: any) {
    console.error("TTS error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
