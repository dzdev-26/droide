import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: 'test', httpOptions: { baseUrl: 'http://localhost:3000/api/gemini' } });
console.log(ai.httpOptions?.baseUrl);

const chat = ai.chats.create({ model: 'gemini-2.0-flash' });
try {
   await chat.sendMessageStream("Hi");
} catch(e) {
   console.log("Error:", e);
}
