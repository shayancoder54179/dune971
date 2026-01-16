'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

interface Area {
  id: string;
  name: string;
  yield: string;
  description: string;
  image: string;
}

const areas: Area[] = [
  {
    id: '1',
    name: 'Palm Jebel Ali',
    yield: '8.5%',
    description: 'The new palm island. Double the size of Palm Jumeirah with focus on luxury villas.',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Palm%20Jebel%20Ali%20aerial%20view%20dubai%2C%20luxury%2C%20blue%20water&image_size=portrait_4_3',
  },
  {
    id: '2',
    name: 'Dubai Islands',
    yield: '9.2%',
    description: 'A chain of 5 islands reshaping the northern coastline. High potential for capital appreciation.',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Dubai%20Islands%20masterplan%20view%2C%20luxury%20waterfront&image_size=portrait_4_3',
  },
  {
    id: '3',
    name: 'Business Bay',
    yield: '7.8%',
    description: 'The central business district. High occupancy rates and strong rental demand.',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Business%20Bay%20Dubai%20skyline%20canal%20view&image_size=portrait_4_3',
  },
  {
    id: '4',
    name: 'Dubai South',
    yield: '11.3%',
    description: 'Home to the new Al Maktoum Airport. The future logistic and residential hub.',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Dubai%20South%20modern%20architecture%20greenery&image_size=portrait_4_3',
  },
];

export const AreaHighlights = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-heading text-dark mb-4">Invest in Growth Hubs</h2>
            <p className="text-gray-medium">Strategic locations with highest projected yields.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full mb-6 overflow-hidden rounded-2xl shadow-luxury-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-luxury-lg">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                  <span className="text-xs font-medium tracking-wider uppercase text-dark">
                    Yield: <span className="text-gold font-bold">{area.yield}</span>
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-heading text-dark group-hover:text-gold transition-colors">
                  {area.name}
                </h3>
                <p className="text-gray-medium text-sm leading-relaxed">
                  {area.description}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-medium tracking-widest uppercase text-dark border-b border-gold pb-1">
                    Explore Area
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
