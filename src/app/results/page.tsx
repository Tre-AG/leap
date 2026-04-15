"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "@/context/GameContext";
import type { Recommendations } from "@/types";
import CharacterImage from "@/components/CharacterImage";
import ProfileSummary from "@/components/results/ProfileSummary";
import OpportunityCard from "@/components/results/OpportunityCard";
import QuickWinCard from "@/components/results/QuickWinCard";
import NextSteps from "@/components/results/NextSteps";

type ResultsSection = "loading" | "profile" | "opportunities" | "quickWins" | "nextSteps";

async function fetchWithRetry(
  profile: unknown
): Promise<Recommendations> {
  const doFetch = async (): Promise<Recommendations> => {
    const res = await fetch("/api/recommendations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });

    if (!res.ok) throw new Error("Failed to generate recommendations");

    const data = await res.json();
    if (!data || typeof data !== "object" || !Array.isArray(data.opportunities)) {
      throw new Error("Malformed response");
    }
    return data as Recommendations;
  };

  try {
    return await doFetch();
  } catch {
    // Silent auto-retry after 1 second
    await new Promise((r) => setTimeout(r, 1000));
    return await doFetch();
  }
}

export default function ResultsPage() {
  const router = useRouter();
  const { state, reset, undoComplete } = useGame();
  const { characterClass, profile } = state;

  const [recommendations, setRecommendations] =
    useState<Recommendations | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState<ResultsSection>("loading");
  const [quickWinIndex, setQuickWinIndex] = useState(0);
  const fetchAttempted = useRef(false);

  const runFetch = useCallback(async () => {
    setError(null);
    setLoading(true);
    setSection("loading");

    try {
      const data = await fetchWithRetry(profile);
      setRecommendations(data);
      setSection("profile");
    } catch {
      setError(
        "Something went wrong generating your results. This usually resolves on the next try."
      );
    } finally {
      setLoading(false);
    }
  }, [profile]);

  useEffect(() => {
    if (!characterClass) {
      router.push("/");
      return;
    }

    if (!fetchAttempted.current) {
      fetchAttempted.current = true;
      runFetch();
    }
  }, [characterClass, router, runFetch]);

  const handleGoBack = () => {
    undoComplete();
    router.push("/play");
  };

  const handleStartOver = () => {
    reset();
    router.push("/");
  };

  if (!characterClass) return null;

  const sections: ResultsSection[] = [
    "profile",
    "opportunities",
    "quickWins",
    "nextSteps",
  ];

  const currentSectionIndex = sections.indexOf(section);

  const goNext = () => {
    if (section === "quickWins" && recommendations) {
      if (quickWinIndex < recommendations.quickWins.length - 1) {
        setQuickWinIndex((prev) => prev + 1);
        return;
      }
    }
    const next = sections[currentSectionIndex + 1];
    if (next) {
      setSection(next);
      setQuickWinIndex(0);
    }
  };

  const goPrev = () => {
    if (section === "quickWins" && quickWinIndex > 0) {
      setQuickWinIndex((prev) => prev - 1);
      return;
    }
    const prev = sections[currentSectionIndex - 1];
    if (prev) setSection(prev);
  };

  // Loading & error state
  if (section === "loading") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-pond/30" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pond/20" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <CharacterImage
            classId={characterClass}
            size={160}
            className="mb-6 animate-bounce"
          />
          {error ? (
            <>
              <p className="mb-6 max-w-sm text-center text-base text-red-500">
                {error}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={runFetch}
                  className="rounded-2xl bg-leaf px-8 py-3 font-bold text-white shadow-md transition-all hover:bg-leaf-dark hover:shadow-lg"
                >
                  Try again
                </button>
                <button
                  onClick={handleGoBack}
                  className="rounded-2xl bg-white px-8 py-3 font-bold text-foreground/60 shadow-sm transition-all hover:shadow-md"
                >
                  Go back
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="mb-2 text-center text-lg font-bold text-leaf-dark">
                Analyzing your responses...
              </p>
              <p className="text-center text-sm text-foreground/50">
                Your personalized guide is being created.
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  if (!recommendations) return null;

  return (
    <div className="flex min-h-screen flex-col items-center px-6 py-12">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-pond/30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pond/20" />
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {/* Section content */}
        <div className="mb-8 min-h-[400px]">
          {section === "profile" && (
            <ProfileSummary
              classId={characterClass}
              summary={recommendations.profileSummary}
            />
          )}

          {section === "opportunities" && (
            <div>
              <h2 className="mb-6 text-center text-2xl font-extrabold text-leaf-dark">
                Your AI Opportunities
              </h2>
              <div className="flex flex-col gap-4">
                {recommendations.opportunities.map((opp, i) => (
                  <OpportunityCard key={i} opportunity={opp} index={i} />
                ))}
              </div>
            </div>
          )}

          {section === "quickWins" && (
            <div>
              <h2 className="mb-6 text-center text-2xl font-extrabold text-leaf-dark">
                Your Quick Wins
              </h2>
              <QuickWinCard
                win={recommendations.quickWins[quickWinIndex]}
                index={quickWinIndex}
                total={recommendations.quickWins.length}
              />
            </div>
          )}

          {section === "nextSteps" && <NextSteps />}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={goPrev}
            disabled={section === "profile"}
            className={`rounded-xl px-6 py-3 text-sm font-semibold transition-all ${
              section === "profile"
                ? "invisible"
                : "bg-white text-foreground/60 shadow-sm hover:shadow-md"
            }`}
          >
            Back
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {sections.map((s, i) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all ${
                  i === currentSectionIndex
                    ? "w-6 bg-leaf"
                    : i < currentSectionIndex
                      ? "w-2 bg-leaf/40"
                      : "w-2 bg-foreground/10"
                }`}
              />
            ))}
          </div>

          {section === "nextSteps" ? (
            <button
              onClick={handleStartOver}
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-foreground/60 shadow-sm hover:shadow-md"
            >
              Start Over
            </button>
          ) : (
            <button
              onClick={goNext}
              className="rounded-xl bg-leaf px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-leaf-dark hover:shadow-lg"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
