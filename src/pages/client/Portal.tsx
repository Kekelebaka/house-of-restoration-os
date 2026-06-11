// ============================================
// HOUSE OF RESTORATION - CLIENT PORTAL
// MODULE 03: Complete Client Portal Experience
// ============================================

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth, useBookings, useContent, useUI } from '../../store';
import { Button, Card, Badge } from '../../components/ui';
import { designSystem } from '../../styles/designSystem';
import {
  LionIcon, HealingHandsIcon, CalendarIcon, BookIcon,
  AudioIcon, VideoIcon, ClockIcon, CheckIcon,
  XIcon, UploadIcon,
} from '../../components/ui/Icons';

// ============================================
// COMPONENT
// ============================================

export const ClientPortal: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { bookings } = useBookings();
  const { library, categories } = useContent();
  const { addNotification } = useUI();
  
  const [activeTab, setActiveTab] = useState<'dashboard' | 'appointments' | 'resources' | 'voice-notes' | 'restoration'>('dashboard');
  const [isLoading, setIsLoading] = useState(true);

  const colors = designSystem.colors;
  const typography = designSystem.typography;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  // Filter bookings for current user
  const userBookings = bookings.filter(b => b.clientId === user?.id);
  const upcomingBookings = userBookings
    .filter(b => new Date(b.date) >= new Date() && b.status !== 'cancelled' && b.status !== 'completed')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const pastBookings = userBookings
    .filter(b => new Date(b.date) < new Date() || b.status === 'completed' || b.status === 'cancelled')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const featuredContent = library.filter(c => c.featured).slice(0, 4);
  
  const contentByCategory: Record<string, number> = {};
  categories.forEach(cat => {
    contentByCategory[cat] = library.filter(c => c.category === cat.toLowerCase() as any).length;
  });

  const getBookingStatusColor = (status: string) => {
    const map: Record<string, string> = {
      confirmed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      cancelled: 'bg-red-100 text-red-800',
      completed: 'bg-blue-100 text-blue-800',
      rescheduled: 'bg-purple-100 text-purple-800',
    };
    return map[status] || 'bg-gray-100 text-gray-800';
  };

  const getContentIcon = (type: string) => {
    const map: Record<string, JSX.Element> = {
      video: <VideoIcon className="w-6 h-6" />,
      audio: <AudioIcon className="w-6 h-6" />,
      article: <BookIcon className="w-6 h-6" />,
      voiceNote: <AudioIcon className="w-6 h-6" />,
    };
    return map[type] || <BookIcon className="w-6 h-6" />;
  };

  if (isLoading) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-stoneIvory flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="w-16 h-16 rounded-full border-4 border-lionGold border-t-transparent" />
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="min-h-screen bg-stoneIvory">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="sticky top-0 z-10 bg-stoneIvory bg-opacity-95 backdrop-blur-sm border-b border-riverMidnight border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className={typography.h1.className} style={{ color: colors.riverMidnight }}>Welcome, {user?.firstName}</h1>
              <p className={typography.subtitle.className + ' mt-2'} style={{ color: colors.healingGreen }}>Your Personal Restoration Space</p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" startIcon={<UploadIcon />} onClick={() => navigate('/client/voice-notes')}>
                <span className="hidden sm:inline">Upload Voice Note</span>
              </Button>
              <Button variant="primary" startIcon={<CalendarIcon />} onClick={() => navigate('/book')}>
                Book Session
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex flex-wrap gap-2 mb-8 border-b border-riverMidnight border-opacity-20">
          {[{ id: 'dashboard', label: 'Dashboard', icon: <LionIcon /> },
            { id: 'appointments', label: 'Appointments', icon: <CalendarIcon /> },
            { id: 'resources', label: 'Resources', icon: <BookIcon /> },
            { id: 'voice-notes', label: 'Voice Notes', icon: <AudioIcon /> },
            { id: 'restoration', label: 'My Restoration', icon: <HealingHandsIcon /> }]
            .map(tab => (
              <Button key={tab.id} variant={activeTab === tab.id ? 'primary' : 'ghost'} size="sm" onClick={() => setActiveTab(tab.id as any)} startIcon={tab.icon} className="mb-2">
                {tab.label}
                {tab.id === 'appointments' && upcomingBookings.length > 0 && <Badge variant="number" size="sm" className="ml-2">{upcomingBookings.length}</Badge>}
              </Button>
            ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div key="dashboard" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
                <Card variant="premium" className="p-8 md:p-12 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-10"><HealingHandsIcon className="w-48 h-48 text-lionGold" /></div>
                  <div className="relative z-10">
                    <h2 className={typography.h2.className + ' mb-4'} style={{ color: colors.riverMidnight }}>Your Restoration Journey</h2>
                    <p className={typography.body.className + ' text-lg mb-6'} style={{ color: colors.healingGreen }}>{user?.firstName}, you are on the path to clarity, peace, and purpose.</p>
                    <div className="flex flex-wrap justify-center gap-6 text-center">
                      <div><p className="text-3xl font-bold" style={{ color: colors.lionGold }}>{upcomingBookings.length}</p><p className="text-sm text-gray-600">Upcoming Sessions</p></div>
                      <div><p className="text-3xl font-bold" style={{ color: colors.lionGold }}>{pastBookings.filter(b => b.status === 'completed').length}</p><p className="text-sm text-gray-600">Completed</p></div>
                      <div><p className="text-3xl font-bold" style={{ color: colors.lionGold }}>{featuredContent.length}</p><p className="text-sm text-gray-600">Resources Available</p></div>
                    </div>
                  </div>
                </Card>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-8">
                <h3 className={typography.h3.className + ' mb-4'} style={{ color: colors.riverMidnight }}>Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  [{ icon: <CalendarIcon />, label: 'Book Session', action: () => navigate('/book'), color: colors.riverMidnight[900] },
                    { icon: <AudioIcon />, label: 'Voice Note', action: () => navigate('/client/voice-notes'), color: colors.healingGreen[700] },
                    { icon: <BookIcon />, label: 'Resources', action: () => navigate('/client/resources'), color: colors.lionGold[600] },
                    { icon: <HealingHandsIcon />, label: 'My Plan', action: () => navigate('/client/restoration-plans'), color: colors.ancestralRed }]
                    .map((action, index) => (
                      <Card key={index} variant="action" className="p-6 text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={action.action} style={{ backgroundColor: action.color }}>
                        <motion.div whileHover={{ scale: 1.05 }} className="text-white">
                          <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">{action.icon}</div>
                          <p className={typography.body.className + ' font-medium'}>{action.label}</p>
                        </motion.div>
                      </Card>
                    ))}
                </div>
              </motion.div>
              {upcomingBookings.length > 0 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-8">
                  <h3 className={typography.h3.className + ' mb-4'} style={{ color: colors.riverMidnight }}>Your Next Session</h3>
                  <Card variant="form" className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <h4 className={typography.h4.className + ' mb-2'} style={{ color: colors.riverMidnight }}>{upcomingBookings[0].sessionType?.replace(/([A-Z])/g, ' $1').trim() || 'Private Session'}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4" />{new Date(upcomingBookings[0].date).toLocaleDateString()}</span>
                          <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4" />{upcomingBookings[0].startTime} - {upcomingBookings[0].endTime}</span>
                          <Badge variant="status" className={getBookingStatusColor(upcomingBookings[0].status)}>{upcomingBookings[0].status}</Badge>
                        </div>
                        {upcomingBookings[0].notes && <p className="text-sm text-gray-600 mt-3">{upcomingBookings[0].notes}</p>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="primary" size="sm" startIcon={<CheckIcon />}>Confirm</Button>
                        <Button variant="outline" size="sm" startIcon={<CalendarIcon />}>Reschedule</Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h3 className={typography.h3.className + ' mb-4'} style={{ color: colors.riverMidnight }}>Featured Wisdom</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {featuredContent.map(content => (
                    <Card key={content.id} variant="subtle" className="p-4 cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate(`/wisdom/${content.category}/${content.id}`)}>
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.lionGold[100] }}>{getContentIcon(content.contentType)}</div>
                        <div className="flex-1 min-w-0">
                          <h4 className={typography.h4.className + ' truncate'} style={{ color: colors.riverMidnight }}>{content.title}</h4>
                          <p className="text-xs text-gray-500 truncate">{content.author}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            <Badge variant="category" size="xs">{content.category}</Badge>
                            {content.duration && <Badge variant="info" size="xs">{Math.ceil(content.duration / 60)} min</Badge>}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'appointments' && (
            <motion.div key="appointments" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className={typography.h2.className + ' mb-6'} style={{ color: colors.riverMidnight }}>Your Appointments</h2>
                <div className="flex gap-2 mb-6 border-b border-riverMidnight border-opacity-20">
                  [{ id: 'upcoming', label: 'Upcoming', count: upcomingBookings.length },
                    { id: 'past', label: 'Past', count: pastBookings.length }]
                    .map(tab => (
                      <Button key={tab.id} variant={activeTab === tab.id ? 'primary' : 'ghost'} size="sm" className="mb-2">
                        {tab.label}<Badge variant="number" size="sm" className="ml-2">{tab.count}</Badge>
                      </Button>
                    ))}
                </div>
                <div className="space-y-4">
                  {upcomingBookings.length === 0 ? (
                    <Card variant="subtle" className="p-12 text-center">
                      <CalendarIcon className="w-24 h-24 mx-auto mb-4 text-gray-300" />
                      <h3 className={typography.h3.className + ' text-gray-500'}>No upcoming appointments</h3>
                      <p className="text-gray-400 mt-2">Book a session to get started</p>
                      <Button variant="primary" className="mt-6" onClick={() => navigate('/book')}>Book Session</Button>
                    </Card>
                  ) : (
                    upcomingBookings.map((booking, index) => (
                      <motion.div key={booking.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                        <Card variant="form" className="p-6 hover:shadow-md transition-shadow">
                          <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                              <h3 className={typography.h3.className + ' mb-2'} style={{ color: colors.riverMidnight }}>{booking.sessionType?.replace(/([A-Z])/g, ' $1').trim() || 'Private Session'}</h3>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                                <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4" />{new Date(booking.date).toLocaleDateString()}</span>
                                <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4" />{booking.startTime} - {booking.endTime}</span>
                                <Badge variant="status" className={getBookingStatusColor(booking.status)}>{booking.status}</Badge>
                              </div>
                              {booking.notes && <p className="text-sm text-gray-600">{booking.notes}</p>}
                              {booking.voiceNoteTranscription && <div className="mt-3 p-3 bg-lionGold bg-opacity-10 rounded-lg"><p className="text-xs text-lionGold font-medium mb-1">AI Analysis:</p><p className="text-sm">{booking.voiceNoteTranscription}</p></div>}
                            </div>
                            <div className="flex flex-col gap-2">
                              <Button variant="primary" size="sm" startIcon={<CheckIcon />}>Confirm</Button>
                              <Button variant="outline" size="sm" startIcon={<CalendarIcon />}>Reschedule</Button>
                              <Button variant="danger" size="sm" startIcon={<XIcon />}>Cancel</Button>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'resources' && (
            <motion.div key="resources" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className={typography.h2.className + ' mb-6'} style={{ color: colors.riverMidnight }}>Wisdom Library</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map(category => <Button key={category} variant="secondary" size="sm" onClick={() => navigate(`/wisdom/${category.toLowerCase()}`)}>{category} ({contentByCategory[category] || 0})</Button>)}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {library.slice(0, 12).map(content => (
                    <motion.div key={content.id} whileHover={{ scale: 1.02 }}>
                      <Card variant="subtle" className="p-4 cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate(`/wisdom/${content.category}/${content.id}`)}>
                        <div className="flex gap-3">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.lionGold[100] }}>{getContentIcon(content.contentType)}</div>
                          <div className="flex-1 min-w-0">
                            <h4 className={typography.h4.className + ' truncate'} style={{ color: colors.riverMidnight }}>{content.title}</h4>
                            <p className="text-xs text-gray-500 truncate">{content.author}</p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              <Badge variant="category" size="xs">{content.category}</Badge>
                              {content.duration && <Badge variant="info" size="xs">{Math.ceil(content.duration / 60)} min</Badge>}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 text-center"><Button variant="outline" onClick={() => navigate('/wisdom')}>View All Resources</Button></div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'voice-notes' && (
            <motion.div key="voice-notes" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h2 className={typography.h2.className} style={{ color: colors.riverMidnight }}>Your Voice Notes</h2>
                    <p className={typography.subtitle.className + ' mt-2'} style={{ color: colors.healingGreen }}>Share your story in your own voice</p>
                  </div>
                  <Button variant="primary" startIcon={<UploadIcon />} onClick={() => navigate('/client/voice-notes/upload')}>Upload Voice Note</Button>
                </div>
                <Card variant="subtle" className="p-8 mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-dashed border-lionGold flex items-center justify-center"><UploadIcon className="w-10 h-10 text-lionGold" /></div>
                    <h3 className={typography.h3.className + ' mb-2'} style={{ color: colors.riverMidnight }}>Upload a Voice Note</h3>
                    <p className="text-gray-600 mb-4">Record or upload an audio message for Nkgono Mamoya</p>
                    <Button variant="primary" startIcon={<AudioIcon />} onClick={() => navigate('/client/voice-notes/upload')}>Upload Voice Note</Button>
                  </div>
                </Card>
                <Card variant="subtle" className="p-6"><p className="text-center text-gray-500">Your voice notes will appear here after upload</p></Card>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'restoration' && (
            <motion.div key="restoration" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className={typography.h2.className + ' mb-6'} style={{ color: colors.riverMidnight }}>Your Restoration Journey</h2>
                <Card variant="premium" className="p-8 text-center">
                  <HealingHandsIcon className="w-24 h-24 mx-auto mb-6" style={{ color: colors.lionGold }} />
                  <h3 className={typography.h2.className + ' mb-4'} style={{ color: colors.riverMidnight }}>Personalized Restoration Plan</h3>
                  <p className={typography.body.className + ' text-lg mb-6'} style={{ color: colors.healingGreen }}>Your journey is unique. Nkgono Mamoya will create a personalized restoration plan for you.</p>
                  <p className="text-gray-600 mb-8">Complete your first session to receive your personalized plan.</p>
                  <Button variant="primary" size="lg" startIcon={<LionIcon />} onClick={() => navigate('/book')}>Book Your First Session</Button>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="border-t border-riverMidnight border-opacity-10 py-8">
        <div className="max-w-7xl mx-auto px-4"><p className="text-center text-sm text-gray-500"><LionIcon className="w-4 h-4 inline mx-1" />Nkgono Mamoya - House of Restoration | Ladybrand, Free State, South Africa</p></div>
      </motion.div>
    </motion.div>
  );
};

export default ClientPortal;
