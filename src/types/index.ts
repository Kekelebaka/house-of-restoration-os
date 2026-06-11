// ============================================
// HOUSE OF RESTORATION - CORE TYPES
// ============================================

// ============================================
// BRAND & DESIGN SYSTEM TYPES
// ============================================

export type BrandColor = 
  | 'riverMidnight'
  | 'lionGold'
  | 'healingGreen'
  | 'stoneIvory'
  | 'royalBlue'
  | 'ancestralRed';

export type BrandTypography = 
  | 'heading'
  | 'body'
  | 'caption'
  | 'display';

export type BrandSymbol = 
  | 'lion'
  | 'river'
  | 'healingHands'
  | 'restorationCircle';

// ============================================
// USER & AUTHENTICATION TYPES
// ============================================

export type UserRole = 
  | 'nkgono'
  | 'admin'
  | 'client'
  | 'corporate'
  | 'guest';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  // For clients
  clientType?: 'local' | 'national' | 'international' | 'corporate';
  // For corporate
  companyName?: string;
  companySize?: number;
  industry?: string;
  // Preferences
  preferredLanguage?: string;
  timezone?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// ============================================
// BOOKING & APPOINTMENT TYPES
// ============================================

export type SessionType = 
  | 'privateGuidance'
  | 'healingHands'
  | 'restorationSession'
  | 'retreatExperience'
  | 'corporateWellness';

export type BookingStatus = 
  | 'pending'
  | 'confirmed'
  | 'cancelled'
  | 'completed'
  | 'rescheduled';

export interface Booking {
  id: string;
  clientId: string;
  client: User;
  sessionType: SessionType;
  date: Date;
  startTime: string;
  endTime: string;
  status: BookingStatus;
  notes?: string;
  voiceNoteUrl?: string;
  voiceNoteTranscription?: string;
  aiSummary?: string;
  nkgonoReviewed: boolean;
  nkgonoDecision?: string;
  nkgonoNotes?: string;
  confirmedAt?: Date;
  reminderSent: boolean;
  followUpSent: boolean;
  createdAt: Date;
  updatedAt: Date;
  // For corporate
  corporateId?: string;
  attendees?: number;
  location?: string;
  // For retreats
  retreatId?: string;
}

