'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export const QuoteSection = () => {
  return (
    <section 
      className="relative py-32 bg-fixed bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Aerial%20view%20of%20luxury%20development%20dubai%2C%20sunset&image_size=landscape_16_9")' 
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-heading text-white mb-8 leading-tight">
            &quot;The best investment on earth is earth.&quot;
          </h2>
          <p className="text-white/90 font-body italic text-lg">
            — Louis Glickman
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
