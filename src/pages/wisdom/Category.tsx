// ============================================
// HOUSE OF RESTORATION - WISDOM LIBRARY CATEGORY (MODULE 04)
// ============================================

import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { ResponsiveLayout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { BookIcon, AudioIcon, VideoIcon, ClockIcon, EyeIcon } from '../../components/ui/Icons';

// ============================================
// SAMPLE WISDOM DATA
// ============================================

interface WisdomItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  contentType: 'article' | 'audio' | 'video' | 'voiceNote';
  author: string;
  duration?: number;
  views: number;
  likes: number;
  featured: boolean;
  description: string;
  tags: string[];
}

const sampleWisdom: WisdomItem[] = [
  { id: '1', title: 'The River of Restoration', subtitle: 'Finding peace in turbulent times', category: 'healing', contentType: 'video', author: 'Nkgono Mamoya', duration: 1800, views: 342, likes: 89, featured: true, description: 'A powerful teaching on how the river of restoration flows through every life, bringing peace and renewal.', tags: ['peace', 'healing', 'restoration'] },
  { id: '2', title: 'When Family Bonds Break', subtitle: 'Healing generational wounds', category: 'family', contentType: 'article', author: 'Nkgono Mamoya', views: 567, likes: 134, featured: true, description: 'Understanding how family patterns repeat across generations and how to break the cycle.', tags: ['family', 'generational', 'healing'] },
  { id: '3', title: 'The Lion Within', subtitle: 'Rediscovering your inner strength', category: 'purpose', contentType: 'audio', author: 'Nkgono Mamoya', duration: 2400, views: 891, likes: 256, featured: true, description: 'An audio meditation and teaching on finding the courage and strength that already lives within you.', tags: ['courage', 'strength', 'purpose'] },
  { id: '4', title: 'Lessons from My Grandmother', subtitle: 'Wisdom passed down through generations', category: 'lifeLessons', contentType: 'voiceNote', author: 'Nkgono Mamoya', duration: 600, views: 234, likes: 67, featured: false, description: 'Personal reflections on the wisdom passed down from ancestors and how it shapes our daily lives.', tags: ['ancestors', 'wisdom', 'heritage'] },
  { id: '5', title: 'Restoring Trust After Betrayal', subtitle: 'A step-by-step guide to healing relationships', category: 'relationships', contentType: 'article', author: 'Nkgono Mamoya', views: 1203, likes: 345, featured: true, description: 'Practical guidance on rebuilding trust when it has been broken, with gentle steps forward.', tags: ['trust', 'relationships', 'betrayal'] },
  { id: '6', title: 'Morning Reflection Ritual', subtitle: 'Start your day with intention', category: 'reflections', contentType: 'audio', author: 'Nkgono Mamoya', duration: 900, views: 678, likes: 198, featured: false, description: 'A guided morning ritual to set your intentions and connect with your inner wisdom.', tags: ['morning', 'ritual', 'intention'] },
  { id: '7', title: 'The Strength to Forgive', subtitle: 'Forgiveness as an act of self-love', category: 'healing', contentType: 'video', author: 'Nkgono Mamoya', duration: 2100, views: 456, likes: 123, featured: false, description: 'Understanding that forgiveness is not about the other person — it is about freeing yourself.', tags: ['forgiveness', 'self-love', 'freedom'] },
  { id: '8', title: 'Raising Children with Ubuntu', subtitle: 'Community-centered parenting wisdom', category: 'family', contentType: 'article', author: 'Nkgono Mamoya', views: 890, likes: 234, featured: false, description: 'How the Ubuntu philosophy can guide modern parenting and strengthen family bonds.', tags: ['ubuntu', 'parenting', 'community'] },
  { id: '9', title: 'Finding Your Calling', subtitle: 'Purpose is not a destination — it is a journey', category: 'purpose', contentType: 'audio', author: 'Nkgono Mamoya', duration: 1500, views: 567, likes: 145, featured: false, description: 'Guidance on discovering your life purpose through reflection, prayer, and community wisdom.', tags: ['purpose', 'calling', 'journey'] },
  { id: '10', title: 'Ancestral Blessings', subtitle: 'Connecting with those who came before', category: 'reflections', contentType: 'video', author: 'Nkgono Mamoya', duration: 2700, views: 345, likes: 89, featured: false, description: 'A teaching on how to honour and connect with ancestral wisdom in everyday life.', tags: ['ancestors', 'blessings', 'connection'] },
  { id: '11', title: 'Marriage Under Pressure', subtitle: 'Strengthening your partnership', category: 'relationships', contentType: 'article', author: 'Nkgono Mamoya', views: 789, likes: 198, featured: false, description: 'Practical wisdom for couples facing challenges, drawn from decades of guiding families.', tags: ['marriage', 'partnership', 'commitment'] },
  { id: '12', title: 'Healing Through Story', subtitle: 'Your story has power', category: 'healing', contentType: 'voiceNote', author: 'Nkgono Mamoya', duration: 480, views: 234, likes: 56, featured: false, description: 'The transformative power of sharing your story and being witnessed in your truth.', tags: ['story', 'healing', 'witness'] },
];

