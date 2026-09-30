"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/constants/data";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Building,
  Navigation,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    jobTitle: "",
    phone: "",
    email: "",
    propertyAddress: "",
    propertyType: "Warehouse",
    buildingSize: "150,000 - 500,000 sq. ft.",
    roofingService: "Commercial Roofing",
    projectTimeline: "1 - 3 Months",
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
      setTicketId(`PC-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 700);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Technical Breadcrumbs */}
      <div className="w-full bg-surface-container-high py-2 px-4 sm:px-6 lg:px-12 border-b border-outline-variant/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-code-spec text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-primary font-bold uppercase tracking-wider">COMMAND DISPATCH</span>
            <span>/</span>
            <span className="text-secondary font-medium">COMMERCIAL ESTIMATION & SPECIFICATION REQUEST</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface text-primary border border-outline-variant/30 font-label-sm uppercase text-[10px] font-bold">
              24/7 RAPID DISPATCH ACTIVE
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Info + Contact Form */}
      <section className="w-full bg-surface py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Field Command Information & Architectural Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="font-label-md uppercase tracking-wider text-secondary text-xs">
                  DIRECT CORPORATE COMMUNICATIONS
                </span>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                  Request a Commercial Roofing Specification
                </h1>
                <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
                  Engage our systems engineering team directly. We provide unbiased diagnostics, drone thermal photography, and formal project take-offs for enterprise facility operators.
                </p>
              </div>

              {/* Contact Card Stack */}
              <div className="space-y-4">
                {/* AI Voice & Chat Dispatch Fast-Track Card */}
                <div className="p-5 bg-primary text-surface border border-primary-container shadow-md space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-code-spec text-[10px] text-tertiary-fixed font-bold tracking-widest uppercase flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping" />
                      AI FIELD COMMAND DISPATCH 24/7
                    </span>
                    <span className="font-label-sm text-[10px] text-inverse-primary">WAIT TIME: 0 SEC</span>
                  </div>
                  <h3 className="font-title-md font-bold text-surface text-base">
                    Instant AI Voice Call & Live Booking
                  </h3>
                  <p className="font-body-sm text-inverse-primary text-xs leading-relaxed">
                    Prefer speaking instead of typing? Connect to our live AI Field Command Dispatcher to report active leaks, schedule non-destructive core tests, or book an inspection in under 2 minutes.
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(
                            new CustomEvent("open-field-command-ai", { detail: { mode: "voice" } })
                          );
                        }
                      }}
                      className="px-4 py-2.5 bg-tertiary-container hover:bg-tertiary text-on-tertiary font-title-md uppercase text-xs tracking-wider font-bold inline-flex items-center gap-2 border border-tertiary cursor-pointer transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-tertiary-fixed" />
                      <span>Start AI Voice Call</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(
                            new CustomEvent("open-field-command-ai", { detail: { mode: "chat" } })
                          );
                        }
                      }}
                      className="px-4 py-2.5 bg-surface-container-lowest text-primary hover:bg-surface-container-high font-title-md uppercase text-xs tracking-wider font-bold inline-flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-primary" />
                      <span>AI Chat Booking</span>
                    </button>
                  </div>
                </div>

                <div className="p-5 bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <Phone className="w-4 h-4 text-on-tertiary-container" />
                    <span>Direct Telephone Line & Emergency Dispatch</span>
                  </div>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="font-headline-sm text-primary font-bold block text-xl hover:text-secondary transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                  <p className="text-xs text-secondary">{SITE_CONFIG.dispatchHours}</p>
                </div>

                <div className="p-5 bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <Mail className="w-4 h-4 text-on-tertiary-container" />
                    <span>Corporate Correspondence Email</span>
                  </div>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-title-md text-primary font-bold block hover:text-secondary transition-colors text-base"
                  >
                    {SITE_CONFIG.email}
                  </a>
                  <p className="text-xs text-secondary">Formal RFPs, submittals, and specifications</p>
                </div>

                <div className="p-5 bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-on-tertiary-container" />
                    <span>National Headquarters & Fabrication Facility</span>
                  </div>
                  <p className="font-title-md text-primary font-bold text-sm">
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.suite}
                  </p>
                  <p className="text-xs text-secondary">
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}
                  </p>
                </div>

                <div className="p-5 bg-surface-container-lowest border border-outline-variant/30 shadow-xs space-y-1">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <Clock className="w-4 h-4 text-on-tertiary-container" />
                    <span>Corporate Hours of Operation</span>
                  </div>
                  <p className="font-title-md text-primary font-bold text-sm">
                    {SITE_CONFIG.hours}
                  </p>
                  <p className="text-xs text-on-tertiary-container font-semibold">
                    *24/7 Field Strike Dispatch is always on duty for active breaches
                  </p>
                </div>
              </div>

              {/* Map Section Placeholder with Architectural Coordinates */}
              <div className="bg-surface-container-lowest p-5 border border-outline-variant/30 shadow-xs space-y-3">
                <div className="flex items-center justify-between font-label-sm text-secondary text-xs">
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-primary" />
                    DISPATCH RADIUS & FIELD HQ
                  </span>
                  <span className="font-code-spec">32°48&apos;36&quot;N 96°52&apos;48&quot;W</span>
                </div>

                {/* Visual Architectural Map Representation */}
                <div className="relative w-full h-48 bg-primary-container overflow-hidden flex items-center justify-center border border-primary text-center p-4">
                  {/* Grid background simulation */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#324861_1px,transparent_1px),linear-gradient(to_bottom,#324861_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
                  
                  <div className="relative z-10 space-y-2">
                    <div className="w-10 h-10 bg-primary border-2 border-tertiary-fixed rounded-full flex items-center justify-center mx-auto text-tertiary-fixed shadow-md">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-title-md font-bold text-surface text-sm">
                        ProCore Central Logistics & Engineering Hub
                      </p>
                      <p className="text-[11px] text-inverse-primary">
                        Regional staging yards & mobile strike units positioned nationwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full B2B Commercial Specification Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 lg:p-10 shadow-sm border border-outline-variant/40">
              {isSuccess ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto text-on-tertiary-container">
                    <CheckCircle2 className="w-10 h-10 text-on-tertiary-container" />
                  </div>
                  <h3 className="font-headline-sm text-primary font-bold text-2xl">
                    Commercial Proposal Request Received
                  </h3>
                  <div className="p-3 bg-surface-container font-code-spec text-xs inline-block">
                    CONFIRMATION TICKET: <span className="font-bold text-primary">{ticketId}</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant max-w-lg mx-auto text-sm leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. We have logged your request for <strong>{formData.company || "your facility"}</strong>. An engineering manager is reviewing your building footprint ({formData.buildingSize}) and will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: "",
                        company: "",
                        jobTitle: "",
                        phone: "",
                        email: "",
                        propertyAddress: "",
                        propertyType: "Warehouse",
                        buildingSize: "150,000 - 500,000 sq. ft.",
                        roofingService: "Commercial Roofing",
                        projectTimeline: "1 - 3 Months",
                        message: "",
                      });
                    }}
                    className="px-6 py-3 bg-primary text-on-primary font-title-md uppercase tracking-wider text-xs font-bold hover:bg-secondary transition-colors"
                  >
                    Submit Another Facility Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-2 border-b border-outline-variant/30">
                    <h2 className="font-headline-sm text-primary font-bold text-xl">
                      Commercial Scope & Quote Request
                    </h2>
                    <p className="font-body-sm text-on-surface-variant text-xs mt-0.5">
                      Please provide preliminary facility details. All information is protected under standard non-disclosure confidentiality.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rachel Sterling"
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Industrial Logistics LLC"
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 2: Job Title & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        placeholder="e.g. Director of Asset Management"
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
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
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 3: Corporate Email & Property Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="r.sterling@apexindustrial.com"
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                        Property Address / Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.propertyAddress}
                        onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                        placeholder="e.g. 10400 Highway 290, Austin, TX"
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Row 4: Property Type & Building Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                        Property Type *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                      >
                        <option>Warehouse & Distribution</option>
                        <option>Manufacturing & Industrial</option>
                        <option>Class-A Office Building</option>
                        <option>Retail Center / Big-Box</option>
                        <option>Healthcare & Hospital Complex</option>
                        <option>Hospitality & Resort</option>
                        <option>Multi-Family Complex</option>
                        <option>Higher Education Campus</option>
                        <option>Government / Municipal Facility</option>
                        <option>Other Commercial</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                        Approximate Building Size *
                      </label>
                      <select
                        value={formData.buildingSize}
                        onChange={(e) => setFormData({ ...formData, buildingSize: e.target.value })}
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                      >
                        <option>Under 20,000 sq. ft.</option>
                        <option>20,000 - 50,000 sq. ft.</option>
                        <option>50,000 - 150,000 sq. ft.</option>
                        <option>150,000 - 500,000 sq. ft.</option>
                        <option>500,000+ sq. ft. (Multi-facility portfolio)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Roofing Service & Project Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                        Roofing Service Required *
                      </label>
                      <select
                        value={formData.roofingService}
                        onChange={(e) => setFormData({ ...formData, roofingService: e.target.value })}
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                      >
                        <option>Commercial Roofing (Tear-off / New)</option>
                        <option>Flat Roofing (Single-Ply TPO/EPDM/PVC)</option>
                        <option>Roof Coatings (Liquid Silicone / Restoration)</option>
                        <option>Preventative Maintenance Program (PMP)</option>
                        <option>Roof Restoration & Leak Audit</option>
                        <option>Forensic Core & Infrared Inspection</option>
                        <option>Emergency Active Breach Dispatch</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                        Project Timeline
                      </label>
                      <select
                        value={formData.projectTimeline}
                        onChange={(e) => setFormData({ ...formData, projectTimeline: e.target.value })}
                        className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                      >
                        <option>Immediate / Emergency Active Leak</option>
                        <option>Within 30 Days</option>
                        <option>1 - 3 Months</option>
                        <option>Next Quarter (CapEx Planning)</option>
                        <option>Next Fiscal Year Budget</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 6: Project Scope Message */}
                  <div className="space-y-1">
                    <label className="font-label-sm uppercase tracking-wider text-secondary block text-[11px] font-semibold">
                      Scope Overview & Special Operational Constraints
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please note existing membrane type (if known), active leak locations, interior staging restrictions, crane access limitations, or warranty goals..."
                      className="w-full bg-surface-container-lowest px-3.5 py-2.5 font-body-sm text-sm text-primary border border-outline-variant/60 focus:outline-none focus:border-primary shadow-xs"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-tertiary text-on-tertiary hover:bg-primary font-title-md uppercase tracking-wider py-4 transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer font-bold text-xs"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-tertiary-fixed" />
                          <span>Processing Commercial Intake...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4 text-tertiary-fixed" />
                          <span>Dispatch Commercial Specification Request</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="font-label-sm text-center text-on-surface-variant text-[11px]">
                    ProCore respects corporate privacy. Information transmitted is strictly utilized for engineering project estimation and is never sold or shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
