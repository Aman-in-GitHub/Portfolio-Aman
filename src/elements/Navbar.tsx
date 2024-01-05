import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

import { useReadingProgress } from './useReadingProgress';

import { ModeToggle } from '@/components/mode-toggle';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: 'p' },
  { title: 'About Me', href: 'a' },
  { title: 'Contact', href: 'c' }
];

const Navbar = ({ hashLink, activeSection }) => {
  const [open, setOpen] = useState(false);
  const [active, setIsActive] = useState('home');

  const completion = useReadingProgress();

  useEffect(() => {
    setIsActive(activeSection);
    if (activeSection == 'h') {
      setIsActive('Home');
    } else if (activeSection == 'p') {
      setIsActive('Projects');
    } else if (activeSection == 'a') {
      setIsActive('About Me');
    } else {
      setIsActive('Contact');
    }
  }, [activeSection]);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="select-none">
      <nav className="flex justify-between items-center py-2 fixed top-0 w-full backdrop-blur-[4px] shadow-md dark:shadow-[#232323] dark:text-white z-40">
        <span
          id="progress-bar"
          style={{
            transform: `translateX(${completion - 100}%)`
          }}
          className={`absolute bottom-0 w-full transition-transform duration-150 h-1 bg-gradient-to-r from-sky-500 to-sky-400`}
        />

        <div className="flex items-center px-4 md:px-8 lg:px-28">
          <a href="/" className="w-12 md:w-16">
            <img src="/logo.svg" alt="Logo Of Aman" />
          </a>
        </div>
        <div className="flex items-center gap-8 md:gap-12 px-2 md:px-8 lg:px-28">
          <div className="lg:flex hidden gap-5">
            {navLinks.map((link) => {
              const gradientStyle = {
                backgroundImage:
                  link.title == active
                    ? 'linear-gradient(to right, #0ea5e9, #38bdf8)'
                    : '',
                color: link.title == active ? 'white' : ''
              };

              return (
                <button
                  key={link.href}
                  onClick={() => hashLink(link.href)}
                  className="text-[24px] font-bold font-cursive rounded-sm flex items-center px-4 py-1"
                  style={gradientStyle}
                >
                  {link.title}
                </button>
              );
            })}
          </div>
          <div
            className="cursor-pointer lg:hidden text-md order-2 mr-2"
            onClick={toggleMenu}
          >
            <Menu className="scale-[1.3]" />
          </div>
          <ModeToggle />
        </div>
      </nav>
      <div
        className="fixed duration-300 top-0 w-full h-screen origin-top bg-gradient-to-r from-sky-500 to-sky-400 py-5 px-2 z-[1000] md:px-8 md:py-7 lg:hidden"
        style={{
          left: open ? '0%' : '100%',
          overflow: 'open' ? 'hidden' : ''
        }}
      >
        <div className="flex h-full flex-col">
          <div className="flex justify-between">
            <span></span>
            <p
              className="cursor-pointer text-md text-white mr-2"
              onClick={toggleMenu}
            >
              <X className="scale-[1.5]" />
            </p>
          </div>
          <div className="flex flex-col h-full justify-center items-center gap-6 overflow-hidden mt-[-15px]">
            {navLinks.map((link, index) => {
              return (
                <div className="overflow-hidden" key={index}>
                  <div className="text-[55px] font-texts font-black text-white leading-snug underline-offset-[6px]">
                    <button
                      onClick={() => {
                        toggleMenu();
                        hashLink(link.href);
                      }}
                      style={{
                        textDecoration: link.title == active ? 'underline' : ''
                      }}
                    >
                      {link.title}
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="flex items-center justify-between px-16 my-12 w-full">
              <a href="https://linkedin.com/in/amanchandinc" target="_blank">
                <Linkedin className="scale-[2.5] text-white" />
              </a>
              <a href="https://github.com/Aman-in-GitHub" target="_blank">
                <Github className="scale-[2.5] text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
