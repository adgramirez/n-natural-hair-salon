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
      <span
        className="
          absolute
          right-4
          top-4
          font-nonchalance
          text-[12px]
          font-bold
          leading-[12px]
          tracking-[1.2px]
          text-[var(--primary)]
        "
      >
        {number}
      </span>

      {/* Heading */}
      <h3
        className="
          mt-4
          text-[20px]
          font-bold
          leading-[26px]
          text-white
          lg:text-[24px]
          lg:leading-[31px]
        "
      >
        {title}
      </h3>

      {/* Paragraph */}
      <p
        className="
          mt-2
          text-[16px]
          leading-[22px]
          text-white
          lg:text-[18px]
          lg:leading-[24px]
        "
      >
        {description}
      </p>
    </article>
  );
}