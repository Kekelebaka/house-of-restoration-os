// ============================================
// HOUSE OF RESTORATION - HEADER COMPONENTS
// Navigation headers for different user types
// ============================================

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows, layout, mediaQueries } from '../../styles/designSystem';
import { Button, IconButton } from '../ui/Button';
import { WhatsAppIcon, UserIcon, BellIcon, CloseIcon, LionIcon } from '../ui/Icons';
import { WhatsAppButton } from '../ui/Button';

// ============================================
// HEADER VARIANTS
// ============================================

type HeaderVariant = 'public' | 'client' | 'admin';

// ============================================
// HEADER PROPS
// ============================================

interface HeaderProps {
  variant: HeaderVariant;
}

// ============================================
// MAIN HEADER COMPONENT
// ============================================

export const Header: React.FC<HeaderProps> = ({ variant = 'public' }) => {
  const renderHeader = () => {
    switch (variant) {
      case 'public':
        return <PublicHeader />;
      case 'client':
        return <ClientHeader />;
      case 'admin':
        return <AdminHeader />;
      default:
        return <PublicHeader />;
    }
  };

  return renderHeader();
};

// ============================================
// PUBLIC HEADER (MODULE 01 - Website)
// ============================================

const PublicHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: isScrolled ? colors.neutral.white : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? `1px solid ${colors.neutral.gray[200]}` : 'none',
    boxShadow: isScrolled ? shadows.sm : 'none',
    transition: 'all 0.3s ease',
    height: layout.headerHeight.md,
  };

  const containerStyle = {
    maxWidth: layout.container.xl,
    margin: '0 auto',
    padding: `0 ${spacing['4']}`,
    height: '100%',
    [mediaQueries.sm]: {
      padding: `0 ${spacing['6']}`,
    },
  };

  const logoStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: isScrolled ? colors.riverMidnight[900] : colors.stoneIvory[900],
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: spacing['2'],
    letterSpacing: typography.letterSpacing.wide,
  };

  const navLinkStyle = (isActive: boolean) => ({
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    fontWeight: isActive ? typography.fontWeight.semiBold : typography.fontWeight.normal,
    color: isScrolled 
      ? (isActive ? colors.lionGold[600] : colors.text.primary)
      : (isActive ? colors.lionGold[500] : colors.text.inverted),
    textDecoration: 'none',
    padding: `${spacing['2']} ${spacing['3']}`,
    borderRadius: borderRadius.md,
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: spacing['1'],
    position: 'relative' as const,
  });

  const mobileMenuStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.riverMidnight[900],
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column' as const,
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Nkgono' },
    { path: '/services', label: 'Services' },
    { path: '/healing-hands', label: 'Healing Hands' },
    { path: '/retreats', label: 'Retreats' },
    { path: '/corporate', label: 'Corporate' },
    { path: '/wisdom', label: 'Wisdom Library' },
    { path: '/testimonials', label: 'Testimonials' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path === '/' && location.pathname === '') ||
           location.pathname.startsWith(path + '/');
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        style={headerStyle}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div style={containerStyle as React.CSSProperties}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            {/* Logo */}
            <Link to="/" style={logoStyle}>
              <LionIcon size={32} color={isScrolled ? colors.lionGold[600] : colors.lionGold[500]} />
              <span>NKGONO MAMOYA</span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: 'none',
                [mediaQueries.md]: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: spacing['1'],
                },
              } as React.CSSProperties}
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={navLinkStyle(isActive(item.path))}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing['3'],
              }}
            >
              <WhatsAppButton
                phoneNumber="+27631234567"
                variant="outlineGold"
                size="sm"
              >
                Book on WhatsApp
              </WhatsAppButton>

              {/* Mobile Menu Toggle */}
              <IconButton
                icon={isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                variant="ghost"
                size="md"
                ariaLabel="Toggle menu"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={mobileMenuStyle as React.CSSProperties}
          >
            <div
              style={{
                padding: spacing['6'],
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <IconButton
                icon={<CloseIcon color={colors.text.inverted} />}
                variant="ghost"
                size="md"
                ariaLabel="Close menu"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
            <nav
              style={{
                padding: `0 ${spacing['6']}`,
                display: 'flex',
                flexDirection: 'column',
                gap: spacing['2'],
                flex: 1,
                justifyContent: 'center',
              }}
            >
              {navigationItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.indexOf(item) * 0.1 }}
                >
                  <Link
                    to={item.path}
                    style={{
                      ...navLinkStyle(false),
                      color: colors.text.inverted,
                      fontSize: typography.fontSize.lg,
                      padding: `${spacing['3']} ${spacing['4']}`,
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div
              style={{
                padding: spacing['6'],
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <WhatsAppButton
                phoneNumber="+27631234567"
                variant="gold"
                size="md"
              >
                Book on WhatsApp
              </WhatsAppButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind header */}
      <div style={{ height: layout.headerHeight.md }} />
    </>
  );
};

// Menu Icon for mobile
const MenuIcon: React.FC<{ color?: string; size?: number }> = ({
  color = colors.text.primary,
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H21"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// CLIENT HEADER (MODULE 03 - Client Portal)
// ============================================

const ClientHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: colors.neutral.white,
    backdropFilter: 'blur(10px)',
    borderBottom: `1px solid ${colors.neutral.gray[200]}`,
    boxShadow: isScrolled ? shadows.sm : 'none',
    transition: 'all 0.3s ease',
    height: layout.headerHeight.md,
  };

  const containerStyle = {
    maxWidth: layout.container.xl,
    margin: '0 auto',
    padding: `0 ${spacing['4']}`,
    height: '100%',
    [mediaQueries.sm]: {
      padding: `0 ${spacing['6']}`,
    },
  };

  const logoStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.riverMidnight[900],
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: spacing['2'],
  };

  const clientNavItems = [
    { path: '/portal/appointments', label: 'Appointments' },
    { path: '/portal/resources', label: 'Resources' },
    { path: '/portal/voice-notes', label: 'Voice Notes' },
    { path: '/portal/plans', label: 'My Plans' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      <motion.header
        style={headerStyle}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div style={containerStyle as React.CSSProperties}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            {/* Logo */}
            <Link to="/portal" style={logoStyle}>
              <LionIcon size={28} color={colors.lionGold[600]} />
              <span>House of Restoration</span>
            </Link>

            {/* Navigation */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing['2'],
              }}
            >
              {clientNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.sm,
                    fontWeight: isActive(item.path) ? typography.fontWeight.semiBold : typography.fontWeight.normal,
                    color: isActive(item.path) ? colors.lionGold[600] : colors.text.secondary,
                    textDecoration: 'none',
                    padding: `${spacing['2']} ${spacing['3']}`,
                    borderRadius: borderRadius.md,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* User Menu */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing['3'],
              }}
            >
              <IconButton
                icon={<BellIcon color={colors.text.secondary} />}
                variant="ghost"
                size="md"
                ariaLabel="Notifications"
              />
              <IconButton
                icon={<UserIcon color={colors.text.secondary} />}
                variant="ghost"
                size="md"
                ariaLabel="Account"
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Spacer */}
      <div style={{ height: layout.headerHeight.md }} />
    </>
  );
};

// ============================================
// ADMIN HEADER (MODULE 09 - Admin Dashboard)
// ============================================

const AdminHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerStyle = {
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
    backgroundColor: colors.stoneIvory[950],
    borderBottom: `1px solid ${colors.neutral.gray[200]}`,
    boxShadow: isScrolled ? shadows.sm : 'none',
    transition: 'all 0.3s ease',
    height: layout.headerHeight.md,
  };

  const containerStyle = {
    padding: `0 ${spacing['6']}`,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.riverMidnight[900],
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: spacing['2'],
  };

  return (
    <motion.header
      style={headerStyle}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div style={containerStyle}>
        {/* Logo */}
        <Link to="/admin" style={logoStyle}>
          <LionIcon size={28} color={colors.lionGold[600]} />
          <span>Admin Dashboard</span>
        </Link>

        {/* Right Actions */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing['3'],
          }}
        >
          <IconButton
            icon={<BellIcon color={colors.text.secondary} />}
            variant="ghost"
            size="md"
            ariaLabel="Notifications"
          />
          <IconButton
            icon={<UserIcon color={colors.text.secondary} />}
            variant="ghost"
            size="md"
            ariaLabel="Account"
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
