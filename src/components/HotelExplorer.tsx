"use client";

import React, { useState } from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  BedDouble,
  Utensils,
  Sun,
  Waves,
  Sparkles,
} from "lucide-react";
import { EXPLORER_DESTINATIONS } from "@/data/hotelData";
import { SITE_CONFIG } from "@/config/siteConfig";

const ICON_MAP: Record<string, React.ReactNode> = {
  rooms: <BedDouble className="w-4 h-4" />,
  dining: <Utensils className="w-4 h-4" />,
  rooftop: <Sun className="w-4 h-4" />,
  courtyard: <Waves className="w-4 h-4" />,
  experiences: <Sparkles className="w-4 h-4" />,
};

export function HotelExplorer() {
  const [activeId, setActiveId] = useState<string>(EXPLORER_DESTINATIONS[0].id);

  const activeDest =
    EXPLORER_DESTINATIONS.find((d) => d.id === activeId) ||
    EXPLORER_DESTINATIONS[0];

  return (
    <section
      id="discover-the-hotel"
      aria-label="Chapter 3: Discover The Hotel World Explorer"
      className="relative min-h-screen w-full bg-heritage-deep text-ivory-warm py-24 sm:py-32 overflow-hidden flex flex-col justify-between border-t border-desert-sand/15"
    >
      <div className="jali-border-top absolute top-0 inset-x-0 z-20" />

      {/* Dynamic Fullscreen Atmospheric Backdrop (Desktop Only — Saves Mobile Bandwidth) */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDest.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src={activeDest.image}
              alt={activeDest.label}
              fill
              placeholder="blur"
              blurDataURL={SITE_CONFIG.blurDataURL}
              sizes="100vw"
              className="object-cover object-center brightness-[0.42]"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(26,16,10,0.92) 0%, rgba(26,16,10,0.65) 50%, rgba(16,24,39,0.88) 100%)",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12 my-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <p className="text-[11px] uppercase tracking-[0.35em] text-desert-sand mb-3">
            Interactive Sanctuary Map · Inner World
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory-warm tracking-wide">
            WHERE WILL YOU WANDER FIRST?
          </h2>
        </div>

        {/* Desktop Interactive Doorway Explorer */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Destination Triggers */}
          <div className="lg:col-span-6 space-y-2.5">
            {EXPLORER_DESTINATIONS.map((dest, index) => {
              const isSelected = dest.id === activeId;
              return (
                <button
                  key={dest.id}
                  type="button"
                  onMouseEnter={() => setActiveId(dest.id)}
                  onFocus={() => setActiveId(dest.id)}
                  onClick={() => setActiveId(dest.id)}
                  className={`w-full text-left p-6 border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? "bg-heritage-brown/80 border-desert-sand shadow-[0_10px_40px_rgba(0,0,0,0.45)] translate-x-2"
                      : "bg-night-deep/45 border-desert-sand/15 hover:border-desert-sand/50"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-mono text-desert-sand/70">
                      0{index + 1}
                    </span>
                    <span className="p-2.5 rounded-full border border-desert-sand/30 text-desert-sand">
                      {ICON_MAP[dest.id]}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-ivory-warm group-hover:text-desert-sand transition-colors">
                        {dest.label}
                      </h3>
                      <p className="text-xs text-ivory-warm/60 mt-0.5">
                        {dest.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected
                        ? "text-desert-sand translate-x-0.5 -translate-y-0.5"
                        : "text-ivory-warm/30"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Destination Portal Window */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDest.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="border border-desert-sand/35 bg-night-deep/80 backdrop-blur-md p-8 sm:p-12 relative overflow-hidden"
              >
                <div className="relative h-64 sm:h-72 w-full mb-8 overflow-hidden border border-desert-sand/25">
                  <Image
                    src={activeDest.image}
                    alt={activeDest.label}
                    fill
                    placeholder="blur"
                    blurDataURL={SITE_CONFIG.blurDataURL}
                    sizes="(max-width: 1200px) 45vw, 560px"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-night-deep/85 border border-desert-sand/30 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-desert-sand">
                    {activeDest.stats}
                  </div>
                </div>

                <p className="font-serif italic text-xl sm:text-2xl text-desert-sand mb-3">
                  &ldquo;{activeDest.poeticLine}&rdquo;
                </p>
                <p className="text-sm sm:text-base text-ivory-warm/80 leading-relaxed mb-8">
                  {activeDest.description}
                </p>

                <Link
                  href={activeDest.href}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.22em] transition-colors"
                >
                  <span>Step Into {activeDest.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Swipeable Interactive Doorway Cards */}
        <div className="lg:hidden">
          <p className="text-xs uppercase tracking-[0.22em] text-desert-sand/85 mb-4">
            Swipe to explore each sanctuary doorway →
          </p>
          <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6">
            {EXPLORER_DESTINATIONS.map((dest, idx) => (
              <div
                key={dest.id}
                className="snap-center shrink-0 w-[85vw] max-w-sm border border-desert-sand/30 bg-night-deep/90 flex flex-col justify-between overflow-hidden"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={dest.image}
                    alt={dest.label}
                    fill
                    placeholder="blur"
                    blurDataURL={SITE_CONFIG.blurDataURL}
                    sizes="85vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-deep via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-night-deep/85 border border-desert-sand/30 text-[10px] uppercase tracking-[0.2em] text-desert-sand">
                    0{idx + 1} · {dest.stats}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-desert-sand mb-1">
                      {ICON_MAP[dest.id]}
                      <span className="text-xs uppercase tracking-[0.2em]">
                        {dest.subtitle}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-ivory-warm mt-1">
                      {dest.label}
                    </h3>
                    <p className="font-serif italic text-desert-sand/90 text-sm mt-2">
                      &ldquo;{dest.poeticLine}&rdquo;
                    </p>
                    <p className="text-xs text-ivory-warm/75 leading-relaxed mt-3">
                      {dest.description}
                    </p>
                  </div>
                  <Link
                    href={dest.href}
                    className="mt-6 inline-flex items-center justify-between w-full px-4 py-3.5 bg-desert-gold/15 hover:bg-desert-gold hover:text-night-deep border border-desert-sand/40 text-xs uppercase tracking-[0.2em] text-desert-sand transition-colors"
                  >
                    <span>Explore {dest.label}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
