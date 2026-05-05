import { airportsTrustStrip } from '@/mocks/airports';

export default function AirportsTrustStrip() {
  return (
    <section className="border-y border-orbit-border bg-white py-6">
      <div className="mx-auto grid max-w-orbit gap-3 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-5">
        {airportsTrustStrip.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-orbit-primary">
              <i className={`${item.icon} text-lg`} />
            </span>
            <span className="text-sm font-semibold text-orbit-text">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
