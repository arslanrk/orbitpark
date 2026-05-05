"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { howItWorks } from '@/mocks/homepage';

const processHighlights = [
  { icon: 'ri-time-line', label: 'Under 60 seconds' },
  { icon: 'ri-bank-card-line', label: 'Secure checkout' },
  { icon: 'ri-mail-check-line', label: 'Instant confirmation' },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orbit-border to-transparent" />
      <div className="mx-auto max-w-orbit px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-orbit-primary">
              <i className="ri-route-line" />
              Simple Process
            </span>
            <h2 className="text-3xl font-bold tracking-normal text-orbit-text md:text-4xl lg:text-5xl">
              Book Your Airport Parking In 3 Simple Steps
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-orbit-text-muted md:text-lg">
              We have made booking airport parking as easy as ordering a taxi.
              No confusion. No hidden fees. Just secure parking sorted in
              minutes.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {processHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-orbit-border bg-orbit-bg px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-orbit-primary shadow-sm">
                    <i className={`${item.icon} text-lg`} />
                  </span>
                  <span className="text-sm font-semibold text-orbit-text">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="#quote"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-orbit-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600"
            >
              Start with a free quote
              <i className="ri-arrow-right-line" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute bottom-10 left-6 top-10 hidden w-px bg-gradient-to-b from-sky-200 via-orbit-primary/30 to-sky-200 md:block" />
            <div className="space-y-5">
              {howItWorks.map((step, index) => (
                <article
                  key={step.step}
                  className={`relative rounded-2xl border border-orbit-border bg-orbit-bg p-5 shadow-sm transition-all duration-700 md:ml-12 md:p-6 ${
                    isVisible
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 160}ms` }}
                >
                  <div className="absolute -left-[61px] top-6 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-orbit-primary text-sm font-bold text-white shadow-sm md:flex">
                    {step.step}
                  </div>

                  <div className="flex flex-col gap-5 sm:flex-row">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-orbit-primary shadow-sm">
                      <i className={`${step.icon} text-2xl`} />
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-orbit-primary md:hidden">
                          Step {step.step}
                        </span>
                        <h3 className="text-lg font-bold text-orbit-text md:text-xl">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-7 text-orbit-text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
