import Container from "@/components/ui/Container";
import ApplicationStep from "@/components/ui/ApplicationStep";
import FAQItem from "@/components/ui/FAQItem";

import {
  APPLICATION_STEPS,
  FAQS,
} from "@/constants/faqs";

export default function FAQ() {
  return (
    <section className="bg-[#100C1B] py-24">
      <Container>

        <div className="grid grid-cols-[420px_560px] justify-between">

          {/* Left */}
          <div>

            <h2 className="font-nonchalance text-[40px] font-bold leading-[48px] tracking-[-0.4px] text-white">
              how to apply
            </h2>

            <div className="mt-2 h-2 w-16 rounded-full bg-[var(--primary)]" />

            <div className="mt-8">
              {APPLICATION_STEPS.map((step, index) => (
                <ApplicationStep
                  key={step.number}
                  {...step}
                  last={index === APPLICATION_STEPS.length - 1}
                />
              ))}
            </div>

          </div>

          {/* Right */}
          <div>

            <h2 className="font-nonchalance text-[40px] font-bold leading-[48px] tracking-[-0.4px] text-white">
              frequently asked
              <br />
              questions
            </h2>

            <div className="mt-8 space-y-4">

              {FAQS.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={index === 0}
                />
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}