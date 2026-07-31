import Image from 'next/image';
import Link from 'next/link';

import { services } from '@/mocks/homepage';
import SectionHeader from './SectionHeader';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Parking Services"
          title="Choose The Parking Style That Fits Your Trip"
          description="Compare secure airport parking services with clear pricing, useful differences, and quick routes to booking."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-orbit-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={service.image}
                  alt={`${service.shortTitle} airport parking service`}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold text-orbit-primary backdrop-blur">
                  {service.priceLabel}
                </span>
              </div>

              <div className="flex min-w-0 flex-1 flex-col p-4 md:p-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-orbit-primary">
                      <i className={`${service.icon} text-lg`} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-tight text-orbit-text md:text-xl">
                        {service.shortTitle}
                      </h3>
                      <p className="mt-1 text-xs text-orbit-text-muted">
                        Secure airport parking
                      </p>
                    </div>
                  </div>
                </div>

                <p className="line-clamp-3 text-sm leading-6 text-orbit-text-muted lg:line-clamp-none">
                  {service.description}
                </p>

                <ul className="mt-4 grid gap-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-orbit-text-muted"
                    >
                      <i className="ri-check-line mt-0.5 text-orbit-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <Link
                    href={service.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orbit-primary px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orbit-primary-glow"
                  >
                    Book {service.shortTitle}
                    <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-orbit-border bg-orbit-bg p-4 text-center md:p-5">
          <p className="text-sm font-medium text-orbit-text-muted">
            Not sure which service you need? Enter your airport and dates to
            compare secure parking options side by side.
          </p>
          <Link
            href="#quote"
            className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-bold text-orbit-primary hover:text-orbit-primary-glow"
          >
            Compare all services
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </section>
  );
}
