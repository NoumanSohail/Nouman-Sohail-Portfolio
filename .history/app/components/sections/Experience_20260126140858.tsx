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
        <div className="flex items-center justify-center gap-10 w-full pb-5">
          {experiencedata.map((experience, index) => (
            <div key={index} className="flex flex-col border-white/30 bg-white/5 p-5 rounded-3xl border hover:scale-105">
              <h3 className="text-2xl font-semibold">{experience.title}</h3>
              <p className="text-lg font-semibold text-gray-300">
                {experience.heading}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
