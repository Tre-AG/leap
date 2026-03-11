"use client";

export default function NextSteps() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="mb-3 text-2xl font-bold text-leaf-dark">
        What&apos;s Next?
      </h2>
      <p className="mb-6 max-w-sm text-base leading-relaxed text-foreground/60">
        These recommendations are just the beginning. Want help getting started,
        or have questions about any of these tools?
      </p>
      <a
        href="mailto:hello@taketheleap.ai"
        className="rounded-2xl bg-leaf px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-leaf-dark hover:shadow-xl"
      >
        Get in Touch
      </a>
      <p className="mt-4 text-sm text-foreground/30">
        No pressure. Just an open door.
      </p>
    </div>
  );
}
