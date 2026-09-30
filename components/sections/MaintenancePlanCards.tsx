import React from "react";
import Link from "next/link";
import { MAINTENANCE_PLANS } from "@/constants/data";
import { Check, ShieldAlert, ArrowRight, Star } from "lucide-react";

export function MaintenancePlanCards() {
  return (
    <section className="w-full bg-surface py-16 lg:py-24" id="plans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-2">
          <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
            STRUCTURED ASSET INTEGRITY AGREEMENTS
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Commercial Preventative Maintenance Programs (PMP)
          </h2>
          <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
            Protect your building envelope capital investment, satisfy mandatory manufacturer NDL warranty inspection covenants, and eliminate unexpected leak emergency downtime.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MAINTENANCE_PLANS.map((plan) => {
            const isPop = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between border shadow-xs transition-shadow relative ${
                  isPop
                    ? "border-primary ring-2 ring-primary/20 shadow-md"
                    : "border-outline-variant/40"
                }`}
              >
                {isPop && (
                  <div className="absolute -top-3.5 left-6 bg-primary text-on-primary font-label-sm uppercase px-3 py-1 text-[10px] font-bold tracking-widest flex items-center gap-1.5">
                    <Star className="w-3 h-3 text-tertiary-fixed fill-tertiary-fixed" />
                    <span>RECOMMENDED BY ASSET DIRECTORS</span>
                  </div>
                )}

                <div>
                  <div className="space-y-1 pb-4 border-b border-outline-variant/30">
                    <span className="font-label-sm text-secondary uppercase font-semibold text-xs tracking-wider">
                      {plan.tagline}
                    </span>
                    <h3 className="font-headline-sm text-primary font-bold text-2xl">
                      {plan.name}
                    </h3>
                    <p className="font-body-sm text-on-surface-variant text-xs mt-1">
                      {plan.recommendedFor}
                    </p>
                  </div>

                  {/* Inspection frequency badge */}
                  <div className="my-5 p-3 bg-surface-container-low border-l-2 border-primary">
                    <span className="font-label-sm uppercase text-secondary block text-[10px] font-semibold">
                      INSPECTION CADENCE
                    </span>
                    <span className="font-title-md text-primary font-bold text-xs">
                      {plan.inspectionFrequency}
                    </span>
                  </div>

                  {/* Included Inspections list */}
                  <div className="space-y-3 pt-2">
                    <span className="font-label-sm text-secondary uppercase tracking-wider text-[11px] font-bold block">
                      Program Inclusions:
                    </span>
                    <ul className="space-y-2.5 font-body-sm text-on-surface text-xs">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-on-tertiary-container shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-6 mt-6 border-t border-outline-variant/30">
                    <span className="font-label-sm text-secondary uppercase tracking-wider text-[11px] font-bold block">
                      Compliance Deliverables:
                    </span>
                    <ul className="space-y-1.5 font-body-sm text-on-surface-variant text-[11px]">
                      {plan.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/contact?plan=${plan.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 font-title-md uppercase tracking-wider text-xs font-bold transition-colors ${
                      isPop
                        ? "bg-primary text-on-primary hover:bg-secondary"
                        : "bg-surface-container hover:bg-surface-container-high text-primary border border-outline-variant/50"
                    }`}
                  >
                    <span>Enroll Facility In {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
