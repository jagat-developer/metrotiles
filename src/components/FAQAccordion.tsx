"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/data";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid overflow-hidden rounded-[6px] border border-stone-200 bg-white">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <article
            key={faq.question}
            className="border-b border-stone-200 last:border-b-0"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="grid w-full grid-cols-[1fr_auto] items-center gap-4 bg-[#faf9f6] px-5 py-5 text-left transition hover:bg-white"
              >
                <span className="text-base font-semibold leading-6 text-stone-950">
                  {faq.question}
                </span>
                <span
                  className="grid size-8 place-items-center rounded-[4px] border border-stone-300 text-lg leading-none text-teal-900"
                  aria-hidden="true"
                >
                  {isOpen ? "-" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="bg-white px-5 pb-5"
            >
              <p className="max-w-3xl text-sm leading-7 text-stone-600">
                {faq.answer}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
