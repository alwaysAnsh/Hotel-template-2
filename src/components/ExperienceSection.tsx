"use client";

import React, { useEffect, useRef, useState } from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowDown, Clock, Sparkles } from "lucide-react";
import { HORIZONTAL_EXPERIENCES } from "@/data/hotelData";
import { SITE_CONFIG } from "@/config/siteConfig";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !trackRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const track = trackRef.current!;
        const getScrollAmount = () =>
          -(track.scrollWidth - window.innerWidth + 96);

        gsap.to(track, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${Math.max(1200, (track.scrollWidth - window.innerWidth) * 0.82)}`,
            pin: true,
            scrub: 0.75,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                HORIZONTAL_EXPERIENCES.length - 1,
                Math.floor(self.progress * HORIZONTAL_EXPERIENCES.length)
              );
              setActiveIndex(idx);
            },
          },
        });
      }
    );

    return () => mm.revert();
  }, []);

  const handleSkipSection = () => {
    const nextEl = document.getElementById("jaisalmer-guide-section");
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Chapter 5: Experience Jaisalmer — Horizontal Storytelling"
      className="relative bg-gradient-to-b from-heritage-deep via-[#1E1512] to-night-blue text-ivory-warm overflow-hidden"
    >
      <div
        ref={sectionRef}
        className="min-h-screen w-full flex flex-col justify-between py-20 lg:py-14"
      >
        {/* Top Chapter Header */}
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand block mb-2">
              Chapter 05 · Experience Jaisalmer
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory-warm tracking-wide">
              BEYOND THE SANCTUARY WALLS
            </h2>
          </div>

          <div className="flex items-center gap-6 self-start sm:self-auto">
            <button
              type="button"
              onClick={handleSkipSection}
              className="hidden lg:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-ivory-warm/60 hover:text-desert-sand transition-colors"
            >
              <span>Skip Gallery</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-desert-sand hover:text-ivory-warm border-b border-desert-sand pb-1"
            >
              <span>View Full Curated Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Horizontal Storytelling Track (Vertical Scroll Driven on Desktop, Native Touch Swipe on Mobile) */}
        <div className="w-full overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 snap-x snap-mandatory">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-10 lg:gap-12 px-6 sm:px-10 lg:px-12 w-max will-change-transform"
          >
            {HORIZONTAL_EXPERIENCES.map((exp) => (
              <article
                key={exp.id}
                className="snap-center shrink-0 w-[86vw] sm:w-[74vw] lg:w-[74vw] max-w-[1000px] h-[500px] sm:h-[550px] relative border border-desert-sand/30 overflow-hidden group bg-night-deep shadow-2xl"
              >
                {/* Background Experience Image */}
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  placeholder="blur"
                  blurDataURL={SITE_CONFIG.blurDataURL}
                  sizes="(max-width: 1024px) 85vw, 74vw"
                  className="object-cover object-center brightness-[0.68] group-hover:scale-105 transition-transform duration-1000 ease-out will-change-transform"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(9,14,23,0.92) 0%, rgba(9,14,23,0.58) 55%, rgba(9,14,23,0.25) 100%)",
                  }}
                />

                {/* Content Overlay */}
                <div className="relative z-10 h-full p-6 sm:p-10 lg:p-14 flex flex-col justify-between max-w-2xl">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-4xl sm:text-5xl text-desert-sand/90">
                      {exp.number}
                    </span>
                    <div className="h-8 w-[1px] bg-desert-sand/35" />
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-desert-sand block">
                        {exp.category}
                      </span>
                      <span className="text-xs text-ivory-warm/75 flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3 h-3 text-desert-sand" />
                        {exp.duration} · {exp.bestTime}
                      </span>
                    </div>
                  </div>

                  <div className="my-auto space-y-3.5">
                    <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory-warm tracking-wide leading-[1.08]">
                      {exp.title}
                    </h3>
                    <p className="font-serif italic text-xl sm:text-2xl text-desert-sand">
                      &ldquo;{exp.poeticSubtitle}&rdquo;
                    </p>
                    <p className="text-xs sm:text-sm md:text-base text-ivory-warm/80 leading-relaxed max-w-xl">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-desert-sand/25">
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-night-deep/75 border border-desert-sand/25 text-[10px] uppercase tracking-[0.18em] text-ivory-warm/85"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/experiences"
                      className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-desert-sand hover:text-ivory-warm transition-colors"
                    >
                      <span>EXPLORE THE EXPERIENCE</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Progress & Scroll Hint */}
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12 pt-6 flex items-center justify-between text-xs text-ivory-warm/60">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-desert-sand" />
            <span className="hidden sm:inline">
              Atmosphere shifting from Golden Afternoon toward Twilight
            </span>
            <span className="sm:hidden">Swipe horizontally to explore →</span>
          </span>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5">
              {HORIZONTAL_EXPERIENCES.map((exp, idx) => (
                <span
                  key={exp.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "w-6 bg-desert-sand"
                      : "w-1.5 bg-desert-sand/30"
                  }`}
                />
              ))}
            </div>
            <span className="uppercase tracking-[0.2em] font-mono">
              0{activeIndex + 1} / 0{HORIZONTAL_EXPERIENCES.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
