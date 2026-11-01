import type { Metadata } from "next";
import Link from "next/link";
import { ROOM_STORIES } from "@/data/hotelData";
import { RoomStorySection } from "@/components/RoomStoryCard";
import { BookingWidget } from "@/components/BookingWidget";
import { generateBreadcrumbJsonLd } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Luxury Heritage Suites & Rooms in Jaisalmer",
  description:
    "Explore the 14 individually restored sandstone suites and chambers at Suryavansh Haveli—featuring carved jharokha balconies, sunken brass tubs, and Golden Fort views.",
  alternates: {
    canonical: "/rooms",
  },
};

export default function RoomsPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Suites & Rooms", path: "/rooms" },
  ]);

  return (
    <div className="bg-night-deep text-ivory-warm pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Editorial Intro Banner */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 border-b border-desert-sand/15">
        <nav aria-label="Breadcrumb" className="text-xs text-desert-sand mb-6">
          <ol className="flex items-center gap-2 uppercase tracking-[0.2em]">
            <li>
              <Link href="/" className="hover:underline">
                Sanctuary
              </Link>
            </li>
            <li>/</li>
            <li className="text-ivory-warm/70">Rooms & Suites</li>
          </ol>
        </nav>

        <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
          18th-Century Sandstone Chambers
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory-warm tracking-wide max-w-4xl leading-[1.08]">
          FOURTEEN SANCTUARIES. FOUR TIMELESS CHAPTERS.
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ivory-warm/75 max-w-2xl leading-relaxed">
          Every suite in our heritage haveli was carved by hand from Jurassian
          golden limestone. Thick stone walls keep the midday desert heat at
          bay, while cantilevered jharokha windows frame the living Golden Fort.
        </p>
      </section>

      {/* Editorial Room Panels */}
      <RoomStorySection />

      {/* Architectural Comparison Matrix */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-24">
        <h2 className="font-serif text-3xl sm:text-4xl text-ivory-warm mb-10">
          Sanctuary Specifications
        </h2>
        <div className="overflow-x-auto border border-desert-sand/25">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-heritage-deep border-b border-desert-sand/25 text-[11px] uppercase tracking-[0.22em] text-desert-sand">
                <th className="p-5">Chapter / Suite</th>
                <th className="p-5">Dimensions</th>
                <th className="p-5">Occupancy</th>
                <th className="p-5">Primary Vista</th>
                <th className="p-5">Nightly Tariff</th>
                <th className="p-5">Explore</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-desert-sand/15 text-xs sm:text-sm">
              {ROOM_STORIES.map((room) => (
                <tr
                  key={room.id}
                  className="hover:bg-night-blue/60 transition-colors"
                >
                  <td className="p-5 font-serif text-lg text-ivory-warm">
                    {room.number} · {room.name}
                  </td>
                  <td className="p-5 text-ivory-warm/80">
                    {room.sizeSqFt} sq.ft ({room.sizeSqM} m²)
                  </td>
                  <td className="p-5 text-ivory-warm/80">{room.occupancy}</td>
                  <td className="p-5 text-ivory-warm/80">{room.view}</td>
                  <td className="p-5 text-desert-sand font-semibold">
                    {room.priceDisplay}
                  </td>
                  <td className="p-5">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="text-xs uppercase tracking-[0.2em] text-desert-sand hover:underline"
                    >
                      Enter Suite →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <BookingWidget />
    </div>
  );
}
