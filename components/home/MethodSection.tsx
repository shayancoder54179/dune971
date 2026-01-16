'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const methods = [
  {
    title: 'Yield First Architecture',
    description: 'Every property we suggest is vetted against current market appreciation data.'
  },
  {
    title: 'Global Reach, Local Depth',
    description: 'Direct access to off-market deals before they hit the portals.'
  },
  {
    title: 'Confidential Advisory',
    description: 'Bespoke services for HNWIs requiring discretionary portfolio management.'
  }
];

export const MethodSection = () => {
  return (
    <Section className="bg-beige">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading text-dark mb-4">
            The Dune 971 Method
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-luxury-sm text-center hover:shadow-luxury-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-heading text-dark mb-4">
                {method.title}
              </h3>
              <p className="text-gray-medium leading-relaxed">
                {method.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
