"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span className="text-[16px] leading-[24px] text-white lg:text-[18px] lg:leading-[32px]">
          {question}
        </span>

        {open ? (
          <ChevronUp size={18} className="shrink-0 text-white" />
        ) : (
          <ChevronDown size={18} className="shrink-0 text-white" />
        )}
      </button>

      {open && (
        <div className="px-4 pb-4">
          <p className="text-[16px] leading-[24px] text-[rgba(247,250,227,.3)] lg:text-[18px] lg:leading-[32px]">
            {answer}
          </p>
        </div>
      )}
    </article>
  );
}