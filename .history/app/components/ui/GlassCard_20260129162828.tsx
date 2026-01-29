type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div
      className={`
        ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
