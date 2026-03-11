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
        <span className="text-xs text-foreground/30">
          {win.toolCost}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-bold text-foreground">
        {win.title}
      </h3>

      <p className="mb-3 text-sm leading-relaxed text-foreground/60">
        {win.why}
      </p>

      <div className="mb-3 rounded-xl bg-pond-light p-3">
        <p className="text-xs font-semibold text-leaf-dark">
          Tool: {win.tool}
        </p>
        <p className="mt-1 text-xs text-foreground/50">
          {win.howToStart}
        </p>
      </div>

      {win.examplePrompt && (
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
          <p className="text-xs italic leading-relaxed text-foreground/60">
            &ldquo;{win.examplePrompt}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}
