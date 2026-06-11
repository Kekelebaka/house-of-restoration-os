// ============================================
// HOUSE OF RESTORATION - CARD COMPONENTS
// Elegant, branded card variations
// ============================================

import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import { colors, typography, borderRadius, shadows, transitions, spacing } from '../../styles/designSystem';

// ============================================
// CARD VARIANTS
// ============================================

type CardVariant = 
  | 'primary'
  | 'secondary'
  | 'elevated'
  | 'gold'
  | 'green'
  | 'dark'
  | 'glass';

type CardSize = 'sm' | 'md' | 'lg' | 'xl';

// ============================================
// CARD PROPS
// ============================================

interface BaseCardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  variant?: CardVariant;
  size?: CardSize;
  isHoverable?: boolean;
  isClickable?: boolean;
  children?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

type CardProps = BaseCardProps;

// ============================================
// CARD STYLES
// ============================================

const getCardStyles = (
  variant: CardVariant = 'primary',
  size: CardSize = 'md',
  isHoverable: boolean = false
) => {
  const sizes = {
    sm: {
      padding: spacing['4'],
    },
    md: {
      padding: spacing['6'],
    },
    lg: {
      padding: spacing['8'],
    },
    xl: {
      padding: spacing['12'],
    },
  };

  const variants = {
    primary: {
      backgroundColor: colors.neutral.white,
      border: `1px solid ${colors.neutral.gray[200]}`,
      color: colors.text.primary,
      hover: isHoverable ? {
        boxShadow: shadows.md,
        borderColor: colors.lionGold[500],
      } : {},
    },
    secondary: {
      backgroundColor: colors.stoneIvory[900],
      border: `1px solid ${colors.stoneIvory[800]}`,
      color: colors.text.primary,
      hover: isHoverable ? {
        boxShadow: shadows.md,
        backgroundColor: colors.stoneIvory[800],
      } : {},
    },
    elevated: {
      backgroundColor: colors.neutral.white,
      border: `1px solid ${colors.neutral.gray[200]}`,
      boxShadow: shadows.md,
      color: colors.text.primary,
      hover: isHoverable ? {
        boxShadow: shadows.lg,
        transform: 'translateY(-2px)',
      } : {},
    },
    gold: {
      background: `linear-gradient(135deg, ${colors.lionGold[600]} 0%, ${colors.lionGold[800]} 100%)`,
      border: 'none',
      color: colors.text.inverted,
      hover: isHoverable ? {
        boxShadow: shadows.gold,
        transform: 'translateY(-2px)',
      } : {},
    },
    green: {
      background: `linear-gradient(135deg, ${colors.healingGreen[700]} 0%, ${colors.healingGreen[900]} 100%)`,
      border: 'none',
      color: colors.text.inverted,
      hover: isHoverable ? {
        boxShadow: shadows.green,
        transform: 'translateY(-2px)',
      } : {},
    },
    dark: {
      backgroundColor: colors.riverMidnight[900],
      border: `1px solid ${colors.riverMidnight[800]}`,
      color: colors.text.inverted,
      hover: isHoverable ? {
        boxShadow: shadows.midnight,
        borderColor: colors.lionGold[600],
      } : {},
    },
    glass: {
      backgroundColor: 'rgba(245, 241, 232, 0.8)',
      backdropFilter: 'blur(10px)',
      border: `1px solid rgba(255, 255, 255, 0.2)`,
      color: colors.text.primary,
      hover: isHoverable ? {
        backgroundColor: 'rgba(245, 241, 232, 0.9)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
      } : {},
    },
  };

  const style = {
    ...variants[variant],
    ...sizes[size],
    borderRadius: borderRadius.xl,
    transition: `all ${transitions.normal}`,
    width: '100%',
  };

  return { style, hover: variants[variant].hover };
};

