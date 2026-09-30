import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/constants/data";
import { WhyProCoreSection } from "@/components/sections/WhyProCoreSection";
import { SafetySection } from "@/components/sections/SafetySection";
import { DownloadProfileSection } from "@/components/sections/DownloadProfileSection";
import {
  ShieldCheck,
  Building2,
  Users,
  Award,
  ArrowRight,
  HardHat,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About ProCore Commercial Roofing | Engineering & Field Operations",
  description:
    "Learn about ProCore Commercial Roofing. Over two decades of commercial low-slope envelope engineering, elite master applicator credentials, and safety excellence nationwide.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Breadcrumbs */}
      <div className="w-full bg-surface-container-high py-2 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-code-spec text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-bold uppercase tracking-wider">ENTERPRISE OVERVIEW</span>
            <span>/</span>
            <span className="text-secondary font-medium">ORGANIZATIONAL PROFILE & OPERATIONS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase text-[10px] font-bold">
              CORP ID: {SITE_CONFIG.corpId}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-lowest py-16 lg:py-24 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 font-label-sm text-secondary uppercase tracking-widest text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-secondary" />
              <span>COMMERCIAL ROOFING MASTERY SINCE 2004</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight font-bold leading-tight">
              Built for Performance. Managed for the Long Term.
            </h1>

            <p className="font-body-lg text-on-surface-variant leading-relaxed text-base sm:text-lg">
              ProCore was founded with an engineering-first mandate: to elevate commercial roofing from reactive tradesmanship into an accountable, data-backed discipline. Today, we manage over 10 million square feet of high-specification industrial envelopes across the United States.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-primary text-on-primary hover:bg-secondary font-title-md uppercase tracking-wider px-6 py-3.5 transition-colors inline-flex items-center gap-2 shadow-sm font-bold text-xs"
              >
                <span>Speak with an Executive Engineer</span>
                <ArrowRight className="w-4 h-4 text-tertiary-fixed" />
              </Link>
              <Link
                href="/certifications"
                className="bg-surface-container text-primary hover:bg-surface-container-high font-title-md uppercase tracking-wider px-6 py-3.5 transition-colors inline-flex items-center gap-2 text-xs font-bold border border-outline-variant/40"
              >
                <span>Credentials & Certifications</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[380px] bg-primary-container border border-outline-variant/40 shadow-sm overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL7I2Gqg8MC3przkOF-aQt-SkTHXlXs4KGffz1a5vRKjSOsAfvWd0iSQ4yf5BFgash2ZRhdNVb9zaA29m9nZSIl3SmlUSKid4NB4ihakfN92RBZq-RieSbbNYXsBUUQqxSE_1FykAER-DJatSNK6JNQ9KYOqUn0GzzHaRQuYVqC8uXbjWwwP9pM7ynjfNgaxRMbTuTDs3uo6qFEreJb1Euyoy29xFwlwp0IfVt0z_t-dgRMTmTdnmI"
              alt="Industrial commercial roofing complex"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-on-primary space-y-1">
              <span className="font-label-sm text-tertiary-fixed uppercase text-[10px] font-bold tracking-wider">
                FIELD SUPERINTENDENCE
              </span>
              <p className="font-title-md font-bold text-sm">
                100% In-House Factory-Certified Project Engineers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Operational Tenets */}
      <section className="w-full bg-surface py-16 lg:py-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              CORE OPERATIONAL PRINCIPLES
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              Engineering Over Improvisation
            </h2>
            <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
              We reject the transient subcontractor model. Every ProCore commercial installation is managed by salaried field superintendents with full authority to halt operations if tolerances aren&apos;t met.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-6 sm:p-8 border border-outline-variant/30 space-y-3">
              <div className="p-3 bg-surface-container-low w-fit border border-outline-variant/30">
                <Compass className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-title-lg text-primary font-bold text-lg">
                Independent QA Verification
              </h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                We calibrate seam probes, test film-tearing welds on-site daily, and invite third-party manufacturer inspectors for final No Dollar Limit (NDL) warranty audits.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 sm:p-8 border border-outline-variant/30 space-y-3">
              <div className="p-3 bg-surface-container-low w-fit border border-outline-variant/30">
                <HardHat className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-title-lg text-primary font-bold text-lg">
                Zero Lost-Time Incidents
              </h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Operating at an EMR under 0.75, our OSHA VPP Star standard ensures that your facility is never exposed to regulatory risk, jobsite hazards, or liability claims.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-6 sm:p-8 border border-outline-variant/30 space-y-3">
              <div className="p-3 bg-surface-container-low w-fit border border-outline-variant/30">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-title-lg text-primary font-bold text-lg">
                Predictive Asset Lifecycle
              </h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                We supply corporate asset managers with board-level CapEx reports, 10-year depreciation forecasts, and scheduled maintenance to prevent sudden budget shocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ProCore Two-Column Component */}
      <WhyProCoreSection />

      {/* Safety Section */}
      <SafetySection />

      {/* Download Profile Section */}
      <DownloadProfileSection />
    </div>
  );
}
