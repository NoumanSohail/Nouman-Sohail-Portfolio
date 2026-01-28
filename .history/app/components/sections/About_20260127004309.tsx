import { aboutdata } from "@/app/data";
import me2 from "@/public/images/me2.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      {/* Entire screen wraper */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 mt-20 xl:mt-30">
        {/* Header */}
        <div className="text-xl font-semibold tracking-widest text-center">
          About
        </div>

        <div className="flex gap-5">
          {/* Image */}
          <Image
            src={me2}
            alt="Nouman Sohail"
            height={250}
            width={250}
            className="rounded-2xl w-fit"
          />

          {/* Entire Content */}
          <div
            className="flex flex-col items-center justify-center gap-3 w-[10%] p-5 border border-white/30 
                     bg-white/5 backdrop-blur-xs lg:w-[85%] rounded-3xl transition-all duration-300 
                     hover:scale-105 hover:shadow-md hover:shadow-purple-300/40"
          >
            {aboutdata.map((about, index) => (
              <div key={index} className="text-gray-300 leading-relaxed">
                {
                  <div className="flex flex-col gap-3">
                    <p className="text-lg font-semibold text-center">
                      {about.title}
                    </p>
                    <ul className="text-gray-400 flex flex-col gap-2 ml-5">
                      {about.content.map((content, i) => (
                        <li key={i}>{content}</li>
                      ))}
                    </ul>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
