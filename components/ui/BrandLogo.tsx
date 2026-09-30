import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function BrandLogo({ variant = "default", className = "" }: BrandLogoProps) {
  const isWhite = variant === "white";

  return (
    <Link
      href="/"
      className={`flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
      aria-label="ProCore Commercial Roofing - Home"
    >
      {/* SVG Icon */}
      <svg
        className="h-8 w-auto shrink-0"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g id="logo-mark">
          {/* Main roof apex */}
          <path
            d="M8 46L30 12L52 46H41L30 28L19 46H8Z"
            fill={isWhite ? "#9CF2E8" : "#0F766E"}
          />
          {/* Overlapping structural truss */}
          <path
            d="M30 18L48 46H58L37 12L30 18Z"
            fill={isWhite ? "#80D5CB" : "#243B53"}
          />
          {/* Structural core anchor */}
          <rect
            x="25"
            y="32"
            width="10"
            height="14"
            fill={isWhite ? "#FFFFFF" : "#1F2933"}
          />
          {/* Base foundation line */}
          <path
            d="M4 50H60V53H4V50Z"
            fill={isWhite ? "#74777C" : "#CBD5DC"}
          />
        </g>
      </svg>

      {/* Brand Text Stack */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-display text-lg font-bold tracking-tight leading-none ${
            isWhite ? "text-white" : "text-primary"
          }`}
        >
          Pro<span className={isWhite ? "text-tertiary-fixed" : "text-[#0F766E]"}>Core</span>
        </span>
        <span
          className={`font-label-sm tracking-widest uppercase text-[10px] mt-0.5 ${
            isWhite ? "text-inverse-primary" : "text-secondary"
          }`}
        >
          Commercial Roofing
        </span>
      </div>
    </Link>
  );
}
