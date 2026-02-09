
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 relative overflow-hidden">
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue via-magenta-vibrant to-solar-yellow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col border-y border-cyan-bright py-1 px-2 w-fit mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-cyan-bright font-montserrat tracking-tighter">LAB</span>
                <div className="ml-2 flex flex-col leading-none">
                  <span className="text-[8px] font-bold text-magenta-vibrant uppercase">História do</span>
                  <span className="text-[8px] font-bold text-magenta-vibrant uppercase">Direito</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 max-w-sm mb-6">
              Promovendo a excelência na pesquisa jurídica histórica e estimulando o debate acadêmico sobre os fundamentos do Direito no Brasil.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 uppercase tracking-wider">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors">Início</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors">Quem Somos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors">Nossa Equipe</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors">Publicações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-900 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-gray-600 hover:text-electric-blue transition-colors">Cookies</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>© 2024 LABHD - Laboratório de História do Direito. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><i className="fas fa-code text-cyan-bright"></i> Desenvolvido com Paixão</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
