import React from "react";

export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] bg-surface flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-surface-container-lowest border border-outline-variant p-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-outline-variant/50 pb-3 mb-4">
          <span className="font-code-spec text-[10px] uppercase tracking-widest text-secondary">
            PROCORE SYSTEMS // LOADING SPECIFICATION
          </span>
          <span className="w-2 h-2 bg-on-tertiary-container animate-pulse" />
        </div>
        <div className="space-y-3">
          <div className="h-5 w-3/4 bg-surface-container-high animate-pulse" />
          <div className="h-3.5 w-full bg-surface-container animate-pulse" />
          <div className="h-3.5 w-5/6 bg-surface-container animate-pulse" />
        </div>
      </div>
    </div>
  );
}
