"use client";

import React, { useState } from "react";
import NextImage, { ImageProps } from "next/image";
import { SITE_CONFIG } from "@/config/siteConfig";

/**
 * Centralized luxury image component that wraps `next/image` with:
 * 1. An atmospheric golden-sandstone skeleton shimmer while the image loads
 * 2. A smooth opacity fade-in once the image is ready
 * 3. A graceful Rajasthani haveli architectural fallback if the image fails to load
 * 4. Zero layout shift (preserves parent dimensions and aspect ratio)
 */
export function CinematicImage({
  alt,
  className = "",
  onLoad,
  onError,
  priority,
  placeholder,
  blurDataURL,
  ...props
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setHasError(true);
    setIsLoaded(true);
    if (onError) {
      onError(e);
    }
  };

  return (
    <>
      {/* 1. Subtle Sandstone Shimmer Skeleton while loading */}
      {!isLoaded && !hasError && (
        <span
          aria-hidden="true"
          className="sandstone-skeleton pointer-events-none absolute inset-0 z-[1] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500"
        >
          {/* Subtle Haveli Arch Watermark */}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-desert-sand/25 animate-pulse"
          >
            <path
              d="M10 39V23C10 17.5 13.5 14 17.5 11.5C20.5 9.6 22.5 7.5 24 5.5C25.5 7.5 27.5 9.6 30.5 11.5C34.5 14 38 17.5 38 23V39"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <circle cx="24" cy="24" r="2.5" fill="currentColor" />
            <path d="M8 39H40" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      )}

      {/* 2. Graceful Royal Haveli Fallback if image fails to load */}
      {hasError ? (
        <div
          role="img"
          aria-label={alt || SITE_CONFIG.hotelName}
          className="absolute inset-0 z-[1] bg-gradient-to-br from-heritage-deep via-[#2A1910] to-night-deep flex flex-col items-center justify-center p-6 text-center border border-desert-sand/20"
        >
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-desert-sand/45 mb-3"
            aria-hidden="true"
          >
            <path
              d="M10 39V23C10 17.5 13.5 14 17.5 11.5C20.5 9.6 22.5 7.5 24 5.5C25.5 7.5 27.5 9.6 30.5 11.5C34.5 14 38 17.5 38 23V39"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M15 39V24.5C15 20.5 18 18 24 13.5C30 18 33 20.5 33 24.5V39"
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.6"
            />
            <circle cx="24" cy="24" r="2.8" fill="currentColor" />
            <path d="M7 39H41" stroke="currentColor" strokeWidth="1.4" />
          </svg>
          <span className="font-serif text-sm tracking-[0.2em] uppercase text-desert-sand/80">
            {SITE_CONFIG.hotelName}
          </span>
          {alt && (
            <span className="text-[11px] text-ivory-warm/50 mt-1 max-w-xs line-clamp-2">
              {alt}
            </span>
          )}
        </div>
      ) : (
        /* 3. Actual NextImage with smooth transition from placeholder */
        <NextImage
          alt={alt}
          priority={priority}
          placeholder={placeholder ?? "blur"}
          blurDataURL={blurDataURL ?? SITE_CONFIG.blurDataURL}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} transition-opacity duration-700 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          {...props}
        />
      )}
    </>
  );
}
