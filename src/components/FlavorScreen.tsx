"use client";

import { useState } from "react";
import Image from "next/image";
import type { FlavorMoment, CharacterClass } from "@/types";
import ChoiceCard from "./ChoiceCard";
import CharacterImage from "./CharacterImage";

interface FlavorScreenProps {
  flavor: FlavorMoment;
  classId: CharacterClass;
  onChoice: (choiceId: string) => void;
  onBack?: () => void;
  backgroundImage?: string;
}

export default function FlavorScreen({
  flavor,
  classId,
  onChoice,
  onBack,
  backgroundImage,
}: FlavorScreenProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [reactionText, setReactionText] = useState<string | null>(null);
  const [bgError, setBgError] = useState(false);

  const handleSelect = (choiceId: string) => {
    if (selectedId) return;
    setSelectedId(choiceId);
    const choice = flavor.choices.find((c) => c.id === choiceId);
    if (choice?.reaction) {
      setReactionText(choice.reaction);
    }
    setTimeout(() => {
      onChoice(choiceId);
    }, choice?.reaction ? 1800 : 400);
  };

  return (
    <div className="mx-auto w-full max-w-lg px-6">
      {/* Class background */}
      {backgroundImage && !bgError && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="pointer-events-none fixed inset-0 z-0 object-cover opacity-20"
          onError={() => setBgError(true)}
        />
      )}
      {/* Decorative card wrapper for storybook feel */}
      <div className="relative overflow-hidden rounded-3xl bg-white/70 px-6 py-8 shadow-lg backdrop-blur-sm">

        {/* Character */}
        <div className="mb-4 flex justify-center">
          <CharacterImage classId={classId} size={100} pose={flavor.frogPose} />
        </div>

        {/* Title */}
        <h2 className="mb-1 text-center text-xl font-bold text-leaf-dark">
          {flavor.title}
        </h2>

        {/* Prompt */}
        <p
          className="mb-8 text-center text-base leading-relaxed text-foreground/90"
          style={{ textWrap: "balance" }}
        >
          {flavor.prompt}
        </p>

        {/* Choices */}
        <div className="flex flex-col gap-3">
          {flavor.choices.map((choice, i) => (
            <ChoiceCard
              key={choice.id}
              text={choice.text}
              selected={selectedId === choice.id}
              onClick={() => handleSelect(choice.id)}
              index={i}
            />
          ))}
        </div>

        {/* Micro-reaction */}
        {reactionText && (
          <p className="reaction-text mt-6 text-center text-base italic text-foreground/70">
            {reactionText}
          </p>
        )}
      </div>

      {/* Back button */}
      {onBack && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={onBack}
            className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground/90"
          >
            ← Go back
          </button>
        </div>
      )}
    </div>
  );
}
