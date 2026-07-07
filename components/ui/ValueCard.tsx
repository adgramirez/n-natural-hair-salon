import Image from "next/image";

interface ValueCardProps {
  number: string;
  icon: string;
  title: string;
  description: string;
  iconHeight: number;
  top: number;
  left: number;
}

export default function ValueCard({
  number,
  icon,
  title,
  description,
  iconHeight,
  top,
  left,
}: ValueCardProps) {
  return (
    <article
      className="value-card relative mt-6 w-full min-h-[220px] rounded-[20px] bg-[#3B3748] p-6 lg:absolute lg:mt-0 lg:h-[346px] lg:w-[360px] lg:p-8"
      style={
        {
          "--card-top": `${top}px`,
          "--card-left": `${left}px`,
        } as React.CSSProperties
      }
    >
      {/* Icon */}
      <Image
        src={icon}
        alt=""
        width={32}
        height={iconHeight}
        className="w-auto"
        style={{
            height: `${iconHeight}px`,
        }}
      />

      {/* Number */}
      <span className="absolute right-4 top-4 nav-text text-[var(--primary)]">
        {number}
      </span>

      {/* Heading */}
      <h3 className="mt-4 card-title font-bold text-white">
        {title}
      </h3>

      {/* Paragraph */}
      <p className="mt-2 card-body text-white">
        {description}
      </p>
    </article>
  );
}