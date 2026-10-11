"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/constants/data";
import { BrandLogo } from "@/components/ui/BrandLogo";
import {
  Phone,
  Mail,
  ShieldCheck,
  FileText,
  Menu,
  X,
  ArrowRight,
  PhoneCall,
  ChevronDown,
  Building2,
  Layers,
  Paintbrush,
  Activity,
} from "lucide-react";

const SYSTEM_MENU_ITEMS = [
  {
    label: "Commercial Roofing",
    href: "/commercial-roofing",
    spec: "SPEC: SYSTEM-01",
    desc: "New installations, complete tear-offs & structural deck replacement",
    icon: Building2,
  },
  {
    label: "Flat Roofing Systems",
    href: "/flat-roofing",
    spec: "SPEC: MEMBRANE-02",
    desc: "Single-ply TPO, PVC, EPDM rubber & multi-ply Modified Bitumen",
    icon: Layers,
  },
  {
    label: "Roof Coatings & Restoration",
    href: "/roof-coatings",
    spec: "SPEC: COATING-03",
    desc: "100% high-solids silicone & elastomeric seamless liquid membranes",
    icon: Paintbrush,
  },
  {
    label: "Maintenance Programs",
    href: "/maintenance",
    spec: "SPEC: LIFECYCLE-05",
    desc: "Preventative PMP tiers, thermal audits & 24/7 emergency dispatch",
    icon: Activity,
  },
];

