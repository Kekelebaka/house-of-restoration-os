// ============================================
// HOUSE OF RESTORATION - ADMIN CORPORATE (MODULE 06 + 09)
// ============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const corporateLeads = [
  { id: '1', company: 'Tech Solutions Pty Ltd', industry: 'Technology', size: 150, contact: 'Lerato Phiri', email: 'lerato@techsolutions.co.za', phone: '+27 79 *** 2211', status: 'lead', service: 'Wellness Experiences', lastContact: '2025-06-23', notes: 'Interested in full-day wellness experience for team of 15. Follow-up call scheduled for Monday.', totalRevenue: 0 },
  { id: '2', company: 'Green Valley Farm', industry: 'Agriculture', size: 45, contact: 'Johan van der Merwe', email: 'johan@greenvalley.co.za', phone: '+27 51 *** 4433', status: 'client', service: 'Burnout Prevention Program', lastContact: '2025-06-15', notes: 'Programme in progress. 3 sessions completed. Team feedback very positive.', totalRevenue: 85000 },
  { id: '3', company: 'Ubuntu Education Trust', industry: 'Education/NPO', size: 30, contact: 'Dr. Naledi Mokoena', email: 'naledi@ubuntuedu.org', phone: '+27 11 *** 7788', status: 'client', service: 'Leadership Reflection', lastContact: '2025-06-20', notes: 'Quarterly leadership session. 2nd engagement. Board members very satisfied.', totalRevenue: 90000 },
  { id: '4', company: 'Cape Town Consulting Group', industry: 'Consulting', size: 80, contact: 'Michael Chen', email: 'michael@ctcg.co.za', phone: '+21 *** 9900', status: 'lead', service: 'Executive Restoration', lastContact: '2025-06-18', notes: 'CEO interested in executive restoration programme. Sent proposal. Awaiting response.', totalRevenue: 0 },
  { id: '5', company: 'Free State Health Department', industry: 'Government', size: 500, contact: 'Dr. Bongani Zulu', email: 'bzulu@fshealth.gov.za', phone: '+27 51 *** 1122', status: 'inactive', service: 'Team Alignment Experience', lastContact: '2025-04-10', notes: 'Initial contact promising but project put on hold due to budget constraints.', totalRevenue: 0 },
];

const statusOptions = ['lead', 'client', 'inactive'] as const;
const statusColor = (status: string) => {
  switch (status) {
    case 'client': return { bg: colors.healingGreen[50], text: colors.healingGreen[700] };
    case 'lead': return { bg: colors.lionGold[50], text: colors.lionGold[700] };
    case 'inactive': return { bg: colors.neutral.gray[100], text: colors.neutral.gray[600] };
    default: return { bg: colors.neutral.gray[100], text: colors.neutral.gray[600] };
  }
};

const AdminCorporate: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'lead' | 'client' | 'inactive'>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === 'all' ? corporateLeads : corporateLeads.filter(c => c.status === filter);
  const totalRevenue = corporateLeads.reduce((sum, c) => sum + c.totalRevenue, 0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['6'] }}>
        <div>
          <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>Corporate Wellness</h1>
          <p style={{ color: colors.text.secondary, marginTop: spacing['1'] }}>Manage corporate clients, leads, and programmes</p>
        </div>
        <Button variant="primary">+ Add Corporate Client</Button>
      </div>

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: spacing['4'], marginBottom: spacing['6'] }}>
        {[
          { label: 'Total Leads', value: corporateLeads.filter(c => c.status === 'lead').length, icon: '📋' },
          { label: 'Active Clients', value: corporateLeads.filter(c => c.status === 'client').length, icon: '🤝' },
          { label: 'Corporate Revenue', value: `R${(totalRevenue / 1000).toFixed(0)}k`, icon: '💰' },
          { label: 'Total Pipeline', value: `R${((totalRevenue + 85000) / 1000).toFixed(0)}k`, icon: '📈' },
        ].map((stat, i) => (
          <Card key={i} variant="subtle" style={{ padding: spacing['4'] }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{stat.label}</p>
                <p style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['2xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary, marginTop: spacing['1'] }}>{stat.value}</p>
              </div>
              <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: spacing['2'], marginBottom: spacing['6'] }}>
        {(['all', 'lead', 'client', 'inactive'] as const).map(f => (
          <Button key={f} variant={filter === f ? 'primary' : 'outline'} size="sm" onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)} ({f === 'all' ? corporateLeads.length : corporateLeads.filter(c => c.status === f).length})
          </Button>
        ))}
      </div>

      {/* Corporate Cards */}
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['4'] }}>
        {filtered.map((corp, i) => {
          const sc = statusColor(corp.status);
          return (
            <motion.div key={corp.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card variant="subtle" style={{ padding: spacing['6'], cursor: 'pointer' }} onClick={() => setExpanded(expanded === corp.id ? null : corp.id)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing['3'] }}>
                  <div>
                    <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>{corp.company}</h3>
                    <div style={{ display: 'flex', gap: spacing['4'], fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginTop: spacing['1'] }}>
                      <span>🏭 {corp.industry}</span>
                      <span>👥 {corp.size} employees</span>
                      <span>👤 {corp.contact}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: spacing['2'] }}>
                    <Badge variant="status" size="sm" style={{ backgroundColor: sc.bg, color: sc.text }}>{corp.status}</Badge>
                    {corp.totalRevenue > 0 && <Badge variant="info" size="sm">R{(corp.totalRevenue / 1000).toFixed(0)}k</Badge>}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: spacing['4'], fontSize: typography.fontSize.sm, color: colors.text.secondary, marginBottom: spacing['2'] }}>
                  <span>Service: <strong>{corp.service}</strong></span>
                  <span>Last contact: {corp.lastContact}</span>
                </div>

                {expanded === corp.id && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: spacing['4'], paddingTop: spacing['4'], borderTop: `1px solid ${colors.neutral.gray[200]}` }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing['4'], marginBottom: spacing['4'] }}>
                      <div>
                        <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary, textTransform: 'uppercase', letterSpacing: typography.letterSpacing.wider, marginBottom: spacing['1'] }}>Contact</p>
                        <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>📧 {corp.email}</p>
                        <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>📞 {corp.phone}</p>
                      </div>
                      <div>
                        <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary, textTransform: 'uppercase', letterSpacing: typography.letterSpacing.wider, marginBottom: spacing['1'] }}>Notes</p>
                        <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{corp.notes}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: spacing['2'] }}>
                      <Button variant="primary" size="sm">Send Email</Button>
                      <Button variant="outline" size="sm">📞 Call</Button>
                      <Button variant="outline" size="sm">Create Booking</Button>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AdminCorporate;