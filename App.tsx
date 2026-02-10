
import React, { useMemo } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import FloatingIcons from './components/FloatingIcons';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TabSection from './components/TabSection';
import InfoBar from './components/InfoBar';
import Footer from './components/Footer';
import Sitemap from './components/Sitemap';

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

const MainLanding: React.FC<{ initialTab?: string }> = ({ initialTab }) => {
  return (
    <div className="relative min-h-screen">
      <FloatingIcons />
      <Navbar />
      <Hero />
      <TabSection activeTabId={initialTab as any} />
      <InfoBar />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const isPreview = useMemo(() => checkPreviewEnvironment(), []);
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            isPreview 
              ? <Navigate to="/sitemap" replace /> 
              : <Navigate to="/lp-video" replace />
          } 
        />
        <Route path="/lp-video" element={<MainLanding />} />
        
        {/* Deep link routes for Preview and Navigation */}
        <Route path="/sobre" element={<MainLanding initialTab="sobre" />} />
        <Route path="/reunioes" element={<MainLanding initialTab="reunioes" />} />
        <Route path="/dicionario" element={<MainLanding initialTab="dicionario" />} />
        <Route path="/pesquisas" element={<MainLanding initialTab="pesquisas" />} />
        <Route path="/transcricoes" element={<MainLanding initialTab="transcricoes" />} />
        <Route path="/equipe" element={<MainLanding initialTab="equipe" />} />
        <Route path="/leituras" element={<MainLanding initialTab="leituras" />} />
        <Route path="/contato" element={<MainLanding initialTab="contato" />} />
        
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
