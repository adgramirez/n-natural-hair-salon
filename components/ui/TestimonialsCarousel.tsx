"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/constants/testimonials";

// A clone of the last card is prepended and a clone of the first is
// appended. Stepping past either end lands on a visual duplicate of the
// opposite end, then — once the scroll settles — we silently re-anchor to
// the real card underneath. That's what makes the last card feel connected
// to the first instead of the carousel just stopping or jump-cutting. The
// clones also double as scroll buffer, giving the first and last real cards
// enough room on either side to be centered like every other card.
const EXTENDED = [
  TESTIMONIALS[TESTIMONIALS.length - 1],
  ...TESTIMONIALS,
  TESTIMONIALS[0],
];

const isClone = (renderedIndex: number) =>
  renderedIndex === 0 || renderedIndex === EXTENDED.length - 1;

const toRealIndex = (renderedIndex: number) => {
  if (renderedIndex === 0) return TESTIMONIALS.length - 1;
  if (renderedIndex === EXTENDED.length - 1) return 0;
  return renderedIndex - 1;
};

const toRenderedIndex = (realIndex: number) => realIndex + 1;

// A leading spacer sits before the first rendered card so every DOM child
// lookup needs to account for that one-element shift.
const CHILD_OFFSET = 1;

export default function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [spacerWidth, setSpacerWidth] = useState(0);

  // The scrollLeft that puts a card's own center at the viewport's center —
  // the single main card sits centered on the section's horizontal axis,
  // with its neighbors peeking symmetrically on either side.
  const centerOffsetFor = (card: HTMLElement, track: HTMLDivElement) =>
    card.offsetLeft -
    track.offsetLeft +
    card.clientWidth / 2 -
    track.clientWidth / 2;

  const scrollToRendered = (renderedIndex: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    const card = track?.children[renderedIndex + CHILD_OFFSET] as
      | HTMLElement
      | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: centerOffsetFor(card, track), behavior });
  };

  const scrollToIndex = (realIndex: number) =>
    scrollToRendered(toRenderedIndex(realIndex), "smooth");

  // Distance between two adjacent cards (width + gap) — the amount one
  // arrow click steps the track by.
  const getStepSize = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const cards = Array.from(track.children) as HTMLElement[];
    const first = cards[CHILD_OFFSET];
    const second = cards[CHILD_OFFSET + 1];
    return second ? second.offsetLeft - first.offsetLeft : track.clientWidth;
  };

  const goPrev = () =>
    trackRef.current?.scrollBy({ left: -getStepSize(), behavior: "smooth" });
  const goNext = () =>
    trackRef.current?.scrollBy({ left: getStepSize(), behavior: "smooth" });

  // The outermost clones need room on their outside edge to reach true
  // center themselves — otherwise the scroll clamps short of centering
  // them, and depending on viewport width that clamped position can land
  // closer to the second-to-last real card than to the clone. When that
  // happens the loop never gets detected: nearestRenderedIndex reports the
  // wrong card, the re-anchor never fires, and "next" silently does
  // nothing at the end. This spacer guarantees both clones are always
  // exactly as centerable as every other card.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const recompute = () => {
      const card = track.children[CHILD_OFFSET] as HTMLElement | undefined;
      if (!card) return;
      setSpacerWidth(Math.max(track.clientWidth / 2 - card.offsetWidth / 2, 0));
    };

    recompute();
    const observer = new ResizeObserver(recompute);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  // Start on the first real card — the prepended clone stays offscreen
  // until the user actually steps back past it.
  useLayoutEffect(() => {
    scrollToRendered(toRenderedIndex(0), "instant");
    // scrollToRendered only reads trackRef.current at call time, so it's
    // safe to omit — including it would just re-run this mount-only effect
    // on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The card whose center is closest to the viewport's center is the
  // "active" one — the only card meant to be at full size, so there's
  // never more than one candidate at a time.
  const nearestRenderedIndex = (track: HTMLDivElement) => {
    const cards = Array.from(track.children).slice(
      CHILD_OFFSET,
      CHILD_OFFSET + EXTENDED.length
    ) as HTMLElement[];
    let closest = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        track.scrollLeft - centerOffsetFor(card, track)
      );
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    return closest;
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let settleTimer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      const rendered = nearestRenderedIndex(track);
      setActiveIndex(toRealIndex(rendered));

      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        const settled = nearestRenderedIndex(track);
        if (isClone(settled)) {
          scrollToRendered(toRenderedIndex(toRealIndex(settled)), "instant");
        }
      }, 120);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", handleScroll);
      clearTimeout(settleTimer);
    };
    // nearestRenderedIndex/scrollToRendered only read trackRef.current at
    // call time, so they're safe to omit here too.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const arrowButtonClass = clsx(
    "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)] text-white",
    "transition-[transform,background-color,color,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
    "hover:scale-[1.15] hover:bg-[var(--primary)] hover:text-[#1A1626] hover:shadow-[0_10px_24px_rgba(225,255,0,0.35)]",
    "active:scale-100",
    "motion-reduce:transition-colors motion-reduce:hover:scale-100"
  );

  return (
    <div className="mt-10 lg:mt-[60px]">
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="carousel-track no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-6"
      >
        <div aria-hidden style={{ width: spacerWidth }} className="shrink-0" />

        {EXTENDED.map((testimonial, renderedIndex) => {
          const isActive = toRealIndex(renderedIndex) === activeIndex;

          return (
            <div
              key={renderedIndex}
              aria-hidden={isClone(renderedIndex) || undefined}
              role={isClone(renderedIndex) ? undefined : "group"}
              aria-roledescription={isClone(renderedIndex) ? undefined : "slide"}
              aria-label={
                isClone(renderedIndex)
                  ? undefined
                  : `Testimonial ${toRealIndex(renderedIndex) + 1} of ${TESTIMONIALS.length}`
              }
              className={clsx(
                "w-[78vw] max-w-[360px] shrink-0 snap-center sm:w-[440px] lg:w-[560px]",
                "origin-center transition-all duration-500 ease-out motion-reduce:duration-0",
                isActive
                  ? "z-10 scale-100 opacity-100"
                  : "scale-[0.85] opacity-40"
              )}
            >
              <TestimonialCard {...testimonial} />
            </div>
          );
        })}

        <div aria-hidden style={{ width: spacerWidth }} className="shrink-0" />
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className={arrowButtonClass}
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={activeIndex === index}
              className={clsx(
                "h-2 rounded-full transition-all duration-300",
                activeIndex === index
                  ? "w-6 bg-[var(--primary)]"
                  : "w-2 bg-white/25"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          className={arrowButtonClass}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
