import React from "react";
import { SAFETY_PROTOCOLS } from "@/constants/data";
import { Scale, Wrench, CheckCircle2, ShieldAlert, BarChart3 } from "lucide-react";

export function SafetySection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Wrench className="w-5 h-5 text-tertiary-fixed shrink-0" />;
      case 1:
        return <CheckCircle2 className="w-5 h-5 text-tertiary-fixed shrink-0" />;
      case 2:
        return <ShieldAlert className="w-5 h-5 text-tertiary-fixed shrink-0" />;
      case 3:
        return <BarChart3 className="w-5 h-5 text-tertiary-fixed shrink-0" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-tertiary-fixed shrink-0" />;
    }
  };

  return (
    <section className="w-full bg-primary text-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 text-tertiary-fixed font-code-spec text-xs uppercase tracking-widest">
              <Scale className="w-4 h-4 text-tertiary-fixed" />
              <span>Zero Tolerance Standard</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-surface">
              Safety Is Part of the Scope.
            </h2>
            <p className="font-body-md text-inverse-primary leading-relaxed text-[15px]">
              Roofing safety isn’t a secondary checklist—it is an engineered constraint integrated directly into daily project submittals, hazard assessments, and hoist mobilization.
            </p>
          </div>

          {/* Right Column: 4 Credential Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {SAFETY_PROTOCOLS.map((protocol, idx) => (
              <div
                key={idx}
                className="bg-primary-container p-5 border border-primary-container/80 shadow-xs"
              >
                <div className="flex items-center gap-2 text-tertiary-fixed mb-2">
                  {getIcon(idx)}
                  <h4 className="font-title-md text-surface font-bold text-sm">
                    {protocol.title}
                  </h4>
                </div>
                <p className="font-body-sm text-inverse-primary leading-relaxed text-[13px]">
                  {protocol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
