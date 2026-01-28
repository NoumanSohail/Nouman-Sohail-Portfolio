"use client";

import { personaldetails } from "@/app/data";
import Image from "next/image";
import me from "@/public/images/me.jpg";
import { Code2, Database, Download, Server, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Moon from "../ui/Moon";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative scroll-mt-40 w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      {/* Moon */}
      <Moon />

      {/* Entire screen wraper */}
      <div
        className="relative flex flex-col lg:flex-row items-center justify-center 
                   gap-7 lg:gap-20 text-center lg:text-start mt-30 xl:mt-40"
      >
        {/* Content wraper */}
        <div className="flex flex-col gap-5">
          {/* Name, Tagline, Statement */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <h1
              className="font-black text-4xl lg:text-5xl xl:text-6xl tracking-wider text-balance text-transparent 
                         bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-red-400"
            >
              {personaldetails.name}
            </h1>
            <h2 className="font-semibold text-2xl lg:text-3xl">
              {personaldetails.tagline}
            </h2>
            <p className="lg:text-lg lg:text-balance">
              {personaldetails.statement}
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="flex flex-col gap-5 mt-5 items-center justify-center lg:items-start lg:justify-start"
          >
            {/* Jumping Icons */}
            <div className="flex gap-5">
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

            {/* Download Resume Button */}
            <Button
              title="Download Resume"
              onClick={() => console.log("Download")}
              icon={<Download size={28} />}
              className="bg-white/5 hover:shadow-md hover:shadow-purple-300/50
                        border border-white/20 p-4 w-[70%] lg:w-[50%] rounded-full md:text-lg
                        transition-all duration-300 hover:animate-pulse backdrop-blur-xs"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Image */}
          <Image
            src={me}
            alt={personaldetails.name}
            height={350}
            width={350}
            className="rounded-2xl lg:h-3xl lg:w-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
