// ============================================
// HOUSE OF RESTORATION - GLOBAL STYLES
// CSS Reset + Base Styles + Typography
// ============================================

import { css, Global } from '@emotion/react';
import { colors, typography, spacing } from './designSystem';

const globalStyles = css`
  /* ============================================
   * CSS CUSTOM PROPERTIES (Variables)
   * ============================================ */
  :root {
    /* Brand Colors */
    --color-river-midnight: ${colors.riverMidnight[900]};
    --color-river-midnight-light: ${colors.riverMidnight[800]};
    --color-river-midnight-dark: ${colors.riverMidnight[950]};
    
    --color-lion-gold: ${colors.lionGold[600]};
    --color-lion-gold-light: ${colors.lionGold[500]};
    --color-lion-gold-dark: ${colors.lionGold[700]};
    
    --color-healing-green: ${colors.healingGreen[700]};
    --color-healing-green-light: ${colors.healingGreen[600]};
    --color-healing-green-dark: ${colors.healingGreen[800]};
    
    --color-stone-ivory: ${colors.stoneIvory[900]};
    --color-stone-ivory-light: ${colors.stoneIvory[950]};
    --color-stone-ivory-dark: ${colors.stoneIvory[800]};
    
    --color-royal-blue: ${colors.royalBlue[600]};
    --color-ancestral-red: ${colors.ancestralRed[600]};
    
    /* Neutral Colors */
    --color-white: ${colors.neutral.white};
    --color-black: ${colors.neutral.black};
    --color-gray-50: ${colors.neutral.gray[50]};
    --color-gray-100: ${colors.neutral.gray[100]};
    --color-gray-200: ${colors.neutral.gray[200]};
    --color-gray-300: ${colors.neutral.gray[300]};
    --color-gray-400: ${colors.neutral.gray[400]};
    --color-gray-500: ${colors.neutral.gray[500]};
    --color-gray-600: ${colors.neutral.gray[600]};
    --color-gray-700: ${colors.neutral.gray[700]};
    --color-gray-800: ${colors.neutral.gray[800]};
    --color-gray-900: ${colors.neutral.gray[900]};
    
    /* Text Colors */
    --text-primary: ${colors.text.primary};
    --text-secondary: ${colors.text.secondary};
    --text-tertiary: ${colors.text.tertiary};
    --text-inverted: ${colors.text.inverted};
    --text-light: ${colors.text.light};
    --text-gold: ${colors.text.gold};
    --text-green: ${colors.text.green};
    
    /* Font Families */
    --font-family-serif: ${typography.fontFamily.serif};
    --font-family-sans: ${typography.fontFamily.sans};
    --font-family-display: ${typography.fontFamily.display};
    --font-family-body: ${typography.fontFamily.body};
    --font-family-mono: ${typography.fontFamily.mono};
    
    /* Font Sizes */
    --font-size-xs: ${typography.fontSize.xs};
    --font-size-sm: ${typography.fontSize.sm};
    --font-size-base: ${typography.fontSize.base};
    --font-size-lg: ${typography.fontSize.lg};
    --font-size-xl: ${typography.fontSize.xl};
    --font-size-2xl: ${typography.fontSize['2xl']};
    --font-size-3xl: ${typography.fontSize['3xl']};
    --font-size-4xl: ${typography.fontSize['4xl']};
    --font-size-5xl: ${typography.fontSize['5xl']};
    --font-size-6xl: ${typography.fontSize['6xl']};
    
    /* Spacing */
    --spacing-px: ${spacing.px};
    --spacing-0: ${spacing['0']};
    --spacing-1: ${spacing['1']};
    --spacing-2: ${spacing['2']};
    --spacing-3: ${spacing['3']};
    --spacing-4: ${spacing['4']};
    --spacing-5: ${spacing['5']};
    --spacing-6: ${spacing['6']};
    --spacing-8: ${spacing['8']};
    --spacing-10: ${spacing['10']};
    --spacing-12: ${spacing['12']};
    --spacing-16: ${spacing['16']};
    --spacing-20: ${spacing['20']};
    --spacing-24: ${spacing['24']};
    
    /* Border Radius */
    --radius-sm: 0.125rem;
    --radius-md: 0.25rem;
    --radius-lg: 0.375rem;
    --radius-xl: 0.5rem;
    --radius-2xl: 0.75rem;
    --radius-3xl: 1rem;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-gold: 0 4px 14px 0 rgba(199, 154, 59, 0.39);
    --shadow-green: 0 4px 14px 0 rgba(47, 125, 99, 0.39);
    
    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-normal: 200ms ease;
    --transition-slow: 300ms ease;
    
    /* Layout */
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    --container-2xl: 1536px;
    --header-height: 80px;
    --footer-height: 160px;
  }

  /* ============================================
   * CSS RESET (Modern Reset)
   * ============================================ */
  
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Remove list styles */
  ol,
  ul {
    list-style: none;
  }

  /* Remove default padding */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    min-height: 100dvh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set shorter line heights on headings */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  /* Make images easier to work with */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* ============================================
   * BASE TYPOGRAPHY
   * ============================================ */
   
  body {
    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    line-height: 1.625;
    color: var(--text-secondary);
    background-color: var(--color-stone-ivory);
  }

  h1,
  .h1 {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-6xl);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: var(--text-primary);
  }

  h2,
  .h2 {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-5xl);
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.025em;
    color: var(--text-primary);
  }

  h3,
  .h3 {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-4xl);
    font-weight: 600;
    line-height: 1.5;
    color: var(--text-primary);
  }

  h4,
  .h4 {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-3xl);
    font-weight: 500;
    line-height: 1.5;
    color: var(--text-primary);
  }

  h5,
  .h5 {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-2xl);
    font-weight: 500;
    line-height: 1.5;
    color: var(--text-primary);
  }

  h6,
  .h6 {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-xl);
    font-weight: 600;
    line-height: 1.625;
    color: var(--text-primary);
  }

  p {
    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    line-height: 1.625;
    color: var(--text-secondary);
  }

  .text-gold {
    color: var(--text-gold);
  }

  .text-green {
    color: var(--text-green);
  }

  .text-primary {
    color: var(--text-primary);
  }

  .text-secondary {
    color: var(--text-secondary);
  }

  .text-tertiary {
    color: var(--text-tertiary);
  }

  /* ============================================
   * BASE ELEMENTS
   * ============================================ */
   
  a {
    color: var(--color-lion-gold);
    text-decoration: none;
    transition: color var(--transition-normal);

    &:hover {
      color: var(--color-lion-gold-dark);
      text-decoration: underline;
    }
  }

  strong {
    font-weight: 600;
    color: var(--text-primary);
  }

  em {
    font-style: italic;
  }

  code {
    font-family: var(--font-family-mono);
    font-size: var(--font-size-sm);
    background-color: var(--color-gray-100);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius-sm);
  }

  blockquote {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-2xl);
    font-weight: 300;
    line-height: 1.8;
    font-style: italic;
    color: var(--color-lion-gold);
    padding-left: var(--spacing-4);
    border-left: 3px solid var(--color-lion-gold);
    margin: var(--spacing-6) 0;
  }

  /* ============================================
   * FOCUS STATES
   * ============================================ */
   
  :focus-visible {
    outline: 2px solid var(--color-lion-gold);
    outline-offset: 2px;
  }

  ::selection {
    background-color: var(--color-lion-gold);
    color: var(--color-white);
  }

  /* ============================================
   * SCROLLBAR STYLING
   * ============================================ */
   
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-gray-100);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-lion-gold);
    border-radius: var(--radius-full);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-lion-gold-dark);
  }

  /* ============================================
   * FORMS
   * ============================================ */
   
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-gray-300);
    font-size: var(--font-size-base);
    line-height: 1.5;
    transition: all var(--transition-normal);

    &::placeholder {
      color: var(--color-gray-400);
    }

    &:focus {
      outline: none;
      border-color: var(--color-lion-gold);
      box-shadow: 0 0 0 3px rgba(199, 154, 59, 0.1);
    }

    &:disabled {
      background-color: var(--color-gray-50);
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }

  button {
    font-family: var(--font-family-body);
    font-size: var(--font-size-base);
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    border-radius: var(--radius-lg);
    transition: all var(--transition-normal);
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus-visible {
      outline: 2px solid var(--color-lion-gold);
      outline-offset: 2px;
    }
  }

  /* ============================================
   * BUTTON VARIANTS
   * ============================================ */
   
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-2);
  }

  .btn-primary {
    background-color: var(--color-river-midnight);
    color: var(--color-stone-ivory);
    border-color: var(--color-river-midnight);

    &:hover:not(:disabled) {
      background-color: var(--color-river-midnight-light);
      border-color: var(--color-river-midnight-light);
    }
  }

  .btn-secondary {
    background-color: var(--color-stone-ivory);
    color: var(--color-river-midnight);
    border-color: var(--color-stone-ivory);

    &:hover:not(:disabled) {
      background-color: var(--color-stone-ivory-dark);
      border-color: var(--color-stone-ivory-dark);
    }
  }

  .btn-gold {
    background-color: var(--color-lion-gold);
    color: var(--color-white);
    border-color: var(--color-lion-gold);

    &:hover:not(:disabled) {
      background-color: var(--color-lion-gold-dark);
      border-color: var(--color-lion-gold-dark);
    }
  }

  .btn-green {
    background-color: var(--color-healing-green);
    color: var(--color-white);
    border-color: var(--color-healing-green);

    &:hover:not(:disabled) {
      background-color: var(--color-healing-green-dark);
      border-color: var(--color-healing-green-dark);
    }
  }

  .btn-ghost {
    background-color: transparent;
    color: var(--color-river-midnight);
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: var(--color-gray-100);
    }
  }

  .btn-outline {
    background-color: transparent;
    color: var(--color-river-midnight);
    border-color: var(--color-river-midnight);

    &:hover:not(:disabled) {
      background-color: var(--color-river-midnight);
      color: var(--color-stone-ivory);
    }
  }

  /* ============================================
   * CARDS
   * ============================================ */
   
  .card {
    background-color: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--spacing-6);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--color-gray-200);
    transition: all var(--transition-normal);

    &:hover {
      box-shadow: var(--shadow-md);
    }
  }

  .card-primary {
    background: linear-gradient(135deg, var(--color-river-midnight) 0%, var(--color-river-midnight-light) 100%);
    color: var(--color-white);
    border: none;

    h1, h2, h3, h4, h5, h6,
    .h1, .h2, .h3, .h4, .h5, .h6 {
      color: var(--color-white);
    }

    p {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .card-gold {
    background: linear-gradient(135deg, var(--color-lion-gold) 0%, var(--color-lion-gold-dark) 100%);
    color: var(--color-white);
    border: none;

    h1, h2, h3, h4, h5, h6,
    .h1, .h2, .h3, .h4, .h5, .h6 {
      color: var(--color-white);
    }

    p {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  .card-green {
    background: linear-gradient(135deg, var(--color-healing-green) 0%, var(--color-healing-green-dark) 100%);
    color: var(--color-white);
    border: none;

    h1, h2, h3, h4, h5, h6,
    .h1, .h2, .h3, .h4, .h5, .h6 {
      color: var(--color-white);
    }

    p {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  /* ============================================
   * UTILITY CLASSES
   * ============================================ */
   
  .container {
    width: 100%;
    max-width: var(--container-lg);
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--spacing-4);
    padding-right: var(--spacing-4);
  }

  @media (min-width: 640px) {
    .container {
      padding-left: var(--spacing-6);
      padding-right: var(--spacing-6);
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: var(--container-md);
    }
  }

  @media (min-width: 1024px) {
    .container {
      max-width: var(--container-lg);
    }
  }

  @media (min-width: 1280px) {
    .container {
      max-width: var(--container-xl);
    }
  }

  @media (min-width: 1536px) {
    .container {
      max-width: var(--container-2xl);
    }
  }

  .section {
    padding: var(--spacing-16) 0;
  }

  @media (min-width: 640px) {
    .section {
      padding: var(--spacing-20) 0;
    }
  }

  @media (min-width: 768px) {
    .section {
      padding: var(--spacing-24) 0;
    }
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .uppercase {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .capitalize {
    text-transform: capitalize;
  }

  .lowercase {
    text-transform: lowercase;
  }

  .font-light {
    font-weight: 300;
  }

  .font-normal {
    font-weight: 400;
  }

  .font-medium {
    font-weight: 500;
  }

  .font-semibold {
    font-weight: 600;
  }

  .font-bold {
    font-weight: 700;
  }

  .italic {
    font-style: italic;
  }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .hidden {
    display: none !important;
  }

  .visible {
    visibility: visible;
  }

  .invisible {
    visibility: hidden;
  }

  .opacity-0 {
    opacity: 0;
  }

  .opacity-50 {
    opacity: 0.5;
  }

  .opacity-100 {
    opacity: 1;
  }

  .pointer-events-none {
    pointer-events: none;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .cursor-not-allowed {
    cursor: not-allowed;
  }

  /* ============================================
   * FLEX & GRID UTILITIES
   * ============================================ */
   
  .flex {
    display: flex;
  }

  .inline-flex {
    display: inline-flex;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .items-center {
    align-items: center;
  }

  .items-start {
    align-items: flex-start;
  }

  .items-end {
    align-items: flex-end;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-start {
    justify-content: flex-start;
  }

  .justify-end {
    justify-content: flex-end;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-around {
    justify-content: space-around;
  }

  .justify-evenly {
    justify-content: space-evenly;
  }

  .gap-0 {
    gap: 0;
  }

  .gap-1 {
    gap: var(--spacing-1);
  }

  .gap-2 {
    gap: var(--spacing-2);
  }

  .gap-3 {
    gap: var(--spacing-3);
  }

  .gap-4 {
    gap: var(--spacing-4);
  }

  .gap-6 {
    gap: var(--spacing-6);
  }

  .gap-8 {
    gap: var(--spacing-8);
  }

  .grid {
    display: grid;
  }

  .grid-cols-1 {
    grid-template-columns: repeat(1, 1fr);
  }

  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-cols-3 {
    grid-template-columns: repeat(3, 1fr);
  }

  .grid-cols-4 {
    grid-template-columns: repeat(4, 1fr);
  }

  /* ============================================
   * SPACING UTILITIES
   * ============================================ */
   
  .m-0 { margin: 0; }
  .m-1 { margin: var(--spacing-1); }
  .m-2 { margin: var(--spacing-2); }
  .m-3 { margin: var(--spacing-3); }
  .m-4 { margin: var(--spacing-4); }
  .m-6 { margin: var(--spacing-6); }
  .m-8 { margin: var(--spacing-8); }

  .mx-0 { margin-left: 0; margin-right: 0; }
  .mx-1 { margin-left: var(--spacing-1); margin-right: var(--spacing-1); }
  .mx-2 { margin-left: var(--spacing-2); margin-right: var(--spacing-2); }
  .mx-3 { margin-left: var(--spacing-3); margin-right: var(--spacing-3); }
  .mx-4 { margin-left: var(--spacing-4); margin-right: var(--spacing-4); }
  .mx-6 { margin-left: var(--spacing-6); margin-right: var(--spacing-6); }
  .mx-8 { margin-left: var(--spacing-8); margin-right: var(--spacing-8); }

  .my-0 { margin-top: 0; margin-bottom: 0; }
  .my-1 { margin-top: var(--spacing-1); margin-bottom: var(--spacing-1); }
  .my-2 { margin-top: var(--spacing-2); margin-bottom: var(--spacing-2); }
  .my-3 { margin-top: var(--spacing-3); margin-bottom: var(--spacing-3); }
  .my-4 { margin-top: var(--spacing-4); margin-bottom: var(--spacing-4); }
  .my-6 { margin-top: var(--spacing-6); margin-bottom: var(--spacing-6); }
  .my-8 { margin-top: var(--spacing-8); margin-bottom: var(--spacing-8); }

  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: var(--spacing-1); }
  .mt-2 { margin-top: var(--spacing-2); }
  .mt-3 { margin-top: var(--spacing-3); }
  .mt-4 { margin-top: var(--spacing-4); }
  .mt-6 { margin-top: var(--spacing-6); }
  .mt-8 { margin-top: var(--spacing-8); }

  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: var(--spacing-1); }
  .mb-2 { margin-bottom: var(--spacing-2); }
  .mb-3 { margin-bottom: var(--spacing-3); }
  .mb-4 { margin-bottom: var(--spacing-4); }
  .mb-6 { margin-bottom: var(--spacing-6); }
  .mb-8 { margin-bottom: var(--spacing-8); }

  .p-0 { padding: 0; }
  .p-1 { padding: var(--spacing-1); }
  .p-2 { padding: var(--spacing-2); }
  .p-3 { padding: var(--spacing-3); }
  .p-4 { padding: var(--spacing-4); }
  .p-6 { padding: var(--spacing-6); }
  .p-8 { padding: var(--spacing-8); }

  /* ============================================
   * BORDER UTILITIES
   * ============================================ */
   
  .border-0 { border-width: 0; }
  .border-1 { border-width: 1px; }
  .border-2 { border-width: 2px; }

  .border-solid { border-style: solid; }
  .border-dashed { border-style: dashed; }
  .border-dotted { border-style: dotted; }

  .border-primary { border-color: var(--color-river-midnight); }
  .border-gold { border-color: var(--color-lion-gold); }
  .border-green { border-color: var(--color-healing-green); }
  .border-gray-200 { border-color: var(--color-gray-200); }
  .border-gray-300 { border-color: var(--color-gray-300); }

  .rounded-none { border-radius: 0; }
  .rounded-sm { border-radius: var(--radius-sm); }
  .rounded-md { border-radius: var(--radius-md); }
  .rounded-lg { border-radius: var(--radius-lg); }
  .rounded-xl { border-radius: var(--radius-xl); }
  .rounded-2xl { border-radius: var(--radius-2xl); }
  .rounded-3xl { border-radius: var(--radius-3xl); }
  .rounded-full { border-radius: var(--radius-full); }

  /* ============================================
   * POSITION UTILITIES
   * ============================================ */
   
  .relative { position: relative; }
  .absolute { position: absolute; }
  .fixed { position: fixed; }
  .sticky { position: sticky; }

  .top-0 { top: 0; }
  .right-0 { right: 0; }
  .bottom-0 { bottom: 0; }
  .left-0 { left: 0; }

  .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }

  /* ============================================
   * Z-INDEX UTILITIES
   * ============================================ */
   
  .z-0 { z-index: 0; }
  .z-10 { z-index: 10; }
  .z-20 { z-index: 20; }
  .z-30 { z-index: 30; }
  .z-40 { z-index: 40; }
  .z-50 { z-index: 50; }
  .z-max { z-index: 9999; }

  /* ============================================
   * WIDTH & HEIGHT UTILITIES
   * ============================================ */
   
  .w-full { width: 100%; }
  .w-1/2 { width: 50%; }
  .w-1/3 { width: 33.333%; }
  .w-2/3 { width: 66.666%; }
  .w-auto { width: auto; }

  .h-full { height: 100%; }
  .h-screen { height: 100vh; height: 100dvh; }
  .h-auto { height: auto; }

  .min-h-screen { min-height: 100vh; min-height: 100dvh; }

  /* ============================================
   * OVERFLOW UTILITIES
   * ============================================ */
   
  .overflow-hidden { overflow: hidden; }
  .overflow-visible { overflow: visible; }
  .overflow-auto { overflow: auto; }
  .overflow-x-hidden { overflow-x: hidden; }
  .overflow-y-auto { overflow-y: auto; }

  /* ============================================
   * ANIMATION UTILITIES
   * ============================================ */
   
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from { 
      opacity: 0;
      transform: translateY(-20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in { animation: fadeIn 300ms ease-out; }
  .animate-slide-up { animation: slideUp 300ms ease-out; }
  .animate-slide-down { animation: slideDown 300ms ease-out; }

  /* ============================================
   * BACKDROP BLUR (For glassmorphism)
   * ============================================ */
   
  .backdrop-blur-sm { backdrop-filter: blur(4px); }
  .backdrop-blur-md { backdrop-filter: blur(8px); }
  .backdrop-blur-lg { backdrop-filter: blur(12px); }

  .bg-blur-sm { 
    background-color: rgba(245, 241, 232, 0.8);
    backdrop-filter: blur(4px);
  }

  .bg-blur-md { 
    background-color: rgba(245, 241, 232, 0.9);
    backdrop-filter: blur(8px);
  }

  /* ============================================
   * DARK MODE SUPPORT
   * ============================================ */
   
  @media (prefers-color-scheme: dark) {
    :root {
      --color-stone-ivory: #1A1A1A;
      --text-primary: #F5F1E8;
      --text-secondary: #D1D5DB;
      --text-tertiary: #9CA3AF;
      --color-gray-100: #374151;
      --color-gray-200: #4B5563;
      --color-gray-300: #6B7280;
    }

    body {
      background-color: #0F1E33;
      color: #F5F1E8;
    }

    .card {
      background-color: #1B3955;
      border-color: #2A4F6F;
    }
  }

  /* ============================================
   * PRINT STYLES
   * ============================================ */
   
  @media print {
    body {
      background-color: white;
      color: black;
    }

    .no-print {
      display: none !important;
    }

    a {
      color: black;
      text-decoration: none;
    }

    .btn {
      border: 1px solid black;
      background: transparent;
    }
  }
`;

// ============================================
// GLOBAL STYLES COMPONENT
// ============================================

interface GlobalStylesProps {
  children: React.ReactNode;
}

export const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      {children}
    </>
  );
};

// ============================================
// STYLE RESET COMPONENT (Alternative)
// ============================================

export const StyleReset: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Global styles={css`
        /* Minimal reset for emotion */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: ${typography.fontFamily.body}; 
          font-size: ${typography.fontSize.base}; 
          line-height: ${typography.lineHeight.relaxed}; 
          color: ${colors.text.secondary}; 
          background-color: ${colors.stoneIvory[900]}; 
        }
        a { color: ${colors.lionGold[600]}; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `} />
      {children}
    </>
  );
};

export default GlobalStyles;
