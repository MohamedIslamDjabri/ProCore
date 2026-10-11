import React from "react";
import { TRUST_METRICS } from "@/constants/data";
import {
  StaggerContainer,
  StaggerItem,
  AnimatedMetricValue,
} from "@/components/ui/MotionPrimitives";

export function TrustMetrics() {
  return (
    <section className="w-full bg-surface-container-lowest text-on-surface shadow-xs border-b border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/30"
        >
          {TRUST_METRICS.map((metric, idx) => (
            <StaggerItem
              key={idx}
              hoverLift={false}
              className={`py-8 group ${
                idx === 0
                  ? "pr-6 lg:pr-8"
                  : idx === TRUST_METRICS.length - 1
                  ? "pl-0 sm:pl-6 lg:pl-8"
                  : "px-0 sm:px-6 lg:px-8"
              }`}
            >
              <div className="flex items-baseline gap-2">
                <AnimatedMetricValue
                  value={metric.value}
                  className="font-display text-4xl lg:text-5xl font-bold text-primary tracking-tight group-hover:text-on-tertiary-container transition-colors"
                />
                {metric.unit && (
                  <span className="font-label-sm uppercase tracking-widest text-secondary font-semibold text-[11px]">
                    {metric.unit}
                  </span>
                )}
              </div>
              <div className="h-0.5 w-10 bg-on-tertiary-container/40 group-hover:w-20 group-hover:bg-on-tertiary-container transition-all duration-300 mt-2.5 mb-2" />
              <h3 className="font-title-md text-primary font-bold text-base">
                {metric.label}
              </h3>
              <p className="font-body-sm text-on-surface-variant mt-1.5 leading-relaxed text-[13px]">
                {metric.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
