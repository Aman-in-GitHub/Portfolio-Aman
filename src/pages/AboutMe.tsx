const AboutMe = () => {
  return (
    <div className="min-h-screen dark:bg-[#101010] dark:text-white pt-16 md:pt-20 px-3 md:px-8 lg:px-28 font-texts select-none">
      <h3 className="text-4xl font-cursive font-black md:text-5xl mb-4">
        About Me
      </h3>

      <div className="flex flex-col gap-8 lg:gap-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center">
          <img
            src="/profile.svg"
            alt="Profile SVG"
            className="w-[250px] lg:w-[50%] mx-auto lg:order-2"
          />
          <div className="text-lg lg:text-xl flex flex-col gap-2">
            <span>
              My name is Aman Chand. I have been making applications for more
              than a year now. I started my development journey with barebone
              HTML & CSS to build static websites and slowly learnt many new
              technologies on the way to build more complex applications.
            </span>
            <span>
              I specialize in making applications for different platforms like
              mobile, desktop and web using various frameworks of Javascript i.e
              React-native, Electron and React respectively. I am currently
              sharpening my knives in Node JS. After that I plan to learn
              typescript to make my applications more scalable.
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12 lg:justify-between">
          <img
            src="/skill.svg"
            alt="Skills SVG"
            className="w-[250px] lg:w-[20%] mx-auto lg:mx-0"
          />
          <div className="lg:w-[50%] flex flex-col gap-4 lg:gap-8">
            <span className="text-4xl font-cursive font-bold lg:text-5xl lg:font-black text-center lg:text-start">
              My Skills
            </span>
            <div className="flex gap-8 lg:gap-16 flex-col text-6xl lg:text-8xl items-center lg:items-start">
              <div className="flex items-center gap-8 lg:gap-16">
                <i className="devicon-react-original" title="React"></i>
                <i
                  className="devicon-tailwindcss-plain"
                  title="Tailwind CSS"
                ></i>
                <i className="devicon-nextjs-original" title="Next JS"></i>
                <i className="devicon-figma-plain" title="Figma"></i>
              </div>

              <div className="flex items-center gap-8 lg:gap-16">
                <i className="devicon-nodejs-plain" title="Node JS"></i>
                <i className="devicon-mongodb-plain" title="Mongo DB"></i>
                <i className="devicon-electron-original" title="Electron"></i>
                <i className="devicon-git-plain" title="Git"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
