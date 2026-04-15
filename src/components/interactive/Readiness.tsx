"use client";

import { useState } from "react";
import type { ReadinessConfig } from "@/types";

interface ReadinessProps {
  config: ReadinessConfig;
  onSubmit: (
    techComfort: number,
    aiUsage: string,
    timeWillingness: string
  ) => void;
}

export default function Readiness({ config, onSubmit }: ReadinessProps) {
  const [techComfort, setTechComfort] = useState(3);
  const [aiUsage, setAiUsage] = useState("");
  const [timeWillingness, setTimeWillingness] = useState("");

  const canSubmit = aiUsage !== "" && timeWillingness !== "";

  return (
    <div className="mx-auto w-full max-w-lg px-6">
      <h2 className="mb-2 text-center text-xl font-bold text-leaf-dark">
        Almost There
      </h2>
      <p className="mb-8 text-center text-sm text-foreground/50">
        Just a few quick things to calibrate your recommendations.
      </p>

      {/* Tech Comfort Slider */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-semibold text-foreground/70">
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
        <div className="mt-1 flex justify-between text-xs text-foreground/40">
          <span>{config.techComfort.labelLow}</span>
          <span>{config.techComfort.labelHigh}</span>
        </div>
      </div>

      {/* AI Usage */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-semibold text-foreground/70">
          Have you used AI tools before?
        </label>
        <div className="flex flex-col gap-2">
          {config.aiUsage.map((option) => (
            <button
              key={option}
              onClick={() => setAiUsage(option)}
              className={`rounded-xl border-2 px-4 py-3 text-left text-sm transition-all ${
                aiUsage === option
                  ? "border-leaf bg-pond-light text-leaf-dark font-semibold"
                  : "border-transparent bg-white text-foreground/60 shadow-sm hover:shadow-md"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Time Willingness */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-semibold text-foreground/70">
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
                  : "border-transparent bg-white text-foreground/60 shadow-sm hover:shadow-md"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => onSubmit(techComfort, aiUsage, timeWillingness)}
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
    </div>
  );
}
