'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const Philosophy = () => {
  return (
    <Section>
      <Container>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
          {...fadeInUp}
        >
          <h2 className="text-4xl lg:text-5xl font-heading text-dark mb-6">
            Our Philosophy
          </h2>
          <p className="text-gray-medium text-lg leading-relaxed">
            Exceptional real estate requires discerning judgment and market mastery. We provide sophisticated advisory services to distinguished clients seeking premier properties that represent both strategic investments and enduring value in Dubai's luxury market.
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-32">
          {/* Block 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <motion.div 
              className="w-full lg:w-2/5"
              {...fadeInUp}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/6cfde6_18ffe67c657940448b2e86f7b23dc7b8~mv2.avif"
                  alt="Dubai Marina skyline with luxury properties"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </motion.div>
            <motion.div 
              className="w-full lg:w-3/5 space-y-6"
              {...fadeInUp}
            >
              <h3 className="text-3xl font-heading text-dark">Strategic Investment Advisory</h3>
              <p className="text-gray-medium leading-relaxed">
                Each property undergoes rigorous evaluation to assess investment merit and appreciation potential. From emerging districts to established luxury enclaves, we identify opportunities that deliver superior returns and enduring capital growth.
              </p>
            </motion.div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
            <motion.div 
              className="w-full lg:w-3/5 space-y-6"
              {...fadeInUp}
            >
              <h3 className="text-3xl font-heading text-dark">Exclusive Access</h3>
              <p className="text-gray-medium leading-relaxed">
                Our distinguished network and market intelligence provide privileged access to exclusive listings and off-market opportunities. We leverage our expertise to secure favorable terms and exceptional value for our discerning clientele.
              </p>
            </motion.div>
            <motion.div 
              className="w-full lg:w-2/5 flex justify-center lg:justify-end"
              {...fadeInUp}
            >
              <div className="relative aspect-square w-full max-w-[400px]">
                <Image
                  src="/6cfde6_66df80c4944a4d62881c5c0611d60d75~mv2.avif"
                  alt="Palm Jumeirah aerial view"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
