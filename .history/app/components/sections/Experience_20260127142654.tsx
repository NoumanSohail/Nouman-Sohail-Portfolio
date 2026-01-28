"use client";

import { experiencedata } from "@/app/data";
import { motion } from "framer-motion";
import Astronaut from "../ui/Astronaut";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      {/* Astronaut */}
      <Astronaut />

      {/* Entire screen wraper */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 mt-20 xl:mt-30">
        {/* Header */}
        <div className="text-xl font-semibold tracking-widest text-center">
          Experience
        </div>

        {/* Entire Content */}
        <div className="flex flex-col items-center justify-center gap-10 w-full pb-5">
          {/* Content */}
          {experiencedata.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col border border-white/30 bg-white/5 backdrop-blur-xs p-5 gap-3 lg:w-[85%]
                         rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-300/40"
            >
              <h3 className="text-2xl font-semibold">{experience.title}</h3>
              <p className="text-lg font-semibold text-gray-300">
                {experience.heading}
              </p>
              <ul className="list-disc list-inside text-gray-400 flex flex-col gap-2 ml-5">
                {experience.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
