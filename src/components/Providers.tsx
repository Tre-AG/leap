"use client";

import { GameProvider } from "@/context/GameContext";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <GameProvider>{children}</GameProvider>;
}
