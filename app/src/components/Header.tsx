import Link from 'next/link';

export default function Header() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{ background: 'rgba(10,10,15,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}
    >
      <Link href="/" className="font-bold text-lg gradient-text">AiAscended</Link>
      <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: 'var(--text-muted)' }}>
        <Link href="/read" className="hover:text-white transition-colors">Read Free</Link>
        <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
        <Link href="/affiliate" className="hover:text-white transition-colors">Affiliates</Link>
        <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
      </div>
      <Link
        href="/funnel"
        className="btn-gold text-sm whitespace-nowrap"
        style={{ padding: '6px 14px' }}
      >
        Get Access — $9.99
      </Link>
    </nav>
  );
}
