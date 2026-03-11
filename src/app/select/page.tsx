"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CHARACTER_CLASSES, type CharacterClass } from "@/types";
import { useGame } from "@/context/GameContext";

export default function SelectPage() {
  const [selected, setSelected] = useState<CharacterClass | null>(null);
  const { setCharacterClass } = useGame();
  const router = useRouter();

  const handleContinue = () => {
    if (!selected) return;
    setCharacterClass(selected);
    router.push("/play");
  };

  // Split into top row (3) and bottom row (2) for centering
  const topRow = CHARACTER_CLASSES.slice(0, 3);
  const bottomRow = CHARACTER_CLASSES.slice(3);

  return (
    <div className="flex min-h-screen flex-col items-center px-6 py-12">
      {/* Floating background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-pond/30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pond/20" />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="mb-2 text-center text-3xl font-extrabold text-leaf-dark sm:text-4xl">
          Choose Your Character
        </h1>
        <p className="mb-10 text-center text-base text-foreground/50">
          Pick the one that sounds most like your life right now.
        </p>

        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {topRow.map((cls) => (
            <CharacterCard
              key={cls.id}
              cls={cls}
              isSelected={selected === cls.id}
              onSelect={() => setSelected(cls.id)}
            />
          ))}
        </div>

        {/* Bottom row - 2 cards, centered */}
        <div className="mt-4 flex justify-center gap-4">
          {bottomRow.map((cls) => (
            <div key={cls.id} className="w-full max-w-[calc(33.333%-0.5rem)] sm:w-[calc(33.333%-0.5rem)]">
              <CharacterCard
                cls={cls}
                isSelected={selected === cls.id}
                onSelect={() => setSelected(cls.id)}
              />
            </div>
          ))}
        </div>

        {/* Continue button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleContinue}
            disabled={!selected}
            className={`rounded-2xl px-10 py-4 text-lg font-bold text-white shadow-lg transition-all ${
              selected
                ? "bg-leaf hover:bg-leaf-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                : "cursor-not-allowed bg-foreground/20"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function CharacterCard({
  cls,
  isSelected,
  onSelect,
}: {
  cls: (typeof CHARACTER_CLASSES)[number];
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`group flex w-full flex-col items-center rounded-3xl border-2 p-6 transition-all duration-200 ${
        isSelected
          ? "border-leaf bg-pond-light shadow-lg scale-[1.02]"
          : "border-transparent bg-white shadow-md hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={cls.image}
          alt={cls.name}
          width={140}
          height={140}
          className="object-contain drop-shadow-sm"
        />
      </div>
      <h2 className="mb-1 text-lg font-bold text-foreground">
        {cls.name}
      </h2>
      <p className="text-sm text-foreground/50">{cls.description}</p>
    </button>
  );
}
