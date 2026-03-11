"use client";

import { useState } from "react";

interface ResponsibilitiesProps {
  options: string[];
  onSubmit: (selected: string[]) => void;
}

export default function Responsibilities({
  options,
  onSubmit,
}: ResponsibilitiesProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (option: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(option)) {
        next.delete(option);
      } else {
        next.add(option);
      }
      return next;
    });
  };

  return (
    <div className="mx-auto w-full max-w-lg px-6">
      <h2 className="mb-2 text-center text-xl font-bold text-leaf-dark">
        Your Responsibilities
      </h2>
      <p className="mb-6 text-center text-sm text-foreground/50">
        What are you mainly responsible for? Tap all that apply.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => toggle(option)}
            className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all ${
              selected.has(option)
                ? "border-leaf bg-pond-light text-leaf-dark"
                : "border-transparent bg-white text-foreground/60 shadow-sm hover:shadow-md"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => onSubmit(Array.from(selected))}
          disabled={selected.size === 0}
          className={`rounded-2xl px-10 py-4 text-lg font-bold text-white shadow-lg transition-all ${
            selected.size > 0
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
