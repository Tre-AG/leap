"use client";

import { useState } from "react";

interface TimeDrainsProps {
  options: string[];
  max: number;
  onSubmit: (ranked: string[]) => void;
}

export default function TimeDrains({ options, max, onSubmit }: TimeDrainsProps) {
  const [ranked, setRanked] = useState<string[]>([]);

  const toggle = (option: string) => {
    setRanked((prev) => {
      const idx = prev.indexOf(option);
      if (idx >= 0) {
        return prev.filter((o) => o !== option);
      }
      if (prev.length >= max) return prev;
      return [...prev, option];
    });
  };

  const getRank = (option: string): number => {
    const idx = ranked.indexOf(option);
    return idx >= 0 ? idx + 1 : 0;
  };

  return (
    <div className="mx-auto w-full max-w-lg px-6">
      <h2 className="mb-2 text-center text-xl font-bold text-leaf-dark">
        Your Time Drains
      </h2>
      <p className="mb-6 text-center text-sm text-foreground/50">
        What eats more time than it should? Pick your top {max} in order.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {options.map((option) => {
          const rank = getRank(option);
          return (
            <button
              key={option}
              onClick={() => toggle(option)}
              className={`relative rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all ${
                rank > 0
                  ? "border-leaf bg-pond-light text-leaf-dark"
                  : ranked.length >= max
                    ? "cursor-not-allowed border-transparent bg-white/50 text-foreground/30"
                    : "border-transparent bg-white text-foreground/60 shadow-sm hover:shadow-md"
              }`}
            >
              {rank > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-leaf text-xs font-bold text-white">
                  {rank}
                </span>
              )}
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => onSubmit(ranked)}
          disabled={ranked.length === 0}
          className={`rounded-2xl px-10 py-4 text-lg font-bold text-white shadow-lg transition-all ${
            ranked.length > 0
              ? "bg-leaf hover:bg-leaf-dark hover:shadow-xl"
              : "cursor-not-allowed bg-foreground/20"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
