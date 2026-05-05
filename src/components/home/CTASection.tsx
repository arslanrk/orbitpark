import Link from 'next/link';

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  microcopy?: string;
};

export default function CTASection({
  title = 'Ready To Save On Your Next Airport Parking?',
  description = 'Join over 10,000 UK travellers who have discovered the smarter way to park. Compare prices, book securely online, and save up to 70% versus booking at the gate.',
  primaryLabel = 'Get My Free Quote',
  primaryHref = '#quote',
  secondaryLabel = 'Prefer To Call? 0203 XXX XXXX',
  secondaryHref = 'tel:0203XXXXXXX',
  microcopy = 'No booking fees / Free cancellation / Instant confirmation / Best price guaranteed',
}: CTASectionProps) {
  return (
    <section className="bg-orbit-primary py-20 text-white md:py-24">
      <div className="mx-auto max-w-orbit px-4 text-center md:px-6">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-normal md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-sky-50 md:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-orbit-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600"
          >
            {primaryLabel}
            <i className="ri-arrow-right-line" />
          </Link>
          <a
            href={secondaryHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <i className="ri-phone-line" />
            {secondaryLabel}
          </a>
        </div>
        <p className="mt-5 text-xs text-sky-100">
          {microcopy}
        </p>
      </div>
    </section>
  );
}
