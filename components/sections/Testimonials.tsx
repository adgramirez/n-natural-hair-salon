import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[var(--bg)] py-16 lg:py-24">
      <Container>

<div className="w-full lg:mx-auto lg:w-[1248px]">

  <h2
    className="
      font-nonchalance
      text-[28px]
      font-bold
      leading-[32px]
      tracking-[-0.4px]
      text-white
      lg:text-[40px]
      lg:leading-[48px]
    "
  >
    who thrives here
  </h2>

  <div className="mt-6 h-2 w-16 rounded-full bg-[var(--primary)]" />

  <p
    className="
      mt-6
      w-full
      text-[16px]
      leading-[24px]
      text-white
      lg:w-[1100px]
      lg:text-[18px]
      lg:leading-[26px]
    "
  >
    The people who do best with us are team players who put in real effort
    and take coaching in stride. They come back each week better, hungry,
    and ready to learn. Most of all, they give a damn about people, about
    themselves, and about the care of natural hair. If you are after a
    quick gig or a side hustle, this probably is not the place. But if you
    want consistency, support, and somewhere your creativity can actually
    grow, keep reading.
  </p>

</div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:mt-[60px] lg:flex lg:justify-center">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}