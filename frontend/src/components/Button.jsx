import { Loader2 } from "lucide-react";

function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  variant = "primary",
  size = "md",
  ariaLabel,
  className = "",
}) {
  const isDisabled = disabled || loading;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
  };
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:scale-95",
    secondary: "bg-purple-600 text-white hover:bg-purple-700 shadow-sm hover:shadow-md active:scale-95",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 active:scale-95",
    ghost: "text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:scale-95",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}

export default Button;