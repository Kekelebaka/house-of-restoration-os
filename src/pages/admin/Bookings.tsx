// ============================================
// HOUSE OF RESTORATION - ADMIN BOOKINGS (MODULE 09)
// ============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const sampleBookings = [
  { id: '1', client: 'Thandi Mokwena', session: 'Private Guidance', date: '2025-06-26', time: '09:00', status: 'confirmed', phone: '+27 82 *** 4521', notes: 'Second session. Focus on family healing.', aiSummary: 'Client reported improved sleep. Ready to discuss deeper family dynamics.' },
  { id: '2', client: 'David Letsatsi', session: 'Restoration Session', date: '2025-06-26', time: '11:00', status: 'confirmed', phone: '+27 73 *** 8892', notes: 'Follow-up on career transition.', aiSummary: 'Crossroads moment. Strong indicators of clarity emerging. Support needed.' },
  { id: '3', client: 'Sarah Khumalo', session: 'Healing Hands', date: '2025-06-26', time: '14:00', status: 'pending', phone: '+27 61 *** 3344', notes: 'New client. Referred by Thandi.', aiSummary: 'First contact via WhatsApp. Expressed deep grief over loss of parent. Urgent.' },
  { id: '4', client: 'Nomsa Pilane', session: 'Private Guidance', date: '2025-06-27', time: '10:00', status: 'confirmed', phone: '+27 84 *** 7766', notes: '', aiSummary: 'Marriage restoration focus. Both partners willing.' },
  { id: '5', client: 'Group Session', session: 'Healing Circle (6)', date: '2025-06-27', time: '16:00', status: 'confirmed', phone: '', notes: 'Monthly healing circle. 6 participants confirmed.', aiSummary: '' },
  { id: '6', client: 'Lerato Phiri', session: 'Corporate Wellness', date: '2025-06-30', time: '09:00', status: 'pending', phone: '+27 79 *** 2211', notes: 'Discovery call for team of 15.', aiSummary: 'Corporate inquiry. Tech company, 150 employees. Wants team wellness day.' },
  { id: '7', client: 'Sipho Kgothle', session: 'Private Guidance', date: '2025-07-01', time: '11:00', status: 'pending', phone: '+27 82 *** 4521', notes: 'New client from WhatsApp intake.', aiSummary: 'Anxiety and sleep issues. Recommended private guidance.' },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  confirmed: { bg: colors.healingGreen[50], text: colors.healingGreen[700] },
  pending: { bg: colors.lionGold[50], text: colors.lionGold[700] },
  cancelled: { bg: colors.ancestralRed[50], text: colors.ancestralRed[600] },
  completed: { bg: colors.royalBlue[50], text: colors.royalBlue[600] },
};

const AdminBookings: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'confirmed' | 'pending' | 'completed'>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === 'all' ? sampleBookings : sampleBookings.filter(b => b.status === filter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['6'] }}>
        <div>
          <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>Bookings</h1>
          <p style={{ color: colors.text.secondary, marginTop: spacing['1'] }}>Manage client sessions and appointments</p>
        </div>
        <Button variant="primary">+ New Booking</Button>
      </div>

      <div style={{ display: 'flex', gap: spacing['2'], marginBottom: spacing['6'] }}>
        {(['all', 'confirmed', 'pending', 'completed'] as const).map(f => (
          <Button key={f} variant={filter === f ? 'primary' : 'outline'} size="sm" onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)} {f === 'all' ? `(${sampleBookings.length})` : `(${sampleBookings.filter(b => b.status === f).length})`}
          </Button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['3'] }}>
        {filtered.map((booking, i) => (
          <motion.div key={booking.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
            <Card variant="subtle" style={{ padding: spacing['5'], cursor: 'pointer', borderLeft: `4px solid ${statusColors[booking.status]?.bg || colors.neutral.gray[200]}` }} onClick={() => setExpanded(expanded === booking.id ? null : booking.id)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing['3'], marginBottom: spacing['1'] }}>
                    <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{booking.client}</h3>
                    <Badge variant="status" size="sm" style={{ backgroundColor: statusColors[booking.status]?.bg, color: statusColors[booking.status]?.text }}>{booking.status}</Badge>
                  </div>
                  <div style={{ display: 'flex', gap: spacing['4'], fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>
                    <span>{booking.session}</span>
                    <span>📅 {booking.date}</span>
                    <span>🕐 {booking.time}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: spacing['2'] }}>
                  <Button variant="primary" size="sm">Confirm</Button>
                  <Button variant="outline" size="sm">Reschedule</Button>
                </div>
              </div>

              {expanded === booking.id && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: spacing['4'], paddingTop: spacing['4'], borderTop: `1px solid ${colors.neutral.gray[200]}` }}>
                  {booking.notes && <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary, marginBottom: spacing['2'] }}><strong>Notes:</strong> {booking.notes}</p>}
                  {booking.aiSummary && (
                    <div style={{ backgroundColor: colors.lionGold[50], padding: spacing['3'], borderRadius: borderRadius.md, marginBottom: spacing['3'] }}>
                      <p style={{ fontSize: typography.fontSize.xs, color: colors.lionGold[700], fontWeight: typography.fontWeight.semiBold, marginBottom: spacing['1'] }}>🤖 AI Summary</p>
                      <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{booking.aiSummary}</p>
                    </div>
                  )}
                  {booking.phone && <p style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary }}>📞 {booking.phone}</p>}
                </motion.div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminBookings;