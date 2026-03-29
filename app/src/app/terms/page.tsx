import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions — The Future of AI Is Dead',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>Terms &amp; Conditions</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Effective date: January 1, 2026 | AiAscended Technologies / AscendStack Systems</p>
        </div>

        <div className="space-y-6 book-page-content" style={{ color: 'var(--foreground)' }}>
          <div className="glass-card p-6">
            <h2>1. Products and Services</h2>
            <p>AiAscended Technologies (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) sells digital products including ebooks, courses, templates, software licenses, and affiliate program access via this website.</p>
          </div>

          <div className="glass-card p-6">
            <h2>2. Payment</h2>
            <p>All payments are processed through Stripe and/or PayPal. Prices are in USD. By completing a purchase, you authorize the specified payment amount. All sales are final except as described in our refund policy below.</p>
          </div>

          <div className="glass-card p-6">
            <h2>3. Refund Policy</h2>
            <p>We offer a <strong>30-day money-back guarantee</strong> on all ebook and digital product purchases. To request a refund, email support@aiascended.com within 30 days of purchase with your order details. Software licenses are refundable within 7 days if not activated. Subscription products (Ascended AI Lab) can be cancelled anytime; no refund for partial billing periods.</p>
          </div>

          <div className="glass-card p-6">
            <h2>4. Digital Product Delivery</h2>
            <p>Digital products are delivered electronically via email and/or your account dashboard. We are not responsible for delivery failures caused by incorrect email addresses or spam filters. Please add support@aiascended.com to your contacts.</p>
          </div>

          <div className="glass-card p-6">
            <h2>5. Affiliate Program Terms</h2>
            <p>Participants in our affiliate program earn commissions on qualifying sales made through their unique referral links. Commission rate: 50% of the net sale price after payment processor fees. Commissions are paid monthly for balances over $25. Fraudulent traffic, self-referrals, and manipulation of tracking are prohibited and will result in account termination and forfeiture of commissions.</p>
          </div>

          <div className="glass-card p-6">
            <h2>6. Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property on this website are owned by AiAscended Technologies unless otherwise indicated. Purchasing a product grants you a personal, non-transferable license unless a specific MRR or software license has been purchased.</p>
          </div>

          <div className="glass-card p-6">
            <h2>7. Disclaimer</h2>
            <p>Our products provide educational and informational content. We make no guarantee of specific financial results, business outcomes, or ROI. All case studies, statistics, and testimonials represent individual experiences and results may vary.</p>
          </div>

          <div className="glass-card p-6">
            <h2>8. Limitation of Liability</h2>
            <p>Our total liability for any claim arising from use of our products shall not exceed the amount paid for the relevant product. We are not liable for indirect, incidental, or consequential damages.</p>
          </div>

          <div className="glass-card p-6">
            <h2>9. Governing Law</h2>
            <p>These terms are governed by applicable law. Disputes shall be resolved through binding arbitration, except for intellectual property claims which may be brought in any court of competent jurisdiction.</p>
          </div>

          <div className="glass-card p-6">
            <h2>10. Contact</h2>
            <p>For any questions regarding these terms: support@aiascended.com</p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/" className="btn-outline">← Back to Home</Link>
          <Link href="/privacy" className="btn-outline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
