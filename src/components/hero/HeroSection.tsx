"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

import {
  heroTrustSignals,
  quoteAirports,
  quoteServices,
} from '@/mocks/homepage';

export default function HeroSection() {
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

            {/* Quote Form - Glass Card */}
            <div className="glass-card rounded-xl p-5 md:p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-orbit-text mb-4">Get Your Instant Price</h2>
              <form
                id="hero-quote-form"
                data-readdy-form
                action="https://readdy.ai/api/form/d7su5oscmq04e0g4eq6g"
                method="POST"
                className="flex flex-col gap-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const encodedData = new URLSearchParams();

                  formData.forEach((value, key) => {
                    encodedData.append(key, String(value));
                  });

                  try {
                    await fetch(form.action, {
                      method: 'POST',
                      body: encodedData,
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    });
                    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                    if (btn) {
                      btn.textContent = 'Quote Sent!';
                      btn.disabled = true;
                      setTimeout(() => {
                        btn.innerHTML = '<i class="ri-search-line w-4 h-4 flex items-center justify-center"></i> Get My Instant Price';
                        btn.disabled = false;
                      }, 3000);
                    }
                  } catch {
                    // silently fail
                  }
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
                      className="w-full flex items-center justify-between px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text-muted hover:text-orbit-text transition-colors"
                    >
                      <span className={formData.airport ? 'text-orbit-text' : ''}>
                        {formData.airport || 'Select Airport'}
                      </span>
                      <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center" />
                    </button>
                    <input type="hidden" name="airport" value={formData.airport} />
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
                      className="w-full flex items-center justify-between px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text-muted hover:text-orbit-text transition-colors"
                    >
                      <span className={formData.service ? 'text-orbit-text' : ''}>
                        {formData.service || 'Select Service'}
                      </span>
                      <i className="ri-arrow-down-s-line w-4 h-4 flex items-center justify-center" />
                    </button>
                    <input type="hidden" name="service_type" value={formData.service} />
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
                      className="flex-1 px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text focus:outline-none focus:border-orbit-primary/50"
                    />
                    <input
                      type="time"
                      name="arrival_time"
                      value={formData.arrivalTime}
                      onChange={(e) => setFormData({ ...formData, arrivalTime: e.target.value })}
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
                      className="flex-1 px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text focus:outline-none focus:border-orbit-primary/50"
                    />
                    <input
                      type="time"
                      name="return_time"
                      value={formData.returnTime}
                      onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
                      className="w-24 px-3 py-2.5 bg-white/70 border border-orbit-border rounded-md text-sm text-orbit-text focus:outline-none focus:border-orbit-primary/50"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-1 px-5 py-3 bg-orbit-accent text-white text-sm font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <i className="ri-search-line w-4 h-4 flex items-center justify-center" />
                  Get My Instant Price
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
