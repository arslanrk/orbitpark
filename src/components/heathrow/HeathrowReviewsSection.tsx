import SectionHeader from '@/components/home/SectionHeader';
import { heathrowReviews } from '@/mocks/heathrow';

export default function HeathrowReviewsSection() {
  return (
    <section className="bg-orbit-bg py-20 md:py-28">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Heathrow Reviews"
          title="4,821 Heathrow Travellers. One Thing In Common: They Saved Money."
          description="Real customer stories from travellers who used Orbitpark for Heathrow Meet & Greet, Long Stay and Park & Ride."
        />

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <FeaturedReview />
          <div className="grid gap-4">
            {heathrowReviews.slice(1).map((review) => (
              <ReviewCard key={review.id} review={review} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedReview() {
  const review = heathrowReviews[0];

  return (
    <article className="rounded-2xl border border-orbit-border bg-orbit-primary p-6 text-white shadow-sm md:p-8">
      <div className="flex gap-1 text-orbit-accent" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <i key={index} className="ri-star-fill text-xl" />
        ))}
      </div>
      <blockquote className="mt-8 text-2xl font-bold leading-10 md:text-4xl md:leading-[1.25]">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <p className="mt-8 text-lg font-bold">{review.name}</p>
      <p className="mt-1 text-sm text-sky-100">{review.route}</p>
    </article>
  );
}

function ReviewCard({
  review,
  compact = false,
}: {
  review: (typeof heathrowReviews)[number];
  compact?: boolean;
}) {
  return (
    <article className="rounded-2xl border border-orbit-border bg-white p-5 shadow-sm">
      <div className="flex gap-1 text-orbit-accent" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <i key={index} className="ri-star-fill" />
        ))}
      </div>
      <blockquote className={`mt-4 font-semibold leading-7 text-orbit-text ${compact ? 'text-sm' : 'text-base'}`}>
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <p className="mt-4 text-sm font-bold text-orbit-text">{review.name}</p>
      <p className="mt-1 text-xs leading-5 text-orbit-text-muted">{review.route}</p>
    </article>
  );
}
