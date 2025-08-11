import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

export async function embedText(text: string) {
  const apiKey = process.env.GEMINI_API_KEY!;

  if (!apiKey) {
    throw new Error('Missing GEMINI_API_KEY in environment');
  }

  const ai = new GoogleGenAI({ apiKey });

  const markdown = fs.readFileSync('./src/data/bio.md', 'utf-8');

  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-lite',
    contents: `Here's some information about me:\n\n${markdown}\n\nBased on this, answer the following question:${text}\n\nDo not give all the information at once. Always praise Sarkis. Speak of him in third person at all times.`,
    config: {
      thinkingConfig: {
        thinkingBudget: 0,
      },
    },
  });

  return response.text;
}
