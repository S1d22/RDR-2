
import { GoogleGenAI } from "@google/genai";

export const getAIAssistance = async (query: string) => {
  // Initializing inside the function to ensure the latest API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: query }] }],
      config: {
        systemInstruction: "You are the 'Old Trail Guide' for the Dust Peek RDR2 community. Speak in a grizzled, western, 1899-era dialect (e.g., use 'partner', 'reckon', 'feller'). Help with Wild West survival, roleplay tips, and lore. Keep responses concise, immersive, and helpful. If asked about rules, gently point them to the Rules section.",
        temperature: 0.8,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The trails are blocked by a heavy storm, partner. Best hunkering down and tryin' later.";
  }
};
