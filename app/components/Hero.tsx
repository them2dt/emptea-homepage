import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center pt-safe-top pb-6 md:pb-8 px-4 md:px-6 bg-obsidian relative overflow-hidden border-b border-white/10" style={{
        backgroundImage: `linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)`,
        backgroundSize: '2.5rem 2.5rem'
      }}>
      <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-white leading-[1.1] relative z-10 max-w-4xl text-balance">
        Moderne Software <br className="hidden sm:block" />
        <span className="text-accent relative">gebaut zum Skalieren.</span>
      </div>
      <Link
        href="#contact"
        className="inline-flex items-center justify-center font-bold bg-accent text-accent-foreground border border-accent px-6 md:px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base cursor-pointer no-underline transition-all duration-300 ease-in-out relative z-10 overflow-hidden hover:opacity-90 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian"
      >
        Jetzt starten
      </Link>
    </section>
  );
};

export default Hero;
