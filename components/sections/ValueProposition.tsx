import Image from "next/image";

import Container from "@/components/ui/Container";
import ValueCard from "@/components/ui/ValueCard";
import { VALUES } from "@/constants/values";

export default function ValueProposition() {
  return (
    <section className="bg-[var(--bg)] py-16 lg:py-24">
      <Container>
        {/* Heading */}
        <h2
        className="
            text-center
            font-nonchalance
            text-[28px]
            font-bold
            leading-[32px]
            tracking-[-0.4px]
            text-white
            lg:text-[40px]
            lg:leading-[40px]
        "
        >
        what you get working here
        </h2>

        <div className="relative mt-[20.88px] h-auto lg:h-[1380px]">

        {/* Team Image */}
        <div className="relative flex justify-center">
          <Image
            src="/images/value.png"
            alt="N Natural Hair Salon Team"
            width={1256}
            height={938}
            priority
            className="h-auto w-full lg:w-[1256px] lg:max-w-none"
          />

        {/* Bottom Gradient Fade */}
          <div
            className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-[140px]
            w-full
            -translate-x-1/2
            bg-gradient-to-t
            from-[var(--bg)]
            via-[rgba(21,17,33,0.75)]
            to-transparent
            lg:h-[280px]
            lg:w-[1256px]
            "
          />
        </div>

        {/* Floating Cards */}
        {VALUES.map((value) => (
            <ValueCard
            key={value.number}
            {...value}
            />
        ))}

        </div>
      </Container>
    </section>
  );
}