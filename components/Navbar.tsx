
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col border-y border-cyan-bright py-1 px-2">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-cyan-bright font-montserrat tracking-tighter">LAB</span>
                <div className="ml-2 flex flex-col leading-none">
                  <span className="text-[10px] font-bold text-magenta-vibrant uppercase">História do</span>
                  <span className="text-[10px] font-bold text-magenta-vibrant uppercase">Direito</span>
                </div>
                <div className="ml-3 text-lime-green rotate-[15deg] group-hover:rotate-0 transition-transform">
                  <i className="fas fa-feather-pointed text-2xl"></i>
                </div>
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
