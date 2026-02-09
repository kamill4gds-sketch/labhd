
import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-electric-blue border-b border-gray-100 pb-4 font-montserrat">Dev Sitemap</h2>
        <p className="text-gray-600 mb-8 font-poppins">Você está em modo de visualização. Aqui estão os atalhos para as rotas disponíveis:</p>
        <ul className="space-y-4">
          <li>
            <Link to="/lp-video" className="block p-4 rounded-xl bg-electric-blue/5 border border-electric-blue/10 hover:bg-electric-blue/10 transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-bold text-electric-blue">Página Principal (LP)</span>
                <i className="fas fa-arrow-right text-electric-blue group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="block p-4 rounded-xl bg-magenta-vibrant/5 border border-magenta-vibrant/10 hover:bg-magenta-vibrant/10 transition-all group">
              <div className="flex items-center justify-between">
                <span className="font-bold text-magenta-vibrant">Root (/)</span>
                <i className="fas fa-arrow-right text-magenta-vibrant group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          </li>
        </ul>
        <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
          Environment: Preview detected. Using HashRouter for stability.
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
