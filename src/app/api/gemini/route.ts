import { NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ...
const example = [
  {
    word: "versatile",
    definition:
      "able to adapt or be adapted to many different functions or activities.",
    exmaple: "a versatile sewing machine",
    translationToUzbek: "ko'p toifali",
  },
];
export async function POST(request: any) {
  try {
    const { prompt } = await request.json();
    const basePrompt = `Return JSON containing all potential unknown words, C1 or B2 ones in particcular, with their definitions an example, and its translation to Uzbkek language like this ${JSON.stringify(
      example
    )} for English learners from the following text: `;
    const fullPrompt = `${basePrompt}${prompt}`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    console.log(response);
    const text = response.text();
    console.log(text);
    return NextResponse.json({ text });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to generate content ", error },
      { status: 500 }
    );
  }
}
