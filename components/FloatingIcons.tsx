
import React from 'react';

const icons = [
  // Lupa
  <svg key="lupa" className="line-art-path w-12 h-12" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
  // Mapa
  <svg key="mapa" className="line-art-path w-16 h-16" viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>,
  // Óculos
  <svg key="oculos" className="line-art-path w-14 h-14" viewBox="0 0 24 24"><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="12" r="3"></circle><path d="M9 12a3 3 0 0 1 6 0"></path><path d="M3 12h3m12 0h3"></path></svg>,
  // Pena
  <svg key="pena" className="line-art-path w-10 h-10" viewBox="0 0 24 24"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>,
  // Ampulheta
  <svg key="ampulheta" className="line-art-path w-12 h-12" viewBox="0 0 24 24"><path d="M5 2h14"></path><path d="M5 22h14"></path><path d="M6 2v6.7a6 6 0 0 0 3 5.2 6 6 0 0 0-3 5.2V22"></path><path d="M18 2v6.7a6 6 0 0 1-3 5.2 6 6 0 0 1 3 5.2V22"></path></svg>,
  // Balança
  <svg key="balanca" className="line-art-path w-16 h-16" viewBox="0 0 24 24"><line x1="12" y1="3" x2="12" y2="21"></line><line x1="7" y1="21" x2="17" y2="21"></line><path d="M2 7l10-2 10 2"></path><path d="M4 17a3 3 0 1 0 6 0"></path><path d="M14 17a3 3 0 1 0 6 0"></path></svg>,
  // Globo
  <svg key="globo" className="line-art-path w-14 h-14" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
  // Lâmpada
  <svg key="lampada" className="line-art-path w-12 h-12" viewBox="0 0 24 24"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.37-1.97.37-3a5.45 5.45 0 0 0-10.91 0c0 1.03.2 2.02.37 3a6.82 6.82 0 0 1 0 6H15.09a6.82 6.82 0 0 1 0-6z"></path></svg>,
];

const FloatingIcons: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 15 }).map((_, i) => {
        const Icon = icons[i % icons.length];
        const randomLeft = Math.floor(Math.random() * 90);
        const randomTop = Math.floor(Math.random() * 90);
        const randomDelay = Math.random() * 5;
        const randomDuration = 10 + Math.random() * 10;
        const color = ['text-electric-blue', 'text-magenta-vibrant', 'text-solar-yellow', 'text-lime-green', 'text-cyan-bright'][i % 5];
        
        return (
          <div
            key={i}
            className={`absolute ${color} opacity-[0.08]`}
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              animation: `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`,
            }}
          >
            {Icon}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
