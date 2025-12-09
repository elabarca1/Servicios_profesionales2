import React from 'react';
import { MailIcon, PhoneIcon } from './Icons';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Endys Labarca</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Acompañando tu proceso de transformación personal hacia un bienestar integral y sistémico. Especialista en PNL, Hipnosis y Terapias Holísticas.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-brand-accent transition-colors">Inicio</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-brand-accent transition-colors">Servicios</a></li>
              <li><a href="#programs" onClick={(e) => handleScroll(e, '#programs')} className="hover:text-brand-accent transition-colors">Programas</a></li>
              <li><a href="#cv" onClick={(e) => handleScroll(e, '#cv')} className="hover:text-brand-accent transition-colors">Resumen Curricular</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
             <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
             <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3 group">
                  <MailIcon className="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" />
                  <a href="mailto:contacto@caminodebienestar.com" className="text-sm hover:text-white transition-colors">
                    contacto@caminodebienestar.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3 group">
                   <PhoneIcon className="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" />
                   <span className="text-sm">+58 (XXX) XXX-XXXX</span>
                </div>
             </div>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Endys Alberto Labarca - Camino de Bienestar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};