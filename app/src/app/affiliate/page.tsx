import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, DollarSign, Users, TrendingUp, Zap } from 'lucide-react';
import SignupForm from '@/components/SignupForm';

export const metadata: Metadata = {
  title: 'Affiliate Program — Earn 50% Commission | The Future of AI Is Dead',
  description: 'Earn 50% commission promoting one of the most controversial AI books online. $5 per sale. Unlimited commissions. Instant payouts.',
};

export default function AffiliatePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Hero */}
      <section className="hero-bg px-4 pt-24 pb-20 text-center">
        <div className="affiliate-badge mb-6">AFFILIATE PROGRAM</div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>
          Earn <span className="gradient-text">50% Commission</span><br />Promoting One of the Most<br />Controversial AI Books Online
        </h1>
        <p className="text-xl mb-4 font-semibold" style={{ color: 'var(--text-muted)' }}>The Future of AI Is Dead</p>
        <p className="max-w-xl mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
          This isn&apos;t another AI product. It&apos;s a truth bomb that people want to share. That&apos;s why it converts.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="flex items-center gap-2"><DollarSign size={16} style={{ color: '#f59e0b' }} /> $5 per sale</span>
          <span className="flex items-center gap-2"><TrendingUp size={16} style={{ color: '#22c55e' }} /> Unlimited commissions</span>
          <span className="flex items-center gap-2"><Zap size={16} style={{ color: '#a855f7' }} /> Instant tracking</span>
          <span className="flex items-center gap-2"><Users size={16} style={{ color: '#60a5fa' }} /> No approval needed</span>
        </div>
        <a href="#signup" className="btn-gold text-lg px-10 py-4">Become an Affiliate Now →</a>
      </section>

      <div className="section-divider" />

      {/* Why it converts */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-4" style={{ color: 'var(--foreground)' }}>Why This Converts</h2>
        <p className="text-center mb-10" style={{ color: 'var(--text-muted)' }}>Most affiliate products are hard to sell. This isn&apos;t — because it challenges what everyone believes.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🔥', title: 'Hits a nerve', desc: 'People are tired of AI hype. This book validates what they already suspect — and they share it.' },
            { icon: '💰', title: '$9.99 price point', desc: 'Low friction. Impulse buy. No budget approval needed. Converts even from cold traffic.' },
            { icon: '🎯', title: 'Massive audience', desc: 'CEOs, founders, operators, developers — anyone making business decisions is your audience.' },
          ].map(item => (
            <div key={item.title} className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold mb-2" style={{ color: 'var(--foreground)' }}>{item.title}</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Simple math */}
      <section className="px-4 py-20 text-center" style={{ background: 'var(--surface)' }}>
        <h2 className="text-3xl font-extrabold mb-8" style={{ color: 'var(--foreground)' }}>Simple Math</h2>
        <div className="max-w-lg mx-auto glass-card p-8 mb-8">
          <div className="text-lg mb-2" style={{ color: 'var(--text-muted)' }}>Price: <strong style={{ color: 'var(--foreground)' }}>$9.99</strong></div>
          <div className="text-lg mb-6" style={{ color: 'var(--text-muted)' }}>Your commission: <strong className="gradient-text">50% = $5 per sale</strong></div>
          <div className="grid grid-cols-3 gap-4">
            {[['10 sales', '$50'], ['100 sales', '$500'], ['1,000 sales', '$5,000']].map(([sales, earn]) => (
              <div key={sales} className="text-center p-3 rounded-xl" style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid var(--border)' }}>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{sales}</div>
                <div className="text-lg font-extrabold" style={{ color: '#f59e0b' }}>{earn}</div>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4" style={{ color: 'var(--text-muted)' }}>No caps. No limits. No approval bottlenecks.</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Promo content */}
      <section className="px-4 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-4" style={{ color: 'var(--foreground)' }}>Done-For-You Promo Ideas</h2>
        <p className="text-center mb-10" style={{ color: 'var(--text-muted)' }}>You don&apos;t need to guess what works. Use these:</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { platform: '📱 TikTok / Reels', hooks: ['"AI is lying to you"', '"Why AI is failing businesses"', '"The truth about automation"'] },
            { platform: '🐦 Twitter / Threads', hooks: ['"Unpopular opinion: AI isn\'t the future. Systems are."', '"The $2 trillion AI lie nobody is talking about"'] },
            { platform: '📹 YouTube', hooks: ['"I read the most controversial AI book — here\'s what it says"', '"Why every AI prediction has been wrong"'] },
            { platform: '✉️ Email', hooks: ['"Before you invest in AI… read this"', '"Your AI strategy is costing you money"'] },
          ].map(item => (
            <div key={item.platform} className="glass-card p-6">
              <h3 className="font-bold mb-3" style={{ color: 'var(--foreground)' }}>{item.platform}</h3>
              <ul className="space-y-2">
                {item.hooks.map(hook => (
                  <li key={hook} className="text-sm p-2 rounded-lg" style={{ background: 'rgba(124,58,237,0.1)', color: '#c4b5fd' }}>{hook}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* What affiliates get */}
      <section className="px-4 py-20 text-center" style={{ background: 'var(--surface)' }}>
        <h2 className="text-3xl font-extrabold mb-8" style={{ color: 'var(--foreground)' }}>What You Get as an Affiliate</h2>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
          {['Unique tracking link', 'Real-time stats dashboard', 'Ready-to-use marketing angles', 'High-converting sales page', 'No customer support required', 'Instant payout on each sale'].map(item => (
            <div key={item} className="flex items-center gap-3 glass-card p-4 text-sm" style={{ color: 'var(--foreground)' }}>
              <CheckCircle size={16} style={{ color: '#22c55e' }} />{item}
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* Signup */}
      <section id="signup" className="px-4 py-20 max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>Join the Affiliate Program</h2>
          <p style={{ color: 'var(--text-muted)' }}>Enter your email to get your unique affiliate link instantly.</p>
        </div>
        <SignupForm source="affiliate" headline="Get Your Affiliate Link" subtext="Enter your email to receive your unique tracking link and start earning today." buttonText="Get My Affiliate Link →" redirectTo="/affiliate/dashboard" />
        <p className="text-center text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
          By joining, you agree to our{' '}
          <Link href="/terms" style={{ color: 'var(--accent-light)' }}>Terms &amp; Conditions</Link>{' '}
          and{' '}
          <Link href="/license/ebook-mrr" style={{ color: 'var(--accent-light)' }}>Affiliate Program Terms</Link>.
        </p>
      </section>

      {/* Footer link */}
      <div className="px-4 py-8 text-center" style={{ borderTop: '1px solid var(--border)' }}>
        <Link href="/affiliate/dashboard" className="text-sm" style={{ color: 'var(--accent-light)' }}>
          Already an affiliate? View your dashboard →
        </Link>
      </div>
    </div>
  );
}
