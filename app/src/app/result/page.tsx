'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, AlertTriangle } from 'lucide-react';

interface QuizAnswers {
  aiGoal?: string;
  workflows?: string;
  spent?: string;
}

function getDiagnosis(answers: QuizAnswers) {
  const { workflows, spent } = answers;
  if (spent === 'Over $500,000' || spent === '$50,000 – $500,000') {
    return {
      headline: 'Your AI Investment Is Likely Underperforming.',
      subheadline: 'Here\'s why — and what to do about it.',
      body: '85% of AI projects in the $50K–$500K+ range fail to deliver promised ROI. The hidden costs alone — data preparation, compute, maintenance, oversight — typically exceed the original implementation budget. This book shows you exactly where the money went and how to course-correct.',
      cta: 'Read the AI Audit chapter FREE',
      variant: 'high',
    };
  }
  if (workflows === 'No — we operate informally' || workflows === 'We\'re a startup / early stage') {
    return {
      headline: 'You Don\'t Need More AI. You Need Systems First.',
      subheadline: 'AI without workflows is chaos with a price tag.',
      body: 'The #1 reason AI implementations fail is that businesses apply AI to processes that aren\'t documented or optimised. You can\'t automate what you haven\'t defined. This book gives you the framework to build the systems that AI can then amplify.',
      cta: 'Start with the Hybrid Intelligence Model',
      variant: 'systems',
    };
  }
  return {
    headline: 'The AI You\'ve Been Sold Is Not The AI That Works.',
    subheadline: 'There\'s a 95% gap between AI hype and AI reality.',
    body: 'Before you invest further in AI tools, strategies, or consultants, you need a clear picture of what AI actually does well, what it catastrophically fails at, and how the most successful businesses quietly build hybrid systems that deliver real results.',
    cta: 'Read the free chapters now',
    variant: 'default',
  };
}

export default function ResultPage() {
  const [answers, setAnswers] = useState<QuizAnswers>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem('quiz');
      if (stored) setAnswers(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  const diagnosis = getDiagnosis(answers);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-xl">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(245,158,11,0.15)', border: '2px solid rgba(245,158,11,0.4)' }}>
            <AlertTriangle size={28} style={{ color: '#f59e0b' }} />
          </div>
        </div>

        <div className="glass-card p-8 text-center mb-6">
          <div className="affiliate-badge mb-4">YOUR AI DIAGNOSIS</div>
          <h1 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ color: 'var(--foreground)' }}>
            {diagnosis.headline}
          </h1>
          <p className="text-lg font-semibold mb-4 gradient-text">{diagnosis.subheadline}</p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{diagnosis.body}</p>
        </div>

        <div className="glass-card p-6 mb-6">
          <p className="text-sm font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
            The solution is inside this book:
          </p>
          <ul className="space-y-2 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <li>✔ Why AI alone will NEVER fix your business</li>
            <li>✔ The exact systems that actually run companies</li>
            <li>✔ How to implement AI without chaos</li>
            <li>✔ The Hybrid Intelligence Model — real ROI, real results</li>
          </ul>
          <Link href="/lead" className="btn-gold w-full text-center block">
            {diagnosis.cta} <ArrowRight size={16} className="inline" />
          </Link>
        </div>

        <div className="text-center">
          <Link href="/read" className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Or read the flipbook directly →
          </Link>
        </div>
      </div>
    </div>
  );
}
