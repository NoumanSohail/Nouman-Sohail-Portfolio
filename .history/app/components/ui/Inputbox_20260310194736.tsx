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
    autoComplete: "name",
  },
  email: {
    type: "email",
    inputMode: "email",
    autoComplete: "email",
  },
  phone: {
    type: "tel",
    inputMode: "numeric",
    maxLength: 10,
    autoComplete: "tel",
  },
  number: {
    type: "number",
    inputMode: "decimal",
    autoComplete: "off",
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
    if (variant === "phone") {
      onChange(val.replace(/\D/g, ""));
    } else {
      onChange(val);
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="relative w-full text-white/70">
        {icon && (
          <span className="absolute left-4 top-3">{icon}</span>
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
