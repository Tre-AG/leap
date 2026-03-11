"use client";

import { useState } from "react";
import type { Scenario, CharacterClass } from "@/types";
import ChoiceCard from "./ChoiceCard";
import CharacterImage from "./CharacterImage";

// Visual themes that cycle across scenarios to give each one a distinct feel
const SCENARIO_THEMES = [
  { accent: "bg-pond/40", icon: "🌿", position: "top-4 right-4" },
  { accent: "bg-lily/20", icon: "📖", position: "top-4 left-4" },
  { accent: "bg-cream", icon: "🍃", position: "bottom-4 right-4" },
  { accent: "bg-pond/30", icon: "🌱", position: "top-4 right-4" },
  { accent: "bg-lily-light/20", icon: "💡", position: "top-4 left-4" },
  { accent: "bg-cream", icon: "🗺️", position: "bottom-4 right-4" },
  { accent: "bg-pond/40", icon: "🌊", position: "top-4 right-4" },
  { accent: "bg-lily/20", icon: "🎯", position: "top-4 left-4" },
];

interface ScenarioScreenProps {
  scenario: Scenario;
  classId: CharacterClass;
  scenarioIndex: number;
  onChoice: (choiceId: string, tags: string[]) => void;
  onBack?: () => void;
}

export default function ScenarioScreen({
  scenario,
  classId,
  scenarioIndex,
  onChoice,
  onBack,
}: ScenarioScreenProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (choiceId: string, tags: string[]) => {
    if (selectedId) return;
    setSelectedId(choiceId);
    setTimeout(() => {
      onChoice(choiceId, tags);
    }, 400);
  };

  const theme = SCENARIO_THEMES[scenarioIndex % SCENARIO_THEMES.length];

  return (
    <div className="mx-auto w-full max-w-lg px-6">
      {/* Decorative card wrapper for storybook feel */}
      <div className="relative overflow-hidden rounded-3xl bg-white/70 px-6 py-8 shadow-lg backdrop-blur-sm">
        {/* Decorative accent blob */}
        <div
          className={`pointer-events-none absolute ${theme.position} h-24 w-24 rounded-full ${theme.accent} blur-2xl`}
        />

        {/* Scenario icon */}
        <div className="mb-3 text-center text-3xl" role="presentation">
          {theme.icon}
        </div>

        {/* Character */}
        <div className="mb-4 flex justify-center">
          <CharacterImage classId={classId} size={100} />
        </div>

        {/* Title & subtitle */}
        <h2 className="mb-1 text-center text-xl font-bold text-leaf-dark">
          {scenario.title}
        </h2>
        <p className="mb-5 text-center text-sm font-medium text-foreground/60">
          {scenario.subtitle}
        </p>

        {/* Prompt - use text-wrap: balance to prevent orphans */}
        <p
          className="mb-8 text-center text-base leading-relaxed text-foreground/80"
          style={{ textWrap: "balance" }}
        >
          {scenario.prompt}
        </p>

        {/* Choices */}
        <div className="flex flex-col gap-3">
          {scenario.choices.map((choice, i) => (
            <ChoiceCard
              key={choice.id}
              text={choice.text}
              selected={selectedId === choice.id}
              onClick={() => handleSelect(choice.id, choice.tags || [])}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Back button */}
      {onBack && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={onBack}
            className="text-sm font-medium text-foreground/40 transition-colors hover:text-foreground/70"
          >
            ← Go back
          </button>
        </div>
      )}
    </div>
  );
}
