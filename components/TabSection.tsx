
import React, { useState, useEffect } from 'react';

type TabId = 'sobre' | 'reunioes' | 'dicionario' | 'pesquisas' | 'transcricoes' | 'equipe' | 'leituras' | 'contato';

interface TabConfig {
  id: TabId;
  label: string;
  color: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
}

const TABS: TabConfig[] = [
  { id: 'sobre', label: 'Sobre', color: '#0066cc', bgClass: 'bg-electric-blue', textClass: 'text-electric-blue', borderClass: 'border-electric-blue' },
  { id: 'reunioes', label: 'Reuniões', color: '#ffcc00', bgClass: 'bg-solar-yellow', textClass: 'text-solar-yellow', borderClass: 'border-solar-yellow' },
  { id: 'dicionario', label: 'Dicionário', color: '#d6006e', bgClass: 'bg-magenta-vibrant', textClass: 'text-magenta-vibrant', borderClass: 'border-magenta-vibrant' },
  { id: 'pesquisas', label: 'Pesquisas', color: '#8cc63f', bgClass: 'bg-lime-green', textClass: 'text-lime-green', borderClass: 'border-lime-green' },
  { id: 'transcricoes', label: 'Transcrições', color: '#9333ea', bgClass: 'bg-deep-purple', textClass: 'text-deep-purple', borderClass: 'border-deep-purple' },
  { id: 'equipe', label: 'Equipe', color: '#38bdf8', bgClass: 'bg-sky-light', textClass: 'text-sky-light', borderClass: 'border-sky-light' },
  { id: 'leituras', label: 'Leituras', color: '#15803d', bgClass: 'bg-forest-green', textClass: 'text-forest-green', borderClass: 'border-forest-green' },
  { id: 'contato', label: 'Contato', color: '#00bcd4', bgClass: 'bg-cyan-bright', textClass: 'text-cyan-bright', borderClass: 'border-cyan-bright' },
];

interface TabSectionProps {
  activeTabId?: TabId;
}

