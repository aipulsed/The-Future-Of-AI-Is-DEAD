'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ChevronLeft, ChevronRight, BookOpen, List, X, Bookmark } from 'lucide-react';
import { BOOK_PAGES, CHAPTERS, TOTAL_PAGES } from '@/lib/book-content';

export default function FlipBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showTOC, setShowTOC] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const page = BOOK_PAGES[currentPage];
  const progress = ((currentPage + 1) / TOTAL_PAGES) * 100;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === currentPage) return;
      setDirection(index > currentPage ? 1 : -1);
      setCurrentPage(index);
      setShowTOC(false);
    },
    [currentPage, isAnimating]
  );

  const prev = useCallback(() => {
    if (currentPage > 0) goTo(currentPage - 1);
  }, [currentPage, goTo]);

  const next = useCallback(() => {
    if (currentPage < TOTAL_PAGES - 1) goTo(currentPage + 1);
  }, [currentPage, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  const pageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: { x: 0, opacity: 1, rotateY: 0 },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
      rotateY: dir > 0 ? -15 : 15,
    }),
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)' }}>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1" style={{ background: 'var(--surface)' }}>
        <motion.div
          className="h-full"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #f59e0b)' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Header */}
      <div
        className="fixed top-1 left-0 right-0 z-40 flex items-center justify-between px-4 py-3"
        style={{ background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}
      >
        <button
          onClick={() => setShowTOC(!showTOC)}
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: 'var(--text-muted)' }}
          aria-label="Toggle table of contents"
        >
          {showTOC ? <X size={18} /> : <List size={18} />}
          <span className="hidden sm:inline">Contents</span>
        </button>

        <div className="flex items-center gap-2">
          <BookOpen size={16} style={{ color: 'var(--accent-light)' }} />
          <span className="text-sm font-semibold gradient-text">The Future of AI Is Dead</span>
        </div>

        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {currentPage + 1} / {TOTAL_PAGES}
        </div>
      </div>

      {/* Table of Contents */}
      <AnimatePresence>
        {showTOC && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-72 overflow-y-auto"
            style={{ background: 'var(--surface)', borderRight: '1px solid var(--border)', paddingTop: '4rem' }}
          >
            <div className="p-4">
              <h2 className="font-bold text-lg mb-4" style={{ color: 'var(--foreground)' }}>
                Table of Contents
              </h2>
              {CHAPTERS.map((ch) => {
                const idx = BOOK_PAGES.findIndex((p) => p.chapterNumber === ch.number);
                const isCurrent = BOOK_PAGES[currentPage]?.chapterNumber === ch.number;
                return (
                  <button
                    key={ch.number}
                    onClick={() => goTo(idx)}
                    className="w-full text-left px-3 py-2 rounded-lg mb-1 text-sm transition-all"
                    style={{
                      background: isCurrent ? 'rgba(124,58,237,0.2)' : 'transparent',
                      color: isCurrent ? '#a855f7' : 'var(--text-muted)',
                      border: isCurrent ? '1px solid rgba(124,58,237,0.4)' : '1px solid transparent',
                    }}
                  >
                    {ch.title}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {showTOC && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowTOC(false)}
          style={{ background: 'rgba(0,0,0,0.5)' }}
        />
      )}

      {/* Book Page */}
      <div
        className="flex-1 flex items-center justify-center px-4 py-8"
        style={{ paddingTop: '5rem' }}
      >
        <div className="w-full max-w-2xl">
          {/* Chapter label */}
          <div className="flex items-center gap-2 mb-3">
            <Bookmark size={14} style={{ color: 'var(--accent-light)' }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent-light)' }}>
              {page.chapterTitle}
            </span>
          </div>

          {/* Page content */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => setIsAnimating(false)}
              className="book-page rounded-2xl overflow-hidden glow-purple"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              <div
                className="book-page-content no-scrollbar overflow-y-auto"
                style={{ maxHeight: '65vh', padding: '2.5rem', minHeight: '40vh' }}
              >
                <ReactMarkdown>{page.content}</ReactMarkdown>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4"
        style={{
          background: 'rgba(10,10,15,0.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <button
          onClick={prev}
          disabled={currentPage === 0}
          className="flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm transition-all"
          style={{
            background: currentPage === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(124,58,237,0.2)',
            color: currentPage === 0 ? 'var(--text-muted)' : '#c4b5fd',
            border: '1px solid var(--border)',
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          <ChevronLeft size={18} />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Page dots */}
        <div className="flex gap-1.5">
          {BOOK_PAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all"
              style={{
                width: i === currentPage ? '24px' : '6px',
                height: '6px',
                background:
                  i === currentPage
                    ? 'linear-gradient(90deg, #7c3aed, #f59e0b)'
                    : 'rgba(255,255,255,0.2)',
              }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={currentPage === TOTAL_PAGES - 1}
          className="flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm transition-all"
          style={{
            background:
              currentPage === TOTAL_PAGES - 1
                ? 'rgba(255,255,255,0.05)'
                : 'linear-gradient(135deg, #7c3aed, #a855f7)',
            color: currentPage === TOTAL_PAGES - 1 ? 'var(--text-muted)' : 'white',
            cursor: currentPage === TOTAL_PAGES - 1 ? 'not-allowed' : 'pointer',
          }}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
