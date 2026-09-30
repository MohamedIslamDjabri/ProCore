import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MaintenancePlanCards } from "@/components/sections/MaintenancePlanCards";
import { ConsultationQuoteForm } from "@/components/sections/ConsultationQuoteForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import {
  Wrench,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Activity,
  ArrowRight,
  Droplets,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Roof Maintenance Programs (PMP) | ProCore",
  description:
    "Protect your commercial building envelope and preserve manufacturer NDL warranties with ProCore's scheduled preventative roof maintenance programs.",
};

export default function MaintenancePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Breadcrumbs */}
      <div className="w-full bg-surface-container-high py-2 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-code-spec text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-bold uppercase tracking-wider">ASSET PRESERVATION</span>
            <span>/</span>
            <span className="text-secondary font-medium">PREVENTATIVE MAINTENANCE PROGRAM (PMP)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase text-[10px] font-bold">
              MANUFACTURER NDL COMPLIANT
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-lowest py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 font-label-sm text-secondary uppercase tracking-widest text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 text-secondary" />
            <span>CONTINUOUS ASSET ENVELOPE SURVEILLANCE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight font-bold max-w-4xl leading-tight">
            Stop Leaks Before They Reach Your Inventory.
          </h1>

          <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed text-base sm:text-lg">
            Over 80% of commercial roofs are replaced prematurely due to neglected maintenance. ProCore&apos;s Preventative Maintenance Program (PMP) doubles roof life expectancy, satisfies mandatory warranty covenants, and provides documented CapEx certainty.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#plans"
              className="bg-primary text-on-primary hover:bg-secondary font-title-md uppercase tracking-wider px-6 py-3.5 transition-colors inline-flex items-center gap-2 shadow-sm font-bold text-xs"
            >
              <span>Explore PMP Service Tiers</span>
              <ArrowRight className="w-4 h-4 text-tertiary-fixed" />
            </a>
            <a
              href="#portal-preview"
              className="bg-surface-container text-primary hover:bg-surface-container-high font-title-md uppercase tracking-wider px-6 py-3.5 transition-colors inline-flex items-center gap-2 text-xs font-bold border border-outline-variant/40"
            >
              <span>Client Portal Dashboard</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars of ProCore PMP */}
      <section className="w-full bg-surface py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              SYSTEMATIC ASSET CARE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              What Every Scheduled PMP Inspection Includes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <Droplets className="w-6 h-6 text-primary" />
              <h3 className="font-title-md text-primary font-bold text-base">
                Hydraulic Drainage Clearing
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                Clearing debris from internal roof drains, scupper boxes, overflow drains, and leader heads to prevent hydrostatic structural overload.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <h3 className="font-title-md text-primary font-bold text-base">
                Seam & Flashings Ultrasonic Probe
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                Physical seam probe inspection across all field welds, mechanical curb tie-ins, parapet coping flashings, and expansion joints.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <Wrench className="w-6 h-6 text-primary" />
              <h3 className="font-title-md text-primary font-bold text-base">
                On-The-Spot Preventative Seals
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                Immediate application of manufacturer-approved sealants into pitch pockets, slip-sheet additions under rogue HVAC cables, and minor patch welds.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30 space-y-3">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="font-title-md text-primary font-bold text-base">
                Audit Dossier & Cloud History
              </h3>
              <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                GPS-tagged defect photography, Roof Condition Index (RCI) scoring, and manufacturer warranty validation certificate for every pass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PMP Service Packages */}
      <MaintenancePlanCards />

      {/* Portal Dashboard Interactive Preview */}
      <section className="w-full bg-surface-container-high py-16 lg:py-24 border-y border-outline-variant/30" id="portal-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
                PROCORE CLIENT PORTAL
              </span>
              <h2 className="font-headline-lg text-primary text-2xl sm:text-3xl font-bold mt-1">
                Live Rooftop Condition Intelligence
              </h2>
            </div>
            <div className="font-code-spec text-xs bg-surface-container px-3 py-1.5 text-secondary border border-outline-variant/30 font-semibold">
              REAL-TIME ENTERPRISE TELEMETRY
            </div>
          </div>

          {/* Mock Dashboard UI Interface */}
          <div className="bg-surface-container-lowest border border-outline-variant/40 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-outline-variant/30 gap-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-tertiary-fixed-dim rounded-full animate-pulse" />
                <span className="font-title-md font-bold text-primary text-sm sm:text-base">
                  Facility Asset: Austin Logistics Hub – Sector B (180,000 sq. ft.)
                </span>
              </div>
              <span className="font-code-spec text-xs text-on-tertiary-container bg-surface-container px-2.5 py-1 font-bold">
                WARRANTY: 30-YR NDL ACTIVE (EXPIRES 2054)
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-surface-container-low border-l-2 border-primary">
                <span className="font-label-sm text-secondary uppercase text-[10px] block font-semibold">
                  Roof Condition Index
                </span>
                <span className="font-headline-sm text-primary font-bold text-xl block mt-1">
                  96 / 100
                </span>
                <span className="text-[11px] text-on-tertiary-container font-semibold">Excellent State</span>
              </div>

              <div className="p-4 bg-surface-container-low border-l-2 border-primary">
                <span className="font-label-sm text-secondary uppercase text-[10px] block font-semibold">
                  Last Certified Pass
                </span>
                <span className="font-headline-sm text-primary font-bold text-xl block mt-1">
                  14 Days Ago
                </span>
                <span className="text-[11px] text-secondary">Autumn Bi-Annual</span>
              </div>

              <div className="p-4 bg-surface-container-low border-l-2 border-primary">
                <span className="font-label-sm text-secondary uppercase text-[10px] block font-semibold">
                  Open Action Items
                </span>
                <span className="font-headline-sm text-primary font-bold text-xl block mt-1">
                  0 Critical
                </span>
                <span className="text-[11px] text-secondary">1 Pitch Pocket Top-Up</span>
              </div>

              <div className="p-4 bg-surface-container-low border-l-2 border-primary">
                <span className="font-label-sm text-secondary uppercase text-[10px] block font-semibold">
                  Next Scheduled Pass
                </span>
                <span className="font-headline-sm text-primary font-bold text-xl block mt-1">
                  April 2025
                </span>
                <span className="text-[11px] text-secondary">Spring Hail Audit</span>
              </div>
            </div>

            <div className="p-4 bg-surface-container-low border border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-on-surface">
                <CheckCircle2 className="w-4 h-4 text-on-tertiary-container shrink-0" />
                <span>All inspection logs, thermal FLIR maps, and compliance reports are permanently archived in your client account.</span>
              </div>
              <Link
                href="/contact"
                className="shrink-0 px-4 py-2 bg-primary text-on-primary font-title-md uppercase tracking-wider text-[11px] font-bold hover:bg-secondary transition-colors"
              >
                Request Enterprise Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion />

      {/* Quote / Enroll Form */}
      <ConsultationQuoteForm
        defaultService="Maintenance"
        title="Enroll Your Commercial Building in ProCore PMP"
        subtitle="Speak directly with a ProCore Asset Manager to evaluate your roof inventory, schedule your baseline inspection, and activate guaranteed emergency response."
      />
    </div>
  );
}
