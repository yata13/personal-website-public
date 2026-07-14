// Netlify serverless function — powers the "Yata AI" chat on the LIVE (Netlify) site.
// It mirrors the /api/gemini/chat route in server.ts, so the frontend needs NO changes.
// The API key is read from the GEMINI_API_KEY environment variable, which you set in the
// Netlify dashboard (Site settings > Environment variables). It is NEVER hard-coded here.

import { GoogleGenAI } from "@google/genai";

export const handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed." }) };
  }

  try {
    const { message, history } = JSON.parse(event.body || "{}");

    if (!message) {
      return { statusCode: 400, body: JSON.stringify({ error: "Message is required." }) };
    }

    if (!process.env.GEMINI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error:
            "GEMINI_API_KEY is missing on Netlify. Add it in Site settings > Environment variables, then redeploy.",
        }),
      };
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Same persona/knowledge as server.ts so the live AI behaves identically.
    const systemInstruction = `You are Yared's AI Assistant ("Yata AI"), an intelligent and polite guide on Yared Tesfahun's professional portfolio website.
Yared Tesfahun (Yata) is a talented Full-Stack Developer and Cinematographer based in Addis Ababa, Ethiopia.
He is the Tech Director at Sefed Studio, a creative partner studio formed with Henok Gebreslase (Media Director, his cousin).

Key Information:
1. Sefed Studio specializes in custom technology, digital marketing, technical SEO, and high-definition cinematography. It merges cinema artistry with robust custom code.
2. Yared's skills: React, TypeScript, Node.js, Express, MySQL, MongoDB, Technical SEO, Python, C++, Bash.
3. Yared's cinematography gear: Sony A7 IV (capturing pristine low-light S-Log3 files), DJI RS4 Combo stabilizer, Sigma 24-70mm f/2.8 lens, Amaran 200d LED + Softbox lighting.
4. Contact Details for Yared:
   - Phone/WhatsApp: +251929260629 (Location: Addis Ababa, Ethiopia)
   - Telegram: @yared__Te (https://t.me/yared__Te)
   - Instagram: @yared__te (https://instagram.com/yared__te)
   - Email: tesfahunyared108@gmail.com
5. Key Projects:
   - Bella Fashion Store (https://bellafshion.netlify.app): boutique e-commerce with lookbooks, telegram/whatsapp checkouts.
   - Liya Habesha Fashion (https://liyafetil.netlify.app): traditional clothing showcase with high-contrast luxury serif design.
   - Prime Real Estate Platform (https://test-realstat.netlify.app): property search with interactive maps.
   - Real-Time Chat App (https://chat-app13.netlify.app/): Socket.IO persistent chat room platform.
   - Visit Gondar Tourism: interactive castles guide and offline travel itinerary generator.
   - Enterprise ERP & POS: multi-store role-based inventories tracker in Addis Ababa.
   - Banking Ledger System: double-entry clerk virtual ledger system.

Your goal is to answer visitor questions in a friendly, conversational, concise, and professional tone. Highlight Yared's expertise in web development, SEO, and video production, and Sefed Studio's capability to deliver top-tier full-stack digital solutions and high-end video branding.
If visitors ask about scheduling, booking, or contacting Yared, provide his direct phone number (+251929260629), Telegram (@yared__Te), Instagram (@yared__te), or guide them to use the Contact form at the bottom of the page.
Keep answers under 3-4 concise paragraphs. Use bullet points or bold text elegantly for high scannability. Speak directly as an assistant on this page.`;

    // Primary model first; valid current fallbacks if it is ever busy.
    const modelsToTry = ["gemini-3.5-flash", "gemini-2.5-flash", "gemini-2.5-flash-lite"];
    let responseText = "";
    let lastError: any = null;

    for (const modelName of modelsToTry) {
      try {
        const chat = ai.chats.create({
          model: modelName,
          config: { systemInstruction, temperature: 0.7 },
          history: history
            ? history.map((h: any) => ({ role: h.role, parts: [{ text: h.text }] }))
            : [],
        });

        const response = await chat.sendMessage({ message });
        if (response && response.text) {
          responseText = response.text;
          break;
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} unavailable:`, err?.message || err);
        lastError = err;
      }
    }

    if (!responseText) {
      throw lastError || new Error("All generative models are currently busy. Please try again shortly.");
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: responseText }),
    };
  } catch (error: any) {
    console.error("Gemini function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error?.message || "An unexpected error occurred." }),
    };
  }
};
