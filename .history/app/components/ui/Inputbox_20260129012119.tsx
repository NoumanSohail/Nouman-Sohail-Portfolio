type InputVariant = "text" | "email" | "phone" | "number";

interface InputBoxProps {
  icon?: React.ReactNode;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;

  rows?: number;
  variant?: InputVariant;

  name?: string;
  autoComplete?: string;
}

const inputConfig: Record<
  InputVariant,
  {
    type: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    maxLength?: number;
    autoComplete?: string;
  }
> = {
  text: {
    type: "text",
  },
  email: {
    type: "email",
    inputMode: "email",
  },
  phone: {
    type: "tel",
    inputMode: "numeric",
    maxLength: 10,
  },
  number: {
    type: "text",
    inputMode: "numeric",
  },
};

const Inputbox = ({
  icon,
  placeholder = "",
  value,
  onChange,
  disabled = false,
  className = "",
  rows = 1,
  variant = "text",
  name,
  autoComplete,
}: InputBoxProps) => {
  const config = inputConfig[variant];

  const handleChange = (val: string) => {
    if (variant === "phone" || variant === "number") {
      onChange(val.replace(/\D/g, ""));
    } else {
      onChange(val);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative w-full">
        {icon && (
          <span className="absolute left-4 top-3 text-white/70">
            {icon}
          </span>
        )}

        {rows > 1 ? (
          <textarea
            rows={rows}
            name={name}
            autoComplete={autoComplete ?? config.autoComplete}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            className={`w-full px-5 py-3 pl-12 resize-none outline-none rounded-xl bg-white/5 transition-all ${className}`}
          />
        ) : (
          <input
            type={config.type}
            inputMode={config.inputMode}
            maxLength={config.maxLength}
            name={name}
            autoComplete={autoComplete ?? config.autoComplete}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            className={`w-full px-5 py-3 pl-12 outline-none rounded-xl bg-white/5 transition-all ${className}`}
          />
        )}
      </div>
    </div>
  );
};

export default Inputbox;
