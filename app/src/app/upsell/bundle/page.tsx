'use client';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function UpsellBundlePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-lg text-center">
        <div className="affiliate-badge mb-4">UPGRADE — $79</div>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>The Complete AI Knowledge Bundle</h1>
        <p className="text-lg gradient-text font-semibold mb-6">Master AI properly. Without hype. Without wasted money.</p>
        <div className="glass-card p-8 mb-6 text-left">
          <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>Everything in the bundle ($79):</h2>
          <ul className="space-y-3">
            {['The Future of AI Is Dead (already purchased)', 'The Definitive AI Encyclopedia', 'Full Baby AI Course', 'AI Terminology & Concepts System', 'Advanced Workflow Architecture Guide', 'Implementation Case Studies'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--foreground)' }}>
                <CheckCircle size={16} style={{ color: '#f59e0b' }} />{item}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => window.location.href = '/upsell/systems'} className="btn-gold w-full text-lg px-8 py-4 mb-4">
          Yes! Upgrade to Full Bundle for $79 →
        </button>
        <Link href="/upsell/systems" className="text-sm" style={{ color: 'var(--text-muted)' }}>No thanks, skip this offer</Link>
      </div>
    </div>
  );
}
