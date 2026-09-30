"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/constants/data";
import {
  CheckSquare,
  ShieldCheck,
  Send,
  Building,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Loader2,
} from "lucide-react";

interface ConsultationQuoteFormProps {
  id?: string;
  defaultService?: string;
  title?: string;
  subtitle?: string;
}

export function ConsultationQuoteForm({
  id = "consultation",
  defaultService,
  title = "Schedule a Flat Roof Diagnostic & Engineering Review",
  subtitle = "Receive an objective, data-backed assessment of your commercial roof inventory. Our engineering team conducts core samples, infrared thermographic moisture mapping, and load calculations to provide precise specification dossiers.",
}: ConsultationQuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    sqft: "150,000 - 500,000 sq. ft.",
    locationAndExisting: "",
    propertyType: "Warehouse",
    service: defaultService || "Commercial Roofing",
    scopes: {
      leakDiagnostic: true,
      fullReplacement: false,
      restorationCoating: false,
      ndlWarranty: true,
    },
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomId = `PC-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(randomId);
    }, 700);
  };

  return (
    <section
      className="w-full bg-primary-container text-on-primary py-16 lg:py-24 border-t border-primary/40"
      id={id}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Direct Dispatch & Trust Protocol */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 font-label-sm text-tertiary-fixed uppercase tracking-wider text-xs">
            <span className="w-2 h-2 bg-tertiary-fixed inline-block"></span>
            <span>DIRECT ENGINEERING DISPATCH</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg lg:text-4xl tracking-tight text-surface font-bold">
            {title}
          </h2>
          <p className="font-body-lg text-inverse-primary leading-relaxed text-[16px]">
            {subtitle}
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3 text-surface">
              <CheckSquare className="w-5 h-5 text-tertiary-fixed shrink-0 mt-0.5" />
              <span className="font-body-md text-sm sm:text-base">
                Thermal infrared moisture detection with verified pinpoint mapping
              </span>
            </div>
            <div className="flex items-start gap-3 text-surface">
              <CheckSquare className="w-5 h-5 text-tertiary-fixed shrink-0 mt-0.5" />
              <span className="font-body-md text-sm sm:text-base">
                Substrate integrity analysis & fastener pull tests to ANSI/SPRI standards
              </span>
            </div>
            <div className="flex items-start gap-3 text-surface">
              <CheckSquare className="w-5 h-5 text-tertiary-fixed shrink-0 mt-0.5" />
              <span className="font-body-md text-sm sm:text-base">
                Manufacturer NDL warranty eligibility review & life-cycle CapEx forecast
              </span>
            </div>
          </div>

          <div className="p-4 bg-primary/60 border border-primary-container/80 space-y-2 text-xs text-inverse-primary">
            <div className="flex items-center gap-2 text-tertiary-fixed font-bold">
              <Phone className="w-4 h-4" />
              <span>Direct Emergency Dispatch Line: {SITE_CONFIG.phone}</span>
            </div>
            <p>Field supervisors on call 24 hours a day for mission-critical roof failure stabilization.</p>
          </div>
        </div>

        {/* Right Column: Commercial Quote Form */}
        <div className="lg:col-span-6 bg-surface p-6 sm:p-8 lg:p-10 shadow-xl text-on-surface border border-outline-variant/40">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto text-on-tertiary-container">
                <CheckCircle2 className="w-10 h-10 text-on-tertiary-container" />
              </div>
              <h3 className="font-headline-sm text-primary font-bold text-xl">
                Commercial Specification Request Confirmed
              </h3>
              <div className="p-3 bg-surface-container-low border border-outline-variant/40 font-code-spec text-xs inline-block">
                DISPATCH ID: <span className="text-primary font-bold">{ticketId}</span>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. A ProCore Senior Commercial Systems Engineer has been assigned to your facility profile and will reach out to you within 4 business hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    sqft: "150,000 - 500,000 sq. ft.",
                    locationAndExisting: "",
                    propertyType: "Warehouse",
                    service: defaultService || "Commercial Roofing",
                    scopes: {
                      leakDiagnostic: true,
                      fullReplacement: false,
                      restorationCoating: false,
                      ndlWarranty: true,
                    },
                    message: "",
                  });
                }}
                className="mt-4 px-6 py-2.5 bg-primary text-on-primary font-title-md uppercase tracking-wider text-xs hover:bg-secondary transition-colors"
              >
                Submit Another Specification
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="pb-1 border-b border-outline-variant/30">
                <h3 className="font-headline-sm text-primary font-bold text-lg">
                  Flat Roofing & Commercial Consultation Request
                </h3>
                <span className="font-body-sm text-on-surface-variant text-xs">
                  Enterprise facility managers, property asset directors & general contractors
                </span>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Thomas Vance"
                    className="w-full bg-surface-container-lowest px-3 py-2 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                    Direct Business Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full bg-surface-container-lowest px-3 py-2 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                  />
                </div>
              </div>

              {/* Email & Sq Ft */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tvance@enterprise.com"
                    className="w-full bg-surface-container-lowest px-3 py-2 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                    Facility Square Footage *
                  </label>
                  <select
                    value={formData.sqft}
                    onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                    className="w-full bg-surface-container-lowest px-3 py-2 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                  >
                    <option>20,000 - 50,000 sq. ft.</option>
                    <option>50,000 - 150,000 sq. ft.</option>
                    <option>150,000 - 500,000 sq. ft.</option>
                    <option>500,000+ sq. ft. (Multi-facility portfolio)</option>
                  </select>
                </div>
              </div>

              {/* Facility Location & Existing Roof Type */}
              <div className="space-y-1">
                <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                  Facility Location & Existing Roof Type
                </label>
                <input
                  type="text"
                  value={formData.locationAndExisting}
                  onChange={(e) => setFormData({ ...formData, locationAndExisting: e.target.value })}
                  placeholder="e.g. Austin Logistics Park, TX | Existing 45-mil TPO"
                  className="w-full bg-surface-container-lowest px-3 py-2 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                />
              </div>

              {/* Scope Requirements Checkboxes */}
              <div className="space-y-1.5 pt-1">
                <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                  Scope Requirements
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs text-on-surface">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.scopes.leakDiagnostic}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          scopes: { ...formData.scopes, leakDiagnostic: e.target.checked },
                        })
                      }
                      className="w-4 h-4 accent-primary"
                    />
                    <span>Core Leak Diagnostic</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.scopes.fullReplacement}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          scopes: { ...formData.scopes, fullReplacement: e.target.checked },
                        })
                      }
                      className="w-4 h-4 accent-primary"
                    />
                    <span>Full System Replacement</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.scopes.restorationCoating}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          scopes: { ...formData.scopes, restorationCoating: e.target.checked },
                        })
                      }
                      className="w-4 h-4 accent-primary"
                    />
                    <span>Restoration / Coating</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.scopes.ndlWarranty}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          scopes: { ...formData.scopes, ndlWarranty: e.target.checked },
                        })
                      }
                      className="w-4 h-4 accent-primary"
                    />
                    <span>30-Yr NDL Warranty</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-tertiary text-on-tertiary hover:bg-primary font-title-md uppercase tracking-wider py-3.5 transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer font-bold text-xs"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-tertiary-fixed" />
                      <span>Transmitting Dossier...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4 text-tertiary-fixed" />
                      <span>Confirm Diagnostic Booking</span>
                    </>
                  )}
                </button>
              </div>

              <p className="font-label-sm text-center text-on-surface-variant text-[11px] leading-tight">
                Data protected under strict corporate NDA standards. Engineering reports dispatched to verified corporate representatives only.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
