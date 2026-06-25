// ============================================
// HOUSE OF RESTORATION - ADMIN DASHBOARD (MODULE 09)
// ============================================

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [greeting] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  });

  const stats = [
    { label: 'Pending Bookings', value: '5', icon: '📅', color: colors.lionGold[600], route: '/admin/bookings' },
    { label: 'New Voice Notes', value: '3', icon: '🎙️', color: colors.healingGreen[700], route: '/admin/voice-notes' },
    { label: 'This Week Revenue', value: 'R38k', icon: '💰', color: colors.riverMidnight[700], route: '/admin/kpis' },
    { label: 'Active Retreats', value: '2', icon: '🏔️', color: colors.royalBlue[600], route: '/admin/retreats' },
  ];

  const quickActions = [
    { label: 'View Bookings', icon: '📅', route: '/admin/bookings', color: colors.lionGold[600] },
    { label: 'Review Voice Notes', icon: '🎙️', route: '/admin/voice-notes', color: colors.healingGreen[700] },
    { label: 'Manage Content', icon: '📝', route: '/admin/content', color: colors.royalBlue[600] },
    { label: 'View KPIs', icon: '📊', route: '/admin/kpis', color: colors.riverMidnight[700] },
    { label: 'Manage Retreats', icon: '🏔️', route: '/admin/retreats', color: colors.healingGreen[600] },
    { label: 'Corporate Leads', icon: '🏢', route: '/admin/corporate', color: colors.lionGold[700] },
  ];

  const todaySchedule = [
    { time: '09:00', client: 'Thandi M.', type: 'Private Guidance', status: 'confirmed' },
    { time: '11:00', client: 'David L.', type: 'Restoration Session', status: 'confirmed' },
    { time: '14:00', client: 'Sarah K.', type: 'Follow-up', status: 'pending' },
    { time: '16:00', client: 'Group Session', type: 'Healing Circle (6)', status: 'confirmed' },
  ];

  const pendingIntakes = [
    { name: 'Sipho K.', phone: '+27 82 *** 4521', message: 'Struggling with anxiety and sleep issues...', time: '2 hours ago' },
    { name: 'Anonymous', phone: '+27 73 *** 8892', message: 'Voice note (2:34) about family conflict...', time: '5 hours ago' },
    { name: 'Lerato P.', phone: '+27 61 *** 3344', message: 'Interested in corporate wellness for team of 15...', time: '1 day ago' },
  ];

  const containerStyle = { minHeight: '100vh', backgroundColor: colors.stoneIvory[950] };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={containerStyle}>
      <div style={{ padding: spacing['8'] }}>
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: spacing['8'] }}>
          <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>
            {greeting}, Nkgono 🦁
          </h1>
          <p style={{ fontFamily: typography.fontFamily.body, color: colors.text.secondary, marginTop: spacing['1'], fontSize: typography.fontSize.lg }}>
            Here is your House of Restoration command center.
          </p>
        </motion.div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: spacing['4'], marginBottom: spacing['8'] }}>
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} whileHover={{ y: -2 }}>
              <Card variant="subtle" style={{ padding: spacing['5'], cursor: 'pointer', borderLeft: `4px solid ${stat.color}` }} onClick={() => navigate(stat.route)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary, textTransform: 'uppercase', letterSpacing: typography.letterSpacing.wider }}>{stat.label}</p>
                    <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary, marginTop: spacing['1'] }}>{stat.value}</p>
                  </div>
                  <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: spacing['6'] }}>
          {/* Left Column */}
          <div>
            {/* Today's Schedule */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <Card variant="subtle" style={{ padding: spacing['6'], marginBottom: spacing['6'] }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['4'] }}>
                  <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>Today's Schedule</h3>
                  <Button variant="ghost" size="sm" onClick={() => navigate('/admin/bookings')}>View All →</Button>
                </div>
                {todaySchedule.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: spacing['4'], padding: `${spacing['3']} 0`, borderBottom: i < todaySchedule.length - 1 ? `1px solid ${colors.neutral.gray[200]}` : 'none' }}>
                    <div style={{ width: 60, fontFamily: typography.fontFamily.mono, fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{item.time}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{item.client}</p>
                      <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{item.type}</p>
                    </div>
                    <Badge variant={item.status === 'confirmed' ? 'category' : 'info'} size="sm" style={item.status === 'confirmed' ? { backgroundColor: colors.healingGreen[50], color: colors.healingGreen[700] } : { backgroundColor: colors.lionGold[50], color: colors.lionGold[700] }}>
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['4'] }}>Quick Actions</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing['3'] }}>
                {quickActions.map((action, i) => (
                  <Card key={i} variant="action" style={{ padding: spacing['4'], textAlign: 'center', cursor: 'pointer', backgroundColor: action.color, color: colors.text.inverted }} onClick={() => navigate(action.route)}>
                    <motion.div whileHover={{ scale: 1.03 }}>
                      <span style={{ fontSize: '1.5rem' }}>{action.icon}</span>
                      <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, marginTop: spacing['2'] }}>{action.label}</p>
                    </motion.div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Pending Intakes */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Card variant="subtle" style={{ padding: spacing['6'] }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['4'] }}>
                <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>Pending WhatsApp Intakes</h3>
                <Badge variant="number" size="sm">{pendingIntakes.length}</Badge>
              </div>
              {pendingIntakes.map((intake, i) => (
                <div key={i} style={{ padding: spacing['3'], backgroundColor: colors.neutral.white, borderRadius: borderRadius.md, marginBottom: spacing['3'], border: `1px solid ${colors.neutral.gray[200]}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['1'] }}>
                    <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{intake.name}</p>
                    <span style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{intake.time}</span>
                  </div>
                  <p style={{ fontSize: typography.fontSize.xs, color: colors.text.secondary, marginBottom: spacing['2'], lineHeight: typography.lineHeight.relaxed }}>{intake.message}</p>
                  <div style={{ display: 'flex', gap: spacing['2'] }}>
                    <Button variant="primary" size="sm">Review</Button>
                    <Button variant="outline" size="sm">WhatsApp</Button>
                  </div>
                </div>
              ))}
              <Button variant="ghost" size="sm" style={{ width: '100%', marginTop: spacing['2'] }} onClick={() => navigate('/admin/voice-notes')}>View All Intakes →</Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;