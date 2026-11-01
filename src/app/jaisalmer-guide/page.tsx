import type { Metadata } from "next";
import Link from "next/link";
import { JaisalmerGuide } from "@/components/JaisalmerGuide";
import { JourneyBuilder } from "@/components/JourneyBuilder";
import { BookingWidget } from "@/components/BookingWidget";
import { generateBreadcrumbJsonLd } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Jaisalmer Travel Guide: Best Time to Visit, Itineraries & Desert Safari",
  description:
    "Explore our curated Jaisalmer destination guides written by resident historians—covering the best time to visit Jaisalmer, 3-day itineraries, private desert safaris, and hidden heritage spots.",
  alternates: {
    canonical: "/jaisalmer-guide",
  },
};

export default function JaisalmerGuideHubPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Jaisalmer Travel Guide", path: "/jaisalmer-guide" },
  ]);

  return (
    <div className="bg-night-deep text-ivory-warm pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 border-b border-desert-sand/15">
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-desert-sand uppercase tracking-[0.2em] mb-6"
        >
          <Link href="/" className="hover:underline">
            Sanctuary
          </Link>{" "}
          / <span className="text-ivory-warm/70">Jaisalmer Guide</span>
        </nav>

        <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
          The Golden City Chronicles
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory-warm tracking-wide max-w-4xl">
          THE DISCERNING TRAVELLER&apos;S GUIDE TO JAISALMER
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ivory-warm/75 max-w-2xl leading-relaxed">
          Genuine, in-depth dispatches from our resident historians, desert
          trackers, and royal kitchen chefs—crafted to help you experience the
          Thar Desert with depth and authenticity.
        </p>
      </section>

      <JaisalmerGuide />

      <JourneyBuilder />

      <BookingWidget />
    </div>
  );
}
