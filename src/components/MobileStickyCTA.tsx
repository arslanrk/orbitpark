import Link from 'next/link';

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-orbit-border bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-orbit grid-cols-2 gap-3">
        <Link
          href="/#quote"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-orbit-accent px-4 py-3 text-sm font-bold text-white"
        >
          <i className="ri-search-line" />
          Get quote
        </Link>
        <a
          href="tel:0203XXXXXXX"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-orbit-border px-4 py-3 text-sm font-bold text-orbit-text"
        >
          <i className="ri-phone-line" />
          Call
        </a>
      </div>
    </div>
  );
}
