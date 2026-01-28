"use client";

import { projectsData } from "@/app/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15
                 text-white overflow-hidden min-h-screen"
    >
      {/* Content wraper */}
      <div
        className="relative flex flex-col items-center justify-center
                   gap-10 mt-20 xl:mt-30"
      >
        {/* Heading */}
        <div className="text-xl font-semibold tracking-widest text-center">
          Projects
        </div>

        {/* Content */}
        <div className="flex flex-wrap items-center justify-center gap-50 w-fit">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 border border-white/20 bg-white/5 w-[90%] lg:w-[47.5%]
                         backdrop-blur-xs rounded-3xl p-5 hover:scale-105 hover:shadow-md
                         hover:shadow-purple-300/40 transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              {/* Tech Stack */}
              <p className="text-sm text-purple-300">{project.stack}</p>

              {/* Description Points */}
              <ul className="list-disc list-inside text-gray-300 flex flex-col gap-2 ml-5">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
