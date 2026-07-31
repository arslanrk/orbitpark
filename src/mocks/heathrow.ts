export const heathrowImages = {
  hero: '/airports/heathrow-airport-parking-card.png',
  meetGreet: '/airports/meet-greet-service-visual.png',
  longStay: '/airports/long-stay-parking-service-visual.png',
  parkRide: '/airports/park-ride-service-visual.png',
  shortStay: '/airports/short-stay-parking-service-visual.png',
  security: '/airports/trust-security-supporting-image.png',
};

export const heathrowHeroTrustSignals = [
  'Save up to GBP 161 vs official Heathrow prices',
  '4,821 verified Heathrow customer reviews',
  'Free cancellation on many bookings',
  'Instant confirmation after booking',
  'Park Mark accredited facilities only',
];

export const heathrowQuoteTerminals = [
  'Terminal 2',
  'Terminal 3',
  'Terminal 4',
  'Terminal 5',
  'Not sure yet',
];

export const heathrowQuoteServices = [
  'Meet & Greet - From GBP 14/day',
  'Long Stay - From GBP 8/day',
  'Park & Ride - From GBP 6/day',
  'Short Stay - From GBP 12/day',
];

export const heathrowPriceComparison = [
  {
    service: 'Meet & Greet',
    detail: '7 days',
    officialPrice: 'GBP 245',
    orbitparkPrice: 'GBP 98',
    saving: 'GBP 147',
  },
  {
    service: 'Long Stay',
    detail: '7 days',
    officialPrice: 'GBP 189',
    orbitparkPrice: 'GBP 56',
    saving: 'GBP 133',
  },
  {
    service: 'Park & Ride',
    detail: '7 days',
    officialPrice: 'GBP 159',
    orbitparkPrice: 'GBP 42',
    saving: 'GBP 117',
  },
  {
    service: 'Short Stay',
    detail: '7 days',
    officialPrice: 'GBP 217',
    orbitparkPrice: 'GBP 126',
    saving: 'GBP 91',
  },
];

export const heathrowTrustSignals = [
  { icon: 'ri-money-pound-circle-line', label: 'Save Up To GBP 161', detail: 'Per Heathrow booking' },
  { icon: 'ri-parking-box-line', label: 'Park Mark Accredited', detail: 'Vetted secure facilities' },
  { icon: 'ri-star-fill', label: '4.9/5 Rating', detail: '4,821 Heathrow reviews' },
  { icon: 'ri-lock-line', label: 'Stripe Secure', detail: 'No card details stored' },
  { icon: 'ri-flight-takeoff-line', label: 'T2, T3, T4, T5', detail: 'All active terminals covered' },
];

