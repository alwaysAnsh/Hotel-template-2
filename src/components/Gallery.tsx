"use client";

import React, { useState, useEffect } from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X, MapPin } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/hotelData";
import { SITE_CONFIG } from "@/config/siteConfig";

const CATEGORIES: ("All" | GalleryItem["category"])[] = [
  "All",
  "Hotel",
  "Rooms",
  "Dining",
  "Jaisalmer",
  "Desert",
];

export function Gallery({ showHeader = true }: { showHeader?: boolean }) {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxItem(null);
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxItem]);

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      aria-label="Section 12: Editorial Gallery"
      className="relative bg-night-deep text-ivory-warm py-24 sm:py-32 border-t border-desert-sand/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {showHeader && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
                Visual Archive · Light & Sandstone
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl text-ivory-warm tracking-wide">
                FRAMES FROM THE SANCTUARY
              </h2>
            </div>

            {/* Category Filter Bar */}
            <div
              role="tablist"
              aria-label="Gallery Categories"
              className="flex flex-wrap gap-2"
            >
              {CATEGORIES.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={active}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2.5 text-xs uppercase tracking-[0.22em] border transition-colors ${
                      active
                        ? "bg-desert-gold text-night-deep border-desert-gold font-semibold"
                        : "bg-night-blue/50 text-ivory-warm/75 border-desert-sand/25 hover:border-desert-sand"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {!showHeader && (
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2.5 text-xs uppercase tracking-[0.22em] border transition-colors ${
                    active
                      ? "bg-desert-gold text-night-deep border-desert-gold font-semibold"
                      : "bg-night-blue/50 text-ivory-warm/75 border-desert-sand/25 hover:border-desert-sand"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Editorial Masonry Grid — GPU-friendly filtering without expensive FLIP layout thrashing */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => {
            const heightClass =
              item.aspect === "tall"
                ? "h-[420px]"
                : item.aspect === "wide"
                ? "h-[280px]"
                : "h-[340px]";
            return (
              <figure
                key={item.id}
                onClick={() => setLightboxItem(item)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxItem(item);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View full-screen photo: ${item.title}`}
                className={`group relative w-full ${heightClass} break-inside-avoid overflow-hidden border border-desert-sand/25 bg-night-blue cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-desert-sand`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  placeholder="blur"
                  blurDataURL={SITE_CONFIG.blurDataURL}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-deep/90 via-night-deep/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-night-deep/80 border border-desert-sand/30 text-[10px] uppercase tracking-[0.22em] text-desert-sand">
                    {item.category}
                  </span>
                  <span className="p-2 bg-night-deep/80 border border-desert-sand/30 text-ivory-warm opacity-75 group-hover:opacity-100 transition-opacity">
                    <Expand className="w-3.5 h-3.5" />
                  </span>
                </div>

                <figcaption className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-desert-sand flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3" />
                    {item.locationTag}
                  </p>
                  <h3 className="font-serif text-xl text-ivory-warm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-ivory-warm/70 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-night-deep/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
            onClick={() => setLightboxItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxItem.title}
          >
            <div
              className="relative max-w-5xl w-full bg-night-blue border border-desert-sand/35 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[55vh] sm:h-[68vh] w-full">
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  placeholder="blur"
                  blurDataURL={SITE_CONFIG.blurDataURL}
                  sizes="90vw"
                  className="object-cover object-center"
                />
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  aria-label="Close full-screen image"
                  className="absolute top-4 right-4 p-2.5 bg-night-deep/85 border border-desert-sand/40 text-ivory-warm hover:text-desert-sand"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-desert-sand">
                    {lightboxItem.category} · {lightboxItem.locationTag}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory-warm mt-1">
                    {lightboxItem.title}
                  </h3>
                  <p className="text-sm text-ivory-warm/75 mt-1">
                    {lightboxItem.caption}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
