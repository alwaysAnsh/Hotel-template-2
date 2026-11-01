"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { ROOM_STORIES } from "@/data/hotelData";
import {
  checkHotelAvailability,
  AvailabilityResult,
} from "@/services/bookingService";

export function BookingModal() {
  const { isModalOpen, prefill, closeBookingModal } = useBooking();

  const [checkIn, setCheckIn] = useState("2026-11-14");
  const [checkOut, setCheckOut] = useState("2026-11-17");
  const [adults, setAdults] = useState(2);
  const [roomsCount, setRoomsCount] = useState(1);
  const [selectedRoomSlug, setSelectedRoomSlug] = useState(
    ROOM_STORIES[0].slug
  );
  const [promoCode, setPromoCode] = useState("THAR10");
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AvailabilityResult | null>(null);
  const [submittedHold, setSubmittedHold] = useState(false);

  useEffect(() => {
    if (prefill.selectedRoomSlug) {
      setSelectedRoomSlug(prefill.selectedRoomSlug);
    }
    if (prefill.recommendedDurationDays) {
      const start = new Date("2026-11-14");
      const end = new Date(
        start.getTime() + prefill.recommendedDurationDays * 86400000
      );
      setCheckOut(end.toISOString().split("T")[0]);
    }
  }, [prefill]);

  // Keyboard Escape & body scroll lock
  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeBookingModal();
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, closeBookingModal]);

  const handleCheckInChange = (newCheckIn: string) => {
    setCheckIn(newCheckIn);
    setErrorMsg(null);
    if (checkOut && new Date(newCheckIn) >= new Date(checkOut)) {
      const nextDay = new Date(new Date(newCheckIn).getTime() + 2 * 86400000);
      setCheckOut(nextDay.toISOString().split("T")[0]);
    }
  };

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (new Date(checkOut) <= new Date(checkIn)) {
      setErrorMsg("Please choose a check-out date after your check-in date.");
      return;
    }

    setLoading(true);
    setSubmittedHold(false);
    try {
      const res = await checkHotelAvailability({
        checkIn,
        checkOut,
        adults,
        children: 0,
        roomsCount,
        selectedRoomSlug,
        promoCode,
        curatedStoryContext: prefill.curatedStoryContext,
        guestName,
        guestEmail,
      });
      setResult(res);
    } catch {
      setErrorMsg("Unable to verify live availability. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-night-deep/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={closeBookingModal}
          role="dialog"
          aria-modal="true"
          aria-label="Book Your Stay at Suryavansh Haveli"
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-night-blue border border-desert-sand/40 p-6 sm:p-10 text-ivory-warm shadow-2xl my-auto"
          >
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-desert-sand/20">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-desert-sand flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Direct Sanctuary Reservation
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-ivory-warm mt-1">
                  RESERVE YOUR JAISALMER STORY
                </h2>
                {prefill.curatedStoryContext && (
                  <p className="text-xs text-desert-sand mt-1">
                    Curated Blueprint: {prefill.curatedStoryContext}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={closeBookingModal}
                aria-label="Close booking modal"
                className="p-2 border border-desert-sand/30 text-ivory-warm hover:text-desert-sand"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {errorMsg && (
              <div
                role="alert"
                className="mt-4 p-3.5 bg-red-950/75 border border-red-400/40 text-red-200 text-xs flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleCheck} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-1.5">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => handleCheckInChange(e.target.value)}
                    className="w-full bg-night-deep border border-desert-sand/30 px-3.5 py-2.5 text-xs text-ivory-warm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-1.5">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => {
                      setCheckOut(e.target.value);
                      setErrorMsg(null);
                    }}
                    className="w-full bg-night-deep border border-desert-sand/30 px-3.5 py-2.5 text-xs text-ivory-warm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-1.5">
                    Preferred Suite Chapter
                  </label>
                  <select
                    value={selectedRoomSlug}
                    onChange={(e) => setSelectedRoomSlug(e.target.value)}
                    className="w-full bg-night-deep border border-desert-sand/30 px-3.5 py-2.5 text-xs text-ivory-warm"
                  >
                    {ROOM_STORIES.map((r) => (
                      <option
                        key={r.slug}
                        value={r.slug}
                        className="bg-night-deep"
                      >
                        {r.name} — {r.priceDisplay}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-1.5">
                    Guests & Suites
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      aria-label="Number of adults"
                      className="bg-night-deep border border-desert-sand/30 px-2 py-2.5 text-xs text-ivory-warm"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                    <select
                      value={roomsCount}
                      onChange={(e) => setRoomsCount(Number(e.target.value))}
                      aria-label="Number of rooms"
                      className="bg-night-deep border border-desert-sand/30 px-2 py-2.5 text-xs text-ivory-warm"
                    >
                      <option value={1}>1 Suite</option>
                      <option value={2}>2 Suites</option>
                      <option value={3}>3 Suites</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Maharaja Guest"
                    className="w-full bg-night-deep border border-desert-sand/30 px-3.5 py-2.5 text-xs text-ivory-warm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-1.5">
                    Email for Itinerary
                  </label>
                  <input
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="guest@example.com"
                    className="w-full bg-night-deep border border-desert-sand/30 px-3.5 py-2.5 text-xs text-ivory-warm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-1.5">
                    Privilege Code
                  </label>
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-night-deep border border-desert-sand/30 px-3.5 py-2.5 text-xs text-ivory-warm uppercase"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.25em] transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {loading
                    ? "Verifying Sanctuary Inventory..."
                    : "Check Live Availability"}
                </span>
              </button>
            </form>

            {result && (
              <div className="mt-6 pt-6 border-t border-desert-sand/25 bg-night-deep p-5 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <p className="text-xs text-emerald-400 flex items-center gap-1.5 uppercase tracking-[0.2em]">
                      <CheckCircle2 className="w-4 h-4" />
                      Available · {result.nights} Nights
                    </p>
                    <h3 className="font-serif text-xl text-ivory-warm mt-1">
                      {result.recommendedRoom.name}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-serif text-2xl text-desert-sand">
                      ₹{result.estimatedTotalINR.toLocaleString("en-IN")}
                    </p>
                    <p className="text-[10px] text-ivory-warm/60">
                      Ref: {result.reservationReference}
                    </p>
                  </div>
                </div>

                {!submittedHold ? (
                  <button
                    type="button"
                    onClick={() => setSubmittedHold(true)}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-ivory-warm text-xs font-semibold uppercase tracking-[0.22em] flex items-center justify-center gap-2"
                  >
                    <span>Lock Priority Direct Reservation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div className="p-3.5 bg-emerald-950/90 border border-emerald-500/40 text-xs text-emerald-200 leading-relaxed">
                    Reservation Hold{" "}
                    <strong>{result.reservationReference}</strong> confirmed.
                    Our Khidmatgar concierge team has received your preferences.
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
