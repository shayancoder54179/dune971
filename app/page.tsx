import { Hero } from '@/components/home/Hero';
import { InvestorEdge } from '@/components/home/InvestorEdge';
import { MethodSection } from '@/components/home/MethodSection';
import { AreaHighlights } from '@/components/home/AreaHighlights';
import { FAQSection } from '@/components/home/FAQSection';

export default function Home() {
  return (
    <>
      <Hero />
      <InvestorEdge />
      <MethodSection />
      <AreaHighlights />
      <FAQSection />
    </>
  );
}
