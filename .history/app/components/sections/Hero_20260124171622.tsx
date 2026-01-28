import { personaldetails } from "@/app/data";
import Image from "next/image";
import me from "@/public/images/me.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white mt-305"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-7 lg:gap-20 text-center lg:text-start">
        <div className="flex flex-col gap-5">
          <h1 className="font-black text-3xl lg:text-6xl tracking-wider text-balance text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
            {personaldetails.name}
          </h1>
          <h2 className="font-semibold text-2xl lg:text-3xl">
            {personaldetails.tagline}
          </h2>
          <p className="lg:text-lg lg:text-balance">{personaldetails.statement}</p>
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
