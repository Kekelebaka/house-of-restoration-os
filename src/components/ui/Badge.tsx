// ============================================
// HOUSE OF RESTORATION - BADGE COMPONENT
// Small status and number indicators
// ============================================

import React from 'react';
import { colors, typography, borderRadius } from '../../styles/designSystem';

// ============================================
// TYPES
// ============================================

type BadgeVariant = 'status' | 'category' | 'info' | 'number' | 'primary' | 'secondary';
type BadgeSize = 'xs' | 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// ============================================
// STYLES
// ============================================

const getBadgeStyles = (variant: BadgeVariant = 'status', size: BadgeSize = 'sm') => {
  const variants = {
    status: {
      backgroundColor: 'transparent',
      color: 'inherit',
      border: `1px solid currentColor`,
    },
    category: {
      backgroundColor: colors.lionGold[100],
      color: colors.lionGold[800],
      border: 'none',
    },
    info: {
      backgroundColor: colors.healingGreen[100],
      color: colors.healingGreen[800],
      border: 'none',
    },
    number: {
      backgroundColor: colors.riverMidnight[900],
      color: colors.stoneIvory[900],
      border: 'none',
    },
    primary: {
      backgroundColor: colors.riverMidnight[900],
      color: colors.stoneIvory[900],
      border: 'none',
    },
    secondary: {
      backgroundColor: colors.stoneIvory[900],
      color: colors.riverMidnight[900],
      border: `1px solid ${colors.riverMidnight[200]}`,
    },
  };

  const sizes = {
    xs: {
      padding: '0.125rem 0.375rem',
      fontSize: typography.fontSize.xs,
      borderRadius: borderRadius.xs,
    },
    sm: {
      padding: '0.25rem 0.5rem',
      fontSize: typography.fontSize.xs,
      borderRadius: borderRadius.sm,
    },
    md: {
      padding: '0.375rem 0.75rem',
      fontSize: typography.fontSize.sm,
      borderRadius: borderRadius.md,
    },
    lg: {
      padding: '0.5rem 1rem',
      fontSize: typography.fontSize.sm,
      borderRadius: borderRadius.md,
    },
  };

  return {
    ...variants[variant],
    ...sizes[size],
    fontWeight: typography.fontWeight.medium,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
  };
};

// ============================================
// COMPONENT
// ============================================

const Badge: React.FC<BadgeProps> = ({
  variant = 'status',
  size = 'sm',
  children,
  className = '',
  style: customStyle = {},
}) => {
  const style = {
    ...getBadgeStyles(variant, size),
    ...customStyle,
  };

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
};

export default Badge;
export { Badge, BadgeProps, BadgeVariant, BadgeSize };
