// ============================================
// HOUSE OF RESTORATION - WHATSAPP CONCIERGE SERVICE
// MODULE 02: Complete WhatsApp Integration
// ============================================

import api, { handleApiError } from './api';
import {
  WhatsAppIntake,
  VoiceNote,
  WhatsAppMessage,
  WhatsAppConversation,
  ApiResponse,
  Pagination,
} from '../types';

// ============================================
// WHATSAPP INTAKE SERVICE
// ============================================

const WHATSAPP_INTAKE_ENDPOINT = '/whatsapp/intakes';
const WHATSAPP_MESSAGES_ENDPOINT = '/whatsapp/messages';
const WHATSAPP_CONVERSATIONS_ENDPOINT = '/whatsapp/conversations';
const WHATSAPP_VOICE_NOTES_ENDPOINT = '/whatsapp/voice-notes';
const WHATSAPP_TEMPLATES_ENDPOINT = '/whatsapp/templates';
const AI_TRANSCRIPTION_ENDPOINT = '/ai/transcribe';
const AI_SUMMARIZE_ENDPOINT = '/ai/summarize';

// ============================================
// WHATSAPP INTAKE CRUD OPERATIONS
// ============================================

export const whatsappService = {
  // Get all intakes
  async getAllIntakes(pagination?: Pagination): Promise<ApiResponse<{ intakes: WhatsAppIntake[]; pagination: Pagination }>> {
    try {
      const params: Record<string, unknown> = {};
      if (pagination) {
        params.page = pagination.page;
        params.limit = pagination.limit;
      }
      const response = await api.get<ApiResponse<{ intakes: WhatsAppIntake[]; pagination: Pagination }>>(
        WHATSAPP_INTAKE_ENDPOINT,
        { params }
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get intake by ID
  async getIntakeById(id: string): Promise<ApiResponse<WhatsAppIntake>> {
    try {
      const response = await api.get<ApiResponse<WhatsAppIntake>>(`${WHATSAPP_INTAKE_ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Create new intake
  async createIntake(intakeData: Partial<WhatsAppIntake>): Promise<ApiResponse<WhatsAppIntake>> {
    try {
      const response = await api.post<ApiResponse<WhatsAppIntake>>(
        WHATSAPP_INTAKE_ENDPOINT,
        intakeData
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Update intake
  async updateIntake(id: string, updates: Partial<WhatsAppIntake>): Promise<ApiResponse<WhatsAppIntake>> {
    try {
      const response = await api.put<ApiResponse<WhatsAppIntake>>(
        `${WHATSAPP_INTAKE_ENDPOINT}/${id}`,
        updates
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Delete intake
  async deleteIntake(id: string): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await api.delete<ApiResponse<{ message: string }>>(
        `${WHATSAPP_INTAKE_ENDPOINT}/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get intakes by status
  async getIntakesByStatus(status: string): Promise<ApiResponse<WhatsAppIntake[]>> {
    try {
      const response = await api.get<ApiResponse<WhatsAppIntake[]>>(
        `${WHATSAPP_INTAKE_ENDPOINT}/status/${status}`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get pending approval intakes
  async getPendingApproval(): Promise<ApiResponse<WhatsAppIntake[]>> {
    try {
      const response = await api.get<ApiResponse<WhatsAppIntake[]>>(
        `${WHATSAPP_INTAKE_ENDPOINT}/pending-approval`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Approve intake (Nkgono's decision)
  async approveIntake(id: string, response?: string): Promise<ApiResponse<WhatsAppIntake>> {
    try {
      const responseData = await api.post<ApiResponse<WhatsAppIntake>>(
        `${WHATSAPP_INTAKE_ENDPOINT}/${id}/approve`,
        { nkgonoResponse: response, nkgonoApproved: true }
      );
      return responseData.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Reject intake
  async rejectIntake(id: string, reason: string): Promise<ApiResponse<WhatsAppIntake>> {
    try {
      const response = await api.post<ApiResponse<WhatsAppIntake>>(
        `${WHATSAPP_INTAKE_ENDPOINT}/${id}/reject`,
        { rejectionReason: reason, nkgonoApproved: false }
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Mark intake as reviewed by Nkgono
  async markAsReviewed(id: string): Promise<ApiResponse<WhatsAppIntake>> {
    try {
      const response = await api.post<ApiResponse<WhatsAppIntake>>(
        `${WHATSAPP_INTAKE_ENDPOINT}/${id}/review`,
        { nkgonoReviewed: true, nkgonoReviewedAt: new Date() }
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // ============================================
// VOICE NOTE SERVICE
// ============================================

  // Upload voice note
  async uploadVoiceNote(voiceNoteData: {
    clientId: string;
    audioFile: File;
    sessionType?: string;
    notes?: string;
  }): Promise<ApiResponse<VoiceNote>> {
    try {
      const formData = new FormData();
      formData.append('clientId', voiceNoteData.clientId);
      formData.append('audio', voiceNoteData.audioFile);
      if (voiceNoteData.sessionType) {
        formData.append('sessionType', voiceNoteData.sessionType);
      }
      if (voiceNoteData.notes) {
        formData.append('notes', voiceNoteData.notes);
      }

      const response = await api.post<ApiResponse<VoiceNote>>(
        WHATSAPP_VOICE_NOTES_ENDPOINT,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get all voice notes
  async getAllVoiceNotes(): Promise<ApiResponse<VoiceNote[]>> {
    try {
      const response = await api.get<ApiResponse<VoiceNote[]>>(WHATSAPP_VOICE_NOTES_ENDPOINT);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get voice note by ID
  async getVoiceNoteById(id: string): Promise<ApiResponse<VoiceNote>> {
    try {
      const response = await api.get<ApiResponse<VoiceNote>>(
        `${WHATSAPP_VOICE_NOTES_ENDPOINT}/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Update voice note
  async updateVoiceNote(id: string, updates: Partial<VoiceNote>): Promise<ApiResponse<VoiceNote>> {
    try {
      const response = await api.put<ApiResponse<VoiceNote>>(
        `${WHATSAPP_VOICE_NOTES_ENDPOINT}/${id}`,
        updates
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Delete voice note
  async deleteVoiceNote(id: string): Promise<ApiResponse<{ message: string }>> {
    try {
      const response = await api.delete<ApiResponse<{ message: string }>>(
        `${WHATSAPP_VOICE_NOTES_ENDPOINT}/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // ============================================
// AI TRANSCRIPTION & ANALYSIS
// ============================================

  // Request AI transcription for voice note
  async requestTranscription(voiceNoteId: string, language?: string): Promise<ApiResponse<{ transcription: string; status: string }>> {
    try {
      const response = await api.post<ApiResponse<{ transcription: string; status: string }>>(
        `${AI_TRANSCRIPTION_ENDPOINT}/voice-note/${voiceNoteId}`,
        { language: language || 'en' }
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Request AI summarization of intake
  async requestSummarization(intakeId: string): Promise<ApiResponse<{ summary: string; recommendations: string[]; themes: string[] }>> {
    try {
      const response = await api.post<ApiResponse<{ summary: string; recommendations: string[]; themes: string[] }>>(
        `${AI_SUMMARIZE_ENDPOINT}/intake/${intakeId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Analyze voice note (sentiment, themes, urgency)
  async analyzeVoiceNote(voiceNoteId: string): Promise<ApiResponse<{
    sentiment: string;
    themes: string[];
    keyPoints: string[];
    recommendations: string[];
    urgency: string;
    confidence: number;
    tone: string;
    emotion: string;
  }>> {
    try {
      const response = await api.post<ApiResponse<{
        sentiment: string;
        themes: string[];
        keyPoints: string[];
        recommendations: string[];
        urgency: string;
        confidence: number;
        tone: string;
        emotion: string;
      }>>(`${AI_TRANSCRIPTION_ENDPOINT}/analyze/${voiceNoteId}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // ============================================
// WHATSAPP MESSAGES
// ============================================

  // Get messages by conversation
  async getMessages(conversationId: string): Promise<ApiResponse<WhatsAppMessage[]>> {
    try {
      const response = await api.get<ApiResponse<WhatsAppMessage[]>>(
        `${WHATSAPP_MESSAGES_ENDPOINT}/conversation/${conversationId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Send WhatsApp message
  async sendMessage(data: {
    to: string;
    message: string;
    templateId?: string;
    variables?: Record<string, string>;
  }): Promise<ApiResponse<WhatsAppMessage>> {
    try {
      const response = await api.post<ApiResponse<WhatsAppMessage>>(
        WHATSAPP_MESSAGES_ENDPOINT,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Mark message as read
  async markMessageAsRead(messageId: string): Promise<ApiResponse<WhatsAppMessage>> {
    try {
      const response = await api.post<ApiResponse<WhatsAppMessage>>(
        `${WHATSAPP_MESSAGES_ENDPOINT}/${messageId}/read`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // ============================================
// WHATSAPP CONVERSATIONS
// ============================================

  // Get all conversations
  async getAllConversations(status?: string): Promise<ApiResponse<WhatsAppConversation[]>> {
    try {
      const params: Record<string, unknown> = {};
      if (status) {
        params.status = status;
      }
      const response = await api.get<ApiResponse<WhatsAppConversation[]>>(
        WHATSAPP_CONVERSATIONS_ENDPOINT,
        { params }
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get conversation by ID
  async getConversationById(id: string): Promise<ApiResponse<WhatsAppConversation>> {
    try {
      const response = await api.get<ApiResponse<WhatsAppConversation>>(
        `${WHATSAPP_CONVERSATIONS_ENDPOINT}/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Create conversation
  async createConversation(data: Partial<WhatsAppConversation>): Promise<ApiResponse<WhatsAppConversation>> {
    try {
      const response = await api.post<ApiResponse<WhatsAppConversation>>(
        WHATSAPP_CONVERSATIONS_ENDPOINT,
        data
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Update conversation
  async updateConversation(id: string, updates: Partial<WhatsAppConversation>): Promise<ApiResponse<WhatsAppConversation>> {
    try {
      const response = await api.put<ApiResponse<WhatsAppConversation>>(
        `${WHATSAPP_CONVERSATIONS_ENDPOINT}/${id}`,
        updates
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Assign conversation to user
  async assignConversation(conversationId: string, userId: string): Promise<ApiResponse<WhatsAppConversation>> {
    try {
      const response = await api.post<ApiResponse<WhatsAppConversation>>(
        `${WHATSAPP_CONVERSATIONS_ENDPOINT}/${conversationId}/assign`,
        { assignedTo: userId }
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Resolve conversation
  async resolveConversation(conversationId: string): Promise<ApiResponse<WhatsAppConversation>> {
    try {
      const response = await api.post<ApiResponse<WhatsAppConversation>>(
        `${WHATSAPP_CONVERSATIONS_ENDPOINT}/${conversationId}/resolve`
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // ============================================
// WHATSAPP WEBHOOK HANDLER
// ============================================

  // Process incoming WhatsApp webhook (for server-side)
  async processWebhook(webhookData: {
    from: string;
    to: string;
    message: string;
    type: string;
    mediaUrl?: string;
    timestamp: string;
  }): Promise<ApiResponse<{ status: string; intake?: WhatsAppIntake; message?: WhatsAppMessage }>> {
    try {
      const response = await api.post<ApiResponse<{ status: string; intake?: WhatsAppIntake; message?: WhatsAppMessage }>>(
        `${WHATSAPP_INTAKE_ENDPOINT}/webhook`,
        webhookData
      );
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // ============================================
// STATISTICS & ANALYTICS
// ============================================

  // Get WhatsApp statistics
  async getStats(dateRange?: { start: Date; end: Date }): Promise<ApiResponse<{
    totalLeads: number;
    newLeads: number;
    voiceNotes: number;
    avgResponseTime: number;
    conversionRate: number;
    byDay: Record<string, number>;
    byHour: Record<string, number>;
  }>> {
    try {
      const params: Record<string, unknown> = {};
      if (dateRange) {
        params.startDate = dateRange.start.toISOString();
        params.endDate = dateRange.end.toISOString();
      }
      const response = await api.get<ApiResponse<{
        totalLeads: number;
        newLeads: number;
        voiceNotes: number;
        avgResponseTime: number;
        conversionRate: number;
        byDay: Record<string, number>;
        byHour: Record<string, number>;
      }>>(`${WHATSAPP_INTAKE_ENDPOINT}/stats`, { params });
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // ============================================
// EXPORT ALL SERVICES
// ============================================

  // Export all WhatsApp-related services
  getAllIntakes,
  getIntakeById,
  createIntake,
  updateIntake,
  deleteIntake,
  getIntakesByStatus,
  getPendingApproval,
  approveIntake,
  rejectIntake,
  markAsReviewed,
  uploadVoiceNote,
  getAllVoiceNotes,
  getVoiceNoteById,
  updateVoiceNote,
  deleteVoiceNote,
  requestTranscription,
  requestSummarization,
  analyzeVoiceNote,
  getMessages,
  sendMessage,
  markMessageAsRead,
  getAllConversations,
  getConversationById,
  createConversation,
  updateConversation,
  assignConversation,
  resolveConversation,
  processWebhook,
  getStats,
};

export default whatsappService;
