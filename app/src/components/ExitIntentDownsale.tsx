'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface ExitIntentDownsaleProps {
  /** Page context — drives the appropriate down-sell offer */
  context?: 'checkout' | 'offer' | 'funnel';
}

export default function ExitIntentDownsale({ context = 'checkout' }: ExitIntentDownsaleProps) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      // Fire only when the cursor leaves through the top of the viewport
      if (e.clientY <= 5 && !dismissed) {
        setVisible(true);
      }
    },
    [dismissed]
  );

  useEffect(() => {
    // Don't fire on touch devices where mouse events don't apply
    if (typeof window === 'undefined' || 'ontouchstart' in window) return;

    // Small delay so the popup doesn't fire on page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const dismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  // ── Per-context offer copy ─────────────────────────────────────────────────
  const offers = {
    checkout: {
      badge: 'WAIT — SPECIAL OFFER',
      headline: "Don't Leave Empty-Handed",
      subheadline: 'Get the first 2 chapters completely FREE — no credit card required.',
      body: "You don't have to buy today. Read the free chapters first, see the truth for yourself, and decide later.",
      primaryLabel: 'Yes — Give Me Free Access →',
      primaryHref: '/read',
      secondaryLabel: 'No thanks, I\'ll pass on the free chapters',
      discountNote: null,
    },
    offer: {
      badge: 'BEFORE YOU GO',
      headline: 'Still on the fence?',
      subheadline: 'Read the first 2 chapters FREE — no card needed.',
      body: "See exactly what's inside before spending a penny. The free flipbook reader opens instantly.",
      primaryLabel: 'Read Free Chapters Now →',
      primaryHref: '/read',
      secondaryLabel: 'No thanks, I\'ll leave without reading',
      discountNote: null,
    },
    funnel: {
      badge: 'ONE-TIME DISCOUNT',
      headline: "Here's 20% off — just for you",
      subheadline: 'Get full access for just $7.99 (regular $9.99).',
      body: 'This discount is only available right now and will not appear again. Lock in your access before the price resets.',
      primaryLabel: 'Claim $7.99 Discount Now →',
      primaryHref: '/checkout?discount=exit20',
      secondaryLabel: "No thanks, I'll pay full price later",
      discountNote: '20% discount applied automatically at checkout.',
    },
  };

  const offer = offers[context];

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="exit-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998]"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
            onClick={dismiss}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="exit-modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-headline"
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          >
            <div
              className="relative w-full max-w-md rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(160deg, #1a1a3e 0%, #0a0a1f 100%)',
                border: '1px solid rgba(124,58,237,0.5)',
                boxShadow: '0 0 80px rgba(124,58,237,0.35)',
              }}
            >
              {/* Close button */}
              <button
                onClick={dismiss}
                aria-label="Close offer"
                className="absolute top-4 right-4 p-1.5 rounded-full transition-colors"
                style={{ color: 'var(--text-muted)', background: 'rgba(255,255,255,0.06)' }}
              >
                <X size={18} />
              </button>

              {/* Badge */}
              <div className="affiliate-badge mb-4 inline-block">{offer.badge}</div>

              {/* Book icon */}
              <div className="flex justify-center mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)' }}
                >
                  <BookOpen size={26} style={{ color: '#a855f7' }} />
                </div>
              </div>

              {/* Headline */}
              <h2
                id="exit-intent-headline"
                className="text-2xl font-extrabold mb-2"
                style={{ color: 'var(--foreground)' }}
              >
                {offer.headline}
              </h2>
              <p className="text-base font-semibold gradient-text mb-3">{offer.subheadline}</p>
              <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                {offer.body}
              </p>

              {/* Discount note */}
              {offer.discountNote && (
                <p
                  className="text-xs mb-4 px-3 py-2 rounded-lg"
                  style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b', border: '1px solid rgba(245,158,11,0.3)' }}
                >
                  🏷 {offer.discountNote}
                </p>
              )}

              {/* Primary CTA */}
              <Link
                href={offer.primaryHref}
                onClick={dismiss}
                className="btn-gold w-full text-center flex items-center justify-center gap-2 mb-3"
              >
                {offer.primaryLabel}
                <ArrowRight size={16} />
              </Link>

              {/* Secondary (decline) */}
              <button
                onClick={dismiss}
                className="w-full text-xs py-2 transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {offer.secondaryLabel}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
