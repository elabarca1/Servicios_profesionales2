import React from 'react';
import { SparkleIcon } from './Icons';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-slate-50 py-20 lg:py-32 overflow-hidden scroll-mt-24">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-brand-accent blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 rounded-full bg-blue-400 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-6">
            <SparkleIcon className="w-4 h-4 mr-2" />
            <span>Camino de Bienestar</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-900 tracking-tight mb-6">
            Despierta lo Mejor de Ti <br className="hidden md:block" />
            <span className="text-brand-accent italic">Desde tu Interior</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
            Master en PNL, Coach Ontológico y Terapeuta Holístico. Acompañándote en el despertar de la conciencia y el bienestar integral a través de métodos sistémicos y terapias avanzadas.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
            <a
              href="#programs"
              onClick={(e) => handleScroll(e, '#programs')}
              className="px-8 py-3 text-base font-semibold text-white bg-brand-900 rounded-lg shadow-lg hover:bg-brand-800 transition-transform transform hover:-translate-y-0.5"
            >
              Conoce Mis Programas
            </a>
            <a
              href="#cv"
              onClick={(e) => handleScroll(e, '#cv')}
              className="px-8 py-3 text-base font-semibold text-brand-900 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-colors"
            >
              Resumen Curricular
            </a>
          </div>
        </div>

        {/* Vision Block */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-brand-accent relative">
          <div className="absolute -top-6 left-8 bg-brand-accent text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded shadow-md">
            Mi Visión
          </div>
          <blockquote className="text-lg md:text-xl text-slate-700 italic font-serif leading-relaxed text-center md:text-left">
            "La vida me ha permitido desarrollarme en la parte integral sistémica y holística, con especializaciones en el manejo de terapias de salud en Acupuntura, Biomagnetismo y cuántico, apoyando a personas al despertar de la conciencia."
          </blockquote>
        </div>
      </div>
    </section>
  );
};