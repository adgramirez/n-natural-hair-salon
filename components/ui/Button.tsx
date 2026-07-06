import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "lg" | "job";
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
    sm: "h-[36px] min-w-[144px] px-6",
    lg: "h-[44px] min-w-[214px] px-8",
    job: "h-[52px] w-[251px] px-6",
  };

  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full transition-all duration-300",

        sizeClasses[size],

        // Typography
        size === "job"
          ? "font-nonchalance text-[16px] font-bold leading-[24px] tracking-[0px]"
          : "button-text",

        // Variants
        variant === "primary" &&
          "bg-[var(--primary)] text-[#1A1626] hover:opacity-90",

        variant === "secondary" &&
          "border border-white text-white hover:bg-white hover:text-black",

        variant === "outline" &&
          "border-2 border-[rgba(209,196,233,.3)] bg-transparent text-[rgba(209,196,233,.9)] hover:border-[var(--primary)] hover:text-[var(--primary)]",

        className
      )}
    >
      {children}
    </Link>
  );
}