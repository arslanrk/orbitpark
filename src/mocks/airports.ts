export const airportsHubTrustNotes = [
  'No booking fees',
  'Secure online payments',
  'Instant confirmation',
  'Free cancellation on many products',
];

export const airportsTrustStrip = [
  { icon: 'ri-lock-line', label: 'Secure online booking' },
  { icon: 'ri-plane-line', label: 'Major UK airports covered' },
  { icon: 'ri-parking-box-line', label: 'Meet & Greet, Long Stay and Park & Ride' },
  { icon: 'ri-mail-check-line', label: 'Instant confirmation' },
  { icon: 'ri-customer-service-2-line', label: 'UK support team' },
];

export const airportsHubImages = {
  hero: '/airports/airport-page-hero.png',
  trustSecurity: '/airports/trust-security-supporting-image.png',
};

export const airportHubCards = [
  {
    name: 'Heathrow Airport Parking',
    code: 'LHR',
    priceLabel: 'From GBP 8/day',
    image: '/airports/heathrow-airport-parking-card.png',
    description:
      'Heathrow is the UKs busiest airport, with flights departing across Terminals 2, 3, 4 and 5. Parking choice matters here because terminal access, transfer times and drop-off points can vary significantly.',
    extra:
      'Orbitpark helps you compare Heathrow parking options including Meet & Greet for fast terminal handover, Long Stay for extended trips, Park & Ride for lower prices and Short Stay for quick access.',
    terminals: ['T2', 'T3', 'T4', 'T5'],
    bestFor: 'Long-haul trips, business travel, Meet & Greet',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride', 'Short Stay'],
    href: '/heathrow-airport-parking',
  },
  {
    name: 'Gatwick Airport Parking',
    code: 'LGW',
    priceLabel: 'From GBP 7/day',
    image: '/airports/gatwick-airport-parking-card.png',
    description:
      'Gatwick operates from North Terminal and South Terminal, so choosing parking linked to the right terminal is important. Pre-booking helps avoid last-minute stress and expensive gate prices.',
    extra:
      'Compare Gatwick Meet & Greet, Long Stay and Park & Ride options with clear service information before you travel.',
    terminals: ['North Terminal', 'South Terminal'],
    bestFor: 'Family holidays, North/South terminal matching, long stay parking',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride'],
    href: '/gatwick-airport-parking',
  },
  {
    name: 'Manchester Airport Parking',
    code: 'MAN',
    priceLabel: 'From GBP 6/day',
    image: '/airports/manchester-airport-parking-card.png',
    description:
      'Manchester Airport serves travellers across the North of England and Midlands, with departures from Terminals 1, 2 and 3. Because terminal layouts and transfer routes differ, it pays to choose your parking before arrival.',
    extra:
      'Orbitpark helps you compare Manchester airport parking for family holidays, business trips, weekend breaks and long-haul travel.',
    terminals: ['T1', 'T2', 'T3'],
    bestFor: 'Regional departures, family holidays, multi-terminal trips',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride'],
    href: '/manchester-airport-parking',
  },
  {
    name: 'Stansted Airport Parking',
    code: 'STN',
    priceLabel: 'From GBP 5/day',
    image: '/airports/stansted-airport-parking-card.png',
    description:
      'Stansted is a popular airport for short-haul and budget airline routes across Europe. Many travellers flying from Stansted are price-conscious, making pre-booked parking one of the easiest ways to control trip costs.',
    extra:
      'Compare Stansted Long Stay, Park & Ride and Meet & Greet options before you travel.',
    terminals: ['Main Terminal'],
    bestFor: 'Budget airline routes, European breaks, low-cost parking',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride'],
    href: '/stansted-airport-parking',
  },
  {
    name: 'Luton Airport Parking',
    code: 'LTN',
    priceLabel: 'From GBP 5/day',
    image: '/airports/luton-airport-parking-card.png',
    description:
      'Luton is a busy departure point for European routes and low-cost airlines. Traffic, walking distance and transfer arrangements can make parking feel more stressful if it is left until the day of travel.',
    extra:
      'Orbitpark helps you compare Luton Park & Ride, Long Stay and Meet & Greet parking with simple online booking.',
    terminals: ['Main Terminal'],
    bestFor: 'Low-cost airline routes, early flights, Park & Ride',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride'],
    href: '/luton-airport-parking',
  },
  {
    name: 'Birmingham Airport Parking',
    code: 'BHX',
    priceLabel: 'From GBP 6/day',
    image: '/airports/birmingham-airport-parking-card.png',
    description:
      'Birmingham Airport is a key airport for travellers across the Midlands, with domestic, European and long-haul routes. Booking ahead helps you choose the right balance of price, transfer time and terminal convenience.',
    extra:
      'Compare Birmingham Meet & Greet, Long Stay, Park & Ride and Short Stay parking before you travel.',
    terminals: ['Main Terminal'],
    bestFor: 'Midlands travellers, short breaks, family holidays',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride', 'Short Stay'],
    href: '/birmingham-airport-parking',
  },
];

