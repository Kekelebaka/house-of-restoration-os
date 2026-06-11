// ============================================
// HOUSE OF RESTORATION - DESIGN SYSTEM
// Luxury. African. Timeless. Trustworthy.
// ============================================

import { css } from '@emotion/react';

// ============================================
// BRAND COLORS
// Inspired by: River Midnight, Lion Gold, Healing Green, Stone Ivory
// ============================================

export const colors = {
  // Primary Brand Colors
  riverMidnight: {
    50: '#E8ECF1',
    100: '#C5D1E0',
    200: '#A2B6CE',
    300: '#7F9BCC',
    400: '#5C80AA',
    500: '#396589',
    600: '#2A4F6F',
    700: '#1B3955',
    800: '#0C233B',
    900: '#0F1E33', // Primary River Midnight
    950: '#080F1A',
  },
  
  lionGold: {
    50: '#FDF8F0',
    100: '#F9ECD8',
    200: '#F4DFAE',
    300: '#EFC285',
    400: '#E9A55C',
    500: '#E38833',
    600: '#C79A3B', // Primary Lion Gold
    700: '#A57B2F',
    800: '#835C23',
    900: '#613D17',
    950: '#3F280C',
  },
  
  healingGreen: {
    50: '#F0FAF6',
    100: '#E0F1EB',
    200: '#CDE7D9',
    300: '#BADBC7',
    400: '#A5CEB5',
    500: '#7FB899',
    600: '#5A9B7A',
    700: '#2F7D63', // Primary Healing Green
    800: '#235D49',
    900: '#173D2F',
    950: '#0C1F18',
  },
  
  stoneIvory: {
    50: '#FCFCFB',
    100: '#F9F9F7',
    200: '#F5F5F2',
    300: '#F1F1EE',
    400: '#ECECE7',
    500: '#E8E8E2',
    600: '#E2E2D9',
    700: '#DBDBD0',
    800: '#D4D4C7',
    900: '#F5F1E8', // Primary Stone Ivory
    950: '#F9F8F5',
  },
  
  // Royal Blue (Inspired by Nkgono's garments)
  royalBlue: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
    950: '#172554',
  },
  
  // Ancestral Red (Inspired by Nkgono's garments)
  ancestralRed: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },
  
  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  
  // Semantic Colors
  semantic: {
    success: {
      light: '#ECFDF5',
      base: '#2F7D63',
      dark: '#173D2F',
    },
    warning: {
      light: '#FFFBEB',
      base: '#C79A3B',
      dark: '#613D17',
    },
    error: {
      light: '#FEF2F2',
      base: '#DC2626',
      dark: '#7F1D1D',
    },
    info: {
      light: '#EFF6FF',
      base: '#2563EB',
      dark: '#1E3A8A',
    },
  },
  
  // Gradients
  gradients: {
    primary: `linear-gradient(135deg, #0F1E33 0%, #2A4F6F 100%)`,
    gold: `linear-gradient(135deg, #C79A3B 0%, #E38833 100%)`,
    green: `linear-gradient(135deg, #2F7D63 0%, #5A9B7A 100%)`,
    ivory: `linear-gradient(135deg, #F5F1E8 0%, #E8E8E2 100%)`,
    luxury: `linear-gradient(135deg, #0F1E33 0%, #C79A3B 50%, #2F7D63 100%)`,
    river: `linear-gradient(135deg, #0F1E33 0%, #3B82F6 100%)`,
    fire: `linear-gradient(135deg, #DC2626 0%, #C79A3B 100%)`,
  },
  
  // Background Colors
  backgrounds: {
    primary: '#0F1E33',
    secondary: '#F5F1E8',
    tertiary: '#FFFFFF',
    dark: '#1A1A1A',
    light: '#F9F9F9',
    gradient: 'linear-gradient(135deg, #0F1E33 0%, #2A4F6F 100%)',
  },
  
  // Text Colors
  text: {
    primary: '#0F1E33',
    secondary: '#4B5563',
    tertiary: '#9CA3AF',
    inverted: '#F5F1E8',
    light: '#FFFFFF',
    dark: '#1F2937',
    gold: '#C79A3B',
    green: '#2F7D63',
  },
  
  // Border Colors
  borders: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#4B5563',
    gold: '#C79A3B',
    green: '#2F7D63',
  },
} as const;

