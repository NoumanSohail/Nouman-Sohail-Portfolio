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
    const generated = Array.from({ length: 5 }).map((_, i) => ({
      top: `${Math.random() * 40}%`, // upper portion only
      delay: `${i * 3}s`,
      duration: `${6 + Math.random() * 4}s`,
    }));

    setMeteors(generated);
  }, []);

  if (meteors.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
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
