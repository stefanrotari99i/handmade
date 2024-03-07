const buttonVariants = {
  primary: "bg-transparent border-2 border-neutral-700 text-neutral-700",
  secondary: "bg-neutral-700 text-white",
};

const buttonSizes = {
  sm: "text-xs",
  md: "text-md",
  lg: "text-lg",
};

const Button = ({
  label,
  icon,
  onClick,
  variant,
  full,
  size,
  className,
}: {
  label: string;
  icon?: any;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  full?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) => {
  return (
    <button
      className={`${className}  flex items-center justify-between backdrop-blur-md  h-12 ${
        buttonVariants[variant || "primary"]
      } ${full ? "w-full" : ""} ${size ? buttonSizes[size] : buttonSizes.md}`}
      onClick={onClick}
    >
      <span className="uppercase font-semibold px-6 leading-none">{label}</span>
      {icon && (
        <span
          className={`w-12 h-12 ${
            variant === "secondary" ? "bg-neutral-500" : "bg-neutral-700"
          }  flex items-center justify-center`}
        >
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