// ============================================
// MAIN CARD COMPONENT
// ============================================

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isHoverable = true,
      isClickable = false,
      children,
      header,
      footer,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const { style, hover } = getCardStyles(variant, size, isHoverable);

    const handleClick = () => {
      if (isClickable && onClick) {
        onClick();
      }
    };

    return (
      <motion.div
        ref={ref}
        style={style}
        className={className}
        onClick={handleClick}
        whileHover={isHoverable && !isClickable ? hover : {}}
        {...props}
      >
        {header && <div style={{ marginBottom: spacing['4'] }}>{header}</div>}
        {children}
        {footer && <div style={{ marginTop: spacing['4'] }}>{footer}</div>}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

// ============================================
// CARD HEADER COMPONENT
// ============================================

interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  variant?: CardVariant;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  avatar,
  action,
  variant = 'primary',
}) => {
  const isDarkVariant = variant === 'dark' || variant === 'gold' || variant === 'green';

  const titleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['xl'],
    fontWeight: typography.fontWeight.semiBold,
    color: isDarkVariant ? colors.text.inverted : colors.text.primary,
    margin: 0,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: isDarkVariant ? colors.text.inverted : colors.text.secondary,
    marginTop: spacing['1'],
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: spacing['4'],
      }}
    >
      {avatar && (
        <div style={{ flexShrink: 0 }}>
          {avatar}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <h3 style={titleStyle}>{title}</h3>}
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
      </div>
      {action && (
        <div style={{ flexShrink: 0 }}>
          {action}
        </div>
      )}
    </div>
  );
};

// ============================================
// CARD BODY COMPONENT
// ============================================

export const CardBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={{ margin: `${spacing['4']} 0` }}>{children}</div>;
};

// ============================================
// CARD FOOTER COMPONENT
// ============================================

export const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: spacing['3'],
        marginTop: spacing['4'],
        paddingTop: spacing['4'],
        borderTop: `1px solid ${colors.neutral.gray[200]}`,
      }}
    >
      {children}
    </div>
  );
};

// ============================================
// STAT CARD COMPONENT
// ============================================

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  variant?: CardVariant;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  variant = 'primary',
}) => {
  const isDarkVariant = variant === 'dark' || variant === 'gold' || variant === 'green';

  const titleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: isDarkVariant ? colors.text.inverted : colors.text.tertiary,
    margin: 0,
    marginBottom: spacing['1'],
    textTransform: 'uppercase' as const,
    letterSpacing: typography.letterSpacing.wide,
  };

  const valueStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: isDarkVariant ? colors.text.inverted : colors.text.primary,
    margin: 0,
  };

  const trendStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: 
      trend === 'up' ? colors.healingGreen[700] :
      trend === 'down' ? colors.ancestralRed[600] :
      colors.text.secondary,
  };

  return (
    <Card variant={variant} size="md">
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: spacing['4'],
        }}
      >
        {icon && (
          <div
            style={{
              flexShrink: 0,
              width: '48px',
              height: '48px',
              borderRadius: borderRadius.lg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isDarkVariant ? 'rgba(255, 255, 255, 0.1)' : colors.neutral.gray[50],
            }}
          >
            {icon}
          </div>
        )}
        <div style={{ flex: 1 }}>
          <p style={titleStyle}>{title}</p>
          <h3 style={valueStyle}>{value}</h3>
          {subtitle && (
            <p style={{ ...subtitleStyle, marginTop: spacing['2'] }}>
              {subtitle}
            </p>
          )}
          {trend && trendValue && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing['1'],
                marginTop: spacing['2'],
              }}
            >
              <span style={trendStyle}>
                {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'}
              </span>
              <span style={trendStyle}>{trendValue}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

// ============================================
// IMAGE CARD COMPONENT
// ============================================

interface ImageCardProps {
  imageUrl: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  content?: string;
  footer?: React.ReactNode;
  variant?: CardVariant;
  onClick?: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  imageUrl,
  imageAlt = '',
  title,
  subtitle,
  content,
  footer,
  variant = 'primary',
  onClick,
}) => {
  const isDarkVariant = variant === 'dark' || variant === 'gold' || variant === 'green';

  const titleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semiBold,
    color: isDarkVariant ? colors.text.inverted : colors.text.primary,
    margin: 0,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: isDarkVariant ? 'rgba(255, 255, 255, 0.8)' : colors.text.secondary,
    margin: `${spacing['2']} 0`,
  };

  const contentStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: isDarkVariant ? 'rgba(255, 255, 255, 0.7)' : colors.text.tertiary,
    lineHeight: typography.lineHeight.relaxed,
  };

  return (
    <Card variant={variant} size="md" isHoverable={!!onClick} isClickable={!!onClick} onClick={onClick}>
      <img
        src={imageUrl}
        alt={imageAlt}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: borderRadius.lg,
          marginBottom: spacing['4'],
        }}
      />
      {title && <h3 style={titleStyle}>{title}</h3>}
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
      {content && <p style={contentStyle}>{content}</p>}
      {footer && <div style={{ marginTop: spacing['4'] }}>{footer}</div>}
    </Card>
  );
};

