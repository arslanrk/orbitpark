import SectionHeader from './SectionHeader';
import ReviewsCarousel from './ReviewsCarousel';

export default function ReviewsSection() {
  return (
    <section className="bg-orbit-bg py-24 md:py-32">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Real Trips. Real Savings. Less Airport Stress."
        />

        <ReviewsCarousel />
      </div>
    </section>
  );
}
