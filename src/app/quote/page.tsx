import Link from 'next/link';

type QuotePageProps = {
  searchParams: Promise<{
    airport?: string;
    terminal?: string;
    service?: string;
    arrivalDate?: string;
    arrivalTime?: string;
    returnDate?: string;
    returnTime?: string;
  }>;
};

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const quoteDetails = {
    airport: params.airport ?? '',
    terminal: params.terminal ?? '',
    service: params.service ?? '',
    arrivalDate: params.arrivalDate ?? '',
    arrivalTime: params.arrivalTime ?? '',
    returnDate: params.returnDate ?? '',
    returnTime: params.returnTime ?? '',
  };
  const hasQuoteDetails =
    quoteDetails.airport &&
    quoteDetails.service &&
    quoteDetails.arrivalDate &&
    quoteDetails.arrivalTime &&
    quoteDetails.returnDate &&
    quoteDetails.returnTime;

  return (
    <main className="min-h-screen bg-orbit-bg px-4 py-16 md:px-6">
      <section className="mx-auto max-w-3xl rounded-2xl border border-orbit-border bg-white p-6 shadow-sm md:p-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-orbit-primary">
          <i className="ri-price-tag-3-line text-2xl" />
        </div>
        <h1 className="text-3xl font-bold text-orbit-text md:text-4xl">
          Your airport parking quote is ready to review
        </h1>
        <p className="mt-4 text-base leading-7 text-orbit-text-muted">
          We have captured your travel details. The next production step is to
          connect this page to live pricing and supplier availability.
        </p>

        {hasQuoteDetails ? (
          <dl className="mt-8 grid gap-3 rounded-xl bg-orbit-bg p-4 text-sm md:grid-cols-2">
            <QuoteDetail label="Airport" value={quoteDetails.airport} />
            {quoteDetails.terminal && (
              <QuoteDetail label="Terminal" value={quoteDetails.terminal} />
            )}
            <QuoteDetail label="Service" value={quoteDetails.service} />
            <QuoteDetail
              label="Drop-off"
              value={`${quoteDetails.arrivalDate} at ${quoteDetails.arrivalTime}`}
            />
            <QuoteDetail
              label="Return"
              value={`${quoteDetails.returnDate} at ${quoteDetails.returnTime}`}
            />
          </dl>
        ) : (
          <div className="mt-8 rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm text-orange-800">
            Quote details were missing. Please return to the homepage and
            complete the form again.
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-orbit-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600"
          >
            Edit quote
            <i className="ri-arrow-right-line" />
          </Link>
          <a
            href="tel:0203XXXXXXX"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-orbit-border px-5 py-3 text-sm font-bold text-orbit-text transition-colors hover:bg-orbit-bg"
          >
            <i className="ri-phone-line" />
            Prefer to call? 0203 XXX XXXX
          </a>
        </div>
      </section>
    </main>
  );
}

function QuoteDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white p-3">
      <dt className="text-xs font-semibold uppercase tracking-normal text-orbit-text-dim">
        {label}
      </dt>
      <dd className="mt-1 font-semibold text-orbit-text">{value}</dd>
    </div>
  );
}
