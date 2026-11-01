import type { Metadata } from "next";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { HORIZONTAL_EXPERIENCES } from "@/data/hotelData";
import { YourJaisalmerStory } from "@/components/YourJaisalmerStory";
import { JourneyBuilder } from "@/components/JourneyBuilder";
import { BookingWidget } from "@/components/BookingWidget";
import { generateBreadcrumbJsonLd } from "@/lib/seoSchema";
import { Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Bespoke Thar Desert Safaris & Cultural Experiences in Jaisalmer",
  description:
    "Explore private Thar Desert expeditions, dawn walks inside Jaisalmer Fort with resident historians, Bada Bagh champagne sundowners, and acoustic Manganiyar recitals.",
  alternates: {
    canonical: "/experiences",
  },
};

export default function ExperiencesPage() {
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Experiences", path: "/experiences" },
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
          / <span className="text-ivory-warm/75">Experiences</span>
        </nav>

        <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-3">
          Into the Living Thar
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory-warm tracking-wide max-w-4xl">
          CURATED EXPEDITIONS & ROYAL RITUALS
        </h1>
        <p className="mt-6 text-base sm:text-lg text-ivory-warm/75 max-w-2xl leading-relaxed">
          Every expedition is privately chartered and led by resident historians,
          Raika pastoralists, or master musicians—taking you far beyond the
          commercial tourist circuit.
        </p>
      </section>

      {/* Detailed Experience Chapters */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-20 space-y-16">
        {HORIZONTAL_EXPERIENCES.map((exp, idx) => (
          <article
            key={exp.id}
            className="grid grid-cols-1 lg:grid-cols-12 border border-desert-sand/25 bg-night-blue/60 overflow-hidden"
          >
            <div
              className={`lg:col-span-6 relative min-h-[380px] ${
                idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <Image
                src={exp.image}
                alt={exp.title}
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
                <div className="flex items-center justify-between text-xs text-desert-sand uppercase tracking-[0.25em]">
                  <span>
                    {exp.number} · {exp.category}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-ivory-warm">
                  {exp.title}
                </h2>
                <p className="font-serif italic text-xl text-desert-sand">
                  &ldquo;{exp.poeticSubtitle}&rdquo;
                </p>
                <p className="text-sm sm:text-base text-ivory-warm/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-desert-sand/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 bg-night-deep border border-desert-sand/25 text-[10px] uppercase tracking-[0.18em] text-desert-sand"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-ivory-warm/65 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-desert-sand" />
                  {exp.bestTime}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <YourJaisalmerStory />
      <JourneyBuilder />
      <BookingWidget />
    </div>
  );
}
