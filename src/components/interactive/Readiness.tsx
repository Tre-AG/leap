"use client";

import { useState } from "react";
import type { ReadinessConfig } from "@/types";

interface ReadinessProps {
  config: ReadinessConfig;
  onSubmit: (
    techComfort: number,
    aiToolsUsed: string[],
    timeWillingness: string
  ) => void;
  onBack?: () => void;
}

export default function Readiness({ config, onSubmit, onBack }: ReadinessProps) {
  const [techComfort, setTechComfort] = useState(3);
  const [aiToolsUsed, setAiToolsUsed] = useState<string[]>([]);
  const [timeWillingness, setTimeWillingness] = useState("");

  const canSubmit = timeWillingness !== "";

  const toggleAiTool = (tool: string) => {
    setAiToolsUsed((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  return (
    <div className="mx-auto w-full max-w-lg px-6">
      <h2 className="mb-2 text-center text-xl font-bold text-leaf-dark">
        Almost There
      </h2>
      <p className="mb-8 text-center text-base text-foreground/70">
        How familiar are you with AI?
      </p>

      {/* Tech Comfort Slider */}
      <div className="mb-8">
        <label className="mb-3 block text-base font-semibold text-foreground/80">
          How comfortable are you with technology?
        </label>
        {config.techComfort.showNumbers && (
          <div className="mb-1 flex justify-between px-0.5">
            {Array.from(
              { length: config.techComfort.max - config.techComfort.min + 1 },
              (_, i) => config.techComfort.min + i
            ).map((n) => (
              <span
                key={n}
                className={`text-xs font-semibold ${
                  n === techComfort ? "text-leaf-dark" : "text-foreground/30"
                }`}
              >
                {n}
              </span>
            ))}
          </div>
        )}
        <input
          type="range"
          min={config.techComfort.min}
          max={config.techComfort.max}
          value={techComfort}
          onChange={(e) => setTechComfort(Number(e.target.value))}
          className="w-full"
        />
        <div className="mt-1 flex justify-between text-sm text-foreground/70">
          <span>{config.techComfort.labelLow}</span>
          <span>{config.techComfort.labelHigh}</span>
        </div>
      </div>

      {/* AI Tools Used */}
      <div className="mb-8">
        <label className="mb-1 block text-base font-semibold text-foreground/80">
          Have you used any of these AI tools?
        </label>
        <p className="mb-3 text-sm text-foreground/60">Tap all that apply.</p>
        <div className="flex flex-col gap-2">
          {config.aiToolsUsed.map((option) => (
            <button
              key={option}
              onClick={() => toggleAiTool(option)}
              className={`rounded-xl border-2 px-4 py-3 text-left text-sm transition-all ${
                aiToolsUsed.includes(option)
                  ? "border-leaf bg-pond-light text-leaf-dark font-semibold"
                  : "border-transparent bg-white text-foreground/70 shadow-sm hover:shadow-md"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Time Willingness */}
      <div className="mb-8">
        <label className="mb-3 block text-base font-semibold text-foreground/80">
          How much time would you spend trying something new?
        </label>
        <div className="flex flex-col gap-2">
          {config.timeWillingness.map((option) => (
            <button
              key={option}
              onClick={() => setTimeWillingness(option)}
              className={`rounded-xl border-2 px-4 py-3 text-left text-sm transition-all ${
                timeWillingness === option
                  ? "border-leaf bg-pond-light text-leaf-dark font-semibold"
                  : "border-transparent bg-white text-foreground/70 shadow-sm hover:shadow-md"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => onSubmit(techComfort, aiToolsUsed, timeWillingness)}
          disabled={!canSubmit}
          className={`rounded-2xl px-10 py-4 text-lg font-bold text-white shadow-lg transition-all ${
            canSubmit
              ? "bg-leaf hover:bg-leaf-dark hover:shadow-xl"
              : "cursor-not-allowed bg-foreground/20"
          }`}
        >
          See My Results
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
