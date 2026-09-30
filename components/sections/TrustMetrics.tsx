import React from "react";
import { TRUST_METRICS } from "@/constants/data";

export function TrustMetrics() {
  return (
    <section className="w-full bg-surface-container-lowest text-on-surface shadow-xs border-b border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/30">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={`py-8 ${
                idx === 0
                  ? "pr-6 lg:pr-8"
                  : idx === TRUST_METRICS.length - 1
                  ? "pl-0 sm:pl-6 lg:pl-8"
                  : "px-0 sm:px-6 lg:px-8"
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="font-label-sm uppercase tracking-widest text-secondary font-semibold text-[11px]">
                    {metric.unit}
                  </span>
                )}
              </div>
              <h3 className="font-title-md text-primary mt-2 font-bold text-base">
                {metric.label}
              </h3>
              <p className="font-body-sm text-on-surface-variant mt-1.5 leading-relaxed text-[13px]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
