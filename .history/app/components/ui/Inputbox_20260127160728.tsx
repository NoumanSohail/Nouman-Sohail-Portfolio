interface InputBoxProps {
  icon?: React.ReactNode;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;

  rows?: number;
}

const Inputbox = ({
  icon,
  placeholder = "",
  value,
  onChange,
  disabled = false,
  className = "",
  rows = 3,
}: InputBoxProps) => {
  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <div className="relative flex items-start justify-center">
        {icon && <span className="absolute left-4 top-3.5 flex justify-center">{icon}</span>}

        <textarea
          rows={rows}
          placeholder={placeholder || "Enter something"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`w-full px-5 py-3 pl-12 resize-none outline-none transition-all ${
            disabled ? "bg-gray-100" : ""
          } ${className}`}
        />
      </div>
    </div>
  );
};

export default Inputbox;
