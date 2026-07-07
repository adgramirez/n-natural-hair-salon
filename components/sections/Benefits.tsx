import clsx from "clsx";

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

        <div className="mt-10 mx-auto grid w-full max-w-[732px] grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[50px] lg:max-w-[1114px] lg:grid-cols-3">
          {BENEFITS.slice(0, 3).map((benefit) => (
            <div
              key={benefit.title}
              className={clsx(
                // At the 2-column tablet range, push the featured card out
                // of the paired row it'd otherwise land in and give it its
                // own centered row instead. Reset back to a normal 1-of-3
                // cell once the 3-column desktop layout kicks in, where it
                // already sits correctly in the middle of the top row.
                benefit.featured &&
                  "sm:order-last sm:col-span-2 sm:mx-auto sm:w-[calc(50%-16px)] lg:order-none lg:col-span-1 lg:mx-0 lg:w-full"
              )}
            >
              <BenefitCard {...benefit} />
            </div>
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