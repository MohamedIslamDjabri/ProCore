import React from "react";
import Image from "next/image";
import { CaseStudy } from "@/constants/data";
import { ShieldCheck, Calendar, Layers, Maximize2, CheckCircle2 } from "lucide-react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  reversed?: boolean;
}

export function CaseStudyCard({ caseStudy, reversed = false }: CaseStudyCardProps) {
  return (
    <div className="w-full bg-surface-container-lowest shadow-sm border border-outline-variant/30 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
      {/* Project Imagery */}
      <div
        className={`lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={caseStudy.image}
          alt={caseStudy.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-primary/95 text-on-primary p-3.5 sm:max-w-md backdrop-blur-xs border border-primary-container">
          <span className="font-label-sm text-tertiary-fixed block uppercase text-[10px] tracking-wider font-semibold">
            AERIAL INSPECTION OVERVIEW
          </span>
          <span className="font-title-md font-bold text-sm sm:text-base">
            {caseStudy.title} – {caseStudy.location}
          </span>
        </div>
      </div>

      {/* Project Technical Dossier */}
      <div
        className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-surface-container-lowest ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="space-y-3">
          <div className="inline-block px-2.5 py-1 bg-surface-container text-tertiary font-label-sm uppercase font-bold text-xs tracking-wider">
            {caseStudy.propertyType}
          </div>
          <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold text-2xl">
            {caseStudy.subtitle}
          </h3>
          <p className="font-body-md text-on-surface-variant leading-relaxed text-[14px]">
            {caseStudy.challenge}
          </p>
          <p className="font-body-sm text-on-surface-variant leading-relaxed text-[13px] pt-1">
            <strong className="text-primary font-semibold">Engineering Solution: </strong>
            {caseStudy.approach}
          </p>
        </div>

        {/* Technical Specs Matrix */}
        <div className="grid grid-cols-2 gap-3 font-body-sm">
          <div className="p-3 bg-surface-container-low border-l-2 border-primary">
            <div className="flex items-center gap-1.5 text-secondary text-xs uppercase font-medium">
              <Maximize2 className="w-3 h-3" />
              <span>Roof Area</span>
            </div>
            <span className="font-title-md font-bold text-primary block mt-0.5 text-sm">
              {caseStudy.size}
            </span>
          </div>

          <div className="p-3 bg-surface-container-low border-l-2 border-primary">
            <div className="flex items-center gap-1.5 text-secondary text-xs uppercase font-medium">
              <Layers className="w-3 h-3" />
              <span>System</span>
            </div>
            <span className="font-title-md font-bold text-primary block mt-0.5 text-xs truncate">
              {caseStudy.roofSystem}
            </span>
          </div>

          <div className="p-3 bg-surface-container-low border-l-2 border-primary">
            <div className="flex items-center gap-1.5 text-secondary text-xs uppercase font-medium">
              <ShieldCheck className="w-3 h-3" />
              <span>Warranty</span>
            </div>
            <span className="font-title-md font-bold text-primary block mt-0.5 text-sm">
              {caseStudy.warranty}
            </span>
          </div>

          <div className="p-3 bg-surface-container-low border-l-2 border-primary">
            <div className="flex items-center gap-1.5 text-secondary text-xs uppercase font-medium">
              <Calendar className="w-3 h-3" />
              <span>Timeline</span>
            </div>
            <span className="font-title-md font-bold text-primary block mt-0.5 text-sm">
              {caseStudy.timeline}
            </span>
          </div>
        </div>

        {/* Verification Footer */}
        <div className="p-3 bg-surface-container text-on-surface font-body-sm flex items-center justify-between text-xs border border-outline-variant/30">
          <div className="flex items-center gap-1.5 font-bold">
            <CheckCircle2 className="w-4 h-4 text-on-tertiary-container" />
            <span>{caseStudy.complianceRating || "FM Global Verified"}</span>
          </div>
          <span className="font-label-sm text-secondary uppercase font-semibold text-[10px]">
            {caseStudy.auditBadge || "2024 Audit Pass"}
          </span>
        </div>
      </div>
    </div>
  );
}
