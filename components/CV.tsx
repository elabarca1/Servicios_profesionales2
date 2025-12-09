import React from 'react';
import { DownloadIcon } from './Icons';

export const CV: React.FC = () => {
  return (
    <section id="cv" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white shadow-2xl border border-slate-200 p-8 md:p-16 rounded-sm relative">
          
          {/* Header of CV */}
          <div className="border-b-2 border-brand-900 pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-3xl font-serif font-bold text-brand-900 uppercase tracking-wide">Endys Alberto Labarca</h2>
              <p className="text-brand-accent font-semibold text-lg mt-1">Terapeuta Holístico Integral & Master Coach</p>
            </div>
            <div className="text-right hidden md:block">
              <button className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none" onClick={() => window.print()}>
                <DownloadIcon className="w-4 h-4 mr-2" />
                Imprimir / PDF
              </button>
            </div>
          </div>

          {/* CV Content Grid */}
          <div className="space-y-10">
            
            {/* Profile Summary */}
            <div>
              <h3 className="text-lg font-bold text-brand-900 uppercase border-b border-slate-200 pb-2 mb-4">Perfil Profesional</h3>
              <p className="text-slate-700 leading-relaxed text-justify">
                Profesional integral con amplia trayectoria en el desarrollo humano y terapias complementarias. Especializado en la convergencia de metodologías sistémicas (PNL, Coaching) y terapias de salud holística (Acupuntura, Biomagnetismo). Visionario enfocado en el despertar de la conciencia y el bienestar integral, con capacidad probada para liderar programas de salud mental y emocional para diversas poblaciones, incluyendo adultos mayores y ejecutivos.
              </p>
            </div>

            {/* Education & Specializations */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-brand-900 uppercase border-b border-slate-200 pb-2 mb-4">Formación Especializada</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="font-bold text-slate-800">Máster en Programación Neuro Lingüística (PNL)</span>
                    <span className="text-slate-600 text-sm">Certificación Avanzada</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold text-slate-800">Coach Ontológico y de Vida</span>
                    <span className="text-slate-600 text-sm">Acompañamiento integral</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold text-slate-800">Especialización en Hipnosis</span>
                    <span className="text-slate-600 text-sm">Terapia Clínica y Emocional</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold text-slate-800">Tecnología Bio-Well</span>
                    <span className="text-slate-600 text-sm">Certificación en medición de campo energético</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-brand-900 uppercase border-b border-slate-200 pb-2 mb-4">Terapias & Habilidades</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="font-bold text-slate-800">Medicina Tradicional China</span>
                    <span className="text-slate-600 text-sm">Acupuntura Oriental</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold text-slate-800">Biomagnetismo Médico</span>
                    <span className="text-slate-600 text-sm">Equilibrio de pH y patógenos</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold text-slate-800">Aromaterapia Profesional</span>
                    <span className="text-slate-600 text-sm">Destilador de aceites esenciales naturales</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="font-bold text-slate-800">Conferencista Internacional</span>
                    <span className="text-slate-600 text-sm">Gran Maestro (Cámara Internacional de Conferencistas)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Leadership */}
            <div>
              <h3 className="text-lg font-bold text-brand-900 uppercase border-b border-slate-200 pb-2 mb-4">Liderazgo Institucional</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">CEO & Fundador</h4>
                  <p className="text-brand-accent font-medium">Comunidad "Camino de Bienestar"</p>
                </div>
                <div className="mt-2 sm:mt-0 sm:text-right max-w-md">
                   <p className="text-slate-600 text-sm">
                     Liderazgo de una comunidad enfocada en la salud integral, impartiendo talleres, terapias grupales y programas de formación continua.
                   </p>
                </div>
              </div>
            </div>

          </div>
          
          {/* Footer of CV */}
          <div className="mt-16 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
            <p>Documento generado digitalmente | Endys Alberto Labarca</p>
          </div>
        </div>
      </div>
    </section>
  );
};