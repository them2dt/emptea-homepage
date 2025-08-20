import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center pt-safe-top pb-6 md:pb-8 px-4 md:px-6 bg-obsidian bg-[linear-gradient(rgba(221,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(221,255,0,0.1)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] relative overflow-hidden border-b border-white/10">
      <div className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-white leading-[1.1] relative z-10 max-w-4xl text-balance">
        Modern software <br className="hidden sm:block" />
        <span className="text-accent relative">built to scale.</span>
      </div>
      <Link
        href="#contact"
        className="inline-flex items-center justify-center font-bold bg-accent text-accent-foreground border border-accent px-6 md:px-8 py-3 md:py-3.5 rounded-full text-sm md:text-base cursor-pointer no-underline transition-all duration-300 ease-in-out relative z-10 overflow-hidden hover:opacity-90 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian"
      >
        Start now
      </Link>
    </section>
  );
};

export default Hero;
