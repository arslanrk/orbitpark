export const ukAirports = [
  'Heathrow (LHR)',
  'Gatwick (LGW)',
  'Manchester (MAN)',
  'Stansted (STN)',
  'Luton (LTN)',
  'Birmingham (BHX)',
  'Edinburgh (EDI)',
  'Bristol (BRS)',
];

export const serviceTypes = [
  'Meet & Greet',
  'Long Stay',
  'Park & Ride',
  'Short Stay',
];

export const quoteAirports = [
  'London Heathrow (LHR)',
  'London Gatwick (LGW)',
  'Manchester (MAN)',
  'London Stansted (STN)',
  'London Luton (LTN)',
];

export const quoteServices = [
  'Meet & Greet - From GBP 14/day',
  'Long Stay - From GBP 8/day',
  'Park & Ride - From GBP 6/day',
  'Short Stay - From GBP 12/day',
];

export const heroTrustSignals = [
  'No booking fees',
  'Free cancellation on most bookings',
  'Price match guarantee',
  'Instant email confirmation',
];

export const airports = [
  { name: 'Heathrow', code: 'LHR', priceFrom: 8, image: '/homepage/airport-heathrow.jpg' },
  { name: 'Gatwick', code: 'LGW', priceFrom: 7, image: '/homepage/airport-gatwick.jpg' },
  { name: 'Manchester', code: 'MAN', priceFrom: 6, image: '/homepage/airport-manchester.jpg' },
  { name: 'Stansted', code: 'STN', priceFrom: 5, image: '/homepage/airport-stansted.jpg' },
  { name: 'Luton', code: 'LTN', priceFrom: 5, image: '/homepage/airport-luton.jpg' },
];

export const services = [
  {
    id: 'meet-greet',
    title: 'Meet & Greet Airport Parking',
    shortTitle: 'Meet & Greet',
    description: 'The most convenient way to park at any UK airport. A professional, uniformed driver meets you directly at the departure terminal, takes your keys, and parks your vehicle in a secure, monitored compound. On your return, your car is brought back to arrivals.',
    priceFrom: 14,
    priceLabel: 'From GBP 14/day',
    image: '/homepage/service-meet-greet.jpg',
    icon: 'ri-user-star-line',
    features: [
      'Driver meets you at terminal entrance',
      'No shuttle buses or long walks',
      'Fully insured professional drivers',
      '24/7 CCTV monitored compounds',
      'Available at all 5 major UK airports',
      'Ideal for families and heavy luggage',
    ],
    href: '/meet-and-greet-parking',
  },
  {
    id: 'long-stay',
    title: 'Long Stay Airport Parking',
    shortTitle: 'Long Stay',
    description: 'Our most popular and affordable parking option, perfect for holidays, business trips, or any journey longer than 3 days. Long stay car parks are a short shuttle ride from the terminal and secured with CCTV, fencing, and on-site staff.',
    priceFrom: 8,
    priceLabel: 'From GBP 8/day',
    image: '/homepage/service-long-stay.jpg',
    icon: 'ri-calendar-check-line',
    features: [
      'Lowest price per day option',
      'Secure fenced compound',
      'Regular shuttle transfers included',
      '24/7 on-site security',
      'ANPR camera entry systems',
      'Best for trips of 3 days or more',
    ],
    href: '/long-stay-parking',
  },
  {
    id: 'park-ride',
    title: 'Park & Ride Airport Parking',
    shortTitle: 'Park & Ride',
    description: 'Drive to a secure off-airport car park, leave your vehicle safely, and board a regular shuttle bus straight to your terminal. Quick, easy, and significantly cheaper than parking at the airport itself.',
    priceFrom: 6,
    priceLabel: 'From GBP 6/day',
    image: '/homepage/service-park-ride.jpg',
    icon: 'ri-bus-line',
    features: [
      'Cheapest available option',
      '24/7 shuttle bus service',
      '5-15 minute transfer to terminal',
      'Secure, well-lit car parks',
      'Easy drop-off and pick-up process',
      'No walking with heavy luggage',
    ],
    href: '/park-and-ride',
  },
  {
    id: 'short-stay',
    title: 'Short Stay Airport Parking',
    shortTitle: 'Short Stay',
    description: 'Short stay parking puts you right next to the terminal for maximum convenience. It is ideal for drop-offs, pick-ups, quick overnight trips, and journeys where proximity matters more than price.',
    priceFrom: 12,
    priceLabel: 'From GBP 12/day',
    image: '/homepage/service-short-stay.jpg',
    icon: 'ri-time-line',
    features: [
      'Closest parking to terminal',
      'Ideal for drop-offs and pick-ups',
      'Perfect for 1-2 day trips',
      'No long transfer times',
      'Book online to avoid gate prices',
      'Available at all major terminals',
    ],
    href: '/short-stay-parking',
  },
];

