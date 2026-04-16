"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGame } from "@/context/GameContext";
import { getScenarios, getFlavors, getIntro, getInteractiveConfig, getBackgroundImage } from "@/lib/data";
import ProgressBar from "@/components/ProgressBar";
import PageTransition from "@/components/PageTransition";
import IntroScreen from "@/components/IntroScreen";
import ScenarioScreen from "@/components/ScenarioScreen";
import FlavorScreen from "@/components/FlavorScreen";
import ToolGrid from "@/components/interactive/ToolGrid";
import Responsibilities from "@/components/interactive/Responsibilities";
import TimeDrains from "@/components/interactive/TimeDrains";
import Wishlist from "@/components/interactive/Wishlist";
import Readiness from "@/components/interactive/Readiness";

export default function PlayPage() {
  const router = useRouter();
  const {
    state,
    recordScenarioChoice,
    recordFlavorChoice,
    setTools,
    setResponsibilities,
    setTimeDrains,
    setWishlist,
    setTechComfort,
    setAiToolsUsed,
    setTimeWillingness,
    nextStep,
    prevStep,
    totalSteps,
  } = useGame();

  const { characterClass, currentStep, steps, isComplete } = state;

  // Redirect if no class selected
  useEffect(() => {
    if (!characterClass) {
      router.push("/");
    }
  }, [characterClass, router]);

  // Navigate to results when complete
  useEffect(() => {
    if (isComplete) {
      router.push("/results");
    }
  }, [isComplete, router]);

  if (!characterClass) return null;

  const scenarios = getScenarios(characterClass);
  const flavors = getFlavors(characterClass);
  const intro = getIntro(characterClass);
  const config = getInteractiveConfig();
  const backgroundImage = getBackgroundImage(characterClass);
  const step = steps[currentStep];

  const renderStep = () => {
    if (step.type === "intro") {
      return (
        <IntroScreen
          key="intro"
          intro={intro}
          classId={characterClass}
          onContinue={nextStep}
        />
      );
    }

    if (step.type === "scenario" && step.index !== undefined) {
      const scenario = scenarios[step.index];
      return (
        <ScenarioScreen
          key={scenario.id}
          scenario={scenario}
          classId={characterClass}
          onChoice={(choiceId, tags) => {
            recordScenarioChoice(scenario.id, choiceId, tags);
            nextStep();
          }}
          onBack={currentStep > 0 ? prevStep : undefined}
          backgroundImage={backgroundImage}
        />
      );
    }

    if (step.type === "flavor" && step.index !== undefined) {
      const flavor = flavors[step.index];
      return (
        <FlavorScreen
          key={flavor.id}
          flavor={flavor}
          classId={characterClass}
          onChoice={(choiceId) => {
            recordFlavorChoice(flavor.id, choiceId);
            nextStep();
          }}
          onBack={currentStep > 0 ? prevStep : undefined}
          backgroundImage={backgroundImage}
        />
      );
    }

    if (step.type === "interactive") {
      switch (step.interactiveScreen) {
        case "tools":
          return (
            <ToolGrid
              tools={config.tools[characterClass]}
              onSubmit={(selected) => {
                setTools(selected);
                nextStep();
              }}
              onBack={currentStep > 0 ? prevStep : undefined}
            />
          );
        case "responsibilities":
          return (
            <Responsibilities
              options={config.responsibilities[characterClass]}
              onSubmit={(selected) => {
                setResponsibilities(selected);
                nextStep();
              }}
              onBack={currentStep > 0 ? prevStep : undefined}
            />
          );
        case "timeDrains":
          return (
            <TimeDrains
              options={config.timeDrains[characterClass]}
              max={config.maxTimeDrains}
              onSubmit={(ranked) => {
                setTimeDrains(ranked);
                nextStep();
              }}
              onBack={currentStep > 0 ? prevStep : undefined}
            />
          );
        case "wishlist":
          return (
            <Wishlist
              options={config.wishlist[characterClass]}
              max={config.maxWishlist}
              onSubmit={(ranked) => {
                setWishlist(ranked);
                nextStep();
              }}
              onBack={currentStep > 0 ? prevStep : undefined}
            />
          );
        case "readiness":
          return (
            <Readiness
              config={config.readiness}
              onSubmit={(techComfort, aiToolsUsed, timeWillingness) => {
                setTechComfort(techComfort);
                setAiToolsUsed(aiToolsUsed);
                setTimeWillingness(timeWillingness);
                nextStep();
              }}
              onBack={currentStep > 0 ? prevStep : undefined}
            />
          );
      }
    }

    return null;
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Floating background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-pond/30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pond/20" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <ProgressBar current={currentStep} total={totalSteps} />
        <div className="flex flex-1 flex-col items-center justify-center py-8">
          <PageTransition stepKey={currentStep}>
            {renderStep()}
          </PageTransition>
        </div>
      </div>
    </div>
  );
}
