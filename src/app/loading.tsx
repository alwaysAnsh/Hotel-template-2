import React from "react";
import { SITE_CONFIG } from "@/config/siteConfig";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading sanctuary page"
      className="min-h-[70vh] w-full bg-night-deep text-ivory-warm flex flex-col items-center justify-center px-6 py-24"
    >
      <div className="flex flex-col items-center p-8 border border-desert-sand/25 bg-heritage-deep/60">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 h-11 text-desert-sand mb-4 animate-pulse"
          aria-hidden="true"
        >
          <path
            d="M10 39V23C10 17.5 13.5 14 17.5 11.5C20.5 9.6 22.5 7.5 24 5.5C25.5 7.5 27.5 9.6 30.5 11.5C34.5 14 38 17.5 38 23V39"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 39V24.5C15 20.5 18 18 24 13.5C30 18 33 20.5 33 24.5V39"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.65"
          />
          <circle cx="24" cy="24" r="3" fill="currentColor" />
          <path
            d="M7 39H41M11 42H37"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        <p className="font-serif text-lg tracking-[0.22em] text-ivory-warm uppercase">
          {SITE_CONFIG.hotelName}
        </p>
        <span className="text-[10px] uppercase tracking-[0.32em] text-desert-sand mt-1">
          Preparing Your Chapter...
        </span>
      </div>
    </div>
  );
}
