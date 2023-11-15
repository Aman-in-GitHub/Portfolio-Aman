import Navbar from './elements/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { useRef, useEffect, useState } from 'react';

import { Toaster } from '@/components/ui/toaster';

import Social from './elements/Social';

function App() {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState('h');

  const sections = {
    home: 'h',
    projects: 'p',
    about: 'a',
    contact: 'c'
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(homeRef.current);
    observer.observe(projectRef.current);
    observer.observe(aboutRef.current);
    observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  function hashLinkImitater(refName = 'h') {
    if (refName === 'p') {
      projectRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (refName === 'a') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (refName === 'c') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  return (
    <>
      <Navbar
        activeSection={activeSection}
        hashLink={(e) => hashLinkImitater(e)}
      />
      <section ref={homeRef} id={sections.home}>
        <Home hashLink={(e) => hashLinkImitater(e)} />
      </section>
      <section id={sections.projects} ref={projectRef}>
        <Projects />
      </section>
      <section id={sections.about} ref={aboutRef}>
        <AboutMe />
      </section>
      <section id={sections.contact} ref={contactRef}>
        <Contact />
      </section>
      <div className="fixed bottom-10 right-0 hidden lg:block z-[100]">
        <Social />
      </div>

      <Toaster />
    </>
  );
}

export default App;
