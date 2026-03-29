'use client';

import { useState } from 'react';
import { Shield, CreditCard } from 'lucide-react';

export default function CheckoutPage() {
  const [email, setEmail] = useState('');
  const [includeBump, setIncludeBump] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const total = 9.99 + (includeBump ? 9.00 : 0);

  const handleStripe = async () => {
    if (!email) { setError('Please enter your email.'); return; }
    setLoading(true);
    setError('');
    try {
      const ref = typeof window !== 'undefined' ? document.cookie.match(/affiliate=([^;]+)/)?.[1] : '';
      const res = await fetch('/api/checkout/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, includeBump, affiliateCode: ref ?? '' }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else { setError('Checkout unavailable. Please try again.'); setLoading(false); }
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-center mb-2" style={{ color: 'var(--foreground)' }}>Secure Checkout</h1>
        <p className="text-center text-sm mb-8" style={{ color: 'var(--text-muted)' }}>You&apos;re one step away from the full book.</p>

        {/* Order Summary */}
        <div className="glass-card p-6 mb-4">
          <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>Order Summary</h2>
          <div className="flex justify-between text-sm mb-2">
            <span style={{ color: 'var(--text-muted)' }}>The Future of AI Is Dead (Full Access)</span>
            <span style={{ color: 'var(--foreground)' }}>$9.99</span>
          </div>
          {includeBump && (
            <div className="flex justify-between text-sm mb-2">
              <span style={{ color: 'var(--text-muted)' }}>AI Reality Toolkit</span>
              <span style={{ color: 'var(--foreground)' }}>$9.00</span>
            </div>
          )}
          <div className="section-divider my-3" />
          <div className="flex justify-between font-bold">
            <span style={{ color: 'var(--foreground)' }}>Total</span>
            <span className="gradient-text">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Order Bump */}
        <label className="glass-card p-5 mb-4 flex items-start gap-4 cursor-pointer" style={{ border: includeBump ? '1px solid rgba(245,158,11,0.5)' : '1px solid var(--border)' }}>
          <input
            type="checkbox"
            checked={includeBump}
            onChange={(e) => setIncludeBump(e.target.checked)}
            className="mt-1 flex-shrink-0"
          />
          <div>
            <div className="font-bold text-sm mb-1" style={{ color: '#f59e0b' }}>
              ⚡ ADD: AI Reality Toolkit — Only $9 (save $40)
            </div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
              Includes: AI Audit PDF, Vendor Evaluation Template, 90-Day Roadmap, Workflow Diagrams
            </div>
          </div>
        </label>

        {/* Email */}
        <div className="glass-card p-6 mb-4">
          <label className="block text-sm font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Email Address</label>
          <input
            type="email"
            className="input-field mb-4"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && <p className="text-sm mb-3" style={{ color: '#f87171' }}>{error}</p>}
          <button onClick={handleStripe} disabled={loading} className="btn-gold w-full text-center flex items-center justify-center gap-2">
            <CreditCard size={18} />
            {loading ? 'Redirecting...' : `Pay $${total.toFixed(2)} with Stripe`}
          </button>
          <div className="section-divider my-4" />
          <button
            className="btn-outline w-full text-center flex items-center justify-center gap-2"
            onClick={() => window.location.href = '/upsell/starter'}
          >
            <span>🅿️</span> Pay with PayPal
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
          <Shield size={14} />
          <span>256-bit SSL encryption · Stripe &amp; PayPal accepted · 30-day money-back guarantee</span>
        </div>
      </div>
    </div>
  );
}
