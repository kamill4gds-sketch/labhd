
import React from 'react';

const FeedCard = ({ type, title, icon, date, color, isDark = false }: { type: string, title: string, icon: string, date: string, color: string, isDark?: boolean }) => (
  <div className={`rounded-3xl overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 flex flex-col ${isDark ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-100'}`}>
    <div className={`h-48 flex items-center justify-center ${color} bg-opacity-90 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10 flex items-center justify-center scale-150">
        <i className={`fas ${icon} text-9xl text-white`}></i>
      </div>
      <i className={`fas ${icon} text-6xl text-white z-10`}></i>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <span className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{type}</span>
        <span className={`text-[10px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{date}</span>
      </div>
      <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      <div className="flex items-center gap-2">
        <button className={`text-sm font-bold flex items-center gap-2 ${isDark ? 'text-cyan-bright' : 'text-electric-blue'}`}>
          Ler mais <i className="fas fa-arrow-right text-xs"></i>
        </button>
      </div>
    </div>
  </div>
);

const Feed: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Acontece no LAB</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Acompanhe nossa jornada acadêmica através das publicações e eventos mais recentes.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <FeedCard 
            type="Evento" 
            title="Jornada de História Viva 2024" 
            icon="fa-scroll" 
            date="12 Out, 2023" 
            color="bg-electric-blue" 
          />
          <FeedCard 
            type="Publicação" 
            title="A Balança da Justiça no Brasil Império" 
            icon="fa-scale-balanced" 
            date="25 Set, 2023" 
            color="bg-gradient-to-br from-magenta-vibrant to-solar-yellow" 
          />
          <FeedCard 
            type="Convocatória" 
            title="Seja parte do nosso Laboratório" 
            icon="fa-handshake" 
            date="Aberto Agora" 
            color="bg-lime-green" 
            isDark={true}
          />
        </div>

        <div className="mt-12">
          <button className="bg-electric-blue text-white px-10 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg">
            Ver todos os posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feed;
