// ============================================
// HOUSE OF RESTORATION - RETREAT DETAIL (MODULE 05)
// ============================================

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { ResponsiveLayout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

// ============================================
// SAMPLE RETREAT DATA
// ============================================

const retreatsData: Record<string, any> = {
  'river-renewal': {
    id: 'river-renewal',
    title: 'River Renewal Retreat',
    subtitle: '3 Days of Healing, Reflection & Renewal',
    description: 'Immerse yourself in the healing power of nature at this transformative retreat. Over three days, you will reconnect with your inner wisdom, release what no longer serves you, and emerge renewed.',
    theme: 'Renewal & Letting Go',
    location: 'Drakensberg, KwaZulu-Natal',
    startDate: '2025-09-12',
    endDate: '2025-09-14',
    capacity: 20,
    registeredCount: 14,
    price: 8500,
    earlyBirdPrice: 6800,
    earlyBirdDeadline: '2025-08-15',
    status: 'registrationOpen',
    pillars: ['River Renewal', 'Healing Hands', 'Wisdom Guidance'],
    schedule: [
      { day: 1, time: '14:00', activity: 'Arrival & Welcome Circle', description: 'Settle in, meet fellow participants, and open the retreat with intention-setting.', icon: '🌅' },
      { day: 1, time: '16:00', activity: 'River Walk Meditation', description: 'A guided walking meditation along the river, connecting with the healing energy of flowing water.', icon: '🌊' },
      { day: 1, time: '19:00', activity: 'Communal Dinner & Story Sharing', description: 'Share a meal and begin the journey of vulnerability and connection.', icon: '🍲' },
      { day: 2, time: '06:00', activity: 'Sunrise Yoga & Breathwork', description: 'Greet the day with movement and breath, opening the body and spirit.', icon: '🧘' },
      { day: 2, time: '09:00', activity: 'Healing Hands Session', description: 'A powerful group healing session with Nkgono Mamoya.', icon: '🤲' },
      { day: 2, time: '14:00', activity: 'Silent Reflection & Nature Walk', description: 'Two hours of intentional solitude in nature.', icon: '🌿' },
      { day: 2, time: '16:00', activity: 'Wisdom Teaching: The River Metaphor', description: 'Teaching on flowing with life rather than fighting against it.', icon: '📖' },
      { day: 2, time: '19:00', activity: 'Fireside Reflection Circle', description: 'Share your insights around the fire with your retreat community.', icon: '🔥' },
      { day: 3, time: '06:00', activity: 'Morning Meditation & Journaling', description: 'A quiet morning of reflection and writing.', icon: '✍️' },
      { day: 3, time: '09:00', activity: 'Closing Ceremony & Blessing', description: 'Seal your transformation with a traditional blessing and commitment to your journey.', icon: '✨' },
      { day: 3, time: '12:00', activity: 'Farewell Brunch & Departure', description: 'One last meal together before returning home renewed.', icon: '🥐' },
    ],
    inclusions: ['2 nights accommodation', 'All meals (plant-based options available)', 'Daily healing sessions', 'Guided meditations & teachings', 'River walk experience', 'Welcome gift bag', 'Post-retreat follow-up session'],
    exclusions: ['Transport to/from retreat venue', 'Personal expenses', 'Additional healing sessions'],
    testimonials: [
      { name: 'Thandi M.', rating: 5, text: 'This retreat changed my life. The river meditation was the most profound spiritual experience I have ever had. I left feeling completely renewed.' },
      { name: 'Sarah K.', rating: 5, text: 'Nkgono Mamoya has a gift that goes beyond words. The healing hands session released decades of pain I did not even know I was carrying.' },
    ],
    gallery: [],
  },
  'lion-strength': {
    id: 'lion-strength',
    title: 'Lion Strength Retreat',
    subtitle: 'Discover Your Courage & Lead with Purpose',
    description: 'A transformative weekend for those ready to step into their power. This retreat focuses on courage, leadership, and finding the strength to live authentically.',
    theme: 'Courage & Authentic Leadership',
    location: 'Ladybrand, Free State',
    startDate: '2025-10-17',
    endDate: '2025-10-19',
    capacity: 15,
    registeredCount: 8,
    price: 7200,
    earlyBirdPrice: 5800,
    earlyBirdDeadline: '2025-09-20',
    status: 'registrationOpen',
    pillars: ['Lion Strength', 'Wisdom Guidance'],
    schedule: [
      { day: 1, time: '15:00', activity: 'Welcome & Opening Ritual', description: 'Open the retreat with a powerful group ritual.', icon: '🦁' },
      { day: 1, time: '17:00', activity: 'Teaching: The Lion Within', description: 'Understanding the courage that already lives in you.', icon: '📖' },
      { day: 1, time: '19:00', activity: 'Communal Dinner', description: 'Share a meal and begin building trust.', icon: '🍲' },
      { day: 2, time: '06:00', activity: 'Sunrise Strength Training', description: 'Physical movement as a metaphor for inner strength.', icon: '💪' },
      { day: 2, time: '09:00', activity: 'Courage Workshop', description: 'Identify the fears holding you back and create a plan to move through them.', icon: '🎯' },
      { day: 2, time: '14:00', activity: 'Leadership Reflection Circle', description: 'Explore what it means to lead with integrity and purpose.', icon: '👥' },
      { day: 2, time: '19:00', activity: 'Storytelling Night', description: 'Share your journey in a safe, supportive space.', icon: '🌟' },
      { day: 3, time: '07:00', activity: 'Morning Meditation', description: 'Quiet reflection before closing.', icon: '🧘' },
      { day: 3, time: '10:00', activity: 'Closing Ceremony', description: 'Commit to your path forward with the blessing of the community.', icon: '✨' },
    ],
    inclusions: ['2 nights accommodation', 'All meals', 'Daily sessions & workshops', 'Leadership coaching materials', 'Post-retreat accountability group'],
    exclusions: ['Transport', 'Personal expenses'],
    testimonials: [],
    gallery: [],
  },
};

// ============================================
// COMPONENT
// ============================================

const RetreatDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const retreat = retreatsData[id || ''] || retreatsData['river-renewal'];
  const [activeDay, setActiveDay] = useState(1);

  const days = [...new Set(retreat.schedule.map((s: any) => s.day))] as number[];
  const filteredSchedule = retreat.schedule.filter((s: any) => s.day === activeDay);
  const spotsLeft = retreat.capacity - retreat.registeredCount;
  const progressPercent = Math.round((retreat.registeredCount / retreat.capacity) * 100);
  const isEarlyBird = new Date() < new Date(retreat.earlyBirdDeadline);

  const formatPrice = (amount: number) => `R${amount.toLocaleString()}`;

  const containerStyle = { minHeight: '80vh', backgroundColor: colors.stoneIvory[900] };
  const heroStyle = { padding: `${spacing['16']} 0 ${spacing['8']}`, background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.healingGreen[700]} 100%)`, color: colors.text.inverted };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={containerStyle as React.CSSProperties}>
      {/* Hero */}
      <div style={heroStyle}>
        <ResponsiveLayout variant="public">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/retreats" style={{ color: colors.lionGold[400], textDecoration: 'none', fontSize: typography.fontSize.sm, letterSpacing: typography.letterSpacing.wider, textTransform: 'uppercase' }}>
              ← Back to Retreats
            </Link>
            <div style={{ display: 'flex', gap: spacing['2'], marginTop: spacing['4'] }}>
              <Badge variant="category" size="sm" style={{ backgroundColor: `${colors.healingGreen[600]}33`, color: colors.healingGreen[300] }}>{retreat.theme}</Badge>
              {isEarlyBird && <Badge variant="category" size="sm" style={{ backgroundColor: `${colors.lionGold[600]}33`, color: colors.lionGold[300] }}>🐦 Early Bird Pricing</Badge>}
            </div>
            <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['6xl'], fontWeight: typography.fontWeight.bold, marginTop: spacing['4'], marginBottom: spacing['2'] }}>{retreat.title}</h1>
            <p style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize['2xl'], color: 'rgba(245,241,232,0.85)', fontStyle: 'italic', marginBottom: spacing['6'] }}>{retreat.subtitle}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: spacing['6'], fontSize: typography.fontSize.base, color: 'rgba(245,241,232,0.8)' }}>
              <span>📍 {retreat.location}</span>
              <span>📅 {new Date(retreat.startDate).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long' })} — {new Date(retreat.endDate).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>👥 {retreat.capacity} spots</span>
            </div>
          </motion.div>
        </ResponsiveLayout>
      </div>

      {/* Main Content */}
      <ResponsiveLayout variant="public">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: spacing['8'], marginTop: spacing['8'] }}>
          <div>
            {/* Description */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ marginBottom: spacing['8'] }}>
              <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.lg, color: colors.text.secondary, lineHeight: typography.lineHeight.relaxed }}>{retreat.description}</p>
            </motion.div>

            {/* Schedule */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ marginBottom: spacing['8'] }}>
              <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary, marginBottom: spacing['4'] }}>Retreat Schedule</h2>
              <div style={{ display: 'flex', gap: spacing['2'], marginBottom: spacing['4'] }}>
                {days.map(day => (
                  <Button key={day} variant={activeDay === day ? 'primary' : 'outline'} size="sm" onClick={() => setActiveDay(day)}>
                    Day {day}
                  </Button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['3'] }}>
                {filteredSchedule.map((item: any, index: number) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                    <Card variant="subtle" style={{ padding: spacing['4'] }}>
                      <div style={{ display: 'flex', gap: spacing['4'], alignItems: 'flex-start' }}>
                        <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['1'] }}>
                            <h4 style={{ fontFamily: typography.fontFamily.serif, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{item.activity}</h4>
                            <Badge variant="info" size="xs">{item.time}</Badge>
                          </div>
                          <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Inclusions */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} style={{ marginBottom: spacing['8'] }}>
              <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['4'] }}>What's Included</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: spacing['3'] }}>
                {retreat.inclusions.map((item: string, i: number) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: spacing['2'], padding: spacing['3'], backgroundColor: colors.healingGreen[50], borderRadius: borderRadius.md }}>
                    <span style={{ color: colors.healingGreen[700] }}>✓</span>
                    <span style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials */}
            {retreat.testimonials.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['4'] }}>What Participants Say</h2>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['4'] }}>
                  {retreat.testimonials.map((t: any, i: number) => (
                    <Card key={i} variant="subtle" style={{ padding: spacing['6'] }}>
                      <p style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: typography.lineHeight.relaxed, fontStyle: 'italic', marginBottom: spacing['3'] }}>"{t.text}"</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: spacing['2'] }}>
                        <span style={{ color: colors.lionGold[600] }}>{'⭐'.repeat(t.rating)}</span>
                        <span style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{t.name}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar - Registration Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div style={{ position: 'sticky', top: spacing['20'] }}>
              <Card variant="premium" style={{ padding: spacing['6'] }}>
                <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.bold, color: colors.text.primary, marginBottom: spacing['4'] }}>Registration</h3>

                {/* Price */}
                <div style={{ marginBottom: spacing['4'] }}>
                  {isEarlyBird ? (
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: spacing['2'] }}>
                        <span style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.bold, color: colors.healingGreen[700] }}>{formatPrice(retreat.earlyBirdPrice)}</span>
                        <span style={{ fontSize: typography.fontSize.lg, color: colors.text.tertiary, textDecoration: 'line-through' }}>{formatPrice(retreat.price)}</span>
                      </div>
                      <p style={{ fontSize: typography.fontSize.sm, color: colors.lionGold[700], marginTop: spacing['1'] }}>🐦 Early Bird — ends {new Date(retreat.earlyBirdDeadline).toLocaleDateString('en-ZA', { month: 'long', day: 'numeric' })}</p>
                    </div>
                  ) : (
                    <span style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>{formatPrice(retreat.price)}</span>
                  )}
                  <p style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginTop: spacing['1'] }}>per person</p>
                </div>

                {/* Availability */}
                <div style={{ marginBottom: spacing['4'] }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: typography.fontSize.sm, marginBottom: spacing['1'] }}>
                    <span style={{ color: colors.text.secondary }}>{spotsLeft} spots remaining</span>
                    <span style={{ fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{retreat.registeredCount}/{retreat.capacity}</span>
                  </div>
                  <div style={{ width: '100%', height: 8, backgroundColor: colors.neutral.gray[200], borderRadius: 4 }}>
                    <div style={{ width: `${progressPercent}%`, height: '100%', backgroundColor: progressPercent > 80 ? colors.ancestralRed[500] : colors.healingGreen[600], borderRadius: 4, transition: 'width 0.3s' }} />
                  </div>
                </div>

                {/* CTA */}
                <Button variant="primary" size="lg" style={{ width: '100%', marginBottom: spacing['3'] }} onClick={() => navigate(`/retreats/${id}/register`)}>
                  Register Now →
                </Button>
                <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary, textAlign: 'center' }}>Secure your spot today. Payment plans available.</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </ResponsiveLayout>

      <div style={{ height: spacing['16'] }} />
    </motion.div>
  );
};

export default RetreatDetail;