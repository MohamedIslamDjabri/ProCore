import React from "react";
import { CAPITAL_STRATEGY_MATRIX } from "@/constants/data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionPrimitives";

export function CapitalStrategyComparison() {
  return (
    <section className="w-full bg-surface-container-high py-16 lg:py-24 border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <FadeIn className="space-y-2 text-center max-w-3xl mx-auto">
          <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
            CAPITAL EXPENDITURE STRATEGY
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Roof Replacement vs. Restoration vs. Coatings vs. Maintenance
          </h2>
          <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
            Facility managers must balance capital reserves with structural risk. Use this factual criteria matrix to determine which commercial intervention matches your roof&apos;s current asset lifecycle.
          </p>
        </FadeIn>

        {/* Decision Grid */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CAPITAL_STRATEGY_MATRIX.map((opt, idx) => (
            <StaggerItem
              key={idx}
              className="bg-surface-container-lowest p-6 shadow-xs border border-outline-variant/30 hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="p-2 bg-surface-container group-hover:bg-primary group-hover:text-on-primary transition-colors font-label-sm text-primary uppercase font-bold text-center text-xs">
                  {opt.category}
                </div>
                <h4 className="font-title-lg text-primary font-bold text-base leading-snug">
                  {opt.title}
                </h4>
                <div className="space-y-3 text-on-surface-variant font-body-sm text-[13px] leading-relaxed">
                  <p>
                    <strong className="text-primary block font-semibold mb-0.5">
                      Best Suited For:
                    </strong>
                    {opt.bestSuitedFor}
                  </p>
                  <p>
                    <strong className="text-primary block font-semibold mb-0.5">
                      Typical Scope:
                    </strong>
                    {opt.typicalScope}
                  </p>
                  <p>
                    <strong className="text-primary block font-semibold mb-0.5">
                      Facility Disruption:
                    </strong>
                    {opt.facilityDisruption}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-surface-container space-y-1 border-t-2 border-primary group-hover:border-on-tertiary-container transition-colors">
                <span className="font-label-sm text-secondary uppercase block text-[10px] tracking-wider font-semibold">
                  CapEx Impact:
                </span>
                <span className="font-title-md text-primary font-bold block text-xs">
                  {opt.capexImpact}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
