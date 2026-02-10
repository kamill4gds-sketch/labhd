
import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const routes = [
    { path: '/sobre', label: 'Sobre', color: 'text-electric-blue', bg: 'bg-electric-blue/5' },
    { path: '/reunioes', label: 'Reuniões', color: 'text-solar-yellow', bg: 'bg-solar-yellow/5' },
    { path: '/dicionario', label: 'Dicionário', color: 'text-magenta-vibrant', bg: 'bg-magenta-vibrant/5' },
    { path: '/pesquisas', label: 'Pesquisas', color: 'text-lime-green', bg: 'bg-lime-green/5' },
    { path: '/transcricoes', label: 'Transcrições', color: 'text-deep-purple', bg: 'bg-deep-purple/5' },
    { path: '/equipe', label: 'Equipe', color: 'text-sky-light', bg: 'bg-sky-light/5' },
    { path: '/leituras', label: 'Leituras', color: 'text-forest-green', bg: 'bg-forest-green/5' },
    { path: '/contato', label: 'Contato', color: 'text-cyan-bright', bg: 'bg-cyan-bright/5' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white border border-gray-200 rounded-[40px] p-10 shadow-2xl">
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
          <div className="w-12 h-12 rounded-2xl bg-electric-blue flex items-center justify-center text-white text-xl">
            <i className="fas fa-map-signs"></i>
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900 font-montserrat leading-none">Mapa do Desenvolvedor</h2>
            <p className="text-gray-500 font-poppins text-sm mt-1">Ambiente de Preview: Navegue pelas seções</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {routes.map((route) => (
            <Link 
              key={route.path}
              to={route.path} 
              className={`block p-5 rounded-2xl border border-transparent hover:border-gray-200 ${route.bg} transition-all group`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-bold ${route.color} uppercase tracking-widest text-xs`}>{route.label}</span>
                <i className={`fas fa-chevron-right ${route.color} opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0`}></i>
              </div>
              <p className="text-[10px] text-gray-400 mt-1 font-mono">{route.path}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-medium uppercase tracking-widest">
          <span>Labs History of Law</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Preview Active
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
