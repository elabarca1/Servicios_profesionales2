import React, { useEffect, useRef, useState } from 'react';

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
    <section id="about" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Column: Dynamic Image Carousel */}
          <div className="mb-12 lg:mb-0 relative">
             <div className="relative rounded-2xl shadow-2xl overflow-hidden aspect-[4/5] bg-slate-900 group border-8 border-white">
               
               {/* Mapeamos las imágenes para hacer un cross-fade suave */}
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

               {/* Overlay oscuro para mejorar lectura del texto sobre la imagen */}
               <div className="absolute inset-0 bg-brand-900/20"></div>

               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-900/90 via-brand-900/60 to-transparent p-8 z-10">
                 <p className="text-white font-serif text-xl italic text-center drop-shadow-md">"Tu bienestar es el reflejo de tu equilibrio interior."</p>
               </div>
            </div>
            {/* Decorative blob */}
            <div className="absolute -z-10 top-10 -left-10 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl"></div>
          </div>

          {/* Right Column: Text Info */}
          <div 
            ref={textRef}
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-brand-900 sm:text-4xl">
                Sobre Mí
              </h2>
              <div className="w-16 h-1 bg-brand-accent mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="flex justify-center mb-6">
              <img 
                src="https://caminodebienestar.com/imagenes/EndysLabarca2.png" 
                alt="Endys Alberto Labarca" 
                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>

            <h3 className="text-xl text-brand-accent font-medium mb-6 text-center">Endys Alberto Labarca</h3>
            
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-6">
                Como CEO de la comunidad <span className="font-semibold text-brand-900">Camino de Bienestar</span> y Gran Maestro Internacional de la Cámara Internacional de Conferencistas, he dedicado mi vida a integrar la ciencia y la espiritualidad.
              </p>
              <p className="mb-6">
                La vida me ha permitido desarrollarme en la parte integral sistémica y holística. Mi enfoque combina especializaciones terapéuticas en salud (Acupuntura, Biomagnetismo, Cuántica) con herramientas de transformación mental como la PNL y la Hipnosis.
              </p>
              <p className="mb-8">
                Mi misión es apoyar a las personas en su <strong>despertar de conciencia</strong>. Desde mi experiencia, utilizo un método propio que fusiona la mirada del Coach con la profundidad de las terapias ancestrales para que puedas despertar lo mejor de ti.
              </p>

              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-accent shadow-sm">
                <p className="text-sm font-semibold text-brand-900 uppercase tracking-wider mb-2">Destilador de Esencia</p>
                <p className="text-sm text-slate-600 italic">
                  "Integro la pureza de la naturaleza en la práctica clínica. Destilo aceites esenciales artesanales para potenciar el bienestar y el equilibrio sistémico de cada paciente."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};