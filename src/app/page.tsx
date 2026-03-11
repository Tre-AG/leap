import Image from "next/image";
import Link from "next/link";

const characters = [
  { src: "/characters/Student.png", alt: "Student", label: "Student" },
  { src: "/characters/Professional.png", alt: "Professional", label: "Pro" },
  { src: "/characters/Entrepreneur.png", alt: "Entrepreneur", label: "Founder" },
  { src: "/characters/Parent.png", alt: "Parent", label: "Parent" },
  { src: "/characters/Creative.png", alt: "Creative", label: "Creative" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      {/* Floating background accents */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-pond/30" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-pond/20" />
        <div className="absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-lily/10" />
        <div className="absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full bg-lily-light/10" />
      </div>

      <main className="relative z-10 flex max-w-lg flex-col items-center text-center">
        {/* Title */}
        <h1 className="mb-3 text-5xl font-extrabold tracking-tight text-leaf-dark sm:text-6xl">
          Leap
        </h1>
        <p className="mb-2 text-lg font-medium text-foreground/70">
          Discover how AI can actually help you.
        </p>
        <p className="mb-10 text-base text-foreground/50">
          No jargon. No tech knowledge required.
        </p>

        {/* Character lineup with square backgrounds */}
        <div className="mb-10 flex items-center justify-center gap-3 sm:gap-4">
          {characters.map((char, i) => (
            <div
              key={char.alt}
              className="group flex flex-col items-center"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-2 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg sm:h-24 sm:w-24">
                <Image
                  src={char.src}
                  alt={char.alt}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain drop-shadow-sm sm:h-20 sm:w-20"
                />
              </div>
              <span className="text-xs font-semibold text-foreground/40">
                {char.label}
              </span>
            </div>
          ))}
        </div>

        {/* Description card */}
        <div className="mb-8 rounded-2xl bg-white/60 px-6 py-5 shadow-sm backdrop-blur-sm">
          <p
            className="text-base leading-relaxed text-foreground/60"
            style={{ textWrap: "balance" }}
          >
            Take a 5-minute journey. Answer a few questions about your life.
            Get personalized recommendations for tools that save you real time.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/select"
          className="rounded-2xl bg-leaf px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-leaf-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
        >
          Get Started
        </Link>

        <p className="mt-6 text-sm text-foreground/30">
          Free. Takes about 5 minutes.
        </p>
      </main>
    </div>
  );
}
