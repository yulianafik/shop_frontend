interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const colors = {
    primary: `
      bg-transparent
      hover:bg-gray-100 
      hover:shadow-[2px_2px_8px_rgba(0,0,0,0.1)]
      active:bg-gray-200
      active:shadow-[inset_0_0_0_2px_rgb(156,163,175)]
      disabled:bg-transparent
      disabled:text-gray-400
      disabled:cursor-not-allowed
      disabled:hover:shadow-none
      text-gray-700
      border border-gray-300
    `,

    secondary: `
      bg-transparent
      hover:bg-gray-100 
      hover:shadow-[2px_2px_8px_rgba(0,0,0,0.1)]
      active:bg-gray-200
      active:shadow-[inset_0_0_0_2px_rgb(156,163,175)]
      disabled:bg-transparent
      disabled:text-gray-400
      disabled:cursor-not-allowed
      disabled:hover:shadow-none
      text-gray-700
      border border-gray-300
    `,

    outline: `
      bg-transparent
      border border-gray-300 
      hover:shadow-[2px_2px_8px_rgba(0,0,0,0.1)]
      hover:bg-gray-100
      active:bg-gray-200
      active:shadow-[inset_0_0_0_2px_rgb(156,163,175)]
      disabled:bg-transparent
      disabled:text-gray-400
      disabled:cursor-not-allowed
      disabled:hover:shadow-none
      text-gray-700
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const baseStyles =
    "font-medium rounded-lg transition-all duration-150 justify-center";
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${widthStyle} ${colors[variant]} ${sizes[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
