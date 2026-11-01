"use client";

import React, { useState } from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import { Compass, Sparkles, Calendar, Check } from "lucide-react";
import { RoomStory } from "@/data/hotelData";
import { useBooking } from "@/context/BookingContext";

export function RoomDetailClient({ room }: { room: RoomStory }) {
  const [activeHotspotIdx, setActiveHotspotIdx] = useState(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(room.heroImage);
  const { openBookingModal } = useBooking();

  const activeHotspot =
    room.panoramaHotspots[activeHotspotIdx] || room.panoramaHotspots[0];

  return (
    <div className="space-y-20">
      {/* Interactive 360° / Multi-Angle Sanctuary Perspective Explorer */}
      <section className="bg-heritage-deep border border-desert-sand/30 p-6 sm:p-10 lg:p-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-desert-sand flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              Interactive 360° Vantage & Gallery Explorer
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-ivory-warm mt-1">
              Step Inside {room.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={() =>
              openBookingModal({
                selectedRoomSlug: room.slug,
                curatedStoryContext: `Direct Suite Reservation: ${room.name}`,
              })
            }
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.22em] transition-colors self-start"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve This Suite ({room.priceDisplay})</span>
          </button>
        </div>

        {/* Main Viewport */}
        <div className="relative h-[420px] sm:h-[540px] w-full overflow-hidden border border-desert-sand/25 mb-6">
          <Image
            src={selectedGalleryImg}
            alt={`${room.name} interior perspective`}
            fill
            sizes="100vw"
            className="object-cover object-center transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night-deep/90 via-transparent to-transparent" />

          {activeHotspot && (
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-night-deep/85 backdrop-blur-md border border-desert-sand/35 p-5">
              <p className="text-[10px] uppercase tracking-[0.25em] text-desert-sand">
                Vantage Angle · {activeHotspot.angle}
              </p>
              <h3 className="font-serif text-xl text-ivory-warm mt-1">
                {activeHotspot.title}
              </h3>
              <p className="text-xs text-ivory-warm/75 mt-1 leading-relaxed">
                {activeHotspot.caption}
              </p>
            </div>
          )}
        </div>

        {/* Vantage Angle Selector + Gallery Thumbnails */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 flex flex-wrap gap-2.5">
            {room.panoramaHotspots.map((spot, idx) => {
              const active = idx === activeHotspotIdx;
              return (
                <button
                  key={spot.angle}
                  type="button"
                  onClick={() => {
                    setActiveHotspotIdx(idx);
                    setSelectedGalleryImg(
                      room.gallery[idx % room.gallery.length]
                    );
                  }}
                  className={`px-4 py-2.5 text-xs uppercase tracking-[0.18em] border transition-colors ${
                    active
                      ? "bg-desert-gold text-night-deep border-desert-gold font-semibold"
                      : "bg-night-deep/60 text-ivory-warm/80 border-desert-sand/25 hover:border-desert-sand"
                  }`}
                >
                  {spot.angle}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-5 flex gap-3 overflow-x-auto">
            {room.gallery.map((imgUrl, idx) => (
              <button
                key={`${imgUrl}-${idx}`}
                type="button"
                onClick={() => setSelectedGalleryImg(imgUrl)}
                className={`relative w-20 h-14 shrink-0 border overflow-hidden ${
                  selectedGalleryImg === imgUrl
                    ? "border-desert-sand ring-1 ring-desert-sand"
                    : "border-desert-sand/25 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={imgUrl}
                  alt={`${room.name} thumbnail ${idx + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Signature Rituals */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 bg-night-blue/60 border border-desert-sand/20 p-8 sm:p-10">
          <span className="text-[10px] uppercase tracking-[0.28em] text-desert-sand">
            Sanctuary Appointments
          </span>
          <h3 className="font-serif text-3xl text-ivory-warm mt-1 mb-6">
            Bespoke Amenities & Privileges
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {room.amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-start gap-3 text-xs sm:text-sm text-ivory-warm/80"
              >
                <Check className="w-4 h-4 text-desert-sand shrink-0 mt-0.5" />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-heritage-deep border border-desert-sand/30 p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-desert-sand flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Intimate Touches
            </span>
            <h3 className="font-serif text-3xl text-ivory-warm mt-1 mb-6">
              Evening & Dawn Rituals
            </h3>
            <ul className="space-y-4 text-sm text-ivory-warm/80">
              {room.signatureTouches.map((touch) => (
                <li
                  key={touch}
                  className="pl-4 border-l-2 border-desert-gold leading-relaxed"
                >
                  {touch}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-desert-sand/20">
            <p className="text-xs text-desert-sand uppercase tracking-[0.2em] mb-3">
              Direct Reservation Tariff: {room.priceDisplay}
            </p>
            <button
              type="button"
              onClick={() =>
                openBookingModal({
                  selectedRoomSlug: room.slug,
                  curatedStoryContext: `Suite Detail Booking: ${room.name}`,
                })
              }
              className="w-full py-4 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.24em] transition-colors"
            >
              Check Dates for {room.name}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
