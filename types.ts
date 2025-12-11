import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode;
  colSpan?: string;
}
