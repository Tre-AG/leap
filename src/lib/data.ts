import type {
  CharacterClass,
  Scenario,
  FlavorMoment,
  InteractiveConfig,
  ToolsFile,
  Tool,
} from "@/types";

import professionalScenarios from "../../data/scenarios/professional.json";
import studentScenarios from "../../data/scenarios/student.json";
import entrepreneurScenarios from "../../data/scenarios/entrepreneur.json";
import parentScenarios from "../../data/scenarios/parent.json";
import creativeScenarios from "../../data/scenarios/creative.json";
import flavorsData from "../../data/flavors.json";
import interactiveData from "../../data/interactive.json";
import toolsData from "../../data/tools.json";

const scenarioMap: Record<CharacterClass, { intro: string; backgroundImage?: string; scenarios: Scenario[] }> = {
  professional: professionalScenarios,
  student: studentScenarios,
  entrepreneur: entrepreneurScenarios,
  parent: parentScenarios,
  creative: creativeScenarios,
};

export function getScenarios(classId: CharacterClass): Scenario[] {
  return scenarioMap[classId].scenarios;
}

export function getIntro(classId: CharacterClass): string {
  return scenarioMap[classId].intro;
}

export function getBackgroundImage(classId: CharacterClass): string | undefined {
  return scenarioMap[classId].backgroundImage;
}

export function getFlavors(classId: CharacterClass): FlavorMoment[] {
  return (flavorsData as Record<string, FlavorMoment[]>)[classId] || [];
}

export function getInteractiveConfig(): InteractiveConfig {
  return interactiveData as InteractiveConfig;
}

export function getTools(): Tool[] {
  return (toolsData as ToolsFile).tools;
}
