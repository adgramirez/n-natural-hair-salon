import clsx from "clsx";

interface ApplicationStepProps {
  number: number;
  title: string;
  description: string;
  active: boolean;
  last: boolean;
}

export default function ApplicationStep({
  number,
  title,
  description,
  active,
  last,
}: ApplicationStepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-full text-[14px] font-bold",
            number === 2
              ? "border border-[#E1FF00] bg-[#151121] text-[#E1FF00]"
              : number === 3
              ? "border border-[rgba(209,196,233,.5)] bg-[#151121] text-[rgba(209,196,233,.7)]"
              : "bg-[#E1FF00] text-[#151121]"
          )}
        >
          {number}
        </div>

        {!last && (
          <div
            className={clsx(
            "mt-2 h-[78px] w-px",
            number === 2
                ? "bg-gradient-to-b from-[#E1FF00] via-[#E1FF00] to-[rgba(209,196,233,.45)]"
                : number === 1
                ? "bg-gradient-to-b from-[#E1FF00] to-[#E1FF00]"
                : "bg-gradient-to-b from-[rgba(209,196,233,.45)] to-[rgba(209,196,233,.45)]"
            )}
          />
        )}
      </div>

      <div>
        <h3 className="text-[20px] leading-[24px] text-white lg:text-[24px] lg:leading-[26px]">
          {title}
        </h3>

        <p className="mt-2 text-[16px] leading-[22px] text-white lg:text-[18px] lg:leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}