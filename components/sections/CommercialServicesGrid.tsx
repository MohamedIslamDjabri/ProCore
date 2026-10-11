import React from "react";
import Link from "next/link";
import { COMMERCIAL_SERVICES } from "@/constants/data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionPrimitives";
import {
  Building2,
  Layers,
  Paintbrush,
  RefreshCw,
  Activity,
  AlertTriangle,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

interface ServicesGridProps {
  heading?: string;
  subheading?: string;
  showAll?: boolean;
}

export function CommercialServicesGrid({
  heading = "Commercial Roofing Services",
  subheading = "Engineered building envelope systems, restorative chemistry, and structured maintenance frameworks calibrated strictly to facility operational realities.",
}: ServicesGridProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case "comm-roofing":
        return <Building2 className="w-7 h-7 text-primary group-hover:text-on-tertiary-container transition-colors" />;
      case "flat-roofing":
        return <Layers className="w-7 h-7 text-primary group-hover:text-on-tertiary-container transition-colors" />;
      case "roof-coatings":
        return <Paintbrush className="w-7 h-7 text-primary group-hover:text-on-tertiary-container transition-colors" />;
      case "roof-restoration":
        return <RefreshCw className="w-7 h-7 text-primary group-hover:text-on-tertiary-container transition-colors" />;
      case "maintenance":
        return <Activity className="w-7 h-7 text-primary group-hover:text-on-tertiary-container transition-colors" />;
      case "emergency":
        return <AlertTriangle className="w-7 h-7 text-primary group-hover:text-error transition-colors" />;
      default:
        return <Building2 className="w-7 h-7 text-primary" />;
    }
  };

  return (
    <section className="w-full bg-surface py-16 lg:py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <span className="font-label-md uppercase tracking-widest text-secondary text-xs">
              Primary Systems & Capabilities
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              {heading}
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 max-w-2xl text-[15px] leading-relaxed">
              {subheading}
            </p>
          </div>
          <div className="font-code-spec text-secondary uppercase tracking-wider bg-surface-container-high px-3 py-1.5 shrink-0 self-start md:self-auto text-xs font-semibold">
            STANDARD: ASTM // FM 1-90 // UL CLASS A
          </div>
        </FadeIn>

        {/* 6 Technical Service Cards */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {COMMERCIAL_SERVICES.map((service) => {
            const isEmergency = service.id === "emergency";

            return (
              <StaggerItem
                key={service.id}
                className="bg-surface-container-lowest p-6 lg:p-8 flex flex-col justify-between shadow-xs border border-outline-variant/30 hover:border-primary/40 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              >
                {/* Top animated architectural accent line on hover */}
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-on-tertiary-container group-hover:w-full transition-all duration-500 ease-out" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-code-spec text-xs px-2.5 py-1 uppercase tracking-wider font-semibold ${
                        isEmergency
                          ? "text-error bg-error-container/60"
                          : "text-secondary bg-surface-container"
                      }`}
                    >
                      {service.specCode}
                    </span>
                    <div className="p-2 bg-surface-container-low group-hover:bg-surface-container transition-colors">
                      {getIcon(service.id)}
                    </div>
                  </div>

                  <h3 className="font-title-lg text-lg text-primary font-bold group-hover:text-on-tertiary-container transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant mt-3 leading-relaxed text-[14px]">
                    {service.shortDesc}
                  </p>

                  <div className="mt-6 space-y-2 bg-surface-container-low p-3.5 border-l-2 border-primary group-hover:border-on-tertiary-container transition-colors">
                    {service.specs.map((spec, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between font-label-sm text-[11px]"
                      >
                        <span className="text-secondary font-medium">{spec.label}</span>
                        <span className="font-bold text-primary">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-outline-variant/30">
                  <Link
                    href={service.slug}
                    className="inline-flex items-center justify-between w-full font-label-md uppercase tracking-wider text-xs text-primary hover:text-secondary group/link transition-colors font-bold"
                  >
                    <span>{service.ctaLabel}</span>
                    {isEmergency ? (
                      <PhoneCall className="w-4 h-4 text-primary group-hover/link:translate-x-0.5 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 text-primary group-hover/link:translate-x-1.5 transition-transform" />
                    )}
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
