
import React from 'react';

const HighlightItem = ({ icon, label, color, ringColor }: { icon: React.ReactNode, label: string, color: string, ringColor: string }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div className={`w-28 h-28 rounded-full flex items-center justify-center mb-4 transform transition-all group-hover:scale-105 border-[3px] ${ringColor} bg-white shadow-lg overflow-hidden`}>
      <div className={`${color} w-16 h-16 flex items-center justify-center`}>
        {icon}
      </div>
    </div>
    <span className="font-montserrat font-bold text-xs md:text-sm tracking-wide uppercase text-gray-700">{label}</span>
  </div>
);

const Highlights: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          <HighlightItem 
            label="Pesquisa" 
            ringColor="border-electric-blue"
            color="text-electric-blue"
            icon={
              <svg className="w-full h-full line-art-path" viewBox="0 0 24 24">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="16" y2="10" />
                <circle cx="16" cy="18" r="4" />
                <line x1="18.5" y1="20.5" x2="21" y2="23" />
              </svg>
            }
          />
          <HighlightItem 
            label="Eventos" 
            ringColor="border-solar-yellow"
            color="text-solar-yellow"
            icon={
              <svg className="w-full h-full line-art-path" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <circle cx="15" cy="16" r="3" />
                <polyline points="15 14 15 16 16.5 17.5" />
              </svg>
            }
          />
          <HighlightItem 
            label="Acervo" 
            ringColor="border-magenta-vibrant"
            color="text-magenta-vibrant"
            icon={
              <svg className="w-full h-full line-art-path" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <rect x="9" y="8" width="6" height="2" />
                <rect x="9" y="16" width="6" height="2" />
              </svg>
            }
          />
          <HighlightItem 
            label="Equipe" 
            ringColor="border-lime-green"
            color="text-lime-green"
            icon={
              <svg className="w-full h-full line-art-path" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" />
                <path d="M5 21v-2a7 7 0 0 1 7-7h0a7 7 0 0 1 7 7v2" />
                <circle cx="18" cy="14" r="2" />
                <circle cx="6" cy="14" r="2" />
              </svg>
            }
          />
          <HighlightItem 
            label="Contato" 
            ringColor="border-cyan-bright"
            color="text-cyan-bright"
            icon={
              <svg className="w-full h-full line-art-path" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <polyline points="7 9 12 12 17 9" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
