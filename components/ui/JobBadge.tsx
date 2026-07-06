import clsx from "clsx";

interface JobBadgeProps {
  children: React.ReactNode;
  featured?: boolean;
}

export default function JobBadge({
  children,
  featured = false,
}: JobBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex h-[23px] items-center rounded-full px-3 text-[10px] leading-[15px] font-nonchalance",
        featured
          ? "border border-[rgba(225,255,0,.3)] bg-[rgba(225,255,0,.1)] text-[var(--primary)]"
          : "bg-[rgba(209,196,233,.1)] text-white"
      )}
    >
      {children}
    </span>
  );
}