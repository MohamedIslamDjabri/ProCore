"use client";

import React, { useState } from "react";
import { FileText, Download, CheckCircle2, Sliders, Check } from "lucide-react";

export function DownloadProfileSection() {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    // Trigger real download of PDF
    const link = document.createElement("a");
    link.href = "/documents/procore-enterprise-profile.pdf";
    link.download = "ProCore-Commercial-Roofing-Enterprise-Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full bg-surface-container-high py-16 lg:py-20 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-surface-container-lowest p-6 sm:p-8 lg:p-12 shadow-sm border border-outline-variant/30 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left: Spec Sheet Overview */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-surface-container text-secondary px-3 py-1 font-label-sm uppercase tracking-wider text-xs">
              <FileText className="w-3.5 h-3.5 text-secondary" />
              <span>Enterprise Documentation // Rev 2024.3</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold">
              Download ProCore Commercial Roofing Enterprise Profile
            </h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">
              A comprehensive 24-page technical guide for property asset managers, detailing our membrane assemblies, FM Global ratings, warranty underwriting specifications, and past project case studies.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-secondary font-code-spec text-xs">
              <span className="flex items-center gap-1.5 font-medium">
                <FileText className="w-3.5 h-3.5 text-primary" /> PDF (14.2 MB)
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-3.5 h-3.5 text-primary" /> FULL CAD DETAILS
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Sliders className="w-3.5 h-3.5 text-primary" /> SPEC GUIDE 07 50 00
              </span>
            </div>
          </div>

          {/* Right: Download Action Card / Form Input */}
          <div className="w-full lg:w-auto shrink-0 bg-surface-container-low p-4 sm:p-5 border border-outline-variant/40">
            {downloaded ? (
              <div className="text-center p-3 space-y-2">
                <div className="inline-flex items-center gap-2 text-tertiary-container font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-on-tertiary-container" />
                  <span>Dossier Dispatched Successfully</span>
                </div>
                <p className="text-xs text-on-surface-variant max-w-xs">
                  Your PDF download has started. A permanent copy has also been sent to your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDownload} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  aria-label="Work Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="facility.manager@enterprise.com"
                  required
                  className="w-full sm:w-72 px-4 py-3 bg-surface-container-lowest text-primary font-body-sm text-sm border border-outline-variant/50 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-on-primary hover:bg-secondary font-title-md uppercase tracking-wider text-xs transition-colors shrink-0 font-bold"
                >
                  <Download className="w-4 h-4 text-tertiary-fixed" />
                  <span>Download Spec Profile</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
