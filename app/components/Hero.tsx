import Link from 'next/link';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[75vh] text-center pt-30 bg-black bg-[linear-gradient(rgba(255,80,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,80,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] relative overflow-hidden border-b border-white/10">
      <div className="font-bold text-7xl mb-8 text-white leading-tight relative z-10">
        Modern software <br /> <span className="text-orange-500 relative">built to scale.</span>
      </div>
      <Link
        href="#contact"
        className="font-bold bg-gradient-to-b from-orange-400 to-orange-600 text-white border border-orange-700 px-10 py-4 rounded-full text-lg cursor-pointer no-underline transition-all duration-200 ease-in-out relative z-10 overflow-hidden"
      >
        Start now
      </Link>
    </section>
  );
};

export default Hero;
