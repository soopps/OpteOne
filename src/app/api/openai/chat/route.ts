import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({ apiKey: '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' });
const openaiModelId:any = 'gpt-3.5-turbo-16k-0613' || null;

export async function POST(request: Request, context: any) {
    const { params } = context;
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a code analyst." }],
        model: openaiModelId,
    });

    return NextResponse.json(completion.choices[0].message);
}