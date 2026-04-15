"use client";

import { useState } from "react";
import Image from "next/image";
import type { CharacterClass } from "@/types";
import { CHARACTER_CLASSES } from "@/types";

interface CharacterImageProps {
  classId: CharacterClass;
  size?: number;
  className?: string;
  pose?: string;
}

export default function CharacterImage({
  classId,
  size = 200,
  className = "",
  pose,
}: CharacterImageProps) {
  const character = CHARACTER_CLASSES.find((c) => c.id === classId);
  const [poseError, setPoseError] = useState(false);
  if (!character) return null;

  const src = pose && !poseError ? pose : character.image;

  return (
    <Image
      src={src}
      alt={character.name}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
      onError={pose && !poseError ? () => setPoseError(true) : undefined}
    />
  );
}
