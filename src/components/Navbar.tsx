"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, Compass, Calendar, Phone, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";
import { useBooking } from "@/context/BookingContext";

const NAV_LINKS = [
  { label: "Home", href: "/", subtitle: "Begin the Journey" },
  { label: "The Stay", href: "/about", subtitle: "18th-Century Sanctuary" },
  { label: "Rooms", href: "/rooms", subtitle: "Choose Your Chapter" },
  { label: "Experiences", href: "/experiences", subtitle: "Into the Living Thar" },
  { label: "Dining", href: "/dining", subtitle: "Royal Marwar Kitchens" },
  { label: "Jaisalmer Guide", href: "/jaisalmer-guide", subtitle: "Curated Chronicles" },
  { label: "Gallery", href: "/gallery", subtitle: "Visual Archive" },
  { label: "Contact", href: "/contact", subtitle: "Private Concierge" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBookingModal } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Keyboard Escape & body scroll lock when fullscreen menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-night-deep/85 backdrop-blur-md border-b border-desert-sand/15 py-3.5"
            : "bg-gradient-to-b from-night-deep/70 via-night-deep/25 to-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Royal Jaisalmer Haveli Arch & Sun Emblem Icon (No Text) */}
          <Link
            href="/"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full border border-desert-sand/35 bg-night-deep/50 hover:border-desert-sand hover:bg-heritage-deep/80 transition-all duration-500 shadow-[0_0_20px_rgba(200,138,43,0.18)] focus:outline-none focus-visible:ring-1 focus-visible:ring-desert-sand"
            aria-label={`${SITE_CONFIG.hotelName} — Return to Home`}
            title="Home"
          >
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-desert-sand group-hover:scale-105 transition-transform duration-500"
              aria-hidden="true"
            >
              {/* Outer Cusped Rajasthani Mehrab / Haveli Arch */}
              <path
                d="M10 39V23C10 17.5 13.5 14 17.5 11.5C20.5 9.6 22.5 7.5 24 5.5C25.5 7.5 27.5 9.6 30.5 11.5C34.5 14 38 17.5 38 23V39"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Inner Delicate Jharokha Archway */}
              <path
                d="M15 39V24.5C15 20.5 18 18 24 13.5C30 18 33 20.5 33 24.5V39"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.65"
              />
              {/* Royal Suryavansh Sun Emblem at Heart of Arch */}
              <circle
                cx="24"
                cy="24"
                r="3.2"
                fill="currentColor"
                className="group-hover:opacity-100 opacity-90"
              />
              <path
                d="M24 18V19.5M24 28.5V30M18 24H19.5M28.5 24H30M19.8 19.8L20.9 20.9M27.1 27.1L28.2 28.2M28.2 19.8L27.1 20.9M20.9 27.1L19.8 28.2"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              {/* Base Sandstone Plinth Steps */}
              <path
                d="M7 39H41M11 42H37"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </Link>

          {/* Center: Minimal Desktop Links including Home */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-7"
          >
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs uppercase tracking-[0.2em] py-1 transition-colors duration-300 ${
                    isActive
                      ? "text-desert-sand"
                      : "text-ivory-warm/80 hover:text-desert-sand"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-desert-sand" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: Book CTA + Icon-Only Chapters Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 bg-desert-gold/90 hover:bg-desert-sand text-night-deep font-medium text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_25px_rgba(200,138,43,0.25)] hover:shadow-[0_0_35px_rgba(214,164,93,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory-warm"
            >
              <span>Book Your Stay</span>
            </button>

            {/* Icon-only Chapters Navigation Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open chapters navigation"
              title="Explore Chapters"
              aria-expanded={menuOpen}
              className="inline-flex items-center justify-center w-10 h-10 border border-desert-sand/30 hover:border-desert-sand bg-night-deep/40 text-ivory-warm hover:text-desert-sand transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-desert-sand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M7 12H20M10 17H20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="4" cy="12" r="1" fill="currentColor" />
                <circle cx="6.5" cy="17" r="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Persistent Bottom Conversion Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-night-deep/95 backdrop-blur-lg border-t border-desert-sand/25 px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-desert-sand">
            Direct Sanctuary Rates
          </p>
          <p className="font-serif text-sm text-ivory-warm">
            From ₹21,000 / Night
          </p>
        </div>
        <button
          type="button"
          onClick={() => openBookingModal()}
          className="px-5 py-2.5 bg-desert-gold text-night-deep text-xs font-medium uppercase tracking-[0.2em]"
        >
          Book Your Stay
        </button>
      </div>

      {/* Fullscreen Editorial Curtain Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-night-deep/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Hotel Chapters Navigation Overlay"
          >
            {/* Top Bar */}
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between border-b border-desert-sand/15 pb-6">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-full border border-desert-sand/40 flex items-center justify-center text-desert-sand">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif text-lg sm:text-xl tracking-[0.22em] text-ivory-warm group-hover:text-desert-sand transition-colors">
                    {SITE_CONFIG.hotelName}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-desert-sand">
                    The Golden City · Jaisalmer
                  </p>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close chapters menu"
                className="inline-flex items-center justify-center w-10 h-10 border border-desert-sand/30 text-ivory-warm hover:text-desert-sand hover:border-desert-sand transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Center Editorial Chapters */}
            <div className="max-w-[1440px] w-full mx-auto my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] text-desert-sand/80 mb-6 flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Navigate the Sanctuary</span>
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {NAV_LINKS.map((item, idx) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.4 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline gap-4 sm:gap-6 py-1"
                      >
                        <span className="text-xs font-mono text-desert-sand/60 group-hover:text-desert-sand transition-colors">
                          0{idx + 1}
                        </span>
                        <span className="font-serif text-3xl sm:text-5xl text-ivory-warm group-hover:text-desert-sand transition-colors duration-300">
                          {item.label}
                        </span>
                        <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-ivory-warm/45 group-hover:text-ivory-warm/80 transition-colors">
                          — {item.subtitle}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Quick Story & Direct Reservation */}
              <div className="lg:col-span-5 border border-desert-sand/20 bg-heritage-deep/60 p-8 sm:p-10 space-y-6">
                <div className="flex items-center gap-2 text-desert-sand text-xs uppercase tracking-[0.25em]">
                  <Sparkles className="w-4 h-4" />
                  <span>Private Reservations</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-warm leading-snug">
                  Begin your Jaisalmer chapter with bespoke direct privileges.
                </h3>
                <p className="text-sm text-ivory-warm/70 leading-relaxed">
                  Direct bookings include complimentary vintage 4x4 airport or
                  station transfers, sunrise fort walk with our resident
                  historian, and flexible check-in.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      openBookingModal();
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Check Availability</span>
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-desert-sand/40 hover:border-desert-sand text-ivory-warm text-xs uppercase tracking-[0.2em] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Speak with Concierge</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Coordinates */}
            <div className="max-w-[1440px] w-full mx-auto border-t border-desert-sand/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ivory-warm/50">
              <p>
                26.9157° N, 70.9083° E · The Thar Desert, Jaisalmer, Rajasthan
              </p>
              <p>{SITE_CONFIG.contact.emailPlaceholder}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
