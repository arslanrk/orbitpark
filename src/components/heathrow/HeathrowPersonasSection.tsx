import Link from 'next/link';

import SectionHeader from '@/components/home/SectionHeader';
import { heathrowPersonas } from '@/mocks/heathrow';

export default function HeathrowPersonasSection() {
  return (
    <section className="bg-orbit-bg py-20 md:py-28">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Trip Match"
          title="Find The Right Heathrow Parking For Your Trip"
          description="The best Heathrow parking option depends on your passengers, luggage, schedule and budget."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {heathrowPersonas.map((persona) => (
            <article
              key={persona.title}
              className="flex flex-col rounded-2xl border border-orbit-border bg-white p-5 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-orbit-primary">
                <i className={`${persona.icon} text-xl`} />
              </span>
              <h2 className="mt-4 text-xl font-bold text-orbit-text">
                {persona.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-orbit-text-muted">
                {persona.description}
              </p>
              <p className="mt-4 text-sm font-bold text-orbit-primary">
                Best option: {persona.bestOption}
              </p>
              <Link
                href={persona.href}
                className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-orbit-text hover:text-orbit-primary"
              >
                Compare this option
                <i className="ri-arrow-right-line" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
