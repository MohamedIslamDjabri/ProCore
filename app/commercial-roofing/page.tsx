import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CASE_STUDIES, COMMERCIAL_SERVICES } from "@/constants/data";
import { CommercialServicesGrid } from "@/components/sections/CommercialServicesGrid";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CapitalStrategyComparison } from "@/components/sections/CapitalStrategyComparison";
import { ConsultationQuoteForm } from "@/components/sections/ConsultationQuoteForm";
import {
  ShieldCheck,
  ArrowRight,
  ClipboardCheck,
  HardHat,
  Cpu,
  Layers,
  Award,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Roofing Services | New Installation & Full Tear-Off",
  description:
    "Engineered commercial roofing solutions for industrial facilities, distribution centers, and institutional properties. FM Global approved, ANSI/SPRI ES-1 certified.",
};

export default function CommercialRoofingPage() {
  const commService = COMMERCIAL_SERVICES[0];
  const manufacturingCase = CASE_STUDIES[1];

  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Breadcrumbs */}
      <div className="w-full bg-surface-container-high py-2 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-code-spec text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-bold uppercase tracking-wider">DIVISION 07</span>
            <span>/</span>
            <span className="text-secondary font-medium">THERMAL & MOISTURE PROTECTION</span>
            <span>/</span>
            <span className="text-on-surface font-semibold">07 50 00 COMMERCIAL ROOFING</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase text-[10px] font-bold">
              FM CLASS 1-90 & 1-120
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-primary text-surface py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-tertiary/80 text-tertiary-fixed px-3 py-1 font-label-sm uppercase tracking-widest text-xs border border-tertiary-fixed/30">
            <ShieldCheck className="w-4 h-4 text-tertiary-fixed" />
            <span>ENTERPRISE COMMERCIAL ROOFING INFRASTRUCTURE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-surface tracking-tight font-bold max-w-4xl leading-tight">
            Commercial Roofing Engineered for <span className="text-tertiary-fixed">Structural Longevity.</span>
          </h1>

          <p className="font-body-lg text-inverse-primary max-w-3xl leading-relaxed text-base sm:text-lg">
            Complete commercial roof installations, structural steel fluted deck retrofits, and comprehensive tear-offs designed to keep active commercial facilities operational with zero production loss.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="#quote-form"
              className="px-6 py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-title-md uppercase tracking-wider text-xs transition-colors border border-tertiary font-bold shadow-md inline-flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-tertiary-fixed" />
              <span>Request a Commercial Roof Scope</span>
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3.5 bg-surface-container-lowest text-primary hover:bg-surface-container-high font-title-md uppercase tracking-wider text-xs transition-colors font-bold shadow-sm inline-flex items-center gap-2"
            >
              <span>View Industrial Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Commercial Execution Workflow (6 Stages) */}
      <section className="w-full bg-surface-container-low py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              PROJECT LIFECYCLE MANAGEMENT
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              The ProCore Commercial Execution Framework
            </h2>
            <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
              Industrial facilities require methodical planning. Every square foot is tracked from structural pull-tests to final manufacturer punch lists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <div className="w-9 h-9 bg-surface-container text-primary flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-title-lg text-primary font-bold text-base">
                Engineering Audit & Core Testing
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                Non-destructive infrared moisture scans, deck thickness ultrasonics, and fastener pull tests to establish true load-bearing metrics.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <div className="w-9 h-9 bg-surface-container text-primary flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-title-lg text-primary font-bold text-base">
                CAD Drainage & Thermal Modeling
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                Custom tapered polyiso crickets modeled in AutoCAD to guarantee minimum 0.25/12 slope and eliminate ponding water at internal sumps.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <div className="w-9 h-9 bg-surface-container text-primary flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-title-lg text-primary font-bold text-base">
                Logistics Staging & Disruption Mitigation
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                Crane hoist scheduling during non-peak hours, interior catch-nets over active production bays, and dedicated safety zones.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <div className="w-9 h-9 bg-surface-container text-primary flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-title-lg text-primary font-bold text-base">
                Robotic Fusion & High-Mil Assemblies
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                Precision automated hot-air welding rigs, induction-fastened plates, and heavy-gauge fleece-backed membrane bonding.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <div className="w-9 h-9 bg-surface-container text-primary flex items-center justify-center font-bold text-sm">
                05
              </div>
              <h3 className="font-title-lg text-primary font-bold text-base">
                ANSI/SPRI ES-1 Perimeter Fabrication
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                In-house architectural sheet metal fabrication for copings, gutters, scuppers, and fascia tested up to 160 MPH wind uplift.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <div className="w-9 h-9 bg-surface-container text-primary flex items-center justify-center font-bold text-sm">
                06
              </div>
              <h3 className="font-title-lg text-primary font-bold text-base">
                Independent Manufacturer NDL Sign-Off
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                Factory technical representative inspects 100% of seams and flashings before issuing 20 to 30-year No Dollar Limit warranty certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (filtered to highlight commercial installations) */}
      <CommercialServicesGrid
        heading="Commercial Roofing Assemblies"
        subheading="Factory-authorized master installations for single-ply, multi-ply, and liquid-applied systems across enterprise portfolios."
      />

      {/* Featured Case Study: Apex Precision Dynamics Plant */}
      <section className="w-full bg-surface py-16 lg:py-20 border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              MANUFACTURING ENVELOPE CASE STUDY
            </span>
            <span className="font-code-spec text-on-surface-variant text-xs">
              PROJECT ID: {manufacturingCase.id}
            </span>
          </div>

          <CaseStudyCard caseStudy={manufacturingCase} reversed />
        </div>
      </section>

      {/* CapEx Strategy Comparison */}
      <CapitalStrategyComparison />

      {/* Quote Form */}
      <div id="quote-form">
        <ConsultationQuoteForm
          defaultService="Commercial Roofing"
          title="Schedule a Commercial Roof Replacement Assessment"
          subtitle="Receive an objective, engineering-first specification dossier for your facility. We coordinate on-site structural core samples and CapEx planning."
        />
      </div>
    </div>
  );
}
