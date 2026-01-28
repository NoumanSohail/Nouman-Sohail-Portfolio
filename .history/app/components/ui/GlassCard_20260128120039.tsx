type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div
      className={`flex flex-col gap-5 border border-white/20 bg-white/5 
        backdrop-blur-xs hover:scale-105 hover:shadow-md hover:shadow-purple-300/50
        hover:animate-pulse transition-all duration-300 text-white p-5 rounded-3xl
        ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
