"use client";

type Meteor = {
  top: string;
  delay: string;
  duration: string;
};

const METEORS: Meteor[] = [
  {
    top: "1%",
    delay: "0s",
    duration: "10s",
  },
  {
    top: "20%",
    delay: "2.5s",
    duration: "10s",
  },
  {
    top: "40%",
    delay: "5s",
    duration: "10s",
  },
  {
    top: "60%",
    delay: "5s",
    duration: "10s",
  },
  {
    top: "80%",
    delay: "5s",
    duration: "10s",
  },
];

export const Meteors = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
