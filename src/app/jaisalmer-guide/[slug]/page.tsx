import type { Metadata } from "next";
import { CinematicImage as Image } from "@/components/ui/CinematicImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JAISALMER_GUIDES } from "@/data/guidesData";
import { ROOM_STORIES } from "@/data/hotelData";
import { BookingWidget } from "@/components/BookingWidget";
import {
  generateBreadcrumbJsonLd,
  generateGuideArticleJsonLd,
} from "@/lib/seoSchema";
import { Clock, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return JAISALMER_GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = JAISALMER_GUIDES.find((g) => g.slug === slug);
  if (!article) {
    return { title: "Guide Not Found" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/jaisalmer-guide/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      images: [{ url: article.heroImage }],
    },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = JAISALMER_GUIDES.find((g) => g.slug === slug);

  if (!article) {
    notFound();
  }

  const schemas = generateGuideArticleJsonLd(article);
  const breadcrumbSchema = generateBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Jaisalmer Guide", path: "/jaisalmer-guide" },
    { name: article.title, path: `/jaisalmer-guide/${article.slug}` },
  ]);

  const relatedGuides = JAISALMER_GUIDES.filter(
    (g) => g.slug !== article.slug
  ).slice(0, 3);

  return (
    <article className="bg-night-deep text-ivory-warm">
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Editorial Article Header */}
      <header className="relative h-[68vh] min-h-[480px] w-full flex items-end overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night-deep via-night-deep/45 to-transparent" />

        <div className="relative z-10 max-w-4xl w-full mx-auto px-6 sm:px-10 pb-14">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-desert-sand uppercase tracking-[0.2em] mb-4"
          >
            <Link href="/" className="hover:underline">
              Sanctuary
            </Link>{" "}
            /{" "}
            <Link href="/jaisalmer-guide" className="hover:underline">
              Jaisalmer Guide
            </Link>{" "}
            / <span className="text-ivory-warm/75">{article.category}</span>
          </nav>

          <div className="flex items-center gap-3 text-xs text-desert-sand uppercase tracking-[0.25em] mb-3">
            <span>{article.category}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory-warm leading-[1.12]">
            {article.title}
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-desert-sand mt-3">
            {article.subtitle}
          </p>
        </div>
      </header>

      {/* Main Editorial Content Body */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-14">
        {/* Key Takeaways Box */}
        <aside className="bg-heritage-deep/90 border border-desert-sand/35 p-7 sm:p-9">
          <h2 className="text-xs uppercase tracking-[0.3em] text-desert-sand flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Curator&apos;s Essential Takeaways</span>
          </h2>
          <ul className="space-y-3 text-sm sm:text-base text-ivory-warm/85">
            {article.keyTakeaways.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-desert-sand shrink-0 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Detailed Article Sections */}
        <div className="space-y-12">
          {article.sections.map((sec) => (
            <section key={sec.heading} className="space-y-5">
              <h2 className="font-serif text-2xl sm:text-4xl text-ivory-warm leading-snug">
                {sec.heading}
              </h2>
              {sec.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-base sm:text-lg text-ivory-warm/80 leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {sec.insiderTip && (
                <div className="p-6 bg-night-blue border-l-2 border-desert-gold text-sm text-ivory-warm/85">
                  <strong className="text-desert-sand uppercase tracking-[0.2em] text-xs block mb-1">
                    Khidmatgar Insider Note:
                  </strong>
                  {sec.insiderTip}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Mid-Article Suite Pairing Recommendation */}
        <aside className="p-8 sm:p-10 bg-gradient-to-r from-heritage-deep to-night-blue border border-desert-sand/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-desert-sand">
              Stay Inside the Story
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory-warm mt-1">
              Experience Jaisalmer from {ROOM_STORIES[0].name}
            </h3>
            <p className="text-xs sm:text-sm text-ivory-warm/75 mt-1 max-w-md">
              Direct guests enjoy complimentary dawn historian walks inside
              Sonar Quila and private vintage 4x4 transfers.
            </p>
          </div>
          <Link
            href={`/rooms/${ROOM_STORIES[0].slug}`}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-desert-gold text-night-deep text-xs font-semibold uppercase tracking-[0.2em]"
          >
            <span>Explore Suite</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </aside>

        {/* FAQ Schema Section */}
        {article.faqs.length > 0 && (
          <section className="pt-8 border-t border-desert-sand/20 space-y-6">
            <h2 className="font-serif text-3xl text-ivory-warm">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {article.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="p-6 bg-night-blue/70 border border-desert-sand/20"
                >
                  <h3 className="font-serif text-xl text-desert-sand">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-ivory-warm/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Further Reading */}
        <section className="pt-10 border-t border-desert-sand/20">
          <h2 className="font-serif text-2xl sm:text-3xl text-ivory-warm mb-6">
            Continue Your Jaisalmer Research
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedGuides.map((rel) => (
              <Link
                key={rel.slug}
                href={`/jaisalmer-guide/${rel.slug}`}
                className="group p-5 bg-night-blue/50 border border-desert-sand/20 hover:border-desert-sand transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-desert-sand">
                    {rel.category}
                  </span>
                  <h3 className="font-serif text-lg text-ivory-warm group-hover:text-desert-sand mt-1">
                    {rel.title}
                  </h3>
                </div>
                <span className="text-[11px] text-desert-sand uppercase tracking-[0.18em] mt-4">
                  Read Essay →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <BookingWidget />
    </article>
  );
}