export const airportDetails = [
  {
    name: 'Heathrow Airport Parking',
    code: 'LHR',
    priceLabel: 'From GBP 8/day',
    image: '/homepage/airport-heathrow.jpg',
    description: 'London Heathrow is the UKs busiest international airport, serving more than 80 million passengers annually across five terminals. Orbitpark offers a wide range of Heathrow airport parking options, from premium Meet & Greet at T5 to budget Long Stay across all terminals.',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride', 'Short Stay'],
    terminals: ['T2', 'T3', 'T4', 'T5'],
    href: '/heathrow-airport-parking',
  },
  {
    name: 'Gatwick Airport Parking',
    code: 'LGW',
    priceLabel: 'From GBP 7/day',
    image: '/homepage/airport-gatwick.jpg',
    description: 'London Gatwick is the UKs second busiest airport, operating across North and South terminals. Whether you are departing from the North or South Terminal, Orbitpark has secure, affordable parking minutes from your gate.',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride'],
    terminals: ['North Terminal', 'South Terminal'],
    href: '/gatwick-airport-parking',
  },
  {
    name: 'Manchester Airport Parking',
    code: 'MAN',
    priceLabel: 'From GBP 6/day',
    image: '/homepage/airport-manchester.jpg',
    description: 'Manchester Airport is the UKs third busiest airport and the largest outside London. With three terminals and hundreds of daily flights, pre-booking your parking with Orbitpark is the smartest way to start your journey.',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride'],
    terminals: ['T1', 'T2', 'T3'],
    href: '/manchester-airport-parking',
  },
  {
    name: 'Stansted Airport Parking',
    code: 'STN',
    priceLabel: 'From GBP 5/day',
    image: '/homepage/airport-stansted.jpg',
    description: 'London Stansted primarily serves budget airline routes across Europe. Orbitpark helps Stansted travellers find secure, great-value parking deals from just GBP 5/day.',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride'],
    terminals: ['Main Terminal'],
    href: '/stansted-airport-parking',
  },
  {
    name: 'Luton Airport Parking',
    code: 'LTN',
    priceLabel: 'From GBP 5/day',
    image: '/homepage/airport-luton.jpg',
    description: 'London Luton Airport is a major hub for Wizz Air and easyJet routes. Book your Luton airport parking with Orbitpark and save up to 70% versus gate prices.',
    services: ['Meet & Greet', 'Long Stay', 'Park & Ride'],
    terminals: ['Main Terminal'],
    href: '/luton-airport-parking',
  },
];

export const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    text: 'Absolutely brilliant service from start to finish. The Meet & Greet driver was waiting at the terminal when we arrived, professional, friendly, and efficient. Saved GBP 35 compared to booking directly at Heathrow.',
    avatar: 'SM',
    service: 'Meet & Greet',
    airport: 'Heathrow Airport',
  },
  {
    id: 2,
    name: 'James T.',
    rating: 5,
    text: 'I was sceptical about pre-booking parking online but Orbitpark made the whole experience seamless. Booking took 5 minutes, confirmation arrived instantly, and the car park itself was spotless and secure.',
    avatar: 'JT',
    service: 'Long Stay',
    airport: 'Gatwick Airport',
  },
  {
    id: 3,
    name: 'Lisa K.',
    rating: 5,
    text: 'Travelling with two kids and a mountain of luggage, the last thing I needed was a stressful parking experience. Orbitparks Meet & Greet at Manchester was a complete game changer.',
    avatar: 'LK',
    service: 'Meet & Greet',
    airport: 'Manchester Airport',
  },
  {
    id: 4,
    name: 'David R.',
    rating: 5,
    text: 'Used Orbitpark for a two-week holiday to Spain. Long stay parking at Stansted was immaculate, CCTV everywhere, great lighting, and the shuttle ran every 10 minutes.',
    avatar: 'DR',
    service: 'Long Stay',
    airport: 'Stansted Airport',
  },
  {
    id: 5,
    name: 'Margaret W.',
    rating: 5,
    text: 'Called the team to book as I am not great with websites. They were patient, helpful, and got everything sorted in minutes. Proper customer service.',
    avatar: 'MW',
    service: 'Park & Ride',
    airport: 'Luton Airport',
  },
];

export const stats = [
  { value: '10,482', label: 'Bookings Made', icon: 'ri-user-heart-line' },
  { value: '4.9/5', label: 'Average Rating', icon: 'ri-star-smile-line' },
  { value: '99%', label: 'Would Book Again', icon: 'ri-shield-check-line' },
];

