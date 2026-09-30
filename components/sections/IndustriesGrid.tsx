import React from "react";
import Link from "next/link";
import { INDUSTRIES_SERVED } from "@/constants/data";
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
} from "lucide-react";

interface IndustriesGridProps {
  showIntro?: boolean;
}

export function IndustriesGrid({ showIntro = true }: IndustriesGridProps) {
  const getIndustryIcon = (code: string) => {
    switch (code) {
      case "IND-01":
        return <Warehouse className="w-6 h-6" />;
      case "IND-02":
        return <Cog className="w-6 h-6" />;
      case "IND-03":
        return <Building className="w-6 h-6" />;
      case "IND-04":
        return <ShoppingCart className="w-6 h-6" />;
      case "IND-05":
        return <HeartPulse className="w-6 h-6" />;
      case "IND-06":
        return <Hotel className="w-6 h-6" />;
      case "IND-07":
        return <Home className="w-6 h-6" />;
      case "IND-08":
        return <GraduationCap className="w-6 h-6" />;
      case "IND-09":
        return <Landmark className="w-6 h-6" />;
      case "IND-10":
        return <Fuel className="w-6 h-6" />;
      default:
        return <Building className="w-6 h-6" />;
    }
  };

  return (
    <section className="w-full bg-surface py-16 lg:py-24" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {showIntro && (
          <div className="max-w-3xl mb-12 lg:mb-16">
            <span className="font-label-md uppercase tracking-widest text-secondary text-xs">
              Sector Competency
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Roofing Experience Across Multiple Industries
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 text-[15px] leading-relaxed">
              Each facility typology demands specific membrane specifications: from chemical exhaust resistance in heavy plants to acoustic serenity in healthcare environments.
            </p>
          </div>
        )}

        {/* 10-Item Structured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {INDUSTRIES_SERVED.map((ind) => (
            <div
              key={ind.id}
              className="bg-surface-container-lowest p-5 flex flex-col justify-between shadow-xs border border-outline-variant/30 hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-secondary mb-3">
                  {getIndustryIcon(ind.code)}
                  <span className="font-code-spec text-secondary text-xs font-semibold">
                    {ind.code}
                  </span>
                </div>
                <h4 className="font-title-md text-primary font-bold text-sm leading-snug">
                  {ind.title}
                </h4>
                <p className="font-body-sm text-on-surface-variant mt-2 leading-relaxed text-[12.5px]">
                  {ind.description}
                </p>
              </div>

              <div className="mt-5 pt-2.5 bg-surface-container-high px-2.5 py-1.5 border-l-2 border-primary">
                <span className="font-label-sm block text-secondary uppercase text-[10px] tracking-wider font-semibold">
                  OPTIMAL MATCH:
                </span>
                <span className="font-label-sm font-bold text-primary block text-[11px] truncate">
                  {ind.optimalMatch}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries-served"
            className="inline-flex items-center gap-2 font-title-md uppercase tracking-wider text-xs text-primary hover:text-secondary font-bold underline underline-offset-4"
          >
            <span>Explore All Industry Specifications & Case Studies</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
