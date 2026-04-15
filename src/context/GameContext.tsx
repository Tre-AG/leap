"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type {
  CharacterClass,
  UserProfile,
  PlayStep,
  InteractiveScreen,
  Recommendations,
} from "@/types";
import { getScenarios, getFlavors } from "@/lib/data";

interface GameState {
  characterClass: CharacterClass | null;
  currentStep: number;
  steps: PlayStep[];
  profile: UserProfile;
  isComplete: boolean;
  recommendations: Recommendations | null;
}

interface GameContextType {
  state: GameState;
  setCharacterClass: (cls: CharacterClass) => void;
  recordScenarioChoice: (
    scenarioId: string,
    choiceId: string,
    tags: string[]
  ) => void;
  recordFlavorChoice: (flavorId: string, choiceId: string) => void;
  setTools: (tools: string[]) => void;
  setResponsibilities: (responsibilities: string[]) => void;
  setTimeDrains: (drains: string[]) => void;
  setWishlist: (wishlist: string[]) => void;
  setTechComfort: (level: number) => void;
  setAiUsage: (usage: string) => void;
  setTimeWillingness: (willingness: string) => void;
  setRecommendations: (recs: Recommendations) => void;
  nextStep: () => void;
  prevStep: () => void;
  undoComplete: () => void;
  totalSteps: number;
  reset: () => void;
}

const emptyProfile: UserProfile = {
  characterClass: "professional",
  scenarioChoices: [],
  flavorChoices: [],
  tools: [],
  responsibilities: [],
  timeDrains: [],
  wishlist: [],
  techComfort: 3,
  aiUsage: "",
  timeWillingness: "",
};

// Build the ordered play sequence dynamically from scenario/flavor data
function buildSteps(classId: CharacterClass): PlayStep[] {
  const steps: PlayStep[] = [];
  const scenarios = getScenarios(classId);
  const flavors = getFlavors(classId);

  // Intro screen
  steps.push({ type: "intro" });

  // Map afterScenario (1-indexed) -> flavor index for insertion
  const flavorByScenario = new Map<number, number>();
  flavors.forEach((f, i) => {
    flavorByScenario.set(f.afterScenario, i);
  });

  // Interleave scenarios and flavors based on afterScenario values
  for (let i = 0; i < scenarios.length; i++) {
    steps.push({ type: "scenario", index: i });
    const scenarioNum = i + 1; // afterScenario is 1-indexed
    if (flavorByScenario.has(scenarioNum)) {
      steps.push({ type: "flavor", index: flavorByScenario.get(scenarioNum)! });
    }
  }

  // Interactive screens
  const screens: InteractiveScreen[] = [
    "tools",
    "responsibilities",
    "timeDrains",
    "wishlist",
    "readiness",
  ];
  for (const screen of screens) {
    steps.push({ type: "interactive", interactiveScreen: screen });
  }

  return steps;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>({
    characterClass: null,
    currentStep: 0,
    steps: [],
    profile: { ...emptyProfile },
    isComplete: false,
    recommendations: null,
  });

  const setCharacterClass = useCallback((cls: CharacterClass) => {
    const steps = buildSteps(cls);
    setState((prev) => ({
      ...prev,
      characterClass: cls,
      steps,
      profile: { ...prev.profile, characterClass: cls },
    }));
  }, []);

  const recordScenarioChoice = useCallback(
    (scenarioId: string, choiceId: string, tags: string[]) => {
      setState((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          scenarioChoices: [
            ...prev.profile.scenarioChoices,
            { scenarioId, choiceId, tags },
          ],
        },
      }));
    },
    []
  );

  const recordFlavorChoice = useCallback(
    (flavorId: string, choiceId: string) => {
      setState((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          flavorChoices: [
            ...prev.profile.flavorChoices,
            { flavorId, choiceId },
          ],
        },
      }));
    },
    []
  );

  const setTools = useCallback((tools: string[]) => {
    setState((prev) => ({
      ...prev,
      profile: { ...prev.profile, tools },
    }));
  }, []);

  const setResponsibilities = useCallback((responsibilities: string[]) => {
    setState((prev) => ({
      ...prev,
      profile: { ...prev.profile, responsibilities },
    }));
  }, []);

  const setTimeDrains = useCallback((timeDrains: string[]) => {
    setState((prev) => ({
      ...prev,
      profile: { ...prev.profile, timeDrains },
    }));
  }, []);

  const setWishlist = useCallback((wishlist: string[]) => {
    setState((prev) => ({
      ...prev,
      profile: { ...prev.profile, wishlist },
    }));
  }, []);

  const setTechComfort = useCallback((techComfort: number) => {
    setState((prev) => ({
      ...prev,
      profile: { ...prev.profile, techComfort },
    }));
  }, []);

  const setAiUsage = useCallback((aiUsage: string) => {
    setState((prev) => ({
      ...prev,
      profile: { ...prev.profile, aiUsage },
    }));
  }, []);

  const setTimeWillingness = useCallback((timeWillingness: string) => {
    setState((prev) => ({
      ...prev,
      profile: { ...prev.profile, timeWillingness },
    }));
  }, []);

  const setRecommendations = useCallback((recommendations: Recommendations) => {
    setState((prev) => ({
      ...prev,
      recommendations,
    }));
  }, []);

  const nextStep = useCallback(() => {
    setState((prev) => {
      const next = prev.currentStep + 1;
      if (next >= prev.steps.length) {
        return { ...prev, isComplete: true };
      }
      return { ...prev, currentStep: next };
    });
  }, []);

  const prevStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(0, prev.currentStep - 1),
    }));
  }, []);

  const undoComplete = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isComplete: false,
    }));
  }, []);

  const reset = useCallback(() => {
    setState({
      characterClass: null,
      currentStep: 0,
      steps: [],
      profile: { ...emptyProfile },
      isComplete: false,
      recommendations: null,
    });
  }, []);

  return (
    <GameContext.Provider
      value={{
        state,
        setCharacterClass,
        recordScenarioChoice,
        recordFlavorChoice,
        setTools,
        setResponsibilities,
        setTimeDrains,
        setWishlist,
        setTechComfort,
        setAiUsage,
        setTimeWillingness,
        setRecommendations,
        nextStep,
        prevStep,
	undoComplete,
        totalSteps: state.steps.length,
        reset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within a GameProvider");
  return ctx;
}
