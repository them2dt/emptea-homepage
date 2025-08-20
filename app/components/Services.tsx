import { GlobeHemisphereWest, DeviceMobileCamera } from '@phosphor-icons/react';

const Services = () => {
  return (
    <section id="services" className="text-center py-8 md:py-12 px-4 md:px-6 bg-obsidian relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bold text-lg md:text-xl mb-2 text-white uppercase tracking-wide">Our services</h2>
        <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-accent mb-6 md:mb-8 leading-tight max-w-3xl mx-auto">Crafted with precision, built to perform.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="group text-left bg-gradient-to-br from-gray-900/40 to-gray-900/20 rounded-lg p-5 md:p-6 transition-all duration-300 ease-in-out relative border border-gray-800/40 hover:border-accent/30 hover:bg-gradient-to-br hover:from-gray-900/60 hover:to-gray-900/30">
            <div className="flex justify-center items-center h-16 md:h-20 mb-3 md:mb-4 transition-all duration-300 ease-in-out group-hover:scale-105">
              <GlobeHemisphereWest 
                size={48} 
                className="md:hidden" 
                color="#ddff00" 
                weight="duotone" 
              />
              <GlobeHemisphereWest 
                size={56} 
                className="hidden md:block" 
                color="#ddff00" 
                weight="duotone" 
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-white relative z-10 group-hover:text-accent transition-colors duration-300">Web</h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed relative z-10">With 5 years and +100 projects of expertise, we can craft a web experience, tailored for any device.</p>
          </div>
          
          <div className="group text-left bg-gradient-to-br from-gray-900/40 to-gray-900/20 rounded-lg p-5 md:p-6 transition-all duration-300 ease-in-out relative border border-gray-800/40 hover:border-accent/30 hover:bg-gradient-to-br hover:from-gray-900/60 hover:to-gray-900/30">
            <div className="flex justify-center items-center h-16 md:h-20 mb-3 md:mb-4 transition-all duration-300 ease-in-out group-hover:scale-105">
              <DeviceMobileCamera 
                size={48} 
                className="md:hidden" 
                color="#ddff00" 
                weight="duotone" 
              />
              <DeviceMobileCamera 
                size={56} 
                className="hidden md:block" 
                color="#ddff00" 
                weight="duotone" 
              />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-white relative z-10 group-hover:text-accent transition-colors duration-300">Mobile</h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed relative z-10">Our deep understanding allows us to develop user-friendly apps for any smartphone and tablet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
