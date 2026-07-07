import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#100C1B]">
      <Container>

        <div
          className="
            flex
            h-auto
            flex-col
            items-start
            justify-between
            gap-10
            py-12
            lg:h-[358.88px]
            lg:flex-row
            lg:gap-0
            lg:px-20
            lg:py-20
          "
        >
          {/* Left */}
          <div>
            <h2 className="section-title">
              n natural hair
              <br />
              studio. the future of
              <br />
              clinical texture.
            </h2>

            <p className="mt-2 section-title">
              © 2026
            </p>
          </div>

          {/* Right */}
          <nav
            className="
              flex
              flex-col
              items-start
              gap-4
              text-left
              card-body
              text-[var(--text-secondary)]
              lg:items-end
              lg:pt-2
              lg:text-right
            "
          >
            <a href="#">PRIVACY PROTOCOL</a>
            <a href="#">TERMS OF SERVICE</a>
            <a href="#">LABORATORY LOCATIONS</a>
            <a href="#">CONTACT SYSTEM</a>
          </nav>

        </div>

      </Container>
    </footer>
  );
}