import type { Metadata } from "next";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/siteConfig";
import { Reviews } from "@/components/Reviews";
import { BookingWidget } from "@/components/BookingWidget";
import { generateBreadcrumbJsonLd } from "@/lib/seoSchema";

export const metadata: Metadata = {
  title: "Our Heritage Story | 18th-Century Luxury Boutique Haveli in Jaisalmer",
  description:
    "Discover the architectural restoration of Suryavansh Haveli—an 18th-century sandstone sanctuary in Jaisalmer preserving Silawat stone craftsmanship and royal Rajasthani hospitality.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "The Stay & Heritage", path: "/about" },
  ]);

  return (
    <div className="bg-night-deep text-ivory-warm pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 border-b border-desert-sand/15">
        <nav
          aria-label="Breadcrumb"
          className="text-xs text-desert-sand uppercase tracking-[0.2em] mb-6"
        >
          <Link href="/" className="hover:underline">
            Sanctuary
          </Link>{" "}
          / <span className="text-ivory-warm/75">The Stay</span>
        </nav>

        <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
          Est. 1784 · Restored by Master Silawat Craftsmen
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory-warm tracking-wide max-w-4xl leading-[1.08]">
          A LIVING DIALOGUE BETWEEN SANDSTONE, SILENCE & TIME.
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-ivory-warm/80 leading-relaxed">
            <p>
              Originally commissioned in 1784 as a private noble residence along
              the medieval Silk Route caravan trail,{" "}
              <strong>{SITE_CONFIG.hotelName}</strong> was painstakingly
              restored over six years using only traditional lime mortar,
              hand-chiselled Jurassian yellow sandstone, and salvaged Burma
              teak.
            </p>
            <p>
              Rather than operating like a conventional hotel, the haveli
              remains a private house of fourteen chambers. There is no marble
              reception desk or check-in queue—only the cool shade of the Mor
              Chowk courtyard, the murmur of water, and hospitality guided by
              the ancient desert code of <em>Atithi Devo Bhava</em>.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-[420px] border border-desert-sand/30 overflow-hidden">
            <Image
              src={SITE_CONFIG.images.hiddenDoor.courtyardSanctuary}
              alt="Restored 18th-century sandstone courtyard of Suryavansh Haveli"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Three Pillars of Restoration */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-heritage-deep border border-desert-sand/25">
          <span className="text-xs font-mono text-desert-sand">01</span>
          <h2 className="font-serif text-2xl text-ivory-warm mt-2">
            Silawat Stone Craftsmanship
          </h2>
          <p className="text-sm text-ivory-warm/75 mt-3 leading-relaxed">
            Every jali lattice screen in the haveli was carved without power
            tools by eighth-generation Silawat artisans, allowing desert breezes
            to cool the interiors naturally while casting intricate geometric
            shadows.
          </p>
        </div>

        <div className="p-8 bg-heritage-deep border border-desert-sand/25">
          <span className="text-xs font-mono text-desert-sand">02</span>
          <h2 className="font-serif text-2xl text-ivory-warm mt-2">
            Rainwater Khadin & Stepwell
          </h2>
          <p className="text-sm text-ivory-warm/75 mt-3 leading-relaxed">
            Honouring Jaisalmer&apos;s ancient water wisdom, our subterranean
            stepwell plunge pool and roof channels harvest every drop of rare
            desert monsoon rain into underground limestone cisterns.
          </p>
        </div>

        <div className="p-8 bg-heritage-deep border border-desert-sand/25">
          <span className="text-xs font-mono text-desert-sand">03</span>
          <h2 className="font-serif text-2xl text-ivory-warm mt-2">
            Patronage of Living Folklore
          </h2>
          <p className="text-sm text-ivory-warm/75 mt-3 leading-relaxed">
            Each stay directly supports hereditary Manganiyar musicians, Barmer
            handloom weavers, and community-protected Oran wildlife groves in
            the Thar.
          </p>
        </div>
      </section>

      <Reviews />
      <BookingWidget />
    </div>
  );
}
