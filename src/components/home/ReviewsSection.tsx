import { reviews, stats } from '@/mocks/homepage';
import SectionHeader from './SectionHeader';

export default function ReviewsSection() {
  return (
    <section className="bg-orbit-bg py-24 md:py-32">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="What Our Customers Say About Orbitpark"
          description="Do not just take our word for it. Over 10,000 UK travellers have trusted Orbitpark with their vehicles."
        />

        <div className="mb-10 grid gap-4 rounded-xl border border-orbit-border bg-white p-5 shadow-sm md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 p-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-orbit-primary">
                <i className={`${stat.icon} text-xl`} />
              </span>
              <div>
                <p className="text-2xl font-bold text-orbit-text">{stat.value}</p>
                <p className="text-sm text-orbit-text-muted">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.id}
              className="rounded-xl border border-orbit-border bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1 text-orbit-accent" aria-label="5 star rating">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <i key={index} className="ri-star-fill" />
                ))}
              </div>
              <blockquote className="mb-5 text-sm leading-7 text-orbit-text-muted">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-orbit-primary">
                  {review.avatar}
                </span>
                <span>
                  <span className="block text-sm font-bold text-orbit-text">
                    {review.name}
                  </span>
                  <span className="block text-xs text-orbit-text-muted">
                    {review.airport} / {review.service}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
