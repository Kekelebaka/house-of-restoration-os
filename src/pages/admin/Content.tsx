// ============================================
// HOUSE OF RESTORATION - ADMIN CONTENT MANAGEMENT (MODULE 07 + 09)
// Content Engine: weekly content calendar, templates, publishing
// ============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const contentCalendar = [
  { day: 'Monday', theme: 'Mindful Monday', type: 'article', title: 'The Power of Stillness', status: 'scheduled', platforms: ['website', 'whatsapp'], category: 'reflections' },
  { day: 'Tuesday', theme: 'Teachings Tuesday', type: 'video', title: 'Lessons from the River', status: 'draft', platforms: ['website', 'social'], category: 'healing' },
  { day: 'Wednesday', theme: 'Wisdom Wednesday', type: 'audio', title: 'Finding Peace in Chaos', status: 'published', platforms: ['website', 'whatsapp'], category: 'healing' },
  { day: 'Thursday', theme: 'Throwback Thursday', type: 'voiceNote', title: "Grandmother's Words", status: 'scheduled', platforms: ['whatsapp'], category: 'lifeLessons' },
  { day: 'Friday', theme: 'Family Friday', type: 'article', title: 'Ubuntu in Parenting', status: 'draft', platforms: ['website'], category: 'family' },
  { day: 'Saturday', theme: 'Self-Care Saturday', type: 'audio', title: 'Morning Ritual Guide', status: 'scheduled', platforms: ['website', 'whatsapp'], category: 'reflections' },
  { day: 'Sunday', theme: 'Reflection Sunday', type: 'article', title: 'Weekly Gratitude Practice', status: 'pending', platforms: ['website'], category: 'reflections' },
];

const contentTemplates = [
  { id: '1', name: 'Wisdom Teaching', type: 'article', fields: ['Title', 'Category', 'Content', 'Tags', 'Thumbnail'], uses: 24 },
  { id: '2', name: 'Audio Meditation', type: 'audio', fields: ['Title', 'Duration', 'Script', 'Background Music'], uses: 12 },
  { id: '3', name: 'Video Teaching', type: 'video', fields: ['Title', 'Duration', 'Outline', 'Thumbnail', 'Transcript'], uses: 8 },
  { id: '4', name: 'Voice Note Reply', type: 'voiceNote', fields: ['Client Name', 'Duration', 'Message', 'Follow-up'], uses: 45 },
];

const publishedContent = [
  { title: 'The River of Restoration', type: 'video', views: 342, likes: 89, date: '2025-06-15', status: 'published' },
  { title: 'When Family Bonds Break', type: 'article', views: 567, likes: 134, date: '2025-06-12', status: 'published' },
  { title: 'The Lion Within', type: 'audio', views: 891, likes: 256, date: '2025-06-08', status: 'published' },
  { title: 'Morning Reflection Ritual', type: 'audio', views: 678, likes: 198, date: '2025-06-05', status: 'published' },
  { title: 'Restoring Trust After Betrayal', type: 'article', views: 1203, likes: 345, date: '2025-06-01', status: 'published' },
];

