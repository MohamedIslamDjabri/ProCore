import React from "react";
import { TECHNICAL_DEEP_DIVE_STAGES } from "@/constants/data";

export function TechnicalDeepDive() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              FIELD ENGINEERING STANDARDS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Technical Deep Dive: The Anatomy of a High-Performance Flat Roof
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-md text-[15px] leading-relaxed">
            Zero-failure flat roofs depend on assembly execution at four crucial stages. Explore our strict construction tolerances below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TECHNICAL_DEEP_DIVE_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="bg-surface-container-lowest p-6 lg:p-8 shadow-xs border border-outline-variant/30 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-surface-container text-primary flex items-center justify-center font-bold text-sm">
                    {stage.step}
                  </div>
                  <span className="font-label-sm px-2.5 py-1 bg-surface-container-low text-secondary uppercase text-[11px] font-semibold">
                    {stage.category}
                  </span>
                </div>
                <h3 className="font-headline-sm text-primary font-bold text-lg">
                  {stage.title}
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[14px]">
                  {stage.description}
                </p>
              </div>

              <div className="p-3.5 bg-surface-container-low space-y-1 border-l-2 border-primary">
                <span className="font-label-sm text-secondary uppercase block text-[10px] tracking-wider font-semibold">
                  {stage.protocolTitle}
                </span>
                <span className="font-title-md text-primary block text-xs font-bold">
                  {stage.protocolDesc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
