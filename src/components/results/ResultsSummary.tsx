"use client";

import { useState } from "react";
import CharacterImage from "@/components/CharacterImage";
import type { CharacterClass, QuickWin } from "@/types";
import { CHARACTER_CLASSES } from "@/types";

const TOOL_URLS: Record<string, string> = {
  ChatGPT: "https://chat.openai.com",
  Claude: "https://claude.ai",
  "Google Gemini": "https://gemini.google.com",
  "Microsoft Copilot": "https://copilot.microsoft.com",
  Grammarly: "https://www.grammarly.com",
  "Hemingway Editor": "https://hemingwayapp.com",
  "Otter.ai": "https://otter.ai",
  "Fireflies.ai": "https://fireflies.ai",
  Notion: "https://www.notion.so",
  Todoist: "https://todoist.com",
  SaneBox: "https://www.sanebox.com",
  Calendly: "https://calendly.com",
  "Reclaim.ai": "https://reclaim.ai",
  Zapier: "https://zapier.com",
  "Google NotebookLM": "https://notebooklm.google.com",
  Canva: "https://www.canva.com",
};

interface ResultsSummaryProps {
  classId: CharacterClass;
  summary: string;
  quickWins: QuickWin[];
  onReviewAnswers: () => void;
}

function hasUsablePrompt(win: QuickWin): boolean {
  return !!win.examplePrompt && !win.examplePrompt.toLowerCase().includes("not applicable");
}

function QuickWinRow({ win, index }: { win: QuickWin; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const toolUrl = TOOL_URLS[win.tool];
  const showPrompt = hasUsablePrompt(win);

  const copyPrompt = async () => {
    if (!win.examplePrompt) return;
    await navigator.clipboard.writeText(win.examplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-white shadow-sm">
      <div className="flex items-start gap-3 p-4">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pond text-xs font-bold text-leaf-dark">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground">{win.title}</p>
              <div className="mt-1 flex items-center gap-2">
                {toolUrl ? (
                  <a
                    href={toolUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-leaf hover:text-leaf-dark hover:underline"
                  >
                    {win.tool} ↗
                  </a>
                ) : (
                  <span className="text-xs font-semibold text-leaf">
                    {win.tool}
                  </span>
                )}
                <span className="text-xs text-foreground/50">
                  {win.toolCost}
                </span>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              {showPrompt && (
                <button
                  onClick={copyPrompt}
                  className="rounded-lg bg-pond/60 px-2.5 py-1 text-xs font-semibold text-leaf-dark transition-colors hover:bg-pond"
                  title="Copy prompt"
                >
                  {copied ? "Copied!" : "Copy prompt"}
                </button>
              )}
              <button
                onClick={() => setExpanded(!expanded)}
                className="rounded-lg p-1.5 text-foreground/40 transition-colors hover:bg-pond/40 hover:text-foreground/70"
                aria-label={expanded ? "Collapse" : "Expand"}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`transition-transform ${expanded ? "rotate-180" : ""}`}
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-foreground/5 px-4 pb-4 pt-3">
          <p className="mb-2 text-sm leading-relaxed text-foreground/70">
            {win.why}
          </p>
          <div className="rounded-xl bg-pond-light p-3">
            <p className="text-xs font-semibold text-leaf-dark">
              How to start
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
                <p key={i}>
                  {/^\d+\.\s/.test(step) ? step : `${i + 1}. ${step}`}
                </p>
              ))}
            </div>
          </div>
          {showPrompt && (
            <div className="mt-2 rounded-xl bg-cream p-3">
              <p className="text-xs font-semibold text-bark">
                Try this prompt:
              </p>
              <p className="mt-1 text-sm italic leading-relaxed text-foreground/70">
                &ldquo;{win.examplePrompt}&rdquo;
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ResultsSummary({
  classId,
  summary,
  quickWins,
  onReviewAnswers,
}: ResultsSummaryProps) {
  const character = CHARACTER_CLASSES.find((c) => c.id === classId);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailSubmitting(true);
    setEmailError("");

    try {
      const res = await fetch("https://formspree.io/f/xnjozkow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, source: "results" }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setEmailSubmitted(true);
    } catch {
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setEmailSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <CharacterImage classId={classId} size={100} className="mb-3" />
      <h2 className="mb-2 text-xl font-extrabold text-leaf-dark">
        {character?.name}
      </h2>
      <p className="mb-6 max-w-md text-center text-sm leading-relaxed text-foreground/80">
        {summary}
      </p>

      <div className="mb-6 w-full">
        <h3 className="mb-3 text-center text-base font-bold text-foreground">
          Your Quick Wins
        </h3>
        <div className="flex flex-col gap-2">
          {quickWins.map((win, i) => (
            <QuickWinRow key={i} win={win} index={i} />
          ))}
        </div>
      </div>

      <button
        onClick={onReviewAnswers}
        className="mb-8 rounded-2xl border-2 border-leaf/20 bg-white px-6 py-3 text-sm font-semibold text-leaf shadow-sm transition-all hover:border-leaf/40 hover:shadow-md"
      >
        Review Your Answers
      </button>

      <div className="w-full max-w-sm text-center">
        <h3 className="mb-1 text-base font-bold text-leaf-dark">
          Want these sent to your inbox?
        </h3>
        <p className="mb-4 text-sm text-foreground/60">
          We&apos;ll send your profile, quick wins, and prompts. No spam.
        </p>

        {emailSubmitted ? (
          <p className="text-sm font-semibold text-leaf-dark">
            You&apos;re on the list! We&apos;ll send your results soon.
          </p>
        ) : (
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="rounded-2xl border-2 border-foreground/10 bg-white px-5 py-3 text-base text-foreground outline-none transition-all placeholder:text-foreground/30 focus:border-leaf/40 focus:shadow-sm"
            />
            {emailError && (
              <p className="text-sm text-red-600">{emailError}</p>
            )}
            <button
              type="submit"
              disabled={emailSubmitting}
              className="rounded-2xl bg-leaf px-8 py-3 text-base font-bold text-white shadow-md transition-all hover:bg-leaf-dark hover:shadow-lg disabled:opacity-60"
            >
              {emailSubmitting ? "Sending..." : "Send My Results"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
