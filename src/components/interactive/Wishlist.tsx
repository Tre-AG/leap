"use client";

import { useState } from "react";

interface WishlistProps {
  options: string[];
  max: number;
  onSubmit: (selected: string[]) => void;
}

export default function Wishlist({ options, max, onSubmit }: WishlistProps) {
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
        Your Wishlist
      </h2>
      <p className="mb-2 text-center text-base text-foreground/70">
        If you could snap your fingers and have any of these, which would you pick?
      </p>
      <p className="mb-6 text-center text-sm text-foreground/40">
        Pick your top {max}.
      </p>

      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const active = isSelected(option);
          return (
            <button
              key={option}
              onClick={() => toggle(option)}
              className={`rounded-2xl border-2 px-5 py-3 text-left text-sm font-semibold transition-all ${
                active
                  ? "border-leaf bg-pond-light text-leaf-dark"
                  : selected.length >= max
                    ? "cursor-not-allowed border-transparent bg-white/50 text-foreground/30"
                    : "border-transparent bg-white text-foreground/60 shadow-sm hover:shadow-md"
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
    </div>
  );
}
