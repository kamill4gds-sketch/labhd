
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
              História do <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-electric-blue via-cyan-bright to-lime-green bg-clip-text text-transparent">
                  Direito
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M0 10C50 10 50 2 100 2C150 2 150 10 200 10" stroke="#d6006e" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              <br /> Viva e Atual
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Explorando as raízes jurídicas para compreender o presente. O LABHD é o ponto de encontro entre a tradição acadêmica e a inovação historiográfica.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-electric-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-electric-blue/20">
                Conheça o LAB
              </button>
              <button className="border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all">
                Ver Acervo
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Spinning Dotted Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 border-4 border-dashed border-cyan-bright/20 rounded-full animate-spin-slow"></div>
              <div className="absolute w-[400px] h-[400px] border-2 border-dotted border-magenta-vibrant/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            </div>
            
            {/* Floating Notification Cards */}
            <div className="relative z-10 w-full max-w-sm">
              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-xl mb-4 animate-float transform translate-x-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-bright flex items-center justify-center">
                    <i className="fas fa-newspaper text-white"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-cyan-bright uppercase tracking-wider">Artigo Recente</p>
                    <p className="text-sm font-semibold text-gray-800">Constituições de 1824 e a Dignidade</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-xl mb-4 animate-float-reverse transform -translate-x-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-magenta-vibrant flex items-center justify-center">
                    <i className="fas fa-calendar-check text-white"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-magenta-vibrant uppercase tracking-wider">Próximo Evento</p>
                    <p className="text-sm font-semibold text-gray-800">Workshop: Paleografia Jurídica</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-xl animate-float delay-700 transform translate-x-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lime-green flex items-center justify-center">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-lime-green uppercase tracking-wider">Novos Membros</p>
                    <p className="text-sm font-semibold text-gray-800">Aberto edital para pesquisadores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
