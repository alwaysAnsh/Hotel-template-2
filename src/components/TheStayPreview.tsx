import React from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

export function TheStayPreview() {
  return (
    <section
      id="chapter-journey"
      aria-label="The Stay — 18th-Century Sandstone Sanctuary"
      className="relative bg-heritage-deep text-ivory-warm py-24 sm:py-32 overflow-hidden border-t border-desert-sand/20"
    >
      <div className="jali-border-top absolute top-0 inset-x-0 z-10" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Cinematic Visual Preview */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[500px] w-full overflow-hidden border border-desert-sand/30 group shadow-2xl">
            <Image
              src={SITE_CONFIG.images.hiddenDoor.courtyardSanctuary}
              alt="Lantern-lit 18th-century sandstone courtyard at Suryavansh Haveli, Jaisalmer"
              fill
              placeholder="blur"
              blurDataURL={SITE_CONFIG.blurDataURL}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out brightness-[0.88] will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-deep/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs">
              <span className="px-3.5 py-1.5 bg-night-deep/85 backdrop-blur-sm border border-desert-sand/30 uppercase tracking-[0.22em] text-desert-sand">
                Est. 1784 · Golden City Precinct
              </span>
            </div>
          </div>

          {/* Right: Concise Editorial Introduction & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block">
              The Stay · Heritage Sanctuary
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-ivory-warm tracking-wide leading-[1.12]">
              A PRIVATE HOUSE OF STONE, STILLNESS & LIGHT.
            </h2>

            <p className="font-serif italic text-xl text-desert-sand">
              &ldquo;Beyond the golden dunes lies an 18th-century haveli where
              time slows to a quiet breath.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-ivory-warm/75 leading-relaxed">
              Carved by master Silawat artisans from Jurassian yellow limestone,{" "}
              {SITE_CONFIG.hotelName} is an intimate fourteen-chamber sanctuary
              centered around cool marble water courts, cantilevered jharokha
              balconies, and timeless Rajasthani hospitality.
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-7 py-4 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.24em] transition-all duration-500 shadow-[0_10px_35px_rgba(200,138,43,0.3)]"
              >
                <span>Explore The Stay</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
