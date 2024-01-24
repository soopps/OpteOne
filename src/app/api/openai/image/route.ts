import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI();

export async function POST(request: Request, context: any) {
    const body = await request.json();
    const { prompt, n, size } = body;

    const image = await openai.images.generate({
        prompt: prompt ?? 'A random picture of a lotus flower.',
        n:n ?? 1,
        size: size ?? "512x512",
    });

    return NextResponse.json(image.data[0]);
}