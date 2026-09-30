"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/data";
import { Phone, FileText } from "lucide-react";

export function MobileStickyCta() {
  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest border-t border-outline-variant/60 shadow-lg px-3 py-2.5 flex items-center gap-2"
    >
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-primary text-on-primary font-title-md text-xs uppercase tracking-wider transition-colors active:bg-secondary"
      >
        <Phone className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" />
        <span className="truncate">Call (555) 804-CORE</span>
      </a>
      <Link
        href="/contact"
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-tertiary-container text-on-tertiary font-title-md text-xs uppercase tracking-wider border border-tertiary transition-colors active:bg-tertiary"
      >
        <FileText className="w-3.5 h-3.5 text-tertiary-fixed shrink-0" />
        <span className="truncate">Request Quote</span>
      </Link>
    </aside>
  );
}