// ============================================
// TYPOGRAPHY
// Elegant luxury serif for headings
// Clean modern sans-serif for body
// ============================================

export const typography = {
  // Font Families
  fontFamily: {
    serif: `'Playfair Display', 'Georgia', serif`,
    sans: `'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', sans-serif`,
    display: `'Cormorant Garamond', 'Playfair Display', serif`,
    body: `'Inter', '-apple-system', 'BlinkMacSystemFont', sans-serif`,
    mono: `'JetBrains Mono', 'Fira Code', monospace`,
  },
  
  // Font Sizes
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',     // 24px
    '3xl': '1.875rem',   // 30px
    '4xl': '2.25rem',    // 36px
    '5xl': '3rem',       // 48px
    '6xl': '3.75rem',    // 60px
    '7xl': '4.5rem',     // 72px
    '8xl': '6rem',       // 96px
    '9xl': '8rem',       // 128px
  },
  
  // Font Weights
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  
  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
    extraLoose: 2.5,
  },
  
  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  
  // Text Styles
  textStyles: {
    display: {
      fontFamily: typography.fontFamily.display,
      fontSize: typography.fontSize['8xl'],
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.tighter,
      color: colors.text.inverted,
    },
    h1: {
      fontFamily: typography.fontFamily.serif,
      fontSize: typography.fontSize['6xl'],
      fontWeight: typography.fontWeight.bold,
      lineHeight: typography.lineHeight.tight,
      letterSpacing: typography.letterSpacing.tight,
      color: colors.text.primary,
    },
    h2: {
      fontFamily: typography.fontFamily.serif,
      fontSize: typography.fontSize['5xl'],
      fontWeight: typography.fontWeight.semiBold,
      lineHeight: typography.lineHeight.snug,
      letterSpacing: typography.letterSpacing.tight,
      color: colors.text.primary,
    },
    h3: {
      fontFamily: typography.fontFamily.serif,
      fontSize: typography.fontSize['4xl'],
      fontWeight: typography.fontWeight.semiBold,
      lineHeight: typography.lineHeight.normal,
      color: colors.text.primary,
    },
    h4: {
      fontFamily: typography.fontFamily.serif,
      fontSize: typography.fontSize['3xl'],
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight.normal,
      color: colors.text.primary,
    },
    h5: {
      fontFamily: typography.fontFamily.serif,
      fontSize: typography.fontSize['2xl'],
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight.normal,
      color: colors.text.primary,
    },
    h6: {
      fontFamily: typography.fontFamily.serif,
      fontSize: typography.fontSize.xl,
      fontWeight: typography.fontWeight.semiBold,
      lineHeight: typography.lineHeight.relaxed,
      color: colors.text.primary,
    },
    body: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.relaxed,
      color: colors.text.secondary,
    },
    bodyLarge: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.relaxed,
      color: colors.text.secondary,
    },
    bodySmall: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.normal,
      color: colors.text.tertiary,
    },
    caption: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.xs,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.normal,
      color: colors.text.tertiary,
      letterSpacing: typography.letterSpacing.wide,
      textTransform: 'uppercase' as const,
    },
    button: {
      fontFamily: typography.fontFamily.body,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.lineHeight.normal,
      letterSpacing: typography.letterSpacing.wide,
    },
    quote: {
      fontFamily: typography.fontFamily.serif,
      fontSize: typography.fontSize['2xl'],
      fontWeight: typography.fontWeight.light,
      lineHeight: typography.lineHeight.loose,
      fontStyle: 'italic' as const,
      color: colors.text.gold,
    },
    code: {
      fontFamily: typography.fontFamily.mono,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.normal,
      lineHeight: typography.lineHeight.normal,
      color: colors.text.primary,
      backgroundColor: colors.neutral.gray[100],
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
    },
  },
} as const;

// ============================================
// SPACING SYSTEM
// Based on 4px base unit
// ============================================

