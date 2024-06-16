import React from 'react';
import './App.css';
import Home from './sections/Home/Home';
import Description from './sections/Description/Description';
import Projects from './components/commons/projects/Projects';
import Contact from './components/commons/contact/Contact';
import Footer from './components/commons/footer/footer';

function App() {

  const scrollToTop = () => {
    const section = document.getElementById('home');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <div id="home"><Home /></div>
      <div id="description"><Description /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
      <button onClick={scrollToTop} className="scrollToTopBtn"> <img className='icon' src="https://api.iconify.design/ep:top.svg?color=white" alt='top'/></button>
    </div>
  );
}

export default App;