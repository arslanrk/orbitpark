"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import {
  heroTrustSignals,
  airports,
  quoteAirports,
  quoteServices,
} from '@/mocks/homepage';

export default function HeroSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    airport: '',
    service: '',
    arrivalDate: '',
    arrivalTime: '',
    returnDate: '',
    returnTime: '',
  });
  const [showAirportDropdown, setShowAirportDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="quote" className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orbit-bg via-[#F0F9FF] to-[#E0F2FE]" />

      {/* Soft blue ambient glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sky-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-sky-200/15 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-orbit mx-auto px-4 md:px-6 w-full py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className={`flex-1 w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-orbit-primary text-xs font-medium mb-6">
              <i className="ri-shield-check-line w-3.5 h-3.5 flex items-center justify-center" />
              Trusted by 10,000+ UK travellers
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orbit-text leading-[1.1] tracking-tight mb-6">
              Airport Parking UK<br />
              <span className="text-orbit-primary-glow">Done Right.</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-orbit-text-muted max-w-lg mb-8 leading-relaxed">
              Compare and book secure parking at every major UK airport. Whether you need Meet & Greet convenience at Heathrow, affordable Long Stay parking at Gatwick, or Park & Ride at Manchester, Orbitpark gets you the lowest price, guaranteed.
            </p>

            <ul className="mb-8 grid gap-2 text-sm text-orbit-text-muted sm:grid-cols-2">
              {heroTrustSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-2">
                  <i className="ri-check-line text-orbit-success" />
                  {signal}
                </li>
              ))}
            </ul>

            <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl border border-orbit-border bg-white/65 p-2 shadow-sm backdrop-blur sm:grid-cols-5">
              {airports.map((airport) => (
                <div key={airport.code} className="rounded-lg bg-white px-3 py-2">
                  <p className="text-xs font-bold text-orbit-text">{airport.code}</p>
                  <p className="text-[11px] text-orbit-text-muted">
                    From GBP {airport.priceFrom}/day
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Form - Glass Card */}
            <div className="glass-card rounded-xl p-5 md:p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-orbit-text mb-4">Get Your Instant Price</h2>
              <form
                id="hero-quote-form"
                data-readdy-form
                noValidate
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();

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
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Airport Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setShowAirportDropdown(!showAirportDropdown);
                        setShowServiceDropdown(false);
                      }}
                      aria-invalid={formError && !formData.airport ? true : undefined}
                      className="w-full flex items-center justify-between px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text-muted hover:text-orbit-text transition-colors"
                    >
                      <span className={formData.airport ? 'text-orbit-text' : ''}>
                        {formData.airport || 'Select Airport'}
                      </span>
                      <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center" />
                    </button>
                    <input required type="hidden" name="airport" value={formData.airport} />
                    {showAirportDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-orbit-border rounded-md z-30 max-h-48 overflow-y-auto shadow-lg">
                        {quoteAirports.map((airport) => (
                          <button
                            key={airport}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, airport });
                              setShowAirportDropdown(false);
                            }}
                            className="w-full text-left px-3 py-2 text-sm text-orbit-text-muted hover:text-orbit-text hover:bg-sky-50 transition-colors"
                          >
                            {airport}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Service Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setShowServiceDropdown(!showServiceDropdown);
                        setShowAirportDropdown(false);
                      }}
                      aria-invalid={formError && !formData.service ? true : undefined}
                      className="w-full flex items-center justify-between px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text-muted hover:text-orbit-text transition-colors"
                    >
                      <span className={formData.service ? 'text-orbit-text' : ''}>
                        {formData.service || 'Select Service'}
                      </span>
                      <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center" />
                    </button>
                    <input required type="hidden" name="service_type" value={formData.service} />
                    {showServiceDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-orbit-border rounded-md z-30 shadow-lg">
                        {quoteServices.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, service });
                              setShowServiceDropdown(false);
                            }}
                            className="w-full text-left px-3 py-2 text-sm text-orbit-text-muted hover:text-orbit-text hover:bg-sky-50 transition-colors"
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrival Date + Time */}
                  <div className="flex gap-2">
                    <input
                      type="date"
                      name="arrival_date"
                      value={formData.arrivalDate}
                      onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                      required
                      className="flex-1 px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text focus:outline-none focus:border-orbit-primary/50"
                    />
                    <input
                      type="time"
                      name="arrival_time"
                      value={formData.arrivalTime}
                      onChange={(e) => setFormData({ ...formData, arrivalTime: e.target.value })}
                      required
                      className="w-24 px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text focus:outline-none focus:border-orbit-primary/50"
                    />
                  </div>

                  {/* Return Date + Time */}
                  <div className="flex gap-2">
                    <input
                      type="date"
                      name="return_date"
                      value={formData.returnDate}
                      onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                      required
                      className="flex-1 px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text focus:outline-none focus:border-orbit-primary/50"
                    />
                    <input
                      type="time"
                      name="return_time"
                      value={formData.returnTime}
                      onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
                      required
                      className="w-24 px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text focus:outline-none focus:border-orbit-primary/50"
                    />
                  </div>
                </div>

                {formError && (
                  <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700">
                    {formError}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-1 px-5 py-3 bg-orbit-accent text-white text-sm font-semibold rounded-md hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <i
                    className={`${isSubmitting ? 'ri-loader-4-line animate-spin' : 'ri-search-line'} w-4 h-4 flex items-center justify-center`}
                  />
                  {isSubmitting ? 'Checking Prices...' : 'Get My Instant Price'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Image + Floating Cards */}
          <div className={`hidden lg:block flex-1 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/homepage/hero-clouds.jpg"
                alt="Aerial view of clouds and blue sky from airplane window"
                fill
                priority
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover"
              />
              {/* Subtle light overlay for card readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10" />

              {/* Floating Card - Booking Confirmation */}
              <div className="absolute top-6 right-6 glass-card-strong rounded-lg p-3 max-w-[200px] animate-pulse-slow">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-xs w-3 h-3 flex items-center justify-center" />
                  </div>
                  <span className="text-xs font-semibold text-orbit-text">Booking Confirmed</span>
                </div>
                <p className="text-[10px] text-orbit-text-muted">Heathrow Meet & Greet - 14 days</p>
              </div>

              {/* Floating Card - Savings */}
              <div className="absolute bottom-8 left-6 glass-card-strong rounded-lg p-3 max-w-[180px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                    <i className="ri-percent-line text-orbit-accent text-sm w-4 h-4 flex items-center justify-center" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-orbit-text">Save up to 70%</p>
                    <p className="text-[10px] text-orbit-text-muted">vs on-the-day parking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`flex justify-center mt-12 md:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#how-it-works"
            className="flex flex-col items-center gap-2 text-orbit-text-dim hover:text-orbit-text-muted transition-colors"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-orbit-text-dim/50 flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-orbit-text-dim rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
