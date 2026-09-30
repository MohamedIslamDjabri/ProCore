"use client";

import React, { useState } from "react";
import { FAQS } from "@/constants/data";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQAccordion() {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggle = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-24 border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 text-secondary font-label-md uppercase tracking-wider text-xs">
            <HelpCircle className="w-4 h-4 text-secondary" />
            <span>COMMERCIAL FACILITY DECISION SUPPORT</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Essential engineering, warranty covenants, and logistical information for enterprise facility directors.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);

            return (
              <div
                key={idx}
                className="bg-surface-container-lowest border border-outline-variant/40 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-title-md text-primary font-bold text-base hover:bg-surface-container-low/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-secondary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-on-surface-variant font-body-md text-sm leading-relaxed border-t border-outline-variant/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
