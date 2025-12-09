import React from 'react';
import { StarIcon } from './Icons';

const testimonials = [
  {
    name: "María Fernanda G.",
    role: "Ejecutiva",
    text: "El programa de manejo de estrés cambió mi vida laboral. Las técnicas de PNL que Endys me enseñó son herramientas que uso a diario para mantener mi centro.",
  },
  {
    name: "Carlos R.",
    role: "Paciente de Terapia",
    text: "Llegué buscando alivio físico con acupuntura y encontré una sanación emocional profunda a través de la hipnosis. Un profesional integral y humano.",
  },
  {
    name: "Elena B.",
    role: "Adulto Mayor",
    text: "Gracias a las terapias y la atención del programa para adultos mayores, he recuperado mi vitalidad y alegría. Me siento escuchada y cuidada.",
  },
  {
    name: "Ricardo M.",
    role: "Emprendedor",
    text: "La medición con tecnología Bio-Well fue reveladora. Ver gráficamente mi estado energético me ayudó a entender mis patrones de cansancio y optimizar mi rendimiento.",
  },
  {
    name: "Sofía L.",
    role: "Madre y Profesional",
    text: "Los aceites esenciales destilados por Endys tienen una pureza que no había encontrado antes. Su uso en aromaterapia ha traído una armonía increíble a mi hogar.",
  },
  {
    name: "Javier D.",
    role: "Cliente de Coaching",
    text: "Estaba estancado en mi propósito de vida. Las sesiones de coaching ontológico me dieron la claridad mental y el impulso emocional que necesitaba para avanzar.",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-900 relative text-white scroll-mt-24">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl">Testimonios</h2>
          <p className="mt-4 text-lg text-brand-accent/80">Historias de transformación y bienestar</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-brand-800/50 backdrop-blur-sm p-8 rounded-xl border border-brand-700 hover:border-brand-accent/50 transition-colors duration-300">
              <div className="flex mb-4 space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-300 italic mb-6 text-lg leading-relaxed">"{item.text}"</p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {item.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-brand-accent uppercase tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};