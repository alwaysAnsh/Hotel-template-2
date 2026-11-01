"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/siteConfig";

/**
 * Centralized Page Navigation Loader:
 * - Provides immediate visual feedback via a top golden-sandstone progress ribbon
 *   the moment an internal navigation link is clicked.
 * - If the route takes > 180ms to resolve, smoothly reveals a refined, branded
 *   sandstone & royal-night overlay (avoiding flashes on instant transitions).
 * - Ignores same-page anchor links (#...), external URLs, modifier clicks, and
 *   links to the already-active pathname.
 */
export function NavigationLoader() {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const activeTargetRef = useRef<string | null>(null);
  const overlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearNavigationState = () => {
    activeTargetRef.current = null;
    setIsNavigating(false);
    setShowOverlay(false);
    if (overlayTimerRef.current) {
      clearTimeout(overlayTimerRef.current);
      overlayTimerRef.current = null;
    }
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  };

  // Clear loader as soon as the route pathname updates
  useEffect(() => {
    clearNavigationState();
  }, [pathname]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      // Ignore right-clicks, prevented events, or modifier-key clicks (new tab/window)
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href");
      if (!rawHref) return;

      // Ignore hash-only anchor links, mailto, tel, javascript, or external target=_blank
      if (
        rawHref.startsWith("#") ||
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("javascript:") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      try {
        const url = new URL(rawHref, window.location.origin);
        // Only trigger for same-origin navigation
        if (url.origin !== window.location.origin) return;

        // Ignore if navigating to the exact same pathname (e.g., clicking Home while on Home, or same-page hash)
        const currentPathname = window.location.pathname;
        if (url.pathname === currentPathname) return;

        // Prevent duplicate loader triggers for the same in-flight destination
        if (activeTargetRef.current === url.pathname) return;
        activeTargetRef.current = url.pathname;

        // 1. Immediate top progress bar feedback
        setIsNavigating(true);

        // 2. Only show the branded veil if the page takes > 180ms to load
        overlayTimerRef.current = setTimeout(() => {
          setShowOverlay(true);
        }, 180);

        // 3. Safety fallback so the loader can never remain stuck
        safetyTimerRef.current = setTimeout(() => {
          clearNavigationState();
        }, 4500);
      } catch {
        // Ignore malformed hrefs
      }
    };

    const handlePopState = () => {
      clearNavigationState();
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("pageshow", handlePopState);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("pageshow", handlePopState);
      clearNavigationState();
    };
  }, []);

  return (
    <>
      {/* Immediate Top Golden-Sandstone Progress Ribbon */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            key="nav-progress-bar"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] pointer-events-none overflow-hidden bg-night-deep/30"
            aria-hidden="true"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full bg-gradient-to-r from-desert-sand via-desert-gold to-ivory-warm shadow-[0_0_14px_rgba(214,164,93,0.85)]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Refined Branded Overlay for Slower Route Transitions */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="nav-branded-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="status"
            aria-live="polite"
            aria-label="Loading page"
            className="fixed inset-0 z-[95] pointer-events-none bg-night-deep/80 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center px-6 py-8 border border-desert-sand/30 bg-heritage-deep/90 shadow-[0_20px_60px_rgba(0,0,0,0.75)]">
              {/* Royal Jaisalmer Haveli Arch Emblem */}
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
                Entering Sanctuary...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
