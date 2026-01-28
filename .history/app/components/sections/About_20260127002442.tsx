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

        {/* Entire Content */}
        {/* Image */}
        <Image
          src={me2}
          alt="Nouman Sohail"
          height={250}
          width={250}
          className="rounded-full hover:shadow-md hover:shadow-purple-300/40 transition-all duration-300"
        />
        <div
          className="flex flex-col items-center justify-center gap-3 w-full p-5 border border-white/30 
                     bg-white/5 backdrop-blur-xs lg:w-[85%] rounded-3xl transition-all duration-300 
                     hover:scale-105 hover:shadow-md hover:shadow-purple-300/40"
        >
          {aboutdata.map((item) => (
            <p key={item.id} className="text-gray-300 leading-relaxed">
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
