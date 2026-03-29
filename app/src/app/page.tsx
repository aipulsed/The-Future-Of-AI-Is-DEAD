import Link from 'next/link';
import { BookOpen, CheckCircle, Star, DollarSign, Users, TrendingUp, Crown, AlertTriangle } from 'lucide-react';
import SignupForm from '@/components/SignupForm';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--background)' }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: 'rgba(10,10,15,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}
      >
        <Link href="/" className="font-bold text-lg gradient-text">AiAscended</Link>
        <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <Link href="/read" className="hover:text-white transition-colors">Read Free</Link>
          <Link href="/affiliate" className="hover:text-white transition-colors">Affiliates</Link>
          <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/read" className="btn-outline text-sm py-2 px-4">Read Free</Link>
          <Link href="/funnel" className="btn-gold text-sm py-2 px-4">Get $9.99 Access</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-bg relative flex flex-col items-center justify-center text-center px-4 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.25) 0%, transparent 70%)'
        }} />
        <div className="affiliate-badge mb-6 animate-fade-up">
          THE BOOK THE AI INDUSTRY DOESN&apos;T WANT YOU TO READ
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text text-glow">The Future<br />of AI Is Dead</span>
        </h1>
        <p className="text-xl md:text-2xl mb-2 font-semibold animate-fade-up" style={{ color: 'var(--text-muted)', animationDelay: '0.2s' }}>
          Exposing the Myth, the Hype, and the Buzzwords
        </p>
        <p className="text-base max-w-xl mb-10 animate-fade-up" style={{ color: 'var(--text-muted)', animationDelay: '0.3s' }}>
          A practical reality check for CEOs, founders &amp; operators who are tired of being sold a lie about artificial intelligence.
        </p>
        {/* Book cover visual */}
        <div className="animate-float mb-10" style={{ animationDelay: '0.4s' }}>
          <div className="relative mx-auto rounded-xl overflow-hidden glow-purple" style={{
            width: 200, height: 280,
            background: 'linear-gradient(160deg, #1a1a3e 0%, #0a0a1f 100%)',
            border: '2px solid rgba(124,58,237,0.5)',
            boxShadow: '0 0 60px rgba(124,58,237,0.4), inset 0 0 40px rgba(124,58,237,0.1)',
          }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-3xl mb-3">💀</div>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#a855f7' }}>AiAscended</div>
              <div className="text-xl font-extrabold leading-tight mb-2 gradient-text">The Future of AI Is Dead</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Exposing the Myth, the Hype &amp; the Buzzwords</div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-4" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.6), transparent)' }} />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <Link href="/read" className="btn-gold text-lg px-8 py-4">🔥 Read Free Chapters →</Link>
          <Link href="/funnel" className="btn-outline text-lg px-8 py-4">Get Full Access — $9.99</Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-up" style={{ animationDelay: '0.6s', color: 'var(--text-muted)' }}>
          <span className="flex items-center gap-1"><Users size={14} className="text-purple-400" /> 10,000+ executives</span>
          <span className="flex items-center gap-1"><DollarSign size={14} className="text-yellow-400" /> 50% affiliate commission</span>
          <span className="flex items-center gap-1"><BookOpen size={14} className="text-purple-400" /> 10 chapters, full framework</span>
        </div>
      </section>

      <div className="section-divider" />

      {/* PROBLEM */}
      <section className="px-4 py-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <AlertTriangle size={32} className="mx-auto mb-4" style={{ color: '#f59e0b' }} />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>
            Everyone is talking about AI.<br />
            <span className="gradient-text">No one is telling the truth.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '❌', title: 'Broken Promises', desc: 'Businesses are burning money on tools they don\'t understand — AI that was sold as transformational delivers nothing.' },
            { icon: '❌', title: 'Wasted Budgets', desc: '85% of AI projects fail to deliver promised ROI. Implementation costs 600% more than the pilot. Nobody told you.' },
            { icon: '❌', title: 'Zero ROI', desc: '"Automation" is being confused with actual execution. Broken workflows. No real results. Expensive lessons.' },
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--foreground)' }}>{item.title}</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* BIG REVEAL */}
      <section className="px-4 py-20 text-center" style={{ background: 'var(--surface)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest mb-4" style={{ color: 'var(--accent-light)' }}>The Reality</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 gradient-text">AI contributes less than 5%<br />of real business value.</h2>
          <p className="text-xl mb-8" style={{ color: 'var(--text-muted)' }}>The other 95%?</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['✔ Systems', '✔ Workflows', '✔ Events', '✔ Execution'].map((item) => (
              <span key={item} className="text-xl font-bold" style={{ color: '#f0f0ff' }}>{item}</span>
            ))}
          </div>
          <p className="text-lg" style={{ color: 'var(--text-muted)' }}>This book exposes what actually works — and why 95% of &quot;AI strategies&quot; fail before they start.</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* WHAT YOU LEARN */}
      <section className="px-4 py-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>What You&apos;ll Discover Inside</h2>
          <p style={{ color: 'var(--text-muted)' }}>10 chapters. No fluff. No hype. No buzzwords.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { ch: '01', title: 'The Death of AI As You Know It', desc: 'What most people think AI is vs what it actually is. The Demo Gap explained.' },
            { ch: '02', title: 'The $2 Trillion Lie', desc: 'How the AI industry inflates valuations. The real cost of implementation.' },
            { ch: '03', title: 'The Buzzword Graveyard', desc: 'AGI, autonomous agents, digital humans — dead promises and buried budgets.' },
            { ch: '04', title: 'What AI Is Actually Good At', desc: 'The honest capability list. Where AI genuinely earns its cost.' },
            { ch: '05', title: 'The Hidden Costs Nobody Talks About', desc: 'The AI Tax: data prep, hallucination, compute, maintenance treadmill.' },
            { ch: '06', title: 'The Hybrid Intelligence Model', desc: 'AiAscended\'s framework combining AI with deterministic systems.' },
            { ch: '07', title: 'Building Systems That Actually Work', desc: 'The 5-question framework. 90-day roadmap. 7 vendor questions.' },
            { ch: '08', title: 'The CEO\'s AI Survival Guide', desc: 'Governance checklist, 90-day AI audit, three leadership failure modes.' },
            { ch: '09', title: 'The Future That Actually Exists', desc: 'Realistic AI predictions for 2-10 years. The Human+AI advantage.' },
            { ch: '10', title: 'Taking Action', desc: 'Your 30-day plan. The AiAscended offer. Go build something real.' },
          ].map((item) => (
            <div key={item.ch} className="glass-card p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(124,58,237,0.2)', color: '#a855f7' }}>{item.ch}</div>
              <div>
                <h3 className="font-bold mb-1" style={{ color: 'var(--foreground)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* FREE PREVIEW CTA */}
      <section className="px-4 py-16 text-center" style={{ background: 'var(--surface)' }}>
        <BookOpen size={40} className="mx-auto mb-4" style={{ color: '#a855f7' }} />
        <h2 className="text-3xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>Read the First 2 Chapters <span className="gradient-text">FREE</span></h2>
        <p className="mb-8 max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>Before you spend $9.99 — read it yourself. See the truth. Interactive flipbook included.</p>
        <Link href="/read" className="btn-gold text-lg px-10 py-4">Open Free Flipbook Reader →</Link>
      </section>

      <div className="section-divider" />

      {/* STATS */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '10,247', label: 'Executives Read This', icon: <Users size={24} /> },
            { value: '$847K', label: 'Avg AI Waste Identified', icon: <TrendingUp size={24} /> },
            { value: '85%', label: 'AI Projects That Fail', icon: <AlertTriangle size={24} /> },
            { value: '50%', label: 'Affiliate Commission', icon: <DollarSign size={24} /> },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6">
              <div className="flex justify-center mb-3" style={{ color: 'var(--accent-light)' }}>{stat.icon}</div>
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* TESTIMONIALS */}
      <section className="px-4 py-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>What Leaders Are Saying</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Marcus T.', role: 'CEO, FinTech Series B', text: 'This book saved us from a $2.4M AI contract that would have delivered nothing. The 5-question framework alone is worth 100x the price.' },
            { name: 'Jennifer K.', role: 'COO, Healthcare Network', text: 'I wish I had read this 18 months ago. The chapter on hidden costs explains exactly what happened to our AI initiative — in detail.' },
            { name: 'David R.', role: 'Founder, E-commerce Platform', text: 'Refreshingly honest. Everyone in my leadership team has read this. We now have a completely different — and better — AI strategy.' },
          ].map((t) => (
            <div key={t.name} className="glass-card p-6">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (<Star key={i} size={16} fill="#f59e0b" style={{ color: '#f59e0b' }} />))}
              </div>
              <p className="text-sm mb-4 italic" style={{ color: '#c4b5fd' }}>&quot;{t.text}&quot;</p>
              <div>
                <div className="font-bold text-sm" style={{ color: 'var(--foreground)' }}>{t.name}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* PRICING */}
      <section className="px-4 py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>Choose Your Access</h2>
        </div>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <div className="text-2xl font-extrabold mb-1" style={{ color: 'var(--foreground)' }}>FREE</div>
            <div className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Free chapters + core concepts</div>
            <ul className="space-y-3 mb-8">
              {['First 2 chapters', 'Core AI myth breakdown', 'Interactive flipbook reader', 'Email updates'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <CheckCircle size={16} style={{ color: '#22c55e' }} />{item}
                </li>
              ))}
            </ul>
            <Link href="/read" className="btn-outline w-full text-center block">Read Free →</Link>
          </div>
          <div className="p-8 rounded-2xl relative" style={{ background: 'linear-gradient(160deg, rgba(124,58,237,0.2), rgba(245,158,11,0.1))', border: '1px solid rgba(124,58,237,0.4)' }}>
            <div className="affiliate-badge mb-3">BEST VALUE</div>
            <div className="text-4xl font-extrabold mb-1 gradient-text">$9.99</div>
            <div className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>Full book + bonuses + ecosystem access</div>
            <ul className="space-y-3 mb-8">
              {['All 10 full chapters', 'Complete CEO framework', 'AI Audit Checklist (PDF)', 'Vendor Evaluation Template', '90-Day Implementation Guide', 'AiAscended ecosystem access', 'Affiliate program access (50%)'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--foreground)' }}>
                  <CheckCircle size={16} style={{ color: '#f59e0b' }} />{item}
                </li>
              ))}
            </ul>
            <Link href="/funnel" className="btn-gold w-full text-center block">Get Instant Access — $9.99 →</Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* AFFILIATE TEASER */}
      <section className="px-4 py-20 text-center max-w-3xl mx-auto">
        <Crown size={40} className="mx-auto mb-4" style={{ color: '#f59e0b' }} />
        <h2 className="text-3xl font-extrabold mb-4" style={{ color: 'var(--foreground)' }}>Earn <span className="gradient-text">50% Commission</span> Per Sale</h2>
        <p className="text-lg mb-3" style={{ color: 'var(--text-muted)' }}>$5 per sale. Unlimited commissions. No caps. No approval delays.</p>
        <div className="flex justify-center gap-8 mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span>10 sales = <strong style={{ color: '#f59e0b' }}>$50</strong></span>
          <span>100 sales = <strong style={{ color: '#f59e0b' }}>$500</strong></span>
          <span>1,000 sales = <strong style={{ color: '#f59e0b' }}>$5,000</strong></span>
        </div>
        <Link href="/affiliate" className="btn-gold text-lg px-10 py-4">Join the Affiliate Program →</Link>
      </section>

      <div className="section-divider" />

      {/* EMAIL CAPTURE */}
      <section className="px-4 py-20" style={{ background: 'var(--surface)' }}>
        <div className="max-w-xl mx-auto">
          <SignupForm source="landing" headline="Get the First Chapters FREE" subtext="Before you spend $9.99 — read it yourself. See the truth. Enter your email for instant access." buttonText="Send Me Free Access →" redirectTo="/read" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-between items-start gap-8 mb-8">
            <div>
              <div className="font-bold text-lg gradient-text mb-2">AiAscended Technologies</div>
              <p className="text-sm max-w-xs" style={{ color: 'var(--text-muted)' }}>Building hybrid AI systems that actually work. No hype. No buzzwords.</p>
            </div>
            <div className="flex gap-12 text-sm">
              <div className="flex flex-col gap-2">
                <span className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Book</span>
                <Link href="/read" style={{ color: 'var(--text-muted)' }} className="hover:text-white">Read Free</Link>
                <Link href="/funnel" style={{ color: 'var(--text-muted)' }} className="hover:text-white">Get Full Access</Link>
                <Link href="/affiliate" style={{ color: 'var(--text-muted)' }} className="hover:text-white">Affiliate Program</Link>
                <Link href="/dashboard" style={{ color: 'var(--text-muted)' }} className="hover:text-white">Dashboard</Link>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Legal</span>
                <Link href="/terms" style={{ color: 'var(--text-muted)' }} className="hover:text-white">Terms</Link>
                <Link href="/privacy" style={{ color: 'var(--text-muted)' }} className="hover:text-white">Privacy Policy</Link>
                <Link href="/license/ebook-mrr" style={{ color: 'var(--text-muted)' }} className="hover:text-white">Ebook License</Link>
                <Link href="/license/software-mrr" style={{ color: 'var(--text-muted)' }} className="hover:text-white">Software License</Link>
              </div>
            </div>
          </div>
          <div className="section-divider mb-6" />
          <div className="flex flex-wrap justify-between items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
            <span>© 2026 AiAscended Technologies / AscendStack Systems. All rights reserved.</span>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Sale</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/affiliate" className="hover:text-white transition-colors">Affiliate Program</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
