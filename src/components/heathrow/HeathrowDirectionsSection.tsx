import SectionHeader from '@/components/home/SectionHeader';
import { heathrowDirections, heathrowPostcodes } from '@/mocks/heathrow';

export default function HeathrowDirectionsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Getting There"
          title="Driving To Heathrow Airport, Terminal By Terminal"
          description="Use the correct terminal route and postcode. Terminal 4 has a different road approach from T2, T3 and T5."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {heathrowDirections.map((direction) => (
              <article
                key={direction.from}
                className="rounded-2xl border border-orbit-border bg-orbit-bg p-5"
              >
                <h2 className="font-bold text-orbit-text">{direction.from}</h2>
                <p className="mt-2 text-sm leading-7 text-orbit-text-muted">
                  {direction.text}
                </p>
              </article>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-orbit-border bg-white shadow-sm">
            <div className="bg-orbit-primary px-5 py-4">
              <h2 className="text-lg font-bold text-white">
                Heathrow terminal postcodes
              </h2>
            </div>
            <div className="divide-y divide-orbit-border">
              {heathrowPostcodes.map((postcode) => (
                <div key={postcode.terminal} className="grid gap-2 px-5 py-4 text-sm sm:grid-cols-3">
                  <span className="font-bold text-orbit-text">{postcode.terminal}</span>
                  <span className="font-bold text-orbit-primary">{postcode.postcode}</span>
                  <span className="text-orbit-text-muted">{postcode.airlines}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-orange-200 bg-orange-50 p-5 text-sm leading-7 text-orange-900">
              <strong>T4 warning:</strong> Terminal 4 is on the southern
              perimeter with a separate road approach. Do not follow signs for
              T2, T3 or T5 if flying from T4.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
