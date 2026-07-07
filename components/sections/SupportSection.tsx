import Image from "next/image";
import Container from "@/components/ui/Container";

export default function SupportSection() {
  return (
    <section className="bg-[var(--bg)] py-16 lg:py-24">
      <Container>

        {/* Heading */}
        <h2 className="font-nonchalance text-[28px] font-bold leading-[34px] tracking-[-0.4px] text-white lg:text-[40px] lg:leading-[48px]">
          a salon that{" "}
          <span className="text-[var(--primary)]">
            supports
          </span>{" "}
          you,
          <br />
          not the other way around
        </h2>

        {/* Accent Bar */}
        <div className="mt-10 h-2 w-16 rounded-full bg-[var(--primary)] lg:mt-[74px]" />

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:mt-[74px] lg:grid-cols-[516px_1fr] lg:gap-[60px]">

          {/* Left */}
          <Image
            src="/images/support.png"
            alt="Salon Interior"
            width={516}
            height={531}
            className="h-auto w-full rounded-[12px]"
            priority
          />

          {/* Right */}
          <div>

            <p className="text-[16px] leading-[24px] text-white lg:text-[18px] lg:leading-[26px]">
              Most stylists do not leave a salon because they stop loving the
              work. They leave because they are carrying all of it alone:
              their own schedule, their own payment chasing, their own
              marketing, their own difficult clients. The craft gets buried
              under the admin. That is the part we fixed.
            </p>

            <div className="mt-6 border-l-2 border-[var(--primary)] pl-5">

              <p className="text-[20px] font-bold leading-[28px] text-[#D1C4E9] lg:text-[24px] lg:leading-[33.6px]">
                We are fertile ground for a fresh start. Careers get built
                here, with room to grow into more when you are ready.
              </p>

            </div>

            <p className="mt-6 text-[16px] leading-[24px] text-white lg:text-[18px] lg:leading-[26px]">
              Here, the support is already in place. Our HR, marketing, and
              booking teams handle the parts that drain stylists everywhere
              else, so your energy goes where it belongs: into textured hair
              and the person in your chair. We promote an afro-centered
              aesthetic and treat healthy natural hair as the foundation of
              every style.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}