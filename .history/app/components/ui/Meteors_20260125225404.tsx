"use client";

type Meteor = {
  top: string;
  delay: string;
  duration: string;
};

const METEORS: Meteor[] = [
  {
    top: "5%",
    delay: "0s",
    duration: "5s", // fast
  },
  {
    top: "25%",
    delay: "2.5s",
    duration: "6.5s", // medium
  },
  {
    top: "50%",
    delay: "5s",
    duration: "8s", // slow
  },
];

export const Meteors = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {METEORS.map((meteor, i) => (
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
