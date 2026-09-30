import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SITE_CONFIG, CASE_STUDIES } from "@/constants/data";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { CommercialServicesGrid } from "@/components/sections/CommercialServicesGrid";
import { WhyProCoreSection } from "@/components/sections/WhyProCoreSection";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { SafetySection } from "@/components/sections/SafetySection";
import { DownloadProfileSection } from "@/components/sections/DownloadProfileSection";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ConsultationQuoteForm } from "@/components/sections/ConsultationQuoteForm";
import {
  ShieldCheck,
  ArrowRight,
  Building2,
  Factory,
  Wrench,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ProCore Commercial Roofing | Commercial & Industrial Roofing Systems",
  description:
    "Engineered commercial flat roofing assemblies, single-ply TPO & PVC membranes, elastomeric roof coatings, and 24/7 facility asset maintenance programs nationwide.",
};

export default function HomePage() {
  const featuredCaseStudy = CASE_STUDIES[0];

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary text-surface py-16 lg:py-28">
        {/* Visual Backdrop with Multi-tone Architectural Scrim */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL7I2Gqg8MC3przkOF-aQt-SkTHXlXs4KGffz1a5vRKjSOsAfvWd0iSQ4yf5BFgash2ZRhdNVb9zaA29m9nZSIl3SmlUSKid4NB4ihakfN92RBZq-RieSbbNYXsBUUQqxSE_1FykAER-DJatSNK6JNQ9KYOqUn0GzzHaRQuYVqC8uXbjWwwP9pM7ynjfNgaxRMbTuTDs3uo6qFEreJb1Euyoy29xFwlwp0IfVt0z_t-dgRMTmTdnmI"
            alt="Panoramic aerial view of large-scale industrial warehouse facility with new white reflective TPO membrane roof"
            fill
            priority
            className="object-cover object-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Technical Metadata Stamp */}
          <div className="inline-flex items-center gap-2 bg-tertiary/80 text-tertiary-fixed px-3 py-1 mb-6 border border-tertiary-fixed/20 text-xs">
            <ShieldCheck className="w-4 h-4 text-tertiary-fixed shrink-0" />
            <span className="font-code-spec tracking-widest uppercase">
              ASSET LIFECYCLE MANAGEMENT // SPEC-ID: 2024-NDL
            </span>
          </div>

          <div className="max-w-3xl space-y-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-surface tracking-tight leading-[1.08] font-bold">
              Commercial Roofing Built for{" "}
              <span className="text-tertiary-fixed">Performance.</span>
            </h1>
            <p className="font-body-lg text-inverse-primary leading-relaxed text-base sm:text-lg">
              Reliable roofing systems, restorative liquid assemblies, elastomeric coatings, and continuous maintenance protocols for commercial and mission-critical industrial facilities across North America.
            </p>

            {/* CTA Cluster */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-title-md uppercase tracking-wider text-xs transition-colors border border-tertiary font-bold shadow-md"
              >
                <ShieldCheck className="w-4 h-4 text-tertiary-fixed" />
                <span>Request a Commercial Quote</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest text-primary hover:bg-surface-container-high font-title-md uppercase tracking-wider text-xs transition-colors font-bold shadow-sm"
              >
                <span>View Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Compact Trust Protocol Ticker */}
          <div className="mt-14 pt-6 bg-primary-container/40 p-4 border border-primary-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-inverse-primary text-xs sm:text-sm">
                <Building2 className="w-4 h-4 text-tertiary-fixed shrink-0" />
                <span className="font-label-md uppercase tracking-wider">
                  Commercial Infrastructure
                </span>
              </div>
              <div className="flex items-center gap-2 text-inverse-primary text-xs sm:text-sm">
                <Factory className="w-4 h-4 text-tertiary-fixed shrink-0" />
                <span className="font-label-md uppercase tracking-wider">
                  Industrial Envelope
                </span>
              </div>
              <div className="flex items-center gap-2 text-inverse-primary text-xs sm:text-sm">
                <Wrench className="w-4 h-4 text-tertiary-fixed shrink-0" />
                <span className="font-label-md uppercase tracking-wider">
                  Preventive Maintenance
                </span>
              </div>
              <div className="flex items-center gap-2 text-inverse-primary text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-tertiary-fixed shrink-0" />
                <span className="font-label-md uppercase tracking-wider">
                  24/7 Facility Response
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / PERFORMANCE METRICS BAR */}
      <TrustMetrics />

      {/* 3. COMMERCIAL SERVICES GRID */}
      <CommercialServicesGrid />

      {/* 4. WHY PROCORE */}
      <WhyProCoreSection />

      {/* 5. FEATURED CASE STUDY PREVIEW */}
      <section className="w-full bg-surface py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
                ENTERPRISE CASE STUDY
              </span>
              <h2 className="font-headline-lg text-primary text-2xl sm:text-3xl font-bold mt-1">
                Featured Commercial Execution
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-label-md uppercase tracking-wider text-xs text-primary hover:text-secondary font-bold"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <CaseStudyCard caseStudy={featuredCaseStudy} />
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <IndustriesGrid />

      {/* 7. SAFETY STRIP */}
      <SafetySection />

      {/* 8. DOWNLOADABLE COMPANY BROCHURE */}
      <DownloadProfileSection />

      {/* 9. CONSULTATION QUOTE FORM */}
      <ConsultationQuoteForm />
    </div>
  );
}
