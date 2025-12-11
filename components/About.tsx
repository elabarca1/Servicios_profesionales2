import React, { useEffect, useRef, useState } from 'react';
import { SparkleIcon } from './Icons';

// Arreglo de imágenes inspiradoras para la meditación/bienestar
const meditationImages = [
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80", // Yoga/Sunset
  "https://images.unsplash.com/photo-1528319725582-ddc096101511?auto=format&fit=crop&w=800&q=80", // Green Forest/Rain
  "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80", // Stones/Water
  "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80", // Hands/Sunrise
  "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800&q=80"  // Calm Abstract
];

export const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const textRef = useRef<HTMLDivElement>(null);

  // Lógica para el cambio de imágenes (Carousel)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % meditationImages.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  // Lógica para la animación de entrada del texto
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const currentElement = textRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white scroll-mt-24 relative overflow-hidden border-b border-slate-100">
      
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-brand-accent/5 to-transparent z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          
        <div 
          ref={textRef}
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Header Centrado */}
          <div className="mb-10 flex flex-col items-center">
            <span className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3 block">El Corazón de este Camino</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 leading-tight">
              Sobre Mí
            </h2>
            <div className="w-24 h-1.5 bg-brand-accent mt-6 rounded-full"></div>
          </div>
          
          {/* Perfil Centrado */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-brand-900 rounded-full opacity-30 blur-sm"></div>
              <img 
                src="https://caminodebienestar.com/imagenes/EndysLabarca2.png" 
                alt="Endys Alberto Labarca" 
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl text-slate-800 font-bold font-serif">Endys Alberto Labarca</h3>
              <p className="text-brand-accent font-medium mt-1">CEO Camino de Bienestar & Gran Maestro Internacional</p>
            </div>
          </div>
          
          {/* Texto Centrado */}
          <div className="prose prose-lg text-slate-600 leading-relaxed mx-auto max-w-3xl">
            <p className="mb-6 text-xl font-medium text-slate-700">
              He dedicado mi vida a integrar la ciencia y la espiritualidad. Como líder de la comunidad <span className="text-brand-900">Camino de Bienestar</span>, mi misión es ser el puente que te permita cruzar hacia tu mejor versión.
            </p>
            <p className="mb-8">
              La vida me ha permitido desarrollarme en la parte integral sistémica y holística. Mi enfoque combina especializaciones terapéuticas en salud (Acupuntura, Biomagnetismo, Cuántica) con herramientas de transformación mental como la PNL y la Hipnosis.
            </p>
            
            <div className="bg-brand-light p-8 rounded-2xl border border-brand-accent/20 shadow-sm my-10 mx-auto max-w-2xl relative">
              <SparkleIcon className="w-8 h-8 text-brand-accent mx-auto mb-4 opacity-50" />
              <p className="text-xl font-serif text-brand-900 italic mb-4">
                "Utilizo un método propio que fusiona la mirada del Coach con la profundidad de las terapias ancestrales para despertar la conciencia."
              </p>
              <div className="flex items-center justify-center text-sm font-semibold text-brand-accent uppercase tracking-wider">
                <span className="w-8 h-px bg-brand-accent mr-2"></span>
                Destilador de Esencia
                <span className="w-8 h-px bg-brand-accent ml-2"></span>
              </div>
            </div>

            <p>
              Integro la pureza de la naturaleza en la práctica clínica, destilando aceites esenciales artesanales para potenciar el bienestar y el equilibrio sistémico de cada paciente.
            </p>
          </div>
        </div>

        {/* Carousel Visual Centrado (Ahora más compacto y abajo) */}
        <div className="mt-16 w-full max-w-md mx-auto relative group">
           <div className="absolute -inset-3 bg-gradient-to-r from-brand-accent to-brand-900 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
           
           <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-video bg-slate-900 border-4 border-white">
             {meditationImages.map((img, index) => (
               <img 
                key={index}
                src={img} 
                alt="Bienestar y Meditación" 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
               />
             ))}
             <div className="absolute inset-0 bg-brand-900/10"></div>
             <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-900 shadow-sm">
               Atmósfera de Paz
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};