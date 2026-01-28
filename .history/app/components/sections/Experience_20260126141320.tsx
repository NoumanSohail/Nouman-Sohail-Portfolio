import { experiencedata } from "@/app/data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      {/* Entire screen wraper */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 mt-20 xl:mt-30">
        {/* Header */}
        <div className="text-xl font-semibold tracking-widest text-center">
          Experience
        </div>

        {/* Entire Content */}
        <div className="flex flex-col items-center justify-center gap-10 w-full pb-5">
          {experiencedata.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col border-white/30 bg-white/5 p-5 gap-5 w- lg:w-[85%] rounded-3xl border hover:scale-105"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
