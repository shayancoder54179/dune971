'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center py-20 lg:py-0 relative overflow-hidden bg-cream">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Column */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-body text-sm tracking-widest text-dark uppercase mb-4">Established 2024 — Dune 971</p>
            <h1 className="text-5xl lg:text-7xl leading-[1.1] font-heading text-dark">
              Realize Your Vision. <br />
              <span className="font-accent italic text-gold block mt-2">Own the Future of Dubai.</span>
            </h1>
            <p className="text-gray-medium text-base lg:text-lg max-w-lg font-body leading-relaxed">
              Dune 971 puts buyers in the driver&apos;s seat. We navigate the market to secure high-yield assets and capital appreciation that aligns with your wealth goals.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-luxury-md max-w-md">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">I want to...</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <select className="w-full appearance-none bg-cream px-4 py-3 rounded-lg text-sm font-medium text-dark focus:outline-none focus:ring-1 focus:ring-gold border-none">
                      <option>Invest</option>
                      <option>Buy to Live</option>
                      <option>Sell</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <select className="w-full appearance-none bg-cream px-4 py-3 rounded-lg text-sm font-medium text-dark focus:outline-none focus:ring-1 focus:ring-gold border-none">
                      <option>Off-Plan Villa</option>
                      <option>Luxury Apartment</option>
                      <option>Penthouse</option>
                      <option>Townhouse</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-dark text-white px-8 py-3 rounded-lg text-sm font-medium tracking-widest hover:bg-gray-800 transition-colors uppercase">
                  Build My Portfolio
                </button>
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] w-full max-w-[600px] mx-auto group">
              <Image
                src="/6cfde6_15a7c268f5214a0794ad40efa19bc493~mv2.avif"
                alt="Dubai skyline featuring Palm Jumeirah and iconic landmarks"
                fill
                className="object-cover rounded-[32px] shadow-luxury-lg"
                priority
              />
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
                 <span className="font-heading text-dark text-lg">Prime Locations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