export const heathrowServices = [
  {
    id: 'meet-greet',
    title: 'Heathrow Meet & Greet Parking',
    priceLabel: 'From GBP 14/day',
    badge: 'Most Popular',
    image: heathrowImages.meetGreet,
    quote:
      'Meet & Greet at Heathrow changed everything. I will never go back to dragging bags through a multi-storey.',
    description:
      'Drive straight to your Heathrow terminal and hand your keys to a professional, uniformed driver. Your car is taken to a secure compound while you walk into departures. On return, your driver tracks your flight and brings the car back to arrivals.',
    perfectFor: [
      'Families travelling with children or elderly relatives',
      'Business travellers who cannot afford to waste time',
      'Heavy luggage, sports equipment or oversized baggage',
      'First-time Heathrow travellers who want a calm start',
      'Early morning or late-night departures',
    ],
    included: [
      'Driver meets you at the departure terminal entrance',
      'Fully insured, DBS-checked, uniformed drivers',
      'Secure, fenced, CCTV-monitored compound',
      'Flight monitoring on return',
      'Available at T2, T3, T4 and T5',
      'Free amendments on many bookings up to 24 hours before drop-off',
    ],
    steps: [
      'Drive directly to your terminal',
      'Call your assigned driver 10 minutes before arrival',
      'Complete the handover in the Meet & Greet zone',
      'Walk straight to check-in',
      'Call after baggage collection and meet your car at arrivals',
    ],
    href: '#quote',
  },
  {
    id: 'long-stay',
    title: 'Heathrow Long Stay Parking',
    priceLabel: 'From GBP 8/day',
    badge: 'Best Value For Holidays',
    image: heathrowImages.longStay,
    quote:
      'Ten days away and my car cost GBP 72 to park securely. I could not believe the saving.',
    description:
      'Long Stay is the reliable, lower-cost option for holidays and longer trips. Park in a managed compound with CCTV, perimeter security and shuttle transfers to Heathrow terminals.',
    perfectFor: [
      'Holidays of three days or more',
      'Travellers who want value without cutting security',
      'Couples, families and groups',
      'Frequent flyers who know the airport routine',
    ],
    included: [
      'Secure fenced compound',
      '24/7 CCTV and recorded footage',
      'Regular shuttle buses to Heathrow terminals',
      'On-site security staff',
      'ANPR entry and exit systems',
      'Large vehicles including SUVs and 7-seaters accepted by many providers',
    ],
    steps: [
      'Follow your confirmation to the car park address',
      'Check in with your booking reference',
      'Park and photograph your space number',
      'Take the shuttle to your terminal',
      'Return by shuttle, collect your car and drive home',
    ],
    href: '#quote',
  },
  {
    id: 'park-ride',
    title: 'Heathrow Park & Ride',
    priceLabel: 'From GBP 6/day',
    badge: 'Cheapest Option',
    image: heathrowImages.parkRide,
    quote:
      'GBP 42 for seven days at Heathrow. The shuttle was quick and my car was exactly where I left it.',
    description:
      'Park & Ride is the lowest-priced Heathrow parking option. You leave your car at a secure off-airport car park and take a regular shuttle to your terminal.',
    perfectFor: [
      'Budget-conscious solo travellers and couples',
      'Trips of five days or more',
      'Travellers with flexible departure times',
      'Anyone who values savings over terminal proximity',
    ],
    included: [
      'Lowest daily rates at Heathrow',
      '24/7 shuttle bus service',
      'Well-lit secure car parks',
      'Simple barrier entry with booking reference',
      'On-site attendants during peak hours',
    ],
    steps: [
      'Drive to the Park & Ride location',
      'Check in with your booking reference',
      'Leave your car in the secure car park',
      'Board the shuttle to your terminal',
      'Take the return shuttle back after landing',
    ],
    href: '#quote',
  },
  {
    id: 'short-stay',
    title: 'Heathrow Short Stay Parking',
    priceLabel: 'From GBP 12/day',
    badge: 'Closest To Terminal',
    image: heathrowImages.shortStay,
    quote:
      'For a short business trip, pre-booked Short Stay kept me close to the terminal without paying walk-up prices.',
    description:
      'Short Stay is the smart pre-book option when terminal proximity matters most. It is ideal for short business trips, pick-ups, drop-offs and travellers who need fast terminal access.',
    perfectFor: [
      'One or two day business trips',
      'Pick-ups and drop-offs',
      'Premium travellers who value proximity',
      'Passengers who cannot spare shuttle transfer time',
    ],
    included: [
      'Parking closest to terminal buildings',
      'Fast access to departures and arrivals',
      'Best for short stays',
      'Pre-booked rates to avoid high drive-up pricing',
    ],
    steps: [
      'Pre-book your Short Stay space',
      'Drive to the terminal car park',
      'Park close to departures',
      'Walk to the terminal entrance',
      'Return directly to your vehicle after landing',
    ],
    href: '#quote',
  },
];

export const heathrowTerminals = [
  {
    terminal: 'Terminal 2',
    name: 'The Queens Terminal',
    description:
      'Heathrows modern Star Alliance hub, used by airlines including Lufthansa, United Airlines, Air Canada, Singapore Airlines and Swiss.',
    airlines: 'Lufthansa, United Airlines, Air Canada, Singapore Airlines, Turkish Airlines, Swiss, Austrian, TAP Portugal, SAS',
    dropOff: 'Departures forecourt, Level 5. Follow Meet & Greet signage on approach.',
    shuttle: 'Approximately 12-15 minutes from many Long Stay compounds.',
    tip: 'T2 is connected to T3 by an internal walkway, which can help some connecting passengers.',
    postcode: 'TW6 1EW',
  },
  {
    terminal: 'Terminal 3',
    name: 'Intercontinental Terminal',
    description:
      'A long-haul specialist used by Emirates, Virgin Atlantic, American Airlines, Qantas, Delta, Cathay Pacific and other major carriers.',
    airlines: 'Emirates, Virgin Atlantic, American Airlines, Qantas, Delta, Cathay Pacific, Finnair, Japan Airlines',
    dropOff: 'T3 departures forecourt, with a dedicated Meet & Greet zone on the left side of the entrance.',
    shuttle: 'Approximately 12-15 minutes from many Long Stay compounds.',
    tip: 'T3 can be extremely busy in summer. For early Emirates or Virgin Atlantic departures, build in extra terminal time.',
    postcode: 'TW6 1EW',
  },
  {
    terminal: 'Terminal 4',
    name: 'South Terminal',
    description:
      'Located on the southern perimeter of Heathrow, T4 has a separate road approach and serves airlines including KLM, Malaysia Airlines and Saudi Arabian Airlines.',
    airlines: 'KLM, Malaysia Airlines, Saudi Arabian Airlines, Iberia Express, Hong Kong Airlines',
    dropOff: 'T4 departures level. Follow blue Meet & Greet signs from the approach road.',
    shuttle: 'Approximately 20-25 minutes from some Long Stay compounds. Allow extra time.',
    tip: 'T4 uses a different road approach to T2, T3 and T5. Use postcode TW6 3XA for navigation.',
    postcode: 'TW6 3XA',
  },
  {
    terminal: 'Terminal 5',
    name: 'British Airways Terminal',
    description:
      'BA and Iberias flagship Heathrow terminal. T5 is large, efficient and one of the easiest Heathrow terminals for Meet & Greet handover.',
    airlines: 'British Airways, Iberia',
    dropOff: 'T5 forecourt, dedicated blue Meet & Greet lane on the left of the departures entrance.',
    shuttle: 'Approximately 12-15 minutes from many Long Stay compounds.',
    tip: 'Some BA flights depart from T5B or T5C. Check your boarding pass and allow internal transit time.',
    postcode: 'TW6 2GA',
  },
];

