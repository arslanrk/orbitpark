"use client";

import { useEffect, useRef, useState } from 'react';
import { howItWorks } from '@/mocks/homepage';

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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 md:py-32">
      <div className="max-w-orbit mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-3 py-1 text-xs font-medium text-orbit-primary bg-sky-50 border border-sky-200 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orbit-text mb-4">
            Book Your Airport Parking In 3 Simple Steps
          </h2>
          <p className="text-orbit-text-muted text-base md:text-lg max-w-lg mx-auto">
            We have made booking airport parking as easy as ordering a taxi. No confusion. No hidden fees. Just secure parking sorted in minutes.
          </p>
        </div>

        {/* Cards with Connector */}
        <div className="relative">
          {/* Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[16.66%] right-[16.66%] h-[1px] bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={step.step}
                className={`glass-card bg-white rounded-xl p-6 md:p-8 relative transition-all duration-700 shadow-sm ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center mb-5">
                  <span className="text-sm font-bold text-orbit-primary">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center text-orbit-primary mb-4">
                  <i className={`${step.icon} text-2xl`} />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold text-orbit-text mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-orbit-text-muted leading-relaxed">
                  {step.description}
                </p>

                {/* Connector dot */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:flex absolute top-[60px] -right-4 w-8 h-8 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-sky-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
