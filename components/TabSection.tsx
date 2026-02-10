
import React, { useState, useEffect } from 'react';

type TabId = 'sobre' | 'reunioes' | 'dicionario' | 'pesquisas' | 'transcricoes' | 'equipe' | 'leituras' | 'contato';

interface TabConfig {
  id: TabId;
  label: string;
  color: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  lightBgClass: string;
}

const TABS: TabConfig[] = [
  { id: 'sobre', label: 'Sobre', color: '#0066cc', bgClass: 'bg-electric-blue', textClass: 'text-electric-blue', borderClass: 'border-electric-blue', lightBgClass: 'bg-electric-blue/5' },
  { id: 'reunioes', label: 'Reuniões', color: '#ffcc00', bgClass: 'bg-solar-yellow', textClass: 'text-solar-yellow', borderClass: 'border-solar-yellow', lightBgClass: 'bg-solar-yellow/5' },
  { id: 'dicionario', label: 'Dicionário', color: '#d6006e', bgClass: 'bg-magenta-vibrant', textClass: 'text-magenta-vibrant', borderClass: 'border-magenta-vibrant', lightBgClass: 'bg-magenta-vibrant/5' },
  { id: 'pesquisas', label: 'Pesquisas', color: '#8cc63f', bgClass: 'bg-lime-green', textClass: 'text-lime-green', borderClass: 'border-lime-green', lightBgClass: 'bg-lime-green/5' },
  { id: 'transcricoes', label: 'Transcrições', color: '#9333ea', bgClass: 'bg-deep-purple', textClass: 'text-deep-purple', borderClass: 'border-deep-purple', lightBgClass: 'bg-deep-purple/5' },
  { id: 'equipe', label: 'Equipe', color: '#38bdf8', bgClass: 'bg-sky-light', textClass: 'text-sky-light', borderClass: 'border-sky-light', lightBgClass: 'bg-sky-light/5' },
  { id: 'leituras', label: 'Leituras', color: '#15803d', bgClass: 'bg-forest-green', textClass: 'text-forest-green', borderClass: 'border-forest-green', lightBgClass: 'bg-forest-green/5' },
  { id: 'contato', label: 'Contato', color: '#00bcd4', bgClass: 'bg-cyan-bright', textClass: 'text-cyan-bright', borderClass: 'border-cyan-bright', lightBgClass: 'bg-cyan-bright/5' },
];

interface TabSectionProps {
  activeTabId?: TabId;
}

