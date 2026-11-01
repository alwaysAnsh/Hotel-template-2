import type { Metadata } from "next";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/siteConfig";
import { BookingWidget } from "@/components/BookingWidget";
import { generateBreadcrumbJsonLd } from "@/lib/seoSchema";
import { Utensils, Flame, Sparkles, Wine } from "lucide-react";

export const metadata: Metadata = {
  title: "Royal Rajasthani Dining & Rooftop Restaurant in Jaisalmer",
  description:
    "Dine overlooking Jaisalmer Fort at Burj-e-Surya or in the candlelit Kesar Bagh courtyard. Savour heirloom Marwar recipes, Ker Sangri, smoked Laal Maas, and dune feasts.",
  alternates: {
    canonical: "/dining",
  },
};

const DINING_VENUES = [
  {
    name: "BURJ-E-SURYA — THE STARLIGHT BASTION",
    subtitle: "Rooftop Fine Dining Overlooking Sonar Quila",
    timing: "Sunset Cocktails & Dinner · 5:30 PM to 11:00 PM",
    description:
      "Perched on the highest sandstone bastion of the haveli at eye-level with Jaisalmer Fort. Dine by the glow of 108 brass lanterns as hereditary Manganiyar musicians perform evening ragas.",
    signatureDishes: [
      "Six-Hour Khejri-Smoked Royal Laal Maas",
      "Foraged Thar Ker Sangri & Panchkuta",
      "Hand-Pounded Pearl Millet (Bajra) Sogra with White Makhan",
    ],
    image: SITE_CONFIG.images.experiences.royalDining,
  },
  {
    name: "KESAR BAGH — THE FRANGIPANI COURTYARD",
    subtitle: "All-Day Sunlit Cloister & Subterranean Vault",
    timing: "Breakfast & Leisurely Luncheons · 7:00 AM to 4:30 PM",
    description:
      "Shaded by carved stone colonnades and cooled by marble water channels, Kesar Bagh celebrates unhurried morning saffron kahwa, freshly baked breads, and light Marwari thalis.",
    signatureDishes: [
      "Morning Saffron Kahwa & Warm Jaisalmer Ghotua",
      "Spiced Buttermilk Gatte Ki Kadhi & Crisp Papad Sabzi",
      "Rose-Petal & Pistachio Kulfi Churn",
    ],
    image: SITE_CONFIG.images.explorer.dining,
  },
  {
    name: "DUNE FIRELIGHT — TABLE IN THE WILDERNESS",
    subtitle: "Private Pop-Up Dining in the Untouched Thar",
    timing: "By Private Charter · Departs 4:30 PM",
    description:
      "Our kitchen travels with you into remote, footprint-free sand dunes. A full white-linen and hand-knotted carpet camp is set beneath the Milky Way with live earthen-pot cooking over desert embers.",
    signatureDishes: [
      "Bhatti-Roasted Desert Vegetables & Smoked Paneer",
      "Traditional Junglee Maas Prepared Over Open Fire",
      "Warm Saffron Jalebi & Spiced Desert Botanical Infusions",
    ],
    image: SITE_CONFIG.images.experiences.sunsetDunes,
  },
];

export default function DiningPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Dining", path: "/dining" },
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
          / <span className="text-ivory-warm/75">Dining</span>
        </nav>

        <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
          Culinary Alchemy of Marwar
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory-warm tracking-wide max-w-4xl">
          FORGOTTEN ROYAL RECIPES, COOKED OVER DESERT EMBERS
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ivory-warm/75 max-w-2xl leading-relaxed">
          At Suryavansh Haveli, there are no rigid restaurant hours or fixed
          tables. Dine in your private jharokha at dawn, beside the courtyard
          fountain at noon, or on the lantern-lit bastion beneath the stars.
        </p>
      </section>

      {/* Culinary Venues */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-20 space-y-16">
        {DINING_VENUES.map((venue, idx) => (
          <article
            key={venue.name}
            className="grid grid-cols-1 lg:grid-cols-12 border border-desert-sand/25 bg-heritage-deep/80 overflow-hidden"
          >
            <div
              className={`lg:col-span-6 relative min-h-[380px] ${
                idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div
              className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between ${
                idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-desert-sand flex items-center gap-2">
                  <Utensils className="w-3.5 h-3.5" />
                  {venue.timing}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-ivory-warm">
                  {venue.name}
                </h2>
                <p className="font-serif italic text-xl text-desert-sand">
                  {venue.subtitle}
                </p>
                <p className="text-sm sm:text-base text-ivory-warm/80 leading-relaxed">
                  {venue.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-desert-sand/20">
                <p className="text-[11px] uppercase tracking-[0.25em] text-desert-sand mb-3 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  Signature Preparations
                </p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-ivory-warm/85">
                  {venue.signatureDishes.map((dish) => (
                    <li key={dish}>◆ {dish}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        {/* Philosophy Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          <div className="p-8 border border-desert-sand/25 bg-night-blue/60">
            <Sparkles className="w-5 h-5 text-desert-sand mb-3" />
            <h3 className="font-serif text-2xl text-ivory-warm">
              No Fixed Menus
            </h3>
            <p className="text-xs sm:text-sm text-ivory-warm/75 mt-2 leading-relaxed">
              Our Executive Maharaj Chef meets with you over morning tea to
              tailor each evening&apos;s spice levels, heirloom grains, and
              seasonal delicacies.
            </p>
          </div>
          <div className="p-8 border border-desert-sand/25 bg-night-blue/60">
            <Flame className="w-5 h-5 text-desert-sand mb-3" />
            <h3 className="font-serif text-2xl text-ivory-warm">
              Foraged Desert Botanicals
            </h3>
            <p className="text-xs sm:text-sm text-ivory-warm/75 mt-2 leading-relaxed">
              Sun-dried Ker berries, Sangri beans, Kumatiya seeds, and wild
              fogla harvested sustainably from community-protected groves.
            </p>
          </div>
          <div className="p-8 border border-desert-sand/25 bg-night-blue/60">
            <Wine className="w-5 h-5 text-desert-sand mb-3" />
            <h3 className="font-serif text-2xl text-ivory-warm">
              Royal Heritage Liqueurs
            </h3>
            <p className="text-xs sm:text-sm text-ivory-warm/75 mt-2 leading-relaxed">
              Small-batch saffron, cardamom, and rose-petal infusions inspired
              by historic royal cellars of Rajasthan.
            </p>
          </div>
        </div>
      </section>

      <BookingWidget />
    </div>
  );
}
