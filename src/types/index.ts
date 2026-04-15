export type CharacterClass =
  | "student"
  | "professional"
  | "entrepreneur"
  | "parent"
  | "creative";

export interface Choice {
  id: string;
  text: string;
  tags?: string[];
  reaction?: string;
}

export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  prompt: string;
  choices: Choice[];
  frogPose?: string;
}

export interface ScenarioFile {
  classId: CharacterClass;
  intro: string;
  backgroundImage?: string;
  scenarios: Scenario[];
}

export interface FlavorMoment {
  id: string;
  afterScenario: number;
  title: string;
  prompt: string;
  choices: Choice[];
  frogPose?: string;
}

export interface ReadinessConfig {
  techComfort: {
    min: number;
    max: number;
    labelLow: string;
    labelHigh: string;
    showNumbers?: boolean;
  };
  aiUsage: string[];
  timeWillingness: string[];
}

export interface InteractiveConfig {
  tools: Record<CharacterClass, string[]>;
  responsibilities: Record<CharacterClass, string[]>;
  timeDrains: Record<CharacterClass, string[]>;
  maxTimeDrains: number;
  wishlist: Record<CharacterClass, string[]>;
  maxWishlist: number;
  readiness: ReadinessConfig;
}

export interface ToolCost {
  free: boolean;
  paid: string;
}

export interface ToolUsageMethods {
  promptFormulas: string[];
  techniques: string[];
  commonMistakes: string[];
  quickStart: string;
}

export interface Tool {
  id: string;
  name: string;
  provider: string;
  category: string;
  cost: ToolCost;
  ecosystem: string[];
  skillFloor: string;
  maturity: string;
  bestFor: string[];
  caveats: string[];
  teachingPoints: string[];
  usageMethods: ToolUsageMethods;
}

export interface ToolsFile {
  lastUpdated: string;
  tools: Tool[];
}

// User's accumulated choices during a playthrough
export interface UserProfile {
  characterClass: CharacterClass;
  scenarioChoices: { scenarioId: string; choiceId: string; tags: string[] }[];
  flavorChoices: { flavorId: string; choiceId: string }[];
  tools: string[];
  responsibilities: string[];
  timeDrains: string[]; // ordered by rank
  wishlist: string[]; // ordered by rank
  techComfort: number;
  aiUsage: string;
  timeWillingness: string;
}

// Step types for the play flow
export type StepType = "intro" | "scenario" | "flavor" | "interactive";
export type InteractiveScreen =
  | "tools"
  | "responsibilities"
  | "timeDrains"
  | "wishlist"
  | "readiness";

export interface PlayStep {
  type: StepType;
  index?: number; // scenario or flavor index
  interactiveScreen?: InteractiveScreen;
}

// API response types
export interface QuickWin {
  title: string;
  why: string;
  tool: string;
  toolCost: string;
  howToStart: string;
  examplePrompt?: string;
}

export interface AIOpportunity {
  title: string;
  description: string;
}

export interface Recommendations {
  profileSummary: string;
  opportunities: AIOpportunity[];
  quickWins: QuickWin[];
}

export const CHARACTER_CLASSES: {
  id: CharacterClass;
  name: string;
  description: string;
  image: string;
}[] = [
  {
    id: "student",
    name: "The Student",
    description: "Learning, studying, building skills",
    image: "/characters/Student.png",
  },
  {
    id: "professional",
    name: "The Professional",
    description: "Working a job, building a career",
    image: "/characters/Professional.png",
  },
  {
    id: "entrepreneur",
    name: "The Entrepreneur",
    description: "Building something of your own",
    image: "/characters/Entrepreneur.png",
  },
  {
    id: "parent",
    name: "The Parent",
    description: "Managing a household, juggling everything",
    image: "/characters/Parent.png",
  },
  {
    id: "creative",
    name: "The Creative",
    description: "Making things, expressing ideas",
    image: "/characters/Creative.png",
  },
];
