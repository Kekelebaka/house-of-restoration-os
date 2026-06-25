// ============================================
// HOUSE OF RESTORATION - CORPORATE WELLNESS LANDING (MODULE 06)
// ============================================

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { ResponsiveLayout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

const corporateServices = [
  { slug: 'executive-restoration', icon: '🦁', title: 'Executive Restoration', description: 'Intensive one-on-one restoration for senior leaders facing burnout, decision fatigue, or personal challenges affecting their leadership.', outcomes: ['Clarity in decision-making', 'Renewed energy and focus', 'Improved work-life integration', 'Emotional resilience'], price: 'From R15,000/session' },
  { slug: 'burnout-prevention', icon: '🔥', title: 'Burnout Prevention Program', description: 'A structured program for teams at risk of burnout. Includes individual assessments, group workshops, and ongoing support.', outcomes: ['Early burnout detection', 'Sustainable work habits', 'Team resilience building', 'Reduced absenteeism'], price: 'From R85,000/program' },
  { slug: 'leadership-reflection', icon: '🪞', title: 'Leadership Reflection', description: 'Guided reflection sessions for leadership teams to align on vision, address conflicts, and strengthen their collective purpose.', outcomes: ['Team alignment', 'Conflict resolution', 'Shared vision', 'Stronger leadership bonds'], price: 'From R45,000/session' },
  { slug: 'team-alignment', icon: '🤝', title: 'Team Alignment Experience', description: 'Immersive team-building experiences that go beyond typical corporate events. Deep connection, shared purpose, and genuine bonding.', outcomes: ['Deeper team trust', 'Clear communication', 'Shared values', 'Increased productivity'], price: 'From R120,000/experience' },
  { slug: 'wellness-experiences', icon: '🌿', title: 'Wellness Experiences', description: 'One-day or half-day wellness experiences for the entire organisation. Meditation, healing sessions, and community building.', outcomes: ['Employee wellness boost', 'Cultural transformation', 'Reduced stress', 'Positive workplace culture'], price: 'From R35,000/day' },
];

const CorporateLanding: React.FC = () => {
  const containerStyle = { minHeight: '80vh', backgroundColor: colors.stoneIvory[900] };
  const heroStyle = { padding: `${spacing['16']} 0 ${spacing['10']}`, background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[700]} 50%, ${colors.healingGreen[700]} 100%)`, color: colors.text.inverted, textAlign: 'center' as const };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={containerStyle as React.CSSProperties}>
      {/* Hero */}
      <div style={heroStyle}>
        <ResponsiveLayout variant="public">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p style={{ fontSize: typography.fontSize.sm, letterSpacing: typography.letterSpacing.widest, textTransform: 'uppercase', color: colors.lionGold[400], marginBottom: spacing['4'] }}>Corporate Wellness</p>
            <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['6xl'], fontWeight: typography.fontWeight.bold, marginBottom: spacing['4'] }}>Restore Your People.<br />Transform Your Organisation.</h1>
            <p style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, color: 'rgba(245,241,232,0.85)', maxWidth: 700, margin: '0 auto', lineHeight: typography.lineHeight.relaxed, marginBottom: spacing['8'] }}>
              The House of Restoration brings ancient wisdom and modern wellness to the corporate world. Because when your people thrive, your organisation thrives.
            </p>
            <div style={{ display: 'flex', gap: spacing['4'], justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:corporate@nkgono-mamoya.org" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg" style={{ backgroundColor: colors.lionGold[600] }}>Book a Discovery Call →</Button>
              </a>
              <Link to="/retreats" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="lg" style={{ color: colors.text.inverted, borderColor: 'rgba(245,241,232,0.5)' }}>View Corporate Retreats</Button>
              </Link>
            </div>
          </motion.div>
        </ResponsiveLayout>
      </div>

      {/* Why Corporate Wellness */}
      <section style={{ padding: `${spacing['16']} 0`, backgroundColor: colors.neutral.white }}>
        <ResponsiveLayout variant="public">
          <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary, textAlign: 'center', marginBottom: spacing['4'] }}>Why Corporate Wellness?</h2>
          <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.lg, color: colors.text.secondary, textAlign: 'center', maxWidth: 600, margin: `0 auto ${spacing['12']}` }}>
            Burnout costs South African businesses billions annually. The solution is not another wellness app — it is genuine human connection, ancient wisdom, and personalised care.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: spacing['6'] }}>
            {[
              { stat: '67%', label: 'of SA employees report moderate to high stress', icon: '😰' },
              { stat: 'R16bn', label: 'annual cost of burnout to SA economy', icon: '💸' },
              { stat: '40%', label: 'of turnover is preventable with proper support', icon: '🔄' },
              { stat: '3x', label: 'ROI on meaningful wellness interventions', icon: '📈' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card variant="subtle" style={{ padding: spacing['6'], textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: spacing['2'] }}>{item.icon}</div>
                  <div style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.bold, color: colors.healingGreen[700], marginBottom: spacing['1'] }}>{item.stat}</div>
                  <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{item.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </ResponsiveLayout>
      </section>

      {/* Services Grid */}
      <section style={{ padding: `${spacing['16']} 0` }}>
        <ResponsiveLayout variant="public">
          <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary, textAlign: 'center', marginBottom: spacing['4'] }}>Our Corporate Services</h2>
          <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.lg, color: colors.text.secondary, textAlign: 'center', maxWidth: 600, margin: `0 auto ${spacing['12']}` }}>
            Each programme is tailored to your organisation's unique needs. No cookie-cutter solutions — only genuine transformation.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['6'] }}>
            {corporateServices.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/corporate/${service.slug}`} style={{ textDecoration: 'none' }}>
                  <Card variant="form" style={{ padding: spacing['8'], display: 'flex', gap: spacing['8'], alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                    <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: colors.riverMidnight[50], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', flexShrink: 0 }}>{service.icon}</div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.text.primary, marginBottom: spacing['1'] }}>{service.title}</h3>
                      <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary, marginBottom: spacing['3'] }}>{service.description}</p>
                      <div style={{ display: 'flex', gap: spacing['4'], flexWrap: 'wrap' as const }}>
                        {service.outcomes.slice(0, 3).map((o, j) => (
                          <span key={j} style={{ fontSize: typography.fontSize.xs, color: colors.healingGreen[700], display: 'flex', alignItems: 'center', gap: 4 }}>✓ {o}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.lionGold[700], marginBottom: spacing['2'] }}>{service.price}</p>
                      <Button variant="outline" size="sm">Learn More →</Button>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </ResponsiveLayout>
      </section>

      {/* CTA */}
      <section style={{ padding: `${spacing['16']} 0`, backgroundColor: colors.riverMidnight[900], color: colors.text.inverted, textAlign: 'center' }}>
        <ResponsiveLayout variant="public">
          <h2 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.bold, marginBottom: spacing['4'] }}>Ready to Invest in Your People?</h2>
          <p style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, color: 'rgba(245,241,232,0.8)', maxWidth: 500, margin: `0 auto ${spacing['8']}` }}>
            Book a free 30-minute discovery call to discuss your organisation's needs.
          </p>
          <a href="mailto:corporate@nkgono-mamoya.org" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="lg" style={{ backgroundColor: colors.lionGold[600] }}>Schedule Discovery Call →</Button>
          </a>
        </ResponsiveLayout>
      </section>
    </motion.div>
  );
};

export default CorporateLanding;