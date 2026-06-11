// ============================================
// HOUSE OF RESTORATION - LOADING SCREEN
// Elegant, branded loading experience
// ============================================

import { motion } from 'framer-motion';
import { colors, keyframeAnimations, typography } from '../../styles/designSystem';
import { LionIcon, RiverIcon, HandsIcon, CircleIcon } from '../ui/Icons';

// ============================================
// LOADING ANIMATION COMPONENTS
// ============================================

const symbols = [LionIcon, RiverIcon, HandsIcon, CircleIcon];

const SymbolLoader: React.FC<{ index: number }> = ({ index }) => {
  const Icon = symbols[index % symbols.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ 
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.15
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <motion.div
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.05, 1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2
        }}
      >
        <Icon size={48} color={colors.lionGold[600]} />
      </motion.div>
    </motion.div>
  );
};

// ============================================
// MAIN LOADING SCREEN
// ============================================

interface LoadingScreenProps {
  message?: string;
  fullScreen?: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = 'Restoring Connection...',
  fullScreen = true
}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    minHeight: fullScreen ? '100vh' : '300px',
    width: '100%',
    background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[800]} 100%)`,
    padding: '2rem',
  };

  const messageStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.light,
    color: colors.stoneIvory[900],
    textAlign: 'center' as const,
    marginTop: '2rem',
    letterSpacing: typography.letterSpacing.wide,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.lionGold[500],
    textAlign: 'center' as const,
    marginTop: '0.5rem',
    opacity: 0.8,
  };

  return (
    <div style={containerStyle}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap' as const,
          justifyContent: 'center',
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <SymbolLoader key={index} index={index} />
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 style={messageStyle}>{message}</h2>
        <p style={subtitleStyle}>
          Nkgono Mamoya - House of Restoration
        </p>
      </motion.div>

      {/* Animated pulse dot */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: colors.lionGold[600],
          borderRadius: '50%',
          marginTop: '2rem',
        }}
      />
    </div>
  );
};

// ============================================
// SMALL LOADING SPINNER
// ============================================

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = colors.lionGold[600],
  className,
}) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ 
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear'
      }}
      style={{
        width: size,
        height: size,
        border: `3px solid ${color}`,
        borderTopColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
      }}
      className={className}
    />
  );
};

// ============================================
// SKELETON LOADING COMPONENTS
// ============================================

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: boolean;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  variant = 'text',
  animation = true,
  className,
}) => {
  const baseStyles = {
    backgroundColor: colors.neutral.gray[200],
    borderRadius: variant === 'circular' ? '50%' : 
                   variant === 'rounded' ? '0.5rem' : '0.25rem',
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  const roundedStyles = {
    ...baseStyles,
    borderRadius: '0.25rem',
  };

  const variants = {
    text: { ...roundedStyles, height: '1rem', marginBottom: '0.5rem' },
    circular: { ...baseStyles, borderRadius: '50%' },
    rectangular: { ...baseStyles, borderRadius: '0' },
    rounded: roundedStyles,
  };

  const shimmerStyle = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
  };

  const shimmerGradient = (
    <div
      style={{
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.5),
          transparent
        )`,
        animation: animation ? 'shimmer 2s infinite' : 'none',
      }}
    />
  );

  return (
    <div
      style={{ ...variants[variant], ...shimmerStyle }}
      className={className}
    >
      {animation && shimmerGradient}
    </div>
  );
};

// ============================================
// PLACEHOLDER COMPONENTS
// ============================================

interface PlaceholderProps {
  type?: 'card' | 'text' | 'image' | 'avatar';
  lines?: number;
  width?: string | number;
  height?: string | number;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  type = 'card',
  lines = 3,
  width = '100%',
  height,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'card':
        return (
          <div
            style={{
              width: typeof width === 'number' ? `${width}px` : width,
              height: height || '200px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column' as const,
              gap: '1rem',
            }}
          >
            <Skeleton width="60%" height={24} variant="text" />
            <Skeleton width="100%" height={16} variant="text" />
            <Skeleton width="80%" height={16} variant="text" />
            {lines > 3 && (
              <Skeleton width="90%" height={16} variant="text" />
            )}
          </div>
        );
      case 'text':
        return (
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.5rem' }}>
            {Array.from({ length: lines }).map((_, i) => (
              <Skeleton
                key={i}
                width={i === 0 ? '100%' : i === lines - 1 ? '70%' : '90%'}
                height={i === 0 ? 24 : 16}
                variant="text"
              />
            ))}
          </div>
        );
      case 'image':
        return <Skeleton width={width} height={height || 200} variant="rectangular" />;
      case 'avatar':
        return <Skeleton width={height || 48} height={height || 48} variant="circular" />;
      default:
        return <Skeleton width={width} height={height} />;
    }
  };

  return (
    <div style={{
      backgroundColor: colors.neutral.white,
      borderRadius: '0.5rem',
      overflow: 'hidden',
    }}>
      {renderContent()}
    </div>
  );
};

// ============================================
// ERROR STATE COMPONENT
// ============================================

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  icon?: React.ReactNode;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Something went wrong',
  message = 'Please try again later',
  onRetry,
  icon,
}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1.5rem',
    textAlign: 'center' as const,
    backgroundColor: colors.neutral.white,
    borderRadius: '0.75rem',
    border: `1px solid ${colors.neutral.gray[200]}`,
  };

  const titleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semiBold,
    color: colors.text.primary,
    marginBottom: '0.5rem',
  };

  const messageStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    marginBottom: '1.5rem',
    maxWidth: '400px',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    backgroundColor: colors.riverMidnight[900],
    color: colors.text.inverted,
    border: 'none',
    borderRadius: '0.5rem',
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    cursor: 'pointer' as const,
    transition: 'all 0.2s ease',
  };

  return (
    <div style={containerStyle}>
      {icon || <CircleIcon size={64} color={colors.ancestralRed[600]} opacity={0.5} />}
      <h3 style={titleStyle}>{title}</h3>
      <p style={messageStyle}>{message}</p>
      {onRetry && (
        <button
          style={buttonStyle}
          onClick={onRetry}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.riverMidnight[800];
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.riverMidnight[900];
          }}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default LoadingScreen;
