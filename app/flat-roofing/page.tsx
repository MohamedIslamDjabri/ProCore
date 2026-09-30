import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CASE_STUDIES } from "@/constants/data";
import { SystemsComparisonMatrix } from "@/components/sections/SystemsComparisonMatrix";
import { TechnicalDeepDive } from "@/components/sections/TechnicalDeepDive";
import { CapitalStrategyComparison } from "@/components/sections/CapitalStrategyComparison";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ConsultationQuoteForm } from "@/components/sections/ConsultationQuoteForm";
import {
  ArrowRight,
  Sliders,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Flat Roofing Systems | Single-Ply & Multi-Ply Assemblies",
  description:
    "Industrial-grade commercial flat roofing specifications: TPO, EPDM, PVC, and Modified Bitumen systems engineered for FM 1-120 wind uplift and 30-year NDL warranties.",
};

export default function FlatRoofingPage() {
  const caseStudy = CASE_STUDIES[0];

  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Breadcrumbs & Spec Bar */}
      <div className="w-full bg-surface-container-high py-2 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-code-spec text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-bold uppercase tracking-wider">SPEC DEPT</span>
            <span>/</span>
            <span className="text-secondary font-medium">SYSTEM DIVISION 07 50 00</span>
            <span>/</span>
            <span className="text-on-surface font-semibold">COMMERCIAL FLAT ROOFING ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase tracking-wider text-[10px] font-bold">
              ANSI/SPRI ES-1 CERTIFIED
            </span>
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase tracking-wider text-[10px] font-bold">
              ASTM D6878-19 VERIFIED
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-lowest py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtitle & Stat Tokens */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 font-label-sm text-secondary uppercase tracking-widest text-xs font-semibold">
              <span className="w-2 h-2 bg-on-tertiary-container inline-block"></span>
              <span>INDUSTRIAL-GRADE SINGLE-PLY & MULTI-PLY SPECIFICATIONS</span>
            </div>

            <h1 className="font-headline-lg text-headline-lg lg:text-5xl text-primary tracking-tight font-bold leading-tight">
              Flat Roofing Systems That Work as Hard as Your Building.
            </h1>

            <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed text-base sm:text-lg">
              Precision engineering, single-ply membranes, and multi-ply built-up solutions built to withstand heavy mechanical loads, weather extremes, and long-term thermal expansion.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#consultation"
                className="bg-primary text-on-primary hover:bg-secondary font-title-md uppercase tracking-wider px-6 py-3.5 transition-colors inline-flex items-center gap-2 shadow-sm font-bold text-xs"
              >
                <span>Request a Flat Roofing Consultation</span>
                <ArrowRight className="w-4 h-4 text-tertiary-fixed" />
              </a>
              <a
                href="#systems-matrix"
                className="bg-surface-container text-primary hover:bg-surface-container-high font-title-md uppercase tracking-wider px-6 py-3.5 transition-colors inline-flex items-center gap-2 text-xs font-bold border border-outline-variant/40"
              >
                <Sliders className="w-4 h-4" />
                <span>View Technical Matrix</span>
              </a>
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-outline-variant/30">
              <div className="bg-surface-container-low p-3.5 border-l-2 border-primary">
                <span className="font-label-sm text-secondary block uppercase text-[10px] font-semibold">
                  Thermal Reflectance
                </span>
                <span className="font-headline-sm text-primary font-bold text-lg sm:text-xl">
                  SRI 104+
                </span>
              </div>
              <div className="bg-surface-container-low p-3.5 border-l-2 border-primary">
                <span className="font-label-sm text-secondary block uppercase text-[10px] font-semibold">
                  Wind Uplift Rating
                </span>
                <span className="font-headline-sm text-primary font-bold text-lg sm:text-xl">
                  FM 1-120
                </span>
              </div>
              <div className="bg-surface-container-low p-3.5 border-l-2 border-primary">
                <span className="font-label-sm text-secondary block uppercase text-[10px] font-semibold">
                  Puncture Threshold
                </span>
                <span className="font-headline-sm text-primary font-bold text-lg sm:text-xl">
                  &gt;450 lbf
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Assembly Schematic CAD */}
          <div className="lg:col-span-5 bg-surface-container p-6 shadow-sm border border-outline-variant/40 space-y-4">
            <div className="flex items-center justify-between font-label-sm text-secondary uppercase tracking-widest pb-2 border-b border-outline-variant/30 text-[11px]">
              <span>SCHEMATIC REF: FR-ISO-80</span>
              <span className="text-primary font-bold">ASSEMBLY CAD ELEVATION</span>
            </div>

            {/* Technical Cross Section Visual Layers */}
            <div className="space-y-2 font-code-spec text-xs">
              <div className="bg-surface-container-lowest p-3 flex items-center justify-between shadow-xs border border-outline-variant/20">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 bg-secondary inline-block shrink-0"></span>
                  <span className="font-title-md text-primary font-bold text-xs sm:text-sm">
                    80-Mil FleeceBACK TPO Membrane
                  </span>
                </div>
                <span className="font-label-sm text-secondary uppercase text-[10px] font-semibold">
                  Finish Cap
                </span>
              </div>

              <div className="bg-surface-container-high p-3 flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 bg-outline inline-block shrink-0"></span>
                  <span className="font-title-md text-primary font-bold text-xs sm:text-sm">
                    1/2&quot; High-Density Polyiso Cover Board
                  </span>
                </div>
                <span className="font-label-sm text-secondary uppercase text-[10px] font-semibold">
                  Compressive Core
                </span>
              </div>

              <div className="bg-surface-variant p-3 flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 bg-outline-variant inline-block shrink-0"></span>
                  <span className="font-title-md text-primary font-bold text-xs sm:text-sm">
                    Dual-Layer Tapered Polyiso (R-30 min.)
                  </span>
                </div>
                <span className="font-label-sm text-secondary uppercase text-[10px] font-semibold">
                  Slope-to-Drain
                </span>
              </div>

              <div className="bg-surface-container-highest p-3 flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 bg-on-surface-variant inline-block shrink-0"></span>
                  <span className="font-title-md text-primary font-bold text-xs sm:text-sm">
                    Self-Adhered Vapor Retarder (SBS Air Barrier)
                  </span>
                </div>
                <span className="font-label-sm text-secondary uppercase text-[10px] font-semibold">
                  Perm &lt; 0.02
                </span>
              </div>

              <div className="bg-primary-container text-inverse-on-surface p-3 flex items-center justify-between border border-primary">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 bg-tertiary-fixed inline-block shrink-0"></span>
                  <span className="font-title-md text-surface font-bold text-xs sm:text-sm">
                    22-Gauge B-Flute Structural Steel Decking
                  </span>
                </div>
                <span className="font-label-sm text-inverse-primary uppercase text-[10px] font-semibold">
                  Substrate
                </span>
              </div>
            </div>

            <div className="p-3 bg-surface-container-lowest text-on-surface-variant font-body-sm text-xs flex items-center gap-2.5 border border-outline-variant/30">
              <Compass className="w-4 h-4 text-secondary shrink-0" />
              <span>
                Each assembly custom-engineered to meet structural deflection criteria and local microclimate wind profiles.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Flat Roofing Systems Comparison Matrix */}
      <SystemsComparisonMatrix />

      {/* Technical Deep Dive: The Anatomy of a High-Performance Flat Roof */}
      <TechnicalDeepDive />

      {/* Capital Strategy Decision Matrix */}
      <CapitalStrategyComparison />

      {/* Enterprise Case Study: Northpoint Distribution Center */}
      <section className="w-full bg-surface py-16 lg:py-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              ENTERPRISE CASE STUDY
            </span>
            <span className="font-code-spec text-on-surface-variant text-xs">
              PROJECT ID: {caseStudy.id}
            </span>
          </div>

          <CaseStudyCard caseStudy={caseStudy} />
        </div>
      </section>

      {/* Direct Engineering Dispatch & Consultation Request Form */}
      <ConsultationQuoteForm
        id="consultation"
        defaultService="Flat Roofing Systems"
        title="Schedule a Flat Roof Diagnostic & Engineering Review"
      />
    </div>
  );
}
