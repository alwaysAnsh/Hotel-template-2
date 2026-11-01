import React from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { TheStayPreview } from "@/components/TheStayPreview";
import { HotelExplorer } from "@/components/HotelExplorer";
import { RoomStorySection } from "@/components/RoomStoryCard";
import { JaisalmerGuide } from "@/components/JaisalmerGuide";

// Code-split below-the-fold interactive sections while keeping SSR intact for SEO
const YourJaisalmerStory = dynamic(() =>
  import("@/components/YourJaisalmerStory").then((m) => m.YourJaisalmerStory)
);
const JourneyBuilder = dynamic(() =>
  import("@/components/JourneyBuilder").then((m) => m.JourneyBuilder)
);
const ExperienceSection = dynamic(() =>
  import("@/components/ExperienceSection").then((m) => m.ExperienceSection)
);
const Reviews = dynamic(() =>
  import("@/components/Reviews").then((m) => m.Reviews)
);
const Gallery = dynamic(() =>
  import("@/components/Gallery").then((m) => m.Gallery)
);
const BookingWidget = dynamic(() =>
  import("@/components/BookingWidget").then((m) => m.BookingWidget)
);

export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* CINEMATIC HERO */}
      <Hero />

      {/* THE STAY (Server-Rendered Concise Homepage Preview linking to /about) */}
      <TheStayPreview />

      {/* DISCOVER THE HOTEL (Interactive Sanctuary World Explorer) */}
      <HotelExplorer />

      {/* CHOOSE YOUR STORY (Editorial Rooms) */}
      <RoomStorySection />

      {/* YOUR JAISALMER STORY (Travel Mood Personalization) */}
      <YourJaisalmerStory />

      {/* BUILD YOUR JAISALMER JOURNEY (3-Step Interactive Trip Planner) */}
      <JourneyBuilder />

      {/* EXPERIENCE JAISALMER (Horizontal Storytelling) */}
      <ExperienceSection />

      {/* THE JAISALMER GUIDE (Server-Rendered SEO Destination Hub) */}
      <JaisalmerGuide />

      {/* STAY FOR THE NIGHT (Sunset-to-Night + Floating Guest Quotes) */}
      <Reviews />

      {/* GALLERY (Editorial Masonry & Lightbox) */}
      <Gallery />

      {/* FINAL CHAPTER — BOOK YOUR STORY (Nighttime Jaisalmer Climax & Direct Booking Engine) */}
      <BookingWidget />
    </div>
  );
}
