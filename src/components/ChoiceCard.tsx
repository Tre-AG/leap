"use client";

interface ChoiceCardProps {
  text: string;
  selected?: boolean;
  onClick: () => void;
  index: number;
}

export default function ChoiceCard({
  text,
  selected,
  onClick,
  index,
}: ChoiceCardProps) {
  return (
    <button
      onClick={onClick}
      className={`choice-card w-full rounded-2xl border-2 px-5 py-4 text-left text-base leading-relaxed transition-all ${
        selected
          ? "choice-card-selected border-leaf bg-pond-light"
          : "border-transparent bg-white hover:border-pond"
      }`}
      style={{
        boxShadow: selected
          ? "0 0 0 2px var(--leaf)"
          : "0 2px 8px var(--shadow)",
        animationDelay: `${index * 60}ms`,
      }}
    >
      {text}
    </button>
  );
}
