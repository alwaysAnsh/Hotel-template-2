"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Check, ArrowRight, Compass } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

type CompanionType = "Couple" | "Family" | "Friends" | "Solo";
type ExperienceFocus = "Desert" | "Culture" | "Food" | "Adventure" | "Luxury";
type DurationOption = 2 | 3 | 5;

const COMPANIONS: { id: CompanionType; subtitle: string; recommendedSlug: string }[] = [
  { id: "Couple", subtitle: "Intimate bastions & secluded dunes", recommendedSlug: "the-rani-jharokha-residence" },
  { id: "Family", subtitle: "Interconnected suites & living stories", recommendedSlug: "the-maharaja-suite" },
  { id: "Friends", subtitle: "Private safaris & starlit feasts", recommendedSlug: "the-golden-terrace-room" },
  { id: "Solo", subtitle: "Stillness, photography & heritage", recommendedSlug: "the-desert-chamber" },
];

const EXPERIENCES: { id: ExperienceFocus; tagline: string }[] = [
  { id: "Desert", tagline: "Untouched dunes & camel caravans" },
  { id: "Culture", tagline: "Living fort & Manganiyar music" },
  { id: "Food", tagline: "Heirloom Marwar recipes & spice" },
  { id: "Adventure", tagline: "Vintage 4x4 trails & fossil canyons" },
  { id: "Luxury", tagline: "Private hammam & champagne sundowners" },
];

const DURATIONS: { days: DurationOption; label: string; note: string }[] = [
  { days: 2, label: "2 Days", note: "A concentrated golden escape" },
  { days: 3, label: "3 Days", note: "Our signature Jaisalmer rhythm" },
  { days: 5, label: "5 Days", note: "Deep Thar immersion & slow luxury" },
];

interface DayPlan {
  dayNumber: string;
  dayTitle: string;
  moments: string[];
}

