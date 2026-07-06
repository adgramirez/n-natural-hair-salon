import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">

      {/* Top Right Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-[289px]
          right-[-50px]
          h-[578px]
          w-[578px]
          rounded-full
          bg-[rgba(205,193,229,0.4)]
          blur-[200px]
          z-0
        "
      />

      {/* Bottom Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[289px]
          left-[-50px]
          h-[578px]
          w-[578px]
          rounded-full
          bg-[rgba(205,193,229,0.3)]
          blur-[200px]
          z-0
        "
      />

      <Container className="relative h-[670px]">

        {/* Hero Image */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            right-0
            z-10
            select-none
          "
        >
          <Image
            src="/images/hero.png"
            alt="Natural hair stylist"
            width={620}
            height={669}
            priority
            style={{
              width: "620px",
              height: "auto",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex h-full items-center">
          <div className="w-[700px]">

            <h1 className="hero-heading text-white">
              Natural hair
              <br />
              stylist jobs where
              <br />
              your <span className="hero-highlight">career</span> is
              <br />
              actually <span className="hero-highlight">built</span>
            </h1>

            <p className="body-large mt-[31px] text-[var(--text-secondary)]">
              You came into this work because you love natural hair. But loving the
              <br />
              craft isn&apos;t enough if the environment drains you. You need a salon that
              <br />
              respects your time, pays you what you&apos;re worth, and gives you the tools
              <br />
              to grow without burning out.
            </p>

            <div className="mt-12">
              <Button href="#" size="lg">
                View Open Roles
              </Button>
            </div>

            <p className="caption-text mt-6 text-[rgba(209,196,233,.8)]">
              HIRING NOW IN SILVER SPRING, MD AND BROOKLYN, NY
            </p>

          </div>
        </div>

      </Container>
    </section>
  );
}
