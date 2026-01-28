import { ReactNode } from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  type?: "button" | "submit";
  disabled?: boolean;

  /* 🔹 Optional Icon */
  icon?: ReactNode;
  iconPosition?: "left" | "right";

  /* 🔹 External Styles */
  className?: string;
}

const Button = ({
  title,
  onClick,
  type = "button",
  disabled = false,
  icon,
  iconPosition = "left",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
                  font-semibold shadow-lg
                  flex items-center justify-center gap-2
                  transition-all duration-300
                  ${
                    disabled
                      ? "bg-gray-500 text-white cursor-not-allowed opacity-60 pointer-events-none"
                      : "cursor-pointer hover:scale-105 hover:shadow-md active:scale-[0.95]"
                  }
                  ${className}
    `}
    >
      {/* ICON LEFT */}
      {icon && iconPosition === "left" && (
        <span className="button-icon flex items-center">{icon}</span>
      )}

      <span>{title}</span>

      {/* ICON RIGHT */}
      {icon && iconPosition === "right" && (
        <span className="button-icon flex items-center">{icon}</span>
      )}
    </button>
  );
};

export default Button;
