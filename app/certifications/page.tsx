import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CERTIFICATIONS, SAFETY_PROTOCOLS } from "@/constants/data";
import { ConsultationQuoteForm } from "@/components/sections/ConsultationQuoteForm";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Building2,
  HardHat,
  ArrowRight,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Certifications & Master Credentials | ProCore",
  description:
    "Explore ProCore's manufacturer master applicator credentials (Carlisle, GAF, Elevate), ANSI/SPRI ES-1 metal fabricator certification, and safety compliance accreditations.",
};

export default function CertificationsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Breadcrumbs */}
      <div className="w-full bg-surface-container-high py-2 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-code-spec text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-bold uppercase tracking-wider">COMPLIANCE DEPT</span>
            <span>/</span>
            <span className="text-secondary font-medium">MASTER CREDENTIALS & AUDIT LOGS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase text-[10px] font-bold">
              VERIFIED ACTIVE STATUS
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-lowest py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 font-label-sm text-secondary uppercase tracking-widest text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-secondary" />
            <span>TOP-TIER MANUFACTURER & SAFETY QUALIFICATIONS</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight font-bold max-w-4xl leading-tight">
            Certified for Performance. Authorized at the Master Tier.
          </h1>

          <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed text-base sm:text-lg">
            Commercial roof warranties are only as strong as the contractor&apos;s manufacturer authorization. ProCore holds elite master applicator credentials with the world&apos;s leading building envelope manufacturers, allowing us to issue full 20, 25, and 30-year No Dollar Limit (NDL) warranties.
          </p>

          {/* Sample portfolio business note as instructed */}
          <div className="p-3.5 bg-surface-container-low border-l-2 border-primary max-w-2xl flex items-start gap-3 text-xs text-on-surface-variant">
            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>
              <strong>Portfolio Note:</strong> Manufacturer accreditations and credentials presented on this website illustrate ProCore&apos;s operational capabilities and standards. Official manufacturer warranty certificates are underwritten per individual commercial project contract.
            </span>
          </div>
        </div>
      </section>

      {/* Master Applicator & Engineering Certifications Grid */}
      <section className="w-full bg-surface py-16 lg:py-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              MANUFACTURER & INDUSTRY CREDENTIALS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              Factory Master Applicator Authorizations
            </h2>
            <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
              These credentials represent rigorous factory training, ongoing craftsmanship audits, and substantial financial bonding capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-xs flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                    <span className="font-label-sm text-secondary uppercase font-semibold text-[10px] tracking-wider">
                      {cert.category}
                    </span>
                    <span className="font-code-spec text-[10px] font-bold text-on-tertiary-container bg-surface-container px-2 py-0.5">
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="font-title-lg text-primary font-bold text-lg leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs text-secondary font-medium">
                    Issued by: <span className="text-primary font-semibold">{cert.issuer}</span>
                  </div>

                  <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between bg-surface-container-low p-2.5 font-code-spec text-[11px]">
                  <span className="text-secondary font-medium">VERIFICATION:</span>
                  <span className="font-bold text-primary">{cert.verificationCode}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance Accreditations */}
      <section className="w-full bg-surface-container-low py-16 lg:py-20 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="max-w-3xl space-y-2">
            <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
              SAFETY AUDIT ACCREDITATIONS
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              Third-Party Field Safety Qualifications
            </h2>
            <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
              We maintain active A-grade profiles across nationwide contractor safety networks to streamline general contractor and corporate owner pre-qualification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_PROTOCOLS.map((prot, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-6 border border-outline-variant/30 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-6 h-6 text-on-tertiary-container" />
                  <span className="font-code-spec text-xs font-bold text-primary bg-surface-container px-2 py-0.5">
                    {prot.statusBadge}
                  </span>
                </div>
                <h3 className="font-title-md text-primary font-bold text-base">
                  {prot.title}
                </h3>
                <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                  {prot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <ConsultationQuoteForm
        title="Verify Warranty Eligibility for Your Facility"
        subtitle="Request a certified inspection pass to determine if your building envelope qualifies for 20, 25, or 30-year manufacturer No Dollar Limit (NDL) warranty underwriting."
      />
    </div>
  );
}
