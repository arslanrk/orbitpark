"use client";

import { useState } from 'react';
import { useEffect } from 'react';

import { reviews } from '@/mocks/homepage';

export default function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeReview = reviews[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === reviews.length - 1 ? 0 : current + 1,
      );
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="mx-auto max-w-5xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-orbit-border bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-orbit-primary p-6 text-white md:p-8">
            <p className="text-sm font-semibold uppercase tracking-normal text-sky-100">
              Verified customer story
            </p>
            <div className="mt-8 flex gap-1 text-orbit-accent" aria-label="5 star rating">
              {Array.from({ length: activeReview.rating }).map((_, index) => (
                <i key={index} className="ri-star-fill text-xl" />
              ))}
            </div>
            <p className="mt-6 text-5xl font-bold leading-none">4.9</p>
            <p className="mt-2 text-sm text-sky-100">Average customer rating</p>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
                aria-label="Previous review"
              >
                <i className="ri-arrow-left-line text-xl" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
                aria-label="Next review"
              >
                <i className="ri-arrow-right-line text-xl" />
              </button>
            </div>
          </div>

          <figure className="relative min-h-[420px] p-6 md:p-10">
            <i className="ri-double-quotes-l absolute right-4 top-0 text-8xl text-sky-50" />
            <span className="absolute right-5 top-5 hidden rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-orbit-primary sm:inline-flex">
              {activeIndex + 1} of {reviews.length}
            </span>
            <div className="relative flex h-full flex-col justify-between">
              <blockquote className="text-xl font-semibold leading-9 text-orbit-text md:text-3xl md:leading-[1.35]">
                &ldquo;{activeReview.text}&rdquo;
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-50 text-base font-bold text-orbit-primary">
                    {activeReview.avatar}
                  </span>
                  <span>
                    <span className="block text-base font-bold text-orbit-text">
                      {activeReview.name}
                    </span>
                    <span className="block text-sm text-orbit-text-muted">
                      {activeReview.airport} / {activeReview.service}
                    </span>
                  </span>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <span className="text-[11px] font-semibold text-orbit-text-dim sm:hidden">
          {activeIndex + 1}/{reviews.length}
        </span>
        <div className="flex gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? 'w-8 bg-orbit-primary'
                  : 'w-2.5 bg-orbit-border hover:bg-orbit-text-dim'
              }`}
              aria-label={`Show review ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
