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
            <h2
              className="
                font-nonchalance
                text-[24px]
                font-bold
                leading-[28px]
                tracking-[-0.4px]
                text-white
                lg:text-[40px]
                lg:leading-[48px]
              "
            >
              n natural hair
              <br />
              studio. the future of
              <br />
              clinical texture.
            </h2>

            <p
              className="
                mt-2
                font-nonchalance
                text-[24px]
                font-bold
                leading-[28px]
                tracking-[-0.4px]
                text-white
                lg:text-[40px]
                lg:leading-[48px]
              "
            >
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
              text-[16px]
              leading-[22px]
              text-[#C6C9AB]
              lg:items-end
              lg:pt-2
              lg:text-right
              lg:text-[18px]
              lg:leading-[26px]
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