const TabSection: React.FC<TabSectionProps> = ({ activeTabId }) => {
  const [activeTab, setActiveTab] = useState<TabId>(activeTabId || 'sobre');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (activeTabId) {
      handleTabChange(activeTabId);
    }
  }, [activeTabId]);

  const handleTabChange = (id: TabId) => {
    if (id === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(id);
      setIsTransitioning(false);
    }, 300);
  };

  const activeConfig = TABS.find(t => t.id === activeTab) || TABS[0];

  const renderContent = () => {
    switch (activeTab) {
      case 'sobre':
        return (
          <div className="space-y-8">
            <h2 className={`text-4xl font-black ${activeConfig.textClass} tracking-tight`}>O que é o LabHD?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-gray-700 leading-relaxed text-lg">
              <div className="space-y-6">
                <p>
                  O LabHD dá continuidade a uma linha de pesquisa iniciada há mais de dez anos, que investiga os processos coloniais do século XVIII na região sul do Império Português – a antiga Capitania do Sul.
                </p>
                <p>
                  O acervo é composto por mais de cinco mil processos judiciais oriundos de vilas como Castro, São Francisco, Lages, Laguna, Curitiba e da comarca de Paranaguá.
                </p>
              </div>
              <div className={`${activeConfig.lightBgClass} p-8 rounded-[32px] border-l-8 ${activeConfig.borderClass}`}>
                <p className="italic font-medium text-gray-800">
                  "Estes documentos são uma janela única para compreender como a justiça era administrada em vilas distantes e de fronteira."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div className="p-8 bg-white shadow-sm border border-gray-100 rounded-3xl group hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-2xl ${activeConfig.bgClass} mb-6 flex items-center justify-center text-white`}>
                  <i className="fas fa-users-rectangle"></i>
                </div>
                <h3 className="font-black mb-3 text-xl uppercase tracking-tighter">Vilas (Justiça Ordinária)</h3>
                <p className="text-sm text-gray-500 font-medium">Aplicada por juízes locais ("rústicos") sem formação formal, baseada no costume local.</p>
              </div>
              <div className="p-8 bg-white shadow-sm border border-gray-100 rounded-3xl group hover:shadow-xl transition-all">
                 <div className={`w-12 h-12 rounded-2xl ${activeConfig.bgClass} mb-6 flex items-center justify-center text-white`}>
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="font-black mb-3 text-xl uppercase tracking-tighter">Comarca (Ouvidor)</h3>
                <p className="text-sm text-gray-500 font-medium">Autoridade máxima, bacharel de Coimbra representando a justiça real e a lei técnica.</p>
              </div>
            </div>
          </div>
        );
      case 'equipe':
        return (
          <div className="space-y-12">
            <h2 className={`text-4xl font-black ${activeConfig.textClass} tracking-tight`}>Equipe de Pesquisa</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`p-10 rounded-[40px] border-2 ${activeConfig.borderClass} bg-white shadow-2xl relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 w-32 h-32 ${activeConfig.bgClass} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${activeConfig.textClass}`}>Coordenador Geral</p>
                <h3 className="text-2xl font-black mb-2 text-gray-900">Prof. Luís Fernando Lopes Pereira</h3>
                <p className="text-gray-500 text-sm font-medium">Doutor em História do Direito • UFPR</p>
              </div>
              <div className={`p-10 rounded-[40px] border-2 ${activeConfig.borderClass} bg-white shadow-2xl relative overflow-hidden group`}>
                <div className={`absolute top-0 right-0 w-32 h-32 ${activeConfig.bgClass} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                <p className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${activeConfig.textClass}`}>Vice-coordenadora</p>
                <h3 className="text-2xl font-black mb-2 text-gray-900">Prof. Vanessa Massuchetto</h3>
                <p className="text-gray-500 text-sm font-medium">Doutora pela UFPR • Instituto Max Planck</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Lucca Fiori Zarth", info: "Bolsista PROEC" },
                { name: "Graziella Martins", info: "Pesquisadora" },
                { name: "Ana Luísa Caetano", info: "Pesquisadora" },
                { name: "Ana Paula Rocha", info: "Bacharela" },
                { name: "Bianca Santoni", info: "Pesquisadora" },
                { name: "Eduarda Schaefer", info: "Pesquisadora" },
                { name: "Ester Figueiredo", info: "Pesquisadora" },
                { name: "Felipe Teixeira", info: "Pesquisador" },
                { name: "Gustavo Moura", info: "Pesquisador" },
                { name: "Henrique Aragão", info: "Pesquisador" },
                { name: "Isabelle Sanchez", info: "Pesquisadora" },
                { name: "Leonardo Sarrão", info: "Pesquisador" },
                { name: "Letícia Madaleno", info: "Pesquisadora" },
                { name: "Letícia Parpinelli", info: "Pesquisadora" },
                { name: "Maria Eduarda Silva", info: "UFES" },
                { name: "Maria E. Vriesman", info: "Pesquisadora" },
                { name: "Maria Rodrigues", info: "Mestra" },
                { name: "Mariana Terra", info: "Pesquisadora" },
                { name: "Milena Santos", info: "Pesquisadora" },
                { name: "Polhiane Hey", info: "Pesquisadora" },
                { name: "Renan Passos", info: "Pesquisador" },
                { name: "Sofia Guerra", info: "Pesquisadora" }
              ].map((membro, i) => (
                <div key={i} className="group p-5 bg-white border border-gray-100 rounded-2xl hover:border-sky-light transition-all flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${activeConfig.bgClass}`}></div>
                  <div>
                    <span className="font-bold text-gray-800 text-sm block leading-tight">{membro.name}</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{membro.info}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'reunioes':
        return (
          <div className="space-y-10">
             <h2 className={`text-4xl font-black ${activeConfig.textClass} tracking-tight`}>Reuniões e Oficinas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col gap-6">
                <div className={`w-16 h-16 rounded-2xl ${activeConfig.bgClass} flex items-center justify-center text-white text-2xl`}>
                  <i className="fas fa-building-columns"></i>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Arquivo Público</h3>
                  <p className="text-gray-600 font-medium">Quinzenalmente às sextas-feiras, 14h. Trabalho direto com fontes primárias do séc. XVIII.</p>
                </div>
              </div>
              <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-2xl">
                  <i className="fas fa-video"></i>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Encontros Online</h3>
                  <p className="text-gray-600 font-medium">Abertos a todos. Teoria, andamento de pesquisas e oficinas de paleografia jurídica.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                  <i className="fab fa-instagram text-magenta-vibrant"></i> Galeria Digital
                </h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-gray-200 rounded-2xl animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'dicionario':
        return (
          <div className="space-y-10">
            <h2 className={`text-4xl font-black ${activeConfig.textClass} tracking-tight`}>Dicionário Colonial</h2>
            <div className="p-8 bg-white border border-gray-100 rounded-[32px] max-w-3xl">
              <p className="text-gray-600 font-medium leading-relaxed">
                Projeto contínuo para decifrar a terminologia jurídica do sul da América Meridional (Séc. XVIII).
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                "Ação d'alma", "Alcaide", "Almotacé", "Alvará de fiança", "Autos de libelo", 
                "Câmara Municipal", "Carta de seguro", "Conselho Ultramarino", "Devassa", 
                "Escravizados", "Juiz de Órfãos", "Meirinho", "Ouvidoria", "Pessoas indígenas", 
                "Querela privada", "Razões finais", "Tabelião", "Testemunhas", "Tribunal da Relação"
              ].map((verbete, i) => (
                <button key={i} className={`text-left px-5 py-4 rounded-2xl border border-gray-100 bg-white hover:border-magenta-vibrant hover:text-magenta-vibrant hover:shadow-lg hover:shadow-magenta-vibrant/5 transition-all text-[11px] font-black uppercase tracking-wider`}>
                  {verbete}
                </button>
              ))}
            </div>
          </div>
        );
      case 'leituras':
        return (
          <div className="space-y-10">
            <h2 className={`text-4xl font-black ${activeConfig.textClass} tracking-tight`}>Acervo de Leituras</h2>
            <div className="bg-white p-10 rounded-[48px] shadow-sm border border-gray-100">
              <div className="font-poppins text-gray-700 space-y-6">
                {[
                  "ARAÚJO, Danielle Regina Wobeto de et al. Direito e feitiçaria na América portuguesa (XVIII). Revista IHGB, 2018.",
                  "ARAÚJO, Danielle Regina Wobeto de. Feitiçaria na Vila de Curitiba (XVIII). Direito e Práxis, 2018.",
                  "BRIGHENTE, Liliam Ferraresi. Condição jurídica do indígena na vila de Curitiba (1700-1750). Dissertação, UFPR, 2012.",
                  "MASSUCHETTO, Vanessa & PEREIRA, Luís F. L. O rei como dispensador da graça. Tempo 26, 2020.",
                  "PEREIRA, Luís Fernando Lopes. Cultura jurídica colonial: circularidades e saberes locais. Tese, UFPR, 2024."
                ].map((entry, idx) => (
                  <div key={idx} className={`bibliography-entry text-sm pb-6 border-b border-gray-50 last:border-0 hover:${activeConfig.textClass} transition-colors cursor-default`}>
                    {entry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'transcricoes':
        return (
          <div className="space-y-10">
            <h2 className={`text-4xl font-black ${activeConfig.textClass} tracking-tight`}>Transcrições</h2>
            <div className="bg-amber-50 p-12 rounded-[48px] border-2 border-amber-100 shadow-inner font-serif text-gray-800 italic relative">
              <div className="absolute top-8 right-12 text-amber-200 text-6xl opacity-20"><i className="fas fa-quote-right"></i></div>
              <h4 className="not-italic font-black mb-6 text-amber-900 border-b border-amber-200 pb-3 uppercase tracking-widest text-xs">Manuscrito de 1789</h4>
              <p className="text-xl leading-relaxed">
                Autos cíveis entre Agostinho da Silva Valle por seu Procurador e Domingos Fagundes dos Reis por dívida.
              </p>
              <div className="mt-12 flex justify-start">
                <button className="bg-amber-900/10 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-3 rounded-2xl text-xs not-italic font-black uppercase tracking-widest transition-all">
                  <i className="fas fa-file-pdf mr-2"></i> Abrir Documento Completo
                </button>
              </div>
            </div>
          </div>
        );
      case 'contato':
        return (
          <div className="space-y-12 text-center py-12">
            <h2 className={`text-4xl font-black ${activeConfig.textClass} tracking-tight`}>Canais de Comunicação</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: 'fa-envelope', label: 'Email Acadêmico', detail: 'contato@labhd.com.br', color: 'text-cyan-bright' },
                { icon: 'fa-instagram', label: 'Instagram', detail: '@labhd_ufpr', color: 'text-magenta-vibrant' },
                { icon: 'fa-map-location-dot', label: 'Localização', detail: 'UFPR • Sala 402', color: 'text-electric-blue' }
              ].map((item, i) => (
                <div key={i} className="p-12 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center group">
                  <div className={`w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center ${item.color} text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <span className="font-black text-gray-900 uppercase tracking-widest text-[10px] mb-2">{item.label}</span>
                  <span className="font-bold text-gray-500 text-sm">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'pesquisas':
      default:
        return (
          <div className="space-y-8 flex flex-col items-center justify-center py-32 text-center">
            <div className={`w-24 h-24 rounded-[32px] ${activeConfig.lightBgClass} flex items-center justify-center ${activeConfig.textClass} text-4xl mb-6`}>
              <i className="fas fa-microscope"></i>
            </div>
            <h2 className={`text-4xl font-black ${activeConfig.textClass} tracking-tight`}>Pesquisas Ativas</h2>
            <p className="text-gray-400 font-medium max-w-sm uppercase tracking-widest text-[10px]">Novos editais e projetos em breve.</p>
          </div>
        );
    }
  };

  return (
    <section id="tabs" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs - THE MAIN NAVIGATION HUB */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 sticky top-28 z-40 py-4 glass-effect rounded-full px-6 shadow-sm border border-gray-100">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`
                px-6 py-4 rounded-full font-montserrat font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500
                ${activeTab === tab.id 
                  ? `${tab.bgClass} text-white shadow-2xl scale-110` 
                  : `bg-transparent text-gray-400 hover:text-gray-900 hover:scale-105`
                }
              `}
              style={{
                boxShadow: activeTab === tab.id ? `0 15px 35px -5px ${tab.color}77` : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area with SMOOTH TRANSITION */}
        <div className={`relative transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-4 scale-[0.98]' : 'opacity-100 translate-y-0 scale-100'}`}>
          <div className={`min-h-[600px] bg-white rounded-[64px] p-10 md:p-20 border-[16px] ${activeConfig.borderClass} shadow-2xl shadow-gray-200/50`}>
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
