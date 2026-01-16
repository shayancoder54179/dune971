'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { motion } from 'framer-motion';

interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  image: string;
  status?: 'FEATURED' | 'NEW' | 'SOLD';
}

const properties: Property[] = [
  {
    id: '1',
    name: 'Serene Wabi-Sabi Retreat',
    location: '15-3 Koto-ku, Tokyo, Japan',
    price: '$750,000',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Modern%20japanese%20villa%20interior%2C%20minimalist%2C%20luxury&image_size=portrait_4_3',
    status: 'FEATURED',
  },
  {
    id: '2',
    name: 'Kyoto Zen Villa',
    location: '2-1 Fushimi-ku, Kyoto, Japan',
    price: '$1,200,000',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Luxury%20villa%20with%20pool%2C%20dubai%2C%20palm%20trees&image_size=portrait_4_3',
    status: 'NEW',
  },
  {
    id: '3',
    name: 'Rustic Mountain Cabin',
    location: '8-1 Nagano-shi, Nagano, Japan',
    price: '$480,000',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Rustic%20mountain%20cabin%20exterior%2C%20luxury%2C%20evening&image_size=portrait_4_3',
    status: 'SOLD',
  },
];

export const PropertyGrid = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-heading text-dark mb-4">Signature Properties</h2>
            <p className="text-gray-medium">Curated selection of distinguished residences across Dubai's most prestigious addresses, from Palm Jumeirah to Downtown Dubai.</p>
          </div>
          <Link href="/portfolio" className="text-sm font-body uppercase tracking-wider text-dark hover:text-gold transition-colors border-b border-transparent hover:border-gold pb-1 whitespace-nowrap">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] w-full mb-6 overflow-hidden rounded-2xl shadow-luxury-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-luxury-lg">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {property.status && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
                    <span className="text-xs font-medium tracking-wider uppercase text-dark">
                      {property.status}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-heading text-dark group-hover:text-gold transition-colors">
                    {property.name}
                  </h3>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-medium">{property.location}</span>
                  <span className="text-gold text-lg font-medium">{property.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
