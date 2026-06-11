// ============================================
// HOUSE OF RESTORATION - FOOTER COMPONENTS
// Footer for different user types
// ============================================

import { Link } from 'react-router-dom';
import { colors, spacing, typography, borderRadius, layout, mediaQueries } from '../../styles/designSystem';
import { WhatsAppIcon, LionIcon, RiverIcon, HandsIcon, CircleIcon } from '../ui/Icons';
import { WhatsAppButton } from '../ui/Button';

// ============================================
// FOOTER VARIANTS
// ============================================

type FooterVariant = 'public' | 'client' | 'admin';

// ============================================
// FOOTER PROPS
// ============================================

interface FooterProps {
  variant: FooterVariant;
}

// ============================================
// MAIN FOOTER COMPONENT
// ============================================

export const Footer: React.FC<FooterProps> = ({ variant = 'public' }) => {
  const renderFooter = () => {
    switch (variant) {
      case 'public':
        return <PublicFooter />;
      case 'client':
        return <ClientFooter />;
      case 'admin':
        return <AdminFooter />;
      default:
        return <PublicFooter />;
    }
  };

  return renderFooter();
};

// ============================================
// PUBLIC FOOTER (MODULE 01 - Website)
// ============================================

const PublicFooter: React.FC = () => {
  const containerStyle = {
    maxWidth: layout.container.xl,
    margin: '0 auto',
    padding: `${spacing['12']} ${spacing['4']}`,
    [mediaQueries.sm]: {
      padding: `${spacing['12']} ${spacing['6']}`,
    },
  };

  const brandStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.stoneIvory[900],
    marginBottom: spacing['4'],
    display: 'flex',
    alignItems: 'center',
    gap: spacing['2'],
  };

  const descriptionStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.neutral.gray[400],
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing['8'],
    maxWidth: '400px',
  };

  const sectionTitleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.stoneIvory[900],
    marginBottom: spacing['4'],
  };

  const linkStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: colors.neutral.gray[400],
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    padding: `${spacing['1.5']} 0`,
    display: 'block',
    borderRadius: borderRadius.md,
  };

  const hoverLinkStyle = {
    ...linkStyle,
    color: colors.lionGold[500],
  };

  const socialLinkStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.stoneIvory[900],
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  };

  const copyrightStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: colors.neutral.gray[500],
    padding: `${spacing['6']} 0`,
    borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
    marginTop: spacing['8'],
  };

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Nkgono' },
    { path: '/services', label: 'Services' },
    { path: '/healing-hands', label: 'Healing Hands' },
    { path: '/retreats', label: 'Ladybrand Retreats' },
    { path: '/corporate', label: 'Corporate Wellness' },
  ];

  const servicesLinks = [
    { path: '/services#private', label: 'Private Guidance' },
    { path: '/services#healing', label: 'Healing Hands' },
    { path: '/services#restoration', label: 'Restoration Sessions' },
    { path: '/services#retreat', label: 'Retreat Experiences' },
    { path: '/services#corporate', label: 'Corporate Wellness' },
  ];

  const wisdomLinks = [
    { path: '/wisdom/relationships', label: 'Relationships' },
    { path: '/wisdom/family', label: 'Family' },
    { path: '/wisdom/healing', label: 'Healing' },
    { path: '/wisdom/purpose', label: 'Purpose' },
    { path: '/wisdom/restoration', label: 'Restoration' },
    { path: '/wisdom/life-lessons', label: 'Life Lessons' },
    { path: '/wisdom/reflections', label: 'Reflections' },
  ];

  const contactLinks = [
    { path: '/contact', label: 'Contact Us' },
    { path: '/book', label: 'Book A Session' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/wisdom', label: 'Wisdom Library' },
  ];

  return (
    <footer
      style={{
        background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[800]} 100%)`,
        color: colors.stoneIvory[900],
      }}
    >
      <div style={containerStyle as React.CSSProperties}>
        {/* Brand Section */}
        <div
          style={{
            marginBottom: spacing['12'],
            textAlign: 'center',
          }}
        >
          <Link to="/" style={brandStyle}>
            <LionIcon size={36} color={colors.lionGold[500]} />
            <span>NKGONO MAMOYA</span>
          </Link>
          <p style={descriptionStyle}>
            A premium House of Restoration helping individuals, families and leaders 
            reconnect with clarity, peace and purpose.
          </p>
          
          {/* WhatsApp CTA */}
          <div style={{ marginTop: spacing['4'] }}>
            <WhatsAppButton
              phoneNumber="+27631234567"
              variant="gold"
              size="md"
            >
              Book on WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        {/* Four Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: spacing['8'],
            marginBottom: spacing['12'],
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(199, 154, 59, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: spacing['3'],
              }}
            >
              <LionIcon size={32} color={colors.lionGold[500]} />
            </div>
            <h4 style={sectionTitleStyle}>Lion Strength</h4>
            <p style={{ ...descriptionStyle, marginBottom: 0, fontSize: typography.fontSize.sm }}>
              Courage and resilience in your journey
            </p>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(47, 125, 99, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: spacing['3'],
              }}
            >
              <RiverIcon size={32} color={colors.healingGreen[500]} />
            </div>
            <h4 style={sectionTitleStyle}>River Renewal</h4>
            <p style={{ ...descriptionStyle, marginBottom: 0, fontSize: typography.fontSize.sm }}>
              Flow and transformation through life
            </p>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(66, 153, 225, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: spacing['3'],
              }}
            >
              <HandsIcon size={32} color={colors.royalBlue[500]} />
            </div>
            <h4 style={sectionTitleStyle}>Healing Hands</h4>
            <p style={{ ...descriptionStyle, marginBottom: 0, fontSize: typography.fontSize.sm }}>
              Compassionate touch and guidance
            </p>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: spacing['3'],
              }}
            >
              <CircleIcon size={32} color={colors.ancestralRed[500]} />
            </div>
            <h4 style={sectionTitleStyle}>Wisdom Guidance</h4>
            <p style={{ ...descriptionStyle, marginBottom: 0, fontSize: typography.fontSize.sm }}>
              Ancient wisdom for modern living
            </p>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: spacing['8'],
            marginBottom: spacing['8'],
          }}
        >
          {/* Quick Links */}
          <div>
            <h4 style={sectionTitleStyle}>Quick Links</h4>
            <nav>
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.lionGold[500];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.neutral.gray[400];
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 style={sectionTitleStyle}>Services</h4>
            <nav>
              {servicesLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.lionGold[500];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.neutral.gray[400];
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Wisdom Library */}
          <div>
            <h4 style={sectionTitleStyle}>Wisdom Library</h4>
            <nav>
              {wisdomLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.lionGold[500];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.neutral.gray[400];
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 style={sectionTitleStyle}>Contact & Legal</h4>
            <nav>
              {contactLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.lionGold[500];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.neutral.gray[400];
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/privacy"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.lionGold[500];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.neutral.gray[400];
                }}
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                style={linkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.lionGold[500];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.neutral.gray[400];
                }}
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            paddingTop: spacing['8'],
            borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
          }}
        >
          {/* Brand Promise */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: spacing['8'],
            }}
          >
            <h3 style={{
              ...sectionTitleStyle,
              fontSize: typography.fontSize['2xl'],
              marginBottom: spacing['2'],
            }}>
              Healing Hands. Ancient Wisdom. Modern Restoration.
            </h3>
            <p style={{
              ...descriptionStyle,
              marginBottom: 0,
              maxWidth: '600px',
            }}>
              We help people move from confusion to clarity. From heaviness to peace. 
              From disconnection to restoration.
            </p>
          </div>

          {/* Contact Info */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: spacing['8'],
              marginBottom: spacing['8'],
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing['2'],
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.sm,
                color: colors.neutral.gray[400],
              }}
            >
              <span>📍</span>
              <span>Ladybrand, Free State, South Africa</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing['2'],
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.sm,
                color: colors.neutral.gray[400],
              }}
            >
              <span>📧</span>
              <a
                href="mailto:hello@nkgonoamamoya.com"
                style={{
                  color: colors.neutral.gray[400],
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.lionGold[500];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.neutral.gray[400];
                }}
              >
                hello@nkgonoamamoya.com
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: spacing['2'],
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.sm,
                color: colors.neutral.gray[400],
              }}
            >
              <span>📞</span>
              <a
                href="tel:+27631234567"
                style={{
                  color: colors.neutral.gray[400],
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.lionGold[500];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.neutral.gray[400];
                }}
              >
                +27 63 123 4567
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <p style={copyrightStyle}>
              © {new Date().getFullYear()} Nkgono Mamoya - House of Restoration. All rights reserved.
            </p>
            <p style={{ ...copyrightStyle, marginTop: 0, fontSize: typography.fontSize.xs }}>
              Designed with Ubuntu. Built with love in South Africa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// CLIENT FOOTER (MODULE 03 - Client Portal)
// ============================================

const ClientFooter: React.FC = () => {
  const containerStyle = {
    maxWidth: layout.container.xl,
    margin: '0 auto',
    padding: `${spacing['8']} ${spacing['4']}`,
    [mediaQueries.sm]: {
      padding: `${spacing['8']} ${spacing['6']}`,
    },
  };

  const footerStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: colors.text.tertiary,
    textAlign: 'center' as const,
  };

  return (
    <footer
      style={{
        backgroundColor: colors.neutral.white,
        borderTop: `1px solid ${colors.neutral.gray[200]}`,
      }}
    >
      <div style={containerStyle as React.CSSProperties}>
        <p style={footerStyle}>
          © {new Date().getFullYear()} Nkgono Mamoya - House of Restoration.
        </p>
        <p style={{ ...footerStyle, marginTop: spacing['1'] }}>
          Your journey to clarity, peace, and restoration.
        </p>
      </div>
    </footer>
  );
};

// ============================================
// ADMIN FOOTER (MODULE 09 - Admin Dashboard)
// ============================================

const AdminFooter: React.FC = () => {
  const containerStyle = {
    padding: `${spacing['6']} ${spacing['6']}`,
  };

  const footerStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: colors.text.tertiary,
    textAlign: 'center' as const,
  };

  return (
    <footer
      style={{
        backgroundColor: colors.stoneIvory[950],
        borderTop: `1px solid ${colors.neutral.gray[200]}`,
      }}
    >
      <div style={containerStyle}>
        <p style={footerStyle}>
          © {new Date().getFullYear()} House of Restoration OS - Nkgono Mamoya
        </p>
        <p style={{ ...footerStyle, marginTop: spacing['1'] }}>
          Admin Dashboard - Managing the House with wisdom and care
        </p>
      </div>
    </footer>
  );
};

export default Footer;
