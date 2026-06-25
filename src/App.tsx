// ============================================
// HOUSE OF RESTORATION - MAIN APPLICATION
// ============================================

import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import { LoadingScreen } from './components/common/LoadingScreen';
import { colors } from './styles/designSystem';

// ============================================
// LAZY LOAD ALL PAGES FOR CODE SPLITTING
// ============================================

// Public Website Pages
const HomePage = lazy(() => import('./pages/public/Home'));
const AboutPage = lazy(() => import('./pages/public/About'));
const ServicesPage = lazy(() => import('./pages/public/Services'));
const HealingHandsPage = lazy(() => import('./pages/public/HealingHands'));
const RetreatsPage = lazy(() => import('./pages/public/Retreats'));
const CorporatePage = lazy(() => import('./pages/public/Corporate'));
const WisdomLibraryPage = lazy(() => import('./pages/public/WisdomLibrary'));
const TestimonialsPage = lazy(() => import('./pages/public/Testimonials'));
const BookSessionPage = lazy(() => import('./pages/public/BookSession'));
const ContactPage = lazy(() => import('./pages/public/Contact'));

// Client Portal Pages
const ClientPortalPage = lazy(() => import('./pages/client/Portal'));
const ClientAppointments = lazy(() => import('./pages/client/Appointments'));
const ClientResources = lazy(() => import('./pages/client/Resources'));
const ClientVoiceNotes = lazy(() => import('./pages/client/VoiceNotes'));
const ClientPlans = lazy(() => import('./pages/client/RestorationPlans'));

// Admin Dashboard Pages
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const AdminBookings = lazy(() => import('./pages/admin/Bookings'));
const AdminVoiceNotes = lazy(() => import('./pages/admin/VoiceNotes'));
const AdminContent = lazy(() => import('./pages/admin/Content'));
const AdminKPIs = lazy(() => import('./pages/admin/KPIs'));
const AdminRetreats = lazy(() => import('./pages/admin/Retreats'));
const AdminCorporate = lazy(() => import('./pages/admin/Corporate'));

// Wisdom Library Pages
const LibraryCategory = lazy(() => import('./pages/wisdom/Category'));
const LibraryContent = lazy(() => import('./pages/wisdom/ContentItem'));

// Retreat System Pages
const RetreatDetail = lazy(() => import('./pages/retreat/Detail'));
const RetreatRegistration = lazy(() => import('./pages/retreat/Registration'));

// Corporate Wellness Pages
const CorporateLanding = lazy(() => import('./pages/corporate/Landing'));
const CorporateServices = lazy(() => import('./pages/corporate/Services'));

// Dashboard Pages
const KPIDashboard = lazy(() => import('./pages/dashboard/KPI'));

// ============================================
// LOADING FALLBACK
// ============================================

const PageSuspense = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <LoadingScreen />
  </motion.div>
);

// ============================================
// ROUTE TRANSITION WRAPPER
// ============================================

interface RouteWrapperProps {
  children: React.ReactNode;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    style={{ minHeight: '100vh' }}
  >
    {children}
  </motion.div>
);

// ============================================
// MAIN APPLICATION
// ============================================

const App: React.FC = () => {
  return (
    <Suspense fallback={<PageSuspense />}>
      <Routes>
        {/* ============================================
         * PUBLIC WEBSITE ROUTES (MODULE 01)
         * ============================================ */}
        <Route path="/" element={<Layout variant="public" />}>
          <Route index element={<RouteWrapper><HomePage /></RouteWrapper>} />
          <Route path="about" element={<RouteWrapper><AboutPage /></RouteWrapper>} />
          <Route path="services" element={<RouteWrapper><ServicesPage /></RouteWrapper>} />
          <Route path="healing-hands" element={<RouteWrapper><HealingHandsPage /></RouteWrapper>} />
          <Route path="retreats" element={<RouteWrapper><RetreatsPage /></RouteWrapper>} />
          <Route path="corporate" element={<RouteWrapper><CorporatePage /></RouteWrapper>} />
          <Route path="wisdom" element={<RouteWrapper><WisdomLibraryPage /></RouteWrapper>} />
          <Route path="testimonials" element={<RouteWrapper><TestimonialsPage /></RouteWrapper>} />
          <Route path="book" element={<RouteWrapper><BookSessionPage /></RouteWrapper>} />
          <Route path="contact" element={<RouteWrapper><ContactPage /></RouteWrapper>} />
        </Route>

        {/* ============================================
         * WISDOM LIBRARY ROUTES (MODULE 04)
         * ============================================ */}
        <Route path="/wisdom/:category" element={<Layout variant="public" />}>
          <Route index element={<RouteWrapper><LibraryCategory /></RouteWrapper>} />
        </Route>
        <Route path="/wisdom/:category/:id" element={<Layout variant="public" />}>
          <Route index element={<RouteWrapper><LibraryContent /></RouteWrapper>} />
        </Route>

        {/* ============================================
         * RETREAT ROUTES (MODULE 05)
         * ============================================ */}
        <Route path="/retreats/:id" element={<Layout variant="public" />}>
          <Route index element={<RouteWrapper><RetreatDetail /></RouteWrapper>} />
        </Route>
        <Route path="/retreats/:id/register" element={<Layout variant="public" />}>
          <Route index element={<RouteWrapper><RetreatRegistration /></RouteWrapper>} />
        </Route>

        {/* ============================================
         * CORPORATE ROUTES (MODULE 06)
         * ============================================ */}
        <Route path="/corporate/:service" element={<Layout variant="public" />}>
          <Route index element={<RouteWrapper><CorporateServices /></RouteWrapper>} />
        </Route>

        {/* ============================================
         * CLIENT PORTAL ROUTES (MODULE 03)
         * ============================================ */}
        <Route path="/portal" element={<Layout variant="client" />}>
          <Route index element={<Navigate to="/portal/appointments" replace />} />
          <Route path="appointments" element={<RouteWrapper><ClientAppointments /></RouteWrapper>} />
          <Route path="resources" element={<RouteWrapper><ClientResources /></RouteWrapper>} />
          <Route path="voice-notes" element={<RouteWrapper><ClientVoiceNotes /></RouteWrapper>} />
          <Route path="plans" element={<RouteWrapper><ClientPlans /></RouteWrapper>} />
        </Route>

        {/* ============================================
         * ADMIN DASHBOARD ROUTES (MODULE 09)
         * ============================================ */}
        <Route path="/admin" element={<Layout variant="admin" />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<RouteWrapper><AdminDashboard /></RouteWrapper>} />
          <Route path="bookings" element={<RouteWrapper><AdminBookings /></RouteWrapper>} />
          <Route path="voice-notes" element={<RouteWrapper><AdminVoiceNotes /></RouteWrapper>} />
          <Route path="content" element={<RouteWrapper><AdminContent /></RouteWrapper>} />
          <Route path="kpis" element={<RouteWrapper><AdminKPIs /></RouteWrapper>} />
          <Route path="retreats" element={<RouteWrapper><AdminRetreats /></RouteWrapper>} />
          <Route path="corporate" element={<RouteWrapper><AdminCorporate /></RouteWrapper>} />
        </Route>

        {/* ============================================
         * KPI DASHBOARD ROUTE (MODULE 08)
         * ============================================ */}
        <Route path="/dashboard" element={<Layout variant="admin" />}>
          <Route index element={<RouteWrapper><KPIDashboard /></RouteWrapper>} />
        </Route>

        {/* ============================================
         * CATCH-ALL REDIRECT
         * ============================================ */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