const categoryMeta: Record<string, { label: string; icon: string; description: string; color: string }> = {
  relationships: { label: 'Relationships', icon: '💕', description: 'Wisdom for building and healing relationships — romantic, family, and community.', color: colors.ancestralRed[600] },
  family: { label: 'Family', icon: '👨‍👩‍👧‍👦', description: 'Guidance on family dynamics, parenting, and strengthening generational bonds.', color: colors.lionGold[600] },
  healing: { label: 'Healing', icon: '💚', description: 'Teachings on emotional, spiritual, and physical healing through ancient and modern wisdom.', color: colors.healingGreen[700] },
  purpose: { label: 'Purpose', icon: '🌟', description: 'Discover your calling and live with intention, clarity, and meaning.', color: colors.royalBlue[600] },
  restoration: { label: 'Restoration', icon: '🔄', description: 'The art of restoring what has been broken — trust, hope, joy, and connection.', color: colors.lionGold[700] },
  lifeLessons: { label: 'Life Lessons', icon: '📖', description: 'Timeless wisdom from lived experience and generations of knowledge.', color: colors.riverMidnight[700] },
  reflections: { label: 'Reflections', icon: '🧘', description: 'Guided meditations, morning rituals, and reflective practices for daily life.', color: colors.healingGreen[600] },
};

// ============================================
// COMPONENT
// ============================================

const LibraryCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filterType, setFilterType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'featured'>('featured');

  const meta = categoryMeta[category || ''] || { label: category || 'All', icon: '📚', description: 'Browse wisdom content.', color: colors.lionGold[600] };

  const items = useMemo(() => {
    let filtered = category ? sampleWisdom.filter(w => w.category === category) : sampleWisdom;
    if (filterType !== 'all') filtered = filtered.filter(w => w.contentType === filterType);
    if (sortBy === 'popular') filtered = [...filtered].sort((a, b) => b.views - a.views);
    if (sortBy === 'featured') filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    return filtered;
  }, [category, filterType, sortBy]);

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    return `${m} min`;
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'video': return '🎬';
      case 'audio': return '🎧';
      case 'voiceNote': return '🎙️';
      default: return '📄';
    }
  };

  const containerStyle = { minHeight: '80vh', backgroundColor: colors.stoneIvory[900] };
  const headerStyle = { padding: `${spacing['16']} 0 ${spacing['8']}`, textAlign: 'center' as const, background: `linear-gradient(135deg, ${colors.riverMidnight[900]} 0%, ${colors.riverMidnight[700]} 100%)`, color: colors.text.inverted };
  const cardGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: spacing['6'] };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={containerStyle as React.CSSProperties}>
      {/* Header */}
      <div style={headerStyle}>
        <ResponsiveLayout variant="public">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/wisdom" style={{ color: colors.lionGold[400], textDecoration: 'none', fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, letterSpacing: typography.letterSpacing.wider, textTransform: 'uppercase' }}>
              ← Back to Wisdom Library
            </Link>
            <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['5xl'], fontWeight: typography.fontWeight.bold, marginTop: spacing['4'], marginBottom: spacing['3'] }}>
              {meta.icon} {meta.label}
            </h1>
            <p style={{ color: 'rgba(245,241,232,0.8)', maxWidth: '600px', margin: '0 auto', fontSize: typography.fontSize.lg }}>
              {meta.description}
            </p>
          </motion.div>
        </ResponsiveLayout>
      </div>

      {/* Filters */}
      <ResponsiveLayout variant="public">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ display: 'flex', flexWrap: 'wrap', gap: spacing['2'], marginBottom: spacing['8'], marginTop: spacing['6'] }}>
          {['all', 'article', 'video', 'audio', 'voiceNote'].map(type => (
            <Button key={type} variant={filterType === type ? 'primary' : 'outline'} size="sm" onClick={() => setFilterType(type)}>
              {type === 'all' ? 'All' : type === 'voiceNote' ? '🎙️ Voice Notes' : `${getContentIcon(type)} ${type.charAt(0).toUpperCase() + type.slice(1)}s`}
            </Button>
          ))}
          <div style={{ marginLeft: 'auto' }}>
            <select value={sortBy} onChange={e => setSortBy(e.target.value as any)} style={{ padding: '8px 16px', borderRadius: borderRadius.md, border: `1px solid ${colors.neutral.gray[300]}`, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm }}>
              <option value="featured">Featured</option>
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div style={cardGridStyle}>
          {items.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -4 }}>
              <Link to={`/wisdom/${item.category}/${item.id}`} style={{ textDecoration: 'none' }}>
                <Card variant="subtle" style={{ height: '100%', cursor: 'pointer', transition: 'box-shadow 0.3s' }}>
                  <div style={{ padding: spacing['6'] }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: spacing['3'] }}>
                      <span style={{ fontSize: '2rem' }}>{getContentIcon(item.contentType)}</span>
                      {item.featured && <Badge variant="category" size="sm" style={{ backgroundColor: colors.lionGold[100], color: colors.lionGold[700] }}>Featured</Badge>}
                    </div>
                    <h3 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, fontWeight: typography.fontWeight.semiBold, color: colors.text.primary, marginBottom: spacing['1'] }}>{item.title}</h3>
                    <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.gold, fontStyle: 'italic', marginBottom: spacing['3'] }}>{item.subtitle}</p>
                    <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, color: colors.text.secondary, lineHeight: typography.lineHeight.relaxed, marginBottom: spacing['4'] }}>{item.description}</p>
                    <div style={{ display: 'flex', gap: spacing['4'], fontSize: typography.fontSize.xs, color: colors.text.tertiary }}>
                      {item.duration && <span>⏱ {formatDuration(item.duration)}</span>}
                      <span>👁 {item.views}</span>
                      <span>❤️ {item.likes}</span>
                    </div>
                    <div style={{ display: 'flex', gap: spacing['1'], marginTop: spacing['3'], flexWrap: 'wrap' }}>
                      {item.tags.map(tag => (
                        <Badge key={tag} variant="info" size="xs" style={{ backgroundColor: colors.riverMidnight[50], color: colors.riverMidnight[700] }}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {items.length === 0 && (
          <div style={{ textAlign: 'center', padding: `${spacing['16']} 0` }}>
            <p style={{ fontSize: typography.fontSize.xl, color: colors.text.tertiary }}>No content found for this filter.</p>
            <Button variant="primary" size="lg" style={{ marginTop: spacing['4'] }} onClick={() => setFilterType('all')}>Show All</Button>
          </div>
        )}
      </ResponsiveLayout>

      <div style={{ height: spacing['16'] }} />
    </motion.div>
  );
};

export default LibraryCategory;