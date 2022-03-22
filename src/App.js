import './App.css';
import React, { useEffect, useState } from 'react';
import AppBar from './components/Navbar/Appbar'
import AnimatedCursor from 'react-animated-cursor';
import About from './components/AboutSection/About';
import Achievements from './components/AchieveSection/Achievements';
import Works from './components/WorkSection/Works';
import Experience from './components/ExperienceSection/Experience';
import Footer from './components/FooterSection/Footer';
import Preloader from './components/MyPreloader/Preloader';
import Hero from './components/Heroes/Hero';
import Contact from './components/Contacts/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PlaySound from './components/myAudio/Audio';

function App() {
  AOS.init()
  const [isShow, setIsSHow] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
      setIsSHow(true);
    }, 4000);
  }, []);

  return (
    <div className="App">
      <AnimatedCursor
      innerSize={20}
      outerSize={20}
      color='255, 255, 255'
      outerAlpha={0.7}
      innerScale={1.2}
      outerScale={5}
      />
      {
        isLoaded && <Preloader />
      }
      {
        isShow &&
      (<div>
        <AppBar />
        <Hero />
        <PlaySound />
        <About />
        <Achievements />
        <Works />
        <Experience />
        <Contact />
        <Footer />
      </div>)}
    </div>
  );
}

export default App;


