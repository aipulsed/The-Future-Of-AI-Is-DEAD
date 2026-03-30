'use client';

import { useState } from 'react';
import Link from 'next/link';

const SUPPORT_EMAIL = 'support@aiascended.com';
const PRICE_BOOK = '$9.99';
const PRICE_SYSTEMS = '$149';
const PRICE_SOFTWARE_MIN_RESALE = '$99';
const PRICE_EBOOK_MIN_RESALE = '$7.00';

function sectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

const FAQ_SECTIONS = [
  {
    title: 'About the Book',
    items: [
      {
        q: 'What is "The Future of AI Is Dead"?',
        a: '"The Future of AI Is Dead" is a 10-chapter guide written for CEOs, founders, managers, and business operators who are navigating the overwhelming noise around artificial intelligence. It cuts through the hype, buzzwords, and inflated promises to deliver a clear, honest breakdown of what AI can — and cannot — do for real businesses. It introduces the Hybrid Intelligence Model, which combines AI with deterministic systems, structured workflows, and human execution to achieve measurable results.',
      },
      {
        q: 'Who is this book written for?',
        a: "This book is written for business leaders — CEOs, COOs, founders, department heads, and operators — who are evaluating AI adoption, have already invested in AI tools, or are trying to cut through the industry noise. If you've been sold on AI promises that didn't deliver, or if you want to build a strategy that actually works, this book is for you.",
      },
      {
        q: 'How many chapters does the book have?',
        a: "The book contains 10 full chapters: (1) The Death of AI As You Know It, (2) The $2 Trillion Lie, (3) The Buzzword Graveyard, (4) What AI Is Actually Good At, (5) The Hidden Costs Nobody Talks About, (6) The Hybrid Intelligence Model, (7) Building Systems That Actually Work, (8) The CEO's AI Survival Guide, (9) The Future That Actually Exists, and (10) Taking Action. Each chapter is practical, direct, and free of filler content.",
      },
      {
        q: 'What is the Hybrid Intelligence Model?',
        a: "The Hybrid Intelligence Model is the core framework introduced in Chapter 6. It combines AI's genuine strengths (pattern recognition, content generation, data analysis) with deterministic systems, structured workflows, event-driven automation, and human oversight. Rather than relying on AI alone, this model identifies where AI contributes value (less than 5% of total business value) and builds the remaining 95% on solid operational systems. It is the practical alternative to \"AI-first\" strategies that consistently fail.",
      },
      {
        q: 'Is this book anti-AI?',
        a: 'No. The book is pro-reality. It is critical of the hype, the overclaiming, and the irresponsible promises made by AI vendors and consultants — not of AI technology itself. Chapter 4 ("What AI Is Actually Good At") provides an honest, balanced breakdown of where AI genuinely delivers value. The goal is to help businesses use AI intelligently, not to dismiss it entirely.',
      },
      {
        q: 'Can I read a sample before purchasing?',
        a: 'Yes. You can read the first two chapters completely free using the interactive flipbook reader at /read. No credit card required. The free chapters cover the core premise of the book and the AI myth breakdown so you can judge for yourself before committing to the full $9.99.',
      },
    ],
  },
  {
    title: 'Pricing & Purchasing',
    items: [
      {
        q: 'How much does full access cost?',
        a: 'Full access to all 10 chapters, plus all bonus materials, is $9.99 USD. This is a one-time payment with lifetime access. There are no recurring fees, no subscriptions, and no hidden charges associated with the base book purchase.',
      },
      {
        q: 'What is included in the $9.99 full access purchase?',
        a: 'The $9.99 purchase includes: all 10 full chapters of the book, the complete Hybrid Intelligence Model framework, the AI Governance & Audit Checklist (PDF), the Vendor Evaluation Template, the 90-Day AI Implementation Guide, access to the AiAscended ecosystem, and eligibility to join the affiliate program and earn 50% commissions on referrals.',
      },
      {
        q: 'What is the "free" tier?',
        a: 'The free tier gives you access to the first two chapters of the book via the interactive flipbook reader. You will also receive email updates and core AI myth-busting content. To access the full book, all frameworks, and bonus materials, a one-time $9.99 payment is required.',
      },
      {
        q: 'What payment methods are accepted?',
        a: 'Payments are processed securely through Stripe and PayPal. We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover), Apple Pay, Google Pay, and PayPal. All transactions are encrypted and secure. AiAscended does not store payment card details — all payment data is handled exclusively by Stripe and PayPal.',
      },
      {
        q: 'Is there a money-back guarantee?',
        a: 'Yes. We offer a 30-day, no-questions-asked money-back guarantee on all ebook and digital product purchases. If you are not satisfied for any reason, email support@aiascended.com within 30 days of your purchase with your order details, and we will issue a full refund promptly.',
      },
      {
        q: 'Are there optional upsells after purchase?',
        a: 'Yes. After purchasing the book, you may be offered optional upgrades: the AI Reality Toolkit order bump ($9.00), the Starter Package, the Bundle, the Ascended Systems Access ($149), and the Ascended AI Lab subscription. These are entirely optional and not required to access the full book or bonus materials you have already purchased.',
      },
      {
        q: 'What is the Ascended AI Lab subscription?',
        a: 'The Ascended AI Lab is an optional subscription product that provides ongoing access to advanced tools, templates, and resources from AiAscended Technologies. You can subscribe or cancel at any time. No refunds are issued for partial billing periods on subscriptions, but cancellation takes effect immediately at the end of your current billing cycle.',
      },
    ],
  },
  {
    title: 'Delivery & Access',
    items: [
      {
        q: 'How do I access the book after purchasing?',
        a: 'After completing your purchase, you will receive an email with your access link. You can also access all purchased products through your account dashboard at /dashboard. The book is delivered electronically — there is no physical delivery. Access is instant upon successful payment confirmation.',
      },
      {
        q: 'Is there a physical version of the book?',
        a: 'Currently, "The Future of AI Is Dead" is available as a digital product only. The interactive flipbook reader at /read provides an immersive reading experience in your browser. A PDF download is included with the full purchase for offline reading.',
      },
      {
        q: 'What is the interactive flipbook reader?',
        a: 'The flipbook reader is a browser-based reading interface built into the website. It allows you to navigate the book page-by-page with smooth animations, a table of contents sidebar, and keyboard navigation (arrow keys). It is optimised for both desktop and mobile devices and does not require any additional apps or downloads.',
      },
      {
        q: 'I did not receive my access email. What should I do?',
        a: 'First, check your spam and junk folders. Our emails come from support@aiascended.com — please add this address to your safe sender list. If you still cannot find the email after 15 minutes, contact support@aiascended.com with your purchase email address and order details, and we will resend your access link within 24 hours.',
      },
      {
        q: 'Can I access my purchase on multiple devices?',
        a: 'Yes. Your digital purchase is tied to your account (email address) and can be accessed from any device with a web browser. Simply log in to your dashboard at /dashboard from any device to access your purchases.',
      },
    ],
  },
  {
    title: 'Affiliate Program',
    items: [
      {
        q: 'What is the affiliate program?',
        a: 'The affiliate program allows anyone to earn commissions by referring customers to the book. You receive a unique tracking link, and every qualifying sale made through your link earns you a commission. There is no approval process, no caps on earnings, and no customer support responsibilities.',
      },
      {
        q: 'How much commission do affiliates earn?',
        a: 'Affiliates earn 50% commission on the net sale price after payment processor fees. This equates to approximately $5.00 per base book sale ($9.99). Commission rates apply to the core product sale amount. Commissions are tracked in real-time via your affiliate dashboard at /affiliate/dashboard.',
      },
      {
        q: 'How do I join the affiliate program?',
        a: 'Joining is instant and free. Visit /affiliate and enter your email address to receive your unique tracking link immediately. No application, approval, or interview is required. You can start promoting and earning the same day.',
      },
      {
        q: 'How and when are affiliate commissions paid?',
        a: 'Commissions are paid monthly for account balances exceeding $25. Payments are processed via your preferred payout method (details provided in your affiliate dashboard). Pending commissions are held for a standard 30-day clearance period to account for refund windows.',
      },
      {
        q: 'What is the affiliate tracking cookie duration?',
        a: 'Affiliate tracking cookies are active for 30 days from the time a visitor clicks your referral link. If the visitor purchases within 30 days, you will receive the commission — even if they do not purchase immediately upon clicking.',
      },
      {
        q: 'What promotional materials are available to affiliates?',
        a: "Your affiliate dashboard provides your unique tracking link, real-time click and conversion statistics, pre-written marketing angles, email swipe copy suggestions, and social media hooks designed to highlight the book's controversial positioning. You are free to create your own promotional content as long as it complies with our affiliate terms and applicable advertising standards.",
      },
      {
        q: 'Are there any restrictions on how I can promote the book?',
        a: 'You may not make false or misleading claims about the product, engage in spam or unsolicited messaging, use paid search ads bidding on our brand terms without prior written approval, or engage in cookie stuffing or any other fraudulent tracking manipulation. Self-referrals (purchasing through your own link) are prohibited and will result in commission forfeiture and potential account termination.',
      },
    ],
  },
  {
    title: 'Licenses & Resell Rights',
    items: [
      {
        q: 'What is the Ebook MRR License?',
        a: 'The Ebook Master Resell Rights (MRR) License grants you the right to sell "The Future of AI Is Dead" directly to your own customers and keep 100% of the revenue. You can also sell the resale rights to your customers (creating an MRR chain), use the book as a lead magnet, bundle it with other products, and market it under your own brand. The ebook must be sold at a minimum price of $7.00 USD.',
      },
      {
        q: 'What is the Software MRR License?',
        a: 'The Software Master Resell Rights License grants you rights to the AI Is Dead Funnel System — the complete Next.js web application that powers this site. You can deploy it under your own brand and domain, modify the source code, sell it as a done-for-you service, or sell the software license to your own customers (one resale level). The software MRR license is priced at $149 and activates up to 3 domains. It must be re-sold for a minimum of $99 USD.',
      },
      {
        q: 'Can I give the ebook away for free?',
        a: 'Under the Ebook MRR License, you may not give the ebook away completely free without a lead capture mechanism in place (e.g., requiring an email address). You may not give away free access in a way that devalues the product for other license holders.',
      },
      {
        q: 'Can I claim authorship of the ebook?',
        a: 'No. The ebook was authored by AiAscended Technologies, and you may not remove or alter the original attribution. You may market and brand your version of the ebook, but the original authorship credit must remain intact.',
      },
      {
        q: 'How many domains can I activate the Software MRR License on?',
        a: 'Each Software MRR License activates on up to 3 domains simultaneously. If you require additional domain activations beyond 3, a separate license must be purchased for each additional set of 3 domains.',
      },
      {
        q: 'What support is included with the Software MRR License?',
        a: 'Software MRR License holders receive 30 days of priority email support from AscendStack Systems. After the 30-day period, community support is available. The license does not include a guarantee of custom development assistance. Software updates are included for 12 months from the purchase date, delivered via secure download link in your dashboard.',
      },
      {
        q: 'Can I use the ebook content to train AI models?',
        a: 'No. Under the Ebook MRR License, use of the ebook content to train competing AI models is explicitly prohibited. You may use the content for personal study, training materials for your own team, or resale as described in the license — but not for AI training datasets.',
      },
    ],
  },
  {
    title: 'Privacy & Data',
    items: [
      {
        q: 'What personal data does AiAscended collect?',
        a: 'We collect the information you provide directly: your name, email address, and purchase information. Payment card details are processed exclusively by Stripe and PayPal and are never stored by AiAscended. We also automatically collect limited technical data including hashed IP addresses (for security and fraud prevention), browser type, pages visited, and affiliate referral data via cookies.',
      },
      {
        q: 'How is my data used?',
        a: 'Your data is used to deliver your purchased products, send order confirmation and access emails, provide optional marketing communications (which you can unsubscribe from at any time), track affiliate commissions, improve our products and website, and comply with legal obligations. We do not sell your personal data to third parties.',
      },
      {
        q: 'How do I unsubscribe from marketing emails?',
        a: 'Every marketing email we send includes an unsubscribe link at the bottom. Clicking it will remove you from our marketing list immediately. Unsubscribing from marketing emails does not affect transactional emails related to your purchases (e.g., order confirmations, access links).',
      },
      {
        q: 'How long is affiliate tracking data stored?',
        a: 'Affiliate tracking cookies are stored in your browser for 30 days. Our servers retain affiliate conversion data for as long as necessary to process and pay commissions and to resolve any disputes.',
      },
      {
        q: 'Who do I contact for data or privacy requests?',
        a: 'For any data access, correction, or deletion requests under applicable privacy law (including GDPR, CCPA, and similar regulations), please contact support@aiascended.com with your request. We will respond within the legally required timeframe.',
      },
    ],
  },
  {
    title: 'Technical & Support',
    items: [
      {
        q: 'Is the website available as a Progressive Web App (PWA)?',
        a: 'Yes. The website supports installation as a Progressive Web App on compatible devices. On mobile (iOS and Android) and desktop (Chrome/Edge), you will see an option to "Add to Home Screen" or "Install App." This allows you to access your book and dashboard offline or without opening a browser.',
      },
      {
        q: 'What browsers are supported?',
        a: 'The website and flipbook reader are optimised for modern browsers including Chrome, Safari, Firefox, and Edge (latest versions). For the best experience, we recommend keeping your browser up to date. The flipbook reader requires JavaScript to be enabled.',
      },
      {
        q: 'I am experiencing a technical issue. How do I get help?',
        a: 'Contact support@aiascended.com with a description of the issue, your browser and device type, and your account email address. Our support team typically responds within 24–48 hours. For Software MRR License holders within the 30-day priority support window, we aim to respond within 4–8 business hours.',
      },
      {
        q: 'What is AiAscended Technologies / AscendStack Systems?',
        a: 'AiAscended Technologies is the company behind "The Future of AI Is Dead" and the educational content on this platform. AscendStack Systems is the software development arm responsible for building the technology platform, the AI Is Dead Funnel System (available under Software MRR License), and hybrid AI solutions for enterprise clients. Together, they form the AiAscended ecosystem.',
      },
      {
        q: 'How do I contact AiAscended?',
        a: 'For all enquiries — support, billing, affiliate questions, licensing, partnerships, or press — email support@aiascended.com. Please include relevant details (order number, account email, or specific question) to help us respond as quickly as possible.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="glass-card overflow-hidden"
      style={{ borderColor: open ? 'rgba(124,58,237,0.5)' : undefined }}
    >
      <button
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 font-semibold"
        style={{ color: 'var(--foreground)', background: 'transparent' }}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="flex-1 text-sm md:text-base">{q}</span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-lg leading-none transition-transform"
          style={{
            background: open ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.06)',
            color: open ? '#a855f7' : 'var(--text-muted)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQContent() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero */}
      <section className="px-4 pt-16 pb-12 text-center" style={{ background: 'var(--surface)' }}>
        <div className="affiliate-badge mb-4">FREQUENTLY ASKED QUESTIONS</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="gradient-text">Everything You Need to Know</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
          Clear, honest answers about the book, pricing, licenses, affiliate program, privacy, and more. If your question is not answered here, contact us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--accent-light)' }}>{SUPPORT_EMAIL}</a>.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {FAQ_SECTIONS.map((s) => (
            <a
              key={s.title}
              href={`#${sectionId(s.title)}`}
              className="px-4 py-2 rounded-full transition-colors hover:opacity-80"
              style={{ background: 'rgba(124,58,237,0.15)', color: '#c4b5fd', border: '1px solid rgba(124,58,237,0.3)' }}
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {FAQ_SECTIONS.map((section) => (
          <section
            key={section.title}
            id={sectionId(section.title)}
          >
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: 'var(--foreground)' }}>
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.items.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="section-divider" />

      {/* CTA */}
      <section className="px-4 py-16 text-center" style={{ background: 'var(--surface)' }}>
        <h2 className="text-2xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>
          Still have questions?
        </h2>
        <p className="mb-8 max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
          Our support team is here to help. Reach out at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--accent-light)' }}>{SUPPORT_EMAIL}</a>{' '}
          and we will respond within 24–48 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/funnel" className="btn-gold px-8 py-3">Get Full Access — {PRICE_BOOK} →</Link>
          <Link href="/read" className="btn-outline px-8 py-3">Read Free Chapters</Link>
          <Link href="/affiliate" className="btn-outline px-8 py-3">Join Affiliate Program</Link>
        </div>
      </section>
    </div>
  );
}
