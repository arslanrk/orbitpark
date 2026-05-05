import type { Metadata } from 'next';

import Navbar from '@/components/Navbar';
import TrustBar from '@/components/TrustBar';
import CTASection from '@/components/home/CTASection';
import AirportsSection from '@/components/home/AirportsSection';
import FAQSection from '@/components/home/FAQSection';
import Footer from '@/components/home/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import ReviewsSection from '@/components/home/ReviewsSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import HeroSection from '@/components/hero/HeroSection';
import HowItWorks from '@/components/hero/HowItWorks';
import { faqs } from '@/mocks/homepage';

export const metadata: Metadata = {
  title: 'Airport Parking UK | Save 70% | Orbitpark',
  description:
    'Book cheap UK airport parking at Heathrow, Gatwick, Manchester, Stansted and Luton. Meet & Greet from GBP 14/day. Secure, trusted, instant booking.',
  alternates: {
    canonical: 'https://orbitpark.co.uk',
  },
  openGraph: {
    title: 'Orbitpark - UK Airport Parking From GBP 6/Day',
    description:
      'Compare and book secure airport parking across every major UK airport. Best price guaranteed. Instant confirmation.',
    url: 'https://orbitpark.co.uk',
    siteName: 'Orbitpark',
    type: 'website',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Orbitpark',
    url: 'https://orbitpark.co.uk',
    description:
      'Orbitpark helps UK travellers compare and book secure airport parking at Heathrow, Gatwick, Manchester, Stansted and Luton.',
    areaServed: 'United Kingdom',
    telephone: '0203 XXX XXXX',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '10000',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: 'GBP 5 - GBP 14 per day',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <HowItWorks />
        <ServicesSection />
        <AirportsSection />
        <WhyChooseSection />
        <ReviewsSection />
        <FAQSection />
        <CTASection />
      </main>
      <MobileStickyCTA />
      <Footer />
    </>
  );
}
