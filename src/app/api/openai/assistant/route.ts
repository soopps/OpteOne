import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const openaiModelId:any = process.env.OPENAI_MODEL_ID || null;

export async function POST(request: Request, context: any) {
    const { params } = context;
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: openaiModelId,
    });

    return NextResponse.json(completion.choices[0].message);
}