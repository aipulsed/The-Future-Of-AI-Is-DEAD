import type { Metadata } from 'next';
import FAQContent from '@/components/FAQContent';

export const metadata: Metadata = {
  title: 'FAQ — The Future of AI Is Dead | AiAscended',
  description:
    'Frequently asked questions about the book, pricing, affiliate program, MRR licenses, privacy, and support. Everything you need to know about The Future of AI Is Dead.',
};

export default function FAQPage() {
  return <FAQContent />;
}
