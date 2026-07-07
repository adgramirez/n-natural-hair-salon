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
          -top-[150px]
          right-[-50px]
          z-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[rgba(205,193,229,0.4)]
          blur-[120px]
          lg:-top-[289px]
          lg:h-[578px]
          lg:w-[578px]
          lg:blur-[200px]
        "
      />

      {/* Bottom Left Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-[150px]
          left-[-50px]
          z-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[rgba(205,193,229,0.3)]
          blur-[120px]
          lg:-bottom-[289px]
          lg:h-[578px]
          lg:w-[578px]
          lg:blur-[200px]
        "
      />

      {/* Hero */}
      <Container
        className="
          relative
          flex
          flex-col
          lg:flex-row
          items-center
          lg:items-end
          justify-between
          gap-10
          pt-16
          pb-16
          portrait:pb-0
          lg:min-h-[calc(100vh-72px)]
          lg:gap-8
          lg:py-0
        "
      >

        {/* Hero Image */}
        <div
          className="
            pointer-events-none
            relative
            z-10
            order-1
            w-full
            max-w-[260px]
            select-none
            sm:max-w-[320px]
            portrait:order-2
            lg:order-2
            lg:w-auto
            lg:max-w-none
            lg:shrink-0
          "
        >
          <Image
            src="/images/hero.png"
            alt="Natural hair stylist"
            width={620}
            height={670}
            priority
            className="h-auto w-full min-[1920px]:hidden lg:h-[calc(100vh-104px)] lg:max-h-[670px] lg:w-auto lg:max-w-[620px]"
          />
          <Image
            src="/images/hero-v2.png"
            alt="Natural hair stylist"
            width={620}
            height={1004}
            className="hidden h-auto w-full min-[1920px]:block min-[1920px]:h-[calc(100vh-104px)] min-[1920px]:max-h-[1004px] min-[1920px]:w-auto min-[1920px]:max-w-[620px]"
          />
        </div>

        {/* Content */}
        <div className="@container relative z-20 order-2 w-full text-center portrait:order-1 lg:order-1 lg:min-w-0 lg:max-w-[660px] lg:flex-auto lg:self-center lg:text-left">

          <h1 className="hero-heading text-white">
            Natural hair
            <br />
            stylist jobs where
            <br />
            your <span className="hero-highlight">career</span> is
            <br />
            actually <span className="hero-highlight">built</span>
          </h1>

          <p className="body-large mt-[31px]">
            You came into this work because you love natural hair. But loving
            the craft isn't enough if the environment drains you. You need a
            salon that respects your time, pays you what you're worth, and
            gives you the tools to grow without burning out.
          </p>

          <div className="mt-12">
            <Button href="#" size="lg">
              View Open Roles
            </Button>
          </div>

          <p className="caption-text mt-6 text-[var(--text-muted)]">
            HIRING NOW IN SILVER SPRING, MD AND BROOKLYN, NY
          </p>

        </div>

      </Container>
    </section>
  );
}
