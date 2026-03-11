"use client";

import CharacterImage from "@/components/CharacterImage";
import type { CharacterClass } from "@/types";
import { CHARACTER_CLASSES } from "@/types";

interface ProfileSummaryProps {
  classId: CharacterClass;
  summary: string;
}

export default function ProfileSummary({
  classId,
  summary,
}: ProfileSummaryProps) {
  const character = CHARACTER_CLASSES.find((c) => c.id === classId);

  return (
    <div className="flex flex-col items-center text-center">
      <CharacterImage classId={classId} size={160} className="mb-6" />
      <h2 className="mb-2 text-2xl font-extrabold text-leaf-dark">
        {character?.name}
      </h2>
      <p className="max-w-md text-base leading-relaxed text-foreground/70">
        {summary}
      </p>
    </div>
  );
}
