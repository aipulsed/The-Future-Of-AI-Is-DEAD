import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ebook MRR License Agreement — The Future of AI Is Dead',
};

export default function EbookMRRPage() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="affiliate-badge mb-4">MASTER RESELL RIGHTS</div>
          <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>Ebook MRR License Agreement</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--foreground)' }}>Product:</strong> &quot;The Future of AI Is Dead&quot; Ebook<br />
            <strong style={{ color: 'var(--foreground)' }}>License:</strong> Master Resell Rights (MRR)<br />
            <strong style={{ color: 'var(--foreground)' }}>Issued by:</strong> AiAscended Technologies / AscendStack Systems<br />
            <strong style={{ color: 'var(--foreground)' }}>Effective:</strong> Upon purchase
          </p>
        </div>

        <div className="space-y-6 book-page-content" style={{ color: 'var(--foreground)' }}>
          <section className="glass-card p-6">
            <h2 style={{ color: '#22c55e' }}>✅ What You CAN Do</h2>
            <ul>
              <li>Sell the ebook directly to customers and keep 100% of the revenue</li>
              <li>Distribute the ebook as a lead magnet or bonus product</li>
              <li>Sell resale rights to your own customers (MRR chain)</li>
              <li>Bundle the ebook with other products you own</li>
              <li>Use the ebook content to create derivative training materials for personal use</li>
              <li>Market and promote the ebook under your own brand</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 style={{ color: '#f87171' }}>❌ What You CANNOT Do</h2>
            <ul>
              <li>Claim authorship or remove AiAscended Technologies attribution</li>
              <li>Modify the ebook content substantially and represent it as the original</li>
              <li>Give away the ebook completely free without a lead capture mechanism</li>
              <li>Use the ebook content to train competing AI models</li>
              <li>Sub-license the ebook under different license terms</li>
              <li>Violate any applicable copyright or consumer protection laws</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2>Pricing Requirements</h2>
            <p>The ebook must be sold at a minimum price of <strong>$7.00 USD</strong>. You may not sell below this price to protect market value for all license holders.</p>
          </section>

          <section className="glass-card p-6">
            <h2>Refund Policy</h2>
            <p>End customers may request refunds per your own refund policy. You are responsible for all refunds on your own sales. AiAscended Technologies is not liable for refunds on resold copies.</p>
          </section>

          <section className="glass-card p-6">
            <h2>Liability Limitation</h2>
            <p>This license is provided &quot;as is.&quot; AiAscended Technologies makes no warranties about commercial viability. You assume all risk related to your resale activities.</p>
          </section>

          <section className="glass-card p-6">
            <h2>Governing Law</h2>
            <p>This agreement is governed by applicable commercial law. Any disputes shall be resolved through binding arbitration.</p>
          </section>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/dashboard/licenses" className="btn-primary">Get This License →</Link>
          <Link href="/dashboard" className="btn-outline">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
