// ============================================
// HOUSE OF RESTORATION - ZUSTAND STORE
// Central State Management
// ============================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Booking, WhatsAppIntake, VoiceNote, ContentItem, Retreat, CorporateBooking, KPIData } from '../types';

// ============================================
// TYPES
// ============================================

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

type WhatsAppState = {
  intake: WhatsAppIntake | null;
  intakes: WhatsAppIntake[];
  isProcessing: boolean;
  transcription: string | null;
  voiceNotes: VoiceNote[];
  pendingApproval: WhatsAppIntake[];
};

type BookingState = {
  bookings: Booking[];
  currentBooking: Booking | null;
  isLoading: boolean;
  error: string | null;
};

type ContentState = {
  library: ContentItem[];
  currentItem: ContentItem | null;
  categories: string[];
  isLoading: boolean;
};

type RetreatState = {
  retreats: Retreat[];
  currentRetreat: Retreat | null;
  registrations: any[];
  isLoading: boolean;
};

type KPIState = {
  kpiData: KPIData;
  dateRange: { start: Date; end: Date };
  isLoading: boolean;
};

type AdminState = {
  dashboardView: 'overview' | 'bookings' | 'voice-notes' | 'content' | 'kpis' | 'retreats' | 'corporate';
  filter: string;
  searchQuery: string;
};

type UIState = {
  isSidebarOpen: boolean;
  isMobileMenuOpen: boolean;
  theme: 'light' | 'dark';
  notifications: Array<{ id: string; message: string; type: 'success' | 'error' | 'info' | 'warning' }>;
};

type AppState = AuthState & WhatsAppState & BookingState & ContentState & RetreatState & KPIState & AdminState & UIState;

// ============================================
// ACTIONS
// ============================================

const authActions = (set: any) => ({
  // Login
  login: (user: User, token: string) => {
    set({
      user,
      token,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    });
  },
  
  // Logout
  logout: () => {
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  },
  
  // Set loading
  setAuthLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
  
  // Set error
  setAuthError: (error: string | null) => {
    set({ error });
  },
  
  // Update profile
  updateProfile: (profile: Partial<User>) => {
    set((state: AppState) => ({
      user: state.user ? { ...state.user, ...profile } : null,
    }));
  },
});

const whatsappActions = (set: any) => ({
  // Set current intake
  setIntake: (intake: WhatsAppIntake | null) => {
    set({ intake });
  },
  
  // Add new intake
  addIntake: (intake: WhatsAppIntake) => {
    set((state: AppState) => ({
      intakes: [...state.intakes, intake],
      intake,
    }));
  },
  
  // Update intake
  updateIntake: (id: string, updates: Partial<WhatsAppIntake>) => {
    set((state: AppState) => ({
      intakes: state.intakes.map(i => i.id === id ? { ...i, ...updates } : i),
      intake: state.intake?.id === id ? { ...state.intake, ...updates } : state.intake,
    }));
  },
  
  // Set processing state
  setProcessing: (isProcessing: boolean) => {
    set({ isProcessing });
  },
  
  // Set transcription
  setTranscription: (transcription: string | null) => {
    set({ transcription });
  },
  
  // Add voice note
  addVoiceNote: (voiceNote: VoiceNote) => {
    set((state: AppState) => ({
      voiceNotes: [...state.voiceNotes, voiceNote],
    }));
  },
  
  // Set pending approval
  setPendingApproval: (intakes: WhatsAppIntake[]) => {
    set({ pendingApproval: intakes });
  },
  
  // Approve intake
  approveIntake: (id: string) => {
    set((state: AppState) => ({
      intakes: state.intakes.map(i => i.id === id ? { ...i, status: 'approved' } : i),
      pendingApproval: state.pendingApproval.filter(i => i.id !== id),
    }));
  },
  
  // Reject intake
  rejectIntake: (id: string, reason: string) => {
    set((state: AppState) => ({
      intakes: state.intakes.map(i => i.id === id ? { ...i, status: 'rejected', rejectionReason: reason } : i),
      pendingApproval: state.pendingApproval.filter(i => i.id !== id),
    }));
  },
});

