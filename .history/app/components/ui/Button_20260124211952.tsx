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
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`
        group
        font-bold shadow-lg
        transition-all transform
        flex items-center justify-center gap-2
        duration-300
        ${
          disabled
            ? "bg-(--color-gray) text-white cursor-not-allowed opacity-70 transition-all duration-300"
            : "bg-(--color-primary) text-white hover:bg-gray-300 hover:scale-105 cursor-pointer transition-all duration-300"
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
