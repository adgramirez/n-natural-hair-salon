import Container from "@/components/ui/Container";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";

export default function Testimonials() {
  return (
    <section className="bg-[var(--bg)] py-16 lg:py-24">
      <Container>

        <div className="w-full lg:mx-auto lg:w-[1248px]">

          <h2 className="section-title">
            who thrives here
          </h2>

          <div className="mt-6 h-2 w-16 rounded-full bg-[var(--primary)]" />

          <p className="mt-6 w-full card-body text-white lg:w-[1100px]">
            The people who do best with us are team players who put in real effort
            and take coaching in stride. They come back each week better, hungry,
            and ready to learn. Most of all, they give a damn about people, about
            themselves, and about the care of natural hair. 
            <br />
            If you are after a quick gig or a side hustle, this probably is not 
            the place. But if you want consistency, support, and somewhere your 
            creativity can actually grow, keep reading.
          </p>

        </div>

        <TestimonialsCarousel />

      </Container>
    </section>
  );
}