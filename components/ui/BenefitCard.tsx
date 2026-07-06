import Image from "next/image";
import clsx from "clsx";
import { ReactNode } from "react";

interface BenefitCardProps {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: ReactNode;
  featured?: boolean;
}

export default function BenefitCard({
  icon,
  iconWidth,
  iconHeight,
  title,
  description,
  featured = false,
}: BenefitCardProps) {
  return (
    <article
      className={clsx(
        "h-[353px] w-[350px] rounded-[40px] p-10",
        featured ? "bg-[var(--primary)]" : "bg-white"
      )}
    >
      <div
        className={clsx(
          "flex h-16 w-16 items-center justify-center rounded-full",
          featured ? "bg-[#1A1626]" : "bg-[#FFF0E5]"
        )}
      >
        <Image
          src={icon}
          alt=""
          width={iconWidth}
          height={iconHeight}
        />
      </div>

      <h3 className="mt-8 text-[24px] font-bold leading-[32px] text-[#1A1A1A]">
        {title}
      </h3>

      <p className="mt-4 text-[18px] leading-[26px] text-[#666666]">
        {description}
      </p>
    </article>
  );
}