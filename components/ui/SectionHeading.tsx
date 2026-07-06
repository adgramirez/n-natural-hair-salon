interface SectionHeadingProps {
  title: React.ReactNode;
  accent?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  accent = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <h2 className="font-[family:var(--font-nonchalance)] text-5xl leading-tight md:text-6xl">
        {title}
      </h2>

      {accent && (
        <div className="mt-6 h-1 w-12 rounded-full bg-[var(--primary)]" />
      )}
    </div>
  );
}