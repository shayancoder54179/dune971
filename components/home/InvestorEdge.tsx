'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { LineChart, ShieldCheck, Building, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: LineChart,
    title: 'The Investor\'s Edge',
    description: 'We don\'t just show properties; we analyze yields. Access curated, data-backed opportunities for high-ROI capital growth.'
  },
  {
    icon: ShieldCheck,
    title: 'Hands-Off Wealth',
    description: 'Total peace of mind. From discretionary buying to tenant management, we act on your behalf to protect and grow your equity.'
  },
  {
    icon: Building,
    title: 'Strategic Assets',
    description: 'Secure high-yield commercial hubs in Dubai\'s economic centers. Expert navigation for institutional and private investors.'
  },
  {
    icon: TrendingUp,
    title: 'Exit for Maximum Return',
    description: 'List your property with the same precision we use to buy. We position your asset to attract premium global capital.'
  }
];

export const InvestorEdge = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col space-y-4"
            >
              <div className="text-gold mb-2">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-heading text-dark">
                {feature.title}
              </h3>
              <p className="text-gray-medium text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
