import Link from 'next/link';
import Image from 'next/image';

import { airportHubCards } from '@/mocks/airports';
import SectionHeader from '@/components/home/SectionHeader';

export default function AirportCardsSection() {
  return (
    <section id="airport-cards" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Choose Your Airport"
          title="Airport Parking By Location"
          description="Each airport has different terminals, transfer routes, parking zones and prices. Use the airport cards below to find parking information for your departure point."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {airportHubCards.map((airport) => (
            <article
              key={airport.code}
              className="overflow-hidden rounded-2xl border border-orbit-border bg-orbit-bg shadow-sm"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={airport.image}
                  alt={`${airport.name} terminal and airport parking access`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-orbit-primary backdrop-blur">
                  {airport.code}
                </span>
              </div>

              <div className="p-5 md:p-6">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-orbit-text">
                    {airport.name}
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orbit-accent">
                  {airport.priceLabel}
                </span>
              </div>

              <p className="text-sm leading-7 text-orbit-text-muted">
                {airport.description}
              </p>
              <p className="mt-3 text-sm leading-7 text-orbit-text-muted">
                {airport.extra}
              </p>

              <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                <Fact label="Terminals" value={airport.terminals.join(' / ')} />
                <Fact label="Best for" value={airport.bestFor} />
                <Fact
                  label="Popular services"
                  value={airport.services.join(' / ')}
                  wide
                />
              </div>

              <Link
                href={airport.href}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-orbit-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orbit-primary-glow"
              >
                Compare {airport.name.replace(' Airport Parking', '')} Parking
                <i className="ri-arrow-right-line" />
              </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fact({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div className={`rounded-xl bg-white p-3 ${wide ? 'md:col-span-2' : ''}`}>
      <p className="text-xs font-semibold uppercase tracking-normal text-orbit-text-dim">
        {label}
      </p>
      <p className="mt-1 font-semibold text-orbit-text">{value}</p>
    </div>
  );
}
