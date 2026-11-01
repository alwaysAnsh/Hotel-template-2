"use client";

import React, { useState } from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { ArrowRight, Maximize2, Users, Eye, Sparkles } from "lucide-react";
import { ROOM_STORIES, RoomStory } from "@/data/hotelData";
import { useBooking } from "@/context/BookingContext";

export function RoomStorySection() {
  const [hoveredRoomId, setHoveredRoomId] = useState<string | null>(
    ROOM_STORIES[0].id
  );
  const { openBookingModal } = useBooking();

  return (
    <section
      aria-label="Chapter 4: Choose Your Story — The Suites & Chambers"
      className="relative bg-ivory-warm text-heritage-deep py-24 sm:py-36 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Editorial Chapter Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-8 border-b border-heritage-brown/15 pb-10">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-desert-gold font-semibold block mb-3">
              Chapter 04 · Choose Your Story
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-heritage-deep tracking-wide leading-[1.05]">
              CHOOSE YOUR STORY
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-heritage-brown/80 leading-relaxed">
              Fourteen historic sandstone sanctuaries, each restored by master
              Silawat craftsmen. Rather than room categories, each chamber is a
              distinct chapter of Jaisalmer&apos;s royal architecture.
            </p>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-[0.24em] text-heritage-deep font-semibold border-b border-desert-gold pb-1 hover:text-desert-gold transition-colors"
            >
              <span>Compare All 4 Signature Chapters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop Editorial Room Panels */}
        <div className="hidden md:flex flex-col gap-16">
          {ROOM_STORIES.map((room, index) => (
            <RoomEditorialPanel
              key={room.id}
              room={room}
              reversed={index % 2 === 1}
              isFocused={hoveredRoomId === room.id}
              onHover={() => setHoveredRoomId(room.id)}
              onReserve={() =>
                openBookingModal({
                  selectedRoomSlug: room.slug,
                  curatedStoryContext: `Suite Inquiry: ${room.name}`,
                })
              }
            />
          ))}
        </div>

        {/* Mobile Swipeable Editorial Room Chapters */}
        <div className="md:hidden">
          <p className="text-xs uppercase tracking-[0.22em] text-desert-gold font-semibold mb-4">
            Swipe through our signature suites →
          </p>
          <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6">
            {ROOM_STORIES.map((room) => (
              <article
                key={room.id}
                className="snap-center shrink-0 w-[86vw] bg-heritage-deep text-ivory-warm border border-desert-sand/30 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={room.heroImage}
                    alt={room.name}
                    fill
                    sizes="86vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heritage-deep via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-serif text-3xl text-desert-sand">
                    {room.number}
                  </span>
                  <span className="absolute top-4 right-4 bg-night-deep/80 border border-desert-sand/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-desert-sand">
                    {room.priceDisplay}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-desert-sand">
                      {room.chapterTitle}
                    </p>
                    <h3 className="font-serif text-2xl text-ivory-warm mt-1">
                      {room.name}
                    </h3>
                    <p className="font-serif italic text-desert-sand text-base mt-1">
                      &ldquo;{room.tagline}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs text-ivory-warm/75 leading-relaxed">
                    {room.poeticIntro}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-desert-sand/20 text-[11px] text-ivory-warm/80">
                    <span>{room.sizeSqFt} sq.ft Sanctuary</span>
                    <span>{room.occupancy}</span>
                  </div>

                  <div className="pt-3 flex gap-3">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="flex-1 text-center py-3 bg-desert-gold text-night-deep text-xs font-semibold uppercase tracking-[0.2em]"
                    >
                      View the story →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoomEditorialPanel({
  room,
  reversed,
  isFocused,
  onHover,
  onReserve,
}: {
  room: RoomStory;
  reversed: boolean;
  isFocused: boolean;
  onHover: () => void;
  onReserve: () => void;
}) {
  return (
    <article
      onMouseEnter={onHover}
      onFocus={onHover}
      className="group relative grid grid-cols-12 bg-heritage-deep text-ivory-warm border border-heritage-brown/25 overflow-hidden shadow-2xl"
    >
      {/* Image Column */}
      <div
        className={`col-span-12 lg:col-span-7 relative min-h-[460px] lg:min-h-[560px] overflow-hidden ${
          reversed ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <Image
          src={room.heroImage}
          alt={room.name}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-[1400ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-deep/80 via-night-deep/20 to-transparent" />

        {/* Large Floating Room Number Reveal on Hover */}
        <div className="absolute top-6 left-8 flex items-baseline gap-3">
          <span className="font-serif text-5xl sm:text-7xl text-desert-sand/90 group-hover:scale-110 transition-transform duration-500">
            {room.number}
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-ivory-warm/80 bg-night-deep/70 backdrop-blur-sm px-3 py-1 border border-desert-sand/30">
            {room.chapterTitle}
          </span>
        </div>

        {/* Bottom Architectural Note Overlay */}
        <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-xs text-ivory-warm/85">
          <span className="bg-night-deep/75 backdrop-blur-sm px-4 py-2 border border-desert-sand/25">
            {room.view}
          </span>
          <span className="bg-desert-gold text-night-deep font-semibold px-4 py-2 uppercase tracking-[0.2em]">
            {room.priceDisplay}
          </span>
        </div>
      </div>

      {/* Editorial Story Column */}
      <div
        className={`col-span-12 lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between ${
          reversed ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-desert-sand uppercase tracking-[0.25em]">
            <span>Sanctuary Chapter {room.number}</span>
            <Sparkles
              className={`w-4 h-4 transition-opacity duration-500 ${
                isFocused ? "opacity-100" : "opacity-40"
              }`}
            />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-ivory-warm tracking-wide leading-tight">
            {room.name}
          </h3>

          <p className="font-serif italic text-xl text-desert-sand">
            &ldquo;{room.tagline}&rdquo;
          </p>

          <p className="text-sm sm:text-base text-ivory-warm/75 leading-relaxed">
            {room.poeticIntro}
          </p>

          {/* Details that reveal prominently on hover/focus */}
          <div className="pt-4 border-t border-desert-sand/20 grid grid-cols-3 gap-4 text-xs text-ivory-warm/80">
            <div className="flex flex-col gap-1">
              <span className="text-desert-sand flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em]">
                <Maximize2 className="w-3.5 h-3.5" /> Scale
              </span>
              <span>
                {room.sizeSqFt} sq.ft ({room.sizeSqM} m²)
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-desert-sand flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em]">
                <Users className="w-3.5 h-3.5" /> Guests
              </span>
              <span>{room.occupancy}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-desert-sand flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em]">
                <Eye className="w-3.5 h-3.5" /> Outlook
              </span>
              <span className="truncate" title={room.view}>
                Golden Fort
              </span>
            </div>
          </div>

          <ul className="space-y-1.5 text-xs text-ivory-warm/70 pt-2">
            {room.signatureTouches.map((touch) => (
              <li key={touch} className="flex items-start gap-2">
                <span className="text-desert-sand mt-1">◆</span>
                <span>{touch}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action CTAs */}
        <div className="pt-8 mt-8 border-t border-desert-sand/15 flex flex-wrap items-center gap-4">
          <Link
            href={`/rooms/${room.slug}`}
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.22em] transition-all"
          >
            <span>View the story</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            type="button"
            onClick={onReserve}
            className="px-5 py-3.5 border border-desert-sand/35 hover:border-desert-sand text-ivory-warm hover:text-desert-sand text-xs uppercase tracking-[0.2em] transition-colors"
          >
            Reserve Chapter
          </button>
        </div>
      </div>
    </article>
  );
}
