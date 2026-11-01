import type { Metadata } from "next";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ROOM_STORIES } from "@/data/hotelData";
import { RoomDetailClient } from "@/components/RoomDetailClient";
import { BookingWidget } from "@/components/BookingWidget";
import {
  generateBreadcrumbJsonLd,
  generateRoomJsonLd,
} from "@/lib/seoSchema";

export function generateStaticParams() {
  return ROOM_STORIES.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOM_STORIES.find((r) => r.slug === slug);
  if (!room) {
    return { title: "Suite Not Found" };
  }

  return {
    title: `${room.name} — ${room.chapterTitle}`,
    description: `${room.poeticIntro} ${room.sizeSqFt} sq.ft luxury heritage suite in Jaisalmer with ${room.view}.`,
    alternates: {
      canonical: `/rooms/${room.slug}`,
    },
    openGraph: {
      title: `${room.name} | Suryavansh Haveli Jaisalmer`,
      description: room.poeticIntro,
      images: [{ url: room.heroImage }],
    },
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = ROOM_STORIES.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  const roomSchema = generateRoomJsonLd(room);
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Rooms & Suites", path: "/rooms" },
    { name: room.name, path: `/rooms/${room.slug}` },
  ]);

  return (
    <article className="bg-night-deep text-ivory-warm">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Fullscreen Suite Hero */}
      <header className="relative h-[78vh] min-h-[540px] w-full flex items-end overflow-hidden">
        <Image
          src={room.heroImage}
          alt={room.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-deep via-night-deep/40 to-transparent" />

        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-12 pb-16">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-desert-sand mb-4 uppercase tracking-[0.22em]"
          >
            <Link href="/" className="hover:underline">
              Sanctuary
            </Link>{" "}
            /{" "}
            <Link href="/rooms" className="hover:underline">
              Suites
            </Link>{" "}
            / <span className="text-ivory-warm/80">{room.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.32em] text-desert-sand block mb-2">
                Suite {room.number} · {room.chapterTitle}
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory-warm tracking-wide">
                {room.name}
              </h1>
              <p className="font-serif italic text-2xl text-desert-sand mt-2">
                &ldquo;{room.tagline}&rdquo;
              </p>
            </div>

            <div className="bg-night-deep/85 backdrop-blur-md border border-desert-sand/35 px-6 py-4 text-right">
              <span className="text-[10px] uppercase tracking-[0.25em] text-desert-sand block">
                Direct Nightly Tariff
              </span>
              <span className="font-serif text-3xl text-ivory-warm">
                {room.priceDisplay}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Suite Narrative & Architectural Specs */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-20 space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-desert-sand leading-snug">
              {room.poeticIntro}
            </h2>
            <p className="text-base text-ivory-warm/80 leading-relaxed">
              {room.description}
            </p>
            <div className="p-6 bg-heritage-deep/60 border-l-2 border-desert-gold">
              <p className="text-xs uppercase tracking-[0.25em] text-desert-sand mb-1">
                Silawat Architectural Provenance
              </p>
              <p className="text-sm text-ivory-warm/85">
                {room.architectureNote}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 bg-night-blue/70 border border-desert-sand/25 p-8">
            <div className="p-4 border border-desert-sand/15">
              <span className="text-[10px] uppercase tracking-[0.25em] text-desert-sand block">
                Area
              </span>
              <span className="font-serif text-2xl text-ivory-warm mt-1 block">
                {room.sizeSqFt} sq.ft ({room.sizeSqM} m²)
              </span>
            </div>
            <div className="p-4 border border-desert-sand/15">
              <span className="text-[10px] uppercase tracking-[0.25em] text-desert-sand block">
                Occupancy
              </span>
              <span className="font-serif text-2xl text-ivory-warm mt-1 block">
                {room.occupancy}
              </span>
            </div>
            <div className="p-4 border border-desert-sand/15 col-span-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-desert-sand block">
                Sleeping Chamber
              </span>
              <span className="font-serif text-xl text-ivory-warm mt-1 block">
                {room.bedType}
              </span>
            </div>
            <div className="p-4 border border-desert-sand/15 col-span-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-desert-sand block">
                Primary Jharokha Vista
              </span>
              <span className="font-serif text-xl text-ivory-warm mt-1 block">
                {room.view}
              </span>
            </div>
          </div>
        </section>

        {/* Client Interactive 360 Vantage + Amenities + Booking Trigger */}
        <RoomDetailClient room={room} />
      </div>

      <BookingWidget />
    </article>
  );
}
