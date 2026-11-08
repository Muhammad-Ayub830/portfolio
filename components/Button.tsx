type Variant = "primary" | "outline" | "white";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-indigo-700",
  outline: "border border-gray-300 bg-white text-ink hover:bg-surface",
  white: "bg-white text-accent hover:bg-indigo-50",
};

const sizes: Record<Size, string> = {
  sm: "px-[22px] py-3",
  md: "px-7 py-4",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-[10px] text-base font-semibold transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
