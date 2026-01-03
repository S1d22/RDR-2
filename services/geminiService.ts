
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAssistance = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are the "Old Trail Guide" for the Frontier Redemption RDR2 Roleplay community. 
        You speak in a grizzled, western, 1899-era dialect. 
        Help players with questions about Wild West survival, roleplay tips, and lore. 
        Keep responses concise, immersive, and helpful. 
        If asked about server rules, redirect them to the Rules page gently.`,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The trails are blocked by a storm, partner. Try again later.";
  }
};
