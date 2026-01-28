"use client";

import { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: any[] = [];
    const STAR_COUNT = 120;

    const resize = () => {
      canvas.width = wrapper.offsetWidth;
      canvas.height = wrapper.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random(),
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 -z-10 pointer-events-none"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default StarBackground;
