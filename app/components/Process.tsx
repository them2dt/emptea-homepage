'use client';

import { ChatCircle, FileText, Code, Rocket, CheckCircle } from '@phosphor-icons/react';

const Process = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Erstkontakt & Beratung',
      description: 'Wir besprechen Ihre Vision, Anforderungen und Ziele. Gemeinsam entwickeln wir ein Verständnis für Ihr Projekt.',
      icon: <ChatCircle size={48} className="text-accent" weight="duotone" />
    },
    {
      step: '02',
      title: 'Planung & Konzept',
      description: 'Wir erstellen ein detailliertes Konzept mit Zeitplan, Funktionsumfang und technischer Architektur.',
      icon: <FileText size={48} className="text-accent" weight="duotone" />
    },
    {
      step: '03',
      title: 'Entwicklung & Design',
      description: 'Unser Team entwickelt Ihr Produkt mit modernsten Technologien und einem fokussierten Ansatz.',
      icon: <Code size={48} className="text-accent" weight="duotone" />
    },
    {
      step: '04',
      title: 'Testing & Optimierung',
      description: 'Umfassende Tests und Optimierungen stellen sicher, dass Ihr Produkt perfekt funktioniert.',
      icon: <CheckCircle size={48} className="text-accent" weight="duotone" />
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'Wir bringen Ihr Produkt live und bieten kontinuierlichen Support für den langfristigen Erfolg.',
      icon: <Rocket size={48} className="text-accent" weight="duotone" />
    }
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-obsidian relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold text-xl md:text-2xl mb-2 text-white uppercase tracking-wide">Unser Prozess</h2>
          <p className="font-bold text-3xl md:text-5xl text-accent leading-tight max-w-4xl mx-auto">
            Von der ersten Idee bis zum fertigen Produkt
          </p>
          <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Ein strukturierter Ansatz, der Qualität, Transparenz und Erfolg garantiert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.slice(0, 3).map((step, index) => (
            <div key={index} className="group relative">
              {/* Step number background */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-black font-black text-xl z-10">
                {step.step}
              </div>
              
              {/* Content card */}
              <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-900/20 rounded-lg p-6 md:p-8 pt-12 border border-gray-800/40 hover:border-accent/30 hover:bg-gradient-to-br hover:from-gray-900/60 hover:to-gray-900/30 transition-all duration-300 ease-in-out group-hover:-translate-y-1">
                {/* Icon */}
                <div className="flex justify-center items-center h-20 mb-4 transition-all duration-300 ease-in-out group-hover:scale-110">
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-lg md:text-xl mb-3 text-white text-center group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row with steps 4 and 5 centered */}
        <div className="flex justify-center mt-6 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
            {processSteps.slice(3).map((step, index) => (
              <div key={index + 3} className="group relative">
                {/* Step number background */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-black font-black text-xl z-10">
                  {step.step}
                </div>
                
                {/* Content card */}
                <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-900/20 rounded-lg p-6 md:p-8 pt-12 border border-gray-800/40 hover:border-accent/30 hover:bg-gradient-to-br hover:from-gray-900/60 hover:to-gray-900/30 transition-all duration-300 ease-in-out group-hover:-translate-y-1">
                  {/* Icon */}
                  <div className="flex justify-center items-center h-20 mb-4 transition-all duration-300 ease-in-out group-hover:scale-110">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-lg md:text-xl mb-3 text-white text-center group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-300 text-lg md:text-xl mb-6">
            Bereit durchzustarten?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center font-bold bg-accent text-accent-foreground border border-accent px-8 md:px-10 py-3 md:py-4 rounded-full text-lg md:text-xl cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-obsidian"
          >
            Jetzt loslegen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
