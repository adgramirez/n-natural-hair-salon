import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#100C1B]">
      <Container>

        <div
          className="
            flex
            h-[358.88px]
            items-start
            justify-between
            px-20
            py-20
          "
        >
          {/* Left */}
          <div>
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
                text-[40px]
                font-bold
                leading-[48px]
                tracking-[-0.4px]
                text-white
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
              items-end
              gap-4
              pt-2
              text-right
              text-[18px]
              leading-[26px]
              text-[#C6C9AB]
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