
interface App {
  id: string;
  name: string;
  tagline: string;
  color: string;
}

const APPS: App[] = [
  { id: "rise", name: "Rise", tagline: "Achieve goals.", color: "bg-neutral-900/90" },
  { id: "penpal", name: "Penpal", tagline: "Connect deeply.", color: "bg-blue-600/90" },
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

        <section className="flex w-full max-w-[420px] flex-col gap-8 md:w-auto">
          {APPS.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </section>
      </main>
    </div>
  );
}

function AppCard({ app }: { app: App }) {
  return (
    <article className="flex gap-5">
      <div className="relative flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-[24px] p-1 shadow-[0px_0px_2px_rgba(0,0,0,0.12),0px_12px_32px_rgba(0,0,0,0.08)]">
        <span className="pointer-events-none absolute inset-0 rounded-[24px] bg-[rgba(140,140,140,0.25)]" />
        <span className="pointer-events-none absolute inset-0 rounded-[24px] bg-white/60 backdrop-blur-md" />
        <div className="relative h-[120px] w-[120px] overflow-hidden rounded-[20px]">
          {/* Icon will go here */}
        </div>
        <span className="pointer-events-none absolute inset-0 rounded-[24px] shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.9),inset_2px_2px_0.5px_-2px_rgba(38,38,38,0.45),inset_-2px_-2px_0.5px_-2px_rgba(38,38,38,0.35),inset_0px_0px_0px_1px_rgba(166,166,166,1),inset_0px_0px_8px_rgba(242,242,242,1)]" />
      </div>

      <div className="flex flex-col justify-center gap-3">
        <div className="space-y-1">
          <p className="text-2xl font-semibold tracking-[-0.05em] text-black">
            {app.name}
          </p>
          <p className="text-lg tracking-[-0.04em] text-neutral-400">
            {app.tagline}
          </p>
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

