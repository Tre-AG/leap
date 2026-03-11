"use client";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full px-6 py-3">
      <div className="h-2 w-full rounded-full bg-pond">
        <div
          className="h-2 rounded-full bg-leaf transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-1 text-right text-xs text-foreground/40">
        {current + 1} of {total}
      </p>
    </div>
  );
}
