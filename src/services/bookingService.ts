import { ROOM_STORIES } from "@/data/hotelData";

export interface BookingInquiryPayload {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomsCount: number;
  selectedRoomSlug?: string;
  promoCode?: string;
  curatedStoryContext?: string;
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  specialRequests?: string;
}

export interface AvailabilityResult {
  available: boolean;
  nights: number;
  currency: string;
  estimatedTotalINR: number;
  appliedPromoDiscountPercent: number;
  recommendedRoom: {
    name: string;
    slug: string;
    pricePerNightINR: number;
  };
  reservationReference: string;
  channelManagerStatus: "READY_FOR_DIRECT_BOOKING" | "INQUIRY_ONLY";
}

/**
 * Clean service abstraction layer ready to connect to a live Channel Manager / PMS
 * (e.g., SynXis, SiteMinder, Staah, eZee, or Opera Cloud API).
 */
export async function checkHotelAvailability(
  payload: BookingInquiryPayload
): Promise<AvailabilityResult> {
  // Simulate lightweight network latency for realistic UX feedback
  await new Promise((resolve) => setTimeout(resolve, 450));

  const start = payload.checkIn ? new Date(payload.checkIn) : new Date();
  const end = payload.checkOut
    ? new Date(payload.checkOut)
    : new Date(Date.now() + 3 * 86400000);

  const diffMs = Math.max(86400000, end.getTime() - start.getTime());
  const nights = Math.max(1, Math.min(30, Math.round(diffMs / 86400000)));

  const matchedRoom =
    ROOM_STORIES.find((r) => r.slug === payload.selectedRoomSlug) ||
    ROOM_STORIES[0];

  const normalizedPromo = (payload.promoCode || "").trim().toUpperCase();
  const discountPercent =
    normalizedPromo === "THAR10" || normalizedPromo === "ROYALSTAY" ? 10 : 0;

  const baseTotal =
    matchedRoom.pricePerNightINR * nights * Math.max(1, payload.roomsCount);
  const estimatedTotalINR = Math.round(
    baseTotal * (1 - discountPercent / 100)
  );

  const randomCode = Math.floor(100000 + Math.random() * 900000);

  return {
    available: true,
    nights,
    currency: "INR",
    estimatedTotalINR,
    appliedPromoDiscountPercent: discountPercent,
    recommendedRoom: {
      name: matchedRoom.name,
      slug: matchedRoom.slug,
      pricePerNightINR: matchedRoom.pricePerNightINR,
    },
    reservationReference: `SVH-JSA-${randomCode}`,
    channelManagerStatus: "READY_FOR_DIRECT_BOOKING",
  };
}
