// ============================================
// HOUSE OF RESTORATION - CORPORATE SERVICES DETAIL (MODULE 06)
// ============================================

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { ResponsiveLayout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const servicesData: Record<string, any> = {
  'executive-restoration': {
    icon: '🦁', title: 'Executive Restoration',
    subtitle: 'Personalised healing for leaders who carry the weight of organisations',
    description: 'Senior leaders face unique pressures that compound over years. The Executive Restoration programme is an intensive, confidential one-on-one engagement with Nkgono Mamoya, designed to help leaders reconnect with their core purpose, release accumulated stress, and emerge with renewed clarity and emotional resilience.',
    whatItIncludes: ['Initial 2-hour deep-dive assessment', 'Personalised restoration plan', '4 x 90-minute private sessions', '24/7 WhatsApp support during programme', 'Post-programme follow-up session', 'Executive wellness toolkit'],
    idealFor: ['CEOs and Managing Directors', 'C-Suite executives facing burnout', 'Leaders navigating major transitions', 'Founders losing passion for their business'],
    process: [
      { step: 1, title: 'Discovery Call', description: 'A confidential 30-minute call to understand your needs and determine fit.', duration: '30 min' },
      { step: 2, title: 'Deep-Dive Assessment', description: 'A comprehensive 2-hour session exploring your personal and professional landscape.', duration: '2 hours' },
      { step: 3, title: 'Restoration Plan', description: 'A personalised plan tailored to your unique challenges and goals.', duration: 'Created within 48h' },
      { step: 4, title: 'Transformation Sessions', description: 'Four intensive sessions over 6-8 weeks, each building on the last.', duration: '90 min each' },
      { step: 5, title: 'Integration & Follow-Up', description: 'A follow-up session to ensure lasting transformation.', duration: '60 min' },
    ],
    price: 'R15,000 per session | R55,000 full programme',
  },
  'burnout-prevention': {
    icon: '🔥', title: 'Burnout Prevention Program',
    subtitle: 'Protect your most valuable asset — your people',
    description: 'Burnout does not happen overnight. It is the accumulation of unrelieved stress, unclear boundaries, and disconnection from purpose. This programme identifies burnout early and provides structured interventions at individual, team, and organisational levels.',
    whatItIncludes: ['Individual burnout assessments for all participants', 'Team workshops (half-day or full-day)', 'Manager training on recognising burnout signs', 'Ongoing monthly check-ins for 6 months', 'Organisational wellness report', 'Actionable recommendations for culture change'],
    idealFor: ['Teams experiencing high turnover', 'Organisations in high-pressure industries', 'Companies post-restructuring', 'Leaders who want to prevent burnout proactively'],
    process: [
      { step: 1, title: 'Organisational Assessment', description: 'Survey and interviews to understand current burnout levels across the organisation.', duration: '2 weeks' },
      { step: 2, title: 'Individual Assessments', description: 'Confidential one-on-one assessments for each team member.', duration: '30 min each' },
      { step: 3, title: 'Team Workshop', description: 'An immersive workshop addressing burnout prevention and team resilience.', duration: '4-8 hours' },
      { step: 4, title: 'Manager Training', description: 'Equipping managers to recognise and respond to burnout indicators.', duration: '3 hours' },
      { step: 5, title: 'Ongoing Support', description: 'Monthly check-ins and adjustments to the wellness programme.', duration: '6 months' },
    ],
    price: 'From R85,000 per programme (based on team size)',
  },
  'leadership-reflection': {
    icon: '🪞', title: 'Leadership Reflection',
    subtitle: 'Align your leadership team from the inside out',
    description: 'When leadership teams are misaligned, the entire organisation suffers. This programme creates a safe space for leaders to reflect on their values, address unresolved tensions, and emerge with a shared vision and stronger bonds.',
    whatItIncludes: ['Pre-session interviews with each leader', 'Facilitated reflection session', 'Conflict resolution mediation', 'Shared values and vision exercise', 'Post-session action plan', '30-day follow-up check-in'],
    idealFor: ['Leadership teams experiencing conflict', 'New leadership teams building trust', 'Organisations going through transformation', 'Boards seeking alignment'],
    process: [
      { step: 1, title: 'Pre-Session Interviews', description: 'Confidential conversations with each leader to understand the landscape.', duration: '45 min each' },
      { step: 2, title: 'Reflection Session', description: 'A full-day facilitated session combining healing, reflection, and strategy.', duration: '8 hours' },
      { step: 3, title: 'Action Planning', description: 'Concrete commitments and accountability structures.', duration: 'Part of session' },
      { step: 4, title: 'Follow-Up', description: 'A check-in session to measure progress and address new challenges.', duration: '90 min' },
    ],
    price: 'From R45,000 per session',
  },
  'team-alignment': {
    icon: '🤝', title: 'Team Alignment Experience',
    subtitle: 'Beyond team-building — genuine human connection',
    description: 'Forget trust falls and escape rooms. The Team Alignment Experience is an immersive journey that creates real bonds through shared vulnerability, healing practices, and meaningful conversation. Teams emerge not just closer, but transformed.',
    whatItIncludes: ['Pre-event consultation', 'Full-day or multi-day experience', 'Healing and meditation sessions', 'Storytelling and vulnerability exercises', 'Shared meals and community building', 'Post-event wellness report'],
    idealFor: ['Teams needing genuine reconnection', 'Organisations after major changes', 'Remote teams seeking in-person bonding', 'High-performing teams wanting deeper connection'],
    process: [
      { step: 1, title: 'Consultation', description: 'Understanding your team dynamics and goals.', duration: '60 min' },
      { step: 2, title: 'Experience Design', description: "Tailoring the experience to your team's unique needs.", duration: '1 week' },
      { step: 3, title: 'The Experience', description: 'An immersive day (or multi-day) of connection, healing, and growth.', duration: '1-3 days' },
      { step: 4, title: 'Follow-Up', description: 'A check-in session to sustain the transformation.', duration: '60 min' },
    ],
    price: 'From R120,000 per experience',
  },
  'wellness-experiences': {
    icon: '🌿', title: 'Wellness Experiences',
    subtitle: 'Transform your workplace culture from the inside',
    description: 'A day (or half-day) of wellness for your entire organisation. Meditation, healing sessions, wisdom teachings, and community building — designed to shift the culture of your workplace in a single powerful experience.',
    whatItIncludes: ['Welcome ceremony and intention setting', 'Guided meditation and breathwork', 'Healing session with Nkgono Mamoya', 'Wisdom teaching on workplace wellness', 'Community building activities', 'Closing blessing and commitment'],
    idealFor: ['Annual company wellness days', 'Organisations wanting to introduce wellness', 'Teams celebrating milestones', 'Companies investing in culture'],
    process: [
      { step: 1, title: 'Planning', description: 'We design the experience around your team size and goals.', duration: '1 week' },
      { step: 2, title: 'The Experience', description: 'A half-day or full-day wellness programme at your venue or ours.', duration: '4-8 hours' },
      { step: 3, title: 'Follow-Up Resources', description: 'Digital wellness resources for all participants.', duration: 'Delivered within 48h' },
    ],
    price: 'From R35,000 per day',
  },
};

const CorporateServices: React.FC = () => {
  const { service } = useParams<{ service: string }>();
  const data = servicesData[service || ''] || servicesData['executive-restoration'];

  const containerStyle = { minHeight: '80vh', backgroundColor: colors.stoneIvory[900] };
  const heroStyle = { padding: `${spacing['16']} 0 ${spacing['10']}`, background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[700]} 100%)`, color: colors.text.inverted };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={containerStyle as React.CSSProperties}>
      <div style={heroStyle}>
        <ResponsiveLayout variant="public">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/corporate" style={{ color: colors.lionGold[400], textDecoration: 'none', fontSize: typography.fontSize.sm, letterSpacing: typography.letterSpacing.wider, textTransform: 'uppercase' }}>← Back to Corporate Wellness</Link>
            <div style={{ fontSize: '3rem', marginTop: spacing['4'], marginBottom: spacing['3'] }}>{data.icon}</div>
            <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['5xl'], fontWeight: typography.fontWeight.bold, marginBottom: spacing['2'] }}>{data.title}</h1>
            <p style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, color: 'rgba(245,241,232,0.85)', fontStyle: 'italic' }}>{data.subtitle}</p>
          </motion.div>
        </ResponsiveLayout>
      </div>

      <ResponsiveLayout variant="public">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: spacing['8'], marginTop: spacing['8'] }}>
          <div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.lg, color: colors.text.secondary, lineHeight: typography.lineHeight.relaxed, marginBottom: spacing['8'] }}>{data.description}</motion.p>

            {/* Process */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ marginBottom: spacing['8'] }}>
              <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary, marginBottom: spacing['4'] }}>How It Works</h2>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['4'] }}>
                {data.process.map((step: any) => (
                  <div key={step.step} style={{ display: 'flex', gap: spacing['4'], alignItems: 'flex-start' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: colors.lionGold[600], color: colors.text.inverted, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: typography.fontWeight.bold, flexShrink: 0 }}>{step.step}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['1'] }}>
                        <h4 style={{ fontFamily: typography.fontFamily.serif, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{step.title}</h4>
                        <Badge variant="info" size="xs">{step.duration}</Badge>
                      </div>
                      <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ marginBottom: spacing['8'] }}>
              <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary, marginBottom: spacing['4'] }}>What's Included</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: spacing['3'] }}>
                {data.whatItIncludes.map((item: string, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: spacing['2'], padding: spacing['3'], backgroundColor: colors.healingGreen[50], borderRadius: borderRadius.md }}>
                    <span style={{ color: colors.healingGreen[700] }}>✓</span>
                    <span style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div style={{ position: 'sticky', top: spacing['20'] }}>
              <Card variant="premium" style={{ padding: spacing['6'], marginBottom: spacing['6'] }}>
                <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.text.primary, marginBottom: spacing['3'] }}>Investment</h3>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, marginBottom: spacing['4'] }}>{data.price}</p>
                <a href="mailto:corporate@nkgono-mamoya.org" style={{ textDecoration: 'none', display: 'block' }}>
                  <Button variant="primary" size="lg" style={{ width: '100%', backgroundColor: colors.healingGreen[700] }}>Book Discovery Call →</Button>
                </a>
                <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary, textAlign: 'center', marginTop: spacing['3'] }}>Free 30-minute consultation</p>
              </Card>

              <Card variant="subtle" style={{ padding: spacing['6'] }}>
                <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['3'] }}>Ideal For</h3>
                {data.idealFor.map((item: string, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: spacing['2'], padding: `${spacing['2']} 0`, borderBottom: i < data.idealFor.length - 1 ? `1px solid ${colors.neutral.gray[200]}` : 'none' }}>
                    <span style={{ color: colors.lionGold[600] }}>→</span>
                    <span style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{item}</span>
                  </div>
                ))}
              </Card>
            </div>
          </motion.div>
        </div>
      </ResponsiveLayout>

      <div style={{ height: spacing['16'] }} />
    </motion.div>
  );
};

export default CorporateServices;