import { whyChooseOrbitpark } from '@/mocks/homepage';
import SectionHeader from './SectionHeader';

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Why Orbitpark"
          title="Why 10,000+ Travellers Choose Orbitpark Every Year"
          description="We started Orbitpark with one mission: to make airport parking simple, affordable, and stress-free for every UK traveller. No confusing comparison tables. No hidden charges. No nasty surprises."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseOrbitpark.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-orbit-border bg-orbit-bg p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white text-orbit-primary shadow-sm">
                <i className={`${item.icon} text-xl`} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-orbit-text">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-orbit-text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
