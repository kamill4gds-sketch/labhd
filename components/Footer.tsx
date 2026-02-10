
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-24 pb-12 relative overflow-hidden">
      {/* Brand Accent Border */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-electric-blue via-magenta-vibrant to-lime-green"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            {/* Logo in Footer */}
            <div className="flex flex-col items-center py-1 w-fit mb-8 scale-90 origin-left">
              <div className="h-[4px] w-full bg-[#139494] rounded-sm mb-1.5"></div>
              <div className="flex items-center gap-2 px-1">
                <div 
                  className="text-[52px] font-black text-[#00d8e4] leading-[0.75] tracking-[-0.04em]" 
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    transform: 'scaleX(0.7)',
                    transformOrigin: 'left bottom',
                    marginRight: '-12px' 
                  }}
                >
                  LAB
                </div>
                <div className="flex flex-col items-start pt-1">
                  <div className="w-12 h-5 mb-0 ml-0.5">
                    <svg viewBox="0 0 120 40" fill="#a4d434">
                      <path d="M15,28 C30,15 60,5 115,10 C90,35 40,40 15,28 Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col leading-[0.82] items-start">
                    <span 
                      className="text-[24px] font-bold text-[#e4148c] uppercase"
                      style={{ transform: 'scaleX(0.55)', transformOrigin: 'left', marginLeft: '-10px' }}
                    >
                      HISTÓRIA
                    </span>
                    <span 
                      className="text-[24px] font-bold text-[#e4148c] uppercase"
                      style={{ transform: 'scaleX(0.55)', transformOrigin: 'left', marginLeft: '-10px' }}
                    >
                      DO DIREITO
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-[4px] w-full bg-[#139494] rounded-sm mt-1.5"></div>
            </div>

            <p className="text-gray-600 max-w-sm mb-8 leading-relaxed text-base">
              Excelência na pesquisa historiográfica jurídica. O LABHD conecta passado e presente para construir um futuro jurídico mais consciente.
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all" aria-label="Instagram"><i className="fab fa-instagram text-lg"></i></a>
              <a href="#" className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all" aria-label="LinkedIn"><i className="fab fa-linkedin-in text-lg"></i></a>
              <a href="#" className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all" aria-label="YouTube"><i className="fab fa-youtube text-lg"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black mb-8 text-gray-900 uppercase tracking-widest font-montserrat">Explorar</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors text-sm font-semibold">Início</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors text-sm font-semibold">Laboratório</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors text-sm font-semibold">Equipe de Pesquisa</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors text-sm font-semibold">Publicações Acadêmicas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black mb-8 text-gray-900 uppercase tracking-widest font-montserrat">Informações</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors text-sm font-semibold">Privacidade</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors text-sm font-semibold">Transparência</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors text-sm font-semibold">Acessibilidade</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors text-sm font-semibold">Contato Direto</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 font-medium uppercase tracking-widest">
          <p>© 2024 LABHD - Laboratório de História do Direito. UFPR.</p>
          <div className="flex gap-6 items-center">
            <span>Powered by Innovation <i className="fas fa-heart text-magenta-vibrant ml-1"></i></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
