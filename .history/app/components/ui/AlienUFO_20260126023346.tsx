"use client";

import Image from "next/image";
import alienufo from "@/public/images/alienufo.png"

export const AlienUFO = () => {
  return (
    <div className="alien-ufo-wrapper">
      <Image
        src={alienufo}
        alt="Alien UFO"
        width={200}
        height={200}
        priority={false}
      />
    </div>
  );
};
