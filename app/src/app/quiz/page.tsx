'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const QUESTIONS = [
  {
    key: 'aiGoal',
    question: 'What is your main goal with AI?',
    options: ['Automate repetitive tasks', 'Replace staff / cut headcount', 'Gain competitive advantage', 'Not sure yet'],
  },
  {
    key: 'workflows',
    question: 'Does your business have documented workflows?',
    options: ['Yes — fully documented', 'Partially documented', 'No — we operate informally', 'We\'re a startup / early stage'],
  },
  {
    key: 'spent',
    question: 'How much have you spent on AI initiatives in the past 2 years?',
    options: ['$0 — just getting started', 'Under $50,000', '$50,000 – $500,000', 'Over $500,000'],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (val: string) => {
    const newAnswers = { ...answers, [QUESTIONS[step].key]: val };
    setAnswers(newAnswers);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      if (typeof window !== 'undefined') {
        localStorage.setItem('quiz', JSON.stringify(newAnswers));
      }
      router.push('/result');
    }
  };

  const q = QUESTIONS[step];
  const progress = ((step) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16" style={{ background: 'var(--background)' }}>
      {/* Progress */}
      <div className="w-full max-w-xl mb-8">
        <div className="flex justify-between text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
          <span>Question {step + 1} of {QUESTIONS.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 rounded-full" style={{ background: 'var(--surface)' }}>
          <div className="h-full rounded-full transition-all duration-300" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #7c3aed, #f59e0b)' }} />
        </div>
      </div>

      <div className="glass-card p-8 w-full max-w-xl">
        <div className="affiliate-badge mb-4">AI REALITY DIAGNOSTIC</div>
        <h1 className="text-2xl font-extrabold mb-8" style={{ color: 'var(--foreground)' }}>{q.question}</h1>
        <div className="flex flex-col gap-3">
          {q.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              className="w-full text-left px-5 py-4 rounded-xl font-medium text-sm transition-all flex items-center justify-between group"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
              }}
            >
              {opt}
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--accent-light)' }} />
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
        30-second diagnostic · No email required · Instant results
      </p>
    </div>
  );
}
