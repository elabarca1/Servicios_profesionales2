import React from 'react';
import { DetailedProgram } from '../types';
import { CheckCircleIcon, SparkleIcon } from './Icons';

const programs: DetailedProgram[] = [
  {
    id: 'protocolo-21-dias',
    title: 'Protocolo de 21 días de Relajación Interna y Espiritual',
    subtitle: 'Armonía para Cuerpo, Mente y Alma',
    targetAudience: 'Personas que buscan reducir el ruido mental, reconectar con su esencia y establecer una práctica diaria de paz interior.',
    description: 'Descubrirás cómo crear tu propio protocolo de relajación espiritual en un viaje de 21 días. Este programa está diseñado para armonizar cuerpo, mente y alma desde el primer día, estableciendo hábitos duraderos de serenidad y conexión espiritual.',
    externalLink: 'https://21diasrelajacion.netlify.app/',
    benefits: [
      'Reducir la tensión acumulada en el cuerpo físico.',
      'Bajar el ruido mental y la ansiedad cotidiana.',
      'Conectar conscientemente con el cuerpo.',
      'Crear el primer anclaje sólido de serenidad.'
    ],
    methodology: [
      'Prácticas diarias progresivas durante 21 días.',
      'Técnicas de respiración y escaneo corporal espiritual.',
      'Rituales de visualización y expansión de la conciencia.'
    ],
    modules: [
      { 
        title: 'FASE 1 (Días 1–7): Desprogramación del Estrés', 
        description: 'Calma del Sistema Nervioso: Respiración Fundacional, Escaneo Corporal Espiritual, Liberación del Peso, Anclaje de Paz, Expansión del Corazón, Baño de Luz y Ritual de Descanso.' 
      },
      { 
        title: 'FASE 2 (Días 8–14): Reprogramación Emocional', 
        description: 'Trabajo Energético: Visualización del "Yo en Paz", Círculo de Protección, Desprogramación del Estrés Crónico, Reemplazo Energético, Respiración del Alma y Ritual de Renacimiento.' 
      },
      { 
        title: 'FASE 3 (Días 15–21): Expansión Interior', 
        description: 'Consolidación de la Paz: Fusión con el Silencio, Activación del "Yo Superior", Conexión con la Naturaleza, Meditación del Corazón Luminoso, Gratitud y Ritual de Coronación Espiritual.' 
      }
    ]
  },
  {
    id: 'estres',
    title: 'Programa de Manejo de Estrés',
    subtitle: 'Equilibrio Vital & Resiliencia',
    targetAudience: 'Ejecutivos, profesionales y personas con alta carga mental.',
    description: 'Este programa aborda el estrés desde una perspectiva multidimensional. No solo aliviamos los síntomas físicos inmediatos, sino que utilizamos tecnología Bio-Well y PNL para reconfigurar la percepción de las situaciones estresantes, permitiendo al paciente recuperar el control y la calma de manera sostenible ante los desafíos diarios.',
    benefits: [
      'Reducción medible de niveles de cortisol y ansiedad.',
      'Herramientas de autogestión emocional en tiempo real.',
      'Mejora significativa en la calidad del sueño y descanso.',
      'Mayor claridad mental para la toma de decisiones.'
    ],
    methodology: [
      'Diagnóstico inicial con sistema Bio-Well para medir niveles de energía y estrés.',
      'Técnicas de anclaje de PNL para desactivar disparadores de ansiedad.',
      'Uso de aceites esenciales naturales (destilación propia) para regulación límbica.'
    ],
    modules: [
      { title: 'Fase 1: Descompresión', description: 'Técnicas inmediatas de respiración y acupuntura para bajar niveles de cortisol.' },
      { title: 'Fase 2: Reestructuración', description: 'Coaching ontológico para cambiar la relación con las fuentes de estrés.' },
      { title: 'Fase 3: Autonomía', description: 'Creación de rutinas de bienestar personalizadas.' }
    ]
  },
  {
    id: 'adulto-mayor',
    title: 'Atención del Adulto Mayor',
    subtitle: 'Plenitud Dorada con Terapias y PNL',
    targetAudience: 'Adultos mayores que buscan calidad de vida y estimulación cognitiva.',
    description: 'Diseñado para honrar y revitalizar la experiencia de vida del adulto mayor. Combinamos la calidez humana con terapias de estimulación neurocognitiva y biomagnetismo para mitigar el deterioro natural, fomentar la independencia y promover un estado de plenitud emocional y física en esta etapa dorada.',
    benefits: [
      'Estimulación y mantenimiento de la memoria a corto plazo.',
      'Alivio de dolencias físicas mediante terapias no invasivas.',
      'Fortalecimiento del sentido de propósito y autoestima.',
      'Reducción de sentimientos de soledad o aislamiento.'
    ],
    methodology: [
      'Estimulación cognitiva mediante patrones lingüísticos de PNL.',
      'Biomagnetismo para el manejo de dolencias físicas comunes.',
      'Acompañamiento emocional para el manejo de soledad o duelo.',
      'Acupuntura para el manejo de dolores crónicos.'
    ],
    modules: [
      { title: 'Fase 1: Vitalidad Física', description: 'Terapias suaves de acupuntura y movilidad.' },
      { title: 'Fase 2: Agilidad Mental', description: 'Ejercicios de PNL para la memoria y el enfoque.' },
      { title: 'Fase 3: Conexión Emocional', description: 'Integración social y resignificación de vida.' }
    ]
  },
  {
    id: 'hipnosis',
    title: 'Hipnosis para Manejo de Emociones',
    subtitle: 'Renacer Emocional Profundo',
    targetAudience: 'Personas enfrentando bloqueos, fobias, traumas o desbordes emocionales.',
    description: 'Un proceso terapéutico profundo que facilita el acceso a los recursos inconscientes de la mente. A través de la hipnosis clínica en un entorno seguro, trabajamos para desbloquear traumas arraigados, superar fobias y modificar patrones de conducta limitantes, facilitando una transformación emocional rápida.',
    benefits: [
      'Liberación definitiva de cargas emocionales del pasado.',
      'Superación de fobias y miedos paralizantes.',
      'Reprogramación de hábitos y conductas automáticas.',
      'Sensación profunda de paz interior y empoderamiento.'
    ],
    methodology: [
      'Inducción hipnótica Ericksoniana.',
      'Reprogramación de patrones subconscientes.',
      'Liberación de cargas emocionales acumuladas.'
    ],
    modules: [
      { title: 'Fase 1: Identificación', description: 'Mapeo de bloqueos emocionales subconscientes.' },
      { title: 'Fase 2: Transformación', description: 'Sesiones de hipnosis para resignificar traumas.' },
      { title: 'Fase 3: Consolidación', description: 'Anclaje de nuevas respuestas emocionales positivas.' }
    ]
  }
];

