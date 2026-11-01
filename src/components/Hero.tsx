"use client";

import React, { useEffect, useRef } from "react";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, BedDouble } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Performant wind-blown desert sand particles that automatically pause when off-screen
  useEffect(() => {
    const canvas = canvasRef.current;
    const sectionEl = sectionRef.current;
    if (!canvas || !sectionEl) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number | null = null;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 150);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    const particleCount = width < 768 ? 22 : 55;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.4,
      vx: Math.random() * 0.55 + 0.2,
      vy: (Math.random() - 0.5) * 0.18,
      alpha: Math.random() * 0.4 + 0.12,
    }));

    const render = () => {
      if (!isVisible || document.hidden) {
        animationFrameId = null;
        return;
      }
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy + Math.sin(p.x * 0.008) * 0.1;

        if (p.x > width + 10) p.x = -10;
        if (p.y > height + 10) p.y = 0;
        if (p.y < -10) p.y = height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(235, 195, 130, ${p.alpha})`;
        ctx.fill();
      }
      animationFrameId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (animationFrameId === null && isVisible && !document.hidden) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(sectionEl);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else if (isVisible) {
        startLoop();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    startLoop();

    return () => {
      stopLoop();
      clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const scrollToJourney = () => {
    const el = document.getElementById("chapter-journey");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Chapter 1: The Desert Is Calling"
      className="relative min-h-screen w-full overflow-hidden bg-heritage-deep flex flex-col justify-between select-none"
    >
      {/* Priority LCP Background Image with GPU-only scale transform */}
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src={SITE_CONFIG.images.hero.desertPanorama}
          alt="Golden sand dunes of the Thar Desert near Jaisalmer bathed in warm morning sunlight"
          fill
          priority
          fetchPriority="high"
          quality={82}
          placeholder="blur"
          blurDataURL={SITE_CONFIG.blurDataURL}
          sizes="100vw"
          className="object-cover object-center brightness-[0.82] contrast-[1.05]"
        />
        {/* Warm Golden Day-to-Dusk Atmospheric Wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(16,24,39,0.58) 0%, rgba(58,36,24,0.28) 42%, rgba(200,138,43,0.25) 75%, rgba(26,16,10,0.92) 100%)",
          }}
        />
      </motion.div>

      {/* Distant Jaisalmer Fort Silhouette Horizon SVG Overlay */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 z-10 opacity-35"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24 sm:h-36 md:h-44 object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M0 190V155C140 148 290 132 450 142C530 147 590 118 625 98L640 82H655V70H672V82H685V64H705V80H720V60H745V78H762V66H785V82L805 98C855 122 960 138 1110 146C1240 153 1350 144 1440 152V190H0Z"
            fill="#1A100A"
          />
        </svg>
      </div>

      {/* Moving Wind & Sand Particles Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
      />

      {/* Film Grain Overlay */}
      <div
        aria-hidden="true"
        className="cinematic-grain pointer-events-none absolute inset-0 z-10"
      />

      {/* Top Spacer for Navbar */}
      <div className="h-24" />

      {/* Center Narrative Sequence — Fast LCP Choreography */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-10 text-center my-auto py-12">
        {/* Chapter Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="h-[1px] w-8 bg-desert-sand/60" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-desert-sand">
            Chapter 01 · The Desert Is Calling
          </span>
          <span className="h-[1px] w-8 bg-desert-sand/60" />
        </motion.div>

        {/* Opening Line 1 */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-ivory-warm/90 tracking-wide"
        >
          &ldquo;Some journeys begin with a destination.&rdquo;
        </motion.p>

        {/* Line 2 */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-desert-sand mt-2.5 mb-8 tracking-wide"
        >
          &ldquo;This one begins with a feeling.&rdquo;
        </motion.p>

        {/* Main Hotel Name Reveal — Visible within < 1s for optimal LCP & clarity */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.16em] text-ivory-warm uppercase leading-[1.08] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {SITE_CONFIG.hotelName}
          </h1>
          <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.34em] text-desert-sand/95">
            18th-Century Boutique Haveli · Jaisalmer, Rajasthan
          </p>
        </motion.div>

        {/* Primary & Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={scrollToJourney}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-4 px-8 py-4 bg-desert-gold/95 hover:bg-desert-sand text-night-deep text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] transition-all duration-500 shadow-[0_10px_40px_rgba(200,138,43,0.35)]"
          >
            <span>BEGIN YOUR JOURNEY</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          <Link
            href="/rooms"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-night-deep/60 hover:bg-night-deep/85 backdrop-blur-sm border border-desert-sand/40 hover:border-desert-sand text-ivory-warm hover:text-desert-sand text-xs sm:text-sm uppercase tracking-[0.22em] transition-all duration-300"
          >
            <BedDouble className="w-4 h-4 text-desert-sand" />
            <span>Explore Suites</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0, delay: 1.15 }}
        className="relative z-20 pb-24 sm:pb-10 flex flex-col items-center gap-2"
      >
        <button
          type="button"
          onClick={scrollToJourney}
          className="group flex flex-col items-center gap-2 text-ivory-warm/75 hover:text-desert-sand transition-colors focus:outline-none"
        >
          <span className="text-[10px] uppercase tracking-[0.32em]">
            Scroll to discover
          </span>
          <span className="w-7 h-11 rounded-full border border-desert-sand/40 flex items-start justify-center p-1.5">
            <motion.span
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-desert-sand"
            />
          </span>
          <ArrowDown className="w-3.5 h-3.5 opacity-60 group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
