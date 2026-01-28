import { personaldetails } from "@/app/data";
import Image from "next/image";
import me from "@/public/images/me.jpg";
import { Code2, Database, Server, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-40 scroll-smooth w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white mt-30 md:mt-40 h-fit"
    >
      {/* Central Glowing Orb */}
      <div className="absolute w-[35%] h-[35%] bg-indigo-500 rounded-full blur-[120px] opacity-40 animate-pulse [animation-delay:600ms]" />
      {/* Orbiting Elements */}
      <div className="absolute w-[50%] h-[50%] border border-white/5 rounded-full animate-spin [animation-duration:20s]" />
      <div className="absolute w-[50%] h-[50%] border border-white/10 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-7 lg:gap-20 text-center lg:text-start">
        <div className="flex flex-col gap-5">
          <h1 className="font-black text-4xl lg:text-6xl tracking-wider text-balance text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
            {personaldetails.name}
          </h1>
          <h2 className="font-semibold text-2xl lg:text-3xl">
            {personaldetails.tagline}
          </h2>
          <p className="lg:text-lg lg:text-balance">
            {personaldetails.statement}
          </p>

          <div className="flex gap-5 mt-5 items-center justify-center lg:items-start lg:justify-start">
            <Smartphone
              size={60}
              className="p-4 border rounded-2xl backdrop-blur-xs bg-blue-300/10 hover:scale-110
                        border-blue-300  hover:border-blue-300 text-blue-300 hover:text-blue-300
                        transition-all duration-300 animate-bounce [animation-delay:0ms]"
            />
            <Code2
              size={60}
              className="p-4 border rounded-2xl backdrop-blur-xs bg-purple-300/10 hover:scale-110
                        border-purple-300 hover:border-purple-300 text-purple-300 hover:text-purple-300 
                        transition-all duration-300 animate-bounce [animation-delay:100ms]"
            />
            <Server
              size={60}
              className="p-4 border rounded-2xl backdrop-blur-xs bg-pink-300/10 hover:scale-110 
                        border-pink-300 hover:border-pink-300 text-pink-300 hover:text-pink-300 
                        transition-all duration-300 animate-bounce [animation-delay:200ms]"
            />
            <Database
              size={60}
              className="p-4 border rounded-2xl backdrop-blur-xs bg-red-300/10 hover:scale-110 
                        border-red-300 hover:border-red-300 text-red-300 hover:text-red-300 
                        transition-all duration-300 animate-bounce [animation-delay:300ms]"
            />
          </div>
        </div>

        <Image
          src={me}
          alt={personaldetails.name}
          height={350}
          width={350}
          className="rounded-2xl lg:h-3xl lg:w-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
