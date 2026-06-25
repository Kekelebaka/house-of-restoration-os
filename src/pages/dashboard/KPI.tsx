// ============================================
// HOUSE OF RESTORATION - KPI DASHBOARD (MODULE 08)
// ============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { ResponsiveLayout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

// ============================================
// SAMPLE KPI DATA
// ============================================

const kpiData = {
  overview: {
    websiteVisitors: { value: 3847, change: 12.3, period: 'vs last month' },
    whatsappLeads: { value: 89, change: 23.1, period: 'vs last month' },
    consultations: { value: 34, change: 8.5, period: 'vs last month' },
    paidSessions: { value: 28, change: 15.2, period: 'vs last month' },
    repeatClients: { value: 18, change: 33.3, period: 'vs last month' },
    referrals: { value: 12, change: -5.0, period: 'vs last month' },
    testimonials: { value: 15, change: 50.0, period: 'vs last month' },
    retreatBookings: { value: 8, change: 100.0, period: 'vs last month' },
    corporateLeads: { value: 5, change: 25.0, period: 'vs last month' },
    internationalClients: { value: 3, change: 0.0, period: 'vs last month' },
  },
  revenue: { thisMonth: 142000, lastMonth: 118000, thisYear: 1245000, lastYear: 890000 },
  funnel: { visitors: 3847, leads: 89, consultations: 34, bookings: 28, completed: 22 },
  topServices: [
    { name: 'Private Guidance', sessions: 18, revenue: 90000, satisfaction: 4.9 },
    { name: 'Restoration Session', sessions: 8, revenue: 32000, satisfaction: 4.8 },
    { name: 'Healing Hands', sessions: 4, revenue: 24000, satisfaction: 5.0 },
  ],
  recentActivity: [
    { date: '2025-06-24', action: 'New booking confirmed', detail: 'Thandi M. — Private Guidance, 26 June', type: 'success' },
    { date: '2025-06-24', action: 'WhatsApp intake received', detail: 'New client inquiry from Sipho K.', type: 'info' },
    { date: '2025-06-23', action: 'Testimonial received', detail: 'Sarah K. — 5-star review on River Renewal Retreat', type: 'success' },
    { date: '2025-06-23', action: 'Retreat registration', detail: 'Nomsa P. registered for Lion Strength Retreat', type: 'info' },
    { date: '2025-06-22', action: 'Payment received', detail: 'R15,000 from corporate inquiry — Tech Solutions Pty', type: 'success' },
    { date: '2025-06-22', action: 'Session completed', detail: 'David L. — Restoration Session (follow-up booked)', type: 'success' },
  ],
};

