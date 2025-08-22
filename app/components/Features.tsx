import { Headset, Lightning, Target, MapPin } from '@phosphor-icons/react';

const Features = () => {
  const features = [
    {
      title: 'Direkte Kommunikation',
      description: 'Keine Zwischenhändler. Wir arbeiten eng mit unseren Kunden zusammen, um ein erstaunliches Produkt zu schaffen, für das Sie gerne bezahlen werden.',
      icon: <Headset size={80} className="text-accent" weight="duotone" />
    },
    {
      title: 'Schnelle Iteration.',
      description: 'Sie bekommen Ihr eigenes Team von Ingenieuren, sodass keine Zeit mit Warten verschwendet wird.',
      icon: <Lightning size={80} className="text-accent" weight="duotone" />
    },
    {
      title: 'Fokussiert.',
      description: 'Ihr Team konzentriert sich ausschließlich auf Ihr Projekt, um einen Tunnelblick zu bekommen und 100% Aufmerksamkeit für Ihre Bedürfnisse zu gewährleisten.',
      icon: <Target size={80} className="text-accent" weight="duotone" />
    },
    {
      title: 'Made in Zürich.',
      description: 'Angesiedelt im Herzen der Schweizer Finanz- und Innovationsdrehscheibe, bieten wir zuverlässige, hochwertige Entwicklungsdienstleistungen mit Schweizer Präzision.',
      icon: <MapPin size={80} className="text-accent" weight="duotone" />
    },
  ];

  return (
    <section className="py-8 md:py-12 px-4 md:px-6 bg-obsidian">
      <div className="max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center mb-6 md:mb-8 p-5 md:p-6 rounded-lg bg-gradient-to-br from-gray-900/20 to-gray-900/10 transition-all duration-300 ease-in-out border border-gray-800/20 hover:border-accent/20 hover:bg-gradient-to-br hover:from-gray-900/30 hover:to-gray-900/15">
            <div className={`max-w-xl mx-auto md:mx-0 text-center md:text-left ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-accent leading-tight group-hover:text-accent/80 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
            <div className={`flex justify-center items-center h-24 md:h-32 bg-transparent ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <div className="transition-transform duration-300 ease-in-out group-hover:scale-105">
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