const bookingActions = (set: any) => ({
  // Set bookings
  setBookings: (bookings: Booking[]) => {
    set({ bookings });
  },
  
  // Add booking
  addBooking: (booking: Booking) => {
    set((state: AppState) => ({
      bookings: [...state.bookings, booking],
    }));
  },
  
  // Update booking
  updateBooking: (id: string, updates: Partial<Booking>) => {
    set((state: AppState) => ({
      bookings: state.bookings.map(b => b.id === id ? { ...b, ...updates } : b),
      currentBooking: state.currentBooking?.id === id ? { ...state.currentBooking, ...updates } : state.currentBooking,
    }));
  },
  
  // Set current booking
  setCurrentBooking: (booking: Booking | null) => {
    set({ currentBooking: booking });
  },
  
  // Cancel booking
  cancelBooking: (id: string) => {
    set((state: AppState) => ({
      bookings: state.bookings.map(b => b.id === id ? { ...b, status: 'cancelled' } : b),
      currentBooking: state.currentBooking?.id === id ? { ...state.currentBooking, status: 'cancelled' } : state.currentBooking,
    }));
  },
  
  // Set loading
  setBookingsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
  
  // Set error
  setBookingsError: (error: string | null) => {
    set({ error });
  },
});

const contentActions = (set: any) => ({
  // Set library
  setLibrary: (library: ContentItem[]) => {
    set({ library });
  },
  
  // Add content
  addContent: (content: ContentItem) => {
    set((state: AppState) => ({
      library: [...state.library, content],
    }));
  },
  
  // Update content
  updateContent: (id: string, updates: Partial<ContentItem>) => {
    set((state: AppState) => ({
      library: state.library.map(c => c.id === id ? { ...c, ...updates } : c),
      currentItem: state.currentItem?.id === id ? { ...state.currentItem, ...updates } : state.currentItem,
    }));
  },
  
  // Set current item
  setCurrentItem: (item: ContentItem | null) => {
    set({ currentItem: item });
  },
  
  // Set categories
  setCategories: (categories: string[]) => {
    set({ categories });
  },
  
  // Set loading
  setContentLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
  
  // Delete content
  deleteContent: (id: string) => {
    set((state: AppState) => ({
      library: state.library.filter(c => c.id !== id),
    }));
  },
});

const retreatActions = (set: any) => ({
  // Set retreats
  setRetreats: (retreats: Retreat[]) => {
    set({ retreats });
  },
  
  // Add retreat
  addRetreat: (retreat: Retreat) => {
    set((state: AppState) => ({
      retreats: [...state.retreats, retreat],
    }));
  },
  
  // Update retreat
  updateRetreat: (id: string, updates: Partial<Retreat>) => {
    set((state: AppState) => ({
      retreats: state.retreats.map(r => r.id === id ? { ...r, ...updates } : r),
      currentRetreat: state.currentRetreat?.id === id ? { ...state.currentRetreat, ...updates } : state.currentRetreat,
    }));
  },
  
  // Set current retreat
  setCurrentRetreat: (retreat: Retreat | null) => {
    set({ currentRetreat: retreat });
  },
  
  // Set registrations
  setRegistrations: (registrations: any[]) => {
    set({ registrations });
  },
  
  // Add registration
  addRegistration: (registration: any) => {
    set((state: AppState) => ({
      registrations: [...state.registrations, registration],
    }));
  },
  
  // Set loading
  setRetreatLoading: (isLoading: boolean) => {
    set({ isLoading });
  },
});

const kpiActions = (set: any) => ({
  // Set KPI data
  setKPIData: (kpiData: KPIData) => {
    set({ kpiData });
  },
  
  // Update KPI
  updateKPI: (key: keyof KPIData, value: number) => {
    set((state: AppState) => ({
      kpiData: { ...state.kpiData, [key]: value },
    }));
  },
  
  // Set date range
  setDateRange: (start: Date, end: Date) => {
    set({ dateRange: { start, end } });
  },
  
  // Set loading
  setKPILoading: (isLoading: boolean) => {
    set({ isLoading });
  },
});

const adminActions = (set: any) => ({
  // Set dashboard view
  setDashboardView: (view: AdminState['dashboardView']) => {
    set({ dashboardView: view });
  },
  
  // Set filter
  setFilter: (filter: string) => {
    set({ filter });
  },
  
  // Set search query
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
});

