const { GoogleGenAI } = require("@google/genai");
require("dotenv").config({ path: ".env" });
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  try {
    const uploadResult = await ai.files.upload({ file: "package.json", mimeType: "application/json" });
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: [
        { fileData: { fileUri: uploadResult.uri, mimeType: uploadResult.mimeType } },
        "Summarize this file."
      ]
    });
    console.log("Response:", response.text);
  } catch (err) {
    console.error("Error:", err);
  }
}
run();
