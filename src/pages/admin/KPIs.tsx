// ============================================
// HOUSE OF RESTORATION - ADMIN KPIs (MODULE 08 + 09)
// ============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const kpiMetrics = [
  { key: 'websiteVisitors', label: 'Website Visitors', icon: '🌐', value: 3847, target: 5000, unit: '' },
  { key: 'whatsappLeads', label: 'WhatsApp Leads', icon: '💬', value: 89, target: 100, unit: '' },
  { key: 'consultations', label: 'Consultations', icon: '📞', value: 34, target: 40, unit: '' },
  { key: 'paidSessions', label: 'Paid Sessions', icon: '💰', value: 28, target: 35, unit: '' },
  { key: 'repeatClients', label: 'Repeat Clients', icon: '🔄', value: 18, target: 25, unit: '' },
  { key: 'referrals', label: 'Referrals', icon: '📣', value: 12, target: 20, unit: '' },
  { key: 'testimonials', label: 'Testimonials', icon: '⭐', value: 15, target: 20, unit: '' },
  { key: 'retreatBookings', label: 'Retreat Bookings', icon: '🏔️', value: 8, target: 15, unit: '' },
  { key: 'corporateLeads', label: 'Corporate Leads', icon: '🏢', value: 5, target: 10, unit: '' },
  { key: 'internationalClients', label: 'International Clients', icon: '🌍', value: 3, target: 5, unit: '' },
];

const AdminKPIs: React.FC = () => {
  const [editing, setEditing] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    kpiMetrics.forEach(k => { map[k.key] = k.value; });
    return map;
  });

  const handleSave = (key: string) => { setEditing(null); };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['6'] }}>
        <div>
          <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>KPI Management</h1>
          <p style={{ color: colors.text.secondary, marginTop: spacing['1'] }}>Track and update key performance indicators</p>
        </div>
        <Button variant="primary">Export Report</Button>
      </div>

      {/* Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: spacing['4'], marginBottom: spacing['8'] }}>
        <Card variant="premium" style={{ padding: spacing['6'], background: `linear-gradient(135deg, ${colors.healingGreen[700]}, ${colors.healingGreen[600]})`, color: colors.text.inverted }}>
          <p style={{ fontSize: typography.fontSize.sm, opacity: 0.8 }}>On Track</p>
          <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, marginTop: spacing['1'] }}>
            {kpiMetrics.filter(k => values[k.key] >= k.target * 0.8).length}
          </p>
          <p style={{ fontSize: typography.fontSize.xs, opacity: 0.7 }}>of {kpiMetrics.length} metrics</p>
        </Card>
        <Card variant="premium" style={{ padding: spacing['6'], background: `linear-gradient(135deg, ${colors.lionGold[700]}, ${colors.lionGold[600]})`, color: colors.text.inverted }}>
          <p style={{ fontSize: typography.fontSize.sm, opacity: 0.8 }}>Needs Attention</p>
          <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, marginTop: spacing['1'] }}>
            {kpiMetrics.filter(k => values[k.key] >= k.target * 0.5 && values[k.key] < k.target * 0.8).length}
          </p>
          <p style={{ fontSize: typography.fontSize.xs, opacity: 0.7 }}>of {kpiMetrics.length} metrics</p>
        </Card>
        <Card variant="premium" style={{ padding: spacing['6'], background: `linear-gradient(135deg, ${colors.ancestralRed[600]}, ${colors.ancestralRed[500]})`, color: colors.text.inverted }}>
          <p style={{ fontSize: typography.fontSize.sm, opacity: 0.8 }}>Behind Target</p>
          <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, marginTop: spacing['1'] }}>
            {kpiMetrics.filter(k => values[k.key] < k.target * 0.5).length}
          </p>
          <p style={{ fontSize: typography.fontSize.xs, opacity: 0.7 }}>of {kpiMetrics.length} metrics</p>
        </Card>
      </div>

      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: spacing['4'] }}>
        {kpiMetrics.map((kpi, i) => {
          const val = values[kpi.key];
          const progress = Math.min(Math.round((val / kpi.target) * 100), 100);
          const isEditing = editing === kpi.key;
          const progressColor = progress >= 80 ? colors.healingGreen[600] : progress >= 50 ? colors.lionGold[600] : colors.ancestralRed[500];

          return (
            <motion.div key={kpi.key} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
              <Card variant="subtle" style={{ padding: spacing['5'] }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['3'] }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: spacing['2'] }}>
                    <span>{kpi.icon}</span>
                    <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{kpi.label}</h3>
                  </div>
                  {isEditing ? (
                    <div style={{ display: 'flex', gap: spacing['1'] }}>
                      <input type="number" value={val} onChange={e => setValues(prev => ({ ...prev, [kpi.key]: Number(e.target.value) }))} style={{ width: 70, padding: '4px 8px', border: `1px solid ${colors.neutral.gray[300]}`, borderRadius: borderRadius.sm, fontSize: typography.fontSize.sm, textAlign: 'right' }} />
                      <Button variant="primary" size="sm" onClick={() => handleSave(kpi.key)}>✓</Button>
                    </div>
                  ) : (
                    <Button variant="ghost" size="sm" onClick={() => setEditing(kpi.key)}>Edit</Button>
                  )}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: spacing['2'] }}>
                  <span style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>{val.toLocaleString()}</span>
                  <span style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>Target: {kpi.target.toLocaleString()}</span>
                </div>
                <div style={{ width: '100%', height: 8, backgroundColor: colors.neutral.gray[200], borderRadius: 4, marginBottom: spacing['1'] }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ delay: 0.3, duration: 0.5 }} style={{ height: '100%', backgroundColor: progressColor, borderRadius: 4 }} />
                </div>
                <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary, textAlign: 'right' }}>{progress}% of target</p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AdminKPIs;