const uiActions = (set: any) => ({
  // Toggle sidebar
  toggleSidebar: () => {
    set((state: AppState) => ({ isSidebarOpen: !state.isSidebarOpen }));
  },
  
  // Set sidebar
  setSidebar: (isOpen: boolean) => {
    set({ isSidebarOpen: isOpen });
  },
  
  // Toggle mobile menu
  toggleMobileMenu: () => {
    set((state: AppState) => ({ isMobileMenuOpen: !state.isMobileMenuOpen }));
  },
  
  // Set mobile menu
  setMobileMenu: (isOpen: boolean) => {
    set({ isMobileMenuOpen: isOpen });
  },
  
  // Set theme
  setTheme: (theme: 'light' | 'dark') => {
    set({ theme });
  },
  
  // Add notification
  addNotification: (notification: { id: string; message: string; type: 'success' | 'error' | 'info' | 'warning' }) => {
    set((state: AppState) => ({
      notifications: [...state.notifications, notification],
    }));
    // Auto-remove after 5 seconds
    setTimeout(() => {
      set((state: AppState) => ({
        notifications: state.notifications.filter(n => n.id !== notification.id),
      }));
    }, 5000);
  },
  
  // Remove notification
  removeNotification: (id: string) => {
    set((state: AppState) => ({
      notifications: state.notifications.filter(n => n.id !== id),
    }));
  },
  
  // Clear notifications
  clearNotifications: () => {
    set({ notifications: [] });
  },
});

// ============================================
// INITIAL STATE
// ============================================

const initialAuthState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const initialWhatsAppState: WhatsAppState = {
  intake: null,
  intakes: [],
  isProcessing: false,
  transcription: null,
  voiceNotes: [],
  pendingApproval: [],
};

const initialBookingState: BookingState = {
  bookings: [],
  currentBooking: null,
  isLoading: false,
  error: null,
};

const initialContentState: ContentState = {
  library: [],
  currentItem: null,
  categories: ['Relationships', 'Family', 'Healing', 'Purpose', 'Restoration', 'Life Lessons', 'Reflections'],
  isLoading: false,
};

const initialRetreatState: RetreatState = {
  retreats: [],
  currentRetreat: null,
  registrations: [],
  isLoading: false,
};

const initialKPIState: KPIState = {
  kpiData: {
    websiteVisitors: 0,
    whatsappLeads: 0,
    consultations: 0,
    paidSessions: 0,
    repeatClients: 0,
    referrals: 0,
    testimonials: 0,
    retreatBookings: 0,
    corporateLeads: 0,
    internationalClients: 0,
  },
  dateRange: { start: new Date(), end: new Date() },
  isLoading: false,
};

const initialAdminState: AdminState = {
  dashboardView: 'overview',
  filter: 'all',
  searchQuery: '',
};

const initialUIState: UIState = {
  isSidebarOpen: true,
  isMobileMenuOpen: false,
  theme: 'light',
  notifications: [],
};

// ============================================
// STORE CREATION
// ============================================

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      // Auth State
      ...initialAuthState,
      
      // WhatsApp State
      ...initialWhatsAppState,
      
      // Booking State
      ...initialBookingState,
      
      // Content State
      ...initialContentState,
      
      // Retreat State
      ...initialRetreatState,
      
      // KPI State
      ...initialKPIState,
      
      // Admin State
      ...initialAdminState,
      
      // UI State
      ...initialUIState,
      
      // Actions
      ...authActions(set),
      ...whatsappActions(set),
      ...bookingActions(set),
      ...contentActions(set),
      ...retreatActions(set),
      ...kpiActions(set),
      ...adminActions(set),
      ...uiActions(set),
    }),
    {
      name: 'house-of-restoration-store',
      partialize: (state) => ({
        // Persist auth and theme
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        theme: state.theme,
        isSidebarOpen: state.isSidebarOpen,
      }),
    }
  )
);

// ============================================
// SELECTORS (Optimized selectors to prevent re-renders)
// ============================================

// Auth Selectors
export const useAuth = () => useStore((state) => ({
  user: state.user,
  token: state.token,
  isAuthenticated: state.isAuthenticated,
  isLoading: state.isLoading,
  error: state.error,
  login: useStore.getState().login,
  logout: useStore.getState().logout,
  updateProfile: useStore.getState().updateProfile,
}));

