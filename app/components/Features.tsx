import { Headset, Lightning, Target } from '@phosphor-icons/react';

const Features = () => {
  const features = [
    {
      title: 'Direct communication',
      description: 'No middleman. We work closely with our clients to ensure an amazing product you\'ll be happy to pay for.',
      icon: <Headset size={80} color="#ff5000" weight="duotone" />
    },
    {
      title: 'Fast iteration.',
      description: 'You\'ll get your own team of engineers, so no time will be wasted with waiting.',
      icon: <Lightning size={80} color="#ff5000" weight="duotone" />
    },
    {
      title: 'Locked in.',
      description: 'Your team will focus only on your project to get a tunnel vision, ensuring 100% attention for your needs.',
      icon: <Target size={80} color="#ff5000" weight="duotone" />
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center mb-8 sm:mb-12 lg:mb-16 p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-900/10 transition-all duration-500 ease-in-out border border-gray-800/30 hover:border-orange-500/20 hover:bg-gradient-to-br hover:from-gray-900/50 hover:to-gray-900/20 hover:shadow-2xl hover:shadow-orange-500/5">
            <div className={`max-w-2xl mx-auto lg:mx-0 text-center lg:text-left ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 lg:mb-8 text-orange-500 leading-tight text-balance group-hover:text-orange-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed text-pretty group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
            <div className={`flex justify-center items-center h-32 sm:h-40 lg:h-48 xl:h-60 bg-transparent ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