export interface WhatsAppIntake {
  id: string;
  phone: string;
  message: string;
  voiceNoteUrl?: string;
  voiceNoteDuration?: number;
  clientName?: string;
  clientEmail?: string;
  sessionType?: SessionType;
  preferredDate?: string;
  preferredTime?: string;
  timezone?: string;
  status: 'received' | 'processing' | 'summarized' | 'reviewed' | 'responded' | 'converted';
  aiTranscription?: string;
  aiSummary?: string;
  aiRecommendations?: string[];
  nkgonoResponse?: string;
  nkgonoApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// RETREAT SYSTEM TYPES
// ============================================

export interface Retreat {
  id: string;
  title: string;
  description: string;
  subtitle?: string;
  startDate: Date;
  endDate: Date;
  location: string;
  capacity: number;
  registeredCount: number;
  price: number;
  earlyBirdPrice?: number;
  earlyBirdDeadline?: Date;
  status: 'upcoming' | 'registrationOpen' | 'full' | 'completed' | 'cancelled';
  theme: string;
  pillars: BrandSymbol[];
  schedule: RetreatScheduleItem[];
  inclusions: string[];
  exclusions: string[];
  testimonials: RetreatTestimonial[];
  gallery: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface RetreatScheduleItem {
  id: string;
  day: number;
  date: Date;
  time: string;
  activity: string;
  description?: string;
  facilitator?: string;
  duration: number; // minutes
  location?: string;
}

export interface RetreatRegistration {
  id: string;
  retreatId: string;
  retreat: Retreat;
  clientId: string;
  client: User;
  bookingDate: Date;
  attendees: number;
  totalPrice: number;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  paymentMethod?: string;
  paymentReference?: string;
  status: 'registered' | 'confirmed' | 'cancelled' | 'attended' | 'noShow';
  specialRequirements?: string;
  dietaryRestrictions?: string[];
  emergencyContact?: string;
  emergencyPhone?: string;
  followUpJourney?: FollowUpJourney;
  createdAt: Date;
  updatedAt: Date;
}

export interface RetreatTestimonial {
  id: string;
  clientName: string;
  clientAvatar?: string;
  rating: number; // 1-5
  testimonial: string;
  retreatId: string;
  date: Date;
}

export interface FollowUpJourney {
  id: string;
  steps: FollowUpStep[];
  currentStep: number;
  completed: boolean;
  startedAt: Date;
  completedAt?: Date;
}

export interface FollowUpStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  content?: string;
  audioUrl?: string;
  videoUrl?: string;
  reflectionPrompt?: string;
  completed: boolean;
  completedAt?: Date;
  notes?: string;
}

// ============================================
// WISDOM LIBRARY TYPES
// ============================================

export type WisdomCategory = 
  | 'relationships'
  | 'family'
  | 'healing'
  | 'purpose'
  | 'restoration'
  | 'lifeLessons'
  | 'reflections';

export type ContentType = 
  | 'video'
  | 'audio'
  | 'article'
  | 'voiceNote';

export interface WisdomContent {
  id: string;
  title: string;
  subtitle?: string;
  category: WisdomCategory;
  contentType: ContentType;
  description: string;
  content: string; // For articles
  audioUrl?: string;
  videoUrl?: string;
  voiceNoteUrl?: string;
  duration?: number; // For audio/video in seconds
  thumbnailUrl?: string;
  tags: string[];
  published: boolean;
  publishedAt?: Date;
  views: number;
  likes: number;
  shares: number;
  author: string; // Typically "Nkgono Mamoya"
  featured: boolean;
  order: number; // For sorting within categories
  relatedContent: string[]; // IDs of related content
  createdAt: Date;
  updatedAt: Date;
}

export interface WisdomSeries {
  id: string;
  title: string;
  description: string;
  category: WisdomCategory;
  contentIds: string[]; // Ordered list of content IDs
  order: number;
  published: boolean;
  thumbnailUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProgress {
  id: string;
  userId: string;
  contentId: string;
  content: WisdomContent;
  progress: number; // 0-100 for video/audio
  completed: boolean;
  bookmarked: boolean;
  notes?: string;
  lastWatchedAt?: Date;
  completedAt?: Date;
}

// ============================================
// CORPORATE WELLNESS TYPES
// ============================================

export type CorporateService = 
  | 'executiveRestoration'
  | 'burnoutPrevention'
  | 'leadershipReflection'
  | 'teamAlignment'
  | 'wellnessExperiences';

export interface CorporateClient {
  id: string;
  companyName: string;
  industry: string;
  size: number; // Number of employees
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
  address?: string;
  city?: string;
  country?: string;
  status: 'lead' | 'client' | 'inactive';
  firstContactDate: Date;
  lastContactDate: Date;
  totalSessions: number;
  totalRevenue: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CorporateBooking {
  id: string;
  corporateClientId: string;
  corporateClient: CorporateClient;
  serviceType: CorporateService;
  title: string;
  description: string;
  date: Date;
  startTime: string;
  endTime: string;
  attendees: number;
  location: string;
  status: BookingStatus;
  objectives?: string[];
  materialsNeeded?: string[];
  paymentStatus: 'pending' | 'paid' | 'invoiceSent' | 'overdue';
  invoiceNumber?: string;
  totalAmount: number;
  depositAmount?: number;
  balanceDue?: number;
  feedback?: string;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// CONTENT ENGINE TYPES
// ============================================

export type ContentDay = 
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface ContentTemplate {
  id: string;
  day: ContentDay;
  title: string; // e.g., "Mindful Monday", "Teachings Tuesday"
  theme: string;
  description: string;
  contentType: ContentType;
  templateContent: string;
  placeholders: ContentPlaceholder[];
  category: WisdomCategory;
  scheduledPublishDate?: Date;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContentPlaceholder {
  id: string;
  name: string;
  description: string;
  example: string;
  required: boolean;
}

export interface ContentWorkflow {
  id: string;
  name: string;
  steps: ContentWorkflowStep[];
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContentWorkflowStep {
  id: string;
  stepNumber: number;
  name: string;
  description: string;
  action: 'create' | 'review' | 'schedule' | 'publish' | 'promote' | 'archive';
  assignedTo: UserRole | 'ai';
  completed: boolean;
  completedAt?: Date;
}

export interface PublishingSchedule {
  id: string;
  contentId: string;
  content: WisdomContent | ContentTemplate;
  publishDate: Date;
  publishTime: string;
  timezone: string;
  platforms: PublishingPlatform[];
  status: 'scheduled' | 'published' | 'failed' | 'cancelled';
  publishedAt?: Date;
  errorMessage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type PublishingPlatform = 
  | 'website'
  | 'whatsapp'
  | 'email'
  | 'socialMedia'
  | 'sms';

// ============================================
// CLIENT PORTAL TYPES
// ============================================

export interface ClientResource {
  id: string;
  title: string;
  description: string;
  category: string;
  resourceType: 'document' | 'audio' | 'video' | 'link';
  fileUrl?: string;
  linkUrl?: string;
  thumbnailUrl?: string;
  duration?: number;
  tags: string[];
  assignedBy: string; // User ID
  assignedAt: Date;
  expiresAt?: Date;
  views: number;
  downloads: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface RestorationPlan {
  id: string;
  clientId: string;
  client: User;
  title: string;
  description: string;
  objectives: string[];
  phases: RestorationPhase[];
  currentPhase: number;
  status: 'active' | 'completed' | 'paused' | 'cancelled';
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface RestorationPhase {
  id: string;
  phaseNumber: number;
  title: string;
  description: string;
  durationWeeks: number;
  focusAreas: string[];
  sessions: RestorationSession[];
  resources: ClientResource[];
  reflectionPrompts: string[];
  completed: boolean;
  completedAt?: Date;
}

export interface RestorationSession {
  id: string;
  sessionNumber: number;
  title: string;
  description: string;
  content: string;
  audioUrl?: string;
  videoUrl?: string;
  duration: number; // minutes
  completed: boolean;
  completedAt?: Date;
  notes?: string;
}

export interface ClientVoiceNote {
  id: string;
  clientId: string;
  client: User;
  audioUrl: string;
  duration: number; // seconds
  transcription?: string;
  aiAnalysis?: VoiceNoteAnalysis;
  nkgonoResponse?: string;
  nkgonoReviewed: boolean;
  status: 'uploaded' | 'transcribing' | 'analyzing' | 'reviewed' | 'responded';
  createdAt: Date;
  updatedAt: Date;
}

export interface VoiceNoteAnalysis {
  id: string;
  sentiment: 'positive' | 'negative' | 'neutral' | 'mixed';
  themes: string[];
  keyPoints: string[];
  recommendations: string[];
  urgency: 'low' | 'medium' | 'high';
  confidence: number; // 0-100
  analyzedAt: Date;
}

// ============================================
// KPI & ANALYTICS TYPES
// ============================================

export interface KPIMetrics {
  website: WebsiteMetrics;
  whatsapp: WhatsAppMetrics;
  bookings: BookingMetrics;
  financial: FinancialMetrics;
  client: ClientMetrics;
  content: ContentMetrics;
  retreat: RetreatMetrics;
  corporate: CorporateMetrics;
}

export interface WebsiteMetrics {
  visitors: number;
  uniqueVisitors: number;
  pageViews: number;
  averageSessionDuration: number; // seconds
  bounceRate: number; // percentage
  topPages: TopItem[];
  referrers: Referrer[];
  devices: DeviceBreakdown;
}

export interface WhatsAppMetrics {
  leads: number;
  newLeads: number;
  voiceNotes: number;
  transcripts: number;
  responseTime: number; // average in minutes
  conversionRate: number; // percentage
  topIntakeTimes: TopItem[];
}

export interface BookingMetrics {
  totalBookings: number;
  newBookings: number;
  byType: Record<SessionType, number>;
  byStatus: Record<BookingStatus, number>;
  completionRate: number; // percentage
  noShowRate: number; // percentage
  topServices: TopItem[];
}

export interface FinancialMetrics {
  totalRevenue: number;
  monthlyRevenue: number;
  byService: Record<SessionType, number>;
  byClientType: Record<'local' | 'national' | 'international' | 'corporate', number>;
  outstandingPayments: number;
  averageSessionValue: number;
}

export interface ClientMetrics {
  totalClients: number;
  newClients: number;
  repeatClients: number;
  referrals: number;
  byLocation: Record<'local' | 'national' | 'international', number>;
  byRole: Record<UserRole, number>;
  satisfactionScore: number; // 1-5
  testimonials: number;
  retentionRate: number; // percentage
}

export interface ContentMetrics {
  totalContent: number;
  byCategory: Record<WisdomCategory, number>;
  byType: Record<ContentType, number>;
  topContent: TopItem[];
  totalViews: number;
  totalLikes: number;
  averageEngagement: number; // percentage
}

export interface RetreatMetrics {
  totalRetreats: number;
  upcomingRetreats: number;
  totalRegistrations: number;
  totalRevenue: number;
  capacityUtilization: number; // percentage
  satisfactionScore: number; // 1-5
  repeatAttendees: number;
}

export interface CorporateMetrics {
  totalCorporateClients: number;
  newCorporateLeads: number;
  totalCorporateSessions: number;
  totalCorporateRevenue: number;
  averageSessionSize: number;
  satisfactionScore: number; // 1-5
  topServices: TopItem[];
}

export interface TopItem {
  name: string;
  value: number;
  count?: number;
}

export interface Referrer {
  source: string;
  count: number;
  percentage: number;
}

export interface DeviceBreakdown {
  mobile: number;
  desktop: number;
  tablet: number;
}

export interface KPIHistory {
  id: string;
  date: Date;
  metrics: Partial<KPIMetrics>;
}

// ============================================
// ADMIN DASHBOARD TYPES
// ============================================

export interface AdminNotification {
  id: string;
  type: 'booking' | 'voiceNote' | 'payment' | 'system' | 'content';
  title: string;
  message: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'unread' | 'read' | 'archived';
  relatedId?: string; // ID of related entity (booking, voice note, etc.)
  relatedType?: string;
  actionUrl?: string;
  createdAt: Date;
  readAt?: Date;
}

export interface AdminActionLog {
  id: string;
  userId: string;
  user: User;
  action: string;
  description: string;
  entityType: string;
  entityId: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
}

export interface DashboardWidget {
  id: string;
  type: 'metric' | 'chart' | 'list' | 'status';
  title: string;
  position: { x: number; y: number; w: number; h: number };
  dataSource: string;
  configuration: Record<string, unknown>;
  visible: boolean;
  order: number;
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: Pagination;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiError {
  success: false;
  error: string;
  message: string;
  code: number;
  details?: Record<string, string[]>;
}

// ============================================
// VOICE NOTE TYPES
// ============================================

export interface VoiceNote {
  id: string;
  clientId: string;
  client?: User;
  audioUrl: string;
  duration: number; // seconds
  transcription?: string;
  aiAnalysis?: VoiceNoteAnalysis;
  nkgonoResponse?: string;
  nkgonoReviewed: boolean;
  nkgonoApproved: boolean;
  status: 'uploaded' | 'transcribing' | 'analyzing' | 'summarizing' | 'reviewed' | 'responded' | 'approved' | 'rejected';
  language?: string;
  sessionType?: SessionType;
  createdAt: Date;
  updatedAt: Date;
}

export interface VoiceNoteAnalysis {
  id: string;
  voiceNoteId: string;
  sentiment: 'positive' | 'negative' | 'neutral' | 'mixed';
  themes: string[];
  keyPoints: string[];
  recommendations: string[];
  urgency: 'low' | 'medium' | 'high' | 'urgent';
  confidence: number; // 0-100
  tone: string;
  emotion: string;
  analyzedAt: Date;
}

// ============================================
// CONTENT ITEM TYPE (for Wisdom Library)
// ============================================

export interface ContentItem {
  id: string;
  title: string;
  subtitle?: string;
  category: WisdomCategory;
  contentType: ContentType;
  description: string;
  content: string;
  audioUrl?: string;
  videoUrl?: string;
  voiceNoteUrl?: string;
  duration?: number;
  thumbnailUrl?: string;
  tags: string[];
  published: boolean;
  publishedAt?: Date;
  views: number;
  likes: number;
  shares: number;
  author: string;
  featured: boolean;
  order: number;
  relatedContent: string[];
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// KPI DATA TYPE
// ============================================

export interface KPIData {
  websiteVisitors: number;
  whatsappLeads: number;
  consultations: number;
  paidSessions: number;
  repeatClients: number;
  referrals: number;
  testimonials: number;
  retreatBookings: number;
  corporateLeads: number;
  internationalClients: number;
}

// ============================================
// WHATSAPP INTEGRATION TYPES
// ============================================

export interface WhatsAppMessage {
  id: string;
  from: string; // Phone number
  to: string; // Our number
  message: string;
  type: 'text' | 'voice' | 'image' | 'video' | 'document';
  mediaUrl?: string;
  mediaType?: string;
  timestamp: Date;
  status: 'received' | 'read' | 'responded' | 'failed';
  responseId?: string;
  conversationId: string;
}

export interface WhatsAppTemplate {
  id: string;
  name: string;
  category: 'utility' | 'authentication' | 'marketing' | 'notification';
  language: string;
  content: string;
  variables: WhatsAppVariable[];
  status: 'draft' | 'approved' | 'rejected' | 'paused';
  approvedAt?: Date;
  rejectedReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WhatsAppVariable {
  id: string;
  name: string;
  type: 'text' | 'number' | 'date' | 'currency' | 'image' | 'video';
  example: string;
  required: boolean;
}

export interface WhatsAppConversation {
  id: string;
  clientPhone: string;
  client?: User;
  messages: WhatsAppMessage[];
  status: 'open' | 'resolved' | 'escalated' | 'spam';
  assignedTo?: string; // User ID
  tags: string[];
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
}

// ============================================
// SETTINGS & CONFIGURATION TYPES
// ============================================

export interface SystemSettings {
  id: string;
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  address: string;
  city: string;
  country: string;
  timezone: string;
  defaultLanguage: string;
  maintenanceMode: boolean;
  maintenanceMessage?: string;
  bookingBufferMinutes: number;
  maxBookingsPerDay: number;
  paymentMethods: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface BrandSettings {
  id: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  headingFont: string;
  bodyFont: string;
  logoUrl?: string;
  faviconUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface NotificationSettings {
  id: string;
  emailEnabled: boolean;
  smsEnabled: boolean;
  whatsappEnabled: boolean;
  bookingConfirmation: boolean;
  bookingReminder: boolean;
  bookingReminderHours: number[];
  followUpEnabled: boolean;
  followUpHours: number;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// EXPORT ALL TYPES
// ============================================

export type {
  // Add any additional type exports here
};