export const spacing = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',   // 4px
  '2': '0.5rem',    // 8px
  '3': '0.75rem',   // 12px
  '4': '1rem',      // 16px
  '5': '1.25rem',   // 20px
  '6': '1.5rem',    // 24px
  '8': '2rem',      // 32px
  '10': '2.5rem',   // 40px
  '12': '3rem',     // 48px
  '16': '4rem',     // 64px
  '20': '5rem',     // 80px
  '24': '6rem',     // 96px
  '32': '8rem',     // 128px
  '40': '10rem',    // 160px
  '48': '12rem',    // 192px
  '56': '14rem',    // 224px
  '64': '16rem',    // 256px
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  md: '0.25rem',    // 4px
  lg: '0.375rem',   // 6px
  xl: '0.5rem',     // 8px
  '2xl': '0.75rem',  // 12px
  '3xl': '1rem',     // 16px
  full: '9999px',
} as const;

// ============================================
// SHADOWS
// Subtle, elegant shadows that enhance depth without being distracting
// ============================================

export const shadows = {
  none: '0 0 rgba(0, 0, 0, 0)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  gold: '0 4px 14px 0 rgba(199, 154, 59, 0.39)',
  green: '0 4px 14px 0 rgba(47, 125, 99, 0.39)',
  midnight: '0 4px 14px 0 rgba(15, 30, 51, 0.39)',
} as const;

// ============================================
// Z-INDEX SCALE
// ============================================

export const zIndex = {
  auto: 'auto',
  '0': 0,
  '10': 10,
  '20': 20,
  '30': 30,
  '40': 40,
  '50': 50,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modal: 400,
  popover: 500,
  tooltip: 600,
  notification: 700,
  maximum: 9999,
} as const;

// ============================================
// TRANSITIONS & ANIMATIONS
// ============================================

export const transitions = {
  none: 'none',
  fast: '150ms ease',
  normal: '200ms ease',
  slow: '300ms ease',
  slower: '500ms ease',
  spring: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  easeIn: '200ms ease-in',
  easeOut: '200ms ease-out',
  easeInOut: '200ms ease-in-out',
} as const;

export const animations = {
  fadeIn: 'fadeIn 300ms ease-out',
  fadeOut: 'fadeOut 300ms ease-in',
  slideUp: 'slideUp 300ms ease-out',
  slideDown: 'slideDown 300ms ease-out',
  slideLeft: 'slideLeft 300ms ease-out',
  slideRight: 'slideRight 300ms ease-out',
  scaleIn: 'scaleIn 300ms ease-out',
  spin: 'spin 1s linear infinite',
  pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  bounce: 'bounce 1s ease-in-out infinite',
  float: 'float 6s ease-in-out infinite',
  shimmer: 'shimmer 2s linear infinite',
  ripple: 'ripple 2s ease-in-out infinite',
} as const;

// ============================================
// KEYFRAMES
// ============================================

import { keyframes } from '@emotion/react';

