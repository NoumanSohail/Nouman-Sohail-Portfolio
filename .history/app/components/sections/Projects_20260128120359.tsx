"use client";

import { projectsData } from "@/app/data";
import { motion } from "framer-motion";
import { AlienUFO } from "../ui/AlienUFO";
import GlassCard from "../ui/GlassCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      {/* Alien UFO */}
      <AlienUFO />

      {/* Entire screen wraper */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 mt-20 xl:mt-30">
        {/* Header */}
        <div className="text-xl font-semibold tracking-widest text-center">
          Projects
        </div>

        {/* Entire Content */}
        <div className="flex flex-wrap items-center justify-center gap-10 w-fit pb-5">
          {/* Content */}
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <GlassCard className="md:w-[84.5%] lg:w-[47.5%] xl:w-[41%] ">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-lg font-semibold text-gray-300">
                  {project.stack}
                </p>
                <ul className="list-disc list-inside text-gray-400 flex flex-col gap-2 ml-5">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
