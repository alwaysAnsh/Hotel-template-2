import React from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { JAISALMER_GUIDES } from "@/data/guidesData";
import { SITE_CONFIG } from "@/config/siteConfig";

export function JaisalmerGuide() {
  return (
    <section
      id="jaisalmer-guide-section"
      aria-label="Section 9: The Jaisalmer Guide — Destination Chronicles"
      className="relative bg-night-blue text-ivory-warm py-24 sm:py-32 border-t border-desert-sand/15"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand flex items-center gap-2 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Curatorial Journal & Destination Guide</span>
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-ivory-warm tracking-wide">
              MORE THAN A DESTINATION
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-ivory-warm/75 leading-relaxed">
              Written by our resident historians, naturalists, and chefs—explore
              our in-depth travel essays to help you plan an extraordinary
              journey to Jaisalmer.
            </p>
            <Link
              href="/jaisalmer-guide"
              className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-[0.22em] text-desert-sand hover:text-ivory-warm border-b border-desert-sand pb-1"
            >
              <span>Explore All 6 Travel Guides</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6 SEO Editorial Guide Cards (Server Rendered for Zero JS Overhead & Instant Indexing) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JAISALMER_GUIDES.map((guide, index) => (
            <article
              key={guide.slug}
              className="group bg-night-deep/85 border border-desert-sand/20 hover:border-desert-sand/60 transition-colors duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <Link
                  href={`/jaisalmer-guide/${guide.slug}`}
                  className="block relative h-60 w-full overflow-hidden"
                >
                  <Image
                    src={guide.heroImage}
                    alt={guide.title}
                    fill
                    placeholder="blur"
                    blurDataURL={SITE_CONFIG.blurDataURL}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-deep via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-night-deep/85 border border-desert-sand/30 text-[10px] uppercase tracking-[0.2em] text-desert-sand">
                    0{index + 1} · {guide.category}
                  </div>
                </Link>

                <div className="p-7">
                  <div className="flex items-center gap-2 text-[11px] text-ivory-warm/55 mb-3">
                    <Clock className="w-3.5 h-3.5 text-desert-sand" />
                    <span>{guide.readTime}</span>
                    <span>·</span>
                    <span>Jaisalmer Archive</span>
                  </div>

                  <h3 className="font-serif text-2xl text-ivory-warm group-hover:text-desert-sand transition-colors leading-snug">
                    <Link href={`/jaisalmer-guide/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-ivory-warm/70 leading-relaxed line-clamp-3">
                    {guide.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-4 border-t border-desert-sand/15 flex items-center justify-between">
                <Link
                  href={`/jaisalmer-guide/${guide.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-desert-sand group-hover:text-ivory-warm transition-colors"
                >
                  <span>Read Chronicle</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
