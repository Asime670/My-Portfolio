import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';
import './style.css';


function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <>
      <Navbar onOpenCV={() => setIsCVOpen(true)} />
      <Hero onOpenCV={() => setIsCVOpen(true)} />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </>
  );
}

export default App;