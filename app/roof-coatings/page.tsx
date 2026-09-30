import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CASE_STUDIES } from "@/constants/data";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ConsultationQuoteForm } from "@/components/sections/ConsultationQuoteForm";
import {
  Paintbrush,
  Sun,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Roof Coatings & Liquid Restoration | ProCore",
  description:
    "100% silicone and elastomeric commercial roof coatings. Extend roof service life by 10-20 years, qualify for 100% Year-1 tax deductions, and seal roofs without tear-off.",
};

export default function RoofCoatingsPage() {
  const bioCase = CASE_STUDIES[2];

  const coatingProcesses = [
    {
      step: "01",
      title: "Forensic Moisture Diagnostic",
      desc: "High-resolution infrared thermography mapping identifies isolated wet insulation areas for extraction prior to coating.",
    },
    {
      step: "02",
      title: "High-Pressure Substrate Prep",
      desc: "5,000 PSI chemical degreasing wash removes chalking, soot, grease, and biological growth to achieve optimal chemical adhesion.",
    },
    {
      step: "03",
      title: "Flashing & Seam Reinforcement",
      desc: "High-tensile polyester stitch-bonded fabric embedded in liquid mastic across 100% of seams, penetrations, and curbs.",
    },
    {
      step: "04",
      title: "Base & Finish Fluid Application",
      desc: "Heavy-build dual pass application of 100% high-solids silicone achieving a minimum 30-mil dry film thickness (DFT).",
    },
    {
      step: "05",
      title: "Mil-Thickness Electronic Verification",
      desc: "Wet film and dry film gauge calibration checks across grid points with 100% factory inspection pass guarantee.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Breadcrumbs */}
      <div className="w-full bg-surface-container-high py-2 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-code-spec text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-bold uppercase tracking-wider">DIVISION 07</span>
            <span>/</span>
            <span className="text-secondary font-medium">07 01 50 ROOF RESTORATION & FLUID MEMBRANES</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase text-[10px] font-bold">
              CRRC RATED &gt; 88% INITIAL
            </span>
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase text-[10px] font-bold">
              SECTION 179 ELIGIBLE
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-lowest py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 font-label-sm text-secondary uppercase tracking-widest text-xs font-semibold">
              <Paintbrush className="w-3.5 h-3.5 text-secondary" />
              <span>FLUID-APPLIED MONOLITHIC RESTORATION SYSTEMS</span>
            </div>

            <h1 className="font-headline-lg text-headline-lg lg:text-5xl text-primary tracking-tight font-bold leading-tight">
              Seamless Commercial Roof Coatings That Outlast the Elements.
            </h1>

            <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed text-base sm:text-lg">
              Renew sound commercial roofs at 40% to 60% less cost than a full tear-off. Our 100% silicone and urethane liquid coatings form an impenetrable, UV-resistant shield with up to 20-year renewable warranties.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="bg-primary text-on-primary hover:bg-secondary font-title-md uppercase tracking-wider px-6 py-3.5 transition-colors inline-flex items-center gap-2 shadow-sm font-bold text-xs"
              >
                <span>Request a Coating Feasibility Audit</span>
                <ArrowRight className="w-4 h-4 text-tertiary-fixed" />
              </a>
              <a
                href="#process"
                className="bg-surface-container text-primary hover:bg-surface-container-high font-title-md uppercase tracking-wider px-6 py-3.5 transition-colors inline-flex items-center gap-2 text-xs font-bold border border-outline-variant/40"
              >
                <span>Application Process</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-outline-variant/30">
              <div className="bg-surface-container-low p-3.5 border-l-2 border-primary">
                <span className="font-label-sm text-secondary block uppercase text-[10px] font-semibold">
                  Cost Savings
                </span>
                <span className="font-headline-sm text-primary font-bold text-lg sm:text-xl">
                  40%–60%
                </span>
              </div>
              <div className="bg-surface-container-low p-3.5 border-l-2 border-primary">
                <span className="font-label-sm text-secondary block uppercase text-[10px] font-semibold">
                  Tax Advantage
                </span>
                <span className="font-headline-sm text-primary font-bold text-lg sm:text-xl">
                  100% OpEx
                </span>
              </div>
              <div className="bg-surface-container-low p-3.5 border-l-2 border-primary">
                <span className="font-label-sm text-secondary block uppercase text-[10px] font-semibold">
                  Solar Reflectance
                </span>
                <span className="font-headline-sm text-primary font-bold text-lg sm:text-xl">
                  SRI 108
                </span>
              </div>
            </div>
          </div>

          {/* Right: Key Chemistry Comparison Box */}
          <div className="lg:col-span-5 bg-surface-container p-6 shadow-sm border border-outline-variant/40 space-y-4">
            <span className="font-label-sm uppercase tracking-wider text-secondary font-bold block pb-2 border-b border-outline-variant/30 text-xs">
              ELASTOMERIC CHEMISTRY PROFILES
            </span>

            <div className="space-y-3">
              <div className="bg-surface-container-lowest p-4 border border-outline-variant/30">
                <div className="flex items-center justify-between font-title-md text-primary font-bold text-sm">
                  <span>100% High-Solids Silicone</span>
                  <span className="font-label-sm text-on-tertiary-container bg-surface-container px-2 py-0.5 text-[10px]">
                    TOP SPEC
                  </span>
                </div>
                <p className="font-body-sm text-on-surface-variant text-xs mt-1.5 leading-relaxed">
                  Permanently immune to standing ponding water. Will not chalk, embrittle, or crack under extreme UV exposure.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-4 border border-outline-variant/30">
                <div className="flex items-center justify-between font-title-md text-primary font-bold text-sm">
                  <span>Aliphatic Polyurethane</span>
                  <span className="font-label-sm text-secondary bg-surface-container px-2 py-0.5 text-[10px]">
                    HIGH TRAFFIC
                  </span>
                </div>
                <p className="font-body-sm text-on-surface-variant text-xs mt-1.5 leading-relaxed">
                  Superior tensile and tear strength for roofs with heavy HVAC technician foot traffic and physical impact hazards.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-4 border border-outline-variant/30">
                <div className="flex items-center justify-between font-title-md text-primary font-bold text-sm">
                  <span>Engineered Acrylic Elastomer</span>
                  <span className="font-label-sm text-secondary bg-surface-container px-2 py-0.5 text-[10px]">
                    SLOPED ROOFS
                  </span>
                </div>
                <p className="font-body-sm text-on-surface-variant text-xs mt-1.5 leading-relaxed">
                  Cost-effective high-albedo cool roof formulation ideal for positive drainage metal building envelope systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Stage Reusable Process Timeline */}
      <section className="w-full bg-surface-container-low py-16 lg:py-20 border-b border-outline-variant/30" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              FIELD APPLICATION STANDARD
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              The 5-Phase Liquid Restoration Process
            </h2>
            <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
              Applying liquid coatings requires surgical surface preparation. If the substrate isn&apos;t chemically pure, the bond fails. Here is our zero-compromise method.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {coatingProcesses.map((proc) => (
              <div
                key={proc.step}
                className="bg-surface-container-lowest p-5 border border-outline-variant/30 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 bg-surface-container text-primary flex items-center justify-center font-bold text-xs mb-2">
                    {proc.step}
                  </div>
                  <h3 className="font-title-md text-primary font-bold text-sm leading-snug">
                    {proc.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant text-xs mt-2 leading-relaxed">
                    {proc.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-on-tertiary-container font-label-sm text-[10px] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>QC VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study: Biomedical Cleanroom Campus */}
      <section className="w-full bg-surface py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              CLEANROOM & HEALTHCARE COATING CASE STUDY
            </span>
            <span className="font-code-spec text-on-surface-variant text-xs">
              PROJECT ID: {bioCase.id}
            </span>
          </div>

          <CaseStudyCard caseStudy={bioCase} />
        </div>
      </section>

      {/* Quote Form */}
      <ConsultationQuoteForm
        id="consultation"
        defaultService="Roof Coatings"
        title="Schedule a Commercial Roof Coating Feasibility Audit"
        subtitle="Our technical field engineers conduct infrared moisture mapping and substrate adhesion pull tests to verify if your roof qualifies for a restorative coating warranty."
      />
    </div>
  );
}
