"use client";

export const AlienUFO = () => {
  return (
    <div className="alien-ufo">
      <div className="alien-ufo-move">
        <div className="alien-ufo-float">
          <svg
            width="180"
            height="180"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Glow */}
            <circle cx="256" cy="256" r="220" fill="#FCA5A5" opacity="0.25" />

            {/* UFO */}
            <ellipse cx="256" cy="300" rx="210" ry="60" fill="#CBD5E1" />
            <ellipse cx="256" cy="310" rx="190" ry="45" fill="#94A3B8" />

            {/* Lights */}
            {Array.from({ length: 7 }).map((_, i) => (
              <circle key={i} cx={140 + i * 40} cy={320} r="8" fill="#F472B6" />
            ))}

            {/* Dome */}
            <ellipse cx="256" cy="235" rx="110" ry="90" fill="#E0F2FE" opacity="0.8" />

            {/* Alien */}
            <ellipse cx="256" cy="225" rx="45" ry="55" fill="#67E8F9" />
            <ellipse cx="238" cy="220" rx="10" ry="16" fill="#111827" />
            <ellipse cx="274" cy="220" rx="10" ry="16" fill="#111827" />
          </svg>
        </div>
      </div>
    </div>
  );
};
