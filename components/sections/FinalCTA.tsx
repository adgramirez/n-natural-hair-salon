import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-[rgba(225,255,0,.2)]
        bg-[#1A1626]
        py-16
        pb-16
        lg:py-[126.89px]
        lg:pb-32
      "
    >
      {/* Radial Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-10
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(225,255,0,1) 0%, rgba(225,255,0,0) 50%)",
        }}
      />

      <Container>
        <div className="relative mx-auto flex max-w-[768px] flex-col items-center text-center">

          {/* Heading */}
          <h2 className="final-cta-heading">
            build your career
            <br />
            where your craft
            <br />
            comes first
          </h2>

          {/* Paragraph */}
          <p className="mt-8 w-full max-w-[620px] final-cta-body">
            You do not have to choose between doing great work and being
            supported while you do it. Here, you get both: the freedom to focus
            on your craft and a team that has your back on everything else.
          </p>

          {/* CTA */}
          <Button
            href="#jobs"
            size="cta"
            variant="primary"
            className="mt-8"
          >
            VIEW OPEN ROLES AND APPLY
          </Button>

        </div>
      </Container>
    </section>
  );
}