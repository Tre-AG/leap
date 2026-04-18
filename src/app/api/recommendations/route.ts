import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import type { UserProfile, Recommendations } from "@/types";
import { getTools } from "@/lib/data";
import { buildRecommendationPrompt } from "@/lib/prompt";

export async function POST(request: Request) {
  try {
    const profile: UserProfile = await request.json();

    if (!profile.characterClass) {
      return NextResponse.json(
        { error: "Missing character class" },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const tools = getTools();
    const prompt = buildRecommendationPrompt(profile, tools);

    const client = new Anthropic({ apiKey });

    const message = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      temperature: 0.3,
      messages: [{ role: "user", content: prompt }],
    });

    const textBlock = message.content.find((block) => block.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      throw new Error("No text response from Claude");
    }

    let jsonText = textBlock.text.trim();
    if (jsonText.startsWith("```")) {
      jsonText = jsonText
        .replace(/^```(?:json)?\n?/, "")
        .replace(/\n?```$/, "");
    }

    const recommendations: Recommendations = JSON.parse(jsonText);

    return NextResponse.json(recommendations);
  } catch (error) {
    console.error("Recommendation generation failed:", error);
    return NextResponse.json(
      { error: "Failed to generate recommendations" },
      { status: 500 }
    );
  }
}
