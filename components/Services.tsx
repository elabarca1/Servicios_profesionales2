import React from 'react';
import { BrainIcon, LotusIcon, UserIcon, ActivityIcon, LeafIcon, AwardIcon } from './Icons';
import { Service } from '../types';

const servicesList: Service[] = [
  {
    title: "PNL y Coaching Ontológico",
    description: "Sesiones transformadoras utilizando Programación Neuro Lingüística para reprogramar patrones mentales limitantes, combinadas con la mirada profunda del coaching para alcanzar metas de vida.",
    icon: <BrainIcon className="w-8 h-8 text-white" />
  },
  {
    title: "Terapias Holísticas Integrales",
    description: "Un enfoque sistémico que integra Acupuntura Oriental, Biomagnetismo y Aromaterapia con aceites esenciales destilados naturalmente para equilibrar cuerpo y mente.",
    icon: <LotusIcon className="w-8 h-8 text-white" />
  },
  {
    title: "Hipnosis Clínica",
    description: "Terapia especializada para el acceso al subconsciente, ideal para el manejo profundo de emociones, fobias, ansiedad y resignificación de traumas pasados.",
    icon: <UserIcon className="w-8 h-8 text-white" />
  },
  {
    title: "Tecnología Bio-Well",
    description: "Evaluación del estado energético y niveles de estrés mediante tecnología avanzada de visualización de descarga de gas (GDV), permitiendo un diagnóstico preciso del campo vital.",
    icon: <ActivityIcon className="w-8 h-8 text-white" />
  },
  {
    title: "Certificación Coach de Bienestar",
    description: "La Certificación Coach de Bienestar es una formación que capacita a un profesional para acompañar a otros en la construcción de una vida más saludable, equilibrada y consciente. Combina conocimientos de salud integral, psicología básica, cambio de hábitos, gestión emocional, mindfulness y herramientas de coaching.",
    icon: <LeafIcon className="w-8 h-8 text-white" />
  },
  {
    title: "Certificación Practitioner en PNL",
    description: "Es un programa de formación avalado por estándares internacionales que capacita a los participantes en las técnicas esenciales de la Programación Neurolingüística, permitiéndoles aplicar la PNL en su vida personal, profesional o terapéutica.",
    icon: <AwardIcon className="w-8 h-8 text-white" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform origin-top-right -z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-brand-900 sm:text-4xl">Servicios Profesionales</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Especializaciones diseñadas para integrar la salud física, mental y energética, además de formación profesional certificada.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-900 rounded-lg flex items-center justify-center mb-6 shadow-md group-hover:bg-brand-accent transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-accent transition-colors">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};