import { heathrowTrustSignals } from '@/mocks/heathrow';

export default function HeathrowTrustStrip() {
  return (
    <section className="border-y border-orbit-border bg-orbit-bg py-6">
      <div className="mx-auto grid max-w-orbit gap-3 px-4 md:grid-cols-5 md:px-6">
        {heathrowTrustSignals.map((signal) => (
          <div
            key={signal.label}
            className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm md:bg-transparent md:shadow-none"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-orbit-primary">
              <i className={`${signal.icon} text-xl`} />
            </span>
            <span>
              <span className="block text-sm font-bold leading-tight text-orbit-text">
                {signal.label}
              </span>
              <span className="block text-xs leading-tight text-orbit-text-muted">
                {signal.detail}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
