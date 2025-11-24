import { GoogleGenAI } from "@google/genai";
import { TrainingLog, Pledge } from '../types';
import { ATHLETE_BIO, SPONSOR_TIERS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-2.5-flash';

export const generateSponsorResponse = async (
  userQuestion: string, 
  logs: TrainingLog[],
  pledges: Pledge[]
): Promise<string> => {
  try {
    const totalMiles = logs.reduce((acc, log) => acc + log.miles, 0);
    const recentActivity = logs[0];
    
    const context = `
      You are an AI assistant for the athlete "Cong Michael Tran" who is running the Snowdrop ULTRA 55 Hour Race.
      
      Event Details:
      - Event: 13th Annual Snowdrop ULTRA 55 Hour Race & Relay
      - Dates: Dec 30, 2025 - Jan 1, 2026
      - Location: Buffalo Run Park, Missouri City, TX
      - Course: 0.69 mile loop
      - Goal: Raise $5,000 for childhood cancer research (Snowdrop Foundation).
      
      Athlete Bio:
      ${ATHLETE_BIO}
      
      Current Training Status:
      - Total Miles Logged Recently: ${totalMiles.toFixed(1)}
      - Most Recent Run: ${recentActivity.date}, ${recentActivity.miles} miles (${recentActivity.activity}).
      - Recent Note: "${recentActivity.notes}"
      - Recent Reflection: "${recentActivity.reflection}"
      
      Sponsorship Context:
      - Total Pledges Count: ${pledges.length}
      - Tiers: ${SPONSOR_TIERS.map(t => `${t.name} ($${t.minAmount})`).join(', ')}
      
      Task:
      Answer the potential sponsor's question enthusiastically. Be concise, encouraging, and informative.
      If they ask about donating, remind them to use the "Pledge" button first to commit, or visit the Donate page for payment details.
      Emphasize that 100% goes to pediatric cancer research.
      
      User Question: "${userQuestion}"
    `;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: [
        {
          role: 'user',
          parts: [{ text: context }]
        }
      ],
      config: {
        systemInstruction: "You are a helpful, energetic race assistant. Keep answers under 100 words.",
      }
    });

    return response.text || "I'm having trouble connecting to the finish line right now. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently offline on a training run! Please try asking again later.";
  }
};
