import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Software MRR License Agreement — The Future of AI Is Dead',
};

export default function SoftwareMRRPage() {
  return (
    <div className="min-h-screen px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="affiliate-badge mb-4">SOFTWARE RESELL RIGHTS</div>
          <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>Software MRR License Agreement</h1>
          <p style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--foreground)' }}>Product:</strong> AI Is Dead Funnel System (Next.js)<br />
            <strong style={{ color: 'var(--foreground)' }}>License:</strong> Software Master Resell Rights<br />
            <strong style={{ color: 'var(--foreground)' }}>Issued by:</strong> AscendStack Systems<br />
            <strong style={{ color: 'var(--foreground)' }}>Effective:</strong> Upon purchase and activation
          </p>
        </div>

        <div className="space-y-6 book-page-content" style={{ color: 'var(--foreground)' }}>
          <section className="glass-card p-6">
            <h2 style={{ color: '#22c55e' }}>✅ What You CAN Do</h2>
            <ul>
              <li>Deploy the software under your own brand and domain</li>
              <li>Modify the source code, design, and content</li>
              <li>Sell the software to your clients as a done-for-you service</li>
              <li>Sell the software license to your own customers (MRR chain, one level)</li>
              <li>Use the system as the foundation for your own SaaS product</li>
              <li>Remove AiAscended / AscendStack branding after purchase</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2 style={{ color: '#f87171' }}>❌ What You CANNOT Do</h2>
            <ul>
              <li>Distribute or share the source code publicly (open source)</li>
              <li>Activate the same license on more than 3 domains simultaneously</li>
              <li>Re-sell the license for less than $99 USD to protect market value</li>
              <li>Use the software for illegal activities or in violation of Stripe/PayPal TOS</li>
              <li>Remove the license validation mechanism from the codebase</li>
              <li>Sub-license beyond one resale level without written permission</li>
            </ul>
          </section>

          <section className="glass-card p-6">
            <h2>Activation Requirements</h2>
            <p>This license must be activated via the license key system in your dashboard. Each license key activates up to <strong>3 domains</strong>. Additional domain activations require a separate license.</p>
          </section>

          <section className="glass-card p-6">
            <h2>Technical Support</h2>
            <p>License holders receive <strong>30 days of priority support</strong> from AscendStack Systems via email. After 30 days, community support is available. No guarantee of custom development assistance.</p>
          </section>

          <section className="glass-card p-6">
            <h2>Updates</h2>
            <p>License includes access to software updates for <strong>12 months</strong> from purchase date. Updates are delivered via secure download link provided in your dashboard.</p>
          </section>

          <section className="glass-card p-6">
            <h2>Liability Limitation</h2>
            <p>The software is provided &quot;as is&quot; without warranty. AscendStack Systems is not liable for lost revenue, data loss, or business disruption arising from use of this software. You are responsible for your own implementation, security, and compliance.</p>
          </section>

          <section className="glass-card p-6">
            <h2>Governing Law</h2>
            <p>This agreement is governed by applicable software licensing and commercial law. Disputes will be resolved through binding arbitration.</p>
          </section>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/dashboard/licenses" className="btn-gold">Get This License — $149 →</Link>
          <Link href="/dashboard" className="btn-outline">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
