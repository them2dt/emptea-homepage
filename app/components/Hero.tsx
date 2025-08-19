import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] text-center pt-safe-top pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 bg-black bg-[linear-gradient(rgba(255,80,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,80,0,0.1)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] relative overflow-hidden border-b border-white/10">
      <div className="font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 md:mb-8 text-white leading-[1.1] relative z-10 max-w-5xl text-balance">
        Modern software <br className="hidden xs:block" /> 
        <span className="text-orange-500 relative">built to scale.</span>
      </div>
      <Link
        href="#contact"
        className="inline-flex items-center justify-center font-bold bg-gradient-to-b from-orange-400 to-orange-600 text-white border border-orange-700 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full text-sm sm:text-base md:text-lg cursor-pointer no-underline transition-all duration-300 ease-in-out relative z-10 overflow-hidden hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-black"
      >
        Start now
      </Link>
    </section>
  );
};

export default Hero;
