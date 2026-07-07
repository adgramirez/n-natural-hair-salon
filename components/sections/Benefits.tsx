import BenefitCard from "@/components/ui/BenefitCard";
import Container from "@/components/ui/Container";
import { BENEFITS } from "@/constants/benefits";

export default function Benefits() {
  return (
    <section
      id="culture"
      className="relative scroll-mt-10 overflow-hidden bg-[var(--bg)] py-16 lg:py-24"
    >

      {/* Decorative Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[10px]
          top-[305px]
          h-[500px]
          w-[500px]
          rounded-[80px]
          bg-[rgba(225,255,0,0.2)]
          opacity-10
          blur-[40px]
        "
      />

      <Container>

        <div className="lg:ml-10">

          <h2 className="section-title">
            why natural hair
            <br />
            <span className="text-[var(--primary)]">
              stylists stay
            </span>{" "}
            here
          </h2>

          <div className="mt-6 h-2 w-16 rounded-full bg-[var(--primary)]" />
        </div>

        <div className="mt-10 mx-auto grid w-full max-w-[1114px] grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-3">
          {BENEFITS.slice(0, 3).map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>

        <div className="mt-8 mx-auto grid w-full max-w-[732px] grid-cols-1 gap-8 sm:grid-cols-2">
          {BENEFITS.slice(3).map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>

      </Container>
    </section>
  );
}