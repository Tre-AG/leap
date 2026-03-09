# Leap

**AI recommendation tool — [taketheleap.ai](https://taketheleap.ai)**

Leap is a fun, interactive experience that helps everyday people discover how AI can make their lives easier. Instead of assuming people already care about AI, Leap surfaces their real-life friction points and maps AI solutions to them. The magic moment is: "Wait, AI can help with *that*?"

## What It Is

A 5-minute interactive quiz disguised as a mini-game. Users pick a character class, play through scenario-based choices about their daily life, and receive personalized AI tool recommendations based on their answers.

Think 16Personalities meets Telltale Games, but for AI discovery.

## Character Classes

- **The Student** — Learning, studying, building skills
- **The Professional** — Working a job, building a career
- **The Entrepreneur** — Side hustles, projects, your own path
- **The Parent** — Juggling kids, work, and everything else
- **The Creative** — Making things, expressing ideas

## Current Status

**Planning phase complete. Build phase starting.**

What's done:
- 40 scenarios across 5 character classes
- 15 flavor moments (story beats between scenarios)
- 5 interactive data collection screens
- AI prompt template tested and working
- Tool knowledge layer (16 vetted tools with honest context)
- Character illustrations finalized
- Data architecture (modular JSON files, not hardcoded)
- Visual design direction locked in

What's next:
- Initialize Next.js project
- Build the frontend experience
- Integrate Claude API for personalized recommendations
- Deploy to taketheleap.ai via Vercel

## Tech Stack

- **Frontend:** Next.js + React
- **Styling:** Tailwind CSS
- **AI Engine:** Claude API (Anthropic)
- **Hosting:** Vercel
- **Domain:** taketheleap.ai

## Project Structure

```
leap/
  assets/          # Character illustrations (5 frog PNGs)
  data/
    scenarios/     # 5 JSON files (one per character class)
    flavors.json   # 15 flavor moments
    interactive.json # Tool grid, responsibilities, time drains, wishlist
    tools.json     # 16 vetted AI tools with recommendations context
  docs/
    leap-project-plan.md
    leap-tool-knowledge.md
```

## Philosophy

- Meet people where they are. No jargon.
- Fun over functional. It should feel like a game, not a survey.
- Show, don't sell. Recommendations are genuine.
- Lowest hanging fruit first. Start with the simplest wins.
- Depth over breadth. One tool used well beats five tools installed.
