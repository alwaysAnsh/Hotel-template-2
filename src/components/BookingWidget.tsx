"use client";

import React, { useState, useEffect, useRef } from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import {
  Calendar,
  Users,
  Sparkles,
  CheckCircle2,
  Tag,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";
import { ROOM_STORIES } from "@/data/hotelData";
import {
  checkHotelAvailability,
  AvailabilityResult,
} from "@/services/bookingService";

export function BookingWidget() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const starCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [checkIn, setCheckIn] = useState("2026-11-14");
  const [checkOut, setCheckOut] = useState("2026-11-17");
  const [adults, setAdults] = useState(2);
  const [children] = useState(0);
  const [roomsCount] = useState(1);
  const [selectedRoomSlug, setSelectedRoomSlug] = useState(
    ROOM_STORIES[0].slug
  );
  const [promoCode, setPromoCode] = useState("THAR10");
  const [guestEmail, setGuestEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AvailabilityResult | null>(null);
  const [confirmedReservation, setConfirmedReservation] = useState(false);

  // Subtle twinkling night stars canvas — strictly paused when off-screen or reduced-motion
  useEffect(() => {
    const canvas = starCanvasRef.current;
    const sectionEl = sectionRef.current;
    if (!canvas || !sectionEl) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let frameId: number | null = null;
    let isVisible = false;
    let width = (canvas.width = window.innerWidth);
    const height = (canvas.height = 760);

    const starCount = width < 768 ? 25 : 55;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.018 + 0.006,
    }));

    const render = () => {
      if (!isVisible || document.hidden) {
        frameId = null;
        return;
      }
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        s.phase += s.speed;
        const alpha = 0.25 + Math.sin(s.phase) * 0.3 + 0.25;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 241, 229, ${alpha})`;
        ctx.fill();
      }
      frameId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (frameId === null && isVisible && !document.hidden) {
        frameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(sectionEl);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      stopLoop();
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCheckInChange = (newCheckIn: string) => {
    setCheckIn(newCheckIn);
    setErrorMsg(null);
    if (checkOut && new Date(newCheckIn) >= new Date(checkOut)) {
      const nextDay = new Date(new Date(newCheckIn).getTime() + 2 * 86400000);
      setCheckOut(nextDay.toISOString().split("T")[0]);
    }
  };

  const handleCheckAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMsg("Please select a check-out date after your check-in date.");
      return;
    }

    setLoading(true);
    setConfirmedReservation(false);
    try {
      const res = await checkHotelAvailability({
        checkIn,
        checkOut,
        adults,
        children,
        roomsCount,
        selectedRoomSlug,
        promoCode,
      });
      setResult(res);
    } catch {
      setErrorMsg(
        "Unable to reach reservation inventory at the moment. Please try again or contact our concierge."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="book-your-story"
      aria-label="Final Chapter: Book Your Story"
      className="relative min-h-screen w-full bg-night-deep text-ivory-warm py-24 sm:py-36 overflow-hidden flex flex-col justify-center"
    >
      {/* Nighttime Starry Desert & Warm Haveli Lights Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src={SITE_CONFIG.images.nightClimax.starryDesertNight}
          alt="Starlit night sky above Jaisalmer and the Thar Desert"
          fill
          placeholder="blur"
          blurDataURL={SITE_CONFIG.blurDataURL}
          sizes="100vw"
          className="object-cover object-center brightness-[0.38]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, rgba(16,24,39,0.45) 0%, rgba(9,14,23,0.95) 85%)",
          }}
        />
      </div>

      {/* Twinkling Stars Canvas */}
      <canvas
        ref={starCanvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
      />

      <div className="relative z-20 max-w-[1360px] w-full mx-auto px-6 sm:px-10 lg:px-12">
        {/* Emotional Climax Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.38em] text-desert-sand block mb-4">
            Final Chapter · Under the Thar Stars
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl text-ivory-warm tracking-[0.12em] leading-tight">
            THE CITY WILL REMEMBER YOUR FOOTSTEPS.
          </h2>
          <p className="font-serif italic text-3xl sm:text-5xl text-desert-sand mt-3">
            WILL YOU?
          </p>
        </div>

        {/* Premium Direct Booking Panel */}
        <div className="bg-night-blue/90 backdrop-blur-xl border border-desert-sand/35 p-6 sm:p-10 lg:p-12 shadow-[0_25px_90px_rgba(0,0,0,0.85)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-desert-sand/20">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-desert-sand">
                Direct Sanctuary Reservations
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory-warm mt-1">
                BOOK YOUR JAISALMER STORY
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-desert-sand bg-night-deep/75 px-4 py-2 border border-desert-sand/25">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>
                Use code <strong>THAR10</strong> for 10% Direct Privilege
              </span>
            </div>
          </div>

          {errorMsg && (
            <div
              role="alert"
              className="mb-6 p-4 bg-red-950/70 border border-red-400/40 text-red-200 text-xs flex items-center gap-2.5"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-red-300" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form
            onSubmit={handleCheckAvailability}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 items-end"
          >
            {/* Check-In */}
            <div className="space-y-2">
              <label
                htmlFor="widget-checkin"
                className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand"
              >
                Check-In
              </label>
              <input
                id="widget-checkin"
                type="date"
                value={checkIn}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="w-full bg-night-deep border border-desert-sand/30 px-3.5 py-3 text-xs text-ivory-warm focus:outline-none focus:border-desert-sand"
                required
              />
            </div>

            {/* Check-Out */}
            <div className="space-y-2">
              <label
                htmlFor="widget-checkout"
                className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand"
              >
                Check-Out
              </label>
              <input
                id="widget-checkout"
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                  setErrorMsg(null);
                }}
                className="w-full bg-night-deep border border-desert-sand/30 px-3.5 py-3 text-xs text-ivory-warm focus:outline-none focus:border-desert-sand"
                required
              />
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label
                htmlFor="widget-guests"
                className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand"
              >
                Guests
              </label>
              <div className="flex items-center bg-night-deep border border-desert-sand/30 px-3 py-2.5 text-xs">
                <Users className="w-4 h-4 text-desert-sand mr-2 shrink-0" />
                <select
                  id="widget-guests"
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="bg-transparent text-ivory-warm w-full focus:outline-none"
                >
                  <option value={1} className="bg-night-deep">
                    1 Adult
                  </option>
                  <option value={2} className="bg-night-deep">
                    2 Adults
                  </option>
                  <option value={3} className="bg-night-deep">
                    3 Adults
                  </option>
                  <option value={4} className="bg-night-deep">
                    4 Adults / Family
                  </option>
                </select>
              </div>
            </div>

            {/* Rooms & Suite Chapter */}
            <div className="space-y-2">
              <label
                htmlFor="widget-suite"
                className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand"
              >
                Sanctuary Chapter
              </label>
              <select
                id="widget-suite"
                value={selectedRoomSlug}
                onChange={(e) => setSelectedRoomSlug(e.target.value)}
                className="w-full bg-night-deep border border-desert-sand/30 px-3 py-3 text-xs text-ivory-warm focus:outline-none focus:border-desert-sand"
              >
                {ROOM_STORIES.map((room) => (
                  <option
                    key={room.slug}
                    value={room.slug}
                    className="bg-night-deep"
                  >
                    {room.name} ({room.priceDisplay})
                  </option>
                ))}
              </select>
            </div>

            {/* Promo Code */}
            <div className="space-y-2">
              <label
                htmlFor="widget-promo"
                className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand"
              >
                Promo Code
              </label>
              <div className="flex items-center bg-night-deep border border-desert-sand/30 px-3 py-2.5">
                <Tag className="w-3.5 h-3.5 text-desert-sand mr-2 shrink-0" />
                <input
                  id="widget-promo"
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Optional code"
                  className="bg-transparent text-xs text-ivory-warm w-full focus:outline-none uppercase tracking-wider"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-5 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.22em] transition-all flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(200,138,43,0.35)]"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {loading ? "Checking..." : "Check Availability"}
                </span>
              </button>
            </div>
          </form>

          {/* Live Availability Result Panel */}
          {result && (
            <div className="mt-8 pt-8 border-t border-desert-sand/25 bg-night-deep/85 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-[0.22em]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Sanctuary Available for Your Dates</span>
                </div>
                <h4 className="font-serif text-2xl text-ivory-warm">
                  {result.recommendedRoom.name} · {result.nights}{" "}
                  {result.nights === 1 ? "Night" : "Nights"}
                </h4>
                <p className="text-xs text-ivory-warm/70">
                  Reference:{" "}
                  <span className="font-mono text-desert-sand">
                    {result.reservationReference}
                  </span>{" "}
                  · Includes complimentary airport transfer, dawn fort walk &
                  daily breakfast.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="text-left sm:text-right mr-2">
                  {result.appliedPromoDiscountPercent > 0 && (
                    <span className="text-[11px] uppercase tracking-[0.18em] text-desert-sand block">
                      {result.appliedPromoDiscountPercent}% Privilege Applied
                    </span>
                  )}
                  <span className="font-serif text-3xl text-ivory-warm">
                    ₹{result.estimatedTotalINR.toLocaleString("en-IN")}
                  </span>
                  <span className="text-[11px] text-ivory-warm/55 block">
                    Total for {result.nights} nights (Excl. taxes)
                  </span>
                </div>

                {!confirmedReservation ? (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      placeholder="Your email for confirmation"
                      aria-label="Your email for confirmation"
                      className="bg-night-blue border border-desert-sand/35 px-4 py-3 text-xs text-ivory-warm focus:outline-none focus:border-desert-sand"
                    />
                    <button
                      type="button"
                      onClick={() => setConfirmedReservation(true)}
                      className="px-6 py-3.5 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.22em] inline-flex items-center justify-center gap-2 shrink-0"
                    >
                      <span>Confirm Direct Hold</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="px-5 py-3 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs">
                    Priority Sanctuary Hold Created ({result.reservationReference}
                    ){guestEmail ? ` for ${guestEmail}` : ""}. Our Royal
                    Concierge will contact you shortly.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
