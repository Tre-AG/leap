"use client";

import { useState } from "react";

interface ToolGridProps {
  tools: string[];
  onSubmit: (selected: string[]) => void;
  onBack?: () => void;
}

export default function ToolGrid({ tools, onSubmit, onBack }: ToolGridProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (tool: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(tool)) {
        next.delete(tool);
      } else {
        next.add(tool);
      }
      return next;
    });
  };

  return (
    <div className="mx-auto w-full max-w-lg px-6">
      <h2 className="mb-2 text-center text-xl font-bold text-leaf-dark">
        What do you use?
      </h2>
      <p className="mb-6 text-center text-base text-foreground/70">
        Tap all that apply.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        {tools.map((tool) => (
          <button
            key={tool}
            onClick={() => toggle(tool)}
            className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all ${
              selected.has(tool)
                ? "border-leaf bg-pond-light text-leaf-dark"
                : "border-transparent bg-white text-foreground/70 shadow-sm hover:shadow-md"
            }`}
          >
            {tool}
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
