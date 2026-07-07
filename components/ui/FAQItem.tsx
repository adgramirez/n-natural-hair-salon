"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <article
      className="
        rounded-[8px]
        border
        border-[rgba(209,196,233,.1)]
        bg-[#211D2E]
      "
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span className="card-body text-white">
          {question}
        </span>

        <ChevronDown
          size={18}
          className={clsx(
            "shrink-0 text-white transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div className="accordion-panel" data-open={open}>
        <div aria-hidden={!open}>
          <div className="px-4 pb-4">
            <p className="card-body text-[rgba(247,250,227,.3)]">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}