import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = 'md',
  shadow = 'sm'
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-soft',
    md: 'shadow-soft-lg',
    lg: 'shadow-lg'
  };

  return (
    <div className={cn(
      'bg-white rounded-lg border border-gray-200 transition-theme',
      'dark:bg-gray-800 dark:border-gray-700',
      paddingClasses[padding],
      shadowClasses[shadow],
      className
    )}>
      {children}
    </div>
  );
};