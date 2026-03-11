"use client";

import Image from "next/image";
import type { CharacterClass } from "@/types";
import { CHARACTER_CLASSES } from "@/types";

interface CharacterImageProps {
  classId: CharacterClass;
  size?: number;
  className?: string;
}

export default function CharacterImage({
  classId,
  size = 200,
  className = "",
}: CharacterImageProps) {
  const character = CHARACTER_CLASSES.find((c) => c.id === classId);
  if (!character) return null;

  return (
    <Image
      src={character.image}
      alt={character.name}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}
