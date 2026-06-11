// ============================================
// HOUSE OF RESTORATION - WHATSAPP ADMIN PANEL
// Nkgono's review and approval interface
// ============================================

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWhatsApp, useBookings, useUI } from '../../store';
import { Button, Card, Badge } from '../ui';
import designSystem from '../../styles/designSystem';
import { LionIcon, HealingHandsIcon, RiverIcon, CheckIcon, XIcon, ClockIcon, WhatsAppIcon } from '../ui/Icons';

// ============================================
// TYPES
// ============================================

type FilterType = 'all' | 'pending' | 'approved' | 'rejected' | 'summarized';

// ============================================
// COMPONENT
// ============================================

export const WhatsAppAdminPanel: React.FC = () => {
  const {
    intakes,
    pendingApproval,
    setPendingApproval,
    approveIntake,
    rejectIntake,
    setIntake,
    updateIntake,
    setProcessing,
    isProcessing,
  } = useWhatsApp();
  
  const { addBooking } = useBookings();
  const { addNotification } = useUI();
  
  const [filter, setFilter] = useState<FilterType>('pending');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIntake, setSelectedIntake] = useState<string | null>(null);
  const [responseText, setResponseText] = useState('');
  const [rejectReason, setRejectReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const colors = designSystem.colors;
  const typography = designSystem.typography;

  // ============================================
// DATA PROCESSING
// ============================================

  const filteredIntakes = intakes.filter((intake) => {
    // Filter by status
    if (filter === 'all') return true;
    if (filter === 'pending') return intake.status === 'received' || intake.status === 'processing';
    if (filter === 'approved') return intake.status === 'approved';
    if (filter === 'rejected') return intake.status === 'rejected';
    if (filter === 'summarized') return intake.aiSummary || intake.aiTranscription;
    return true;
  }).filter((intake) => {
    // Filter by search
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      intake.clientName?.toLowerCase().includes(query) ||
      intake.phone?.toLowerCase().includes(query) ||
      intake.message?.toLowerCase().includes(query) ||
      intake.aiSummary?.toLowerCase().includes(query)
    );
  });

  const getIntakeCount = (status: FilterType) => {
    if (status === 'all') return intakes.length;
    if (status === 'pending') return intakes.filter(i => i.status === 'received' || i.status === 'processing').length;
    if (status === 'approved') return intakes.filter(i => i.status === 'approved').length;
    if (status === 'rejected') return intakes.filter(i => i.status === 'rejected').length;
    if (status === 'summarized') return intakes.filter(i => i.aiSummary || i.aiTranscription).length;
    return 0;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'received':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'summarized':
        return 'bg-purple-100 text-purple-800';
      case 'reviewed':
        return 'bg-indigo-100 text-indigo-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'responded':
        return 'bg-teal-100 text-teal-800';
      case 'converted':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (urgency?: string) => {
    switch (urgency) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // ============================================
// HANDLERS
// ============================================

  const handleApprove = async (intakeId: string) => {
    if (!responseText.trim()) {
      addNotification({
        id: `response-empty-${Date.now()}`,
        message: 'Please provide a response message',
        type: 'error',
      });
      return;
    }

    setIsLoading(true);
    setProcessing(true);

    try {
      await approveIntake(intakeId, responseText);
      
      // Update local state
      updateIntake(intakeId, {
        status: 'approved',
        nkgonoResponse: responseText,
        nkgonoApproved: true,
        nkgonoReviewed: true,
      });

      // Create booking from intake
      const intake = intakes.find(i => i.id === intakeId);
      if (intake) {
        const booking = {
          id: `booking-${Date.now()}`,
          clientId: intake.id,
          client: {
            id: intake.id,
            email: intake.clientEmail || '',
            firstName: intake.clientName || '',
            lastName: '',
            role: 'client' as const,
            phone: intake.phone,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          sessionType: intake.sessionType || 'privateGuidance',
          date: intake.preferredDate ? new Date(intake.preferredDate) : new Date(),
          startTime: intake.preferredTime || '10:00',
          endTime: '11:00',
          status: 'pending' as const,
          notes: intake.message,
          voiceNoteUrl: intake.voiceNoteUrl,
          voiceNoteTranscription: intake.aiTranscription,
          aiSummary: intake.aiSummary,
          nkgonoReviewed: true,
          nkgonoDecision: 'approved',
          nkgonoNotes: responseText,
          confirmedAt: new Date(),
          reminderSent: false,
          followUpSent: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        
        await addBooking(booking);
      }

      addNotification({
        id: `approve-success-${Date.now()}`,
        message: 'Intake approved and booking created',
        type: 'success',
      });

      setSelectedIntake(null);
      setResponseText('');
    } catch (error) {
      addNotification({
        id: `approve-error-${Date.now()}`,
        message: 'Failed to approve intake',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
      setProcessing(false);
    }
  };

  const handleReject = async (intakeId: string) => {
    if (!rejectReason.trim()) {
      addNotification({
        id: `reject-empty-${Date.now()}`,
        message: 'Please provide a rejection reason',
        type: 'error',
      });
      return;
    }

    setIsLoading(true);

    try {
      await rejectIntake(intakeId, rejectReason);
      
      updateIntake(intakeId, {
        status: 'rejected',
        nkgonoResponse: rejectReason,
        nkgonoApproved: false,
        nkgonoReviewed: true,
        rejectionReason: rejectReason,
      });

      addNotification({
        id: `reject-success-${Date.now()}`,
        message: 'Intake rejected',
        type: 'warning',
      });

      setSelectedIntake(null);
      setRejectReason('');
    } catch (error) {
      addNotification({
        id: `reject-error-${Date.now()}`,
        message: 'Failed to reject intake',
        type: 'error',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestSummary = (intakeId: string) => {
    // In production, this would call the AI service
    addNotification({
      id: `summary-request-${Date.now()}`,
      message: 'AI summarization requested (demo mode)',
      type: 'info',
    });

    // Simulate AI response
    setTimeout(() => {
      updateIntake(intakeId, {
        status: 'summarized',
        aiSummary: `AI Analysis: This client is seeking ${intakes.find(i => i.id === intakeId)?.sessionType || 'guidance'} for personal restoration. Key themes: clarity, healing, purpose. Recommended action: Approve for private session.`,
        aiTranscription: 'Full transcription would appear here...',
        aiRecommendations: ['Schedule private session', 'Prepare restoration exercises', 'Follow up within 24 hours'],
      });
      addNotification({
        id: `summary-complete-${Date.now()}`,
        message: 'AI analysis complete',
        type: 'success',
      });
    }, 2000);
  };

  const selected = intakes.find(i => i.id === selectedIntake);

  // ============================================
// RENDER
// ============================================

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-stoneIvory py-8"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        >
          <div>
            <h1
              className={typography.h1.className}
              style={{ color: colors.riverMidnight }}
            >
              WhatsApp Concierge
            </h1>
            <p
              className={typography.subtitle.className + ' mt-2'}
              style={{ color: colors.healingGreen }}
            >
              Nkgono Mamoya's Review Dashboard
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button
              variant="whatsapp"
              startIcon={<WhatsAppIcon />}
            >
              <span className="hidden sm:inline">Sync WhatsApp</span>
            </Button>
            <Button
              variant="primary"
              onClick={() => setFilter('pending')}
            >
              <span className="hidden sm:inline">Pending Review</span>
              <span className="sm:hidden">Pending</span>
              {getIntakeCount('pending') > 0 && (
                <Badge variant="number" className="ml-2">
                  {getIntakeCount('pending')}
                </Badge>
              )}
            </Button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8"
        >
          {[
            { label: 'Total', count: intakes.length, color: 'riverMidnight' },
            { label: 'Pending', count: getIntakeCount('pending'), color: 'lionGold' },
            { label: 'Approved', count: getIntakeCount('approved'), color: 'healingGreen' },
            { label: 'Rejected', count: getIntakeCount('rejected'), color: 'ancestralRed' },
            { label: 'Summarized', count: getIntakeCount('summarized'), color: 'royalBlue' },
          ].map((stat) => (
            <Card
              key={stat.label}
              variant="stat"
              className="p-4 text-center"
              style={{
                backgroundColor: colors[stat.color as keyof typeof colors],
              }}
            >
              <p className="text-3xl font-bold text-white">{stat.count}</p>
              <p className="text-sm text-white text-opacity-80 mt-1">{stat.label}</p>
            </Card>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {[
            { value: 'all', label: 'All' },
            { value: 'pending', label: 'Pending' },
            { value: 'approved', label: 'Approved' },
            { value: 'rejected', label: 'Rejected' },
            { value: 'summarized', label: 'Summarized' },
          ].map((f) => (
            <Button
              key={f.value}
              variant={filter === f.value ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter(f.value as FilterType)}
              className="flex items-center gap-2"
            >
              <span>{f.label}</span>
              {f.value !== 'all' && getIntakeCount(f.value as FilterType) > 0 && (
                <Badge variant="number" size="sm">
                  {getIntakeCount(f.value as FilterType)}
                </Badge>
              )}
            </Button>
          ))}
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="relative max-w-md">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by name, phone, or message..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`${typography.input.className} pl-12 w-full`}
            />
          </div>
        </motion.div>

        {/* Intake List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {filteredIntakes.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <HealingHandsIcon
                    className="w-24 h-24 mx-auto mb-4"
                    style={{ color: colors.lionGold, opacity: 0.5 }}
                  />
                  <h3 className={typography.h3.className + ' text-gray-500'}>No intakes found</h3>
                  <p className="text-gray-400 mt-2">Try adjusting your filters or search query</p>
                </motion.div>
              ) : (
                filteredIntakes.map((intake, index) => (
                  <motion.div
                    key={intake.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      variant={selectedIntake === intake.id ? 'active' : 'subtle'}
                      className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedIntake(selectedIntake === intake.id ? null : intake.id)}
                    >
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Avatar & Info */}
                        <div className="flex items-start gap-4 flex-1">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                            style={{ backgroundColor: colors.riverMidnight }}
                          >
                            {(intake.clientName?.charAt(0) || 'N').toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className={typography.h3.className + ' truncate'}>{
                                intake.clientName || 'Anonymous'
                              }</h3>
                              <Badge variant="status" className={getStatusColor(intake.status)}>
                                {intake.status.replace(/([A-Z])/g, ' $1').trim()}
                              </Badge>
                              {intake.aiAnalysis?.urgency && (
                                <Badge variant="status" className={getPriorityColor(intake.aiAnalysis.urgency)}>
                                  {intake.aiAnalysis.urgency.toUpperCase()}
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{intake.phone}</p>
                            <p className="text-sm text-gray-500">{intake.clientEmail}</p>
                          </div>
                        </div>

                        {/* Session & Time */}
                        <div className="flex-1 text-right">
                          <p className={typography.body.className + ' font-medium'}>{
                            intake.sessionType?.replace(/([A-Z])/g, ' $1').trim() || 'Not specified'
                          }</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {intake.preferredDate} at {intake.preferredTime}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(intake.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      {/* Message Preview */}
                      <AnimatePresence>
                        {selectedIntake === intake.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden mt-4 pt-4 border-t border-gray-200"
                          >
                            <p className="text-sm text-gray-600 mb-4">{intake.message}</p>
                            
                            {intake.aiSummary && (
                              <div className="bg-lionGold bg-opacity-10 p-4 rounded-lg mb-4">
                                <h4 className={typography.h4.className + ' text-lionGold mb-2'}>AI Analysis</h4>
                                <p className="text-sm text-riverMidnight">{intake.aiSummary}</p>
                              </div>
                            )}

                            {intake.aiRecommendations && intake.aiRecommendations.length > 0 && (
                              <div className="bg-healingGreen bg-opacity-10 p-4 rounded-lg mb-4">
                                <h4 className={typography.h4.className + ' text-healingGreen mb-2'}>AI Recommendations</h4>
                                <ul className="text-sm list-disc list-inside">
                                  {intake.aiRecommendations.map((rec, i) => (
                                    <li key={i} className="text-riverMidnight">{rec}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-2">
                              {intake.status === 'received' && (
                                <>
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleRequestSummary(intake.id);
                                    }}
                                    startIcon={<RiverIcon />}
                                  >
                                    AI Summary
                                  </Button>
                                  <Button
                                    variant="success"
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedIntake(intake.id);
                                    }}
                                    startIcon={<CheckIcon />}
                                  >
                                    Approve
                                  </Button>
                                  <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedIntake(intake.id);
                                    }}
                                    startIcon={<XIcon />}
                                  >
                                    Decline
                                  </Button>
                                </>
                              )}
                              
                              {intake.status === 'summarized' && (
                                <>
                                  <Button
                                    variant="success"
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedIntake(intake.id);
                                    }}
                                    startIcon={<CheckIcon />}
                                  >
                                    Approve
                                  </Button>
                                  <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedIntake(intake.id);
                                    }}
                                    startIcon={<XIcon />}
                                  >
                                    Decline
                                  </Button>
                                </>
                              )}
                              
                              {intake.status === 'approved' && (
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  startIcon={<ClockIcon />}
                                >
                                  Scheduled
                                </Button>
                              )}
                              
                              {intake.status === 'rejected' && (
                                <Button
                                  variant="secondary"
                                  size="sm"
                                >
                                  View Reason
                                </Button>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Response Modal */}
        <AnimatePresence>
          {selectedIntake && selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedIntake(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <Card variant="form" className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className={typography.h2.className + ' text-riverMidnight'}>Respond to Request</h2>
                      <p className="text-gray-500 mt-1">From: {selected.clientName || 'Anonymous'}</p>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedIntake(null)}
                      className="p-2"
                    >
                      <XIcon className="w-6 h-6" />
                    </Button>
                  </div>

                  {/* Intake Details */}
                  <div className="mb-6 p-4 bg-stoneIvory rounded-xl">
                    <h3 className={typography.h3.className + ' text-riverMidnight mb-3'}>Request Details</h3>
                    <p className="text-sm text-gray-600 mb-2">{selected.message}</p>
                    {selected.aiSummary && (
                      <div className="mt-4 p-3 bg-lionGold bg-opacity-10 rounded-lg">
                        <p className="text-sm text-lionGold font-medium mb-1">AI Summary:</p>
                        <p className="text-sm">{selected.aiSummary}</p>
                      </div>
                    )}
                  </div>

                  {/* Response Form */}
                  {selected.status === 'received' || selected.status === 'summarized' ? (
                    <div className="space-y-4">
                      <textarea
                        value={responseText}
                        onChange={(e) => setResponseText(e.target.value)}
                        placeholder="Your response to this request..."
                        rows={4}
                        className={`${typography.input.className} resize-none`}
                      />
                      <div className="flex gap-4">
                        <Button
                          variant="danger"
                          onClick={() => {
                            // Switch to reject mode
                            setResponseText(rejectReason);
                            setRejectReason(responseText);
                          }}
                          className="flex-1"
                        >
                          Decline
                        </Button>
                        <Button
                          variant="success"
                          onClick={() => handleApprove(selected.id)}
                          disabled={!responseText.trim() || isLoading}
                          isLoading={isLoading}
                          startIcon={<CheckIcon />}
                          className="flex-1"
                        >
                          Approve & Create Booking
                        </Button>
                      </div>
                    </div>
                  ) : selected.status === 'approved' ? (
                    <div className="p-4 bg-green-100 rounded-xl">
                      <p className="text-green-800">
                        This request has been approved. Booking created.
                      </p>
                      {selected.nkgonoResponse && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-600">Your response:</p>
                          <p className="text-sm">{selected.nkgonoResponse}</p>
                        </div>
                      )}
                    </div>
                  ) : selected.status === 'rejected' ? (
                    <div className="p-4 bg-red-100 rounded-xl">
                      <p className="text-red-800">
                        This request has been rejected.
                      </p>
                      {selected.rejectionReason && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-600">Reason:</p>
                          <p className="text-sm">{selected.rejectionReason}</p>
                        </div>
                      )}
                    </div>
                  ) : null}

                  <div className="mt-6 flex justify-end">
                    <Button variant="secondary" onClick={() => setSelectedIntake(null)}>
                      Close
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reject Modal */}
        <AnimatePresence>
          {selectedIntake && selected && selected.status === 'received' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedIntake(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full"
              >
                <Card variant="form" className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className={typography.h2.className + ' text-red-600'}>Decline Request</h2>
                      <p className="text-gray-500 mt-1">From: {selected.clientName || 'Anonymous'}</p>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedIntake(null)}
                      className="p-2 text-gray-400"
                    >
                      <XIcon className="w-6 h-6" />
                    </Button>
                  </div>

                  <p className="mb-4 text-gray-600">
                    Please provide a kind and respectful reason for declining this request.
                  </p>

                  <textarea
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                    placeholder="Reason for declining..."
                    rows={4}
                    className={`${typography.input.className} resize-none`}
                  />

                  <div className="mt-6 flex justify-between">
                    <Button variant="secondary" onClick={() => setSelectedIntake(null)}>
                      Cancel
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleReject(selected.id)}
                      disabled={!rejectReason.trim() || isLoading}
                      isLoading={isLoading}
                      startIcon={<XIcon />}
                    >
                      Decline Request
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WhatsAppAdminPanel;
