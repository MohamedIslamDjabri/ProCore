import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WHY_PROCORE_FEATURES, SITE_CONFIG } from "@/constants/data";
import {
  ShieldCheck,
  HardHat,
  SearchCheck,
  Award,
  Share2,
  Wrench,
  VolumeX,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export function WhyProCoreSection() {
  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-tertiary-container shrink-0" />;
      case 1:
        return <HardHat className="w-5 h-5 text-tertiary-container shrink-0" />;
      case 2:
        return <SearchCheck className="w-5 h-5 text-tertiary-container shrink-0" />;
      case 3:
        return <Award className="w-5 h-5 text-tertiary-container shrink-0" />;
      case 4:
        return <Share2 className="w-5 h-5 text-tertiary-container shrink-0" />;
      case 5:
        return <Wrench className="w-5 h-5 text-tertiary-container shrink-0" />;
      case 6:
        return <VolumeX className="w-5 h-5 text-tertiary-container shrink-0" />;
      case 7:
        return <TrendingUp className="w-5 h-5 text-tertiary-container shrink-0" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-tertiary-container shrink-0" />;
    }
  };

  return (
    <section className="w-full bg-surface-container-low py-16 lg:py-24 border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Rooftop Engineering & Spec Report */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden bg-primary-container shadow-md border border-outline-variant/40">
              <div className="relative w-full h-[420px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd5LX-AVqX_r_NQDYXQNZOSNavB0hr6t0EqdLNMX7sc5hoei3ea94qHZRzatS0AR8sbuc-D9tNPhe26CLuKK-WQQ9cpgihU0ujNWumtxmAIBVXeS3Z751-jmZeKyf7EMhGqUusv0uG1Y5i-xyWdwM7XLVDxPFoDNRV04RwfC1O85F0xX4-1rqG5X9JxDyFfoz6njy1lEsNOMNNqqKmFDciN7EkAJoCMIhF9G6g-3NzJtnhYYDSpSps"
                  alt="Close up architectural detail of commercial rooftop construction showing workers in safety harnesses welding white TPO seams with precision equipment alongside large industrial HVAC chillers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Technical Specs Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md p-4 shadow-sm border border-outline-variant/40">
                <div className="flex items-center justify-between pb-1.5 mb-2 bg-surface-container-high px-2.5 py-1">
                  <span className="font-code-spec font-bold text-primary text-xs">
                    ON-SITE QUALITY INSPECTION REPORT
                  </span>
                  <span className="font-code-spec text-secondary text-xs font-bold">
                    PASS 100%
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 font-label-sm text-on-surface-variant text-[11px]">
                  <div>
                    SEAM INTEGRITY:{" "}
                    <span className="font-bold text-primary">2.0” PROBE OK</span>
                  </div>
                  <div>
                    PEEL STRENGTH:{" "}
                    <span className="font-bold text-primary">&gt; 15 LBS/IN</span>
                  </div>
                  <div>
                    SLOPE ALIGNMENT:{" "}
                    <span className="font-bold text-primary">0.25 IN/FT VERIFIED</span>
                  </div>
                  <div>
                    DECK FASTENING:{" "}
                    <span className="font-bold text-primary">1 PER 2 SQ FT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Material Partnership Badges */}
            <div className="bg-surface-container-lowest p-5 shadow-xs border border-outline-variant/30">
              <span className="font-label-sm uppercase tracking-widest text-secondary block mb-3 text-xs font-semibold">
                Authorized Elite Master Applicator For:
              </span>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-surface-container font-title-md text-primary font-bold text-sm tracking-wider">
                  CARLISLE
                </div>
                <div className="p-3 bg-surface-container font-title-md text-primary font-bold text-sm tracking-wider">
                  GAF COMM
                </div>
                <div className="p-3 bg-surface-container font-title-md text-primary font-bold text-sm tracking-wider">
                  ELEVATE
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & 8 Architectural Features */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-label-md uppercase tracking-widest text-secondary text-xs">
                Operational Distinction
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
                A Roofing Partner Built Around Your Business
              </h2>
              <p className="font-body-md text-on-surface-variant mt-2 text-[15px] leading-relaxed">
                Industrial assets demand zero production interruption, absolute financial transparency, and unyielding field safety standards.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_PROCORE_FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest p-4 lg:p-5 shadow-xs border border-outline-variant/25 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      {getFeatureIcon(idx)}
                      <h4 className="font-title-md font-bold text-sm">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="font-body-sm text-on-surface-variant leading-relaxed text-[13px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-primary text-on-primary hover:bg-secondary font-title-md uppercase tracking-wider text-xs transition-colors shadow-xs"
              >
                <span>{SITE_CONFIG.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 text-tertiary-fixed" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
