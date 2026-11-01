"use client";

import React, { useState } from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Compass,
  Landmark,
  Sparkles,
  Users,
  ArrowRight,
  Clock,
} from "lucide-react";
import { TRAVEL_MOODS, TravelMoodOption } from "@/data/hotelData";
import { useBooking } from "@/context/BookingContext";

const MOOD_ICONS: Record<TravelMoodOption["id"], React.ReactNode> = {
  romance: <Heart className="w-4 h-4" />,
  adventure: <Compass className="w-4 h-4" />,
  heritage: <Landmark className="w-4 h-4" />,
  luxury: <Sparkles className="w-4 h-4" />,
  family: <Users className="w-4 h-4" />,
};

export function YourJaisalmerStory() {
  const [selectedMoodId, setSelectedMoodId] =
    useState<TravelMoodOption["id"]>("romance");
  const { openBookingModal } = useBooking();

  const activeMood =
    TRAVEL_MOODS.find((m) => m.id === selectedMoodId) || TRAVEL_MOODS[0];

  const handleCreateJourney = () => {
    const builderEl = document.getElementById("journey-builder");
    if (builderEl) {
      builderEl.scrollIntoView({ behavior: "smooth" });
    } else {
      openBookingModal({
        selectedRoomSlug: activeMood.recommendedRoomSlug,
        curatedStoryContext: `Curated Mood: ${activeMood.label}`,
      });
    }
  };

  return (
    <section
      aria-label="Section 6: Your Jaisalmer Story — Personalize Your Mood"
      className="relative bg-heritage-brown text-ivory-warm py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
            Personalize Your Narrative
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory-warm tracking-wide">
            WHAT BRINGS YOU TO JAISALMER?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ivory-warm/75">
            Select your travel intention to reveal how our historians, chefs,
            and desert trackers shape the sanctuary around you.
          </p>
        </div>

        {/* Mood Selector Pills */}
        <div
          role="tablist"
          aria-label="Travel Moods"
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14"
        >
          {TRAVEL_MOODS.map((mood) => {
            const active = mood.id === selectedMoodId;
            return (
              <button
                key={mood.id}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setSelectedMoodId(mood.id)}
                className={`inline-flex items-center gap-2.5 px-6 py-3.5 text-xs uppercase tracking-[0.22em] border transition-all duration-300 ${
                  active
                    ? "bg-desert-gold text-night-deep border-desert-gold font-semibold shadow-[0_0_30px_rgba(200,138,43,0.4)]"
                    : "bg-night-deep/40 text-ivory-warm/80 border-desert-sand/30 hover:border-desert-sand"
                }`}
              >
                {MOOD_ICONS[mood.id]}
                <span>{mood.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Mood Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMood.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-heritage-deep/90 border border-desert-sand/25 p-6 sm:p-10 lg:p-12 shadow-2xl"
          >
            {/* Left Visual Story Card */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden border border-desert-sand/25">
                <Image
                  src={activeMood.image}
                  alt={activeMood.headline}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-deep/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-desert-sand bg-night-deep/80 px-3 py-1 border border-desert-sand/30">
                    Mood {activeMood.symbol} · {activeMood.label}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory-warm leading-snug">
                  {activeMood.headline}
                </h3>
                <p className="font-serif italic text-desert-sand text-lg">
                  &ldquo;{activeMood.quote}&rdquo;
                </p>
                <p className="text-sm text-ivory-warm/75 leading-relaxed">
                  {activeMood.description}
                </p>
              </div>

              <div className="pt-4 border-t border-desert-sand/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-desert-sand block">
                    Recommended Sanctuary
                  </span>
                  <Link
                    href={`/rooms/${activeMood.recommendedRoomSlug}`}
                    className="font-serif text-lg text-ivory-warm hover:text-desert-sand underline underline-offset-4"
                  >
                    {activeMood.recommendedRoom}
                  </Link>
                </div>

                <button
                  type="button"
                  onClick={handleCreateJourney}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.22em] transition-colors"
                >
                  <span>CREATE MY JOURNEY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Curated Moments Timeline */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.28em] text-desert-sand">
                  Signature {activeMood.label} Moments
                </p>
                <h4 className="font-serif text-2xl text-ivory-warm mt-1">
                  Curated Exclusively Around Your Stay
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-auto">
                {activeMood.curatedMoments.map((moment, idx) => (
                  <div
                    key={moment.title}
                    className="p-6 bg-night-deep/65 border border-desert-sand/20 hover:border-desert-sand/60 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-desert-sand mb-3">
                        <span className="font-mono">0{idx + 1}</span>
                        <span className="inline-flex items-center gap-1 uppercase tracking-[0.18em]">
                          <Clock className="w-3 h-3" />
                          {moment.timing}
                        </span>
                      </div>
                      <h5 className="font-serif text-xl text-ivory-warm mb-2">
                        {moment.title}
                      </h5>
                      <p className="text-xs text-ivory-warm/75 leading-relaxed">
                        {moment.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-desert-sand/15 flex items-center justify-between text-xs text-ivory-warm/65">
                <span>
                  All experiences are privately hosted by our resident
                  concierge.
                </span>
                <button
                  type="button"
                  onClick={() =>
                    openBookingModal({
                      selectedRoomSlug: activeMood.recommendedRoomSlug,
                      curatedStoryContext: `${activeMood.label} Package Inquiry`,
                    })
                  }
                  className="text-desert-sand hover:underline uppercase tracking-[0.2em]"
                >
                  Reserve This Mood →
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