const PRIMARY_DESKTOP_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries-served" },
  { label: "Certifications", href: "/certifications" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [systemsDropdownOpen, setSystemsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isSystemRouteActive = SYSTEM_MENU_ITEMS.some((item) =>
    pathname.startsWith(item.href)
  );

  useEffect(() => {
    setMobileMenuOpen(false);
    setSystemsDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSystemsDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSystemsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setSystemsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setSystemsDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant shadow-xs">
      {/* Top Technical Dispatch Bar */}
      <div className="w-full bg-primary text-surface font-label-sm text-[11px] border-b border-primary-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate min-w-0">
            <ShieldCheck className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" />
            <span className="uppercase tracking-wider truncate">
              {SITE_CONFIG.tagline}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-inverse-primary shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-tertiary-fixed transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-tertiary-fixed shrink-0" />
              <span>Direct Dispatch: {SITE_CONFIG.phone}</span>
            </a>
            <span className="border-r border-outline-variant/30 h-3" aria-hidden="true" />
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-tertiary-fixed transition-colors whitespace-nowrap"
            >
              <Mail className="w-3 h-3 text-tertiary-fixed shrink-0" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <span
              className="hidden lg:inline-block border-r border-outline-variant/30 h-3"
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("open-field-command-ai", {
                      detail: { mode: "voice" },
                    })
                  );
                }
              }}
              className="hidden lg:flex items-center gap-1.5 text-tertiary-fixed hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping shrink-0" />
              <span className="font-code-spec text-[10px]">
                AI Voice Dispatch: 24/7 ONLINE
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="w-full bg-surface-container-lowest">
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
          {/* Left: Brand Logo */}
          <BrandLogo />

          {/* Center: Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center justify-center gap-3.5 xl:gap-6 h-full"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              className={`font-title uppercase tracking-wider text-[11px] xl:text-xs py-2 whitespace-nowrap transition-colors relative shrink-0 ${
                pathname === "/"
                  ? "text-primary font-bold border-b-2 border-on-tertiary-container"
                  : "text-on-surface-variant font-semibold hover:text-primary"
              }`}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>

            {/* Roofing Systems Mega-Dropdown */}
            <div
              ref={dropdownRef}
              className="relative h-full flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setSystemsDropdownOpen((prev) => !prev)}
                className={`font-title uppercase tracking-wider text-[11px] xl:text-xs py-2 whitespace-nowrap transition-colors flex items-center gap-1 cursor-pointer shrink-0 ${
                  isSystemRouteActive
                    ? "text-primary font-bold border-b-2 border-on-tertiary-container"
                    : "text-on-surface-variant font-semibold hover:text-primary"
                }`}
                aria-expanded={systemsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Roofing Systems</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    systemsDropdownOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {systemsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-0 w-[540px] bg-surface-container-lowest border border-outline-variant shadow-xl z-50 p-4"
                  >
                    <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-outline-variant/60">
                      <span className="font-code-spec text-[10px] uppercase tracking-widest text-secondary">
                        COMMERCIAL ROOFING ASSEMBLIES & LIFECYCLE SPECS
                      </span>
                      <Link
                        href="/commercial-roofing"
                        onClick={() => setSystemsDropdownOpen(false)}
                        className="font-label-sm text-[10px] uppercase tracking-wider text-on-tertiary-container hover:underline flex items-center gap-1 font-bold"
                      >
                        <span>All Systems</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {SYSTEM_MENU_ITEMS.map((sys) => {
                        const Icon = sys.icon;
                        const isSubActive = pathname.startsWith(sys.href);
                        return (
                          <Link
                            key={sys.href}
                            href={sys.href}
                            onClick={() => setSystemsDropdownOpen(false)}
                            className={`group p-3 border transition-all duration-150 flex flex-col justify-between ${
                              isSubActive
                                ? "bg-surface-container-low border-on-tertiary-container"
                                : "bg-surface border-outline-variant/40 hover:border-primary hover:bg-surface-container-low hover:-translate-y-0.5"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <span className="font-code-spec text-[10px] text-secondary uppercase tracking-wider">
                                  {sys.spec}
                                </span>
                                <Icon className="w-4 h-4 text-on-tertiary-container shrink-0 group-hover:scale-110 transition-transform" />
                              </div>
                              <div className="font-title-md text-xs font-bold uppercase tracking-wider text-primary group-hover:text-on-tertiary-container transition-colors">
                                {sys.label}
                              </div>
                              <p className="font-body-sm text-[11px] text-on-surface-variant mt-1 leading-snug">
                                {sys.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    {/* Quick Secondary Links Bar inside Dropdown */}
                    <div className="mt-3 pt-2.5 border-t border-outline-variant/60 flex items-center justify-between text-[11px] bg-surface-container-low px-3 py-2">
                      <span className="font-label-sm text-secondary uppercase tracking-wider">
                        Need immediate leak or storm dispatch?
                      </span>
                      <a
                        href={`tel:${SITE_CONFIG.phoneRaw}`}
                        className="font-title-md font-bold text-primary hover:text-on-tertiary-container flex items-center gap-1"
                      >
                        <Phone className="w-3 h-3 text-on-tertiary-container" />
                        <span>{SITE_CONFIG.phone}</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {PRIMARY_DESKTOP_LINKS.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-title uppercase tracking-wider text-[11px] xl:text-xs py-2 whitespace-nowrap transition-colors relative shrink-0 ${
                    isActive
                      ? "text-primary font-bold border-b-2 border-on-tertiary-container"
                      : "text-on-surface-variant font-semibold hover:text-primary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA Cluster */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-flex bg-tertiary-container text-on-tertiary hover:bg-tertiary font-title uppercase tracking-wider text-[11px] xl:text-xs font-bold px-4 xl:px-5 py-2.5 rounded-none transition-all duration-200 hover:-translate-y-0.5 items-center gap-2 border border-tertiary shadow-xs whitespace-nowrap shrink-0"
            >
              <FileText className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" />
              <span>{SITE_CONFIG.primaryCta}</span>
            </Link>

            {/* Mobile/Tablet Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-primary hover:bg-surface-container transition-colors shrink-0 cursor-pointer border border-outline-variant/50"
              aria-label={
                mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-surface-container-lowest border-b border-outline-variant shadow-lg max-h-[calc(100vh-7rem)] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-3">
              <nav
                className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 divide-y sm:divide-y-0 divide-outline-variant/30"
                aria-label="Mobile Navigation"
              >
                {NAVIGATION_ITEMS.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-2.5 px-3 font-title-md uppercase tracking-wider text-xs sm:text-sm flex items-center justify-between transition-colors ${
                        isActive
                          ? "text-primary font-bold border-l-4 border-on-tertiary-container bg-surface-container-low"
                          : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low/50"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-secondary/60 shrink-0" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-outline-variant/40 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(
                        new CustomEvent("open-field-command-ai", {
                          detail: { mode: "voice" },
                        })
                      );
                    }
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-tertiary-container text-on-tertiary font-title-md text-xs uppercase tracking-wider border border-tertiary cursor-pointer shadow-xs font-bold"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" />
                  <span>AI Voice Dispatch</span>
                </button>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-primary text-on-primary font-title-md text-xs uppercase tracking-wider font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" />
                  <span>Call: {SITE_CONFIG.phone}</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 bg-surface-container text-primary font-title-md text-xs uppercase tracking-wider border border-outline-variant/50 font-bold"
                >
                  <FileText className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{SITE_CONFIG.primaryCta}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
