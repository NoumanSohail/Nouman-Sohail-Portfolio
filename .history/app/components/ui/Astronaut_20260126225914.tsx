"use client";

import Image from "next/image";
import astronaut from "@/public/images/austronaut.png";

const Astronaut = () => {
  return (
    <div className="astronaut-wrapper">
      <Image
        src={astronaut}
        alt="Flying Astronaut"
        width={180}
        height={180}
        className="astronaut"
        priority={false}
      />
    </div>
  );
};

export default Astronaut;
