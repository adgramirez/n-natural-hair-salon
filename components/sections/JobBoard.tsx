import Container from "@/components/ui/Container";
import JobCard from "@/components/ui/JobCard";
import { JOBS } from "@/constants/jobs";

export default function JobBoard() {
  return (
    <section className="bg-[var(--bg)] py-16 lg:py-24">
      <Container>

        {/* Heading */}
        <div className="w-full border-b border-[rgba(209,196,233,.2)] pb-8 lg:mx-auto lg:max-w-[1120px]">

          <h2 className="font-nonchalance text-[28px] font-bold leading-[32px] tracking-[-0.4px] text-white lg:text-[40px] lg:leading-[48px]">
            open roles
          </h2>

          <p className="mt-2 text-[16px] leading-[24px] text-[#C6C9AB] lg:text-[18px] lg:leading-[26px]">
            NATURAL HAIR STYLIST JOBS AND MORE
          </p>

        </div>

        {/* Cards */}
        <div className="mt-8 flex w-full flex-col gap-4 lg:mx-auto lg:max-w-[1120px]">

          {JOBS.map((job) => (
            <JobCard
              key={job.title}
              {...job}
            />
          ))}

        </div>

        {/* Note */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            items-start
            gap-1
            rounded-[8px]
            border
            border-[rgba(209,196,233,.1)]
            bg-[#1D1929]
            px-4
            py-3
            text-[16px]
            leading-[22px]
            font-normal
            lg:mx-auto
            lg:min-h-[58px]
            lg:max-w-[1120px]
            lg:flex-row
            lg:flex-wrap
            lg:items-center
            lg:gap-0
            lg:py-0
            lg:text-[18px]
            lg:leading-[24px]
          "
        >
          <span className="text-[rgba(209,196,233,.9)]">
            Note for Brooklyn Applicants:
          </span>

          <span className="lg:ml-1 text-[#C6C9AB]">
            A valid NY Cosmetology License is required for all styling positions in our Brooklyn location.
          </span>
        </div>

      </Container>
    </section>
  );
}