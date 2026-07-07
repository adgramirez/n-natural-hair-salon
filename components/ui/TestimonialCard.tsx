interface TestimonialCardProps {
  quote: string;
  author: string;
}

export default function TestimonialCard({
  quote,
  author,
}: TestimonialCardProps) {
  return (
    <article
      className="
        w-full
        min-h-[240px]
        rounded-[40px]
        border
        border-[var(--primary)]
        p-6
        shadow-[0_20px_40px_rgba(224,75,0,0.05)]
        lg:min-h-[361px]
        lg:w-[400px]
        lg:p-10
      "
    >
      <p
        className="
          text-[16px]
          leading-[24px]
          text-white
          lg:text-[18px]
          lg:leading-[26px]
        "
      >
        {quote}
      </p>

      <p
        className="
          mt-0
          text-right
          text-[16px]
          leading-[24px]
          text-white
          lg:text-[18px]
          lg:leading-[26px]
        "
      >
        {author}
      </p>
    </article>
  );
}