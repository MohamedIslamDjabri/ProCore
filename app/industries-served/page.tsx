import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { INDUSTRIES_SERVED } from "@/constants/data";
import { ConsultationQuoteForm } from "@/components/sections/ConsultationQuoteForm";
import {
  Warehouse,
  Cog,
  Building,
  ShoppingCart,
  HeartPulse,
  Hotel,
  Home,
  GraduationCap,
  Landmark,
  Fuel,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries Served | Commercial Roofing by Sector | ProCore",
  description:
    "Sector-specific commercial roofing solutions for logistics warehouses, advanced manufacturing, hospitals, Class-A office parks, retail centers, and municipal infrastructure.",
};

export default function IndustriesServedPage() {
  const getIndustryIcon = (code: string) => {
    switch (code) {
      case "IND-01":
        return <Warehouse className="w-8 h-8 text-primary" />;
      case "IND-02":
        return <Cog className="w-8 h-8 text-primary" />;
      case "IND-03":
        return <Building className="w-8 h-8 text-primary" />;
      case "IND-04":
        return <ShoppingCart className="w-8 h-8 text-primary" />;
      case "IND-05":
        return <HeartPulse className="w-8 h-8 text-primary" />;
      case "IND-06":
        return <Hotel className="w-8 h-8 text-primary" />;
      case "IND-07":
        return <Home className="w-8 h-8 text-primary" />;
      case "IND-08":
        return <GraduationCap className="w-8 h-8 text-primary" />;
      case "IND-09":
        return <Landmark className="w-8 h-8 text-primary" />;
      case "IND-10":
        return <Fuel className="w-8 h-8 text-primary" />;
      default:
        return <Building className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Breadcrumbs */}
      <div className="w-full bg-surface-container-high py-2 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-code-spec text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-bold uppercase tracking-wider">SECTORS</span>
            <span>/</span>
            <span className="text-secondary font-medium">FACILITY TYPOLOGY STANDARDS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase text-[10px] font-bold">
              10 SPECIALIZED DIVISIONS
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-lowest py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 font-label-sm text-secondary uppercase tracking-widest text-xs font-semibold">
            <Warehouse className="w-3.5 h-3.5 text-secondary" />
            <span>SECTOR-CALIBRATED ENVELOPE ENGINEERING</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight font-bold max-w-4xl leading-tight">
            Commercial Roofing Engineered for Your Industry&apos;s Exact Realities.
          </h1>

          <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed text-base sm:text-lg">
            A food-processing cold storage facility has drastically different thermal and vapor requirements than an active pharmaceutical cleanroom or a 500,000 sq. ft. logistics cross-dock. Explore our industry-specific assembly standards below.
          </p>
        </div>
      </section>

      {/* Comprehensive 10 Industry Deep-Dives */}
      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.id}
                className="bg-surface-container-lowest p-6 sm:p-8 border border-outline-variant/30 shadow-xs flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                    <div className="p-3 bg-surface-container-low border border-outline-variant/30">
                      {getIndustryIcon(ind.code)}
                    </div>
                    <span className="font-code-spec text-secondary text-xs font-bold bg-surface-container px-3 py-1">
                      SPEC ID: {ind.code}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-primary font-bold text-xl">
                    {ind.title}
                  </h3>

                  <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                    {ind.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="font-label-sm uppercase tracking-wider text-secondary text-[11px] font-bold block">
                      Sector Critical Challenges & Solutions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-on-surface">
                      {ind.keyNeeds.map((need, nIdx) => (
                        <li key={nIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-on-tertiary-container shrink-0 mt-0.5" />
                          <span>{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between bg-surface-container-low p-3.5">
                  <div>
                    <span className="font-label-sm text-secondary uppercase text-[10px] block font-semibold">
                      ENGINEERED ASSEMBLY MATCH
                    </span>
                    <span className="font-title-md text-primary font-bold text-xs sm:text-sm">
                      {ind.optimalMatch}
                    </span>
                  </div>
                  <Link
                    href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                    className="px-3.5 py-2 bg-primary text-on-primary font-title-md uppercase text-[11px] tracking-wider font-bold hover:bg-secondary transition-colors shrink-0"
                  >
                    Request Spec
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <ConsultationQuoteForm
        title="Consult with an Industry Roofing Specialist"
        subtitle="Our sector directors have completed hundreds of successful installations across regulated manufacturing, logistics, healthcare, and educational campuses."
      />
    </div>
  );
}
