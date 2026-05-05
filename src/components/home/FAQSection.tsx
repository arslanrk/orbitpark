import { faqs } from '@/mocks/homepage';
import SectionHeader from './SectionHeader';

export default function FAQSection() {
  return (
    <section id="faqs" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <SectionHeader
          title="Frequently Asked Questions About Airport Parking"
          description="Everything you need to know about booking airport parking with Orbitpark. Cannot find your answer? Call our team on 0203 XXX XXXX."
        />

        <div className="mx-auto max-w-4xl divide-y divide-orbit-border rounded-xl border border-orbit-border bg-white shadow-sm">
          {faqs.map((faq) => (
            <details key={faq.question} className="group p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-orbit-text">
                {faq.question}
                <i className="ri-add-line text-orbit-primary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-orbit-text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
