import React, { useState } from "react";

interface InputBoxProps {
  icon?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;

  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: "on" | "off";
  maxLength?: number;
  pattern?: string;
}

const Inputbox = ({
  icon,
  placeholder = "",
  type = "text",
  value,
  onChange,
  disabled = false,
  className = "",
}: InputBoxProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <div className={`relative flex items-center  ${className}`}>
        {icon && (
          <span className="absolute left-4 justify-center items-center">
            {icon}
          </span>
        )}

        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`w-full px-5 py-3  pl-12 pr-12 outline-none transition-all font-medium ${
            disabled ? "bg-gray-100" : ""
          } ${className}`}
        />
      </div>
    </div>
  );
};

export default Inputbox;
