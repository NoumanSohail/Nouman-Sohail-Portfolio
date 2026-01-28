"use client";

type Meteor = {
  top: string;
  delay: string;
  duration: string;
};

const METEORS: Meteor[] = [
  {
    top: "1%",
    delay: "5s",
    duration: "5s", 
  },
  {
    top: "20%",
    delay: "10s",
    duration: "10s", 
  },
  {
    top: "35%",
    delay: "15s",
    duration: "15s", 
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
