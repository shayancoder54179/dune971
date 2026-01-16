'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { TrendingUp, Handshake, Building2, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    description: 'Comprehensive research and analytical insights to identify premier investment opportunities.',
  },
  {
    icon: Handshake,
    title: 'Expert Negotiation',
    description: 'Seasoned professionals who secure advantageous terms and optimal pricing for discerning clients.',
  },
  {
    icon: Building2,
    title: 'Prestigious Addresses',
    description: 'Privileged access to properties in Dubai\'s most coveted and exclusive neighborhoods.',
  },
  {
    icon: PieChart,
    title: 'Portfolio Strategy',
    description: 'Bespoke advisory services to optimize your real estate holdings and enhance returns.',
  },
];

export const Services = () => {
  return (
    <Section className="bg-beige">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading text-dark mb-6">
            Comprehensive Brokerage Services
          </h2>
          <p className="text-gray-medium leading-relaxed mb-8">
            From initial consultation through transaction completion, we deliver white-glove service at every stage of your property acquisition. Our commitment is to provide a seamless experience while optimizing investment performance and portfolio value.
          </p>
          <button className="bg-transparent border border-dark text-dark px-8 py-3 rounded-full text-sm font-medium tracking-widest hover:bg-dark hover:text-white transition-colors uppercase">
            Arrange Private Consultation
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-6 p-6"
            >
              <div className="text-gold">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-heading text-dark">
                {service.title}
              </h3>
              <p className="text-gray-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
