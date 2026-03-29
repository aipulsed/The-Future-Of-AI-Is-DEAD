'use client';

import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

interface SignupFormProps {
  source?: string;
  headline?: string;
  subtext?: string;
  buttonText?: string;
  redirectTo?: string;
}

export default function SignupForm({
  source = 'landing',
  headline = 'Get Free Chapters Instantly',
  subtext = 'Enter your email and get the first 2 chapters delivered right now. No spam. Unsubscribe anytime.',
  buttonText = 'Send Me Free Chapters →',
  redirectTo,
}: SignupFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage(data.message ?? 'Check your email for access!');
        if (redirectTo) {
          setTimeout(() => { window.location.href = redirectTo; }, 1200);
        }
      } else {
        setStatus('error');
        setMessage(data.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-card p-8 text-center">
        <CheckCircle size={48} className="mx-auto mb-4" style={{ color: '#22c55e' }} />
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>You&apos;re in!</h3>
        <p style={{ color: 'var(--text-muted)' }}>{message}</p>
      </div>
    );
  }

  return (
    <div className="glass-card p-8">
      <div className="flex items-center gap-3 mb-3">
        <Mail size={24} style={{ color: 'var(--accent-light)' }} />
        <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>{headline}</h3>
      </div>
      <p className="mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>{subtext}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          className="input-field"
          placeholder="Your first name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="input-field"
          placeholder="Your best email address *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {status === 'error' && (
          <p className="text-sm" style={{ color: '#f87171' }}>{message}</p>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-gold flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <span>Sending...</span>
          ) : (
            <>
              {buttonText}
              <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>
      <p className="text-xs mt-3 text-center" style={{ color: 'var(--text-muted)' }}>
        🔒 100% private. No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
