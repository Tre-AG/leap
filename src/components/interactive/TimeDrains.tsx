"use client";

import { useState } from "react";

interface TimeDrainsProps {
  options: string[];
  max: number;
  onSubmit: (selected: string[]) => void;
  onBack?: () => void;
}

export default function TimeDrains({ options, max, onSubmit, onBack }: TimeDrainsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (option: string) => {
    setSelected((prev) => {
      if (prev.includes(option)) {
        return prev.filter((o) => o !== option);
      }
      if (prev.length >= max) return prev;
      return [...prev, option];
    });
  };

  const isSelected = (option: string): boolean => selected.includes(option);

  return (
    <div className="mx-auto w-full max-w-lg px-6">
      <h2 className="mb-2 text-center text-xl font-bold text-leaf-dark">
        What Eats Your Time
      </h2>
      <p className="mb-6 text-center text-base text-foreground/70">
        What eats more time than it should? Pick your top {max}.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {options.map((option) => {
          const active = isSelected(option);
          return (
            <button
              key={option}
              onClick={() => toggle(option)}
              className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all ${
                active
                  ? "border-leaf bg-pond-light text-leaf-dark"
                  : selected.length >= max
                    ? "cursor-not-allowed border-transparent bg-white/50 text-foreground/40"
                    : "border-transparent bg-white text-foreground/70 shadow-sm hover:shadow-md"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => onSubmit(selected)}
          disabled={selected.length === 0}
          className={`rounded-2xl px-10 py-4 text-lg font-bold text-white shadow-lg transition-all ${
            selected.length > 0
              ? "bg-leaf hover:bg-leaf-dark hover:shadow-xl"
              : "cursor-not-allowed bg-foreground/20"
          }`}
        >
          Continue
        </button>
      </div>

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
