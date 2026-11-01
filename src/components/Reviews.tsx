"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Sunset, Moon, Star, ExternalLink } from "lucide-react";
import { SAMPLE_REVIEWS } from "@/data/hotelData";

export function Reviews() {
  return (
    <section
      aria-label="Chapter 6: Stay For The Night — Sunset to Night Transition & Guest Reflections"
      className="relative overflow-hidden text-ivory-warm"
      style={{
        background:
          "linear-gradient(180deg, #3A2418 0%, #24181C 38%, #101827 78%, #090E17 100%)",
      }}
    >
      {/* Section 10: Sunset-to-Night Atmospheric Horizon Progression */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pt-24 sm:pt-32 pb-16 border-b border-desert-sand/15">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
            Chapter 06 · Stay For The Night
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory-warm tracking-wide">
            WHEN THE GOLDEN CITY TURNS TO STARLIGHT
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ivory-warm/75 leading-relaxed">
            As the fierce desert sun sinks behind the western dunes, 108
            hand-beaten brass lanterns are lit across the haveli—transforming
            golden limestone into a warm sanctuary under the indigo Thar sky.
          </p>
        </div>

        {/* 3-Stage Diurnal Rhythm Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-desert-sand/25 bg-[#D6A45D]/10 backdrop-blur-sm flex items-start gap-4">
            <Sun className="w-6 h-6 text-amber-300 shrink-0 mt-1" />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold">
                I · Bright Desert Day
              </p>
              <p className="font-serif text-xl text-ivory-warm mt-1">
                Cool Stone & Jali Shadows
              </p>
              <p className="text-xs text-ivory-warm/75 mt-1.5 leading-relaxed">
                Sunlight filters through hand-carved latticework while the
                subterranean stepwell pool remains naturally cool.
              </p>
            </div>
          </div>

          <div className="p-6 border border-desert-sand/25 bg-[#C88A2B]/15 backdrop-blur-sm flex items-start gap-4">
            <Sunset className="w-6 h-6 text-orange-400 shrink-0 mt-1" />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-orange-300 font-semibold">
                II · Golden Sunset
              </p>
              <p className="font-serif text-xl text-ivory-warm mt-1">
                Molten Amber on 99 Bastions
              </p>
              <p className="text-xs text-ivory-warm/75 mt-1.5 leading-relaxed">
                Sonar Quila glows like burnished copper as loban incense and
                kamaicha strings drift across the rooftop.
              </p>
            </div>
          </div>

          <div className="p-6 border border-desert-sand/35 bg-night-deep/80 backdrop-blur-sm flex items-start gap-4 shadow-[0_0_35px_rgba(200,138,43,0.18)]">
            <Moon className="w-6 h-6 text-desert-sand shrink-0 mt-1" />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-desert-sand font-semibold">
                III · Deep Blue Night
              </p>
              <p className="font-serif text-xl text-ivory-warm mt-1">
                Lantern Glow & Endless Stars
              </p>
              <p className="text-xs text-ivory-warm/75 mt-1.5 leading-relaxed">
                The desert becomes silent. Warm beeswax light flickers against
                ancient stone while the Milky Way arches overhead.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 11: Floating Editorial Guest Reflections */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
              Guest Reflections & Social Proof
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-ivory-warm">
              WORDS LEFT IN OUR GUESTBOOK
            </h3>
          </div>
          <p className="text-xs text-ivory-warm/55 max-w-md border-l border-desert-sand/40 pl-4">
            Note: Below are sample editorial guestbook entries & API
            integration placeholders structured for connecting live Google
            Reviews, TripAdvisor, and Booking platform feeds.
          </p>
        </div>

        {/* Large Floating Quotes Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {SAMPLE_REVIEWS.map((review, index) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative p-8 sm:p-10 border border-desert-sand/25 bg-night-deep/75 backdrop-blur-md flex flex-col justify-between ${
                index === 1 ? "lg:-translate-y-6 border-desert-sand/45" : ""
              }`}
            >
              <div>
                {/* 5 Stars */}
                <div
                  className="flex items-center gap-1 text-desert-sand mb-6"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-desert-sand text-desert-sand"
                    />
                  ))}
                </div>

                <p className="font-serif text-2xl sm:text-3xl text-ivory-warm leading-snug mb-4">
                  &ldquo;{review.quote}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-ivory-warm/75 leading-relaxed">
                  {review.subQuote}
                </p>
              </div>

              <footer className="mt-8 pt-5 border-t border-desert-sand/15">
                <p className="font-serif text-base text-desert-sand">
                  {review.guestDisplay}
                </p>
                <div className="flex items-center justify-between text-[11px] text-ivory-warm/55 mt-1">
                  <span>{review.stayContext}</span>
                  <span className="uppercase tracking-[0.15em]">
                    {review.platformSource}
                  </span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        {/* API-Ready Review Platform Integration Placeholders */}
        <div className="mt-16 pt-10 border-t border-desert-sand/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              platform: "Google Reviews Feed",
              status: "API Adapter Ready (Places API ID Placeholder)",
              badge: "Verified Sanctuary Listing",
            },
            {
              platform: "TripAdvisor Travelers' Choice",
              status: "API Adapter Ready (Location ID Placeholder)",
              badge: "Boutique Heritage Category",
            },
            {
              platform: "Direct Guest Journal Archive",
              status: "PMS Post-Stay Verified Feed Placeholder",
              badge: "100% Direct Stay Guests",
            },
          ].map((item) => (
            <div
              key={item.platform}
              className="px-6 py-4 bg-night-deep/60 border border-desert-sand/20 flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory-warm">
                  {item.platform}
                </p>
                <p className="text-[11px] text-desert-sand mt-0.5">
                  {item.badge} · {item.status}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-desert-sand/60 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
