import Image from 'next/image';
import Link from 'next/link';

import { airportDetails } from '@/mocks/homepage';
import SectionHeader from './SectionHeader';

export default function AirportsSection() {
  return (
    <section id="airports" className="bg-orbit-bg py-24 md:py-32">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="UK Airports"
          title="Cheap Parking At Every Major UK Airport"
          description="Orbitpark covers all five major UK airports with a full range of parking services. Compare prices across Heathrow, Gatwick, Manchester, Stansted and Luton, then book the option that works best for your journey."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {airportDetails.map((airport) => (
            <article
              key={airport.code}
              className="overflow-hidden rounded-xl border border-orbit-border bg-white shadow-sm"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={airport.image}
                  alt={`${airport.name} terminal and runway parking options`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-orbit-primary backdrop-blur">
                  {airport.code}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-orbit-text">
                    {airport.name}
                  </h3>
                  <span className="shrink-0 text-xs font-bold text-orbit-accent">
                    {airport.priceLabel}
                  </span>
                </div>
                <p className="mb-5 text-sm leading-7 text-orbit-text-muted">
                  {airport.description}
                </p>
                <div className="mb-4 space-y-3 text-xs text-orbit-text-muted">
                  <p>
                    <span className="font-semibold text-orbit-text">Services:</span>{' '}
                    {airport.services.join(' / ')}
                  </p>
                  <p>
                    <span className="font-semibold text-orbit-text">Terminals:</span>{' '}
                    {airport.terminals.join(' / ')}
                  </p>
                </div>
                <Link
                  href={airport.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orbit-primary transition-colors hover:text-orbit-primary-glow"
                >
                  View {airport.name.replace(' Airport Parking', '')} Parking
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
