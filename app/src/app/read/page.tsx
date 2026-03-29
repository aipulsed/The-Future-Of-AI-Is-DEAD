import type { Metadata } from 'next';
import FlipBook from '@/components/FlipBook';

export const metadata: Metadata = {
  title: 'Read Free — The Future of AI Is Dead',
  description: 'Read the full interactive flipbook. 10 chapters exposing AI hype and showing what actually works.',
};

export default function ReadPage() {
  return <FlipBook />;
}
