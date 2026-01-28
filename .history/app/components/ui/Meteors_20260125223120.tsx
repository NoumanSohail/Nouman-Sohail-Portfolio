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
    const generated = Array.from({ length: 6 }).map((_, i) => ({
      top: `${Math.random() * 60}%`,
      delay: `${i * 1.5}s`,
      duration: `${6 + Math.random() * 4}s`,
    }));

    setMeteors(generated);
  }, []);

  // ⛔ Prevent hydration mismatch by not rendering on server
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
