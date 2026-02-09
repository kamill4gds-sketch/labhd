
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center border-y border-cyan-bright/30 py-1 px-2">
              {/* Graphic Logo Part */}
              <div className="flex gap-1 items-center mr-3 scale-75 md:scale-100 origin-left">
                {/* Book Representation */}
                <div className="relative w-8 h-10">
                   <div className="absolute inset-0 border-2 border-electric-blue rounded-sm transform -rotate-6"></div>
                   <div className="absolute inset-0 border-2 border-cyan-bright rounded-sm transform translate-x-1"></div>
                </div>
                {/* Hourglass Representation */}
                <div className="w-8 h-10 border-2 border-magenta-vibrant rounded-sm flex flex-col justify-between p-0.5">
                   <div className="w-full h-1/2 border-b border-magenta-vibrant/30 bg-solar-yellow/20"></div>
                   <div className="w-full h-1/2 bg-solar-yellow/10"></div>
                </div>
              </div>
              
              <div className="flex flex-col leading-none">
                <div className="flex items-center">
                   <span className="text-2xl font-extrabold text-electric-blue font-montserrat tracking-tighter">LABHD</span>
                   <span className="ml-1 text-[10px] font-bold text-gray-400">UFPR</span>
                </div>
                <span className="text-[9px] font-bold text-magenta-vibrant uppercase tracking-tight">Laboratório de História do Direito</span>
              </div>
            </div>
          </Link>

          {/* Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-electric-blue font-medium transition-colors">Início</Link>
            <Link to="/sobre" className="text-gray-800 hover:text-electric-blue font-medium transition-colors">Sobre</Link>
            <Link to="/eventos" className="text-gray-800 hover:text-electric-blue font-medium transition-colors">Eventos</Link>
            <Link to="/acervo" className="text-gray-800 hover:text-electric-blue font-medium transition-colors">Acervo</Link>
            <button className="bg-electric-blue hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-electric-blue/30">
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-800 p-2">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
