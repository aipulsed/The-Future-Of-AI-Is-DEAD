'use client';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function UpsellSystemsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-lg text-center">
        <div className="affiliate-badge mb-4">HIGH-VALUE OFFER — $149</div>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>Ascended Systems Access</h1>
        <p className="text-lg gradient-text font-semibold mb-6">The bridge from knowledge to implementation</p>
        <div className="glass-card p-8 mb-6 text-left">
          <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>What you unlock ($149):</h2>
          <ul className="space-y-3">
            {['Omni Content Studio — full access', 'AscendStack Agent Templates', 'Pre-built Automation Workflows', 'Sales Pipeline System', 'Customer Service Agent Template', 'Priority Support (30 days)', 'Resellable Software License option'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--foreground)' }}>
                <CheckCircle size={16} style={{ color: '#a855f7' }} />{item}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => window.location.href = '/upsell/subscription'} className="btn-primary w-full text-lg px-8 py-4 mb-4">
          Yes! Unlock Systems Access for $149 →
        </button>
        <Link href="/upsell/subscription" className="text-sm" style={{ color: 'var(--text-muted)' }}>No thanks, skip this offer</Link>
      </div>
    </div>
  );
}
