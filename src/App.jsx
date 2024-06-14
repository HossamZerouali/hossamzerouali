import React from 'react';
import './App.css';
import Home from './sections/Home/Home';
import Description from './sections/Description/Description';
import Projects from './components/commons/projects/Projects';
import Contact from './components/commons/contact/Contact';

function App() {
  return (
    <div className="App">
      <Home />
      <Description />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;