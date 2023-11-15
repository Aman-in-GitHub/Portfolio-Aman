import { Github, Globe, Trophy } from 'lucide-react';
import { projects } from '../elements/projects';

const Projects = () => {
  return (
    <section className="dark:bg-[#101010] dark:text-white pt-16 md:pt-20 px-3 md:px-8 lg:px-28 font-texts select-none">
      <h3 className="text-4xl font-cursive font-black md:text-5xl mb-4">
        Projects
      </h3>

      <div className="flex items-center flex-col gap-8">
        {projects.map((item, i) => {
          let order = 'lg:order-0';

          if (i % 2 != 0) order = 'lg:order-1';

          return (
            <div
              className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-12 rounded-sm"
              key={i}
            >
              <div className={`lg:w-[50%] ${order}`}>
                <img
                  src={item.imageUrl}
                  alt={`${item.title} Screenshot`}
                  className="mx-auto w-full rounded-sm"
                  style={{
                    filter: item.loading ? 'grayscale(1)' : ''
                  }}
                />
              </div>
              <div className="flex flex-col lg:w-[50%] justify-center">
                <h4 className="text-3xl lg:text-5xl font-bold flex items-center gap-3 lg:gap-7">
                  {item.title}{' '}
                  {item.award ? (
                    <Trophy className="lg:scale-[2] text-yellow-400" />
                  ) : (
                    ''
                  )}
                  <span
                    className="text-base lg:text-2xl mt-2 lg:mt-4 lg:ml-[-12px] font-mono"
                    style={{
                      wordSpacing: '-4px'
                    }}
                  >
                    {item.loading ? 'Work In Progress' : ''}
                  </span>
                </h4>
                <span className="my-3 lg:text-lg">{item.desc}</span>
                <div className="mb-3 flex items-center gap-2 text-lg lg:text-xl">
                  Tools Used:
                  <p className="flex items-center gap-4">
                    {item.tech.map((e, i) => {
                      return (
                        <i
                          className={`devicon-${e} text-2xl lg:text-3xl`}
                          key={i}
                        ></i>
                      );
                    })}
                  </p>
                </div>
                {!item.loading && (
                  <div className="flex items-center gap-6">
                    <a
                      href={item.directLink}
                      target="_blank"
                      className="px-5 py-2 rounded-sm relative overflow-hidden group bg-[#f4f4f4] dark:bg-[#232323] text-white flex flex-col items-center active:scale-95 duration-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-400 duration-300" />
                      <Globe className="absolute top-[-5px] right-[-5px] opacity-0 text-white duration-300 md:group-hover:scale-[1.2] group-hover:rotate-12 group-hover:opacity-100" />
                      <span className="font-medium md:text-lg relative z-10 duration-300">
                        {item.type == 'web' ? 'Visit Site' : 'Install App'}
                      </span>
                    </a>

                    <a
                      href={item.codeLink}
                      target="_blank"
                      className="px-5 py-2 rounded-sm relative overflow-hidden group bg-[#f4f4f4] dark:bg-[#232323] text-white flex flex-col items-center active:scale-95 duration-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-400 duration-300" />
                      <Github className="absolute top-[-5px] right-[-5px] opacity-0 text-white duration-300 md:group-hover:scale-[1.2] group-hover:rotate-12 group-hover:opacity-100" />
                      <span className="font-medium md:text-lg relative z-10 duration-300">
                        View Code
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
