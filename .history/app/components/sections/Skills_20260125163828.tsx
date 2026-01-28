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
        <div className="flex flex-col items-center justify-center">
          <div className="text-xl font-semibold tracking-widest text-center">
            Skills
          </div>
          {/* <div className="flex flex-wrap gap-10 items-start justify-center p-10">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="hover:rotate-3 hover:scale-105 hover:shadow-md hover:shadow-purple-300/50 
                          transition-transform duration-300 backdrop-blur-xs border bg-white/5 border-white/20 
                          text-white p-5 rounded-3xl flex flex-col justify-center items-center gap-5"
              >
                <Image
                  src={skill.img}
                  className="h-30"
                  alt={skill.title}
                  height={skill.height}
                  width={skill.width}
                />
                <div className="flex flex-col gap-2 text-center w-60">
                  <p className="text-2xl font-semibold">{skill.title}</p>
                  <p className="text-[16px] text-gray-400">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div> */}

          <div className="flex flex-wrap items-center justify-center gap-10">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-10 border border-white/20 bg-white/5
                                          backdrop-blur-xs hover:rotate-3 hover:scale-105 hover:shadow-md hover:shadow-purple-300/50
                                          transition-all duration-300 text-white p-5 rounded-3xl"
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