// ============================================
// TESTIMONIAL CARD COMPONENT
// ============================================

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  rating?: number;
  variant?: CardVariant;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatar,
  rating = 5,
  variant = 'primary',
}) => {
  const isDarkVariant = variant === 'dark' || variant === 'gold' || variant === 'green';

  const quoteStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    fontStyle: 'italic' as const,
    color: isDarkVariant ? colors.text.inverted : colors.text.secondary,
    lineHeight: typography.lineHeight.relaxed,
    margin: 0,
    marginBottom: spacing['6'],
  };

  const authorStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semiBold,
    color: isDarkVariant ? colors.text.inverted : colors.text.primary,
    margin: 0,
  };

  const roleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: isDarkVariant ? 'rgba(255, 255, 255, 0.7)' : colors.text.tertiary,
    marginTop: spacing['1'],
  };

  return (
    <Card variant={variant} size="lg">
      <div
        style={{
          display: 'flex',
          gap: spacing['4'],
        }}
      >
        {avatar && (
          <img
            src={avatar}
            alt={author}
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
        )}
        <div style={{ flex: 1 }}>
          <blockquote style={quoteStyle}>"{quote}"</blockquote>
          <div>
            <p style={authorStyle}>{author}</p>
            {role && <p style={roleStyle}>{role}</p>}
          </div>
          {/* Rating stars */}
          {rating && (
            <div
              style={{
                display: 'flex',
                gap: spacing['1'],
                marginTop: spacing['2'],
                color: colors.lionGold[600],
              }}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ fontSize: '1.25rem' }}>
                  {i < rating ? '★' : '☆'}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

// ============================================
// PRICING CARD COMPONENT
// ============================================

interface PricingCardProps {
  title: string;
  price: string | number;
  currency?: string;
  period?: string;
  features: string[];
  button: React.ReactNode;
  popular?: boolean;
  variant?: CardVariant;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  currency = 'R',
  period = '/session',
  features,
  button,
  popular = false,
  variant = 'primary',
}) => {
  const isDarkVariant = variant === 'dark' || variant === 'gold' || variant === 'green';

  const titleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semiBold,
    color: isDarkVariant ? colors.text.inverted : colors.text.primary,
    margin: 0,
  };

  const priceStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: isDarkVariant ? colors.text.inverted : colors.lionGold[600],
    margin: `${spacing['2']} 0`,
  };

  const periodStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: isDarkVariant ? 'rgba(255, 255, 255, 0.7)' : colors.text.tertiary,
  };

  return (
    <Card variant={popular ? 'gold' : variant} size="lg">
      {popular && (
        <div
          style={{
            backgroundColor: colors.lionGold[600],
            color: colors.text.inverted,
            padding: `${spacing['1']} ${spacing['3']}`,
            borderRadius: borderRadius.full,
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize.sm,
            fontWeight: typography.fontWeight.medium,
            textAlign: 'center' as const,
            marginBottom: spacing['4'],
          }}
        >
          Most Popular
        </div>
      )}
      <h3 style={titleStyle}>{title}</h3>
      <div style={{ margin: `${spacing['4']} 0` }}>
        <span style={priceStyle}>
          {currency}{price}
        </span>
        <span style={periodStyle}> {period}</span>
      </div>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: `${spacing['6']} 0`,
        }}
      >
        {features.map((feature, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: spacing['2'],
              marginBottom: spacing['2'],
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.sm,
              color: isDarkVariant ? 'rgba(255, 255, 255, 0.8)' : colors.text.secondary,
            }}
          >
            <span style={{ color: colors.healingGreen[700], fontWeight: typography.fontWeight.bold }}>
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: spacing['6'] }}>{button}</div>
    </Card>
  );
};

// ============================================
// EXPORT
// ============================================

export default Card;
