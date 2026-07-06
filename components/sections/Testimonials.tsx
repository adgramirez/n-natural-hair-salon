import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/constants/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>

<div className="mx-auto w-[1248px]">

  <h2
    className="
      font-nonchalance
      text-[40px]
      font-bold
      leading-[48px]
      tracking-[-0.4px]
      text-white
    "
  >
    who thrives here
  </h2>

  <div className="mt-6 h-2 w-16 rounded-full bg-[var(--primary)]" />

  <p
    className="
      mt-6
      w-[1100px]
      text-[18px]
      leading-[26px]
      text-white
    "
  >
    The people who do best with us are team players who put in real effort
    and take coaching in stride. They come back each week better, hungry,
    and ready to learn. Most of all, they give a damn about people, about
    themselves, and about the care of natural hair.
    <br />
    If you are after a quick gig or a side hustle, this probably is not the
    place. But if you want consistency, support, and somewhere your
    creativity can actually grow, keep reading.
  </p>

</div>

        {/* Cards */}
        <div className="mt-[60px] flex justify-center gap-8">
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