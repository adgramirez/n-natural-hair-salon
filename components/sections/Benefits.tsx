import BenefitCard from "@/components/ui/BenefitCard";
import Container from "@/components/ui/Container";
import { BENEFITS } from "@/constants/benefits";

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] py-24">

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

        <div className="ml-10">

          <h2 className="font-nonchalance text-[48px] font-bold leading-[48px] text-white">
            why natural hair
            <br />
            <span className="text-[var(--primary)]">
              stylists stay
            </span>{" "}
            here
          </h2>

          <div className="mt-6 h-2 w-16 rounded-full bg-[var(--primary)]" />
        </div>

        <div className="mt-[50px] mx-auto grid w-[1114px] grid-cols-3 gap-8">
          {BENEFITS.slice(0, 3).map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>

        <div className="mt-8 mx-auto grid w-[732px] grid-cols-2 gap-8">
          {BENEFITS.slice(3).map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>

      </Container>
    </section>
  );
}