import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Download, Key, Crown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dashboard — The Future of AI Is Dead',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen px-4 py-8" style={{ background: 'var(--background)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold" style={{ color: 'var(--foreground)' }}>Your Dashboard</h1>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Manage your purchases, licenses, and account.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Purchases */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={20} style={{ color: '#a855f7' }} />
              <h2 className="font-bold" style={{ color: 'var(--foreground)' }}>Your Purchases</h2>
            </div>
            <div className="p-4 rounded-xl mb-4" style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid var(--border)' }}>
              <div className="font-semibold text-sm mb-1" style={{ color: 'var(--foreground)' }}>The Future of AI Is Dead — Full Access</div>
              <div className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>Lifetime access · All 10 chapters</div>
              <Link href="/read" className="btn-primary text-sm py-2 px-4 inline-flex items-center gap-2">
                <BookOpen size={14} /> Read Now
              </Link>
            </div>
            <Link href="/funnel" className="text-xs" style={{ color: 'var(--text-muted)' }}>Upgrade your access →</Link>
          </div>

          {/* Downloads */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Download size={20} style={{ color: '#f59e0b' }} />
              <h2 className="font-bold" style={{ color: 'var(--foreground)' }}>Downloads &amp; Bonuses</h2>
            </div>
            <div className="space-y-3">
              {[
                { name: 'AI Audit Checklist.pdf', status: 'Available' },
                { name: 'Vendor Evaluation Template.xlsx', status: 'Available' },
                { name: '90-Day Roadmap.pdf', status: 'Available' },
              ].map(item => (
                <div key={item.name} className="flex items-center justify-between p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)' }}>
                  <span className="text-xs" style={{ color: 'var(--foreground)' }}>{item.name}</span>
                  <button className="text-xs px-3 py-1 rounded-lg" style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>
                    <Download size={12} className="inline mr-1" />Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Licenses */}
        <div className="glass-card p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Key size={20} style={{ color: '#60a5fa' }} />
            <h2 className="font-bold" style={{ color: 'var(--foreground)' }}>Licenses</h2>
          </div>
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>No licenses yet. Upgrade to unlock MRR resale rights.</p>
          <div className="flex gap-3">
            <Link href="/dashboard/licenses" className="btn-outline text-sm py-2 px-4">View License Options</Link>
          </div>
        </div>

        {/* Affiliate */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <Crown size={20} style={{ color: '#f59e0b' }} />
            <h2 className="font-bold" style={{ color: 'var(--foreground)' }}>Affiliate Program</h2>
          </div>
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>Earn 50% commission on every sale. No caps, no limits.</p>
          <Link href="/affiliate" className="btn-gold text-sm py-2 px-4 inline-block">Join Affiliate Program →</Link>
        </div>
      </div>
    </div>
  );
}
