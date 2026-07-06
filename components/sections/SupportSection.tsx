import Image from "next/image";
import Container from "@/components/ui/Container";

export default function SupportSection() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>

        {/* Heading */}
        <h2 className="font-nonchalance text-[40px] font-bold leading-[48px] tracking-[-0.4px] text-white">
          a salon that{" "}
          <span className="text-[var(--primary)]">
            supports
          </span>{" "}
          you,
          <br />
          not the other way around
        </h2>

        {/* Accent Bar */}
        <div className="mt-[74px] h-2 w-16 rounded-full bg-[var(--primary)]" />

        {/* Content */}
        <div className="mt-[74px] grid grid-cols-[516px_1fr] gap-[60px]">

          {/* Left */}
          <Image
            src="/images/support.png"
            alt="Salon Interior"
            width={516}
            height={531}
            className="rounded-[12px]"
            priority
          />

          {/* Right */}
          <div>

            <p className="text-[18px] leading-[26px] text-white">
              Most stylists do not leave a salon because they stop
              <br />
              loving the work. They leave because they are carrying all
              <br />
              of it alone: their own schedule, their own payment
              <br />
              chasing, their own marketing, their own difficult clients.
              <br />
              The craft gets buried under the admin. That is the part
              <br />
              we fixed.
            </p>

            <div className="mt-6 border-l-2 border-[var(--primary)] pl-5">

              <p className="text-[24px] font-bold leading-[33.6px] text-[#D1C4E9]">
                We are fertile ground for a fresh
                <br />
                start. Careers get built here, with
                <br />
                room to grow into more when you
                <br />
                are ready.
              </p>

            </div>

            <p className="mt-6 text-[18px] leading-[26px] text-white">
              Here, the support is already in place. Our HR, marketing,
              <br />
              and booking teams handle the parts that drain stylists
              <br />
              everywhere else, so your energy goes where it belongs:
              <br />
              into textured hair and the person in your chair. We
              <br />
              promote an afro-centered aesthetic and treat healthy
              <br />
              natural hair as the foundation of every style.
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}