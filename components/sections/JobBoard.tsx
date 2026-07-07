import Container from "@/components/ui/Container";
import JobCard from "@/components/ui/JobCard";
import { JOBS } from "@/constants/jobs";

export default function JobBoard() {
  return (
    <section
      id="journey"
      className="scroll-mt-[var(--navbar-height)] bg-[var(--bg)] py-16 lg:py-24"
    >
      <Container>

        {/* Heading */}
        <div className="w-full border-b border-[rgba(209,196,233,.2)] pb-8 lg:mx-auto lg:max-w-[1120px]">

          <h2 className="section-title">
            open roles
          </h2>

          <p className="mt-2 card-body text-[var(--text-secondary)]">
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
            card-body
            lg:mx-auto
            lg:min-h-[58px]
            lg:max-w-[1120px]
            lg:flex-row
            lg:flex-wrap
            lg:items-center
            lg:gap-0
            lg:py-0
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