"use client";

import Image from "next/image";
import { skillsData } from "@/app/data";
import { motion } from "framer-motion";
import { Meteors } from "../ui/Meteors";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      {/* Meteors background */}
      <Meteors />

      {/* Entire screen wraper */}
      <div
        className="relative flex flex-col lg:flex-row items-center justify-center 
                   gap-7 lg:gap-20 text-center lg:text-start mt-20 xl:mt-30"
      >
        {/* Entire Content Wraper */}
        <div className="flex flex-col items-center justify-center gap-10">
          {/* Header */}
          <div className="text-xl font-semibold tracking-widest text-center ">
            Skills
          </div>

          {/* Entire Content */}
          <div className="flex flex-wrap items-center justify-center gap-10 pb-5">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="flex flex-col items-center justify-center gap-5 border border-white/20 bg-white/5
                           backdrop-blur-xs hover:rotate-2 hover:scale-105 hover:shadow-md hover:shadow-purple-300/50
                           hover:animate-pulse transition-all duration-300 text-white p-5 rounded-3xl"
              >
                {/* Image */}
                <div className="flex items-center justify-center">
                  <Image
                    src={skill.img}
                    alt={skill.title}
                    height={0}
                    width={skill.width}
                    className="h-30"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-5 text-center w-58">
                  <p className="text-2xl font-semibold">{skill.title}</p>
                  <p className="text-gray-400">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
