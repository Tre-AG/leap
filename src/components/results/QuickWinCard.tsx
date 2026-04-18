"use client";

import { useState } from "react";
import type { QuickWin } from "@/types";

interface QuickWinCardProps {
  win: QuickWin;
  index: number;
  total: number;
}

export default function QuickWinCard({ win, index, total }: QuickWinCardProps) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    if (!win.examplePrompt) return;
    await navigator.clipboard.writeText(win.examplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-pond px-3 py-1 text-xs font-bold text-leaf-dark">
          Quick Win {index + 1} of {total}
        </span>
        <span className="text-sm text-foreground/70">
          {win.toolCost}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-foreground">
        {win.title}
      </h3>

      <p className="mb-3 text-base leading-relaxed text-foreground/70">
        {win.why}
      </p>

      <div className="mb-3 rounded-xl bg-pond-light p-3">
        <p className="text-xs font-semibold text-leaf-dark">
          Tool: {win.tool}
        </p>
        <div className="mt-1 flex flex-col gap-1 text-sm text-foreground/70">
          {(Array.isArray(win.howToStart)
            ? win.howToStart
            : typeof win.howToStart === "string"
              ? win.howToStart
                  .split(/(?=\d+\.\s)/)
                  .map((s) => s.trim())
                  .filter((s) => s.length > 0)
              : [String(win.howToStart)]
          ).map((step, i) => (
            <p key={i}>{step}</p>
          ))}
        </div>
      </div>

      {win.examplePrompt &&
        !win.examplePrompt.toLowerCase().includes("not applicable") && (
        <div className="rounded-xl bg-cream p-3">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-semibold text-bark">
              Try this prompt:
            </p>
            <button
              onClick={copyPrompt}
              className="text-xs text-leaf hover:text-leaf-dark"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="text-sm italic leading-relaxed text-foreground/70">
            &ldquo;{win.examplePrompt}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
