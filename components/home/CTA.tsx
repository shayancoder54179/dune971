'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Begin Your Property Journey
          </motion.h2>
          
          <motion.p 
            className="text-gray-medium text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Allow us to guide you toward exceptional real estate opportunities that align with your investment objectives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="inline-block bg-dark text-white px-12 py-4 rounded-full text-sm font-medium tracking-widest hover:bg-gray-800 hover:scale-105 transition-all duration-300 uppercase"
            >
              Initiate Consultation
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
