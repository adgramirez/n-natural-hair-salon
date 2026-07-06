import Container from "@/components/ui/Container";
import JobCard from "@/components/ui/JobCard";
import { JOBS } from "@/constants/jobs";

export default function JobBoard() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>

        {/* Heading */}
        <div className="mx-auto w-[1120px] border-b border-[rgba(209,196,233,.2)] pb-8">

          <h2 className="font-nonchalance text-[40px] font-bold leading-[48px] tracking-[-0.4px] text-white">
            open roles
          </h2>

          <p className="mt-2 text-[18px] leading-[26px] text-[#C6C9AB]">
            NATURAL HAIR STYLIST JOBS AND MORE
          </p>

        </div>

        {/* Cards */}
        <div className="mx-auto mt-8 flex w-[1120px] flex-col gap-4">

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
            mx-auto
            mt-8
            flex
            h-[58px]
            w-[1120px]
            items-center
            rounded-[8px]
            border
            border-[rgba(209,196,233,.1)]
            bg-[#1D1929]
            px-4
            whitespace-nowrap
            text-[18px]
            leading-[24px]
            font-normal
          "
        >
          <span className="text-[rgba(209,196,233,.9)]">
            Note for Brooklyn Applicants:
          </span>

          <span className="ml-1 text-[#C6C9AB]">
            A valid NY Cosmetology License is required for all styling positions in our Brooklyn location.
          </span>
        </div>

      </Container>
    </section>
  );
}