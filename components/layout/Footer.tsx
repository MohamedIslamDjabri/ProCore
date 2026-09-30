import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/data";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="w-full bg-primary text-surface border-t border-primary-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 border-b border-primary-container pb-12">
          {/* Col 1: Brand & Corp ID */}
          <div className="space-y-4">
            <BrandLogo variant="white" />
            <p className="font-body-sm text-inverse-primary leading-relaxed">
              Engineered roofing and waterproofing assemblies designed for mission-critical commercial, industrial, and institutional facilities nationwide.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="font-label-sm text-tertiary-fixed bg-tertiary px-2 py-0.5 border border-tertiary-fixed/30 tracking-wider">
                CORP ID: {SITE_CONFIG.corpId}
              </span>
            </div>
            <div className="text-xs text-inverse-primary/80 pt-2 space-y-1">
              <p>{SITE_CONFIG.address.street}, {SITE_CONFIG.address.suite}</p>
              <p>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.zip}</p>
              <p>Direct: <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-tertiary-fixed hover:underline">{SITE_CONFIG.phone}</a></p>
            </div>
          </div>

          {/* Col 2: Commercial Systems */}
          <div className="space-y-3">
            <h3 className="font-title-md uppercase tracking-wider text-surface-container-high border-b border-primary-container pb-2 text-sm">
              Commercial Systems
            </h3>
            <ul className="space-y-2 font-body-sm text-inverse-primary">
              <li>
                <Link href="/commercial-roofing" className="hover:text-tertiary-fixed transition-colors">
                  TPO Single-Ply Assemblies
                </Link>
              </li>
              <li>
                <Link href="/flat-roofing" className="hover:text-tertiary-fixed transition-colors">
                  EPDM Heavy Industrial Systems
                </Link>
              </li>
              <li>
                <Link href="/roof-coatings" className="hover:text-tertiary-fixed transition-colors">
                  Silicone & Elastomeric Coatings
                </Link>
              </li>
              <li>
                <Link href="/flat-roofing" className="hover:text-tertiary-fixed transition-colors">
                  Modified Bitumen Multi-Ply
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="hover:text-tertiary-fixed transition-colors">
                  Preventative Maintenance Programs
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-tertiary-fixed transition-colors">
                  Enterprise Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Target Industries */}
          <div className="space-y-3">
            <h3 className="font-title-md uppercase tracking-wider text-surface-container-high border-b border-primary-container pb-2 text-sm">
              Target Industries
            </h3>
            <ul className="space-y-2 font-body-sm text-inverse-primary">
              <li>
                <Link href="/industries-served" className="hover:text-tertiary-fixed transition-colors">
                  Manufacturing & Logistics Hubs
                </Link>
              </li>
              <li>
                <Link href="/industries-served" className="hover:text-tertiary-fixed transition-colors">
                  Cold Storage & Food Processing
                </Link>
              </li>
              <li>
                <Link href="/industries-served" className="hover:text-tertiary-fixed transition-colors">
                  Healthcare & Hospital Complexes
                </Link>
              </li>
              <li>
                <Link href="/industries-served" className="hover:text-tertiary-fixed transition-colors">
                  Commercial Office Parks
                </Link>
              </li>
              <li>
                <Link href="/industries-served" className="hover:text-tertiary-fixed transition-colors">
                  Federal & Municipal Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-tertiary-fixed transition-colors">
                  Safety Protocols & Standards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Field Compliance */}
          <div className="space-y-3">
            <h3 className="font-title-md uppercase tracking-wider text-surface-container-high border-b border-primary-container pb-2 text-sm">
              Field Compliance
            </h3>
            <div className="grid grid-cols-1 gap-2 font-label-sm">
              <div className="p-2 border border-primary-container bg-primary-container/40 text-inverse-primary flex items-center justify-between">
                <span>NRCA MASTER CONTRACTOR</span>
                <span className="text-tertiary-fixed font-bold">ACTIVE</span>
              </div>
              <div className="p-2 border border-primary-container bg-primary-container/40 text-inverse-primary flex items-center justify-between">
                <span>OSHA VPP STAR STANDARD</span>
                <span className="text-tertiary-fixed font-bold">100%</span>
              </div>
              <div className="p-2 border border-primary-container bg-primary-container/40 text-inverse-primary flex items-center justify-between">
                <span>ISO 9001:2015 CERTIFIED</span>
                <span className="text-tertiary-fixed font-bold">VERIFIED</span>
              </div>
              <div className="p-2 border border-primary-container bg-primary-container/40 text-inverse-primary flex items-center justify-between">
                <span>FM GLOBAL CLASS 1 APPROVED</span>
                <span className="text-tertiary-fixed font-bold">SH-1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-inverse-primary text-xs">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.name} Enterprise Inc. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-inverse-primary/70">Strict 0.25/12 Slope Architectural Standards</span>
            <Link href="/about" className="hover:text-tertiary-fixed transition-colors">
              About ProCore
            </Link>
            <Link href="/certifications" className="hover:text-tertiary-fixed transition-colors">
              Master Warranties
            </Link>
            <Link href="/contact" className="hover:text-tertiary-fixed transition-colors">
              Direct Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