export const heathrowPersonas = [
  {
    title: 'For Families',
    icon: 'ri-parent-line',
    bestOption: 'Meet & Greet at T5 or T3',
    description:
      'Travelling with children is stressful enough without adding a multi-storey car park into the mix. Drive to the terminal, hand over your keys and focus on getting everyone checked in.',
    href: '#quote',
  },
  {
    title: 'For Business Travellers',
    icon: 'ri-briefcase-4-line',
    bestOption: 'Meet & Greet at T2 or T5',
    description:
      'Your time is money. Meet & Greet lets you arrive, hand over the keys and walk straight towards check-in or fast-track security.',
    href: '#quote',
  },
  {
    title: 'For Holiday Travellers',
    icon: 'ri-flight-takeoff-line',
    bestOption: 'Long Stay or Park & Ride',
    description:
      'Put the saving towards the trip instead of Heathrow gate prices. Long Stay and Park & Ride keep costs down while your car stays in a managed facility.',
    href: '#quote',
  },
  {
    title: 'For Budget Travellers',
    icon: 'ri-wallet-3-line',
    bestOption: 'Park & Ride booked early',
    description:
      'If price matters most, Park & Ride is usually the cheapest secure way to park at Heathrow, especially for trips of five days or more.',
    href: '#quote',
  },
];

export const heathrowTips = [
  {
    title: 'Book today because prices only move one way',
    text:
      'Heathrow is the busiest airport in the UK, so parking availability is finite. Prices often climb in the final two weeks before travel, especially in school holidays.',
  },
  {
    title: 'Know your terminal before you book',
    text:
      'A Meet & Greet driver waiting at T3 cannot help if you are actually flying British Airways from T5. Check your airline confirmation before booking.',
  },
  {
    title: 'Call your Meet & Greet driver before arrival',
    text:
      'Terminal forecourts are busy and drivers cannot wait indefinitely. Calling 10 minutes before arrival helps make the handover smooth.',
  },
  {
    title: 'Photograph your parking space',
    text:
      'For Long Stay and Park & Ride, take a quick photo of your bay or row number. It saves time when you return tired after a long flight.',
  },
  {
    title: 'Save your confirmation offline',
    text:
      'Some car parks and terminal areas have poor mobile signal. Screenshot your booking reference before you travel.',
  },
  {
    title: 'Build in shuttle and terminal time',
    text:
      'For Long Stay, allow 40 minutes for shuttle, walking and check-in. For long-haul or T5 departures, allow 45-60 minutes.',
  },
  {
    title: 'Use the terminal postcode',
    text:
      'Do not just type Heathrow Airport into maps. Use TW6 1EW for T2/T3, TW6 3XA for T4 and TW6 2GA for T5.',
  },
];

