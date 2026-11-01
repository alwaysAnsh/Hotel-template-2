import type { Metadata } from "next";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { BookingWidget } from "@/components/BookingWidget";
import { generateBreadcrumbJsonLd } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Visual Archive & Photo Gallery | Suryavansh Haveli Jaisalmer",
  description:
    "Explore editorial photography of Suryavansh Haveli, our heritage sandstone suites, candlelit courtyard dining, Jaisalmer Fort, and the golden dunes of the Thar Desert.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
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
          / <span className="text-ivory-warm/75">Gallery</span>
        </nav>

        <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
          Visual Studies in Light & Stone
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory-warm tracking-wide">
          THE SANCTUARY ARCHIVE
        </h1>
        <p className="mt-4 text-base sm:text-lg text-ivory-warm/75 max-w-2xl">
          Filter through moments of morning sunlight on carved limestone,
          wind-sculpted dunes, and lantern-lit nights in the Golden City.
        </p>
      </section>

      <Gallery showHeader={false} />

      <BookingWidget />
    </div>
  );
}
