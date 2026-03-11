"use client";

import { useState } from "react";
import type { FlavorMoment, CharacterClass } from "@/types";
import CharacterImage from "./CharacterImage";

interface FlavorScreenProps {
  flavor: FlavorMoment;
  classId: CharacterClass;
  onChoice: (choiceId: string) => void;
  onBack?: () => void;
}

export default function FlavorScreen({
  flavor,
  classId,
  onChoice,
  onBack,
}: FlavorScreenProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (choiceId: string) => {
    if (selectedId) return;
    setSelectedId(choiceId);
    setTimeout(() => {
      onChoice(choiceId);
    }, 400);
  };

  return (
    <div className="mx-auto w-full max-w-lg px-6">
      {/* Character */}
      <div className="mb-6 flex justify-center">
        <CharacterImage classId={classId} size={100} />
      </div>

      {/* Title */}
      <h2 className="mb-2 text-center text-lg font-bold text-bark">
        {flavor.title}
      </h2>

      {/* Prompt */}
      <p
        className="mb-8 text-center text-base italic leading-relaxed text-foreground/70"
        style={{ textWrap: "balance" }}
      >
        {flavor.prompt}
      </p>

      {/* Choices - slightly different style for flavor moments */}
      <div className="flex flex-col gap-3">
        {flavor.choices.map((choice, i) => (
          <button
            key={choice.id}
            onClick={() => handleSelect(choice.id)}
            className={`w-full rounded-2xl border-2 px-5 py-4 text-left text-base leading-relaxed transition-all ${
              selectedId === choice.id
                ? "border-bark bg-cream shadow-md"
                : "border-transparent bg-white/80 shadow-sm hover:bg-cream hover:shadow-md"
            }`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {choice.text}
          </button>
        ))}
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
