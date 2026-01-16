import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "py-[60px] lg:py-[120px]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
