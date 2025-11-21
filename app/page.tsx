import Image from "next/image";



const APPS: { id: string; tone: "ghost" | "muted" | "focus" }[] = [
  { id: "rise-ghost-top", tone: "ghost" },
  { id: "rise-muted-upper", tone: "muted" },
  { id: "rise-focus", tone: "focus" },
  { id: "rise-muted-lower", tone: "muted" },
  { id: "rise-ghost-bottom", tone: "ghost" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-white px-6 py-16 text-neutral-900">
      <main className="flex w-full max-w-[1100px] flex-col items-center gap-16 md:flex-row md:items-center md:justify-between md:gap-28">
        <section className="flex w-full flex-col items-center gap-6 text-center md:w-auto md:items-end md:text-right">
          <h1 className="text-[clamp(3.5rem,12vw,6rem)] font-semibold leading-none tracking-[-0.05em] text-black/10">
            emptea.xyz
          </h1>
          <p className="text-sm tracking-[0.3em] text-black/30">by Maru</p>
        </section>

        <section className="relative flex w-full max-w-[420px] flex-col items-start gap-10 md:w-auto">
          <div className="absolute -top-16 right-2">
            <ScrollControl direction="up" />
          </div>

          <div className="flex flex-col gap-10">
            {APPS.map((app) => (
              <AppCard key={app.id} tone={app.tone} />
            ))}
          </div>

          <div className="absolute -bottom-16 right-2">
            <ScrollControl direction="down" />
          </div>
        </section>
      </main>
    </div>
  );
}

type CardTone = (typeof APPS)[number]["tone"];

function AppCard({ tone }: { tone: CardTone }) {
  const opacityClass =
    tone === "focus" ? "opacity-100" : tone === "muted" ? "opacity-70" : "opacity-40";
  const titleClass =
    tone === "focus" ? "text-black" : tone === "muted" ? "text-neutral-500" : "text-neutral-400";
  const subtitleClass =
    tone === "focus"
      ? "text-neutral-400"
      : tone === "muted"
        ? "text-neutral-400/80"
        : "text-neutral-300/80";

  return (
    <article className={`flex gap-5 transition-opacity duration-500 ${opacityClass}`}>
      <div className="relative flex h-32 w-32 items-center justify-center rounded-[24px] p-1 shadow-[0px_0px_2px_rgba(0,0,0,0.12),0px_12px_32px_rgba(0,0,0,0.08)]">
        <span className="pointer-events-none absolute inset-0 rounded-[24px] bg-[rgba(140,140,140,0.25)]" />
        <span
          className={`pointer-events-none absolute inset-0 rounded-[24px] backdrop-blur-md ${
            tone === "focus" ? "bg-neutral-900/90" : "bg-white/60"
          }`}
        />
        <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[20px]">
 {/*          <Image
            src={APP_ICON_URL}
            alt=""
            fill
            sizes="120px"
            className={`object-cover ${tone === "focus" ? "" : "opacity-80"}`}
            priority={tone === "focus"}
          /> */}
        </div>
        <span className="pointer-events-none absolute inset-0 rounded-[24px] shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.9),inset_2px_2px_0.5px_-2px_rgba(38,38,38,0.45),inset_-2px_-2px_0.5px_-2px_rgba(38,38,38,0.35),inset_0px_0px_0px_1px_rgba(166,166,166,1),inset_0px_0px_8px_rgba(242,242,242,1)]" />
      </div>

      <div className="flex flex-col justify-center gap-3">
        <div className="space-y-1">
          <p className={`text-2xl font-semibold tracking-[-0.05em] ${titleClass}`}>Rise</p>
          <p className={`text-lg tracking-[-0.04em] ${subtitleClass}`}>Achieve goals.</p>
        </div>
        <div className="flex gap-2 text-sm font-semibold tracking-[-0.04em] text-black">
          <GlassLink label="Apple" />
          <GlassLink label="Android" />
        </div>
      </div>
    </article>
  );
}

function GlassLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      className="relative inline-flex min-w-[96px] items-center justify-center overflow-hidden rounded-full px-6 py-3 shadow-[0px_0px_2px_rgba(0,0,0,0.12),0px_8px_18px_rgba(0,0,0,0.08)]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[rgba(140,140,140,0.25)]" />
      <span className="pointer-events-none absolute inset-0 rounded-full bg-white/70 backdrop-blur-md" />
      <span className="relative z-10 text-[0.95rem] text-black">{label}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.9),inset_2px_2px_0.5px_-2px_rgba(38,38,38,0.35),inset_-2px_-2px_0.5px_-2px_rgba(38,38,38,0.35),inset_0px_0px_0px_1px_rgba(166,166,166,1),inset_0px_0px_6px_rgba(242,242,242,1)]" />
    </a>
  );
}

function ScrollControl({ direction }: { direction: "up" | "down" }) {
  const rotationClass = direction === "down" ? "rotate-180" : "";

  return (
    <button
      type="button"
      aria-label={direction === "up" ? "Scroll up" : "Scroll down"}
      className="relative inline-flex h-9 w-14 items-center justify-center overflow-hidden rounded-full shadow-[0px_0px_2px_rgba(0,0,0,0.12),0px_8px_18px_rgba(0,0,0,0.08)]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[rgba(140,140,140,0.25)]" />
      <span className="pointer-events-none absolute inset-0 rounded-full bg-white/70 backdrop-blur-md" />
      <svg
        viewBox="0 0 20 12"
        className={`relative z-10 h-3 w-5 text-neutral-500 ${rotationClass}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 9.25 10 1.75 18 9.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.9),inset_2px_2px_0.5px_-2px_rgba(38,38,38,0.35),inset_-2px_-2px_0.5px_-2px_rgba(38,38,38,0.35),inset_0px_0px_0px_1px_rgba(166,166,166,1),inset_0px_0px_6px_rgba(242,242,242,1)]" />
    </button>
  );
}
