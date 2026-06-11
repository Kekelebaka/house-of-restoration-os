// ============================================
// HOUSE OF RESTORATION - PLACEHOLDER PAGE COMPONENT
// Generic placeholder for pages not yet implemented
// ============================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, layout } from '../../styles/designSystem';
import { Button } from '../../components/ui/Button';
import { Section, ResponsiveLayout } from '../../components/layout/Layout';
import { LionIcon } from '../../components/ui/Icons';

// ============================================
// PLACEHOLDER PAGE PROPS
// ============================================

interface PlaceholderPageProps {
  title: string;
  subtitle?: string;
  description?: string;
  comingSoon?: boolean;
  children?: React.ReactNode;
}

// ============================================
// PLACEHOLDER PAGE COMPONENT
// ============================================

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  subtitle = 'Coming Soon',
  description = 'This page is under construction. The House of Restoration is being built with care and intention.',
  comingSoon = true,
  children,
}) => {
  const containerStyle = {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.stoneIvory[900],
  };

  const contentStyle = {
    textAlign: 'center' as const,
    maxWidth: '600px',
    width: '100%',
  };

  const titleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing['4'],
    letterSpacing: typography.letterSpacing.tight,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.xl,
    color: colors.lionGold[600],
    marginBottom: spacing['6'],
    fontWeight: typography.fontWeight.medium,
  };

  const descriptionStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing['8'],
  };

  const iconContainerStyle = {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: colors.riverMidnight[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    marginBottom: spacing['8'],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={containerStyle as React.CSSProperties}
    >
      <ResponsiveLayout variant="public">
        <motion.div
          style={contentStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div style={iconContainerStyle}>
            <LionIcon size={60} color={colors.lionGold[600]} />
          </div>
          
          <h1 style={titleStyle}>{title}</h1>
          
          {comingSoon && <p style={subtitleStyle}>{subtitle}</p>}
          
          <p style={descriptionStyle}>{description}</p>

          {children && (
            <div style={{ marginBottom: spacing['8'] }}>
              {children}
            </div>
          )}

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              justifyContent: 'center',
              gap: spacing['4'],
            }}
          >
            <Button variant="primary" size="lg">
              <Link
                to="/"
                style={{
                  color: colors.text.inverted,
                  textDecoration: 'none',
                }}
              >
                Return Home
              </Link>
            </Button>
            
            <Button variant="outlineGold" size="lg">
              <Link
                to="/book"
                style={{
                  color: colors.lionGold[600],
                  textDecoration: 'none',
                }}
              >
                Book A Session
              </Link>
            </Button>
          </div>
        </motion.div>
      </ResponsiveLayout>
    </motion.div>
  );
};

export default PlaceholderPage;
