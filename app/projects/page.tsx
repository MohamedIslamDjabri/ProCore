"use client";

import React, { useState } from "react";
import { CASE_STUDIES } from "@/constants/data";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { ConsultationQuoteForm } from "@/components/sections/ConsultationQuoteForm";
import { Building2, SlidersHorizontal, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Commercial Projects" },
    { key: "Logistics & Cross-Dock Distribution", label: "Distribution & Logistics" },
    { key: "Heavy Industrial Manufacturing", label: "Industrial & Manufacturing" },
    { key: "Biomedical & Laboratory Research", label: "Healthcare & Cleanrooms" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.propertyType === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Breadcrumbs */}
      <div className="w-full bg-surface-container-high py-2 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-code-spec text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-bold uppercase tracking-wider">PORTFOLIO</span>
            <span>/</span>
            <span className="text-secondary font-medium">COMPLETED COMMERCIAL ASSETS</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase text-[10px] font-bold">
              10M+ SQ. FT. DELIVERED
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full bg-surface-container-lowest py-16 lg:py-20 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 font-label-sm text-secondary uppercase tracking-widest text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-secondary" />
            <span>ENTERPRISE ROOFING PORTFOLIO & CASE STUDIES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight font-bold max-w-4xl leading-tight">
            Commercial Projects Delivered on Schedule. Zero Disruption.
          </h1>

          <p className="font-body-lg text-on-surface-variant max-w-3xl leading-relaxed text-base sm:text-lg">
            Explore our verified portfolio of large-scale commercial flat roof replacements, industrial recover overlays, and fluid-applied coating restorations across North America.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center gap-2 border-t border-outline-variant/30">
            <div className="flex items-center gap-2 text-xs font-bold text-secondary mr-2 uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter Sector:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 font-label-md uppercase tracking-wider text-xs transition-colors cursor-pointer ${
                  activeCategory === cat.key
                    ? "bg-primary text-on-primary font-bold shadow-xs"
                    : "bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high border border-outline-variant/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List Grid */}
      <section className="w-full bg-surface py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="space-y-4">
              <div className="flex items-center justify-between text-xs text-secondary font-code-spec pb-2 border-b border-outline-variant/20">
                <span className="font-bold text-primary">DOSSIER REF: {project.id}</span>
                <span>{project.location}</span>
              </div>
              <CaseStudyCard caseStudy={project} reversed={idx % 2 === 1} />
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-surface-container-low border border-outline-variant/30 p-8 space-y-3">
              <p className="font-title-md text-primary font-bold">No projects matched the selected sector.</p>
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className="px-4 py-2 bg-primary text-on-primary text-xs uppercase tracking-wider font-bold"
              >
                Reset Sector Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quote Form */}
      <ConsultationQuoteForm
        defaultService="Commercial Roofing"
        title="Have an Upcoming Commercial Project?"
        subtitle="Submit your building specifications or call our engineering team for preliminary budget modeling, core sampling, and roof plan take-offs."
      />
    </div>
  );
}
