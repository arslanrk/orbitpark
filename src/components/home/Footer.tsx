import Link from 'next/link';

import { footerAirports, footerCompany, footerServices } from '@/mocks/homepage';

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 pb-20 text-white lg:pb-0">
      <div className="mx-auto grid max-w-orbit gap-10 px-4 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-6">
        <div>
          <Link href="/" className="mb-4 inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-orbit-primary">
              <i className="ri-plane-line text-xl" />
            </span>
            <span className="text-xl font-bold">Orbitpark</span>
          </Link>
          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Orbitpark is a UK registered airport parking comparison and booking
            platform. We help travellers find and book cheap, secure airport
            parking at Heathrow, Gatwick, Manchester, Stansted and Luton.
          </p>
          <div className="mt-5 grid gap-2 text-xs text-slate-400">
            <p>Registered in England & Wales. Company No. XXXXXXXX</p>
            <p>Registered Office: 71-75 Shelton Street, London, WC2H 9JQ</p>
            <p>Support: 0203 XXX XXXX</p>
          </div>
        </div>

        <FooterColumn title="Airports" items={footerAirports} />
        <FooterColumn title="Services" items={footerServices} />
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-normal text-white">
            Company
          </h3>
          <ul className="space-y-3">
            {footerCompany.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-orbit flex-col gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
          <p>Copyright 2026 Orbitpark Ltd. All rights reserved.</p>
          <p>
            Secure Payments by Stripe / Park Mark Partner / UK Registered
            Company / 4.9/5 Customer Rating
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-bold uppercase tracking-normal text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