const KPIDashboard: React.FC = () => {
  const [dateRange, setDateRange] = useState<'week' | 'month' | 'quarter' | 'year'>('month');
  const { overview, revenue, funnel, topServices, recentActivity } = kpiData;

  const containerStyle = { minHeight: '100vh', backgroundColor: colors.stoneIvory[950] };
  const kpiCardStyle = { padding: spacing['5'], borderRadius: borderRadius.xl, backgroundColor: colors.neutral.white, boxShadow: shadows.sm };

  const formatCurrency = (amount: number) => `R${(amount / 1000).toFixed(0)}k`;
  const formatNumber = (num: number) => num.toLocaleString();

  const getChangeColor = (change: number) => change >= 0 ? colors.healingGreen[700] : colors.ancestralRed[600];
  const getChangeIcon = (change: number) => change >= 0 ? '↑' : '↓';

  const kpiCards = [
    { label: 'Website Visitors', value: overview.websiteVisitors.value, change: overview.websiteVisitors.change, icon: '🌐', color: colors.riverMidnight[50] },
    { label: 'WhatsApp Leads', value: overview.whatsappLeads.value, change: overview.whatsappLeads.change, icon: '💬', color: colors.healingGreen[50] },
    { label: 'Consultations', value: overview.consultations.value, change: overview.consultations.change, icon: '📞', color: colors.royalBlue[50] },
    { label: 'Paid Sessions', value: overview.paidSessions.value, change: overview.paidSessions.change, icon: '💰', color: colors.lionGold[50] },
    { label: 'Repeat Clients', value: overview.repeatClients.value, change: overview.repeatClients.change, icon: '🔄', color: colors.healingGreen[50] },
    { label: 'Retreat Bookings', value: overview.retreatBookings.value, change: overview.retreatBookings.change, icon: '🏔️', color: colors.riverMidnight[50] },
    { label: 'Corporate Leads', value: overview.corporateLeads.value, change: overview.corporateLeads.change, icon: '🏢', color: colors.royalBlue[50] },
    { label: 'International', value: overview.internationalClients.value, change: overview.internationalClients.change, icon: '🌍', color: colors.lionGold[50] },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={containerStyle as React.CSSProperties}>
      <ResponsiveLayout variant="public">
        <div style={{ padding: `${spacing['8']} 0` }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['8'] }}>
            <div>
              <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['4xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>KPI Dashboard</h1>
              <p style={{ fontFamily: typography.fontFamily.body, color: colors.text.secondary, marginTop: spacing['1'] }}>House of Restoration — Performance Overview</p>
            </div>
            <div style={{ display: 'flex', gap: spacing['2'] }}>
              {(['week', 'month', 'quarter', 'year'] as const).map(range => (
                <Button key={range} variant={dateRange === range ? 'primary' : 'outline'} size="sm" onClick={() => setDateRange(range)}>
                  {range.charAt(0).toUpperCase() + range.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          {/* Revenue Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Card variant="premium" style={{ padding: spacing['8'], marginBottom: spacing['8'], background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[700]} 100%)`, color: colors.text.inverted }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: spacing['6'] }}>
                <div>
                  <p style={{ fontSize: typography.fontSize.sm, opacity: 0.7, marginBottom: spacing['1'] }}>This Month</p>
                  <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold }}>{formatCurrency(revenue.thisMonth)}</p>
                  <p style={{ fontSize: typography.fontSize.xs, color: colors.healingGreen[400] }}>↑ {Math.round(((revenue.thisMonth - revenue.lastMonth) / revenue.lastMonth) * 100)}%</p>
                </div>
                <div>
                  <p style={{ fontSize: typography.fontSize.sm, opacity: 0.7, marginBottom: spacing['1'] }}>Last Month</p>
                  <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold }}>{formatCurrency(revenue.lastMonth)}</p>
                </div>
                <div>
                  <p style={{ fontSize: typography.fontSize.sm, opacity: 0.7, marginBottom: spacing['1'] }}>This Year</p>
                  <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold }}>{formatCurrency(revenue.thisYear)}</p>
                </div>
                <div>
                  <p style={{ fontSize: typography.fontSize.sm, opacity: 0.7, marginBottom: spacing['1'] }}>YoY Growth</p>
                  <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, color: colors.healingGreen[400] }}>{Math.round(((revenue.thisYear - revenue.lastYear) / revenue.lastYear) * 100)}%</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: spacing['4'], marginBottom: spacing['8'] }}>
            {kpiCards.map((kpi, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }} style={kpiCardStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing['2'] }}>
                  <span style={{ fontSize: '1.5rem' }}>{kpi.icon}</span>
                  <span style={{ fontSize: typography.fontSize.xs, color: getChangeColor(kpi.change), fontWeight: typography.fontWeight.semiBold }}>
                    {getChangeIcon(kpi.change)} {Math.abs(kpi.change)}%
                  </span>
                </div>
                <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>{formatNumber(kpi.value)}</p>
                <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{kpi.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Conversion Funnel */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing['6'], marginBottom: spacing['8'] }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <Card variant="subtle" style={{ padding: spacing['6'] }}>
                <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['4'] }}>Conversion Funnel</h3>
                {Object.entries(funnel).map(([key, value], i) => {
                  const labels: Record<string, string> = { visitors: 'Website Visitors', leads: 'WhatsApp Leads', consultations: 'Consultations', bookings: 'Bookings', completed: 'Completed' };
                  const width = Math.round((value / funnel.visitors) * 100);
                  return (
                    <div key={key} style={{ marginBottom: spacing['3'] }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: typography.fontSize.sm, marginBottom: 4 }}>
                        <span style={{ color: colors.text.secondary }}>{labels[key]}</span>
                        <span style={{ fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{value.toLocaleString()}</span>
                      </div>
                      <div style={{ width: '100%', height: 8, backgroundColor: colors.neutral.gray[200], borderRadius: 4 }}>
                        <div style={{ width: `${width}%`, height: '100%', backgroundColor: colors.lionGold[600], borderRadius: 4 }} />
                      </div>
                    </div>
                  );
                })}
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <Card variant="subtle" style={{ padding: spacing['6'] }}>
                <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['4'] }}>Top Services</h3>
                {topServices.map((service, i) => (
                  <div key={i} style={{ padding: spacing['3'], borderBottom: i < topServices.length - 1 ? `1px solid ${colors.neutral.gray[200]}` : 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['1'] }}>
                      <h4 style={{ fontFamily: typography.fontFamily.serif, fontWeight: typography.fontWeight.medium, color: colors.text.primary }}>{service.name}</h4>
                      <Badge variant="info" size="xs">⭐ {service.satisfaction}</Badge>
                    </div>
                    <div style={{ display: 'flex', gap: spacing['4'], fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>
                      <span>{service.sessions} sessions</span>
                      <span>{formatCurrency(service.revenue)} revenue</span>
                    </div>
                  </div>
                ))}
              </Card>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Card variant="subtle" style={{ padding: spacing['6'] }}>
              <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['4'] }}>Recent Activity</h3>
              {recentActivity.map((activity, i) => (
                <div key={i} style={{ display: 'flex', gap: spacing['4'], padding: `${spacing['3']} 0`, borderBottom: i < recentActivity.length - 1 ? `1px solid ${colors.neutral.gray[200]}` : 'none' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: activity.type === 'success' ? colors.healingGreen[600] : colors.royalBlue[500], marginTop: 6, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, color: colors.text.primary }}>{activity.action}</p>
                      <span style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{activity.date}</span>
                    </div>
                    <p style={{ fontSize: typography.fontSize.xs, color: colors.text.secondary, marginTop: 2 }}>{activity.detail}</p>
                  </div>
                </div>
              ))}
            </Card>
          </motion.div>
        </div>
      </ResponsiveLayout>
    </motion.div>
  );
};

export default KPIDashboard;