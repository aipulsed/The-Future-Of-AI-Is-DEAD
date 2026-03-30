import Link from 'next/link';

export default function Footer() {
  return (
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
              <Link href="/faq" style={{ color: 'var(--text-muted)' }} className="hover:text-white">FAQ</Link>
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
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/affiliate" className="hover:text-white transition-colors">Affiliate Program</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