export const heathrowFaqs = [
  {
    question: 'How much does Heathrow airport parking really cost?',
    answer:
      'If you turn up on the day, official Heathrow parking can cost GBP 30 to GBP 50 per day and a seven-day Short Stay booking can top GBP 217. Pre-booked Heathrow parking through Orbitpark starts from around GBP 42 for seven days of Park & Ride or GBP 56 for seven days of Long Stay, depending on dates and availability.',
  },
  {
    question: 'Is pre-booked Heathrow parking as secure as official car parks?',
    answer:
      'Yes. Orbitpark works with vetted parking operators that use security features such as CCTV, perimeter fencing, ANPR systems, lighting and on-site staff. Many facilities are Park Mark accredited, which is the UK Police-backed safer parking standard.',
  },
  {
    question: 'What happens if my return flight is delayed?',
    answer:
      'Your parking booking remains valid if your flight is delayed. Meet & Greet drivers can monitor incoming flights, and Long Stay or Park & Ride customers simply collect their vehicle when they return. If the delay significantly extends your stay, contact the team on 0203 XXX XXXX.',
  },
  {
    question: 'Can I cancel Heathrow parking if my flight is cancelled?',
    answer:
      'Many Heathrow parking products include free cancellation up to 48 hours before your drop-off time. Terms can vary by provider, so always check the cancellation details before confirming your booking.',
  },
  {
    question: 'Is Heathrow Meet & Greet safe?',
    answer:
      'Meet & Greet drivers are professional, insured and work for established parking operators. Your vehicle is moved to a secure compound and covered by the operators insurance while in their care.',
  },
  {
    question: 'What if I do not know my Heathrow terminal yet?',
    answer:
      'Select Not sure yet when getting a quote. You can confirm your terminal later, but Meet & Greet bookings should be updated at least 24 hours before drop-off so the driver is waiting at the correct terminal.',
  },
  {
    question: 'Is EV charging available for Heathrow parking?',
    answer:
      'Some Heathrow parking partners offer EV charging points. Availability varies by provider and date, so contact the Orbitpark team before booking if charging is essential.',
  },
  {
    question: 'What if I arrive earlier or later than my booked time?',
    answer:
      'A small amount of flexibility is usually built into Heathrow parking bookings. If you expect to arrive more than two hours early or late, contact your driver or customer service team in advance.',
  },
];

export const heathrowReviews = [
  {
    id: 1,
    name: 'Michael B.',
    route: 'Heathrow T5 / British Airways / Meet & Greet / 14 days',
    text:
      'The Meet & Greet driver at T5 was exactly where he said he would be. My partner thought I had booked a premium chauffeured experience, but the price was less than dinner.',
  },
  {
    id: 2,
    name: 'Rachel H.',
    route: 'Heathrow T3 / Emirates / Long Stay / 10 days',
    text:
      'I saved GBP 133 compared with the official Heathrow Long Stay car park. The standard of parking and CCTV felt exactly as secure.',
  },
  {
    id: 3,
    name: 'Dominic A.',
    route: 'Heathrow T2 / Lufthansa / Meet & Greet / frequent traveller',
    text:
      'I travel for work every two weeks. The drivers are consistent, professional and on time. Landing late and having the car ready at arrivals is priceless.',
  },
  {
    id: 4,
    name: 'Sophie R.',
    route: 'Heathrow T5 / British Airways / Meet & Greet / 12 days',
    text:
      'Travelling with a two-year-old and a four-year-old from T5 was something I dreaded. Meet & Greet removed the worst part of the journey.',
  },
  {
    id: 5,
    name: 'Lee M.',
    route: 'Heathrow T4 / KLM / Park & Ride / 7 days',
    text:
      'Park & Ride cost GBP 42 for seven days. The shuttle came in eight minutes and the car was exactly where I left it.',
  },
];

export const heathrowDirections = [
  {
    from: 'From London via the M4',
    text:
      'Take the M4 westbound. Exit at Junction 4 for T2, T3 and T5, or Junction 3 for T4. During rush hour, allow at least 90 minutes from central London.',
  },
  {
    from: 'From the North via the M1 and M25',
    text:
      'Join the M25 clockwise and exit at Junction 15 for T2, T3 and T5. For T4, exit at Junction 14 and follow airport signage.',
  },
  {
    from: 'From the South via the M25',
    text:
      'Exit the M25 at Junction 14 for T4 or Junction 15 for T2, T3 and T5. The airport is clearly signposted from both junctions.',
  },
];

export const heathrowPostcodes = [
  { terminal: 'Terminal 2', postcode: 'TW6 1EW', airlines: 'Star Alliance' },
  { terminal: 'Terminal 3', postcode: 'TW6 1EW', airlines: 'Emirates, Virgin Atlantic, Qantas' },
  { terminal: 'Terminal 4', postcode: 'TW6 3XA', airlines: 'KLM, Malaysia Airlines' },
  { terminal: 'Terminal 5', postcode: 'TW6 2GA', airlines: 'British Airways, Iberia' },
];