export const airportServiceComparison = [
  {
    service: 'Meet & Greet',
    image: '/airports/meet-greet-service-visual.png',
    bestFor: 'Families, business travellers, heavy luggage',
    benefit: 'Fastest terminal handover',
    when: 'You want convenience',
    href: '/meet-and-greet-parking',
  },
  {
    service: 'Long Stay',
    image: '/airports/long-stay-parking-service-visual.png',
    bestFor: 'Holidays and trips of 3+ days',
    benefit: 'Lower daily rates',
    when: 'You are away for several days',
    href: '/long-stay-parking',
  },
  {
    service: 'Park & Ride',
    image: '/airports/park-ride-service-visual.png',
    bestFor: 'Budget-conscious travellers',
    benefit: 'Often the cheapest parking option',
    when: 'You are happy to use a shuttle',
    href: '/park-and-ride',
  },
  {
    service: 'Short Stay',
    image: '/airports/short-stay-parking-service-visual.png',
    bestFor: 'Pick-ups, drop-offs, short trips',
    benefit: 'Closest terminal access',
    when: 'You need quick access',
    href: '/short-stay-parking',
  },
];

export const preBookBenefits = [
  'Save money compared with drive-up parking prices',
  'Reserve your space before travelling',
  'Compare services before choosing',
  'Avoid rushing at the airport',
  'Receive confirmation before departure',
  'Choose parking that fits your terminal and journey',
];

export const choosingChecklist = [
  'Your departure terminal',
  'Your drop-off and return times',
  'Shuttle transfer times',
  'Cancellation terms',
  'Security features',
  'Whether you are travelling with children or heavy luggage',
];

export const airportsFaqs = [
  {
    question: 'Which airports does Orbitpark cover?',
    answer:
      'Orbitpark covers major UK airports including Heathrow, Gatwick, Manchester, Stansted, Luton and Birmingham, with more airport locations planned.',
  },
  {
    question: 'Is airport parking cheaper if I book in advance?',
    answer:
      'Yes. Airport parking is usually cheaper when booked online in advance. Paying on the day at the airport is often significantly more expensive.',
  },
  {
    question: 'What is the cheapest type of airport parking?',
    answer:
      'Park & Ride and Long Stay parking are usually the cheapest options. Prices depend on the airport, dates, service type and availability.',
  },
  {
    question: 'What is the easiest airport parking option?',
    answer:
      'Meet & Greet is usually the easiest option because you drive directly to the terminal and hand your car to a professional driver.',
  },
  {
    question: 'Can I compare parking by terminal?',
    answer:
      'Yes. Terminal information is important at airports such as Heathrow, Gatwick and Manchester. Dedicated airport pages should show available services and terminal details.',
  },
  {
    question: 'What details do I need to book airport parking?',
    answer:
      'You usually need your airport, travel dates, drop-off time, return time, vehicle registration, contact details and sometimes flight information.',
  },
  {
    question: 'Are airport car parks secure?',
    answer:
      'Parking facilities vary, but secure airport car parks often include CCTV, lighting, fencing, ANPR entry systems and on-site staff. Always check the service details before booking.',
  },
  {
    question: 'Can I cancel my airport parking booking?',
    answer:
      'Many airport parking products include cancellation options, but terms vary by service and provider. Always check the cancellation policy before confirming your booking.',
  },
  {
    question: 'Can I book airport parking last minute?',
    answer:
      'Yes, last-minute parking may be available, but prices are often higher and spaces can be limited. Booking earlier is usually better.',
  },
];
