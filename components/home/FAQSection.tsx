'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How does Dune 971 help buyers?",
    answer: "We act as your dedicated buyer's agent, providing unbiased advice, market analysis, and access to off-market opportunities. Our goal is to secure the best possible deal for your investment goals."
  },
  {
    question: "What is discretionary buying?",
    answer: "Discretionary buying allows us to make investment decisions on your behalf based on pre-agreed criteria. This service is ideal for international investors seeking hands-off portfolio growth."
  },
  {
    question: "What areas do you specialize in?",
    answer: "We focus on high-growth and established luxury areas including Palm Jebel Ali, Dubai Islands, Business Bay, Dubai South, Palm Jumeirah, and Downtown Dubai."
  },
  {
    question: "Do you work with international investors?",
    answer: "Yes, the majority of our clients are international investors. We provide full support including remote viewing, transaction management, and post-purchase property management."
  }
];

export const FAQSection = () => {
  return (
    <Section className="bg-cream">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-medium">
              Expert insights into Dubai's real estate market
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-dark font-heading text-lg hover:text-gold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-medium leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
};
