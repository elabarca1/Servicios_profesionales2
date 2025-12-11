import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Programs } from './components/Programs';
import { CV } from './components/CV';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AppointmentForm } from './components/AppointmentForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <CV />
        <Programs />
        <AppointmentForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;