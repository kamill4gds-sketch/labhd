
import React from 'react';

const InfoBar: React.FC = () => {
  return (
    <div className="bg-white text-dark-bg py-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          
          <div className="flex items-center gap-4 flex-1 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center text-electric-blue">
              <i className="fas fa-location-dot"></i>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400">Localização</p>
              <p className="text-sm font-semibold">Campus Central, Sala 402 - Curitiba, PR</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          <div className="flex items-center gap-4 flex-1 justify-center">
            <div className="w-12 h-12 rounded-full bg-magenta-vibrant/10 flex items-center justify-center text-magenta-vibrant">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400">Contato (Email)</p>
              <p className="text-sm font-semibold">contato@labhd.com.br</p>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200"></div>

          <div className="flex items-center gap-4 flex-1 justify-center md:justify-end">
            <div className="w-12 h-12 rounded-full bg-lime-green/10 flex items-center justify-center text-lime-green">
              <i className="fab fa-whatsapp text-xl"></i>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400">WhatsApp</p>
              <p className="text-sm font-semibold">+55 (41) 98765-4321</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InfoBar;
