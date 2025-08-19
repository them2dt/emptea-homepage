import { GlobeHemisphereWest, DeviceMobileCamera } from '@phosphor-icons/react';

const Services = () => {
  return (
    <section id="services" className="text-center py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-white uppercase tracking-wider">Our services</h2>
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-orange-500 mb-8 sm:mb-12 lg:mb-16 leading-tight max-w-4xl mx-auto text-balance">Crafted with precision, built to perform.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          <div className="group text-left bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 ease-in-out relative border border-gray-800/50 hover:border-orange-500/30 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-gray-900/50 hover:shadow-xl hover:shadow-orange-500/10">
            <div className="flex justify-center items-center h-20 sm:h-24 lg:h-32 mb-4 sm:mb-6 lg:mb-8 transition-all duration-500 ease-in-out group-hover:scale-110">
              <GlobeHemisphereWest 
                size={48} 
                className="sm:hidden" 
                color="#ff5000" 
                weight="duotone" 
              />
              <GlobeHemisphereWest 
                size={64} 
                className="hidden sm:block lg:hidden" 
                color="#ff5000" 
                weight="duotone" 
              />
              <GlobeHemisphereWest 
                size={80} 
                className="hidden lg:block" 
                color="#ff5000" 
                weight="duotone" 
              />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 lg:mb-6 text-white relative z-10 group-hover:text-orange-500 transition-colors duration-300">Web</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed relative z-10 text-pretty">With 5 years and +100 projects of expertise, we can craft a web experience, tailored for any device.</p>
          </div>
          
          <div className="group text-left bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-xl p-6 sm:p-8 lg:p-10 transition-all duration-500 ease-in-out relative border border-gray-800/50 hover:border-orange-500/30 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-gray-900/50 hover:shadow-xl hover:shadow-orange-500/10">
            <div className="flex justify-center items-center h-20 sm:h-24 lg:h-32 mb-4 sm:mb-6 lg:mb-8 transition-all duration-500 ease-in-out group-hover:scale-110">
              <DeviceMobileCamera 
                size={48} 
                className="sm:hidden" 
                color="#ff5000" 
                weight="duotone" 
              />
              <DeviceMobileCamera 
                size={64} 
                className="hidden sm:block lg:hidden" 
                color="#ff5000" 
                weight="duotone" 
              />
              <DeviceMobileCamera 
                size={80} 
                className="hidden lg:block" 
                color="#ff5000" 
                weight="duotone" 
              />
            </div>
            <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 lg:mb-6 text-white relative z-10 group-hover:text-orange-500 transition-colors duration-300">Mobile</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed relative z-10 text-pretty">Our deep understanding allows us to develop user-friendly apps for any smartphone and tablet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
