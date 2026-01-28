"use client";

type Meteor = {
  top: string;
  delay: string;
  duration: string;
};

const METEORS: Meteor[] = [
  {
    top: "1%",
    delay: "3s",
    duration: "10s",
  },
  {
    top: "20%",
    delay: "6s",
    duration: "15s",
  },
  {
    top: "35%",
    delay: "9s",
    duration: "20s",
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
        >
          <span className="meteor-head" />
          <span className="meteor-tail" />
        </span>
      ))}
    </div>
  );
};
