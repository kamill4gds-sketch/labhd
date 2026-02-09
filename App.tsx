
import React, { useMemo } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import FloatingIcons from './components/FloatingIcons';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Feed from './components/Feed';
import InfoBar from './components/InfoBar';
import Footer from './components/Footer';
import Sitemap from './components/Sitemap';

/**
 * Detecção de Ambiente: Verifica se a URL contém indicadores de proxies ou containers
 * comuns em ambientes de desenvolvimento em nuvem.
 */
const checkPreviewEnvironment = (): boolean => {
  const indicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];
  const currentHostname = window.location.hostname;
  const currentHref = window.location.href;
  
  return indicators.some(indicator => 
    currentHostname.includes(indicator) || currentHref.includes(indicator)
  );
};

const MainLanding: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <FloatingIcons />
      <Navbar />
      <Hero />
      <Highlights />
      <Feed />
      <InfoBar />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const isPreview = useMemo(() => checkPreviewEnvironment(), []);
  
  // Seleção de Roteador baseado no ambiente
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        {/* Redirecionamento Inteligente na Rota Raiz */}
        <Route 
          path="/" 
          element={
            isPreview 
              ? <Navigate to="/sitemap" replace /> 
              : <Navigate to="/lp-video" replace />
          } 
        />
        
        {/* Rota principal da Landing Page */}
        <Route path="/lp-video" element={<MainLanding />} />
        
        {/* Rota de Sitemap para facilitação em Dev */}
        <Route path="/sitemap" element={<Sitemap />} />

        {/* Fallback para 404 - Redireciona conforme ambiente */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
