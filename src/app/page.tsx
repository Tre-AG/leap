"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { CHARACTER_CLASSES, type CharacterClass } from "@/types";
import { useGame } from "@/context/GameContext";

export default function Home() {
  const { setCharacterClass } = useGame();
  const router = useRouter();

  const handleSelect = (classId: CharacterClass) => {
    setCharacterClass(classId);
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
        <div className="absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-lily/10" />
        <div className="absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full bg-lily-light/10" />
      </div>

      <main className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-5xl font-extrabold tracking-tight text-leaf-dark sm:text-6xl">
            Leap
          </h1>
          <p className="mb-2 text-lg font-medium text-foreground/70">
            Discover how AI can actually help you.
          </p>
          <p className="text-base text-foreground/70">
            No jargon. No tech knowledge required.
          </p>
        </div>

        {/* Character selection */}
        <h2 className="mb-6 text-center text-xl font-bold text-foreground/80">
          Pick the one that sounds most like you
        </h2>

        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {topRow.map((cls) => (
            <CharacterCard
              key={cls.id}
              cls={cls}
              onSelect={() => handleSelect(cls.id)}
            />
          ))}
        </div>

        {/* Bottom row - 2 cards, centered */}
        <div className="mt-4 flex justify-center gap-4">
          {bottomRow.map((cls) => (
            <div key={cls.id} className="w-full max-w-[calc(33.333%-0.5rem)] sm:w-[calc(33.333%-0.5rem)]">
              <CharacterCard
                cls={cls}
                onSelect={() => handleSelect(cls.id)}
              />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-base text-foreground/70">
          Free. Takes about 5 minutes.
        </p>
      </main>
    </div>
  );
}

function CharacterCard({
  cls,
  onSelect,
}: {
  cls: (typeof CHARACTER_CLASSES)[number];
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className="group flex w-full flex-col items-center rounded-3xl border-2 border-transparent bg-white p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-pond"
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
      <h3 className="mb-1 text-lg font-bold text-foreground">
        {cls.name}
      </h3>
      <p className="text-base text-foreground/70">{cls.description}</p>
    </button>
  );
}
