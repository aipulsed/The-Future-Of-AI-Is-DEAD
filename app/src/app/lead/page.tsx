import type { Metadata } from 'next';
import SignupForm from '@/components/SignupForm';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Free Chapters — The Future of AI Is Dead',
  description: 'Get instant access to the first chapters of the most honest AI book ever written.',
};

export default function LeadPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <BookOpen size={40} className="mx-auto mb-4" style={{ color: '#a855f7' }} />
          <h1 className="text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>
            Get the First Chapters <span className="gradient-text">FREE</span>
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Before you spend $9.99 — read it yourself. See the truth. No credit card required.
          </p>
        </div>

        <SignupForm
          source="lead"
          headline="Instant Free Access"
          subtext="Enter your email and get the first chapters delivered instantly. No spam. Unsubscribe anytime."
          buttonText="Give Me Free Access →"
          redirectTo="/read"
        />

        <div className="text-center mt-6">
          <Link href="/funnel" className="text-sm" style={{ color: 'var(--accent-light)' }}>
            Skip — get full access for $9.99 →
          </Link>
        </div>
      </div>
    </div>
  );
}
