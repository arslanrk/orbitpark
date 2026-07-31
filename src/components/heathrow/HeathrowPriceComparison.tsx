import SectionHeader from '@/components/home/SectionHeader';
import { heathrowPriceComparison } from '@/mocks/heathrow';

export default function HeathrowPriceComparison() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Price Comparison"
          title="How Much Are You Overpaying For Heathrow Parking?"
          description="Most travellers only see the saving once the numbers are side by side. These example seven-day prices show why pre-booking Heathrow airport parking matters."
        />

        <div className="overflow-hidden rounded-2xl border border-orbit-border bg-white shadow-sm">
          <div className="hidden grid-cols-4 bg-orbit-primary px-5 py-4 text-sm font-bold text-white md:grid">
            <span>Service</span>
            <span>Official Heathrow</span>
            <span>Orbitpark From</span>
            <span>You Save</span>
          </div>
          {heathrowPriceComparison.map((row) => (
            <div
              key={row.service}
              className="grid gap-3 border-t border-orbit-border px-5 py-5 text-sm md:grid-cols-4 md:items-center"
            >
              <div>
                <p className="font-bold text-orbit-text">{row.service}</p>
                <p className="text-xs text-orbit-text-muted">{row.detail}</p>
              </div>
              <PriceCell label="Official Heathrow" value={row.officialPrice} muted />
              <PriceCell label="Orbitpark From" value={row.orbitparkPrice} />
              <PriceCell label="You Save" value={row.saving} accent />
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-sm leading-7 text-orange-900 md:p-6">
          <strong>That saving on Meet & Greet alone can cover flights for a short European break.</strong>{' '}
          Pre-booking takes minutes, and it is one of the easiest ways to keep
          more of your holiday budget for the trip itself.
        </div>
      </div>
    </section>
  );
}

function PriceCell({
  label,
  value,
  muted = false,
  accent = false,
}: {
  label: string;
  value: string;
  muted?: boolean;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-orbit-text-dim md:hidden">
        {label}
      </p>
      <p
        className={`text-lg font-bold ${
          accent
            ? 'text-orbit-success'
            : muted
              ? 'text-orbit-text-muted'
              : 'text-orbit-primary'
        }`}
      >
        {value}
      </p>
    </div>
  );
}