export function JourneyBuilder() {
  const [companion, setCompanion] = useState<CompanionType>("Couple");
  const [selectedFocuses, setSelectedFocuses] = useState<ExperienceFocus[]>([
    "Desert",
    "Luxury",
  ]);
  const [duration, setDuration] = useState<DurationOption>(3);

  const { openBookingModal } = useBooking();

  const toggleFocus = (focus: ExperienceFocus) => {
    setSelectedFocuses((prev) => {
      if (prev.includes(focus)) {
        return prev.length > 1 ? prev.filter((f) => f !== focus) : prev;
      }
      return [...prev, focus];
    });
  };

  const primaryFocus = selectedFocuses[0] || "Desert";

  const generatedItinerary: DayPlan[] = useMemo(() => {
    const hasFood = selectedFocuses.includes("Food");
    const hasAdventure = selectedFocuses.includes("Adventure");
    const hasCulture = selectedFocuses.includes("Culture");
    const hasLuxury = selectedFocuses.includes("Luxury");

    const day1: DayPlan = {
      dayNumber: "DAY 01",
      dayTitle: "Arrival & The Golden Threshold",
      moments: [
        `Arrival at Suryavansh Haveli with rose-water & saffron kahwa welcome for ${companion.toLowerCase()}s`,
        "Golden Fort exploration & carved haveli walk in late-afternoon amber light",
        hasFood
          ? "Seven-course Royal Marwar heirloom tasting dinner on the rooftop"
          : "Rooftop dinner overlooking the illuminated 99 bastions of Sonar Quila",
      ],
    };

    const day2: DayPlan = {
      dayNumber: "DAY 02",
      dayTitle: "Into the Shifting Sands of the Thar",
      moments: [
        "Breakfast overlooking the city from your private sandstone jharokha",
        hasAdventure
          ? "Deep-Thar off-road 4x4 desert safari across prehistoric fossil plains"
          : "Desert safari to secluded wind-sculpted western dunes",
        "Camel experience with traditional Raika pastoralists along the Silk Route",
        "Sunset in the dunes with firelit Manganiyar strings & stargazing",
      ],
    };

    const day3: DayPlan = {
      dayNumber: "DAY 03",
      dayTitle: "Hidden Ruins & Sanctuary Stillness",
      moments: [
        hasCulture
          ? "Private historian heritage walk through abandoned Khaba Fort & 12th-century Jain shrines"
          : "Heritage walk through Patwon Ki Haveli & Silawat stone-carving ateliers",
        "Local cuisine luncheon featuring wild Ker Sangri & Bajra delicacies in Kesar Bagh",
        hasLuxury
          ? "Relaxed hotel experience with sunken brass bath & couples Ayurvedic ritual"
          : "Relaxed hotel experience by the subterranean stepwell plunge pool",
      ],
    };

    const day4: DayPlan = {
      dayNumber: "DAY 04",
      dayTitle: "Sacred Groves & Royal Cenotaphs",
      moments: [
        "Dawn wildlife tracking in a sacred Oran grove (chinkara gazelles & desert flora)",
        "Private clay-pot cooking masterclass with our Executive Maharaj Chef",
        "Champagne sundowner overlooking the 16th-century royal chhatris of Bada Bagh",
      ],
    };

    const day5: DayPlan = {
      dayNumber: "DAY 05",
      dayTitle: "Final Morning in Gold",
      moments: [
        "Sunrise kayaking or quiet contemplation on the still waters of Gadisar Lake",
        "Bespoke farewell brunch in the Mor Chowk courtyard",
        "Private chauffeur transfer with handwritten desert keepsake journal",
      ],
    };

    const allDays = [day1, day2, day3, day4, day5];
    return allDays.slice(0, duration);
  }, [companion, selectedFocuses, duration]);

  const matchedCompanion =
    COMPANIONS.find((c) => c.id === companion) || COMPANIONS[0];

  const handleStayThisStory = () => {
    openBookingModal({
      selectedRoomSlug: matchedCompanion.recommendedSlug,
      recommendedDurationDays: duration,
      travellerType: companion,
      curatedStoryContext: `${duration}-Day ${companion} Journey (${selectedFocuses.join(
        " + "
      )})`,
    });
  };

  return (
    <section
      id="journey-builder"
      aria-label="Section 7: Build Your Jaisalmer Journey — Interactive Trip Planner"
      className="relative bg-ivory-soft text-heritage-deep py-24 sm:py-32 border-t border-heritage-brown/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.35em] text-desert-gold font-semibold block mb-3">
            Interactive Concierge Planner
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-heritage-deep tracking-wide">
            BUILD YOUR JAISALMER JOURNEY
          </h2>
          <p className="mt-4 text-sm sm:text-base text-heritage-brown/80 leading-relaxed">
            Compose your bespoke Jaisalmer chapter in three steps. Our concierge
            uses your blueprint to prepare private historians, desert camps, and
            suite touches before you arrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 3-Step Interactive Controls */}
          <div className="lg:col-span-6 space-y-10 bg-ivory-warm p-6 sm:p-10 border border-heritage-brown/20 shadow-lg">
            {/* STEP 1 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-desert-gold font-semibold">
                  STEP 1
                </span>
                <span className="text-xs text-heritage-brown/60">
                  Select companion style
                </span>
              </div>
              <h3 className="font-serif text-2xl text-heritage-deep mb-4">
                WHO ARE YOU TRAVELLING WITH?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {COMPANIONS.map((item) => {
                  const active = companion === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCompanion(item.id)}
                      className={`p-4 text-left border transition-all ${
                        active
                          ? "bg-heritage-deep text-ivory-warm border-heritage-deep shadow-md"
                          : "bg-ivory-soft/70 text-heritage-deep border-heritage-brown/20 hover:border-desert-gold"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg font-medium">
                          {item.id}
                        </span>
                        {active && (
                          <Check className="w-4 h-4 text-desert-sand" />
                        )}
                      </div>
                      <p
                        className={`text-[11px] mt-1 ${
                          active
                            ? "text-ivory-warm/70"
                            : "text-heritage-brown/70"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-desert-gold font-semibold">
                  STEP 2
                </span>
                <span className="text-xs text-heritage-brown/60">
                  Choose one or more passions
                </span>
              </div>
              <h3 className="font-serif text-2xl text-heritage-deep mb-4">
                WHAT DO YOU WANT TO EXPERIENCE?
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {EXPERIENCES.map((exp) => {
                  const active = selectedFocuses.includes(exp.id);
                  return (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => toggleFocus(exp.id)}
                      className={`px-4 py-3 border text-left transition-all flex items-center gap-2.5 ${
                        active
                          ? "bg-heritage-deep text-ivory-warm border-heritage-deep"
                          : "bg-ivory-soft/70 text-heritage-deep border-heritage-brown/20 hover:border-desert-gold"
                      }`}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                        {exp.id}
                      </span>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-desert-sand" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-desert-gold font-semibold">
                  STEP 3
                </span>
                <span className="text-xs text-heritage-brown/60">
                  Select length of stay
                </span>
              </div>
              <h3 className="font-serif text-2xl text-heritage-deep mb-4">
                HOW LONG ARE YOU STAYING?
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {DURATIONS.map((d) => {
                  const active = duration === d.days;
                  return (
                    <button
                      key={d.days}
                      type="button"
                      onClick={() => setDuration(d.days)}
                      className={`p-4 text-center border transition-all ${
                        active
                          ? "bg-heritage-deep text-ivory-warm border-heritage-deep shadow-md"
                          : "bg-ivory-soft/70 text-heritage-deep border-heritage-brown/20 hover:border-desert-gold"
                      }`}
                    >
                      <span className="font-serif text-2xl block">
                        {d.label}
                      </span>
                      <span
                        className={`text-[10px] block mt-1 ${
                          active
                            ? "text-desert-sand"
                            : "text-heritage-brown/65"
                        }`}
                      >
                        {d.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Live Visual Itinerary Result */}
          <div className="lg:col-span-6 bg-heritage-deep text-ivory-warm p-8 sm:p-12 border border-desert-sand/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-desert-sand/20">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-desert-sand flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Bespoke Curated Blueprint
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl text-ivory-warm mt-1">
                  YOUR {duration}-DAY JAISALMER STORY
                </h3>
              </div>
              <span className="px-3.5 py-1.5 bg-night-deep border border-desert-sand/30 text-[11px] uppercase tracking-[0.2em] text-desert-sand">
                {companion} · {primaryFocus}
              </span>
            </div>

            {/* Day-by-Day Timeline */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${companion}-${selectedFocuses.join("-")}-${duration}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="my-8 space-y-6"
              >
                {generatedItinerary.map((day) => (
                  <div
                    key={day.dayNumber}
                    className="relative pl-6 border-l border-desert-sand/35 space-y-2"
                  >
                    <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-desert-gold" />
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-mono tracking-[0.25em] text-desert-sand font-semibold">
                        {day.dayNumber}
                      </span>
                      <h4 className="font-serif text-xl text-ivory-warm">
                        — {day.dayTitle}
                      </h4>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-ivory-warm/80">
                      {day.moments.map((m) => (
                        <li key={m} className="flex items-start gap-2">
                          <span className="text-desert-sand/80">·</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Action Bar */}
            <div className="pt-6 border-t border-desert-sand/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-ivory-warm/70 flex items-center gap-2">
                <Compass className="w-4 h-4 text-desert-sand shrink-0" />
                <span>
                  Includes private chauffeur & dedicated Khidmatgar butler
                </span>
              </div>

              <button
                type="button"
                onClick={handleStayThisStory}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.24em] transition-all shadow-[0_10px_30px_rgba(200,138,43,0.3)]"
              >
                <Calendar className="w-4 h-4" />
                <span>STAY THIS STORY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
