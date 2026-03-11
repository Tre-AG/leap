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
} from "@/types";

interface GameState {
  characterClass: CharacterClass | null;
  currentStep: number;
  steps: PlayStep[];
  profile: UserProfile;
  isComplete: boolean;
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
  nextStep: () => void;
  prevStep: () => void;
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

// Build the ordered play sequence: scenarios with flavor moments interspersed
function buildSteps(): PlayStep[] {
  const steps: PlayStep[] = [];

  // Scenarios 1-2
  steps.push({ type: "scenario", index: 0 });
  steps.push({ type: "scenario", index: 1 });
  // Flavor 1 (afterScenario: 2)
  steps.push({ type: "flavor", index: 0 });
  // Scenarios 3-4
  steps.push({ type: "scenario", index: 2 });
  steps.push({ type: "scenario", index: 3 });
  // Flavor 2 (afterScenario: 4)
  steps.push({ type: "flavor", index: 1 });
  // Scenarios 5-6
  steps.push({ type: "scenario", index: 4 });
  steps.push({ type: "scenario", index: 5 });
  // Flavor 3 (afterScenario: 6)
  steps.push({ type: "flavor", index: 2 });
  // Scenarios 7-8
  steps.push({ type: "scenario", index: 6 });
  steps.push({ type: "scenario", index: 7 });

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
  const steps = buildSteps();

  const [state, setState] = useState<GameState>({
    characterClass: null,
    currentStep: 0,
    steps,
    profile: { ...emptyProfile },
    isComplete: false,
  });

  const setCharacterClass = useCallback((cls: CharacterClass) => {
    setState((prev) => ({
      ...prev,
      characterClass: cls,
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

  const reset = useCallback(() => {
    setState({
      characterClass: null,
      currentStep: 0,
      steps,
      profile: { ...emptyProfile },
      isComplete: false,
    });
  }, [steps]);

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
        nextStep,
        prevStep,
        totalSteps: steps.length,
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
