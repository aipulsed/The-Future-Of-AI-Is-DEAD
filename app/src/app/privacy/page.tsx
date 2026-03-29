import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — The Future of AI Is Dead',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>Privacy Policy</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Effective date: January 1, 2026 | AiAscended Technologies</p>
        </div>

        <div className="space-y-6 book-page-content" style={{ color: 'var(--foreground)' }}>
          <div className="glass-card p-6">
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly: name, email address, payment information (processed by Stripe/PayPal, not stored by us), and any information you provide through forms on this website.</p>
            <p>We automatically collect: IP address (hashed for privacy), browser type, pages visited, referral source, and affiliate tracking data via cookies.</p>
          </div>

          <div className="glass-card p-6">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To deliver digital products you have purchased</li>
              <li>To send transactional emails (order confirmations, access links)</li>
              <li>To send marketing emails (with your consent; unsubscribe anytime)</li>
              <li>To track affiliate commissions and process payouts</li>
              <li>To improve our products and website</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h2>Cookies and Tracking</h2>
            <p>We use cookies to: maintain your session, track affiliate referrals (30-day cookie), and analyze website usage. Affiliate tracking cookies are set when you arrive via an affiliate link and persist for 30 days.</p>
          </div>

          <div className="glass-card p-6">
            <h2>Data Sharing</h2>
            <p>We share your data with: Stripe (payment processing), email service providers for transactional emails, and analytics services. We do not sell your personal information. We do not share your email with third parties for marketing without your explicit consent.</p>
          </div>

          <div className="glass-card p-6">
            <h2>Data Retention</h2>
            <p>We retain customer data for 7 years for tax and legal compliance. You may request deletion of your data at any time (excluding data required for legal compliance) by emailing privacy@aiascended.com.</p>
          </div>

          <div className="glass-card p-6">
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have rights to: access your personal data, correct inaccurate data, delete your data, opt out of marketing, and data portability. Contact privacy@aiascended.com to exercise these rights.</p>
          </div>

          <div className="glass-card p-6">
            <h2>Security</h2>
            <p>We implement reasonable security measures including SSL encryption, secure password hashing, and access controls. Payment information is processed directly by Stripe and PayPal — we never store raw payment card data.</p>
          </div>

          <div className="glass-card p-6">
            <h2>Contact</h2>
            <p>Privacy questions: privacy@aiascended.com</p>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="btn-outline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