export const keyframeAnimations = {
  fadeIn: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
  fadeOut: keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
  `,
  slideUp: keyframes`
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  `,
  slideDown: keyframes`
    from { 
      opacity: 0;
      transform: translateY(-20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  `,
  slideLeft: keyframes`
    from { 
      opacity: 0;
      transform: translateX(20px);
    }
    to { 
      opacity: 1;
      transform: translateX(0);
    }
  `,
  slideRight: keyframes`
    from { 
      opacity: 0;
      transform: translateX(-20px);
    }
    to { 
      opacity: 1;
      transform: translateX(0);
    }
  `,
  scaleIn: keyframes`
    from { 
      opacity: 0;
      transform: scale(0.95);
    }
    to { 
      opacity: 1;
      transform: scale(1);
    }
  `,
  spin: keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `,
  pulse: keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  `,
  bounce: keyframes`
    0%, 100% { 
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% { 
      transform: translateY(-25%);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  `,
  float: keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  `,
  shimmer: keyframes`
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  `,
  ripple: keyframes`
    0%, 100% { 
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 1;
    }
  `,
} as const;

// ============================================
// BREAKPOINTS
// Mobile-first approach
// ============================================

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1920px',
} as const;

// ============================================
// MEDIA QUERIES
// ============================================

export const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
  '3xl': `@media (min-width: ${breakpoints['3xl']})`,
  // Max width queries
  maxXs: `@media (max-width: ${parseInt(breakpoints.xs) - 1}px)`,
  maxSm: `@media (max-width: ${parseInt(breakpoints.sm) - 1}px)`,
  maxMd: `@media (max-width: ${parseInt(breakpoints.md) - 1}px)`,
  maxLg: `@media (max-width: ${parseInt(breakpoints.lg) - 1}px)`,
  maxXl: `@media (max-width: ${parseInt(breakpoints.xl) - 1}px)`,
  // Hoist only
  onlySm: `@media (min-width: ${breakpoints.sm}) and (max-width: ${parseInt(breakpoints.md) - 1}px)`,
  onlyMd: `@media (min-width: ${breakpoints.md}) and (max-width: ${parseInt(breakpoints.lg) - 1}px)`,
  onlyLg: `@media (min-width: ${breakpoints.lg}) and (max-width: ${parseInt(breakpoints.xl) - 1}px)`,
} as const;

// ============================================
// LAYOUT CONSTANTS
// ============================================

export const layout = {
  maxWidth: {
    xs: '20rem',    // 320px
    sm: '24rem',    // 384px
    md: '28rem',    // 448px
    lg: '32rem',    // 512px
    xl: '36rem',    // 576px
    '2xl': '42rem',  // 672px
    '3xl': '48rem',  // 768px
    '4xl': '56rem',  // 896px
    '5xl': '64rem',  // 1024px
    '6xl': '72rem',  // 1152px
    '7xl': '80rem',  // 1280px
    full: '100%',
  },
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  headerHeight: {
    sm: '64px',
    md: '80px',
  },
  sidebarWidth: {
    collapsed: '80px',
    expanded: '280px',
  },
  footerHeight: {
    sm: '120px',
    md: '160px',
  },
} as const;

// ============================================
// THEME CONFIGURATION
// ============================================

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  zIndex,
  transitions,
  animations,
  breakpoints,
  mediaQueries,
  layout,
} as const;

// ============================================
// EMOTION UTILITIES
// ============================================

export const cssUtils = {
  // Flex utilities
  flex: (direction: 'row' | 'column' = 'row', align: string = 'center', justify: string = 'center') => css({
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
  }),
  
  // Grid utilities
  grid: (columns: number = 1, gap: string = spacing['4']) => css({
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap,
  }),
  
  // Text utilities
  text: (size: keyof typeof typography.fontSize = 'base', weight: keyof typeof typography.fontWeight = 'normal', color: string = colors.text.primary) => css({
    fontSize: typography.fontSize[size],
    fontWeight: typography.fontWeight[weight],
    color,
    fontFamily: typography.fontFamily.body,
    lineHeight: typography.lineHeight.normal,
  }),
  
  // Heading utilities
  heading: (level: 1 | 2 | 3 | 4 | 5 | 6 = 1, color: string = colors.text.primary) => {
    const styles = {
      1: typography.textStyles.h1,
      2: typography.textStyles.h2,
      3: typography.textStyles.h3,
      4: typography.textStyles.h4,
      5: typography.textStyles.h5,
      6: typography.textStyles.h6,
    };
    return css({ ...styles[level], color });
  },
  
  // Button utilities
  button: (variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'gold' | 'green' = 'primary') => {
    const variants = {
      primary: {
        backgroundColor: colors.riverMidnight[900],
        color: colors.text.inverted,
        border: `1px solid ${colors.riverMidnight[900]}`,
        '&:hover': {
          backgroundColor: colors.riverMidnight[800],
        },
      },
      secondary: {
        backgroundColor: colors.stoneIvory[900],
        color: colors.text.primary,
        border: `1px solid ${colors.stoneIvory[900]}`,
        '&:hover': {
          backgroundColor: colors.stoneIvory[800],
        },
      },
      tertiary: {
        backgroundColor: 'transparent',
        color: colors.text.primary,
        border: `1px solid ${colors.text.primary}`,
        '&:hover': {
          backgroundColor: colors.riverMidnight[50],
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: colors.text.primary,
        border: 'none',
        '&:hover': {
          backgroundColor: colors.neutral.gray[100],
        },
      },
      gold: {
        backgroundColor: colors.lionGold[600],
        color: colors.text.inverted,
        border: `1px solid ${colors.lionGold[600]}`,
        '&:hover': {
          backgroundColor: colors.lionGold[700],
        },
      },
      green: {
        backgroundColor: colors.healingGreen[700],
        color: colors.text.inverted,
        border: `1px solid ${colors.healingGreen[700]}`,
        '&:hover': {
          backgroundColor: colors.healingGreen[800],
        },
      },
    };
    return css({
      ...typography.textStyles.button,
      padding: `${spacing['3']} ${spacing['6']}`,
      borderRadius: borderRadius.lg,
      cursor: 'pointer',
      transition: transitions.normal,
      fontFamily: typography.fontFamily.body,
      ...variants[variant],
      '&:disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    });
  },
  
  // Card utilities
  card: (variant: 'primary' | 'secondary' | 'elevated' = 'primary') => {
    const variants = {
      primary: {
        backgroundColor: colors.stoneIvory[900],
        border: `1px solid ${colors.stoneIvory[800]}`,
      },
      secondary: {
        backgroundColor: colors.text.inverted,
        border: `1px solid ${colors.neutral.gray[200]}`,
      },
      elevated: {
        backgroundColor: colors.text.inverted,
        border: `1px solid ${colors.neutral.gray[200]}`,
        boxShadow: shadows.lg,
      },
    };
    return css({
      borderRadius: borderRadius.xl,
      padding: spacing['6'],
      transition: transitions.normal,
      '&:hover': {
        boxShadow: shadows.xl,
      },
      ...variants[variant],
    });
  },
  
  // Container utilities
  container: css({
    width: '100%',
    maxWidth: layout.container.lg,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: spacing['4'],
    paddingRight: spacing['4'],
    [mediaQueries.sm]: {
      paddingLeft: spacing['6'],
      paddingRight: spacing['6'],
    },
    [mediaQueries.md]: {
      maxWidth: layout.container.md,
    },
    [mediaQueries.lg]: {
      maxWidth: layout.container.lg,
    },
    [mediaQueries.xl]: {
      maxWidth: layout.container.xl,
    },
    [mediaQueries['2xl']]: {
      maxWidth: layout.container['2xl'],
    },
  }),
  
  // Section utilities
  section: css({
    padding: `${spacing['16']} 0`,
    [mediaQueries.sm]: {
      padding: `${spacing['20']} 0`,
    },
    [mediaQueries.md]: {
      padding: `${spacing['24']} 0`,
    },
  }),
  
  // Link utilities
  link: css({
    color: colors.lionGold[600],
    textDecoration: 'none',
    transition: transitions.normal,
    '&:hover': {
      color: colors.lionGold[700],
      textDecoration: 'underline',
    },
  }),
  
  // Form utilities
  input: css({
    width: '100%',
    padding: `${spacing['3']} ${spacing['4']}`,
    borderRadius: borderRadius.lg,
    border: `1px solid ${colors.neutral.gray[300]}`,
    fontSize: typography.fontSize.base,
    fontFamily: typography.fontFamily.body,
    transition: transitions.normal,
    '&:focus': {
      outline: 'none',
      borderColor: colors.lionGold[600],
      boxShadow: `0 0 0 3px rgba(199, 154, 59, 0.1)`,
    },
    '&::placeholder': {
      color: colors.neutral.gray[400],
    },
    '&:disabled': {
      backgroundColor: colors.neutral.gray[50],
      cursor: 'not-allowed',
    },
  }),
  
  label: css({
    display: 'block',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing['2'],
  }),
} as const;

// ============================================
// EXPORT
// ============================================

export default theme;
export { colors, typography, spacing, borderRadius, shadows, zIndex, transitions, animations, breakpoints, mediaQueries, layout, keyframeAnimations, cssUtils };
