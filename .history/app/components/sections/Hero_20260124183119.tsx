import { personaldetails } from "@/app/data";
import Image from "next/image";
import me from "@/public/images/me.webp";
import { Braces, Code, Code2, Database, Server, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-40 scroll-smooth w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white mt-30 md:mt-40 h-fit"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-7 lg:gap-20 text-center lg:text-start">
        <div className="flex flex-col gap-5">
          <h1 className="font-black text-3xl lg:text-6xl tracking-wider text-balance text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
            {personaldetails.name}
          </h1>
          <h2 className="font-semibold text-2xl lg:text-3xl">
            {personaldetails.tagline}
          </h2>
          <p className="lg:text-lg lg:text-balance">
            {personaldetails.statement}
          </p>

          <div className="flex gap-5">
            <Smartphone size={70} className="p-4 border border-blue-300/30 rounded-2xl backdrop-blur-md bg-blue-300/10 hover:scale-110 hover:border-blue-300 text-blue-300/50"/>
            <Code2 size={32} />
            <Server size={32} />
            <Database size={32} />
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
