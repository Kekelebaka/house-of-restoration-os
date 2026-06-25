// ============================================
// HOUSE OF RESTORATION - ADMIN VOICE NOTES (MODULE 09)
// ============================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';

const sampleVoiceNotes = [
  { id: '1', client: 'Sipho Kgothle', phone: '+27 82 *** 4521', date: '2025-06-24', duration: '3:42', transcription: 'I have been struggling with anxiety for months now. It started when I lost my job and my wife has been very worried. I cannot sleep at night and I feel like I am failing my family. I heard about Nkgono Mamoya from my friend and I hope she can help me find peace.', aiSummary: 'Job loss triggered anxiety and insomnia. Family pressure compounding. Referred by word-of-mouth. Recommend Private Guidance session.', status: 'new', sentiment: 'distressed' },
  { id: '2', client: 'Anonymous', phone: '+27 73 *** 8892', date: '2025-06-24', duration: '2:34', transcription: 'My mother passed away three months ago and I cannot stop crying. My family says I should move on but I feel stuck. I need someone to talk to who understands grief.', aiSummary: 'Acute grief response. 3 months post-loss. Family not supporting emotional processing. Urgent — recommend Healing Hands session.', status: 'new', sentiment: 'grief' },
  { id: '3', client: 'Lerato Phiri', phone: '+27 79 *** 2211', date: '2025-06-23', duration: '1:15', transcription: 'I am the HR director at a tech company and we are looking for corporate wellness solutions. Our team has been under a lot of pressure and we want something more meaningful than the usual team building.', aiSummary: 'Corporate inquiry. HR director, tech company. Wants meaningful wellness intervention. Redirect to corporate services.', status: 'new', sentiment: 'neutral' },
  { id: '4', client: 'Thandi Mokwena', phone: '+27 82 *** 4521', date: '2025-06-22', duration: '5:12', transcription: 'Nkgono, I wanted to share that since our last session I have been sleeping better and my daughter called me for the first time in two years. I feel like something has shifted inside me. Thank you so much.', aiSummary: 'Positive update from existing client. Sleep improvement + family reconnection. Good candidate for testimonial (with permission).', status: 'reviewed', sentiment: 'positive' },
];

const sentimentColors: Record<string, { bg: string; text: string; label: string }> = {
  distressed: { bg: colors.ancestralRed[50], text: colors.ancestralRed[600], label: 'Distressed' },
  grief: { bg: colors.riverMidnight[50], text: colors.riverMidnight[700], label: 'Grief' },
  neutral: { bg: colors.neutral.gray[100], text: colors.neutral.gray[600], label: 'Neutral' },
  positive: { bg: colors.healingGreen[50], text: colors.healingGreen[700], label: 'Positive' },
};

const AdminVoiceNotes: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewed'>('all');
  const [expanded, setExpanded] = useState<string | null>(null);
  const filtered = filter === 'all' ? sampleVoiceNotes : sampleVoiceNotes.filter(v => v.status === filter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing['6'] }}>
        <div>
          <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['3xl'], fontWeight: typography.fontWeight.bold, color: colors.text.primary }}>Voice Notes & WhatsApp Intakes</h1>
          <p style={{ color: colors.text.secondary, marginTop: spacing['1'] }}>Review AI-transcribed messages and respond to clients</p>
        </div>
        <div style={{ display: 'flex', gap: spacing['2'] }}>
          <Button variant="primary">Send WhatsApp</Button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: spacing['2'], marginBottom: spacing['6'] }}>
        {(['all', 'new', 'reviewed'] as const).map(f => (
          <Button key={f} variant={filter === f ? 'primary' : 'outline'} size="sm" onClick={() => setFilter(f)}>
            {f.charAt(0).toUpperCase() + f.slice(1)} ({sampleVoiceNotes.filter(v => f === 'all' ? true : v.status === f).length})
          </Button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: spacing['4'] }}>
        {filtered.map((note, i) => (
          <motion.div key={note.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card variant="subtle" style={{ padding: spacing['6'] }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing['3'] }}>
                <div>
                  <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.base, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>{note.client}</h3>
                  <div style={{ display: 'flex', gap: spacing['3'], fontSize: typography.fontSize.xs, color: colors.text.tertiary, marginTop: spacing['1'] }}>
                    <span>📞 {note.phone}</span>
                    <span>📅 {note.date}</span>
                    <span>⏱ {note.duration}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: spacing['2'] }}>
                  <Badge variant="status" size="sm" style={{ backgroundColor: sentimentColors[note.sentiment]?.bg, color: sentimentColors[note.sentiment]?.text }}>{sentimentColors[note.sentiment]?.label}</Badge>
                  {note.status === 'new' && <Badge variant="category" size="sm" style={{ backgroundColor: colors.lionGold[50], color: colors.lionGold[700] }}>New</Badge>}
                </div>
              </div>

              {/* Audio Player Placeholder */}
              <div style={{ backgroundColor: colors.riverMidnight[50], borderRadius: borderRadius.md, padding: spacing['3'], marginBottom: spacing['3'], display: 'flex', alignItems: 'center', gap: spacing['3'] }}>
                <Button variant="primary" size="sm">▶ Play</Button>
                <div style={{ flex: 1, height: 4, backgroundColor: colors.neutral.gray[200], borderRadius: 2 }}>
                  <div style={{ width: '0%', height: '100%', backgroundColor: colors.lionGold[600], borderRadius: 2 }} />
                </div>
                <span style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{note.duration}</span>
              </div>

              {/* Transcription */}
              <div style={{ marginBottom: spacing['3'] }}>
                <p style={{ fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold, color: colors.text.tertiary, textTransform: 'uppercase', letterSpacing: typography.letterSpacing.wider, marginBottom: spacing['1'] }}>Transcription</p>
                <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: typography.lineHeight.relaxed, fontStyle: 'italic' }}>"{note.transcription}"</p>
              </div>

              {/* AI Summary */}
              <div style={{ backgroundColor: colors.lionGold[50], borderRadius: borderRadius.md, padding: spacing['3'], marginBottom: spacing['3'] }}>
                <p style={{ fontSize: typography.fontSize.xs, fontWeight: typography.fontWeight.semiBold, color: colors.lionGold[700], marginBottom: spacing['1'] }}>🤖 AI Analysis</p>
                <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>{note.aiSummary}</p>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: spacing['2'] }}>
                <Button variant="primary" size="sm">📝 Create Booking</Button>
                <Button variant="outline" size="sm">💬 Reply via WhatsApp</Button>
                <Button variant="ghost" size="sm">🔖 Mark Reviewed</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AdminVoiceNotes;