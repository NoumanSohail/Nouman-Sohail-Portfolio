"use client";

import Image from "next/image";

export const AlienUFO = () => {
  return (
    <div className="alien-ufo-wrapper">
      <Image
        src="/images/alien-ufo.png"
        alt="Alien UFO"
        width={160}
        height={160}
        priority={false}
      />
    </div>
  );
};
