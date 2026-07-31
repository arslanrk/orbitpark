import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import AirportsHero from '@/components/airports/AirportsHero';
import AirportCardsSection from '@/components/airports/AirportCardsSection';
import AirportServiceComparison from '@/components/airports/AirportServiceComparison';
import {
  AirportsChoosingGuideSection,
  AirportsPreBookSection,
} from '@/components/airports/AirportsGuideSections';
import AirportsTrustStrip from '@/components/airports/AirportsTrustStrip';
import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/home/FAQSection';
import Footer from '@/components/home/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import { airportsFaqs } from '@/mocks/airports';

export const metadata: Metadata = {
  title: 'UK Airport Parking | Compare Cheap Airport Parking | Orbitpark',
  description:
    'Compare cheap UK airport parking at Heathrow, Gatwick, Manchester, Stansted, Luton and Birmingham. Choose Meet & Greet, Long Stay, Park & Ride or Short Stay parking and book online.',
  alternates: {
    canonical: 'https://orbitpark.co.uk/airports',
  },
  openGraph: {
    title: 'Compare UK Airport Parking | Orbitpark',
    description:
      'Find secure airport parking at major UK airports. Compare services, check prices and book online before you travel.',
    url: 'https://orbitpark.co.uk/airports',
    siteName: 'Orbitpark',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: airportsFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function AirportsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <AirportsHero />
        <AirportsTrustStrip />
        <AirportCardsSection />
        <AirportServiceComparison />
        <AirportsPreBookSection />
        <AirportsChoosingGuideSection />
        <FAQSection
          items={airportsFaqs}
          title="UK Airport Parking FAQs"
          description="Answers to the most common questions about comparing and booking airport parking across major UK airports."
          className="bg-orbit-bg"
        />
        <CTASection
          title="Find Airport Parking For Your Trip"
          description="Choose your airport, compare parking services and reserve your space before you travel."
          primaryLabel="Get My Parking Quote"
          primaryHref="/#quote"
          secondaryLabel="Compare Parking Services"
          secondaryHref="/#services"
          microcopy="Secure booking / Instant confirmation / No booking fees / Free cancellation on many products"
        />
      </main>
      <MobileStickyCTA />
      <Footer />
    </>
  );
}
