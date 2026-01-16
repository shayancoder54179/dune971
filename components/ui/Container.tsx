import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1400px] px-6 lg:px-20 w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
