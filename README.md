# 🅾 Orbitpark

> **Around Every UK Airport**

Orbitpark is a full-stack UK airport parking booking 
platform built with Next.js 14. Customers can compare 
prices, book parking, and pay online across all major 
UK airports including Heathrow, Gatwick, Manchester, 
Stansted and Luton.

## ✈️ Features

- 🔍 Instant parking price calculator
- 📅 Real-time availability search
- 💳 Secure Stripe payment integration
- 📧 Automated booking confirmations via Resend
- 📱 Mobile-first responsive design
- 🔒 GDPR compliant
- ⚡ 90+ Lighthouse performance score
- 🗺️ Multi-airport support (LHR, LGW, MAN, STN, LTN)
- 📞 Click-to-call for phone bookings
- 💬 WhatsApp booking support
- 🎛️ Admin dashboard for booking management
- 🔔 Real-time agent notifications

## 🛠️ Tech Stack

| Layer        | Technology                    |
|--------------|-------------------------------|
| Framework    | Next.js 14 (App Router)       |
| Language     | TypeScript                    |
| Styling      | Tailwind CSS + Shadcn/ui      |
| Database     | PostgreSQL (Supabase)         |
| ORM          | Prisma                        |
| Payments     | Stripe                        |
| Email        | Resend + React Email          |
| Forms        | React Hook Form + Zod         |
| Dates        | date-fns + React Day Picker   |
| Deployment   | Vercel                        |
| Analytics    | Google Analytics 4            |

## 📁 Project Structure

\`\`\`
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── [airport]/
│   │   └── page.tsx                # Dynamic airport pages
│   ├── book/
│   │   └── page.tsx                # Booking flow
│   ├── confirmation/
│   │   └── [bookingId]/
│   │       └── page.tsx            # Booking confirmation
│   ├── manage-booking/
│   │   └── page.tsx                # Manage bookings
│   └── admin/
│       └── page.tsx                # Admin dashboard
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileCallBar.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── QuoteCalculator.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   └── FAQSection.tsx
│   ├── booking/
│   │   ├── BookingForm.tsx
│   │   ├── PaymentForm.tsx
│   │   └── PriceDisplay.tsx
│   └── airport/
│       ├── AirportHero.tsx
│       ├── PriceTable.tsx
│       └── AirportFAQ.tsx
├── lib/
│   ├── stripe.ts
│   ├── prisma.ts
│   ├── resend.ts
│   ├── pricing.ts
│   └── airports.ts
├── api/
│   ├── quote/
│   ├── booking/
│   ├── webhooks/stripe/
│   └── admin/
└── emails/
    ├── BookingConfirmation.tsx
    └── AgentNotification.tsx
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (Supabase)
- Stripe account
- Resend account

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/orbitpark.git

# Navigate to project
cd orbitpark

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
\`\`\`

### Environment Variables

\`\`\`bash
# App
NEXT_PUBLIC_APP_URL=https://orbitpark.co.uk

# Database
DATABASE_URL=your_supabase_postgres_url

# Stripe
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx

# Resend
RESEND_API_KEY=re_xxx
EMAIL_FROM=bookings@orbitpark.co.uk

# Admin
ADMIN_PASSWORD=your_secure_password
\`\`\`

### Run Development Server

\`\`\`bash
# Push database schema
npx prisma db push

# Start development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## 🗺️ Supported Airports

| Airport    | Code | Terminals        |
|------------|------|-----------------|
| Heathrow   | LHR  | T2, T3, T4, T5  |
| Gatwick    | LGW  | North, South    |
| Manchester | MAN  | T1, T2, T3      |
| Stansted   | STN  | Main Terminal   |
| Luton      | LTN  | Main Terminal   |

## 🅿️ Services

| Service      | Description                          |
|--------------|--------------------------------------|
| Meet & Greet | Driver meets you at terminal         |
| Long Stay    | Off-airport secure compound          |
| Park & Ride  | Self-park with shuttle transfer      |
| Short Stay   | Close proximity terminal parking     |

## 📈 Booking Flow

\`\`\`
Customer → Price Calculator
        → Select Service & Dates
        → Enter Details
        → Stripe Payment
        → Confirmation Email
        → Agent Notification
        → Supplier Confirmation
\`\`\`

## 🔐 Security

- All payments processed by Stripe
- PCI DSS compliant
- SSL encrypted (Vercel)
- GDPR compliant data handling
- No card details stored

## 📦 Deployment

\`\`\`bash
# Deploy to Vercel
vercel --prod
\`\`\`

## 📄 License

Private — All rights reserved © 2026 Orbitpark Ltd

---

Built with ❤️ in Lahore 🇵🇰 · Serving the UK 🇬🇧
