'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Key, Copy, CheckCircle, Shield } from 'lucide-react';

const MOCK_LICENSES = [
  { id: 'LIC-EBOOK-001', type: 'Ebook MRR', key: 'AI-EBOOK-MRR-XXXX-XXXX', resaleRights: true, activations: 0 },
];

export default function LicensesPage() {
  const [copiedKey, setCopiedKey] = useState('');

  const copyKey = (key: string) => {
    navigator.clipboard.writeText(key).catch(() => {});
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2000);
  };

  return (
    <div className="min-h-screen px-4 py-8" style={{ background: 'var(--background)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold" style={{ color: 'var(--foreground)' }}>License Management</h1>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Manage your resale and software licenses.</p>
          </div>
          <Link href="/dashboard" className="btn-outline text-sm py-2 px-4">← Dashboard</Link>
        </div>

        {/* Active Licenses */}
        {MOCK_LICENSES.map(lic => (
          <div key={lic.id} className="glass-card p-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Key size={20} style={{ color: '#f59e0b' }} />
                <div>
                  <div className="font-bold" style={{ color: 'var(--foreground)' }}>{lic.type} License</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{lic.id}</div>
                </div>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-bold" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>Active</span>
            </div>

            <div className="p-3 rounded-xl mb-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
              <div className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>License Key</div>
              <div className="flex items-center gap-3">
                <code className="text-sm flex-1" style={{ color: '#c4b5fd' }}>{lic.key}</code>
                <button onClick={() => copyKey(lic.key)} className="flex items-center gap-1 text-xs px-3 py-1 rounded-lg" style={{ background: 'rgba(124,58,237,0.2)', color: '#a855f7' }}>
                  <Copy size={12} /> {copiedKey === lic.key ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle size={14} style={{ color: '#22c55e' }} />
                <span style={{ color: 'var(--foreground)' }}>Resale rights: Included</span>
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Activations: {lic.activations}</div>
            </div>
          </div>
        ))}

        {/* License options to purchase */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} style={{ color: '#a855f7' }} />
            <h2 className="font-bold" style={{ color: 'var(--foreground)' }}>Available License Upgrades</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-1" style={{ color: 'var(--foreground)' }}>Ebook MRR License</h3>
              <div className="text-2xl font-extrabold gradient-text mb-2">$49</div>
              <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>Sell the ebook and keep 100% of profits. Full resale rights.</p>
              <Link href="/license/ebook-mrr" className="btn-primary text-xs py-2 px-4 inline-block">View License Terms</Link>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.3)' }}>
              <h3 className="font-bold mb-1" style={{ color: 'var(--foreground)' }}>Software MRR License</h3>
              <div className="text-2xl font-extrabold gradient-text mb-2">$149</div>
              <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>Own the entire funnel system. Rebrandable. White-label rights.</p>
              <Link href="/license/software-mrr" className="btn-gold text-xs py-2 px-4 inline-block">View License Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
