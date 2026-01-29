"use client";

import { personaldetails } from "@/app/utils/data";
import Image from "next/image";
import me from "@/public/images/me.jpg";
import { Code2, Database, Download, Server, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Moon from "../ui/Moon";
import { downloadResume } from "@/app/utils/downloadresume";
import { useState } from "react";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    downloadResume();
    setLoading(false);
  };

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
        {/* Entire Content wraper */}
        <div className="flex flex-col gap-5 items-center justify-center border">
          {/* Name, Tagline, Statement */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-5">
              <h1
                className="font-black text-4xl lg:text-5xl xl:text-6xl tracking-wider text-balance text-transparent 
                         bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-red-400"
              >
                {personaldetails.name}
              </h1>
              <h2 className="font-semibold text-xl lg:text-2xl">
                {personaldetails.tagline}
              </h2>
              <p className="md:text-lg lg:text-balance text-gray-400">
                {personaldetails.statement}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="w-full flex-col justify-between items-center"
          >
            {/* Jumping Icons */}
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

            {/* Download Resume Button */}
            <Button
              title={`${loading ? "Downloading..." : "Download Resume"}`}
              onClick={handleDownload}
              icon={<Download size={28} />}
              className="flex items-center justify-center mt-5 bg-white/5 hover:shadow-md hover:shadow-purple-300/50 border border-white/20
                         p-4 w-[70%] lg:w-[50%] rounded-full md:text-lg transition-all duration-200 
                         hover:animate-pulse backdrop-blur-xs active:scale-[0.8] active:opacity-1"
              disabled={loading}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
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
