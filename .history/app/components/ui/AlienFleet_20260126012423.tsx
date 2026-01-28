"use client";

export const AlienFleet = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Alien */}
      <div className="alien alien-move" />

      {/* Spaceship */}
      <div className="ufo ufo-move" />
    </div>
  );
};
