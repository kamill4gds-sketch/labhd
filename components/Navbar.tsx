
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const menuItems = [
    { label: 'Sobre', path: '/sobre' },
    { label: 'Reuniões', path: '/reunioes' },
    { label: 'Dicionário', path: '/dicionario' },
    { label: 'Equipe', path: '/equipe' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          {/* Reconstructed Brand Logo with Precise Aesthetics */}
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col items-center py-2 px-1 transition-transform duration-300 group-hover:scale-[1.01]">
              <div className="h-[5px] w-full bg-[#139494] rounded-sm mb-1.5"></div>
              <div className="flex items-center gap-3">
                <div 
                  className="text-[64px] font-black text-[#00d8e4] leading-[0.75] tracking-[-0.04em] flex items-end select-none" 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    transform: 'scaleX(0.7)',
                    transformOrigin: 'left bottom',
                    marginRight: '-15px' 
                  }}
                >
                  LAB
                </div>
                <div className="flex flex-col items-start pt-1">
                  <div className="w-16 h-6 mb-0 ml-1">
                    <svg viewBox="0 0 120 40" fill="#a4d434" preserveAspectRatio="xMinYMid meet">
                      <path d="M5,32 L15,28" stroke="#a4d434" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M15,28 C30,15 60,5 115,10 C90,35 40,40 15,28 Z" />
                      <path d="M30,22 L35,12 M45,19 L52,10 M65,16 L75,8 M85,14 L95,8" stroke="white" strokeWidth="0.8" opacity="0.4" />
                    </svg>
                  </div>
                  <div className="flex flex-col leading-[0.82] items-start" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <span className="text-[30px] font-bold text-[#e4148c] uppercase tracking-tighter" style={{ transform: 'scaleX(0.55)', transformOrigin: 'left', marginLeft: '-12px' }}>
                      HISTÓRIA
                    </span>
                    <span className="text-[30px] font-bold text-[#e4148c] uppercase tracking-tighter" style={{ transform: 'scaleX(0.55)', transformOrigin: 'left', marginLeft: '-12px' }}>
                      DO DIREITO
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-[5px] w-full bg-[#139494] rounded-sm mt-1.5"></div>
            </div>
          </Link>

          {/* Nav Items Updated */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="text-gray-700 hover:text-electric-blue font-bold text-xs uppercase tracking-widest transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/leituras" className="text-gray-700 hover:text-electric-blue font-bold text-xs uppercase tracking-widest transition-colors">Leituras</Link>
            <Link to="/contato" className="bg-[#0066cc] hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-electric-blue/20">
              Contato
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button className="text-gray-800 p-2 hover:bg-gray-50 rounded-full transition-colors">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
