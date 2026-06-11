// ============================================
// HOUSE OF RESTORATION - BUTTON COMPONENTS
// Elegant, branded button variations
// ============================================

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import { colors, typography, borderRadius, shadows, transitions } from '../../styles/designSystem';
import { LoadingSpinner } from '../common/LoadingScreen';

// ============================================
// BUTTON VARIANTS
// ============================================

type ButtonVariant = 
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'gold'
  | 'green'
  | 'whatsapp'
  | 'outline'
  | 'outlineGold'
  | 'outlineGreen';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// ============================================
// BUTTON PROPS
// ============================================

interface BaseButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

type ButtonProps = BaseButtonProps;

// ============================================
// BUTTON STYLES
// ============================================

const getButtonStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  isDisabled: boolean = false
) => {
  const sizes = {
    sm: {
      padding: '0.5rem 1rem',
      fontSize: typography.fontSize.sm,
      gap: '0.5rem',
      height: '36px',
    },
    md: {
      padding: '0.75rem 1.5rem',
      fontSize: typography.fontSize.base,
      gap: '0.75rem',
      height: '44px',
    },
    lg: {
      padding: '1rem 2rem',
      fontSize: typography.fontSize.lg,
      gap: '1rem',
      height: '52px',
    },
    xl: {
      padding: '1.25rem 2.5rem',
      fontSize: typography.fontSize.xl,
      gap: '1.25rem',
      height: '60px',
    },
  };

  const variants = {
    primary: {
      backgroundColor: colors.riverMidnight[900],
      color: colors.stoneIvory[900],
      border: `1px solid ${colors.riverMidnight[900]}`,
      hover: {
        backgroundColor: colors.riverMidnight[800],
        borderColor: colors.riverMidnight[800],
        boxShadow: shadows.gold,
      },
      active: {
        backgroundColor: colors.riverMidnight[700],
      },
    },
    secondary: {
      backgroundColor: colors.stoneIvory[900],
      color: colors.text.primary,
      border: `1px solid ${colors.stoneIvory[800]}`,
      hover: {
        backgroundColor: colors.stoneIvory[800],
        borderColor: colors.stoneIvory[700],
        boxShadow: shadows.md,
      },
      active: {
        backgroundColor: colors.stoneIvory[700],
      },
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: colors.text.primary,
      border: `1px solid ${colors.neutral.gray[300]}`,
      hover: {
        backgroundColor: colors.riverMidnight[50],
        borderColor: colors.riverMidnight[200],
      },
      active: {
        backgroundColor: colors.riverMidnight[100],
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      color: colors.text.primary,
      border: 'none',
      hover: {
        backgroundColor: colors.neutral.gray[100],
      },
      active: {
        backgroundColor: colors.neutral.gray[200],
      },
    },
    gold: {
      backgroundColor: colors.lionGold[600],
      color: colors.text.inverted,
      border: `1px solid ${colors.lionGold[600]}`,
      hover: {
        backgroundColor: colors.lionGold[700],
        borderColor: colors.lionGold[700],
        boxShadow: shadows.gold,
      },
      active: {
        backgroundColor: colors.lionGold[800],
      },
    },
    green: {
      backgroundColor: colors.healingGreen[700],
      color: colors.text.inverted,
      border: `1px solid ${colors.healingGreen[700]}`,
      hover: {
        backgroundColor: colors.healingGreen[800],
        borderColor: colors.healingGreen[800],
        boxShadow: shadows.green,
      },
      active: {
        backgroundColor: colors.healingGreen[900],
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: colors.riverMidnight[900],
      border: `2px solid ${colors.riverMidnight[900]}`,
      hover: {
        backgroundColor: colors.riverMidnight[900],
        color: colors.stoneIvory[900],
      },
      active: {
        backgroundColor: colors.riverMidnight[800],
      },
    },
    outlineGold: {
      backgroundColor: 'transparent',
      color: colors.lionGold[600],
      border: `2px solid ${colors.lionGold[600]}`,
      hover: {
        backgroundColor: colors.lionGold[600],
        color: colors.text.inverted,
      },
      active: {
        backgroundColor: colors.lionGold[700],
      },
    },
    outlineGreen: {
      backgroundColor: 'transparent',
      color: colors.healingGreen[700],
      border: `2px solid ${colors.healingGreen[700]}`,
      hover: {
        backgroundColor: colors.healingGreen[700],
        color: colors.text.inverted,
      },
      active: {
        backgroundColor: colors.healingGreen[800],
      },
    },
    whatsapp: {
      backgroundColor: '#25D366', // WhatsApp green
      color: colors.text.inverted,
      border: `1px solid #25D366`,
      hover: {
        backgroundColor: '#128C7E',
        borderColor: '#128C7E',
        boxShadow: shadows.green,
      },
      active: {
        backgroundColor: '#075E54',
      },
    },
  };

  const style = {
    ...variants[variant],
    ...sizes[size],
    fontFamily: typography.fontFamily.body,
    fontWeight: typography.fontWeight.medium,
    borderRadius: borderRadius.lg,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: `all ${transitions.normal}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    opacity: isDisabled ? 0.6 : 1,
    pointerEvents: isDisabled ? 'none' : 'auto',
  };

  return { style, hover: variants[variant].hover, active: variants[variant].active };
};

// ============================================
// MAIN BUTTON COMPONENT
// ============================================

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isDisabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const { style, hover, active } = getButtonStyles(variant, size, isDisabled);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled || isLoading) return;
      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        type="button"
        style={{
          ...style,
          width: fullWidth ? '100%' : undefined,
        }}
        className={className}
        onClick={handleClick}
        whileHover={!isDisabled && !isLoading ? hover : {}}
        whileTap={!isDisabled && !isLoading ? active : {}}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <LoadingSpinner size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
        ) : (
          <>
            {leftIcon && <span style={{ display: 'flex' }}>{leftIcon}</span>}
            {children}
            {rightIcon && <span style={{ display: 'flex' }}>{rightIcon}</span>}
          </>
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

// ============================================
// ICON BUTTON COMPONENT
// ============================================

interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  icon: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  ariaLabel?: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = 'ghost',
      size = 'md',
      isLoading = false,
      isDisabled = false,
      ariaLabel = 'Icon button',
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const { style, hover, active } = getButtonStyles(variant, size, isDisabled);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled || isLoading) return;
      onClick?.(e);
    };

    return (
      <motion.button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        style={{
          ...style,
          padding: 0,
          width: sizes[size].height,
          height: sizes[size].height,
          minWidth: sizes[size].height,
        }}
        className={className}
        onClick={handleClick}
        whileHover={!isDisabled && !isLoading ? hover : {}}
        whileTap={!isDisabled && !isLoading ? active : {}}
        disabled={isDisabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <LoadingSpinner size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} />
        ) : (
          icon
        )}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';

const sizes = {
  sm: { height: '36px' },
  md: { height: '44px' },
  lg: { height: '52px' },
  xl: { height: '60px' },
};

// ============================================
// BUTTON GROUP COMPONENT
// ============================================

interface ButtonGroupProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  orientation?: 'horizontal' | 'vertical';
  spacing?: number;
  fullWidth?: boolean;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  orientation = 'horizontal',
  spacing = 0,
  fullWidth = false,
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: orientation === 'horizontal' ? 'row' : 'column',
        gap: spacing,
        width: fullWidth ? '100%' : undefined,
      }}
    >
      {childrenArray.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === childrenArray.length - 1;

        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child as React.ReactElement, {
          variant,
          size,
          style: {
            ...child.props.style,
            borderRadius: 
              orientation === 'horizontal'
                ? isFirst
                  ? `${borderRadius.lg} 0 0 ${borderRadius.lg}`
                  : isLast
                    ? `0 ${borderRadius.lg} ${borderRadius.lg} 0`
                    : 0
                : isFirst
                  ? `${borderRadius.lg} ${borderRadius.lg} 0 0`
                  : isLast
                    ? `0 0 ${borderRadius.lg} ${borderRadius.lg}`
                    : 0,
            margin: 0,
          },
        });
      })}
    </div>
  );
};

// ============================================
// LINK BUTTON COMPONENT (for anchor tags)
// ============================================

interface LinkButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isDisabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  isDisabled = false,
  leftIcon,
  rightIcon,
  children,
  target = '_blank',
  rel = 'noopener noreferrer',
}) => {
  const { style } = getButtonStyles(variant, size, isDisabled);

  return (
    <a
      href={isDisabled ? '#' : href}
      target={target}
      rel={rel}
      style={{
        ...style,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.6 : 1,
        pointerEvents: isDisabled ? 'none' : 'auto',
      }}
      onClick={(e) => isDisabled && e.preventDefault()}
    >
      {leftIcon && <span style={{ display: 'flex' }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span style={{ display: 'flex' }}>{rightIcon}</span>}
    </a>
  );
};

// ============================================
// FLOATING ACTION BUTTON
// ============================================

interface FloatingActionButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'gold' | 'green';
  size?: ButtonSize;
  label?: string;
  position?: {
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
  };
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  icon,
  onClick,
  variant = 'gold',
  size = 'lg',
  label,
  position = { bottom: 24, right: 24 },
}) => {
  const { style } = getButtonStyles(variant === 'gold' ? 'gold' : variant === 'green' ? 'green' : 'primary', size);

  const variantMap = {
    primary: colors.riverMidnight[900],
    gold: colors.lionGold[600],
    green: colors.healingGreen[700],
  };

  return (
    <motion.button
      type="button"
      aria-label={label || 'Floating action button'}
      style={{
        ...style,
        width: sizes[size].height,
        height: sizes[size].height,
        minWidth: sizes[size].height,
        padding: 0,
        borderRadius: '50%',
        position: 'fixed',
        ...position,
        zIndex: 1000,
        boxShadow: `0 4px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px ${variantMap[variant]}40`,
      }}
      onClick={onClick}
      whileHover={{ scale: 1.1, boxShadow: `0 6px 24px rgba(0, 0, 0, 0.3)` }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {icon}
    </motion.button>
  );
};

// ============================================
// WHATSAPP BUTTON COMPONENT
// ============================================

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  variant?: 'primary' | 'gold' | 'green';
  size?: ButtonSize;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = '',
  variant = 'green',
  size = 'md',
  children = 'Message on WhatsApp',
  icon,
}) => {
  const { style } = getButtonStyles(variant === 'gold' ? 'gold' : variant === 'primary' ? 'primary' : 'green', size);

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      {icon && <span style={{ display: 'flex', marginRight: '0.5rem' }}>{icon}</span>}
      {children}
    </a>
  );
};

export default Button;
