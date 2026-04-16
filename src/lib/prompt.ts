import type { UserProfile, Tool } from "@/types";

export function buildRecommendationPrompt(
  profile: UserProfile,
  tools: Tool[]
): string {
  const allTags = profile.scenarioChoices.flatMap((c) => c.tags);
  const tagCounts: Record<string, number> = {};
  for (const tag of allTags) {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  }

  const topTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .map(([tag]) => tag);

  const toolKnowledge = tools
    .map((t) => {
      const base = `- ${t.name} (${t.provider}): ${t.category}. Free: ${t.cost.free}. Paid: ${t.cost.paid}. Skill floor: ${t.skillFloor}. Best for: ${t.bestFor.join(", ")}. Caveats: ${t.caveats.join("; ")}. Teaching points: ${t.teachingPoints.join("; ")}`;
      const usage = t.usageMethods;
      const parts = [base];
      if (usage.quickStart) {
        parts.push(`  Quick start: ${usage.quickStart}`);
      }
      if (usage.promptFormulas.length > 0) {
        parts.push(`  Prompt formulas: ${usage.promptFormulas.join(" | ")}`);
      }
      if (usage.techniques.length > 0) {
        parts.push(`  Techniques: ${usage.techniques.join(" | ")}`);
      }
      if (usage.commonMistakes.length > 0) {
        parts.push(`  Common mistakes: ${usage.commonMistakes.join(" | ")}`);
      }
      return parts.join("\n");
    })
    .join("\n");

  return `You are the recommendation engine for Leap, a tool that helps everyday people discover how AI can make their lives easier. You are warm, clear, and never use jargon. You speak like a helpful friend, not a tech consultant.

The user just completed an interactive experience. Here is their profile:

CHARACTER CLASS: ${profile.characterClass}

BEHAVIORAL PROFILE (from scenario choices):
Top behavioral tags: ${topTags.join(", ")}

TOOLS THEY ALREADY USE: ${profile.tools.join(", ") || "None selected"}

RESPONSIBILITIES: ${profile.responsibilities.join(", ") || "None selected"}

TOP TIME DRAINS (ranked): ${profile.timeDrains.map((d, i) => `${i + 1}. ${d}`).join(", ") || "None selected"}

WISHLIST (what they want most): ${profile.wishlist.join(", ") || "None selected"}

TECH COMFORT: ${profile.techComfort}/5
AI TOOLS USED: ${
    profile.aiToolsUsed.length > 0
      ? `User has used these AI tools: ${profile.aiToolsUsed.join(", ")}`
      : "User has not used any of these AI tools yet: ChatGPT, Claude, Gemini, Copilot, Perplexity"
  }
TIME WILLINGNESS: ${profile.timeWillingness || "Not specified"}

AVAILABLE TOOLS TO RECOMMEND FROM:
${toolKnowledge}

Based on this profile, generate personalized recommendations. Respond in valid JSON with this exact structure:

{
  "profileSummary": "A 2-3 sentence personalized reflection of who they are and how they operate, based on their choices. This should feel like a '16Personalities' moment where they think 'wow, that's so me.' Be specific to their behavioral tags, not generic.",
  "opportunities": [
    {
      "title": "Short title for the opportunity area",
      "description": "2-3 sentences explaining how AI can help in this specific area of their life, tied directly to what they shared. Be concrete, not generic."
    }
  ],
  "quickWins": [
    {
      "title": "What it is in plain English",
      "why": "Why it matters for them specifically, referencing their profile",
      "tool": "Name of the recommended tool",
      "toolCost": "Free / Free tier available / Paid ($X/mo)",
      "howToStart": "A simple, concrete first step they can do right now",
      "examplePrompt": "A copy-paste prompt they can use with the tool (when applicable)"
    }
  ]
}

RULES:
- Generate exactly 2-3 opportunities
- Generate exactly 3-5 quick wins, ordered from easiest to most involved
- Quick wins should be immediately actionable this week
- When generating each Quick Win, use the tool's usage methods data to make recommendations more actionable:
  - The howToStart field should be based on the tool's "Quick start" value, adapted to the user's specific situation and time drains when relevant
  - The examplePrompt field should be adapted from one of the tool's "Prompt formulas," tailored to the user's answers (their class, top time drains, wishlist items). Fill in placeholders like {topic} or {your rough notes} with wording that matches their situation. If the tool has no prompt formulas, omit examplePrompt or leave it empty.
  - When a tool's techniques include a specific actionable tip that directly addresses the user's situation, weave it into the Quick Win description or howToStart naturally. Only when it genuinely applies.
  - Do NOT copy the quick start or prompt formulas verbatim. Adapt them to feel personalized to this specific user.
- Match tool recommendations to their existing ecosystem (e.g., Google users get Google-compatible tools)
- Calibrate complexity to their tech comfort level and time willingness
- Default to free tools. Only recommend paid tools when they are clearly the best fit and the user has budget flexibility.
- Never use em dashes. Use commas or periods instead.
- Write in a warm, encouraging tone. No jargon. No buzzwords.
- The profile summary should feel personal and specific, not like a horoscope
- Reference their specific time drains, wishlist items, and responsibilities in recommendations
- Return ONLY valid JSON, no markdown formatting or code blocks`;
}
