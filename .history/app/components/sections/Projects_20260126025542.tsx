"use client";

import { projectsData } from "@/app/data";
import { motion } from "framer-motion";
import { AlienUFO } from "../ui/AlienUFO";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative scroll-mt-40 w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white"
    >
      {/* 👽 Full-width background layer */}
      <AlienUFO />

      {/* 👇 Centered content layer */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 mt-20 xl:mt-30">
        <div className="text-xl font-semibold tracking-widest text-center">
          Projects
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 w-fit pb-5">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col gap-5 border border-white/20 bg-white/5
                       md:w-[84.5%] lg:w-[47.5%] xl:w-[41%]
                       backdrop-blur-xs rounded-3xl p-5
                       hover:scale-105 hover:shadow-md
                       hover:shadow-purple-300/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-lg font-semibold text-gray-300">
                {project.stack}
              </p>
              <ul className="list-disc list-inside text-gray-400 flex flex-col gap-2 ml-5">
                {project.points.map((point, i) => (
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

export default Projects;
