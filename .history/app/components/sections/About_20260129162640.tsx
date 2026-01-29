"use client";

import { aboutdata } from "@/app/utils/data";
import me2 from "@/public/images/me2.jpg";
import Image from "next/image";
import Satellite from "../ui/Satellite";
import GlassCard from "../ui/GlassCard";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full mx-auto max-w-384 px-5 md:px-10 lg:px-15 text-white overflow-hidden"
    >
      {/*satellite*/}
      <Satellite />

      {/* Entire screen wraper */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 mt-20 xl:mt-30">
        {/* Header */}
        <div className="text-xl font-semibold tracking-widest text-center">
          About
        </div>

        {/* Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Image
            src={me2}
            alt="Nouman Sohail"
            height={250}
            width={250}
            className="rounded-2xl"
          />
        </motion.div>

        {/* Entire Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <GlassCard
          className="items-center justify-center mb-5 lg:w-[85%]">
            {/* Content */}
            {aboutdata.map((about, index) => (
              <div key={index} className="text-gray-300 leading-relaxed">
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
              </div>
            ))}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
