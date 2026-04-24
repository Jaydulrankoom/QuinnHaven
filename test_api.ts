import { GoogleGenAI, Type, Schema } from '@google/genai';
import * as fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generate() {
  if (!process.env.GEMINI_API_KEY) {
    console.error("No API Key");
    return;
  }
  console.log("API Key exists!");
}
generate();
