import Image from 'next/image';
import Link from 'next/link';

import SectionHeader from '@/components/home/SectionHeader';
import { heathrowServices } from '@/mocks/heathrow';

export default function HeathrowServicesSection() {
  return (
    <section id="heathrow-services" className="bg-orbit-bg py-20 md:py-28">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Heathrow Services"
          title="Choose Your Heathrow Parking For Every Budget And Every Trip"
          description="All options are pre-vetted, insured and selected for security. Choose convenience, value or the cheapest Heathrow parking available for your travel dates."
        />

        <div className="grid gap-6">
          {heathrowServices.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className="grid overflow-hidden rounded-2xl border border-orbit-border bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className={`relative min-h-[260px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={service.image}
                  alt={`${service.title} at Heathrow Airport`}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-orbit-primary">
                    {service.badge}
                  </span>
                  <p className="mt-3 text-2xl font-bold text-white">
                    {service.priceLabel}
                  </p>
                </div>
              </div>

              <div className="p-5 md:p-7">
                <h2 className="text-2xl font-bold text-orbit-text md:text-3xl">
                  {service.title}
                </h2>
                <blockquote className="mt-4 rounded-xl border-l-4 border-orbit-accent bg-orange-50 p-4 text-sm font-semibold leading-7 text-orange-900">
                  &ldquo;{service.quote}&rdquo;
                </blockquote>
                <p className="mt-5 text-sm leading-7 text-orbit-text-muted">
                  {service.description}
                </p>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <ServiceList title="Perfect for" items={service.perfectFor} />
                  <ServiceList title="Included" items={service.included} />
                </div>

                <div className="mt-6 rounded-xl bg-orbit-bg p-4">
                  <h3 className="text-sm font-bold text-orbit-text">
                    How it works
                  </h3>
                  <ol className="mt-3 grid gap-2">
                    {service.steps.map((step, stepIndex) => (
                      <li key={step} className="flex gap-3 text-sm text-orbit-text-muted">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-orbit-primary">
                          {stepIndex + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <Link
                  href={service.href}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orbit-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orbit-primary-glow sm:w-auto"
                >
                  Book {service.title.replace('Heathrow ', '')}
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

function ServiceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-orbit-text">{title}</h3>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm leading-6 text-orbit-text-muted">
            <i className="ri-check-line mt-1 text-orbit-success" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
