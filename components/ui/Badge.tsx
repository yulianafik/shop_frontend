interface BadgeProps {
  children?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
}: BadgeProps) {

  const colors = {
    default: `
      bg-red-100 
      text-red-800
      hover:bg-red-200
      hover:shadow-[2px_2px_8px_rgba(239,68,68,0.3)]
      transition-all duration-150
    `,
    
    success: `
      bg-red-200 
      text-red-800
      hover:bg-red-300
      hover:shadow-[2px_2px_8px_rgba(239,68,68,0.4)]
      transition-all duration-150
    `,
    
    warning: `
      bg-red-300 
      text-red-900
      hover:bg-red-400
      hover:shadow-[2px_2px_8px_rgba(239,68,68,0.5)]
      transition-all duration-150
    `,
    
    error: `
      bg-red-600 
      text-white
      hover:bg-red-700
      hover:shadow-[2px_2px_8px_rgba(239,68,68,0.6)]
      transition-all duration-150
    `,
    
    info: `
      bg-red-400 
      text-white
      hover:bg-red-500
      hover:shadow-[2px_2px_8px_rgba(239,68,68,0.5)]
      transition-all duration-150
    `,
  };

  const sizes = {
    sm: dot ? "w-2 h-2" : "px-2 py-0.5 text-xs min-w-[18px] h-[18px]",
    md: dot ? "w-2.5 h-2.5" : "px-2 py-0.5 text-xs min-w-[20px] h-[20px]",
    lg: dot ? "w-3 h-3" : "px-2.5 py-1 text-sm min-w-[24px] h-[24px]",
  };

  const baseStyles = "inline-flex items-center justify-center font-bold rounded-full";

  return (
    <span className={`${baseStyles} ${colors[variant]} ${sizes[size]}`}>
      {!dot && children}
    </span>
  );
}