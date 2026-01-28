"use client";

import { useEffect, useState } from "react";

type Meteor = {
  top: string;
  delay: string;
  duration: string;
};

export const Meteors = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 7 }).map(() => ({
      top: `${Math.random() * 50}%`, // random vertical start
      delay: `${Math.random() * 6}s`, // RANDOM delay
      duration: `${5 + Math.random() * 4}s`, // random speed
    }));

    setMeteors(generated);
  }, []);

  if (meteors.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((meteor, i) => (
        <span
          key={i}
          className="meteor"
          style={{
            top: meteor.top,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        />
      ))}
    </div>
  );
};
