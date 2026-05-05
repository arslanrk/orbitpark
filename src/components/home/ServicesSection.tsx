import Image from 'next/image';
import Link from 'next/link';

import { services } from '@/mocks/homepage';
import SectionHeader from './SectionHeader';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Parking Services"
          title="Every Airport Parking Solution Under One Roof"
          description="Whether you are a frequent flyer looking for premium Meet & Greet convenience, or a budget traveller after the cheapest long stay deal, Orbitpark has the right parking solution for every journey."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="overflow-hidden rounded-xl border border-orbit-border bg-white shadow-sm"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={service.image}
                  alt={`${service.shortTitle} airport parking service`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-orbit-primary">
                      <i className={`${service.icon} text-xl`} />
                    </span>
                    <h3 className="text-xl font-bold text-orbit-text">
                      {service.title}
                    </h3>
                  </div>
                  <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orbit-accent">
                    {service.priceLabel}
                  </span>
                </div>

                <p className="mb-5 text-sm leading-7 text-orbit-text-muted">
                  {service.description}
                </p>

                <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-orbit-text-muted"
                    >
                      <i className="ri-check-line mt-0.5 text-orbit-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orbit-primary transition-colors hover:text-orbit-primary-glow"
                >
                  Book {service.shortTitle}
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
