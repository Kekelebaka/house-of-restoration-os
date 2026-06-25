// ============================================
// HOUSE OF RESTORATION - WISDOM CONTENT ITEM (MODULE 04)
// ============================================

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { ResponsiveLayout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { LionIcon, BookIcon, AudioIcon, VideoIcon, ClockIcon, HeartIcon, ShareIcon, ArrowLeftIcon } from '../../components/ui/Icons';

// ============================================
// SAMPLE CONTENT DATA
// ============================================

const contentData: Record<string, any> = {
  '1': {
    id: '1', title: 'The River of Restoration', subtitle: 'Finding peace in turbulent times',
    category: 'healing', contentType: 'video', author: 'Nkgono Mamoya',
    duration: 1800, views: 342, likes: 89, featured: true,
    description: 'A powerful teaching on how the river of restoration flows through every life, bringing peace and renewal. In this session, Nkgono Mamoya shares the ancient wisdom of the river — a metaphor for the journey of healing that runs through all of us.',
    content: `The river does not rush. It does not worry about reaching the ocean. It simply flows — and in its flowing, it carves valleys, nourishes forests, and brings life to everything it touches.

This is the way of restoration. It is not a race. It is not a competition. It is a gentle, persistent movement toward wholeness.

When we sit with our pain, our grief, our confusion — we are like still water. But when we allow ourselves to feel, to express, to surrender to the current of healing — we begin to move again.

Nkgono Mamoya teaches that the river of restoration flows through every human being. It is your birthright. No matter how many times life dams you up or diverts your course, the river finds a way.

Key teachings from this session:

1. **Still water is not dead water.** Even when you feel stuck, the river of restoration is still present within you.

2. **The river carves stone.** Persistence transforms. Small, daily acts of healing compound into massive transformation.

3. **Rivers feed everything downstream.** Your healing does not end with you. When you restore yourself, you restore everyone connected to you.

4. **The river knows its destination.** Trust the journey. You are being guided somewhere beautiful, even when the path is unclear.`,
    tags: ['peace', 'healing', 'restoration', 'wisdom', 'nkgono-teachings'],
    publishedAt: '2025-06-15',
    related: ['7', '12'],
  },
  default: {
    id: '0', title: 'Wisdom Entry', subtitle: 'Explore this teaching',
    category: 'wisdom', contentType: 'article', author: 'Nkgono Mamoya',
    views: 100, likes: 25, featured: false,
    description: 'This wisdom content is being prepared. The House of Restoration library is growing every week with new teachings from Nkgono Mamoya.',
    content: 'Content coming soon. Check back for new wisdom from Nkgono Mamoya.',
    tags: ['wisdom'],
    publishedAt: '2025-06-01',
    related: [],
  },
};

const categoryMeta: Record<string, { label: string; icon: string; color: string }> = {
  relationships: { label: 'Relationships', icon: '💕', color: colors.ancestralRed[600] },
  family: { label: 'Family', icon: '👨‍👩‍👧‍👦', color: colors.lionGold[600] },
  healing: { label: 'Healing', icon: '💚', color: colors.healingGreen[700] },
  purpose: { label: 'Purpose', icon: '🌟', color: colors.royalBlue[600] },
  restoration: { label: 'Restoration', icon: '🔄', color: colors.lionGold[700] },
  lifeLessons: { label: 'Life Lessons', icon: '📖', color: colors.riverMidnight[700] },
  reflections: { label: 'Reflections', icon: '🧘', color: colors.healingGreen[600] },
};

// ============================================
// COMPONENT
// ============================================

const LibraryContent: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const item = contentData[id || ''] || contentData['default'];
  const meta = categoryMeta[category || ''] || { label: category, icon: '📚', color: colors.lionGold[600] };

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    return `${m} min`;
  };

  const containerStyle = { minHeight: '80vh', backgroundColor: colors.stoneIvory[900] };
  const heroStyle = { padding: `${spacing['16']} 0 ${spacing['8']}`, background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[700]} 100%)`, color: colors.text.inverted };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={containerStyle as React.CSSProperties}>
      {/* Hero */}
      <div style={heroStyle}>
        <ResponsiveLayout variant="public">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to={`/wisdom/${category}`} style={{ color: colors.lionGold[400], textDecoration: 'none', fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, letterSpacing: typography.letterSpacing.wider, textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: spacing['2'] }}>
              ← Back to {meta.label}
            </Link>
            <div style={{ display: 'flex', gap: spacing['2'], marginTop: spacing['4'], marginBottom: spacing['3'] }}>
              <Badge variant="category" size="sm" style={{ backgroundColor: `${meta.color}22`, color: meta.color }}>{meta.icon} {meta.label}</Badge>
              <Badge variant="info" size="sm">{item.contentType}</Badge>
              {item.featured && <Badge variant="category" size="sm" style={{ backgroundColor: `${colors.lionGold[600]}22`, color: colors.lionGold[600] }}>Featured</Badge>}
            </div>
            <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['5xl'], fontWeight: typography.fontWeight.bold, marginBottom: spacing['2'], lineHeight: typography.lineHeight.tight }}>
              {item.title}
            </h1>
            <p style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, color: 'rgba(245,241,232,0.8)', fontStyle: 'italic', marginBottom: spacing['4'] }}>
              {item.subtitle}
            </p>
            <div style={{ display: 'flex', gap: spacing['6'], fontSize: typography.fontSize.sm, color: 'rgba(245,241,232,0.7)' }}>
              <span>By {item.author}</span>
              {item.duration && <span>⏱ {formatDuration(item.duration)}</span>}
              <span>👁 {item.views} views</span>
              <span>❤️ {item.likes} likes</span>
              {item.publishedAt && <span>📅 {item.publishedAt}</span>}
            </div>
          </motion.div>
        </ResponsiveLayout>
      </div>

      {/* Content */}
      <ResponsiveLayout variant="public">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: spacing['8'], marginTop: spacing['8'] }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            {/* Main Content */}
            {item.contentType === 'video' && (
              <div style={{ aspectRatio: '16/9', backgroundColor: colors.riverMidnight[900], borderRadius: borderRadius.xl, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: spacing['8'] }}>
                <div style={{ textAlign: 'center', color: colors.text.inverted }}>
                  <div style={{ fontSize: '4rem', marginBottom: spacing['4'] }}>🎬</div>
                  <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.lg }}>Video Content</p>
                  <p style={{ fontSize: typography.fontSize.sm, opacity: 0.7, marginTop: spacing['2'] }}>Duration: {formatDuration(item.duration)}</p>
                </div>
              </div>
            )}
            {item.contentType === 'audio' && (
              <div style={{ backgroundColor: colors.riverMidnight[50], borderRadius: borderRadius.xl, padding: spacing['8'], marginBottom: spacing['8'], textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: spacing['3'] }}>🎧</div>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.lg, color: colors.riverMidnight[700] }}>Audio Teaching</p>
                <p style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginTop: spacing['2'] }}>Duration: {formatDuration(item.duration)}</p>
                <div style={{ width: '100%', height: 4, backgroundColor: colors.neutral.gray[200], borderRadius: 2, marginTop: spacing['4'] }}>
                  <div style={{ width: '35%', height: '100%', backgroundColor: colors.lionGold[600], borderRadius: 2 }} />
                </div>
              </div>
            )}
            {item.contentType === 'voiceNote' && (
              <div style={{ backgroundColor: colors.healingGreen[50], borderRadius: borderRadius.xl, padding: spacing['8'], marginBottom: spacing['8'], textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: spacing['3'] }}>🎙️</div>
                <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.lg, color: colors.healingGreen[700] }}>Voice Note from Nkgono</p>
                <p style={{ fontSize: typography.fontSize.sm, color: colors.text.tertiary, marginTop: spacing['2'] }}>Duration: {formatDuration(item.duration)}</p>
              </div>
            )}

            <div style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, color: colors.text.secondary, lineHeight: typography.lineHeight.relaxed }}>
              {item.content.split('\n\n').map((paragraph: string, i: number) => (
                <p key={i} style={{ marginBottom: spacing['6'] }}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: spacing['2'], flexWrap: 'wrap', marginTop: spacing['8'], paddingTop: spacing['6'], borderTop: `1px solid ${colors.neutral.gray[200]}` }}>
              {item.tags.map((tag: string) => (
                <Badge key={tag} variant="info" size="sm" style={{ backgroundColor: colors.riverMidnight[50], color: colors.riverMidnight[700] }}>#{tag}</Badge>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: spacing['3'], marginTop: spacing['6'] }}>
              <Button variant="primary" size="sm">❤️ Like</Button>
              <Button variant="outline" size="sm">🔗 Share</Button>
              <Button variant="outline" size="sm">🔖 Bookmark</Button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div style={{ position: 'sticky', top: spacing['20'] }}>
              {/* About Author */}
              <div style={{ backgroundColor: colors.neutral.white, borderRadius: borderRadius.xl, padding: spacing['6'], marginBottom: spacing['6'], boxShadow: shadows.sm }}>
                <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['3'] }}>About the Author</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: spacing['3'], marginBottom: spacing['3'] }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: colors.lionGold[100], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>👵🏾</div>
                  <div>
                    <p style={{ fontFamily: typography.fontFamily.serif, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary }}>Nkgono Mamoya</p>
                    <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>Founder & Healer</p>
                  </div>
                </div>
                <p style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: typography.lineHeight.relaxed }}>
                  A revered healer, spiritual guide, and keeper of ancient wisdom dedicated to helping others find clarity, peace, and restoration.
                </p>
              </div>

              {/* Related Content */}
              {item.related && item.related.length > 0 && (
                <div style={{ backgroundColor: colors.neutral.white, borderRadius: borderRadius.xl, padding: spacing['6'], boxShadow: shadows.sm }}>
                  <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.lg, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['3'] }}>Related Wisdom</h3>
                  {item.related.map((relId: string) => {
                    const rel = contentData[relId] || contentData['default'];
                    return (
                      <Link key={relId} to={`/wisdom/${rel.category}/${rel.id}`} style={{ display: 'block', padding: spacing['3'], borderRadius: borderRadius.md, textDecoration: 'none', marginBottom: spacing['2'], transition: 'background 0.2s' }}>
                        <p style={{ fontFamily: typography.fontFamily.serif, fontWeight: typography.fontWeight.medium, color: colors.text.primary, fontSize: typography.fontSize.sm }}>{rel.title}</p>
                        <p style={{ fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>{rel.subtitle}</p>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </ResponsiveLayout>

      <div style={{ height: spacing['16'] }} />
    </motion.div>
  );
};

export default LibraryContent;