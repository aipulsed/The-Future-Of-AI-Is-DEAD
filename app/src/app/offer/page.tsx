import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Full Access — The Future of AI Is Dead',
  description: 'Get instant full access to The Future of AI Is Dead for just $9.99.',
};

export default function OfferPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="affiliate-badge mb-4">LIMITED TIME — $9.99</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>
            The Future of AI Is Dead
          </h1>
          <p className="text-xl gradient-text font-semibold mb-6">The Complete Framework. 10 Chapters. Full Access.</p>
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#f59e0b" style={{ color: '#f59e0b' }} />)}
            <span className="ml-2 text-sm" style={{ color: 'var(--text-muted)' }}>10,247 executives</span>
          </div>
        </div>

        {/* What you get */}
        <div className="glass-card p-8 mb-8">
          <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Everything You Get</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '📖 All 10 full chapters',
              '🧠 The Hybrid Intelligence Model framework',
              '✅ AI Governance Checklist (PDF)',
              '📋 Vendor Evaluation Template',
              '🗓 90-Day AI Implementation Guide',
              '💰 50% affiliate commission access',
              '🔑 MRR license option available',
              '♾️ Lifetime access',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm" style={{ color: 'var(--foreground)' }}>
                <CheckCircle size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                {item.substring(2)}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="glass-card p-6 mb-8">
          <div className="flex mb-2">{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#f59e0b" style={{ color: '#f59e0b' }} />)}</div>
          <p className="text-sm italic mb-3" style={{ color: '#c4b5fd' }}>
            &quot;This book saved us from a $2.4M AI contract that would have delivered nothing. The 5-question framework alone is worth 100x the price.&quot;
          </p>
          <div className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>Marcus T. — CEO, FinTech Series B</div>
        </div>

        {/* Price + CTA */}
        <div className="text-center glass-card p-8 mb-8" style={{ border: '1px solid rgba(245,158,11,0.4)' }}>
          <div className="text-5xl font-extrabold gradient-text mb-2">$9.99</div>
          <div className="text-sm mb-2 line-through" style={{ color: 'var(--text-muted)' }}>Regular price $97</div>
          <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>One-time payment. Lifetime access. 30-day money-back guarantee.</p>
          <Link href="/checkout" className="btn-gold text-lg px-12 py-4">
            Get Instant Access Now <ArrowRight size={18} className="inline" />
          </Link>
          <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>🔒 Secured by Stripe. PayPal also accepted.</p>
        </div>

        {/* Guarantee */}
        <div className="glass-card p-6 text-center">
          <div className="text-3xl mb-3">💯</div>
          <h3 className="font-bold mb-2" style={{ color: 'var(--foreground)' }}>30-Day Money-Back Guarantee</h3>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            If you read this book and don&apos;t find at least one AI decision you need to change immediately, email us for a full refund. No questions asked.
          </p>
        </div>
      </div>
    </div>
  );
}
