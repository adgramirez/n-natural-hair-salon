import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "lg" | "job" | "cta";
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
    cta: "h-[68px] w-[584px] px-10",
  };

  const typographyClasses = {
    sm: "button-text",
    lg: "button-text",
    job: "font-nonchalance font-bold text-[16px] leading-[24px] tracking-[0px]",
    cta: "font-nonchalance font-bold text-[18px] leading-[28px] tracking-[1.8px]",
  };

  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-full transition-all duration-300",

        sizeClasses[size],
        typographyClasses[size],

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