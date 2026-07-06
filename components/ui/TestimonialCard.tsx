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
        h-[361px]
        w-[400px]
        rounded-[40px]
        border
        border-[var(--primary)]
        p-10
        shadow-[0_20px_40px_rgba(224,75,0,0.05)]
      "
    >
      <p
        className="
          text-[18px]
          leading-[26px]
          text-white
        "
      >
        {quote}
      </p>

      <p
        className="
          mt-0
          text-right
          text-[18px]
          leading-[26px]
          text-white
        "
      >
        {author}
      </p>
    </article>
  );
}