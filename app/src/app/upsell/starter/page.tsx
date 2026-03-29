'use client';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function UpsellStarterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-lg text-center">
        <div className="affiliate-badge mb-4">ONE-TIME OFFER — $29</div>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>Wait! Upgrade to the AI Systems Starter Pack</h1>
        <p className="text-lg gradient-text font-semibold mb-6">Implement what you just learned — step by step</p>
        <div className="glass-card p-8 mb-6 text-left">
          <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>What&apos;s included ($29):</h2>
          <ul className="space-y-3">
            {['Baby AI System Concepts (lite course)', '5 Workflow Templates (ready to deploy)', 'Example Automation Blueprints', 'Content System Scripts', 'Video Walkthrough Series'].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--foreground)' }}>
                <CheckCircle size={16} style={{ color: '#22c55e' }} />{item}
              </li>
            ))}
          </ul>
        </div>
        <button onClick={() => window.location.href = '/upsell/bundle'} className="btn-gold w-full text-lg px-8 py-4 mb-4">
          Yes! Add Starter Pack for $29 →
        </button>
        <Link href="/upsell/bundle" className="text-sm" style={{ color: 'var(--text-muted)' }}>No thanks, skip this offer</Link>
      </div>
    </div>
  );
}
