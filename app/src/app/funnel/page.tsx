import type { Metadata } from 'next';
import Link from 'next/link';
import SignupForm from '@/components/SignupForm';
import { CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Instant Access — The Future of AI Is Dead | $9.99',
  description: 'Get the complete AI reality book for $9.99. Free chapters included.',
};

export default function FunnelPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Free lead capture */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="affiliate-badge mb-4">FREE CHAPTERS</div>
            <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>
              Get the First Chapters <span className="gradient-text">FREE</span>
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>No credit card. Instant access. Read in your browser.</p>
          </div>
          <SignupForm source="funnel-free" headline="Free Instant Access" subtext="Enter your email and get the first chapters now." buttonText="Get Free Chapters →" redirectTo="/read" />
        </section>

        <div className="section-divider mb-16" />

        {/* Full offer */}
        <section>
          <div className="text-center mb-8">
            <div className="affiliate-badge mb-4">FULL ACCESS — $9.99</div>
            <h2 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>
              Ready for the <span className="gradient-text">Complete Framework?</span>
            </h2>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" style={{ color: '#f59e0b' }} />)}
              <span className="ml-2 text-sm" style={{ color: 'var(--text-muted)' }}>10,247 executives</span>
            </div>
          </div>

          <div className="glass-card p-8 mb-6">
            <ul className="space-y-3 mb-6">
              {['All 10 full chapters', 'The Hybrid Intelligence Model framework', 'AI Audit Checklist PDF', 'Vendor Evaluation Template', '90-Day Implementation Guide', '50% affiliate commission access', 'Lifetime access'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle size={16} style={{ color: '#f59e0b' }} />{item}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-1">$9.99</div>
              <div className="text-sm line-through mb-4" style={{ color: 'var(--text-muted)' }}>Regular price $97</div>
              <Link href="/checkout" className="btn-gold text-lg px-10 py-4 inline-block">Get Full Access Now →</Link>
              <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>🔒 Stripe &amp; PayPal · 30-day money-back guarantee</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
