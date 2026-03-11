"use client";

import type { AIOpportunity } from "@/types";

interface OpportunityCardProps {
  opportunity: AIOpportunity;
  index: number;
}

export default function OpportunityCard({
  opportunity,
  index,
}: OpportunityCardProps) {
  return (
    <div
      className="rounded-3xl bg-white p-6 shadow-md"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h3 className="mb-2 text-lg font-bold text-leaf-dark">
        {opportunity.title}
      </h3>
      <p className="text-sm leading-relaxed text-foreground/60">
        {opportunity.description}
      </p>
    </div>
  );
}
