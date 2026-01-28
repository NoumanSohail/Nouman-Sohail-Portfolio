"use client";

import Image from "next/image";
import alienufo from "@/public/images/alienufo.png"

export const AlienUFO = () => {
  return (
    <div className="alien-ufo-wrapper">
      <Image
        src={alienufo}
        alt="Alien UFO"
        width={300}
        height={300}
        priority={false}
      />
    </div>
  );
};
