import React from 'react';
import Start from './Start/Start';
import About from './About/About';
import ProjectSection from './ProjectSection';
import TopHeader from './TopHeader/TopHeader';
import ContactSection from './ContactSection/ContactSection';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="components">
      <TopHeader isStartPage />
      <Start />
      <About />
      <ProjectSection />
      <ContactSection />
      <Contact />
    </div>
  );
}

export default App;
