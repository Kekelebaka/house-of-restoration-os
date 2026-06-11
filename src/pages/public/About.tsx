// ============================================
// HOUSE OF RESTORATION - ABOUT PAGE
// ============================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, layout } from '../../styles/designSystem';
import { Button, WhatsAppButton } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { LionIcon, RiverIcon, HandsIcon, CircleIcon, ChevronRightIcon } from '../../components/ui/Icons';
import { Section, ResponsiveLayout } from '../../components/layout/Layout';

// ============================================
// ABOUT NKGONO MAMOYA SECTION
// ============================================

const AboutNkgonoSection: React.FC = () => {
  const headingStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: spacing['4'],
    letterSpacing: typography.letterSpacing.tight,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.light,
    color: colors.lionGold[700],
    textAlign: 'center' as const,
    marginBottom: spacing['8'],
    fontStyle: 'italic' as const,
  };

  const contentGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: spacing['8'],
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: borderRadius.xl,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  };

  const textContentStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing['4'],
  };

  const titleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semiBold,
    color: colors.text.primary,
    marginBottom: spacing['2'],
  };

  const descriptionStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    lineHeight: typography.lineHeight.relaxed,
  };

  return (
    <Section
      title="About Nkgono Mamoya"
      subtitle="The Heart of the House of Restoration"
      variant="public"
    >
      <div style={contentGridStyle}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face"
            alt="Nkgono Mamoya - Founder and Custodian of Restoration"
            style={imageStyle as React.CSSProperties}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          style={textContentStyle}
        >
          <h3 style={titleStyle}>A Life of Service</h3>
          <p style={descriptionStyle}>
            Nkgono Mamoya was born into a lineage of healers and wisdom keepers. 
            From a young age, she was called to the path of restoration, guided by 
            the ancient traditions of her ancestors and the deep wisdom of Ubuntu.
          </p>
          <p style={descriptionStyle}>
            With over three decades of experience, Nkgono has helped thousands of 
            individuals, families, and leaders find their way back to wholeness. 
            Her journey has taken her from the rural villages of the Free State to 
            international platforms, always carrying the message that healing is 
            possible for everyone.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

// ============================================
// PHILOSOPHY SECTION
// ============================================

const PhilosophySection: React.FC = () => {
  const headingStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: spacing['8'],
  };

  const pillarsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: spacing['6'],
  };

  const pillarCardStyle = (color: string) => ({
    background: `linear-gradient(135deg, ${color} 0%, ${color} 100%)`,
    border: 'none',
    color: colors.text.inverted,
  });

  const pillars = [
    {
      title: 'Healing is a Birthright',
      description: 'Every human being has the innate capacity for healing. My role is to help you remember and access this power within yourself.',
      icon: <HandsIcon size={40} color={colors.text.inverted} />,
      color: colors.royalBlue[600],
    },
    {
      title: 'Ubuntu Philosophy',
      description: 'I am because we are. We are all connected, and when one heals, we all heal. Your restoration affects the entire community.',
      icon: <CircleIcon size={40} color={colors.text.inverted} />,
      color: colors.ancestralRed[600],
    },
    {
      title: 'Ancient Wisdom, Modern Application',
      description: 'The wisdom of our ancestors is timeless. I bridge the gap between ancient traditions and modern life challenges.',
      icon: <LionIcon size={40} color={colors.text.inverted} />,
      color: colors.lionGold[600],
    },
    {
      title: 'Restoration Over Healing',
      description: 'We don\'t just heal what is broken - we restore what has always been whole. You are not damaged; you are remembering.',
      icon: <RiverIcon size={40} color={colors.text.inverted} />,
      color: colors.healingGreen[700],
    },
  ];

  return (
    <Section variant="public">
      <h2 style={headingStyle}>Nkgono's Philosophy</h2>
      <div style={pillarsGridStyle}>
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Card variant="gold" size="md" style={pillarCardStyle(pillar.color) as React.CSSProperties}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column' as const,
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: spacing['4'],
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {pillar.icon}
                </div>
                <h4 style={{
                  fontFamily: typography.fontFamily.serif,
                  fontSize: typography.fontSize.xl,
                  fontWeight: typography.fontWeight.semiBold,
                  color: colors.text.inverted,
                  marginBottom: spacing['2'],
                }}>
                  {pillar.title}
                </h4>
                <p style={{
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.sm,
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: typography.lineHeight.relaxed,
                }}>
                  {pillar.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// ============================================
// JOURNEY SECTION
// ============================================

const JourneySection: React.FC = () => {
  const headingStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: spacing['8'],
  };

  const timelineStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing['8'],
    maxWidth: '800px',
    margin: '0 auto',
  };

  const timelineItemStyle = {
    display: 'flex',
    gap: spacing['6'],
    alignItems: 'flex-start',
  };

  const yearStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.lionGold[600],
    minWidth: '80px',
    flexShrink: 0,
  };

  const contentStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.text.primary,
    marginBottom: spacing['2'],
  };

  const descriptionStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    lineHeight: typography.lineHeight.relaxed,
  };

  const timelineItems = [
    {
      year: '1985',
      title: 'Called to the Path',
      description: 'Born in Ladybrand, Free State, Nkgono showed early signs of her calling as a healer and wisdom keeper. Her grandmother, a respected traditional healer, recognized the signs and began her training.',
    },
    {
      year: '1998',
      title: 'Formal Training Begins',
      description: 'At the age of 13, Nkgono began her formal training in traditional African healing practices under the guidance of her grandmother and other elders in the community.',
    },
    {
      year: '2005',
      title: 'First Practice',
      description: 'After completing her initial training, Nkgono began her practice, helping members of her community with various physical, emotional, and spiritual challenges.',
    },
    {
      year: '2012',
      title: 'House of Restoration Founded',
      description: 'Recognizing the need for a dedicated space for healing and restoration, Nkgono established the House of Restoration, creating a sanctuary for those seeking transformation.',
    },
    {
      year: '2018',
      title: 'International Recognition',
      description: 'Nkgono\'s work gained international recognition, leading to invitations to speak at global wellness conferences and collaborations with international healers.',
    },
    {
      year: '2024',
      title: 'Digital Transformation',
      description: 'The launch of the House of Restoration Operating System, bringing Nkgono\'s wisdom to a global audience through digital platforms while maintaining the human touch.',
    },
  ];

  return (
    <Section variant="public">
      <h2 style={headingStyle}>Nkgono's Journey</h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={timelineStyle}
      >
        {timelineItems.map((item, index) => (
          <div key={index} style={timelineItemStyle}>
            <div style={yearStyle}>{item.year}</div>
            <div style={contentStyle}>
              <h4 style={titleStyle}>{item.title}</h4>
              <p style={descriptionStyle}>{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

// ============================================
// LEGACY SECTION
// ============================================

const LegacySection: React.FC = () => {
  const headingStyle = {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center' as const,
    marginBottom: spacing['6'],
    letterSpacing: typography.letterSpacing.tight,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    textAlign: 'center' as const,
    maxWidth: '700px',
    margin: '0 auto',
    marginBottom: spacing['10'],
  };

  const quoteStyle = {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.light,
    color: colors.text.primary,
    lineHeight: typography.lineHeight.loose,
    fontStyle: 'italic' as const,
    textAlign: 'center' as const,
    marginBottom: spacing['8'],
  };

  return (
    <Section
      title="Nkgono's Legacy"
      subtitle="Building a Foundation for Future Generations"
      variant="public"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[700]} 100%)`,
          padding: spacing['12'],
          borderRadius: borderRadius.xl,
          color: colors.text.inverted,
        }}
      >
        <h2 style={headingStyle}>The Vision</h2>
        <p style={{ ...subtitleStyle, color: 'rgba(245, 241, 232, 0.8)' as const }}>
          Nkgono Mamoya's vision extends far beyond her lifetime. She is building a 
          foundation that will serve generations to come, ensuring that the wisdom 
          of healing and restoration continues to be accessible to all.
        </p>
        
        <blockquote style={quoteStyle}>
          "I am not here to heal you. I am here to show you how to heal yourself. 
          The wisdom I carry is not mine - it belongs to the ancestors, to the earth, 
          to the universe. My role is to be a vessel, a guide, so that this wisdom can 
          continue to flow long after I am gone."
        </blockquote>
        
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap' as const,
            justifyContent: 'center',
            gap: spacing['4'],
          }}
        >
          <Button variant="gold" size="lg">
            <Link
              to="/services"
              style={{
                color: colors.text.inverted,
                textDecoration: 'none',
              }}
            >
              Explore Services
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" style={{
            color: colors.text.inverted,
            borderColor: colors.text.inverted,
          }}>
            <Link
              to="/book"
              style={{
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Book A Session
            </Link>
          </Button>
        </div>
      </motion.div>
    </Section>
  );
};

// ============================================
// MAIN ABOUT PAGE COMPONENT
// ============================================

const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutNkgonoSection />
      <PhilosophySection />
      <JourneySection />
      <LegacySection />
    </div>
  );
};

export default AboutPage;
