import Image from "next/image";
import clsx from "clsx";

import Button from "./Button";
import JobBadge from "./JobBadge";

interface JobCardProps {
  level: string;
  type: string;
  title: string;
  description: string;
  location: string;
  salary: string;
  href: string;
  featured?: boolean;
}

export default function JobCard({
  level,
  type,
  title,
  description,
  location,
  salary,
  href,
  featured = false,
}: JobCardProps) {
  return (
    <article
      className={clsx(
        "rounded-[12px] border p-8 backdrop-blur-[20px]",
        featured
          ? "border-[rgba(225,255,0,.2)] bg-[rgba(26,22,38,.4)]"
          : "border-[rgba(209,196,233,.3)] bg-[rgba(26,22,38,.4)]"
      )}
    >
      <div className="flex items-center justify-between gap-12">

        <div className="max-w-[672px]">

          <div className="flex gap-2">
            <JobBadge featured={featured}>{level}</JobBadge>
            <JobBadge>{type}</JobBadge>
          </div>

          <h3 className="mt-[11.5px] font-nonchalance text-[24px] font-bold leading-[32px] text-white">
            {title}
          </h3>

          <p className="mt-[11.5px] text-[18px] leading-[24px] text-white">
            {description}
          </p>

          <div className="mt-[11.5px] flex items-center gap-4 text-[18px] leading-[24px] text-[rgba(209,196,233,.8)]">

            <span className="flex items-center gap-2">
              <Image
                src="/icons/location.svg"
                alt=""
                width={16}
                height={20}
              />
              {location}
            </span>

            <span className="flex items-center gap-2">
              <Image
                src="/icons/salary.svg"
                alt=""
                width={20}
                height={15}
              />
              {salary}
            </span>

          </div>

        </div>

        <Button
          href="#"
          size="job"
          variant={featured ? "primary" : "outline"}
        >
          Apply for this role
        </Button>

      </div>
    </article>
  );
}