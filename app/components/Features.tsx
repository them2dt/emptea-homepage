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
    <section className="py-16 px-8 max-w-6xl mx-auto bg-black">
      {features.map((feature, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-12 items-center mb-8 p-8 rounded-md bg-black transition-all duration-300 ease-in-out border border-solid" style={{ borderImage: 'linear-gradient(145deg, #222222, #111111) 1' }}>
          <div className={`max-w-md ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
            <h3 className="font-bold text-4xl mb-6 text-orange-500 leading-tight">{feature.title}</h3>
            <p className="text-xl text-white leading-relaxed">{feature.description}</p>
          </div>
          <div className="flex justify-center items-center h-60 bg-transparent">
            {feature.icon}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
