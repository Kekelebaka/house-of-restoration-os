// ============================================
// HOUSE OF RESTORATION - LAYOUT COMPONENTS
// Main layout wrapper with variants for different user types
// ============================================

import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, layout, typography, mediaQueries } from '../../styles/designSystem';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

// ============================================
// LAYOUT VARIANTS
// ============================================

type LayoutVariant = 'public' | 'client' | 'admin';

// ============================================
// LAYOUT PROPS
// ============================================

interface LayoutProps {
  variant: LayoutVariant;
  children?: React.ReactNode;
}

// ============================================
// MAIN LAYOUT COMPONENT
// ============================================

export const Layout: React.FC<LayoutProps> = ({ variant = 'public', children }) => {
  const renderLayout = () => {
    switch (variant) {
      case 'public':
        return <PublicLayout />;
      case 'client':
        return <ClientLayout />;
      case 'admin':
        return <AdminLayout />;
      default:
        return <PublicLayout />;
    }
  };

  return renderLayout();
};

// ============================================
// PUBLIC LAYOUT (MODULE 01 - Website)
// ============================================

const PublicLayout: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.stoneIvory[900],
      }}
    >
      {/* Public Header */}
      <Header variant="public" />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Outlet />
      </motion.main>

      {/* Public Footer */}
      <Footer variant="public" />
    </div>
  );
};

// ============================================
// CLIENT PORTAL LAYOUT (MODULE 03)
// ============================================

const ClientLayout: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.neutral.gray[50],
      }}
    >
      {/* Client Header */}
      <Header variant="client" />

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: spacing['8'],
          paddingTop: spacing['12'],
        }}
      >
        <div
          style={{
            maxWidth: layout.container.xl,
            margin: '0 auto',
            width: '100%',
          }}
        >
          <Outlet />
        </div>
      </motion.main>

      {/* Client Footer */}
      <Footer variant="client" />
    </div>
  );
};

// ============================================
// ADMIN DASHBOARD LAYOUT (MODULE 09)
// ============================================

const AdminLayout: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        backgroundColor: colors.stoneIvory[950],
      }}
    >
      {/* Admin Sidebar */}
      <Sidebar variant="admin" />

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: layout.sidebarWidth.expanded,
          minHeight: '100vh',
        }}
      >
        {/* Admin Header */}
        <Header variant="admin" />

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{
            flex: 1,
            padding: spacing['8'],
            paddingTop: spacing['12'],
            backgroundColor: colors.stoneIvory[950],
          }}
        >
          <div
            style={{
              maxWidth: `calc(${layout.container.xl} - ${layout.sidebarWidth.expanded})`,
              margin: '0 auto',
              width: '100%',
            }}
          >
            <Outlet />
          </div>
        </motion.main>

        {/* Admin Footer */}
        <Footer variant="admin" />
      </div>
    </div>
  );
};

// ============================================
// RESPONSIVE LAYOUT WRAPPER
// ============================================

interface ResponsiveLayoutProps {
  variant: LayoutVariant;
  children: React.ReactNode;
}

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  variant,
  children,
}) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: layout.container.lg,
        margin: '0 auto',
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
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

// ============================================
// SECTION COMPONENT
// ============================================

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: LayoutVariant;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className,
  variant = 'public',
}) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'client':
        return 'transparent';
      case 'admin':
        return 'transparent';
      default:
        return colors.stoneIvory[900];
    }
  };

  const titleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: spacing['2'],
    letterSpacing: typography.letterSpacing.tight,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    textAlign: 'center' as const,
    maxWidth: '700px',
    margin: '0 auto',
  };

  return (
    <div
      style={{
        padding: `${spacing['16']} 0`,
        backgroundColor: getBackgroundColor(),
      }}
      className={className}
    >
      <ResponsiveLayout variant={variant}>
        {title && <h2 style={titleStyle}>{title}</h2>}
        {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
        <div style={{ marginTop: spacing['10'] }}>{children}</div>
      </ResponsiveLayout>
    </div>
  );
};

// ============================================
// CONTAINER COMPONENT
// ============================================

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: LayoutVariant;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  variant = 'public',
}) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'client':
        return colors.neutral.gray[50];
      case 'admin':
        return colors.stoneIvory[950];
      default:
        return colors.stoneIvory[900];
    }
  };

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: getBackgroundColor(),
      }}
      className={className}
    >
      <ResponsiveLayout variant={variant}>{children}</ResponsiveLayout>
    </div>
  );
};

// ============================================
// PAGE WRAPPER COMPONENT
// ============================================

interface PageWrapperProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  variant?: LayoutVariant;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  subtitle,
  children,
  variant = 'public',
}) => {
  return (
    <Container variant={variant}>
      {title && (
        <Section title={title} subtitle={subtitle} variant={variant}>
          {children}
        </Section>
      )}
      {!title && children}
    </Container>
  );
};

export default Layout;
