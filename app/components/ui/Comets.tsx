"use client";

type Comets = {
  top: string;
  delay: string;
  duration: string;
};

const COMETS: Comets[] = [
  {
    top: "1%",
    delay: "2.5s",
    duration: "15s",
  },
  {
    top: "43%",
    delay: "5.0s",
    duration: "20s",
  },
];

export const Comets = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {COMETS.map((comet, i) => (
        <span
          key={i}
          className="comet"
          style={{
            top: comet.top,
            animationDelay: comet.delay,
            animationDuration: comet.duration,
          }}
        >
          <span className="comet-head" />
          <span className="comet-tail" />
        </span>
      ))}
    </div>
  );
};