const TabSection: React.FC<TabSectionProps> = ({ activeTabId }) => {
  const [activeTab, setActiveTab] = useState<TabId>(activeTabId || 'sobre');

  useEffect(() => {
    if (activeTabId) {
      setActiveTab(activeTabId);
    }
  }, [activeTabId]);

  const activeConfig = TABS.find(t => t.id === activeTab) || TABS[0];

  const renderContent = () => {
    switch (activeTab) {
      case 'sobre':
        return (
          <div className="animate-fadeIn space-y-8">
            <h2 className={`text-3xl font-bold ${activeConfig.textClass}`}>O que é o LabHD?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  O LabHD dá continuidade a uma linha de pesquisa iniciada há mais de dez anos, que investiga os processos coloniais do século XVIII na região sul do Império Português – a antiga Capitania do Sul.
                </p>
                <p>
                  O acervo é composto por mais de cinco mil processos judiciais oriundos de vilas como Castro, São Francisco, Lages, Laguna, Curitiba e da comarca de Paranaguá. Originalmente, essa documentação nem sequer estava catalogada, mas hoje a maior parte já foi organizada e analisada.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-electric-blue">
                <p className="italic">
                  "Estes documentos são uma janela única para compreender como a justiça era administrada em vilas distantes e de fronteira."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white shadow-sm border rounded-xl">
                <h3 className="font-bold mb-3 text-lg">Nas vilas (Justiça Ordinária)</h3>
                <p className="text-sm text-gray-600">Aplicada por juízes locais ("rústicos") sem formação formal, baseada no costume e direito local.</p>
              </div>
              <div className="p-6 bg-white shadow-sm border rounded-xl">
                <h3 className="font-bold mb-3 text-lg">Na comarca (Ouvidor)</h3>
                <p className="text-sm text-gray-600">Autoridade máxima, bacharel de Coimbra representando a justiça real e a lei escrita técnica.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Objetivos da Análise:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Identificar argumentos das decisões judiciais.",
                  "Verificar cumprimento de ritos e procedimentos.",
                  "Buscar atores sociais marginalizados (mulheres, indígenas, negros, escravizados).",
                  "Investigar a tensão entre juízes leigos e ouvidores letrados."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg border">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full ${activeConfig.bgClass} text-white flex items-center justify-center text-xs font-bold`}>{i+1}</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case 'equipe':
        return (
          <div className="animate-fadeIn">
            <h2 className={`text-3xl font-bold mb-10 ${activeConfig.textClass}`}>Nossa Equipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className={`p-8 rounded-3xl border-2 ${activeConfig.borderClass} bg-white shadow-xl`}>
                <h3 className="text-2xl font-bold mb-2">Prof. Luís Fernando Lopes Pereira</h3>
                <p className="text-gray-500 font-medium uppercase text-xs tracking-widest mb-4">Coordenador</p>
                <p className="text-gray-600 font-medium">História do Direito na Faculdade de Direito da UFPR.</p>
              </div>
              <div className={`p-8 rounded-3xl border-2 ${activeConfig.borderClass} bg-white shadow-xl`}>
                <h3 className="text-2xl font-bold mb-2">Prof. Vanessa Massuchetto</h3>
                <p className="text-gray-500 font-medium uppercase text-xs tracking-widest mb-4">Vice-coordenadora</p>
                <p className="text-gray-600 text-sm">Doutora pela UFPR, pesquisadora no Instituto Max Planck (Alemanha).</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Lucca Fiori Zarth", info: "Bolsista PROEC" },
                { name: "Graziella Martins", info: "Graduanda em Direito" },
                { name: "Ana Luísa Polaquini Caetano", info: "Graduanda em Direito" },
                { name: "Ana Paula Rocha", info: "Bacharela em Direito / Música" },
                { name: "Bianca Santoni", info: "Graduanda em Direito" },
                { name: "Eduarda Schaefer", info: "Graduanda em Direito" },
                { name: "Ester Figueiredo", info: "Graduanda em Direito" },
                { name: "Felipe Teixeira", info: "Graduando em Direito" },
                { name: "Gustavo Kosop de Moura", info: "Graduando em Direito" },
                { name: "Henrique Zanin de Aragão", info: "Graduando em Direito" },
                { name: "Isabelle de Lima Sanchez", info: "Graduanda em Direito" },
                { name: "Leonardo Araújo Sarrão", info: "Graduando em Direito" },
                { name: "Letícia de Mello Madaleno", info: "Graduanda em Direito" },
                { name: "Letícia Parpinelli", info: "Graduanda em Direito" },
                { name: "Maria Eduarda dos Anjos e Silva", info: "Graduanda em Direito (UFES)" },
                { name: "Maria Eduarda Kordel Vriesman", info: "Graduanda em Direito" },
                { name: "Maria Rodrigues", info: "Bacharela e Mestra em Direito" },
                { name: "Mariana Terra", info: "Graduanda em Direito" },
                { name: "Milena Yasmin dos Santos", info: "Graduanda em Direito" },
                { name: "Polhiane Hey", info: "Graduanda em Direito" },
                { name: "Renan Passos", info: "Graduando em Direito" },
                { name: "Sofia Guerra", info: "Graduanda em Direito" }
              ].map((membro, i) => (
                <div key={i} className="flex flex-col p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                  <span className="font-bold text-gray-800">{membro.name}</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{membro.info}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'reunioes':
        return (
          <div className="animate-fadeIn space-y-10">
            <h2 className={`text-3xl font-bold ${activeConfig.textClass}`}>Calendário e Atividades</h2>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className={`w-20 h-20 rounded-full ${activeConfig.bgClass} flex items-center justify-center text-white text-3xl shrink-0`}>
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Encontros no Arquivo Público</h3>
                  <p className="text-gray-600">Quinzenalmente, às sextas-feiras, às 14h. Dedicados à consulta, análise e discussão de fontes primárias.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl shrink-0">
                  <i className="fas fa-laptop"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reuniões Online</h3>
                  <p className="text-gray-600">Abertas a todes. Tratamos de teoria, andamento de pesquisas e oficinas de paleografia.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <i className="fab fa-instagram text-pink-500"></i> Atividades Recentes
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "https://www.instagram.com/p/DNgKOBitjjh/",
                  "https://www.instagram.com/p/DKzvqifxeAK/",
                  "https://www.instagram.com/p/DJo36Iqtlqo/",
                  "https://www.instagram.com/p/DI4mSgFSK6Z/",
                  "https://www.instagram.com/p/DHY8WJQNBj-/",
                  "https://www.instagram.com/p/DHJ3AawSoWE/"
                ].map((link, i) => (
                  <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center group overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                      <i className="fas fa-external-link-alt text-white opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </div>
                    <i className="fab fa-instagram text-4xl text-gray-300"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        );
      case 'dicionario':
        return (
          <div className="animate-fadeIn space-y-8">
            <h2 className={`text-3xl font-bold ${activeConfig.textClass}`}>Dicionário de Direito Colonial</h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl">
              Iniciativa coletiva para decifrar conceitos, cargos e práticas jurídicas que circulavam na América Meridional durante o século XVIII.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Ação d'alma", "Ação de assinação de dez dias", "Ação de embargos", "Ação peremptória", 
                "Agravo (cível e crime)", "Alcaide", "Almotacé", "Alvará de fiança", "Autos de justificação", 
                "Autos de libelo (cível e crime)", "Autos de livramento crime", "Câmara Municipal", 
                "Carta de seguro", "Casa da Suplicação", "Conselho Ultramarino", "Contradita/contrariedade", 
                "Devassa geral e devassa especial", "Escravizados", "Escrivão", "Juiz de Órfãos", 
                "Juiz de Vintena", "Juiz Ordinário", "Meirinho", "Mulheres", "Órfãos e expostos", 
                "Ouvidoria de Comarca", "Pessoas indígenas", "Pessoas negras", 
                "Procuradores", "Promotor da câmara", "Promotor da ouvidoria", 
                "Querela privada", "Razões finais", "Rito Ordinário", "Rito Sumário", 
                "Rito Sumaríssimo", "Sentença e despacho", "Tabelião de notas", "Testemunhas", 
                "Tribunal da Relação", "Vereadores"
              ].map((verbete, i) => (
                <button key={i} className="text-left px-4 py-3 rounded-lg border border-gray-100 bg-white hover:border-magenta-vibrant hover:text-magenta-vibrant transition-all text-xs font-bold shadow-sm uppercase tracking-tight">
                  {verbete}
                </button>
              ))}
            </div>
          </div>
        );
      case 'leituras':
        return (
          <div className="animate-fadeIn space-y-8">
            <h2 className={`text-3xl font-bold ${activeConfig.textClass}`}>Pesquisas e Leituras</h2>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="font-poppins text-gray-700 space-y-2">
                {[
                  "ARAÚJO, Danielle Regina Wobeto de et al. Direito e feitiçaria na América portuguesa (XVIII). Revista IHGB, 2018.",
                  "ARAÚJO, Danielle Regina Wobeto de. Feitiçaria na Vila de Curitiba: direito e misoginia (XVIII). Direito e Práxis, 2018.",
                  "BRIGHENTE, Liliam Ferraresi. Condição jurídica do indígena na vila de Curitiba (1700-1750). Dissertação, UFPR, 2012.",
                  "FURMANN, Ivan. Cultura jurídica e transição entre colônia e império. Tese, UFPR, 2013.",
                  "MASSUCHETTO, Vanessa & PEREIRA, Luís F. L. O rei como dispensador da graça. Tempo 26, 2020.",
                  "MASSUCHETTO, Vanessa. Mulheres e saberes normativos na região Platina (1743-1773). CIDEHUS, 2025.",
                  "PEREIRA, Luís Fernando Lopes. Cultura jurídica colonial: circularidades e saberes locais. Tese, UFPR, 2024.",
                  "RODRIGUES, Maria Aparecida Alves. Mulheres rés em processos criminais na Vila de Curitiba (1803-1816). Dissertação, 2025."
                ].map((entry, idx) => (
                  <div key={idx} className="bibliography-entry text-sm border-b border-gray-50 pb-4 last:border-0">
                    {entry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'transcricoes':
        return (
          <div className="animate-fadeIn space-y-8">
            <h2 className={`text-3xl font-bold ${activeConfig.textClass}`}>Transcrições de Documentos</h2>
            <div className="bg-amber-50 p-10 rounded-3xl border-2 border-amber-200 shadow-inner font-serif text-gray-800 italic">
              <h4 className="not-italic font-bold mb-4 text-amber-900 border-b border-amber-200 pb-2">Manuscrito de 1789</h4>
              <p className="line-height-extra">
                Autos cíveis entre Agostinho da Silva Valle por seu Procurador e Domingos Fagundes dos Reis por dívida.
              </p>
              <div className="mt-8 flex justify-end">
                <button className="bg-amber-900 text-white px-6 py-2 rounded-lg text-sm not-italic font-bold flex items-center gap-2">
                  <i className="fas fa-file-pdf"></i> Visualizar Documento
                </button>
              </div>
            </div>
          </div>
        );
      case 'contato':
        return (
          <div className="animate-fadeIn space-y-8 text-center py-10">
            <h2 className={`text-3xl font-bold ${activeConfig.textClass}`}>Entre em Contato</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Estamos localizados no Campus Central da UFPR e abertos para parcerias e consultas acadêmicas.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
                <i className="fas fa-envelope text-cyan-bright text-3xl mb-4"></i>
                <span className="font-bold text-gray-800">Email</span>
                <span className="text-sm text-gray-500">contato@labhd.com.br</span>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
                <i className="fab fa-instagram text-magenta-vibrant text-3xl mb-4"></i>
                <span className="font-bold text-gray-800">Instagram</span>
                <span className="text-sm text-gray-500">@labhd_ufpr</span>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
                <i className="fas fa-map-marker-alt text-electric-blue text-3xl mb-4"></i>
                <span className="font-bold text-gray-800">Local</span>
                <span className="text-sm text-gray-500">UFPR, Sala 402</span>
              </div>
            </div>
          </div>
        );
      case 'pesquisas':
      default:
        return (
          <div className="animate-fadeIn space-y-8 flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 rounded-full bg-lime-green/20 flex items-center justify-center text-lime-green text-4xl mb-6">
              <i className="fas fa-microscope"></i>
            </div>
            <h2 className={`text-3xl font-bold ${activeConfig.textClass}`}>Pesquisas em Andamento</h2>
            <p className="text-gray-500 max-w-md">Em breve, detalharemos aqui os projetos individuais e coletivos em desenvolvimento.</p>
          </div>
        );
    }
  };

  return (
    <section id="tabs" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-5 py-3 rounded-full font-montserrat font-bold text-[10px] uppercase tracking-[0.15em] transition-all duration-300
                ${activeTab === tab.id 
                  ? `${tab.bgClass} text-white shadow-lg scale-105` 
                  : `bg-gray-100 text-gray-400 hover:bg-gray-200 hover:scale-105`
                }
              `}
              style={{
                boxShadow: activeTab === tab.id ? `0 10px 25px -5px ${tab.color}55` : 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className={`min-h-[550px] bg-gray-50/50 rounded-[48px] p-8 md:p-16 border-t-[12px] ${activeConfig.borderClass} transition-all duration-500 shadow-sm`}>
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default TabSection;
