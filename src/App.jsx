import React from 'react';
import './App.css';
import Home from './sections/Home/Home';
import Description from './sections/Description/Description';
import Projects from './components/commons/projects/Projects';
import Contact from './components/commons/contact/Contact';
import Footer from './components/commons/footer/footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Description />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;