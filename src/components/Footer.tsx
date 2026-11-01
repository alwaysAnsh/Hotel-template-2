"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/siteConfig";
import { JAISALMER_GUIDES } from "@/data/guidesData";
import { ROOM_STORIES } from "@/data/hotelData";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export function Footer() {
  const { openBookingModal } = useBooking();

  return (
    <footer className="bg-night-deep text-ivory-warm border-t border-desert-sand/20 pb-24 sm:pb-12">
      <div className="jali-border-top w-full" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 pt-16 sm:pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-desert-sand/15">
          {/* Col 1: Brand & Poetic Note */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <p className="font-serif text-2xl sm:text-3xl tracking-[0.22em] text-ivory-warm">
                {SITE_CONFIG.hotelName}
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-desert-sand mt-1">
                {SITE_CONFIG.hotelTagline}
              </p>
            </div>
            <p className="text-sm text-ivory-warm/70 leading-relaxed max-w-sm">
              An intimate 18th-century golden sandstone haveli in the heart of
              Jaisalmer. Crafted for travellers who seek the stillness of the
              Thar Desert, living royal heritage, and unhurried luxury.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-desert-sand hover:text-ivory-warm border-b border-desert-sand pb-1.5 transition-colors"
              >
                <span>Reserve Your Sanctuary</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Sanctuaries & Chapters */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-desert-sand">
              The Sanctuaries
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory-warm/75">
              {ROOM_STORIES.map((room) => (
                <li key={room.id}>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="hover:text-desert-sand transition-colors"
                  >
                    {room.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/experiences"
                  className="hover:text-desert-sand transition-colors"
                >
                  Private Thar Expeditions
                </Link>
              </li>
              <li>
                <Link
                  href="/dining"
                  className="hover:text-desert-sand transition-colors"
                >
                  Kesar Bagh & Starlight Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-desert-sand transition-colors"
                >
                  Visual Archive & Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: SEO Jaisalmer Travel Guides */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-desert-sand">
              Jaisalmer Chronicles
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory-warm/75">
              {JAISALMER_GUIDES.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/jaisalmer-guide/${guide.slug}`}
                    className="hover:text-desert-sand transition-colors line-clamp-1"
                  >
                    {guide.title.split(":")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Coordinates */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-desert-sand">
              Royal Concierge
            </h3>
            <div className="space-y-3 text-xs text-ivory-warm/75 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-desert-sand shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location.addressPlaceholder}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-desert-sand shrink-0" />
                <span>{SITE_CONFIG.contact.phonePlaceholder}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-desert-sand shrink-0" />
                <span className="break-all">
                  {SITE_CONFIG.contact.emailPlaceholder}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & SEO Local Footnote */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ivory-warm/50">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.hotelName} · Luxury
            Boutique Heritage Hotel near Jaisalmer Fort, Rajasthan, India.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link href="/about" className="hover:text-desert-sand">
              Our Heritage
            </Link>
            <Link href="/jaisalmer-guide" className="hover:text-desert-sand">
              Destination Guide
            </Link>
            <Link href="/contact" className="hover:text-desert-sand">
              Directions & Transfers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
