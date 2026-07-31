import Image from 'next/image';
import Link from 'next/link';

import SectionHeader from '@/components/home/SectionHeader';
import { heathrowImages, heathrowTips } from '@/mocks/heathrow';

const tipMeta = [
  { badge: 'Price', icon: 'ri-line-chart-line', action: 'Book early' },
  { badge: 'Terminal', icon: 'ri-flight-takeoff-line', action: 'Confirm terminal' },
  { badge: 'Meet & Greet', icon: 'ri-phone-line', action: 'Call ahead' },
  { badge: 'Long Stay', icon: 'ri-camera-line', action: 'Save your bay' },
  { badge: 'Reference', icon: 'ri-screenshot-2-line', action: 'Screenshot it' },
  { badge: 'Timing', icon: 'ri-time-line', action: 'Add a buffer' },
  { badge: 'Navigation', icon: 'ri-map-pin-2-line', action: 'Use postcode' },
];

const postcodeCards = [
  { terminal: 'T2/T3', postcode: 'TW6 1EW' },
  { terminal: 'T4', postcode: 'TW6 3XA' },
  { terminal: 'T5', postcode: 'TW6 2GA' },
];

export default function HeathrowTipsSection() {
  const [primaryTip, ...secondaryTips] = heathrowTips.map((tip, index) => ({
    ...tip,
    ...tipMeta[index],
    number: String(index + 1).padStart(2, '0'),
  }));

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 h-[520px]">
        <Image
          src={heathrowImages.security}
          alt="Secure airport parking with CCTV monitoring"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/82" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative mx-auto max-w-orbit px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            align="left"
            eyebrow="Expert Tips"
            title="A Smarter Heathrow Parking Checklist"
            description="Seven practical checks to make your Heathrow parking cheaper, calmer and easier on the day you travel."
          />

          <div className="grid gap-3 sm:grid-cols-3">
            <SignalCard value="40-60%" label="Late booking price risk" />
            <SignalCard value="10 min" label="Meet & Greet call-ahead time" />
            <SignalCard value="3" label="Terminal postcodes to know" />
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-orbit-border bg-white shadow-xl">
          <div className="grid lg:grid-cols-[1fr_0.86fr]">
            <article className="p-5 md:p-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orbit-accent">
                <i className="ri-flashlight-line" />
                Start here
              </span>
              <h3 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-orbit-text md:text-4xl">
                {primaryTip.title}
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-orbit-text-muted md:text-base">
                {primaryTip.text}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {postcodeCards.map((card) => (
                  <div
                    key={card.terminal}
                    className="rounded-2xl border border-orbit-border bg-orbit-bg p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-normal text-orbit-text-dim">
                      {card.terminal}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-orbit-primary">
                      {card.postcode}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <div className="border-t border-orbit-border bg-orbit-bg p-5 md:p-8 lg:border-l lg:border-t-0">
              <p className="text-sm font-bold uppercase tracking-normal text-orbit-primary">
                Quick action
              </p>
              <h4 className="mt-3 text-2xl font-bold leading-tight text-orbit-text">
                Get your Heathrow parking price before availability tightens.
              </h4>
              <p className="mt-3 text-sm leading-7 text-orbit-text-muted">
                Choose your terminal, dates and parking type. You can compare
                before committing, and many products include free cancellation.
              </p>
              <Link
                href="#quote"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orbit-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600 sm:w-auto"
              >
                Check today&apos;s Heathrow price
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </div>

        <ol className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {secondaryTips.map((tip) => (
            <li
              key={tip.title}
              className="rounded-2xl border border-orbit-border bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-orbit-primary">
                  <i className={`${tip.icon} text-xl`} />
                </span>
                <span className="rounded-full bg-orbit-bg px-3 py-1 text-xs font-bold text-orbit-text-dim">
                  {tip.number}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orbit-accent">
                  {tip.badge}
                </span>
                <span className="text-xs font-bold uppercase tracking-normal text-orbit-text-dim">
                  {tip.action}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold leading-snug text-orbit-text">
                {tip.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-orbit-text-muted">
                {tip.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm leading-7 text-orange-900 md:p-5">
          <strong>Terminal 4 reminder:</strong> T4 uses a separate southern
          perimeter approach. Do not follow signs for T2, T3 or T5 if flying
          from Terminal 4.
        </div>
      </div>
    </section>
  );
}

function SignalCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-orbit-border bg-white/90 p-4 shadow-sm backdrop-blur">
      <p className="text-2xl font-bold text-orbit-primary">{value}</p>
      <p className="mt-1 text-sm leading-6 text-orbit-text-muted">{label}</p>
    </div>
  );
}
