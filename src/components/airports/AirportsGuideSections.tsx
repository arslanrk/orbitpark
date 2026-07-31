import Image from 'next/image';

import {
  airportsHubImages,
  choosingChecklist,
  preBookBenefits,
} from '@/mocks/airports';
import SectionHeader from '@/components/home/SectionHeader';

export function AirportsPreBookSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-orbit gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Book Early"
            title="Why Pre-Book Airport Parking?"
            description="Airport parking prices can rise quickly as your departure date gets closer. During busy periods such as school holidays, bank holidays and summer travel, availability can also become limited."
          />
          <p className="text-sm leading-7 text-orbit-text-muted">
            Pre-booking gives you more choice and helps you avoid the highest
            on-the-day prices. You can compare services, check transfer details
            and reserve your space before you arrive at the airport.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <PreBookMetric value="70%" label="Potential savings vs drive-up prices" />
            <PreBookMetric value="24/7" label="Secure parking options across major airports" />
            <PreBookMetric value="5 min" label="Typical time to compare and choose" />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-orbit-border bg-orbit-bg shadow-sm">
          <div className="relative aspect-[16/10]">
            <Image
              src={airportsHubImages.trustSecurity}
              alt="CCTV security overlooking a secure airport parking facility"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="mb-3 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-orbit-primary backdrop-blur">
                Secure parking starts before you travel
              </span>
              <h3 className="max-w-lg text-2xl font-bold text-white md:text-3xl">
                Arrive knowing your parking space is already sorted.
              </h3>
            </div>
          </div>

          <div className="grid gap-3 p-4 md:grid-cols-2 md:p-5">
            {preBookBenefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-sm text-orbit-text-muted"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-orbit-success">
                  <i className="ri-check-line text-sm" />
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PreBookMetric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-orbit-border bg-orbit-bg px-4 py-4">
      <p className="text-2xl font-bold text-orbit-primary">{value}</p>
      <p className="mt-1 text-sm leading-6 text-orbit-text-muted">{label}</p>
    </div>
  );
}

export function AirportsChoosingGuideSection() {
  return (
    <section className="bg-orbit-bg py-24 md:py-32">
      <div className="mx-auto grid max-w-orbit gap-10 px-4 md:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Choosing Guide"
            title="Which Airport Parking Option Should You Choose?"
            description="There is no single best parking option for every traveller. The right choice depends on what matters most for your trip."
          />
          <div className="space-y-3 text-sm leading-7 text-orbit-text-muted">
            <p>
              Choose <strong className="text-orbit-text">Meet & Greet</strong>{' '}
              if you want the fastest, easiest terminal experience.
            </p>
            <p>
              Choose <strong className="text-orbit-text">Long Stay</strong> if
              you are going away for several days and want a lower daily rate.
            </p>
            <p>
              Choose <strong className="text-orbit-text">Park & Ride</strong>{' '}
              if you want cheap airport parking and are happy to take a shuttle.
            </p>
            <p>
              Choose <strong className="text-orbit-text">Short Stay</strong> if
              you need quick terminal access for a short trip, pick-up or
              drop-off.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-orbit-border bg-white p-5 shadow-sm md:p-6">
          <h3 className="text-lg font-bold text-orbit-text">
            Before booking, check:
          </h3>
          <Checklist items={choosingChecklist} compact />
        </div>
      </div>
    </section>
  );
}

function Checklist({
  items,
  compact = false,
}: {
  items: string[];
  compact?: boolean;
}) {
  return (
    <ul className={`${compact ? 'mt-5' : ''} grid gap-3`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 rounded-xl border border-orbit-border px-4 py-3 text-sm text-orbit-text-muted ${
            compact ? 'bg-orbit-bg' : 'bg-white'
          }`}
        >
          <i className="ri-check-line mt-0.5 text-orbit-success" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
