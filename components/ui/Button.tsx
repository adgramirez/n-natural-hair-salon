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
    cta: "h-[56px] w-full max-w-[584px] px-6 lg:h-[68px] lg:px-10",
  };

  const typographyClasses = {
    sm: "nav-text",
    lg: "nav-text",
    job: "font-nonchalance font-bold text-[16px] leading-[24px] tracking-[0px]",
    cta: "font-nonchalance font-bold text-[13px] leading-[20px] tracking-[1px] lg:text-[18px] lg:leading-[28px] lg:tracking-[1.8px]",
  };

  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center justify-center rounded-full transition-all duration-300",

        sizeClasses[size],
        typographyClasses[size],

        variant === "primary" &&
          (size === "cta"
            ? clsx(
                "bg-[var(--primary)] text-[#1A1626] shadow-[0_12px_30px_rgba(225,255,0,0.15)]",
                "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                "hover:-translate-y-1.5 hover:scale-[1.03]",
                "active:translate-y-0 active:scale-100",
                "motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
              )
            : "bg-[var(--primary)] text-[#1A1626] hover:opacity-90"),

        variant === "secondary" &&
          "border border-white text-white hover:bg-white hover:text-black",

        variant === "outline" &&
          "border-2 border-[rgba(209,196,233,.3)] bg-transparent text-[rgba(209,196,233,.9)] hover:border-[var(--primary)] hover:text-[var(--primary)]",

        className
      )}
    >
      <span
        className={clsx(
          "relative inline-block transition-transform duration-300",
          "group-hover:scale-105 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]",
          "motion-reduce:group-hover:scale-100"
        )}
      >
        {children}

        <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
    </Link>
  );
}