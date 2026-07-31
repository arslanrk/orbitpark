import SectionHeader from '@/components/home/SectionHeader';
import { heathrowTerminals } from '@/mocks/heathrow';

export default function HeathrowTerminalGuide() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          eyebrow="Terminal Guide"
          title="Which Heathrow Terminal Are You Flying From?"
          description="Heathrow has four active terminals across a large airport campus. Getting your terminal right matters, especially for Meet & Greet bookings."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {heathrowTerminals.map((terminal) => (
            <article
              key={terminal.terminal}
              className="rounded-2xl border border-orbit-border bg-orbit-bg p-5 md:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-orbit-primary">
                    {terminal.terminal}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-orbit-text">
                    {terminal.name}
                  </h2>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-orbit-text-muted">
                  {terminal.postcode}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-orbit-text-muted">
                {terminal.description}
              </p>
              <dl className="mt-5 grid gap-3 text-sm">
                <TerminalDetail label="Key airlines" value={terminal.airlines} />
                <TerminalDetail label="Meet & Greet drop-off" value={terminal.dropOff} />
                <TerminalDetail label="Shuttle time" value={terminal.shuttle} />
                <TerminalDetail label="Insider tip" value={terminal.tip} />
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white p-4">
      <dt className="text-xs font-bold uppercase text-orbit-text-dim">{label}</dt>
      <dd className="mt-1 leading-6 text-orbit-text-muted">{value}</dd>
    </div>
  );
}
