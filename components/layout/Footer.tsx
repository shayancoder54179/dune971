import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Instagram, Linkedin, Mail, Phone, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-beige pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl text-dark">DUNE 971</h3>
            <p className="text-gray-medium text-sm leading-relaxed">
              Buyer-focused real estate advisory in Dubai. We secure high-yield assets and provide hands-off wealth management.
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg text-dark">Services</h4>
            <ul className="space-y-4">
              {['Off-Plan Properties', 'Secondary Market', 'Commercial Real Estate', 'Property Management'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-medium hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Areas */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg text-dark">Popular Areas</h4>
            <ul className="space-y-4">
              {['Palm Jebel Ali', 'Dubai Islands', 'Business Bay', 'Dubai South'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-medium hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg text-dark">Join the Inner Circle</h4>
            <p className="text-sm text-gray-medium">Get exclusive off-market deals and market analysis delivered to your inbox.</p>
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white border border-transparent px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
              <button className="w-full bg-dark text-white px-6 py-3 rounded-lg text-sm font-medium tracking-widest hover:bg-gray-800 transition-colors uppercase flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-medium">
          <p>© 2026 Dune 971 Real Estate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-gold">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold">Terms & Conditions</Link>
            <Link href="#" className="hover:text-gold">RERA Compliance</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
