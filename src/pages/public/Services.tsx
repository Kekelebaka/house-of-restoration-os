// ============================================
// HOUSE OF RESTORATION - SERVICES PAGE
// ============================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius } from '../../styles/designSystem';
import { Button } from '../../components/ui/Button';
import { Card, ImageCard, PricingCard } from '../../components/ui/Card';
import { LionIcon, RiverIcon, HandsIcon, CircleIcon, UserIcon, BuildingIcon, CalendarIcon, ClockIcon, ChevronRightIcon } from '../../components/ui/Icons';
import { Section, ResponsiveLayout } from '../../components/layout/Layout';
import PlaceholderPage from './PlaceholderPage';

const ServicesPage: React.FC = () => {
  return (
    <PlaceholderPage
      title="Our Services"
      subtitle="Pathways to Restoration"
      description="Discover the range of services offered at the House of Restoration, each designed to guide you on your journey to clarity, peace, and purpose."
    />
  );
};

export default ServicesPage;
