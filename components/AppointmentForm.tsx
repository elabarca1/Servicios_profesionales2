import React, { useState } from 'react';

const servicesOptions = [
  "PNL y Coaching Ontológico",
  "Terapias Holísticas Integrales",
  "Hipnosis Clínica",
  "Tecnología Bio-Well",
  "Certificación Coach de Bienestar",
  "Certificación Practitioner en PNL"
];

export const AppointmentForm: React.FC = () => {
  // URL de destino proporcionada por el usuario
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqanbggp"; 
  
  const [formData, setFormData] = useState({
    Nombre: '',
    Email: '',
    CodigoPais: '+51',
    Telefono: '',
    Servicio: '',
    Mensaje: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          Nombre: '',
          Email: '',
          CodigoPais: '+51',
          Telefono: '',
          Servicio: '',
          Mensaje: ''
        });
      } else {
        throw new Error("Error en el servicio de correo");
      }
      
    } catch (error) {
      console.error("Error al enviar:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-900 scroll-mt-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-brand-accent blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl mb-4">Agenda tu Cita</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Da el primer paso hacia tu bienestar integral. Completa el formulario y recibiré tu solicitud directamente en mi correo electrónico.
          </p>
        </div>

        <div className="bg-brand-800 rounded-2xl p-8 md:p-10 shadow-2xl border border-brand-700">
          {status === 'success' ? (
             <div className="text-center py-10">
               <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">¡Correo Enviado!</h3>
               <p className="text-slate-300">Gracias por contactarme. He recibido tu mensaje y te responderé a la brevedad posible.</p>
               <button 
                 onClick={() => setStatus('idle')}
                 className="mt-6 px-6 py-2 bg-brand-accent text-white rounded-lg hover:bg-teal-600 transition-colors"
               >
                 Enviar otro mensaje
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="Nombre" className="block text-sm font-medium text-slate-300 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="Nombre" 
                    name="Nombre"
                    value={formData.Nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-brand-900 border border-brand-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="Email" className="block text-sm font-medium text-slate-300 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg bg-brand-900 border border-brand-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label htmlFor="CodigoPais" className="block text-sm font-medium text-slate-300 mb-2">Cód. País</label>
                  <input 
                    type="text" 
                    id="CodigoPais"
                    name="CodigoPais"
                    value={formData.CodigoPais}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg bg-brand-900 border border-brand-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="+51"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="Telefono" className="block text-sm font-medium text-slate-300 mb-2">Número de Celular</label>
                  <input 
                    type="tel" 
                    id="Telefono"
                    name="Telefono"
                    value={formData.Telefono}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg bg-brand-900 border border-brand-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="000 000 0000"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Servicio" className="block text-sm font-medium text-slate-300 mb-2">Servicio de Interés</label>
                <select
                  id="Servicio"
                  name="Servicio"
                  value={formData.Servicio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-900 border border-brand-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all appearance-none cursor-pointer"
                  required
                  disabled={status === 'submitting'}
                >
                  <option value="" disabled className="text-slate-500">Seleccione un servicio...</option>
                  {servicesOptions.map((service, index) => (
                    <option key={index} value={service} className="bg-brand-900 text-white py-2">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="Mensaje" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                <textarea 
                  id="Mensaje" 
                  name="Mensaje"
                  value={formData.Mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-brand-900 border border-brand-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntame brevemente cómo puedo apoyarte..."
                  required
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm text-center">
                  Hubo un error al enviar el mensaje. Por favor verifica tu conexión e intenta nuevamente.
                </div>
              )}

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`w-full py-4 px-6 text-white font-bold rounded-lg shadow-lg transition-all duration-200 text-lg flex justify-center items-center
                    ${status === 'submitting' 
                      ? 'bg-slate-600 cursor-not-allowed' 
                      : 'bg-brand-accent hover:bg-teal-600 transform hover:-translate-y-1'}`}
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : 'Enviar Mensaje'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};