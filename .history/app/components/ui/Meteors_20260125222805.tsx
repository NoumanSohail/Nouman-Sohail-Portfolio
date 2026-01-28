"use client";

export const Meteors = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="meteor"
          style={{
            top: `${Math.random() * 60}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
};
