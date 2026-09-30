"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS, SITE_CONFIG } from "@/constants/data";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Phone, Mail, ShieldCheck, FileText, Menu, X, ArrowRight, PhoneCall } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant shadow-xs">
      {/* Top Technical Dispatch Bar */}
      <div className="bg-primary text-surface font-label-sm text-[11px] border-b border-primary-container px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto h-8 flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <ShieldCheck className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" />
            <span className="uppercase tracking-wider truncate">
              {SITE_CONFIG.tagline}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-inverse-primary">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-tertiary-fixed transition-colors"
            >
              <Phone className="w-3 h-3 text-tertiary-fixed" />
              <span>Direct Dispatch: {SITE_CONFIG.phone}</span>
            </a>
            <span className="border-r border-outline-variant/30 h-3" aria-hidden="true" />
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-1.5 hover:text-tertiary-fixed transition-colors"
            >
              <Mail className="w-3 h-3 text-tertiary-fixed" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <span className="border-r border-outline-variant/30 h-3" aria-hidden="true" />
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(
                    new CustomEvent("open-field-command-ai", { detail: { mode: "voice" } })
                  );
                }
              }}
              className="flex items-center gap-1.5 text-tertiary-fixed hover:text-white transition-colors cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-ping" />
              <span className="font-code-spec text-[10px]">AI Voice Dispatch: 24/7 ONLINE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-4 2xl:gap-5 h-full"
          aria-label="Main Navigation"
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
                className={`font-label-md uppercase tracking-wider text-[12px] py-2 transition-colors relative ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-on-tertiary-container"
                    : "text-on-surface-variant hover:text-primary"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Cluster */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="hidden lg:flex flex-col text-right">
            <span className="font-label-sm text-[11px] uppercase tracking-wider text-secondary">
              24/7 Field Command
            </span>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="font-title-md font-bold text-primary hover:text-secondary transition-colors"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>

          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-tertiary-container text-on-tertiary hover:bg-tertiary font-label-md uppercase tracking-wider px-4 py-2.5 rounded-none transition-colors items-center gap-2 border border-tertiary shadow-xs"
          >
            <FileText className="w-4 h-4 text-tertiary-fixed" />
            <span>{SITE_CONFIG.primaryCta}</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-primary hover:bg-surface-container transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-outline-variant shadow-lg animate-in slide-in-from-top duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <nav className="flex flex-col divide-y divide-outline-variant/30">
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
                    className={`py-3 font-title-md uppercase tracking-wider text-sm flex items-center justify-between ${
                      isActive
                        ? "text-primary font-bold pl-2 border-l-4 border-on-tertiary-container bg-surface-container-low"
                        : "text-on-surface-variant hover:text-primary hover:pl-2"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-secondary/60" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-outline-variant/40 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(
                      new CustomEvent("open-field-command-ai", { detail: { mode: "voice" } })
                    );
                  }
                }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-tertiary-container text-on-tertiary font-title-md text-sm uppercase tracking-wider border border-tertiary cursor-pointer shadow-xs font-bold"
              >
                <PhoneCall className="w-4 h-4 text-tertiary-fixed" />
                <span>Launch AI Voice Dispatch Call</span>
              </button>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-on-primary font-title-md text-sm uppercase tracking-wider font-bold"
              >
                <Phone className="w-4 h-4 text-tertiary-fixed" />
                <span>Call Field Command: {SITE_CONFIG.phone}</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-surface-container text-primary font-title-md text-sm uppercase tracking-wider border border-outline-variant/50 font-bold"
              >
                <FileText className="w-4 h-4 text-primary" />
                <span>{SITE_CONFIG.primaryCta}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
