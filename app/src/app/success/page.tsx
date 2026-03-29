import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Order Confirmed — The Future of AI Is Dead',
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-lg text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>You made the right choice.</h1>
        <p className="text-lg gradient-text font-semibold mb-6">Your access is confirmed.</p>

        <div className="glass-card p-8 mb-6 text-left">
          <h2 className="font-bold mb-4" style={{ color: 'var(--foreground)' }}>Your next steps:</h2>
          <ul className="space-y-4">
            {[
              { step: '1', text: 'Check your email — your access link is on its way', icon: '📧' },
              { step: '2', text: 'Open the flipbook reader and start with Chapter 1', icon: '📖' },
              { step: '3', text: 'Complete the 90-Day AI Audit from Chapter 8', icon: '✅' },
              { step: '4', text: 'Join the Affiliate Program and earn 50% commissions', icon: '💰' },
            ].map((item) => (
              <li key={item.step} className="flex items-start gap-3 text-sm" style={{ color: 'var(--foreground)' }}>
                <span className="text-xl">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/read" className="btn-gold w-full text-center">Start Reading Now →</Link>
          <Link href="/affiliate" className="btn-outline w-full text-center">Join Affiliate Program (50% commission)</Link>
          <Link href="/dashboard" className="btn-outline w-full text-center">Go to Dashboard</Link>
        </div>

        <div className="glass-card p-5 mt-6 text-left">
          <div className="flex items-start gap-3">
            <CheckCircle size={20} style={{ color: '#22c55e' }} className="flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm mb-1" style={{ color: 'var(--foreground)' }}>30-Day Money-Back Guarantee</div>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Not 100% satisfied? Email support@aiascended.com within 30 days for a full refund. No questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
