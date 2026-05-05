import Link from 'next/link';
import Image from 'next/image';

import { airportServiceComparison } from '@/mocks/airports';
import SectionHeader from '@/components/home/SectionHeader';

export default function AirportServiceComparison() {
  return (
    <section className="bg-orbit-bg py-24 md:py-32">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Service Comparison"
          title="Compare Airport Parking Services"
          description="The right airport parking option depends on your trip length, luggage, budget and how close you want to be to the terminal."
        />

        <div className="overflow-hidden rounded-2xl border border-orbit-border bg-white shadow-sm">
          <div className="hidden grid-cols-4 gap-0 border-b border-orbit-border bg-sky-50 text-sm font-bold text-orbit-text md:grid">
            <div className="p-4">Service</div>
            <div className="p-4">Best For</div>
            <div className="p-4">Typical Benefit</div>
            <div className="p-4">Usually Best When</div>
          </div>
          {airportServiceComparison.map((service) => (
            <div
              key={service.service}
              className="grid gap-3 border-b border-orbit-border p-4 last:border-b-0 md:grid-cols-4 md:gap-0"
            >
              <div className="flex gap-3 md:block">
                <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg md:mb-3 md:h-20 md:w-28">
                  <Image
                    src={service.image}
                    alt={`${service.service} airport parking service`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div>
                <p className="text-xs font-semibold uppercase tracking-normal text-orbit-text-dim md:hidden">
                  Service
                </p>
                <Link
                  href={service.href}
                  className="font-bold text-orbit-primary hover:text-orbit-primary-glow"
                >
                  {service.service}
                </Link>
                </div>
              </div>
              <MobileTableCell label="Best For" value={service.bestFor} />
              <MobileTableCell label="Typical Benefit" value={service.benefit} />
              <MobileTableCell label="Usually Best When" value={service.when} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileTableCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-normal text-orbit-text-dim md:hidden">
        {label}
      </p>
      <p className="text-sm text-orbit-text-muted md:p-0">{value}</p>
    </div>
  );
}