export const Programs: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programs" className="py-20 bg-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-brand-900 sm:text-4xl">Programas Especializados</h2>
          <p className="mt-4 text-xl text-slate-600">Desarrollados bajo criterios clínicos y holísticos.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {programs.map((program) => (
            <div key={program.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border-t-4 border-brand-accent">
              <div className="p-8 flex-1">
                <h3 className="text-2xl font-bold text-brand-900 mb-2">{program.title}</h3>
                <p className="text-brand-accent font-medium text-sm uppercase tracking-wide mb-4">{program.subtitle}</p>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>

                {/* Benefits Section */}
                <div className="mb-6 bg-brand-light p-4 rounded-lg border border-brand-accent/20">
                  <h4 className="font-bold text-brand-800 mb-3 text-sm flex items-center">
                    <SparkleIcon className="w-4 h-4 mr-2 text-brand-accent" />
                    Beneficios y Resultados
                  </h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-700">
                        <span className="mr-2 text-brand-accent">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                   <h4 className="font-bold text-brand-800 mb-2 text-sm">Metodología Clave:</h4>
                   <ul className="space-y-2">
                     {program.methodology.map((method, idx) => (
                       <li key={idx} className="flex items-start text-sm text-slate-600">
                         <CheckCircleIcon className="w-4 h-4 text-brand-accent mr-2 mt-0.5 flex-shrink-0" />
                         {method}
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-bold text-brand-800 mb-3 text-sm">Estructura del Programa:</h4>
                  <div className="space-y-3">
                    {program.modules.map((mod, idx) => (
                      <div key={idx} className="text-sm border-l-2 border-brand-900 pl-3">
                        <p className="font-semibold text-slate-800">{mod.title}</p>
                        <p className="text-slate-500 text-xs">{mod.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto">
                {program.externalLink ? (
                  <a 
                    href={program.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 px-4 bg-white border border-brand-900 text-brand-900 rounded-md font-semibold hover:bg-brand-900 hover:text-white transition-colors"
                  >
                    Solicitar Información
                  </a>
                ) : (
                  <a 
                    href="#contact" 
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="block w-full text-center py-2 px-4 bg-white border border-brand-900 text-brand-900 rounded-md font-semibold hover:bg-brand-900 hover:text-white transition-colors"
                  >
                    Solicitar Información
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};