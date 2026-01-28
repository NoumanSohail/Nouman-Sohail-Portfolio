"use client";

type Meteor = {
  top: string;
  delay: string;
  duration: string;
};

const METEORS: Meteor[] = [
  {
    top: "1%",
    delay: "2.5s",
    duration: "15s",
  },
  {
    top: "45%",
    delay: "5.0s",
    duration: "20s",
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
        >
          <span className="meteor-head" />
          <span className="meteor-tail" />
        </span>
      ))}
    </div>
  );
};