export const trustBadges = [
  { icon: 'ri-secure-payment-line', label: '256-bit SSL Secure Payments', description: 'Stripe-powered checkout' },
  { icon: 'ri-parking-box-line', label: 'Park Mark Partners', description: 'Accredited safer parking' },
  { icon: 'ri-plane-line', label: '5 Major UK Airports', description: 'Heathrow to Luton covered' },
  { icon: 'ri-star-fill', label: '4.9/5 Rating', description: 'From 10,000+ reviews' },
  { icon: 'ri-map-pin-2-line', label: 'UK Registered Company', description: 'Local support team' },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Compare Prices Instantly',
    description: 'Enter your airport, travel dates, and preferred parking type into our smart price calculator. We instantly compare secure, vetted parking options so you always get the best deal available.',
    icon: 'ri-plane-line',
  },
  {
    step: '02',
    title: 'Book & Pay Securely',
    description: 'Choose your preferred option and complete your booking online via our secure Stripe-powered checkout. Instant booking confirmation is sent straight to your inbox.',
    icon: 'ri-shield-check-line',
  },
  {
    step: '03',
    title: 'Park, Fly & Return Stress-Free',
    description: 'Arrive at your designated parking location with complete confidence. Your space is reserved and waiting, and Meet & Greet drivers meet you at the terminal.',
    icon: 'ri-flight-takeoff-line',
  },
];

export const whyChooseOrbitpark = [
  {
    title: 'Guaranteed Best Price',
    description: 'We compare 20+ trusted parking providers across every major UK airport. If you find a lower price elsewhere for the same product, we will match it.',
    icon: 'ri-money-pound-circle-line',
  },
  {
    title: 'Free Cancellation',
    description: 'Plans change. Most parking products include free cancellation up to 48 hours before drop-off, with a full refund and zero hassle.',
    icon: 'ri-refund-line',
  },
  {
    title: 'Fully Vetted Car Parks',
    description: 'Every parking provider on our platform is checked for safer parking standards, CCTV, secure fencing, and clear arrival instructions.',
    icon: 'ri-parking-box-line',
  },
  {
    title: 'Instant Confirmation',
    description: 'Book online and receive your full booking confirmation by email within minutes, including directions and your booking reference.',
    icon: 'ri-mail-check-line',
  },
  {
    title: '24/7 UK Support',
    description: 'Our friendly customer service team helps with bookings, amendments, and questions before your trip.',
    icon: 'ri-customer-service-2-line',
  },
  {
    title: 'Secure Online Payments',
    description: 'All payments are processed through Stripe. Your card details are never stored on our servers.',
    icon: 'ri-lock-line',
  },
];

export const faqs = [
  {
    question: 'How far in advance should I book airport parking?',
    answer: 'We recommend booking as early as possible, ideally 2 to 4 weeks before departure. Early booking guarantees your space and usually secures the lowest available price, especially during school holidays and summer travel peaks.',
  },
  {
    question: 'Is it cheaper to pre-book airport parking online?',
    answer: 'Yes. Pre-booking airport parking online with Orbitpark can save you up to 70% compared with turning up and paying the gate price on the day.',
  },
  {
    question: 'What is Meet & Greet airport parking?',
    answer: 'Meet & Greet parking is the most convenient airport parking service. A professional driver meets you at the terminal departure entrance, takes your keys, and parks your vehicle in a secure compound. On return, your car is brought back to arrivals.',
  },
  {
    question: 'Are your car parks safe and secure?',
    answer: 'Yes. Our partner facilities use measures such as CCTV monitoring, perimeter security fencing, ANPR camera systems, on-site personnel, and insurance cover for vehicles.',
  },
  {
    question: 'Can I cancel my booking if my plans change?',
    answer: 'Most parking products booked through Orbitpark include free cancellation up to 48 hours before your scheduled drop-off time. Product-specific terms are shown during booking.',
  },
  {
    question: 'What happens if my flight is delayed?',
    answer: 'Your parking booking remains valid if your flight is delayed. Contact our team by phone or WhatsApp and we will update your return time. Meet & Greet bookings can be monitored for delays.',
  },
  {
    question: 'Do I need to print my confirmation?',
    answer: 'No. Your booking confirmation is sent by email and includes your unique booking reference. You can show it on your phone at the car park entrance.',
  },
  {
    question: 'Can I book for someone else?',
    answer: 'Yes. You can book airport parking on behalf of another traveller by entering their vehicle registration and contact details during booking.',
  },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Airports', href: '/airports' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerAirports = [
  'Heathrow Parking',
  'Gatwick Parking',
  'Manchester Parking',
  'Stansted Parking',
  'Luton Parking',
  'Birmingham Parking',
];

export const footerServices = [
  'Meet & Greet',
  'Long Stay Parking',
  'Park & Ride',
  'Short Stay Parking',
  'Terminal Parking',
];

export const footerCompany = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Manage Booking', href: '/manage-booking' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund-policy' },
];