const AdminContent: React.FC = () => {
  const [tab, setTab] = useState<'calendar' | 'templates' | 'published'>('calendar');
  const [weekOffset, setWeekOffset] = useState(0);

  const statusColor = (status: string) => {
    switch (status) {
      case 'published': return { bg: colors.healingGreen[50], text: colors.healingGreen[700] };
      case 'scheduled': return { bg: colors.royalBlue[50], text: colors.royalBlue[600] };
      case 'draft': return { bg: colors.lionGold[50], text: colors.lionGold[700] };
      default: return { bg: colors.neutral.gray[100], text: colors.neutral.gray[600] };
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['6'] }}>
        <div>
          <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>Content Engine</h1>
          <p style={{ color: colors.text.secondary, marginTop: spacing['1'] }}>Manage your weekly content calendar, templates, and publishing</p>
        </div>
        <Button variant="primary">+ New Content</Button>
      </div>

      <div style={{ display: 'flex', gap: spacing['2'], marginBottom: spacing['6'] }}>
        {(['calendar', 'templates', 'published'] as const).map(t => (
          <Button key={t} variant={tab === t ? 'primary' : 'outline'} size="sm" onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </Button>
        ))}
      </div>

      {tab === 'calendar' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['4'] }}>
            <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>This Week's Content Calendar</h3>
            <div style={{ display: 'flex', gap: spacing['2'] }}>
              <Button variant="ghost" size="sm" onClick={() => setWeekOffset(w => w - 1)}>← Prev</Button>
              <Button variant="ghost" size="sm" onClick={() => setWeekOffset(0)}>Today</Button>
              <Button variant="ghost" size="sm" onClick={() => setWeekOffset(w => w + 1)}>Next →</Button>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['3'] }}>
            {contentCalendar.map((item, i) => {
              const sc = statusColor(item.status);
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                  <Card variant="subtle" style={{ padding: spacing['4'], display: 'flex', alignItems: 'center', gap: spacing['4'] }}>
                    <div style={{ width: 100, flexShrink: 0 }}>
                      <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{item.day}</p>
                      <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{item.theme}</p>
                    </div>
                    <div style={{ width: 60, flexShrink: 0 }}>
                      <Badge variant="info" size="xs">{item.type}</Badge>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, color: colors.text.primary }}>{item.title}</p>
                      <div style={{ display: 'flex', gap: spacing['1'], marginTop: spacing['1'] }}>
                        {item.platforms.map(p => (
                          <Badge key={p} variant="category" size="xs" style={{ backgroundColor: colors.riverMidnight[50], color: colors.riverMidnight[700] }}>{p}</Badge>
                        ))}
                      </div>
                    </div>
                    <Badge variant="status" size="sm" style={{ backgroundColor: sc.bg, color: sc.text }}>{item.status}</Badge>
                    <div style={{ display: 'flex', gap: spacing['1'] }}>
                      <Button variant="ghost" size="sm">Edit</Button>
                      {item.status !== 'published' && <Button variant="primary" size="sm">Publish</Button>}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {tab === 'templates' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: spacing['4'] }}>
          {contentTemplates.map((template, i) => (
            <motion.div key={template.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card variant="subtle" style={{ padding: spacing['6'] }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['3'] }}>
                  <h3 style={{ fontFamily: typography.fontFamily.serif, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{template.name}</h3>
                  <Badge variant="info" size="xs">{template.type}</Badge>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: spacing['1'], marginBottom: spacing['3'] }}>
                  {template.fields.map(f => (
                    <Badge key={f} variant="category" size="xs" style={{ backgroundColor: colors.neutral.gray[100], color: colors.neutral.gray[600] }}>{f}</Badge>
                  ))}
                </div>
                <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary, marginBottom: spacing['3'] }}>Used {template.uses} times</p>
                <Button variant="outline" size="sm" style={{ width: '100%' }}>Use Template</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {tab === 'published' && (
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['3'] }}>
          {publishedContent.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
              <Card variant="subtle" style={{ padding: spacing['4'], display: 'flex', alignItems: 'center', gap: spacing['4'] }}>
                <Badge variant="info" size="sm">{item.type}</Badge>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{item.title}</p>
                  <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{item.date}</p>
                </div>
                <div style={{ display: 'flex', gap: spacing['4'], fontSize: typography.fontSize.sm, color: colors.text.secondary }}>
                  <span>👁 {item.views}</span>
                  <span>❤️ {item.likes}</span>
                </div>
                <Badge variant="status" size="sm" style={{ backgroundColor: colors.healingGreen[50], color: colors.healingGreen[700] }}>{item.status}</Badge>
                <Button variant="ghost" size="sm">Edit</Button>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AdminContent;