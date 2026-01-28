import React from "react";

const Moon = () => {
  return (
    //Moon
    <div className="absolute -left-15 -top-15 pointer-events-none">
      <div
        className="absolute inset-0 w-50 h-50 xl:w-64 xl:h-64 rounded-full
               bg-white/30 blur-3xl animate-pulse [animation-duration:3.5s]"
      />
      <div
        className="relative w-44 h-44 xl:w-56 xl:h-56 rounded-full
               bg-linear-to-br from-gray-600 via-gray-400 to-gray-200
               shadow-[0_0_80px_20px_rgba(100,100,100,0.25)] z-10"
      >
        <div className="absolute inset-2 rounded-full bg-white/10 blur-sm" />
        <div className="absolute top-6 left-10 w-4 h-4 rounded-full bg-black/10" />
        <div className="absolute top-20 left-5 w-8 h-8 rounded-full bg-black/10" />
        <div className="absolute top-[10%] left-[50%] w-12 h-12 rounded-full bg-black/10" />
        <div className="absolute bottom-[10%] right-[60%] w-10 h-10 rounded-full bg-black/10" />
        <div className="absolute bottom-10 right-12 w-3 h-3 rounded-full bg-black/10" />
        <div className="absolute top-16 right-8 w-2 h-2 rounded-full bg-black/10" />
      </div>
    </div>
  );
};

export default Moon;
