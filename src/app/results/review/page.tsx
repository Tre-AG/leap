"use client";

import { useRouter } from "next/navigation";
import { useGame } from "@/context/GameContext";
import { getScenarios, getFlavors } from "@/lib/data";
import CharacterImage from "@/components/CharacterImage";
import { CHARACTER_CLASSES } from "@/types";
import type { Choice } from "@/types";

interface AnswerCardProps {
  title: string;
  prompt?: string;
  choices: Choice[];
  selectedId: string;
}

function AnswerCard({ title, prompt, choices, selectedId }: AnswerCardProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="mb-1 text-xs font-semibold text-leaf-dark">{title}</p>
      {prompt && (
        <p className="mb-2 text-sm leading-relaxed text-foreground/70">{prompt}</p>
      )}
      <div className="flex flex-col gap-1.5">
        {choices.map((c) => {
          const isSelected = c.id === selectedId;
          return (
            <div
              key={c.id}
              className={`rounded-xl px-3 py-2 text-sm ${
                isSelected
                  ? "bg-pond font-semibold text-leaf-dark"
                  : "text-foreground/40"
              }`}
            >
              {c.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface SelectionCardProps {
  title: string;
  items: string[];
  ordered?: boolean;
}

function SelectionCard({ title, items, ordered }: SelectionCardProps) {
  if (items.length === 0) return null;
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="mb-2 text-xs font-semibold text-leaf-dark">{title}</p>
      {ordered ? (
        <ol className="list-inside list-decimal text-sm text-foreground/80">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      ) : (
        <p className="text-sm text-foreground/80">{items.join(", ")}</p>
      )}
    </div>
  );
}

export default function ReviewPage() {
  const router = useRouter();
  const { state } = useGame();
  const { characterClass, profile } = state;

  if (!characterClass) {
    router.push("/");
    return null;
  }

  const scenarios = getScenarios(characterClass);
  const flavors = getFlavors(characterClass);
  const character = CHARACTER_CLASSES.find((c) => c.id === characterClass);

  // Build a unified list: scenarios and flavors interleaved by afterScenario,
  // then interactive selections at the end
  const flavorByAfter = new Map(flavors.map((f) => [f.afterScenario, f]));

  type ReviewItem =
    | { type: "scenario"; scenarioIndex: number }
    | { type: "flavor"; flavorId: string }
    | { type: "selection" };

  const items: ReviewItem[] = [];
  for (let i = 0; i < scenarios.length; i++) {
    items.push({ type: "scenario", scenarioIndex: i });
    const scenarioNum = i + 1;
    if (flavorByAfter.has(scenarioNum)) {
      items.push({ type: "flavor", flavorId: flavorByAfter.get(scenarioNum)!.id });
    }
  }
  items.push({ type: "selection" });

  return (
    <div className="flex min-h-screen flex-col items-center px-6 py-12">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-pond/30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pond/20" />
      </div>

      <div className="relative z-10 w-full max-w-lg">
        <div className="mb-8 flex flex-col items-center">
          <CharacterImage classId={characterClass} size={80} className="mb-3" />
          <h1 className="text-2xl font-extrabold text-leaf-dark">
            Your Answers
          </h1>
          <p className="mt-1 text-sm text-foreground/60">{character?.name}</p>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item, idx) => {
            if (item.type === "scenario") {
              const scenario = scenarios[item.scenarioIndex];
              const sc = profile.scenarioChoices.find(
                (s) => s.scenarioId === scenario.id
              );
              if (!sc) return null;
              return (
                <AnswerCard
                  key={`scenario-${item.scenarioIndex}`}
                  title={scenario.title}
                  prompt={scenario.prompt}
                  choices={scenario.choices}
                  selectedId={sc.choiceId}
                />
              );
            }

            if (item.type === "flavor") {
              const flavor = flavors.find((f) => f.id === item.flavorId);
              const fc = profile.flavorChoices.find(
                (f) => f.flavorId === item.flavorId
              );
              if (!flavor || !fc) return null;
              return (
                <AnswerCard
                  key={`flavor-${item.flavorId}`}
                  title={flavor.title}
                  prompt={flavor.prompt}
                  choices={flavor.choices}
                  selectedId={fc.choiceId}
                />
              );
            }

            // Interactive selections
            return (
              <div key="selections" className="flex flex-col gap-3">
                <SelectionCard
                  title="Tools You Already Use"
                  items={profile.tools}
                />
                <SelectionCard
                  title="Responsibilities"
                  items={profile.responsibilities}
                />
                <SelectionCard
                  title="Top Time Drains"
                  items={profile.timeDrains}
                  ordered
                />
                <SelectionCard
                  title="Wishlist"
                  items={profile.wishlist}
                  ordered
                />
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="mb-2 text-xs font-semibold text-leaf-dark">
                    Readiness
                  </p>
                  <div className="flex flex-col gap-1 text-sm text-foreground/80">
                    <p>Tech comfort: {profile.techComfort}/5</p>
                    {profile.aiToolsUsed && profile.aiToolsUsed.length > 0 && (
                      <p>AI tools used: {profile.aiToolsUsed.join(", ")}</p>
                    )}
                    {profile.timeWillingness && (
                      <p>Time to invest: {profile.timeWillingness}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => router.push("/results?section=summary")}
            className="rounded-2xl bg-leaf px-8 py-3 text-base font-bold text-white shadow-md transition-all hover:bg-leaf-dark hover:shadow-lg"
          >
            Back to Results
          </button>
        </div>
      </div>
    </div>
  );
}
