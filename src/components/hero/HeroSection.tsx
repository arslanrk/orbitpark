"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';

import {
  airports,
  heroTrustSignals,
  quoteAirports,
  quoteServices,
} from '@/mocks/homepage';

type HeroQuoteState = {
  airport: string;
  service: string;
  arrivalDate: string;
  arrivalTime: string;
  returnDate: string;
  returnTime: string;
};

export default function HeroSection() {
  const router = useRouter();
  const [formData, setFormData] = useState<HeroQuoteState>({
    airport: '',
    service: '',
    arrivalDate: '',
    arrivalTime: '',
    returnDate: '',
    returnTime: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const updateField = (field: keyof HeroQuoteState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.airport ||
      !formData.service ||
      !formData.arrivalDate ||
      !formData.arrivalTime ||
      !formData.returnDate ||
      !formData.returnTime
    ) {
      setFormError('Please complete every field to get your quote.');
      return;
    }

    const arrival = new Date(`${formData.arrivalDate}T${formData.arrivalTime}`);
    const returnAt = new Date(`${formData.returnDate}T${formData.returnTime}`);

    if (Number.isNaN(arrival.getTime()) || Number.isNaN(returnAt.getTime())) {
      setFormError('Please enter valid drop-off and return details.');
      return;
    }

    if (returnAt <= arrival) {
      setFormError('Return date and time must be after drop-off.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    const params = new URLSearchParams({
      airport: formData.airport,
      service: formData.service,
      arrivalDate: formData.arrivalDate,
      arrivalTime: formData.arrivalTime,
      returnDate: formData.returnDate,
      returnTime: formData.returnTime,
    });

    router.push(`/quote?${params.toString()}`);
  };

  return (
    <section
      id="quote"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-orbit-bg pt-24 md:pt-28"
    >
      <Image
        src="/homepage/hero-clouds.jpg"
        alt="Aerial view of clouds and blue sky from an airplane window"
        fill
        priority
        loading="eager"
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-white/82" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/88 to-sky-50/70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-orbit-bg to-transparent" />

      <div className="mx-auto grid w-full max-w-orbit gap-8 px-4 pb-14 md:px-6 md:pb-20 lg:grid-cols-[1fr_440px] lg:items-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-orbit-primary shadow-sm backdrop-blur">
            <i className="ri-shield-check-line" />
            Trusted by 10,000+ UK travellers
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-normal text-orbit-text sm:text-5xl md:text-6xl lg:text-7xl">
            Airport Parking UK.
            <span className="block text-orbit-primary-glow">Done Right.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-orbit-text-muted md:text-xl md:leading-9">
            Compare and book secure parking at every major UK airport. Choose
            Meet & Greet convenience, affordable Long Stay, or Park & Ride
            value before you travel.
          </p>

          <ul className="mt-7 grid max-w-2xl gap-3 text-sm font-medium text-orbit-text-muted sm:grid-cols-2">
            {heroTrustSignals.map((signal) => (
              <li key={signal} className="flex items-start gap-2">
                <i className="ri-check-line mt-1 text-orbit-success" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-2 rounded-2xl border border-white/70 bg-white/70 p-2 shadow-sm backdrop-blur sm:grid-cols-5">
            {airports.map((airport) => (
              <div key={airport.code} className="rounded-xl bg-white px-3 py-3 shadow-sm">
                <p className="text-xs font-bold text-orbit-text">{airport.code}</p>
                <p className="mt-1 text-[11px] leading-4 text-orbit-text-muted">
                  From GBP {airport.priceFrom}/day
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <form
            id="hero-quote-form"
            noValidate
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/80 bg-white p-4 text-orbit-text shadow-2xl md:p-5"
          >
            <div className="mb-5 flex items-start justify-between gap-3">
              <div>
                <p className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-normal text-orbit-primary">
                  <i className="ri-search-line" />
                  Instant quote
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-orbit-text">
                  Get your parking price
                </h2>
                <p className="mt-1 text-sm text-orbit-text-muted">
                  Compare secure airport parking in under a minute.
                </p>
              </div>
              <span className="rounded-xl bg-orange-50 px-3 py-2 text-right text-xs font-bold leading-tight text-orbit-accent">
                Save up to
                <span className="block text-lg">70%</span>
              </span>
            </div>

            <div className="grid min-w-0 gap-3.5">
              <SelectField
                label="Airport"
                value={formData.airport}
                onChange={(value) => updateField('airport', value)}
                options={quoteAirports}
                placeholder="Select airport"
              />
              <SelectField
                label="Service"
                value={formData.service}
                onChange={(value) => updateField('service', value)}
                options={quoteServices}
                placeholder="Select service"
              />

              <div className="grid min-w-0 gap-3 sm:grid-cols-2">
                <DateTimeFields
                  label="Drop-off"
                  dateValue={formData.arrivalDate}
                  timeValue={formData.arrivalTime}
                  onDateChange={(value) => updateField('arrivalDate', value)}
                  onTimeChange={(value) => updateField('arrivalTime', value)}
                />
                <DateTimeFields
                  label="Return"
                  dateValue={formData.returnDate}
                  timeValue={formData.returnTime}
                  onDateChange={(value) => updateField('returnDate', value)}
                  onTimeChange={(value) => updateField('returnTime', value)}
                />
              </div>
            </div>

            {formError && (
              <p className="mt-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700">
                {formError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-orbit-accent px-5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <i
                className={`${isSubmitting ? 'ri-loader-4-line animate-spin' : 'ri-search-line'} flex h-4 w-4 items-center justify-center`}
              />
              {isSubmitting ? 'Checking Prices...' : 'Get My Instant Price'}
            </button>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-orbit-text-muted">
              <span className="rounded-lg bg-orbit-bg px-2 py-2">No fees</span>
              <span className="rounded-lg bg-orbit-bg px-2 py-2">Secure pay</span>
              <span className="rounded-lg bg-orbit-bg px-2 py-2">Instant email</span>
            </div>
          </form>
        </div>

        <div
          className={`flex justify-center transition-all delay-500 duration-1000 lg:col-span-2 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="#how-it-works"
            className="flex flex-col items-center gap-2 text-orbit-text-dim transition-colors hover:text-orbit-text-muted"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-orbit-text-dim/50 p-1">
              <div className="h-2 w-1 animate-bounce rounded-full bg-orbit-text-dim" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-orbit-text">
      {label}
      <select
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full min-w-0 truncate rounded-lg border border-orbit-border bg-white px-3 text-sm text-orbit-text outline-none transition-colors focus:border-orbit-primary"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function DateTimeFields({
  label,
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
}: {
  label: string;
  dateValue: string;
  timeValue: string;
  onDateChange: (value: string) => void;
  onTimeChange: (value: string) => void;
}) {
  return (
    <fieldset className="grid min-w-0 gap-1.5">
      <legend className="text-sm font-semibold text-orbit-text">{label}</legend>
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_96px] gap-2 sm:grid-cols-[minmax(0,1fr)_108px]">
        <input
          required
          type="date"
          value={dateValue}
          onChange={(event) => onDateChange(event.target.value)}
          className="h-12 min-w-0 rounded-lg border border-orbit-border bg-white px-3 text-sm text-orbit-text outline-none transition-colors focus:border-orbit-primary"
        />
        <input
          required
          type="time"
          value={timeValue}
          onChange={(event) => onTimeChange(event.target.value)}
          className="h-12 min-w-0 rounded-lg border border-orbit-border bg-white px-3 text-sm text-orbit-text outline-none transition-colors focus:border-orbit-primary"
        />
      </div>
    </fieldset>
  );
}
