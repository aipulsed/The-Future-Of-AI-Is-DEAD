'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Copy, TrendingUp, DollarSign, Users, MousePointer } from 'lucide-react';

const MOCK_STATS = {
  clicks: 247,
  conversions: 31,
  earnings: 155.00,
  pending: 45.00,
  refCode: 'AFF-DEMO123',
};

const MOCK_CONVERSIONS = [
  { date: '2026-03-28', email: 'j***@gmail.com', product: 'Full Book', amount: '$5.00', status: 'Paid' },
  { date: '2026-03-27', email: 'm***@outlook.com', product: 'Bundle', amount: '$5.00', status: 'Paid' },
  { date: '2026-03-26', email: 'd***@company.com', product: 'Full Book', amount: '$5.00', status: 'Pending' },
  { date: '2026-03-25', email: 's***@gmail.com', product: 'Systems', amount: '$5.00', status: 'Paid' },
];

export default function AffiliateDashboardPage() {
  const [copied, setCopied] = useState(false);
  const affiliateLink = `https://thefutureofaiisdead.com/?ref=${MOCK_STATS.refCode}`;

  const copyLink = () => {
    navigator.clipboard.writeText(affiliateLink).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen px-4 py-8" style={{ background: 'var(--background)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold" style={{ color: 'var(--foreground)' }}>Affiliate Dashboard</h1>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Welcome back — your earnings are growing.</p>
          </div>
          <Link href="/affiliate" className="btn-outline text-sm py-2 px-4">← Back to Program</Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Clicks', value: MOCK_STATS.clicks.toLocaleString(), icon: <MousePointer size={20} />, color: '#a855f7' },
            { label: 'Conversions', value: MOCK_STATS.conversions, icon: <Users size={20} />, color: '#22c55e' },
            { label: 'Total Earned', value: `$${MOCK_STATS.earnings.toFixed(2)}`, icon: <DollarSign size={20} />, color: '#f59e0b' },
            { label: 'Pending Payout', value: `$${MOCK_STATS.pending.toFixed(2)}`, icon: <TrendingUp size={20} />, color: '#60a5fa' },
          ].map(stat => (
            <div key={stat.label} className="glass-card p-5 text-center">
              <div className="flex justify-center mb-2" style={{ color: stat.color }}>{stat.icon}</div>
              <div className="text-2xl font-extrabold" style={{ color: 'var(--foreground)' }}>{stat.value}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Affiliate Link */}
        <div className="glass-card p-6 mb-8">
          <h2 className="font-bold mb-3" style={{ color: 'var(--foreground)' }}>Your Affiliate Link</h2>
          <div className="flex gap-3">
            <input
              type="text"
              readOnly
              value={affiliateLink}
              className="input-field flex-1"
            />
            <button onClick={copyLink} className="btn-primary px-5 py-2 flex items-center gap-2">
              <Copy size={16} />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>30-day cookie tracking. Earn 50% on every sale through your link.</p>
        </div>

        {/* Conversion table */}
        <div className="glass-card p-6 mb-8">
          <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>Recent Conversions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  {['Date', 'Customer', 'Product', 'Commission', 'Status'].map(h => (
                    <th key={h} className="text-left pb-3 pr-4 font-semibold" style={{ color: 'var(--text-muted)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MOCK_CONVERSIONS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="py-3 pr-4" style={{ color: 'var(--text-muted)' }}>{row.date}</td>
                    <td className="py-3 pr-4" style={{ color: 'var(--foreground)' }}>{row.email}</td>
                    <td className="py-3 pr-4" style={{ color: 'var(--foreground)' }}>{row.product}</td>
                    <td className="py-3 pr-4 font-bold" style={{ color: '#f59e0b' }}>{row.amount}</td>
                    <td className="py-3">
                      <span className="px-2 py-1 rounded-full text-xs font-bold" style={{
                        background: row.status === 'Paid' ? 'rgba(34,197,94,0.15)' : 'rgba(245,158,11,0.15)',
                        color: row.status === 'Paid' ? '#22c55e' : '#f59e0b',
                      }}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Promo materials */}
        <div className="glass-card p-6">
          <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>Quick Promo Copy</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Twitter/X Hook', text: `Unpopular opinion: AI isn't the future. Systems are. This book explains why → ${affiliateLink}` },
              { label: 'Email Subject', text: 'Before you invest in AI… read this' },
              { label: 'TikTok Hook', text: 'AI is lying to your business. Here\'s proof →' },
              { label: 'LinkedIn Intro', text: `"85% of AI projects fail. I finally understand why after reading this book."` },
            ].map(item => (
              <div key={item.label} className="p-4 rounded-xl" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid var(--border)' }}>
                <div className="text-xs font-bold mb-2" style={{ color: '#a855f7' }}>{item.label}</div>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
