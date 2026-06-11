// ============================================
// HOUSE OF RESTORATION - HOME PAGE (MODULE 01)
// Main landing page for the public website
// ============================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows, layout, mediaQueries } from '../../styles/designSystem';
import { Button, WhatsAppButton } from '../../components/ui/Button';
import { Card, ImageCard, TestimonialCard, PricingCard } from '../../components/ui/Card';
import { LionIcon, RiverIcon, HandsIcon, CircleIcon, WhatsAppIcon, ChevronRightIcon } from '../../components/ui/Icons';
import { Section, Container, ResponsiveLayout } from '../../components/layout/Layout';

// ============================================
// HERO SECTION
// ============================================

const HeroSection: React.FC = () => {
  const containerStyle = {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[700]} 50%, ${colors.riverMidnight[900]} 100%)`,
    overflow: 'hidden',
  };

  const contentStyle = {
    textAlign: 'center' as const,
    color: colors.text.inverted,
    zIndex: 2,
    position: 'relative' as const,
    maxWidth: '900px',
  };

  const headlineStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['7xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tighter,
    marginBottom: spacing['8'],
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  };

  const subheadlineStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.light,
    lineHeight: typography.lineHeight.loose,
    color: 'rgba(245, 241, 232, 0.9)',
    marginBottom: spacing['10'],
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const ctaButtonStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    padding: `${spacing['4']} ${spacing['8']}`,
    borderRadius: borderRadius.lg,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={containerStyle as React.CSSProperties}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3,
        }}
      />

      <ResponsiveLayout variant="public">
        <motion.div
          style={contentStyle}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          {/* Brand Symbols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: spacing['6'],
              marginBottom: spacing['10'],
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LionIcon size={48} color={colors.lionGold[500]} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              <RiverIcon size={48} color={colors.healingGreen[500]} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <HandsIcon size={48} color={colors.royalBlue[500]} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            >
              <CircleIcon size={48} color={colors.ancestralRed[500]} />
            </motion.div>
          </motion.div>

          <h1 style={headlineStyle as React.CSSProperties}>
            Healing Hands.<br />
            Ancient Wisdom.<br />
            Modern Restoration.
          </h1>

          <p style={subheadlineStyle}>
            A premium House of Restoration helping individuals, families and leaders 
            reconnect with clarity, peace and purpose.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              justifyContent: 'center',
              gap: spacing['4'],
            }}
          >
            <WhatsAppButton
              phoneNumber="+27631234567"
              message="Hello Nkgono, I would like to book a session. Please let me know your availability."
              variant="gold"
              size="lg"
              style={ctaButtonStyle}
            >
              Book on WhatsApp
            </WhatsAppButton>
            
            <Button
              variant="outline"
              size="lg"
              style={{
                ...ctaButtonStyle,
                color: colors.text.inverted,
                borderColor: colors.text.inverted,
              }}
            >
              <Link
                to="/book"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                View Booking Options
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </ResponsiveLayout>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: spacing['8'],
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          gap: spacing['2'],
          color: colors.text.inverted,
        }}
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            fontFamily: typography.fontFamily.body,
            fontSize: typography.fontSize.sm,
            opacity: 0.7,
          }}
        >
          Scroll to explore
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRightIcon
            size={24}
            color={colors.text.inverted}
            style={{
              transform: 'rotate(90deg)',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// FOUNDER SECTION
// ============================================

const FounderSection: React.FC = () => {
  const sectionStyle = {
    padding: `${spacing['20']} 0`,
    backgroundColor: colors.stoneIvory[900],
  };

  const headingStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: spacing['4'],
    letterSpacing: typography.letterSpacing.tight,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    textAlign: 'center' as const,
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: spacing['12'],
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    textAlign: 'center',
    gap: spacing['6'],
  };

  const imageStyle = {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: `4px solid ${colors.lionGold[600]}`,
    boxShadow: shadows.gold,
  };

  const nameStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.riverMidnight[900],
    marginBottom: spacing['1'],
    letterSpacing: typography.letterSpacing.wide,
  };

  const titleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.normal,
    color: colors.lionGold[700],
    fontStyle: 'italic' as const,
    marginBottom: spacing['2'],
  };

  const bioStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    lineHeight: typography.lineHeight.relaxed,
    maxWidth: '600px',
  };

  return (
    <div style={sectionStyle}>
      <ResponsiveLayout variant="public">
        <h2 style={headingStyle}>Meet Nkgono Mamoya</h2>
        <p style={subtitleStyle}>
          The heart and soul of the House of Restoration. 
          A visionary healer, wisdom keeper, and guide on the journey to restoration.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={cardStyle}
        >
          <img
            src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face"
            alt="Nkgono Mamoya - Founder of House of Restoration"
            style={imageStyle as React.CSSProperties}
          />
          <div>
            <h3 style={nameStyle}>Nkgono Mamoya</h3>
            <p style={titleStyle}>Founder & Custodian of Restoration</p>
            <p style={bioStyle}>
              Nkgono Mamoya is a revered healer, spiritual guide, and keeper of ancient wisdom. 
              With decades of experience in traditional African healing practices, she has 
              dedicated her life to helping others find clarity, peace, and restoration. 
              Her unique blend of ancient wisdom and modern understanding creates a 
              powerful space for transformation.
            </p>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            marginTop: spacing['12'],
            padding: spacing['8'],
            backgroundColor: colors.neutral.white,
            borderRadius: borderRadius.xl,
            border: `1px solid ${colors.neutral.gray[200]}`,
            boxShadow: shadows.sm,
          }}
        >
          <h3 style={{
            fontFamily: typography.fontFamily.serif,
            fontSize: typography.fontSize['2xl'],
            fontWeight: typography.fontWeight.semiBold,
            color: colors.text.primary,
            textAlign: 'center' as const,
            marginBottom: spacing['6'],
          }}>
            My Philosophy
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: spacing['6'],
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                textAlign: 'center',
                gap: spacing['3'],
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: colors.lionGold[50],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LionIcon size={32} color={colors.lionGold[600]} />
              </div>
              <h4 style={{
                fontFamily: typography.fontFamily.serif,
                fontSize: typography.fontSize.lg,
                fontWeight: typography.fontWeight.semiBold,
                color: colors.text.primary,
              }}>
                Healing is Possible
              </h4>
              <p style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.sm,
                color: colors.text.secondary,
              }}>
                Every person has the capacity for healing. My role is to guide you to your own inner wisdom.
              </p>
            </div>
            
            <div
              style={{
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                textAlign: 'center',
                gap: spacing['3'],
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: colors.healingGreen[50],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <RiverIcon size={32} color={colors.healingGreen[600]} />
              </div>
              <h4 style={{
                fontFamily: typography.fontFamily.serif,
                fontSize: typography.fontSize.lg,
                fontWeight: typography.fontWeight.semiBold,
                color: colors.text.primary,
              }}>
                Ubuntu Connection
              </h4>
              <p style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.sm,
                color: colors.text.secondary,
              }}>
                We are all connected. When one heals, we all heal. Your restoration affects the whole.
              </p>
            </div>
            
            <div
              style={{
                display: 'flex',
                flexDirection: 'column' as const,
                alignItems: 'center',
                textAlign: 'center',
                gap: spacing['3'],
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: colors.royalBlue[50],
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <HandsIcon size={32} color={colors.royalBlue[600]} />
              </div>
              <h4 style={{
                fontFamily: typography.fontFamily.serif,
                fontSize: typography.fontSize.lg,
                fontWeight: typography.fontWeight.semiBold,
                color: colors.text.primary,
              }}>
                Ancient Wisdom
              </h4>
              <p style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.sm,
                color: colors.text.secondary,
              }}>
                The answers you seek have always been within. I help you remember what you already know.
              </p>
            </div>
          </div>
        </motion.div>
      </ResponsiveLayout>
    </div>
  );
};

// ============================================
// FOUR PILLARS SECTION
// ============================================

const FourPillarsSection: React.FC = () => {
  const sectionStyle = {
    padding: `${spacing['20']} 0`,
    backgroundColor: colors.neutral.white,
  };

  const headingStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: spacing['4'],
    letterSpacing: typography.letterSpacing.tight,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    textAlign: 'center' as const,
    maxWidth: '700px',
    margin: '0 auto',
    marginBottom: spacing['12'],
  };

  const pillars = [
    {
      name: 'Healing Hands',
      icon: <HandsIcon size={48} color={colors.royalBlue[600]} />,
      description: 'Experience the transformative power of healing touch and guidance',
      color: colors.royalBlue[50],
      link: '/healing-hands',
    },
    {
      name: 'River Renewal',
      icon: <RiverIcon size={48} color={colors.healingGreen[600]} />,
      description: 'Flow with the rhythm of life and find renewal in every moment',
      color: colors.healingGreen[50],
      link: '/retreats',
    },
    {
      name: 'Lion Strength',
      icon: <LionIcon size={48} color={colors.lionGold[600]} />,
      description: 'Discover your inner courage and step into your personal power',
      color: colors.lionGold[50],
      link: '/about',
    },
    {
      name: 'Wisdom Guidance',
      icon: <CircleIcon size={48} color={colors.ancestralRed[600]} />,
      description: 'Receive ancient wisdom tailored to your modern life journey',
      color: colors.ancestralRed[50],
      link: '/wisdom',
    },
  ];

  return (
    <div style={sectionStyle}>
      <ResponsiveLayout variant="public">
        <h2 style={headingStyle}>The Four Pillars</h2>
        <p style={subtitleStyle}>
          These four pillars form the foundation of the House of Restoration. 
          Each represents a pathway to wholeness and balance.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: spacing['8'],
          }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <Card
                variant="primary"
                size="lg"
                isHoverable
                style={{
                  borderTop: `4px solid ${colors[pillar.name === 'Healing Hands' ? 'royalBlue' : 
                    pillar.name === 'River Renewal' ? 'healingGreen' :
                    pillar.name === 'Lion Strength' ? 'lionGold' : 'ancestralRed'][600]}`,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column' as const,
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: spacing['6'],
                  }}
                >
                  <div
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: pillar.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <h3 style={{
                    fontFamily: typography.fontFamily.serif,
                    fontSize: typography.fontSize['2xl'],
                    fontWeight: typography.fontWeight.semiBold,
                    color: colors.text.primary,
                    marginBottom: spacing['2'],
                  }}>
                    {pillar.name}
                  </h3>
                  <p style={{
                    fontFamily: typography.fontFamily.body,
                    fontSize: typography.fontSize.base,
                    color: colors.text.secondary,
                    lineHeight: typography.lineHeight.relaxed,
                  }}>
                    {pillar.description}
                  </p>
                  <Button
                    variant="outlineGold"
                    size="md"
                    rightIcon={<ChevronRightIcon size={18} color={colors.lionGold[600]} />}
                  >
                    <Link
                      to={pillar.link}
                      style={{
                        color: colors.lionGold[600],
                        textDecoration: 'none',
                      }}
                    >
                      Explore
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </ResponsiveLayout>
    </div>
  );
};

// ============================================
// SERVICES SECTION
// ============================================

const ServicesSection: React.FC = () => {
  const sectionStyle = {
    padding: `${spacing['20']} 0`,
    background: `linear-gradient(135deg, ${colors.stoneIvory[950]} 0%, ${colors.stoneIvory[900]} 100%)`,
  };

  const headingStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: spacing['4'],
    letterSpacing: typography.letterSpacing.tight,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    textAlign: 'center' as const,
    maxWidth: '700px',
    margin: '0 auto',
    marginBottom: spacing['12'],
  };

  const services = [
    {
      name: 'Private Guidance',
      description: 'One-on-one sessions with Nkgono for personalized healing and guidance',
      duration: '60-90 minutes',
      icon: <UserIcon size={32} color={colors.riverMidnight[900]} />,
    },
    {
      name: 'Healing Hands',
      description: 'Energy healing and restoration sessions to balance mind, body, and spirit',
      duration: '45-60 minutes',
      icon: <HandsIcon size={32} color={colors.royalBlue[600]} />,
    },
    {
      name: 'Restoration Sessions',
      description: 'Deep healing sessions to address trauma, blockages, and emotional wounds',
      duration: '90-120 minutes',
      icon: <CircleIcon size={32} color={colors.ancestralRed[600]} />,
    },
    {
      name: 'Retreat Experiences',
      description: 'Immersive multi-day retreats for deep transformation and renewal',
      duration: '2-7 days',
      icon: <RiverIcon size={32} color={colors.healingGreen[600]} />,
    },
    {
      name: 'Corporate Wellness',
      description: 'Executive restoration, leadership reflection, and team alignment sessions',
      duration: 'Custom',
      icon: <LionIcon size={32} color={colors.lionGold[600]} />,
    },
  ];

  return (
    <div style={sectionStyle}>
      <ResponsiveLayout variant="public">
        <h2 style={headingStyle}>Our Services</h2>
        <p style={subtitleStyle}>
          Each service is designed to meet you where you are and guide you to where you want to be. 
          All sessions are conducted with the utmost respect for your journey.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: spacing['6'],
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card variant="secondary" size="md" isHoverable>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: spacing['4'],
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: borderRadius.lg,
                      backgroundColor: colors.neutral.gray[50],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: typography.fontFamily.serif,
                      fontSize: typography.fontSize.xl,
                      fontWeight: typography.fontWeight.semiBold,
                      color: colors.text.primary,
                      marginBottom: spacing['2'],
                    }}>
                      {service.name}
                    </h3>
                    <p style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.sm,
                      color: colors.text.secondary,
                      lineHeight: typography.lineHeight.relaxed,
                      marginBottom: spacing['3'],
                    }}>
                      {service.description}
                    </p>
                    <span style={{
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.xs,
                      color: colors.lionGold[600],
                      fontWeight: typography.fontWeight.medium,
                      letterSpacing: typography.letterSpacing.wide,
                      textTransform: 'uppercase' as const,
                    }}>
                      {service.duration}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            marginTop: spacing['12'],
            textAlign: 'center' as const,
          }}
        >
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ChevronRightIcon size={20} color={colors.text.inverted} />}
          >
            <Link
              to="/services"
              style={{
                color: colors.text.inverted,
                textDecoration: 'none',
              }}
            >
              View All Services
            </Link>
          </Button>
        </motion.div>
      </ResponsiveLayout>
    </div>
  );
};

// ============================================
// TESTIMONIALS SECTION
// ============================================

const TestimonialsSection: React.FC = () => {
  const sectionStyle = {
    padding: `${spacing['20']} 0`,
    backgroundColor: colors.neutral.white,
  };

  const headingStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: spacing['4'],
    letterSpacing: typography.letterSpacing.tight,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    textAlign: 'center' as const,
    maxWidth: '700px',
    margin: '0 auto',
    marginBottom: spacing['12'],
  };

  const testimonials = [
    {
      quote: 'My session with Nkgono was transformative. I arrived feeling lost and left with a clarity I hadn\'t felt in years. Her wisdom and presence created a space where true healing could begin.',
      author: 'Thando Mokoena',
      role: 'Entrepreneur, Johannesburg',
      rating: 5,
    },
    {
      quote: 'The retreat experience was life-changing. Being in the presence of Nkgono and the community, I felt a deep sense of belonging and restoration. I highly recommend this to anyone seeking peace.',
      author: 'Lerato Nkosi',
      role: 'Teacher, Cape Town',
      rating: 5,
    },
    {
      quote: 'Nkgono\'s guidance has been instrumental in our leadership team\'s development. Her unique approach to corporate wellness has transformed how we work together and make decisions.',
      author: 'Sipho Dlamini',
      role: 'CEO, Financial Services',
      rating: 5,
    },
  ];

  return (
    <div style={sectionStyle}>
      <ResponsiveLayout variant="public">
        <h2 style={headingStyle}>Stories of Restoration</h2>
        <p style={subtitleStyle}>
          These are the voices of those who have walked the path of restoration with Nkgono. 
          Each story is a testament to the power of healing and the wisdom of ancient practices.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: spacing['8'],
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
                variant="secondary"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          style={{
            marginTop: spacing['12'],
            textAlign: 'center' as const,
          }}
        >
          <Button
            variant="secondary"
            size="lg"
            rightIcon={<ChevronRightIcon size={20} color={colors.riverMidnight[900]} />}
          >
            <Link
              to="/testimonials"
              style={{
                color: colors.riverMidnight[900],
                textDecoration: 'none',
              }}
            >
              Read More Testimonials
            </Link>
          </Button>
        </motion.div>
      </ResponsiveLayout>
    </div>
  );
};

// ============================================
// CTA SECTION
// ============================================

const CTASection: React.FC = () => {
  const sectionStyle = {
    padding: `${spacing['20']} 0`,
    background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[700]} 100%)`,
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle = {
    position: 'relative',
    zIndex: 2,
  };

  const headingStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.inverted,
    textAlign: 'center' as const,
    marginBottom: spacing['4'],
    letterSpacing: typography.letterSpacing.tight,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    color: 'rgba(245, 241, 232, 0.8)',
    textAlign: 'center' as const,
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: spacing['8'],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={sectionStyle as React.CSSProperties}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0-35c-9.359 0-17 7.641-17 17s7.641 17 17 17 17-7.641 17-17-7.641-17-17-17z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <ResponsiveLayout variant="public">
        <div style={containerStyle}>
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={headingStyle as React.CSSProperties}
          >
            Ready to Begin Your Journey?
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={subtitleStyle}
          >
            Whether you're seeking clarity, healing, or connection, Nkgono Mamoya and the 
            House of Restoration are here to support you. Every journey begins with a single step.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap' as const,
              justifyContent: 'center',
              gap: spacing['4'],
            }}
          >
            <WhatsAppButton
              phoneNumber="+27631234567"
              message="Hello Nkgono, I would like to book a session. Please let me know your availability."
              variant="gold"
              size="lg"
            >
              Book on WhatsApp
            </WhatsAppButton>
            
            <Button
              variant="outline"
              size="lg"
              style={{
                color: colors.text.inverted,
                borderColor: colors.text.inverted,
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.lg,
                fontWeight: typography.fontWeight.medium,
                padding: `${spacing['4']} ${spacing['8']}`,
                borderRadius: borderRadius.lg,
              }}
            >
              <Link
                to="/book"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                View Booking Options
              </Link>
            </Button>
          </motion.div>
        </div>
      </ResponsiveLayout>
    </motion.div>
  );
};

// ============================================
// MAIN HOME PAGE COMPONENT
// ============================================

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FounderSection />
      <FourPillarsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
