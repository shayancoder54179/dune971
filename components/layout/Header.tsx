'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'OFF-PLAN', href: '/off-plan' },
    { name: 'SECONDARY MARKET', href: '/secondary-market' },
    { name: 'COMMERCIAL', href: '/commercial' },
    { name: 'ADVISORY', href: '/advisory' },
    { name: 'MANAGEMENT', href: '/management' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-luxury-sm py-4" : "bg-transparent py-6"
    )}>
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="font-heading text-2xl font-semibold text-dark">
            DUNE 971
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium tracking-widest text-dark hover:text-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link 
              href="/portfolio-review" 
              className="bg-dark text-white px-6 py-2 rounded-full text-xs font-medium tracking-widest hover:bg-gray-800 transition-colors uppercase"
            >
              Free Portfolio Review
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-dark z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-cream z-40 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-heading text-dark hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
