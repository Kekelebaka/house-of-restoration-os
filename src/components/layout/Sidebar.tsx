// ============================================
// HOUSE OF RESTORATION - SIDEBAR COMPONENTS
// Navigation sidebar for admin dashboard
// ============================================

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { colors, spacing, typography, borderRadius, layout, shadows } from '../../styles/designSystem';
import {
  CalendarIcon,
  UserIcon,
  MicrophoneIcon,
  CircleIcon,
  LionIcon,
  BookIcon,
  ChartIcon,
  BuildingIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
  BellIcon,
  LogoutIcon,
} from '../ui/Icons';

// ============================================
// SIDEBAR VARIANTS
// ============================================

type SidebarVariant = 'admin' | 'client';

// ============================================
// SIDEBAR PROPS
// ============================================

interface SidebarProps {
  variant: SidebarVariant;
}

// ============================================
// MAIN SIDEBAR COMPONENT
// ============================================

export const Sidebar: React.FC<SidebarProps> = ({ variant = 'admin' }) => {
  const renderSidebar = () => {
    switch (variant) {
      case 'admin':
        return <AdminSidebar />;
      case 'client':
        return <ClientSidebar />;
      default:
        return <AdminSidebar />;
    }
  };

  return renderSidebar();
};

// ============================================
// ADMIN SIDEBAR (MODULE 09 - Admin Dashboard)
// ============================================

const AdminSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const sidebarWidth = isCollapsed && !isHovered ? layout.sidebarWidth.collapsed : layout.sidebarWidth.expanded;

  const sidebarStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    background: `linear-gradient(180deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[800]} 100%)`,
    color: colors.text.inverted,
    display: 'flex',
    flexDirection: 'column' as const,
    zIndex: 100,
    transition: 'width 0.3s ease',
    overflow: 'hidden',
    boxShadow: shadows.xl,
  };

  const logoStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: isCollapsed && !isHovered ? typography.fontSize.base : typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.lionGold[500],
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing['2'],
    padding: spacing['4'],
    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
    flexShrink: 0,
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  };

  const navStyle = {
    flex: 1,
    padding: spacing['6'],
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing['1'],
  };

  const navItemStyle = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: spacing['3'],
    padding: `${spacing['3']} ${spacing['4']}`,
    borderRadius: borderRadius.lg,
    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    color: isActive ? colors.text.inverted : 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    fontWeight: isActive ? typography.fontWeight.semiBold : typography.fontWeight.normal,
    overflow: 'hidden',
    whiteSpace: 'nowrap' as const,
  });

  const navIconStyle = {
    flexShrink: 0,
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const navLabelStyle = {
    opacity: isCollapsed && !isHovered ? 0 : 1,
    transition: 'opacity 0.2s ease',
    overflow: 'hidden',
  };

  const bottomSectionStyle = {
    padding: spacing['4'],
    borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
  };

  const userProfileStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing['3'],
    padding: spacing['3'],
    borderRadius: borderRadius.lg,
    marginBottom: spacing['4'],
  };

  const userAvatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: colors.lionGold[600],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  };

  const userInfoStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    overflow: 'hidden',
    flex: 1,
  };

  const userNameStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.text.inverted,
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const userRoleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.xs,
    color: colors.neutral.gray[400],
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  // Navigation items for admin
  const mainNavItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: <ChartIcon size={20} /> },
    { path: '/admin/bookings', label: 'Bookings', icon: <CalendarIcon size={20} /> },
    { path: '/admin/voice-notes', label: 'Voice Notes', icon: <MicrophoneIcon size={20} /> },
    { path: '/admin/content', label: 'Content', icon: <BookIcon size={20} /> },
  ];

  const secondaryNavItems = [
    { path: '/admin/kpis', label: 'KPIs', icon: <CircleIcon size={20} /> },
    { path: '/admin/retreats', label: 'Retreats', icon: <LionIcon size={20} color={colors.lionGold[500]} /> },
    { path: '/admin/corporate', label: 'Corporate', icon: <BuildingIcon size={20} /> },
  ];

  const bottomNavItems = [
    { path: '/admin/settings', label: 'Settings', icon: <SettingsIcon size={20} /> },
    { path: '/admin/notifications', label: 'Notifications', icon: <BellIcon size={20} /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Toggle collapse
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <motion.aside
      style={sidebarStyle as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Section */}
      <Link to="/admin" style={logoStyle as React.CSSProperties}>
        <LionIcon size={isCollapsed && !isHovered ? 24 : 28} color={colors.lionGold[500]} />
        {(isHovered || !isCollapsed) && <span>House of Restoration</span>}
      </Link>

      {/* User Profile Section */}
      <div style={bottomSectionStyle}>
        <div style={userProfileStyle}>
          <div style={userAvatarStyle}>
            <span style={{ color: colors.text.inverted, fontWeight: typography.fontWeight.bold }}>
              NM
            </span>
          </div>
          {(isHovered || !isCollapsed) && (
            <div style={userInfoStyle}>
              <span style={userNameStyle}>Nkgono Mamoya</span>
              <span style={userRoleStyle}>Administrator</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav style={navStyle}>
        {/* Main Navigation */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: spacing['1'],
            marginBottom: spacing['4'],
          }}
        >
          <span
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.xs,
              color: colors.neutral.gray[500],
              textTransform: 'uppercase' as const,
              letterSpacing: typography.letterSpacing.wide,
              padding: `0 ${spacing['4']}`,
              marginBottom: spacing['2'],
              whiteSpace: 'nowrap' as const,
              overflow: 'hidden',
            }}
          >
            {(isHovered || !isCollapsed) && 'Main'}
          </span>
          
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={navItemStyle(isActive(item.path)) as React.CSSProperties}
            >
              <span style={navIconStyle}>{item.icon}</span>
              {(isHovered || !isCollapsed) && (
                <span style={navLabelStyle}>{item.label}</span>
              )}
            </Link>
          ))}
        </div>

        {/* Secondary Navigation */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: spacing['1'],
            marginBottom: spacing['4'],
          }}
        >
          <span
            style={{
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.xs,
              color: colors.neutral.gray[500],
              textTransform: 'uppercase' as const,
              letterSpacing: typography.letterSpacing.wide,
              padding: `0 ${spacing['4']}`,
              marginBottom: spacing['2'],
              whiteSpace: 'nowrap' as const,
              overflow: 'hidden',
            }}
          >
            {(isHovered || !isCollapsed) && 'Management'}
          </span>
          
          {secondaryNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={navItemStyle(isActive(item.path)) as React.CSSProperties}
            >
              <span style={navIconStyle}>{item.icon}</span>
              {(isHovered || !isCollapsed) && (
                <span style={navLabelStyle}>{item.label}</span>
              )}
            </Link>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: spacing['4'],
            borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
          }}
        >
          {bottomNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={navItemStyle(isActive(item.path)) as React.CSSProperties}
            >
              <span style={navIconStyle}>{item.icon}</span>
              {(isHovered || !isCollapsed) && (
                <span style={navLabelStyle}>{item.label}</span>
              )}
            </Link>
          ))}

          {/* Logout */}
          <Link
            to="/"
            style={navItemStyle(false) as React.CSSProperties}
            onClick={() => {
              // Handle logout
              localStorage.removeItem('token');
              localStorage.removeItem('user');
            }}
          >
            <span style={navIconStyle}>
              <LogoutIcon size={20} color={colors.ancestralRed[500]} />
            </span>
            {(isHovered || !isCollapsed) && (
              <span style={{ ...navLabelStyle, color: colors.ancestralRed[500] }}>
                Logout
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Collapse Toggle */}
      <div
        style={{
          padding: spacing['2'],
          borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <motion.button
          type="button"
          onClick={toggleCollapse}
          style={{
            background: 'none',
            border: 'none',
            color: colors.neutral.gray[400],
            cursor: 'pointer',
            padding: spacing['2'],
            borderRadius: borderRadius.md,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          whileHover={{ color: colors.text.inverted }}
          whileTap={{ scale: 0.9 }}
        >
          {isCollapsed && !isHovered ? (
            <ChevronRightIcon size={20} />
          ) : (
            <ChevronLeftIcon size={20} />
          )}
        </motion.button>
      </div>
    </motion.aside>
  );
};

// ============================================
// CLIENT SIDEBAR (MODULE 03 - Client Portal)
// ============================================

const ClientSidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const sidebarWidth = isCollapsed && !isHovered ? layout.sidebarWidth.collapsed : layout.sidebarWidth.expanded;

  const sidebarStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    bottom: 0,
    width: sidebarWidth,
    backgroundColor: colors.neutral.white,
    color: colors.text.primary,
    display: 'flex',
    flexDirection: 'column' as const,
    zIndex: 100,
    transition: 'width 0.3s ease',
    overflow: 'hidden',
    boxShadow: shadows.md,
    borderRight: `1px solid ${colors.neutral.gray[200]}`,
  };

  const logoStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: isCollapsed && !isHovered ? typography.fontSize.base : typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.riverMidnight[900],
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing['2'],
    padding: spacing['4'],
    borderBottom: `1px solid ${colors.neutral.gray[200]}`,
    flexShrink: 0,
    transition: 'all 0.3s ease',
    overflow: 'hidden',
  };

  const navStyle = {
    flex: 1,
    padding: spacing['6'],
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing['1'],
  };

  const navItemStyle = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    gap: spacing['3'],
    padding: `${spacing['3']} ${spacing['4']}`,
    borderRadius: borderRadius.lg,
    backgroundColor: isActive ? colors.riverMidnight[50] : 'transparent',
    color: isActive ? colors.riverMidnight[900] : colors.text.secondary,
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    fontWeight: isActive ? typography.fontWeight.semiBold : typography.fontWeight.normal,
    overflow: 'hidden',
    whiteSpace: 'nowrap' as const,
  });

  const navIconStyle = {
    flexShrink: 0,
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: isActive(false) ? colors.riverMidnight[900] : colors.text.tertiary,
  };

  const navLabelStyle = {
    opacity: isCollapsed && !isHovered ? 0 : 1,
    transition: 'opacity 0.2s ease',
    overflow: 'hidden',
  };

  const clientNavItems = [
    { path: '/portal/appointments', label: 'Appointments', icon: <CalendarIcon size={20} /> },
    { path: '/portal/resources', label: 'Resources', icon: <BookIcon size={20} /> },
    { path: '/portal/voice-notes', label: 'Voice Notes', icon: <MicrophoneIcon size={20} /> },
    { path: '/portal/plans', label: 'My Plans', icon: <CircleIcon size={20} color={colors.ancestralRed[600]} /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <motion.aside
      style={sidebarStyle as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Section */}
      <Link to="/portal" style={logoStyle as React.CSSProperties}>
        <LionIcon size={isCollapsed && !isHovered ? 24 : 28} color={colors.lionGold[600]} />
        {(isHovered || !isCollapsed) && <span>My Portal</span>}
      </Link>

      {/* Navigation */}
      <nav style={navStyle}>
        {clientNavItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={navItemStyle(isActive(item.path)) as React.CSSProperties}
          >
            <span style={navIconStyle as React.CSSProperties}>{item.icon}</span>
            {(isHovered || !isCollapsed) && (
              <span style={navLabelStyle}>{item.label}</span>
            )}
          </Link>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div
        style={{
          padding: spacing['2'],
          borderTop: `1px solid ${colors.neutral.gray[200]}`,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <motion.button
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          style={{
            background: 'none',
            border: 'none',
            color: colors.text.tertiary,
            cursor: 'pointer',
            padding: spacing['2'],
            borderRadius: borderRadius.md,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          whileHover={{ color: colors.text.primary }}
          whileTap={{ scale: 0.9 }}
        >
          {isCollapsed && !isHovered ? (
            <ChevronRightIcon size={20} />
          ) : (
            <ChevronLeftIcon size={20} />
          )}
        </motion.button>
      </div>
    </motion.aside>
  );
};

// ============================================
// ICON COMPONENTS FOR SIDEBAR
// ============================================

// Book Icon
const BookIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 19V5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 15H20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Chart Icon
const ChartIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3V18H21" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 7L12 12L17 7L22 17" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Building Icon
const BuildingIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 21V12L12 2L22 12V21H18V15H6V21H2Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 21V15" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2V12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Logout Icon
const LogoutIcon: React.FC<{ size: number; color?: string }> = ({ size = 20, color = 'currentColor' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 17L21 12L16 7" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12H9" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Calendar Icon for sidebar
const CalendarIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth={1.5}/>
      <path d="M16 2V4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"/>
      <path d="M8 2V4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"/>
      <path d="M3 10H21" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round"/>
    </svg>
  );
};

// Microphone Icon for sidebar
const MicrophoneIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 19V23" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 23H16" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Settings Icon for sidebar
const SettingsIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.5}/>
      <path d="M19.4 15.572L16.572 19.4L12 16.828L7.428 19.4L4.6 15.572L7.428 12L4.6 8.428L7.428 4.8L12 7.172L16.572 4.8L19.4 8.428L16.572 12L19.4 15.572Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Bell Icon for sidebar
const BellIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 20H15C15 21.1046 14.1046 22 13 22C11.8954 22 11 21.1046 11 20" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 14V20H17V14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 14C7 9.58172 9.58172 7 12 7C14.4183 7 17 9.58172 17 14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Lion Icon for sidebar
const LionIcon: React.FC<{ size: number; color?: string }> = ({ size = 20, color = 'currentColor' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C10.5 2 9 3.5 9 5C9 6.5 10 8 11 9C12 10 13 10 14 9C15 8 16 6.5 16 5C16 3.5 14.5 2 12 2Z" fill={color}/>
      <path d="M12 5C12 5 13 6 14 6C15 6 16 5 16 5C16 5 15 7 14 8C13 9 12 8 12 8C12 8 11 9 10 8C9 7 8 6 8 6C8 6 9 5 10 5C11 5 12 5 12 5Z" fill={color} opacity={0.8}/>
    </svg>
  );
};

// User Icon for sidebar
const UserIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth={1.5}/>
      <path d="M12 14C14.2091 14 16 15.7909 16 18C16 18.7449 15.8529 19.4417 15.5845 20.0052C15.3161 20.5687 14.9447 21.0239 14.4942 21.3416C14.0437 21.6594 13.5272 21.8335 13.0001 21.8335C12.473 21.8335 11.9565 21.6594 11.506 21.3416C11.0555 21.0239 10.6841 20.5687 10.4157 20.0052C10.1473 19.4417 10 18.7449 10 18C10 15.7909 11.7909 14 14 14" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Chevron Icons for sidebar
const ChevronLeftIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

const ChevronRightIcon: React.FC<{ size: number }> = ({ size = 20 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// Circle Icon for sidebar
const CircleIcon: React.FC<{ size: number; color?: string }> = ({ size = 20, color = 'currentColor' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={1.5} opacity={0.3}/>
      <circle cx="12" cy="12" r="7" stroke={color} strokeWidth={1.5} opacity={0.6}/>
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth={2}/>
    </svg>
  );
};

export default Sidebar;
