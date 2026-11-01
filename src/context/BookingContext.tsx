"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingModalPrefill {
  selectedRoomSlug?: string;
  curatedStoryContext?: string;
  recommendedDurationDays?: number;
  travellerType?: string;
}

interface BookingContextValue {
  isModalOpen: boolean;
  prefill: BookingModalPrefill;
  openBookingModal: (prefillData?: BookingModalPrefill) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextValue | undefined>(
  undefined
);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prefill, setPrefill] = useState<BookingModalPrefill>({});

  const openBookingModal = (prefillData?: BookingModalPrefill) => {
    if (prefillData) {
      setPrefill((prev) => ({ ...prev, ...prefillData }));
    }
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{ isModalOpen, prefill, openBookingModal, closeBookingModal }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
