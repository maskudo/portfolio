import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