// WhatsApp Selectors
export const useWhatsApp = () => useStore((state) => ({
  intake: state.intake,
  intakes: state.intakes,
  isProcessing: state.isProcessing,
  transcription: state.transcription,
  voiceNotes: state.voiceNotes,
  pendingApproval: state.pendingApproval,
  setIntake: useStore.getState().setIntake,
  addIntake: useStore.getState().addIntake,
  updateIntake: useStore.getState().updateIntake,
  setProcessing: useStore.getState().setProcessing,
  setTranscription: useStore.getState().setTranscription,
  addVoiceNote: useStore.getState().addVoiceNote,
  setPendingApproval: useStore.getState().setPendingApproval,
  approveIntake: useStore.getState().approveIntake,
  rejectIntake: useStore.getState().rejectIntake,
}));

// Booking Selectors
export const useBookings = () => useStore((state) => ({
  bookings: state.bookings,
  currentBooking: state.currentBooking,
  isLoading: state.isLoading,
  error: state.error,
  setBookings: useStore.getState().setBookings,
  addBooking: useStore.getState().addBooking,
  updateBooking: useStore.getState().updateBooking,
  setCurrentBooking: useStore.getState().setCurrentBooking,
  cancelBooking: useStore.getState().cancelBooking,
}));

// Content Selectors
export const useContent = () => useStore((state) => ({
  library: state.library,
  currentItem: state.currentItem,
  categories: state.categories,
  isLoading: state.isLoading,
  setLibrary: useStore.getState().setLibrary,
  addContent: useStore.getState().addContent,
  updateContent: useStore.getState().updateContent,
  setCurrentItem: useStore.getState().setCurrentItem,
  setCategories: useStore.getState().setCategories,
  deleteContent: useStore.getState().deleteContent,
}));

// Retreat Selectors
export const useRetreats = () => useStore((state) => ({
  retreats: state.retreats,
  currentRetreat: state.currentRetreat,
  registrations: state.registrations,
  isLoading: state.isLoading,
  setRetreats: useStore.getState().setRetreats,
  addRetreat: useStore.getState().addRetreat,
  updateRetreat: useStore.getState().updateRetreat,
  setCurrentRetreat: useStore.getState().setCurrentRetreat,
  setRegistrations: useStore.getState().setRegistrations,
  addRegistration: useStore.getState().addRegistration,
}));

// KPI Selectors
export const useKPIs = () => useStore((state) => ({
  kpiData: state.kpiData,
  dateRange: state.dateRange,
  isLoading: state.isLoading,
  setKPIData: useStore.getState().setKPIData,
  updateKPI: useStore.getState().updateKPI,
  setDateRange: useStore.getState().setDateRange,
}));

// Admin Selectors
export const useAdmin = () => useStore((state) => ({
  dashboardView: state.dashboardView,
  filter: state.filter,
  searchQuery: state.searchQuery,
  setDashboardView: useStore.getState().setDashboardView,
  setFilter: useStore.getState().setFilter,
  setSearchQuery: useStore.getState().setSearchQuery,
}));

// UI Selectors
export const useUI = () => useStore((state) => ({
  isSidebarOpen: state.isSidebarOpen,
  isMobileMenuOpen: state.isMobileMenuOpen,
  theme: state.theme,
  notifications: state.notifications,
  toggleSidebar: useStore.getState().toggleSidebar,
  setSidebar: useStore.getState().setSidebar,
  toggleMobileMenu: useStore.getState().toggleMobileMenu,
  setMobileMenu: useStore.getState().setMobileMenu,
  setTheme: useStore.getState().setTheme,
  addNotification: useStore.getState().addNotification,
  removeNotification: useStore.getState().removeNotification,
  clearNotifications: useStore.getState().clearNotifications,
}));

// Reset store (useful for logout)
export const resetStore = () => {
  useStore.getState().logout();
  useStore.setState({
    ...initialAuthState,
    ...initialWhatsAppState,
    ...initialBookingState,
    ...initialContentState,
    ...initialRetreatState,
    ...initialKPIState,
    ...initialAdminState,
    ...initialUIState,
  });
};

export default useStore;
