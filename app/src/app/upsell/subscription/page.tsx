'use client';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function UpsellSubscriptionPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-lg text-center">
        <div className="affiliate-badge mb-4">MEMBERSHIP — $19/MONTH</div>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>Join the Ascended AI Lab</h1>
        <p className="text-lg gradient-text font-semibold mb-6">New tools, templates &amp; AI workflows every month</p>
        <div className="glass-card p-8 mb-6 text-left">
          <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>Monthly membership includes:</h2>
          <ul className="space-y-3">
            {['New AI workflow templates each month', 'Tool stack updates & reviews', 'Private community access', 'Monthly live Q&A sessions', 'Agent system releases', 'Templates Marketplace discounts', 'Cancel anytime'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--foreground)' }}>
                <CheckCircle size={16} style={{ color: '#f59e0b' }} />{item}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => window.location.href = '/success'} className="btn-gold w-full text-lg px-8 py-4 mb-4">
          Yes! Join for $19/month →
        </button>
        <Link href="/success" className="text-sm" style={{ color: 'var(--text-muted)' }}>No thanks, complete my order</Link>
      </div>
    </div>
  );
}
