import { Cog, User } from 'lucide-react';
import { useEffect } from 'react';

const Home = ({ hashLink }) => {
  useEffect(() => {
    let index = 0,
      interval = 1000;

    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star) => {
      star.style.setProperty('--star-left', `${rand(-10, 100)}%`);
      star.style.setProperty('--star-top', `${rand(-40, 80)}%`);

      star.style.animation = 'none';
      star.offsetHeight;
      star.style.animation = '';
    };

    for (const star of document.getElementsByClassName('magic-star')) {
      setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 1000);
      }, index++ * (interval / 3));
    }
  }, []);

  return (
    <main className="h-screen dark:bg-[#101010] dark:text-white pt-16 md:pt-20 px-4 md:px-8 lg:px-28 font-texts flex flex-col items-center justify-center gap-8 lg:gap-12 lg:flex-row lg:justify-between select-none">
      <img
        src="/hero.svg"
        alt="A man Coding"
        className="w-[225px] md:w-[400px] mt-[-33px] lg:mt-0 lg:w-[450px] lg:order-2"
      />

      <div className="lg:w-[65%]">
        <h3 className="text-3xl font-black md:text-6xl font-cursive animate-text  bg-gradient-to-r from-sky-500 via-pink-200 to-sky-600 text-transparent inline-block bg-clip-text">
          Hello I'm Aman Chand
        </h3>

        <p className="my-3 text-lg starry lg:my-5 md:text-2xl">
          I am a{' '}
          <span className="magic">
            <span className="magic-star">
              <svg viewBox="0 0 512 512">
                <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
              </svg>
            </span>
            <span className="magic-star">
              <svg viewBox="0 0 512 512">
                <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
              </svg>
            </span>
            <span className="magic-star">
              <svg viewBox="0 0 512 512">
                <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
              </svg>
            </span>
            <span className="magic-text">full stack software developer.</span>
          </span>{' '}
          I make amazing looking, production ready applications for web, mobile
          and desktop using Javascript.
        </p>
        <div className="flex items-center gap-4 md:gap-6">
          <button
            className="px-5 md:py-4 py-3 md:px-6 rounded-sm relative overflow-hidden group bg-[#f4f4f4] dark:bg-[#232323] text-white flex flex-col items-center active:scale-95 duration-500"
            onClick={() => hashLink('p')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-400 duration-300" />
            <Cog className="absolute top-[-12px] right-[-12px] opacity-0 group-hover:scale-[1.8] md:group-hover:scale-[2.5] text-white duration-300 group-hover:rotate-12 group-hover:opacity-100" />
            <span className="font-medium md:text-xl relative z-10 duration-300">
              View Projects
            </span>
          </button>
          <a
            download
            href="/Aman Chand Resume.pdf"
            className="px-5 md:py-4 py-3 md:px-6 rounded-sm relative overflow-hidden group bg-[#f4f4f4] dark:bg-[#232323] dark:text-white flex flex-col items-center active:scale-95 duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-400 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
            <User className="absolute top-[-10px] md:top-[-8px] right-[-8px] opacity-0 group-hover:scale-[1.1] md:group-hover:scale-[2] text-white duration-300 group-hover:rotate-12 group-hover:opacity-100" />
            <span className="font-medium md:text-xl group-hover:text-white relative z-10 duration-300">
              Download CV
            </span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
