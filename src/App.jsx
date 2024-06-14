import React from 'react';
import './App.css';
import Home from './sections/Home/Home';
import Description from './sections/Description/Description';
import Projects from './components/commons/projects/Projects';

function App() {
  return (
    <div className="App">
      <Home />
      <Description />
      <Projects />
    </div>
  );
}

export default App;