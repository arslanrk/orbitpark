import Image from 'next/image';
import Link from 'next/link';

import HeathrowQuoteForm from '@/components/heathrow/HeathrowQuoteForm';
import { heathrowHeroTrustSignals, heathrowImages } from '@/mocks/heathrow';

const heroMetrics = [
  { label: 'Official 7-day price', value: 'GBP 217', tone: 'muted' },
  { label: 'Orbitpark from', value: 'GBP 56', tone: 'accent' },
  { label: 'Potential saving', value: 'GBP 161', tone: 'success' },
];

export default function HeathrowHero() {
  return (
    <section
      id="quote"
      className="relative isolate overflow-hidden bg-orbit-bg pt-24 md:pt-28"
    >
      <Image
        src={heathrowImages.hero}
        alt="Aerial view of Heathrow airport terminal and runways"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-white/82" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/88 to-sky-50/70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-orbit-bg to-transparent" />

      <div className="mx-auto grid max-w-orbit gap-8 px-4 pb-14 md:px-6 md:pb-20 lg:min-h-[720px] lg:grid-cols-[1fr_440px] lg:items-center">
        <div className="max-w-3xl">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs font-semibold text-orbit-text-muted">
            <Link href="/" className="transition-colors hover:text-orbit-primary">
              Home
            </Link>
            <i className="ri-arrow-right-s-line" />
            <Link href="/airports" className="transition-colors hover:text-orbit-primary">
              Airports
            </Link>
            <i className="ri-arrow-right-s-line" />
            <span className="text-orbit-text">Heathrow Airport Parking</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-orbit-primary shadow-sm backdrop-blur">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orbit-accent text-white">
              <i className="ri-money-pound-circle-line text-sm" />
            </span>
            Heathrow parking from GBP 6/day
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-normal text-orbit-text md:text-6xl lg:text-7xl">
            Heathrow Airport Parking.
            <span className="block text-orbit-primary-glow">Stop Paying Gate Prices.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-orbit-text-muted md:text-2xl md:leading-9">
            Compare secure parking for Heathrow T2, T3, T4 and T5. Same
            essential security standards, cleaner booking, and prices from a
            fraction of drive-up rates.
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-1 overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-sm backdrop-blur sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border-b border-orbit-border px-4 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="text-xs font-semibold uppercase tracking-normal text-orbit-text-dim">
                  {metric.label}
                </p>
                <p
                  className={`mt-1 text-2xl font-bold ${
                    metric.tone === 'accent'
                      ? 'text-orbit-accent'
                      : metric.tone === 'success'
                        ? 'text-orbit-success'
                        : 'text-orbit-text'
                  }`}
                >
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
            {heathrowHeroTrustSignals.slice(1).map((signal) => (
              <li
                key={signal}
                className="flex items-start gap-2 text-sm font-medium leading-6 text-orbit-text-muted"
              >
                <i className="ri-check-line mt-1 text-orbit-success" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pt-20">
          <HeathrowQuoteForm />
          <p className="mt-3 rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-xs font-medium leading-5 text-orbit-text-muted shadow-sm backdrop-blur">
            Prices for Heathrow parking usually rise as availability tightens.
            Book early, then cancel free on many products if your plans change.
          </p>
        </div>
      </div>
    </section>
  );
}
