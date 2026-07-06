import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "sm",
  className,
}: ButtonProps) {
  const sizeClasses = {
    sm: "h-[36px] min-w-[144px] px-6 text-xs",
    lg: "h-[44px] min-w-[214px] px-8 text-sm",
  };

  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full button-text transition-all duration-300",
        sizeClasses[size],
        variant === "primary" &&
          "bg-[var(--primary)] text-black hover:opacity-90",
        variant === "secondary" &&
          "border border-white text-white hover:bg-white hover:text-black",
        className
      )}
    >
      {children}
    </Link>
  );
}