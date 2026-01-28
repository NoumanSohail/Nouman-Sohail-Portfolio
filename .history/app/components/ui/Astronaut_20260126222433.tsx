"use client";

import Image from "next/image";
import astronaut from "@/public/images/austronaut.png";

const Astronaut = () => {
  return (
    <div className="astronaut-wrapper">
      <Image
        src={astronaut}
        alt="Flying Astronaut"
        className="astronaut"
        priority
      />
    </div>
  );
};

export default Astronaut;
