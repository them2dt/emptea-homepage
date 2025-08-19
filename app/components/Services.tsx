import { GlobeHemisphereWest, DeviceMobileCamera } from '@phosphor-icons/react';

const Services = () => {
  return (
    <section id="services" className="text-center py-24 px-8 bg-black relative">
      <h2 className="font-bold text-2xl mb-2 text-white uppercase">Our services</h2>
      <p className="font-bold text-5xl text-orange-500 mb-12 leading-tight">Crafted with precision, built to perform.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="text-left bg-black rounded-md p-8 transition-all duration-300 ease-in-out relative border border-solid border-transparent bg-clip-padding" style={{ borderImage: 'linear-gradient(145deg, #222222, #111111) 1' }}>
          <div className="flex justify-center items-center h-32 mb-6 transition-all duration-300 ease-in-out">
            <GlobeHemisphereWest size={80} color="#ff5000" weight="duotone" />
          </div>
          <h3 className="font-bold text-3xl mb-4 text-white relative z-10">Web</h3>
          <p className="text-lg text-white leading-relaxed relative z-10">With 5 years and +100 projects of expertise, we can craft a web experience, tailored for any device.</p>
        </div>
        <div className="text-left bg-black rounded-md p-8 transition-all duration-300 ease-in-out relative border border-solid border-transparent bg-clip-padding" style={{ borderImage: 'linear-gradient(145deg, #222222, #111111) 1' }}>
          <div className="flex justify-center items-center h-32 mb-6 transition-all duration-300 ease-in-out">
            <DeviceMobileCamera size={80} color="#ff5000" weight="duotone" />
          </div>
          <h3 className="font-bold text-3xl mb-4 text-white relative z-10">Mobile</h3>
          <p className="text-lg text-white leading-relaxed relative z-10">Our deep understanding allows us to develop user-friendly apps for any smartphone and tablet.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
