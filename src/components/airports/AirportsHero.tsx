import Link from 'next/link';
import Image from 'next/image';

import {
  airportHubCards,
  airportsHubImages,
  airportsHubTrustNotes,
} from '@/mocks/airports';

export default function AirportsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orbit-bg via-sky-50 to-white pt-28 md:pt-32">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="mx-auto grid max-w-orbit gap-10 px-4 pb-16 md:px-6 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-orbit-primary">
            <i className="ri-plane-line" />
            UK Airport Parking
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-normal text-orbit-text md:text-6xl">
            UK Airport Parking Across Major Airports
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-orbit-text-muted md:text-lg">
            Airport parking is easier when your space is sorted before you leave
            home. Orbitpark helps travellers compare parking at major UK
            airports, including Heathrow, Gatwick, Manchester, Stansted, Luton
            and Birmingham.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-orbit-text-muted">
            Choose your departure airport, compare available parking services
            and book the option that fits your trip.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-orbit-accent px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600"
            >
              Get My Parking Quote
              <i className="ri-arrow-right-line" />
            </Link>
            <Link
              href="#airport-cards"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-orbit-border bg-white px-6 py-3 text-sm font-bold text-orbit-text transition-colors hover:bg-orbit-bg"
            >
              Browse All Airports
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-orbit-border bg-white/85 shadow-sm backdrop-blur">
          <div className="relative hidden aspect-[16/10] lg:block">
            <Image
              src={airportsHubImages.hero}
              alt="Cars arriving at a modern UK airport terminal for airport parking"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
          </div>
          <div className="p-5 md:p-6">
          <h2 className="text-lg font-bold text-orbit-text">
            Find Parking For Your Departure Airport
          </h2>
          <p className="mt-2 text-sm leading-6 text-orbit-text-muted">
            Start by choosing your airport. We will show parking services,
            terminal information and guide prices for your route.
          </p>
          <div className="mt-5 grid gap-3">
            <select className="h-11 rounded-md border border-orbit-border bg-white px-3 text-sm text-orbit-text">
              <option>Select Airport</option>
              {airportHubCards.map((airport) => (
                <option key={airport.code}>{airport.name}</option>
              ))}
            </select>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="date"
                aria-label="Drop-off date"
                className="h-11 rounded-md border border-orbit-border bg-white px-3 text-sm text-orbit-text"
              />
              <input
                type="date"
                aria-label="Return date"
                className="h-11 rounded-md border border-orbit-border bg-white px-3 text-sm text-orbit-text"
              />
            </div>
            <Link
              href="/#quote"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-orbit-primary text-sm font-bold text-white transition-colors hover:bg-orbit-primary-glow"
            >
              Compare Airport Parking
              <i className="ri-search-line" />
            </Link>
          </div>
          <ul className="mt-5 grid gap-2 text-sm text-orbit-text-muted sm:grid-cols-2">
            {airportsHubTrustNotes.map((note) => (
              <li key={note} className="flex items-center gap-2">
                <i className="ri-check-line text-orbit-success" />
                {note}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
