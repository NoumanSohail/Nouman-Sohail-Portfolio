"use client";

import Image from "next/image";
import alienufo from "@/public/images/alienufo.png";

export const AlienUFO = () => {
  return (
    <div className="alien-fly">
      <div className="alien-wave">
        <Image
          src={alienufo}
          alt="Alien UFO"
          width={220}
          height={220}
          priority={false}
        />
      </div>
    </div>
  );
};
