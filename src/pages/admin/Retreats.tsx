// ============================================
// HOUSE OF RESTORATION - ADMIN RETREATS (MODULE 05 + 09)
// ============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const retreatsData = [
  { id: 'river-renewal', title: 'River Renewal Retreat', dates: '12–14 Sep 2025', location: 'Drakensberg, KZN', capacity: 20, registered: 14, revenue: 119000, status: 'registrationOpen', waitlist: 3, feedback: 4.9 },
  { id: 'lion-strength', title: 'Lion Strength Retreat', dates: '17–19 Oct 2025', location: 'Ladybrand, Free State', capacity: 15, registered: 8, revenue: 46400, status: 'registrationOpen', waitlist: 0, feedback: 0 },
  { id: 'ancestral-healing', title: 'Ancestral Healing Weekend', dates: '5–7 Dec 2025', location: 'Cederberg, Western Cape', capacity: 12, registered: 0, revenue: 0, status: 'planning', waitlist: 0, feedback: 0 },
  { id: 'river-2025-q1', title: 'River Renewal — Winter Edition', dates: '20–22 Jun 2025', location: 'Drakensberg, KZN', capacity: 20, registered: 20, revenue: 170000, status: 'completed', waitlist: 5, feedback: 4.8 },
];

const registrations = [
  { client: 'Nomsa Pilane', retreat: 'river-renewal', status: 'confirmed', paid: true, attendees: 2, total: 13600, specialReqs: 'Vegetarian meals' },
  { client: 'Sarah Khumalo', retreat: 'river-renewal', status: 'registered', paid: true, attendees: 1, total: 6800, specialReqs: '' },
  { client: 'David Letsatsi', retreat: 'river-renewal', status: 'registered', paid: false, attendees: 1, total: 6800, specialReqs: 'Accessibility: wheelchair' },
  { client: 'Thandi Mokwena', retreat: 'river-renewal', status: 'confirmed', paid: true, attendees: 1, total: 8500, specialReqs: '' },
  { client: 'Sipho Kgothle', retreat: 'lion-strength', status: 'registered', paid: true, attendees: 1, total: 5800, specialReqs: 'Gluten-free' },
];

const AdminRetreats: React.FC = () => {
  const [tab, setTab] = useState<'retreats' | 'registrations'>('retreats');

  const statusColor = (status: string) => {
    switch (status) {
      case 'registrationOpen': return { bg: colors.healingGreen[50], text: colors.healingGreen[700] };
      case 'completed': return { bg: colors.royalBlue[50], text: colors.royalBlue[600] };
      case 'planning': return { bg: colors.lionGold[50], text: colors.lionGold[700] };
      case 'full': return { bg: colors.ancestralRed[50], text: colors.ancestralRed[600] };
      default: return { bg: colors.neutral.gray[100], text: colors.neutral.gray[600] };
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['6'] }}>
        <div>
          <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>Retreats</h1>
          <p style={{ color: colors.text.secondary, marginTop: spacing['1'] }}>Manage retreat programmes and registrations</p>
        </div>
        <Button variant="primary">+ New Retreat</Button>
      </div>

      <div style={{ display: 'flex', gap: spacing['2'], marginBottom: spacing['6'] }}>
        <Button variant={tab === 'retreats' ? 'primary' : 'outline'} size="sm" onClick={() => setTab('retreats')}>Retreats</Button>
        <Button variant={tab === 'registrations' ? 'primary' : 'outline'} size="sm" onClick={() => setTab('registrations')}>Registrations</Button>
      </div>

      {tab === 'retreats' && (
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['4'] }}>
          {retreatsData.map((retreat, i) => {
            const sc = statusColor(retreat.status);
            const progress = Math.round((retreat.registered / retreat.capacity) * 100);
            return (
              <motion.div key={retreat.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Card variant="subtle" style={{ padding: spacing['6'] }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing['3'] }}>
                    <div>
                      <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>{retreat.title}</h3>
                      <div style={{ display: 'flex', gap: spacing['4'], fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginTop: spacing['1'] }}>
                        <span>📅 {retreat.dates}</span>
                        <span>📍 {retreat.location}</span>
                      </div>
                    </div>
                    <Badge variant="status" size="sm" style={{ backgroundColor: sc.bg, color: sc.text }}>{retreat.status}</Badge>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: spacing['4'], marginBottom: spacing['3'] }}>
                    <div>
                      <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>Capacity</p>
                      <p style={{ fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>{retreat.registered}/{retreat.capacity}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>Revenue</p>
                      <p style={{ fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>R{(retreat.revenue / 1000).toFixed(0)}k</p>
                    </div>
                    <div>
                      <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>Waitlist</p>
                      <p style={{ fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>{retreat.waitlist}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>Feedback</p>
                      <p style={{ fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>{retreat.feedback ? `⭐ ${retreat.feedback}` : '—'}</p>
                    </div>
                  </div>
                  <div style={{ width: '100%', height: 6, backgroundColor: colors.neutral.gray[200], borderRadius: 3, marginBottom: spacing['3'] }}>
                    <div style={{ width: `${progress}%`, height: '100%', backgroundColor: progress > 80 ? colors.ancestralRed[500] : colors.healingGreen[600], borderRadius: 3 }} />
                  </div>
                  <div style={{ display: 'flex', gap: spacing['2'] }}>
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">Send Reminders</Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}

      {tab === 'registrations' && (
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['3'] }}>
          {registrations.map((reg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
              <Card variant="subtle" style={{ padding: spacing['4'], display: 'flex', alignItems: 'center', gap: spacing['4'] }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{reg.client}</p>
                  <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{reg.attendees} {reg.attendees === 1 ? 'person' : 'people'} · R{reg.total.toLocaleString()}</p>
                </div>
                <Badge variant="info" size="xs">{retreatsData.find(r => r.id === reg.retreat)?.title}</Badge>
                <Badge variant="status" size="sm" style={reg.paid ? { backgroundColor: colors.healingGreen[50], color: colors.healingGreen[700] } : { backgroundColor: colors.lionGold[50], color: colors.lionGold[700] }}>
                  {reg.paid ? 'Paid' : 'Pending'}
                </Badge>
                <Badge variant="status" size="sm" style={{ backgroundColor: colors.royalBlue[50], color: colors.royalBlue[600] }}>{reg.status}</Badge>
                <Button variant="ghost" size="sm">View</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AdminRetreats;