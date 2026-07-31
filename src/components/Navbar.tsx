"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerAirports, navLinks } from '@/mocks/homepage';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [airportMenuOpen, setAirportMenuOpen] = useState(false);
  const [mobileAirportsOpen, setMobileAirportsOpen] = useState(false);
  const navTextClass = 'text-orbit-text-muted hover:text-orbit-text';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-orbit-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-orbit mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/orbitpark-logo.png"
            alt="Orbitpark"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <span className="text-lg md:text-xl font-bold tracking-tight text-orbit-text">
            Orbitpark
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.label === 'Airports' ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setAirportMenuOpen(true)}
                onMouseLeave={() => setAirportMenuOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setAirportMenuOpen((open) => !open)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${navTextClass}`}
                  aria-expanded={airportMenuOpen}
                  aria-haspopup="menu"
                >
                  Airports
                  <i
                    className={`ri-arrow-down-s-line transition-transform ${
                      airportMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {airportMenuOpen && (
                  <div
                    className="absolute left-0 top-full w-72 rounded-xl border border-orbit-border bg-white p-2 shadow-xl"
                    role="menu"
                  >
                    {footerAirports.slice(0, 5).map((airport) => (
                      <Link
                        key={airport.label}
                        href={airport.href}
                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-orbit-text-muted transition-colors hover:bg-orbit-bg hover:text-orbit-text"
                        role="menuitem"
                      >
                        {airport.label}
                        <i className="ri-arrow-right-line text-orbit-text-dim" />
                      </Link>
                    ))}
                    <div className="mt-2 border-t border-orbit-border pt-2">
                      <Link
                        href="/airports"
                        className="flex items-center justify-between rounded-lg bg-sky-50 px-3 py-2.5 text-sm font-bold text-orbit-primary transition-colors hover:bg-sky-100"
                        role="menuitem"
                      >
                        View all airports
                        <i className="ri-arrow-right-line" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${navTextClass}`}
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0203XXXXXXX"
            className={`flex items-center gap-2 text-sm transition-colors whitespace-nowrap ${navTextClass}`}
          >
            <i className="ri-phone-line w-4 h-4 flex items-center justify-center" />
            0203 XXX XXXX
          </a>
          <Link
            href="#quote"
            className="px-5 py-2.5 bg-orbit-accent text-white text-sm font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300 whitespace-nowrap"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-orbit-text"
          aria-label="Toggle menu"
        >
          <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl w-5 h-5 flex items-center justify-center`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-orbit-border shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.label === 'Airports' ? (
                <div key={link.label}>
                  <button
                    type="button"
                    onClick={() => setMobileAirportsOpen((open) => !open)}
                    className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-orbit-text-muted hover:text-orbit-text hover:bg-orbit-bg/50 rounded-md transition-colors"
                    aria-expanded={mobileAirportsOpen}
                  >
                    Airports
                    <i
                      className={`ri-arrow-down-s-line transition-transform ${
                        mobileAirportsOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobileAirportsOpen && (
                    <div className="ml-4 mt-1 border-l border-orbit-border pl-3">
                      {footerAirports.slice(0, 5).map((airport) => (
                        <Link
                          key={airport.label}
                          href={airport.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-orbit-text-muted hover:bg-orbit-bg/50 hover:text-orbit-text"
                        >
                          {airport.label}
                        </Link>
                      ))}
                      <Link
                        href="/airports"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-1 block rounded-md px-3 py-2 text-sm font-bold text-orbit-primary hover:bg-sky-50"
                      >
                        View all airports
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-orbit-text-muted hover:text-orbit-text hover:bg-orbit-bg/50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="mt-3 pt-3 border-t border-orbit-border flex flex-col gap-3">
              <a
                href="tel:0203XXXXXXX"
                className="flex items-center gap-2 px-4 py-2 text-sm text-orbit-text-muted"
              >
                <i className="ri-phone-line w-4 h-4 flex items-center justify-center" />
                0203 XXX XXXX
              </a>
              <Link
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 px-5 py-3 bg-orbit-accent text-white text-sm font-semibold rounded-md text-center"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
