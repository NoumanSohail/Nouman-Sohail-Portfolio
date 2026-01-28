import Image from "next/image";
import { skillsData } from "@/app/data";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative -scroll-mt-20 w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      <div
        className="relative flex flex-col lg:flex-row items-center justify-center 
                   gap-7 lg:gap-20 text-center lg:text-start mt-30 xl:mt-40"
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="text-xl font-semibold tracking-widest text-center ">
            Skills
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-10 pb-10">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-10 border border-white/20 bg-white/5
                           backdrop-blur-xs hover:rotate-3 hover:scale-105 hover:shadow-md hover:shadow-purple-300/50
                           hover:animate-pulse transition-all duration-300 text-white p-5 rounded-3xl"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={skill.img}
                    alt={skill.title}
                    width={skill.width}
                    className="h-30"
                  />
                </div>
                <div className="flex flex-col gap-2 text-center w-60">
                  <p className="text-2xl font-semibold">{skill.title}</p>
                  <p className="text-gray-400">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
