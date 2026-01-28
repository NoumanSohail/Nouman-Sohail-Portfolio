"use client";

import Image from "next/image";
import astronaut from "@/public/images/austronaut.png";

const Astronaut = () => {
  return (
    <div className="astronaut-wrapper">
      <Image
        src={astronaut}
        alt="Flying Astronaut"
        width={200}
        height={200}
        className="astronaut"
        priority={false}
      />
    </div>
  );
};

export default Astronaut;
