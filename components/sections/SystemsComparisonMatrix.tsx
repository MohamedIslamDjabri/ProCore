"use client";

import React, { useState } from "react";
import { FLAT_ROOF_SYSTEMS_MATRIX, FlatRoofSystem } from "@/constants/data";
import { Database, CheckCircle2 } from "lucide-react";

export function SystemsComparisonMatrix() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { key: "all", label: "All Commercial Assemblies" },
    { key: "tpo", label: "TPO (Thermoplastic)" },
    { key: "epdm", label: "EPDM (Rubber)" },
    { key: "pvc", label: "PVC (Polyvinyl)" },
    { key: "mod-bit", label: "Modified Bitumen" },
    { key: "bur", label: "Built-Up (BUR)" },
  ];

  const displayedSystems =
    activeFilter === "all"
      ? FLAT_ROOF_SYSTEMS_MATRIX
      : FLAT_ROOF_SYSTEMS_MATRIX.filter((sys) => sys.id === activeFilter);

  return (
    <section
      className="w-full bg-surface-container-low py-16 lg:py-24 border-y border-outline-variant/30"
      id="systems-matrix"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        <div className="space-y-2">
          <div className="font-label-md uppercase tracking-wider text-secondary flex items-center gap-2 text-xs">
            <Database className="w-4 h-4 text-secondary" />
            <span>SYSTEM ENGINEERING MATRIX</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Comprehensive Flat Roofing Systems Comparison
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-3xl text-[15px] leading-relaxed">
            Neutral, engineered benchmark of the primary commercial flat roofing assemblies. Evaluate critical performance vectors to align facility lifecycle goals with structural roof performance.
          </p>
        </div>

        {/* Technical Filter Tabs */}
        <div className="flex flex-wrap gap-1 bg-surface-container p-1 border border-outline-variant/30">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveFilter(tab.key)}
              className={`px-4 py-2 font-label-md uppercase tracking-wider text-xs transition-colors cursor-pointer ${
                activeFilter === tab.key
                  ? "bg-primary text-on-primary font-bold shadow-xs"
                  : "bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container-high"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Matrix Table Wrapper */}
        <div className="overflow-x-auto bg-surface-container-lowest shadow-sm border border-outline-variant/30">
          <table className="w-full text-left font-body-sm text-[13px] border-collapse">
            <thead className="bg-surface-container font-label-md uppercase tracking-wider text-on-surface-variant text-xs border-b border-outline-variant/40">
              <tr>
                <th className="p-4 sm:p-5 min-w-[200px]">System & Chemistry</th>
                <th className="p-4 sm:p-5 min-w-[170px]">Puncture / Durability</th>
                <th className="p-4 sm:p-5 min-w-[160px]">Chemical Resistance</th>
                <th className="p-4 sm:p-5 min-w-[150px]">Energy Star / SRI</th>
                <th className="p-4 sm:p-5 min-w-[180px]">Attachment Method</th>
                <th className="p-4 sm:p-5 min-w-[140px]">Service Life</th>
                <th className="p-4 sm:p-5 min-w-[170px]">Maintenance Needs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {displayedSystems.map((sys: FlatRoofSystem) => (
                <tr
                  key={sys.id}
                  className="hover:bg-surface-container-low transition-colors"
                >
                  <td className="p-4 sm:p-5 bg-surface-container-lowest">
                    <span className="font-title-md font-bold text-primary block text-base">
                      {sys.name}
                    </span>
                    <span className="font-code-spec text-secondary text-xs">
                      {sys.chemistry}
                    </span>
                    <span className="mt-1.5 inline-block font-label-sm text-[10px] px-2 py-0.5 bg-surface-container text-tertiary font-semibold">
                      {sys.astm}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                        <CheckCircle2 className="w-4 h-4 text-on-tertiary-container shrink-0" />
                        <span>{sys.durability}</span>
                      </div>
                      <span className="text-on-surface-variant leading-relaxed text-xs">
                        {sys.durabilityDesc}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5">
                    <span className="text-primary font-bold block text-xs">
                      {sys.chemicalResistance}
                    </span>
                    <span className="text-on-surface-variant text-xs leading-relaxed">
                      {sys.chemicalDesc}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">
                    <div className="p-2.5 bg-surface-container text-center">
                      <span className="font-title-md text-tertiary font-bold block text-xs">
                        {sys.sri}
                      </span>
                      <span className="font-label-sm text-secondary text-[10px]">
                        {sys.sriDesc}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5">
                    <ul className="text-on-surface-variant space-y-1 text-xs">
                      {sys.attachment.map((att, aIdx) => (
                        <li key={aIdx}>• {att}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-4 sm:p-5">
                    <span className="font-title-md text-primary font-bold text-sm block">
                      {sys.serviceLife}
                    </span>
                    <span className="text-secondary block font-label-sm text-[10px]">
                      {sys.serviceLifeDesc}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5">
                    <span className="text-on-surface-variant text-xs leading-relaxed">
                      {sys.maintenance}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
