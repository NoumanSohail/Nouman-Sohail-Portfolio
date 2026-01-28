interface InputBoxProps {
  icon?: React.ReactNode;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;

  rows?: number;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
}

const Inputbox = ({
  icon,
  placeholder = "",
  value,
  onChange,
  disabled = false,
  className = "",
  rows = 1,
  type = "text",
  inputMode,
  maxLength,
}: InputBoxProps) => {
  return (
    <div className={`flex flex-col gap-1 w-full`}>
      <div className="relative w-full">
        {icon && (
          <span className="absolute left-4 top-3 text-white/70">
            {icon}
          </span>
        )}

        {rows > 1 ? (
          /* TEXTAREA */
          <textarea
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={`w-full px-5 py-3 pl-12 resize-none outline-none rounded-xl bg-white/5 transition-all ${className}`}
          />
        ) : (
          /* INPUT */
          <input
            type={type}
            inputMode={inputMode}
            maxLength={maxLength}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            className={`w-full px-5 py-3 pl-12 outline-none rounded-xl bg-white/5 transition-all ${className}`}
          />
        )}
      </div>
    </div>
  );
};

export default Inputbox;
