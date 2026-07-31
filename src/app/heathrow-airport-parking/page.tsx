import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import HeathrowDirectionsSection from '@/components/heathrow/HeathrowDirectionsSection';
import HeathrowHero from '@/components/heathrow/HeathrowHero';
import HeathrowPersonasSection from '@/components/heathrow/HeathrowPersonasSection';
import HeathrowPriceComparison from '@/components/heathrow/HeathrowPriceComparison';
import HeathrowReviewsSection from '@/components/heathrow/HeathrowReviewsSection';
import HeathrowServicesSection from '@/components/heathrow/HeathrowServicesSection';
import HeathrowTerminalGuide from '@/components/heathrow/HeathrowTerminalGuide';
import HeathrowTipsSection from '@/components/heathrow/HeathrowTipsSection';
import HeathrowTrustStrip from '@/components/heathrow/HeathrowTrustStrip';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/home/FAQSection';
import Footer from '@/components/home/Footer';
import { heathrowFaqs } from '@/mocks/heathrow';

export const metadata: Metadata = {
  title: 'Heathrow Airport Parking From GBP 8/Day | Orbitpark',
  description:
    'Compare Heathrow airport parking from GBP 8/day. Meet & Greet, Long Stay, Park & Ride and Short Stay for T2, T3, T4 and T5. Book online with Orbitpark.',
  alternates: {
    canonical: 'https://orbitpark.co.uk/heathrow-airport-parking',
  },
  openGraph: {
    title: 'Stop Overpaying For Heathrow Parking | Orbitpark',
    description:
      'Book secure Heathrow parking from GBP 56 for 7 days. Compare Meet & Greet, Long Stay, Park & Ride and Short Stay with instant confirmation.',
    url: 'https://orbitpark.co.uk/heathrow-airport-parking',
    siteName: 'Orbitpark',
    type: 'website',
  },
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Heathrow Airport Parking',
  description:
    'Secure, affordable airport parking at London Heathrow from GBP 8/day. Meet & Greet, Long Stay, Park & Ride and Short Stay at T2, T3, T4 and T5.',
  brand: {
    '@type': 'Brand',
    name: 'Orbitpark',
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '8',
    highPrice: '145',
    priceCurrency: 'GBP',
    offerCount: '20',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '4821',
    bestRating: '5',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: heathrowFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://orbitpark.co.uk/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Airports',
      item: 'https://orbitpark.co.uk/airports',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Heathrow Airport Parking',
      item: 'https://orbitpark.co.uk/heathrow-airport-parking',
    },
  ],
};

export default function HeathrowAirportParkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <main>
        <HeathrowHero />
        <HeathrowTrustStrip />
        <HeathrowPriceComparison />
        <HeathrowServicesSection />
        <HeathrowTerminalGuide />
        <HeathrowPersonasSection />
        <HeathrowTipsSection />
        <FAQSection
          items={heathrowFaqs}
          title="Your Heathrow Parking Questions, Answered Honestly"
          description="Clear answers about Heathrow airport parking prices, security, Meet & Greet, cancellations, delays and terminal selection."
          className="bg-orbit-bg"
        />
        <HeathrowReviewsSection />
        <HeathrowDirectionsSection />
        <CTASection
          title="Your Heathrow Parking Is Sorted"
          description="Thousands of Heathrow travellers save by booking through Orbitpark instead of paying gate prices. Compare your dates, reserve your space and get instant confirmation."
          primaryLabel="Show Me My Heathrow Saving"
          primaryHref="#quote"
          secondaryLabel="Rather Speak To Someone? 0203 XXX XXXX"
          secondaryHref="tel:0203XXXXXXX"
          microcopy="No booking fees / Free cancellation on many bookings / Instant confirmation / Park Mark providers"
        />
      </main>
      <MobileStickyCTA />
      <Footer />
    </>
  );
}
