import Image from 'next/image';
import Link from 'next/link';

import {
  airportHubCards,
  airportServiceComparison,
  airportsHubImages,
  airportsHubTrustNotes,
} from '@/mocks/airports';

const heroMetrics = [
  { label: 'Major airports', value: '6', tone: 'muted' },
  { label: 'Parking from', value: 'GBP 5/day', tone: 'accent' },
  { label: 'Service types', value: '4', tone: 'success' },
];

export default function AirportsHero() {
  return (
    <section
      id="quote"
      className="relative isolate overflow-hidden bg-orbit-bg pt-24 md:pt-28"
    >
      <Image
        src={airportsHubImages.hero}
        alt="Cars arriving at a modern UK airport terminal for airport parking"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-white/82" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/88 to-sky-50/70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-orbit-bg to-transparent" />

      <div className="mx-auto grid max-w-orbit gap-8 px-4 pb-14 md:px-6 md:pb-20 lg:min-h-[700px] lg:grid-cols-[1fr_440px] lg:items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-orbit-primary shadow-sm backdrop-blur">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orbit-accent text-white">
              <i className="ri-plane-line text-sm" />
            </span>
            UK airport parking from GBP 5/day
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-normal text-orbit-text md:text-6xl lg:text-7xl">
            UK Airport Parking.
            <span className="block text-orbit-primary-glow">Compare Before You Travel.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-orbit-text-muted md:text-2xl md:leading-9">
            Compare parking at Heathrow, Gatwick, Manchester, Stansted, Luton
            and Birmingham. Choose the airport, service and dates that fit your
            trip before you leave home.
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
            {airportsHubTrustNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2 text-sm font-medium leading-6 text-orbit-text-muted"
              >
                <i className="ri-check-line mt-1 text-orbit-success" />
                <span>{note}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="#airport-cards"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-orbit-border bg-white/80 px-5 py-3 text-sm font-bold text-orbit-text shadow-sm backdrop-blur transition-colors hover:bg-white"
            >
              Browse all airport guides
              <i className="ri-arrow-down-line" />
            </Link>
          </div>
        </div>

        <div className="lg:pt-20">
          <AirportQuotePanel />
          <p className="mt-3 rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-xs font-medium leading-5 text-orbit-text-muted shadow-sm backdrop-blur">
            Booking early gives you more choice across Meet & Greet, Long Stay,
            Park & Ride and Short Stay parking.
          </p>
        </div>
      </div>
    </section>
  );
}

function AirportQuotePanel() {
  return (
    <form
      action="/quote"
      className="rounded-2xl border border-white/70 bg-white p-4 text-orbit-text shadow-2xl md:p-5"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-normal text-orbit-primary">
            <i className="ri-search-line" />
            Compare prices
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-orbit-text">
            Find airport parking
          </h2>
          <p className="mt-1 text-sm text-orbit-text-muted">
            Search secure parking across major UK airports.
          </p>
        </div>
        <span className="rounded-xl bg-orange-50 px-3 py-2 text-right text-xs font-bold leading-tight text-orbit-accent">
          From
          <span className="block text-lg">GBP 5/day</span>
        </span>
      </div>

      <div className="grid min-w-0 gap-3.5">
        <SelectField
          label="Airport"
          name="airport"
          placeholder="Select airport"
          options={airportHubCards.map((airport) => airport.name)}
        />
        <SelectField
          label="Service"
          name="service"
          placeholder="Select service"
          options={airportServiceComparison.map((service) => service.service)}
        />

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          <DateTimeFields
            label="Drop-off"
            dateName="arrivalDate"
            timeName="arrivalTime"
          />
          <DateTimeFields
            label="Return"
            dateName="returnDate"
            timeName="returnTime"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-orbit-accent px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-orange-600"
      >
        Compare Airport Parking
        <i className="ri-arrow-right-line" />
      </button>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-orbit-text-muted">
        <span className="rounded-lg bg-orbit-bg px-2 py-2">No fees</span>
        <span className="rounded-lg bg-orbit-bg px-2 py-2">Secure pay</span>
        <span className="rounded-lg bg-orbit-bg px-2 py-2">Instant email</span>
      </div>
    </form>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-orbit-text">
      {label}
      <select
        required
        name={name}
        defaultValue=""
        className="h-12 w-full min-w-0 truncate rounded-lg border border-orbit-border bg-white px-3 text-sm text-orbit-text outline-none transition-colors focus:border-orbit-primary"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function DateTimeFields({
  label,
  dateName,
  timeName,
}: {
  label: string;
  dateName: string;
  timeName: string;
}) {
  return (
    <fieldset className="grid min-w-0 gap-1.5">
      <legend className="text-sm font-semibold text-orbit-text">{label}</legend>
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_96px] gap-2 sm:grid-cols-[minmax(0,1fr)_108px]">
        <input
          required
          type="date"
          name={dateName}
          className="h-12 min-w-0 rounded-lg border border-orbit-border bg-white px-3 text-sm text-orbit-text outline-none transition-colors focus:border-orbit-primary"
        />
        <input
          required
          type="time"
          name={timeName}
          className="h-12 min-w-0 rounded-lg border border-orbit-border bg-white px-3 text-sm text-orbit-text outline-none transition-colors focus:border-orbit-primary"
        />
      </div>
    </fieldset>
  );
}
