
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-16 overflow-hidden">
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
            <p className="text-xl text-gray-600 mb-2 max-w-lg leading-relaxed">
              Explorando as raízes jurídicas para compreender o presente. 
            </p>
            <p className="text-gray-400 font-medium uppercase tracking-[0.2em] text-xs">
              Laboratório de História do Direito • UFPR
            </p>
          </div>

          {/* Right Column */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Spinning Dotted Circles */}
            <div className="absolute inset-0 flex items-center justify-center scale-90 md:scale-100">
              <div className="w-80 h-80 border-4 border-dashed border-cyan-bright/20 rounded-full animate-spin-slow"></div>
              <div className="absolute w-[400px] h-[400px] border-2 border-dotted border-magenta-vibrant/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            </div>
            
            {/* Minimalist Visual elements - Icons represent the archives */}
            <div className="relative z-10 flex gap-4">
               <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-electric-blue border border-gray-100">
                  <i className="fas fa-scroll text-2xl"></i>
               </div>
               <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-magenta-vibrant border border-gray-100 mt-8">
                  <i className="fas fa-feather-pointed text-2xl"></i>
               </div>
               <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center text-lime-green border border-gray-100">
                  <i className="fas fa-landmark text-2xl"></i>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
