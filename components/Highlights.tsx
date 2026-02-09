
import React from 'react';

const HighlightItem = ({ icon, label, color, bgColor }: { icon: string, label: string, color: string, bgColor: string }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div className={`${bgColor} w-32 h-32 rounded-full flex items-center justify-center mb-4 transform transition-all group-hover:scale-110 group-hover:rotate-6 shadow-xl border border-gray-100`}>
      <i className={`fas ${icon} ${color} text-4xl`}></i>
    </div>
    <span className="font-montserrat font-bold text-lg tracking-wide uppercase text-gray-800">{label}</span>
  </div>
);

const Highlights: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <HighlightItem 
            icon="fa-microscope" 
            label="Pesquisa" 
            color="text-electric-blue" 
            bgColor="bg-white" 
          />
          <HighlightItem 
            icon="fa-calendar-star" 
            label="Eventos" 
            color="text-solar-yellow" 
            bgColor="bg-white" 
          />
          <HighlightItem 
            icon="fa-box-archive" 
            label="Acervo" 
            color="text-magenta-vibrant" 
            bgColor="bg-white" 
          />
          <HighlightItem 
            icon="fa-user-group" 
            label="Equipe" 
            color="text-lime-green" 
            bgColor="bg-white" 
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
