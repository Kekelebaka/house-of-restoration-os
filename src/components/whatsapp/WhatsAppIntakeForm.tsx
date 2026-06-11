// ============================================
// HOUSE OF RESTORATION - WHATSAPP INTAKE FORM
// Client-facing WhatsApp intake component
// ============================================

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useWhatsApp } from '../../store';
import { Button, Card } from '../ui';
import designSystem from '../../styles/designSystem';
import { LionIcon, HealingHandsIcon, RiverIcon, WhatsAppIcon } from '../ui/Icons';

// ============================================
// TYPES
// ============================================

interface IntakeFormData {
  clientName: string;
  email: string;
  phone: string;
  sessionType: 'privateGuidance' | 'healingHands' | 'restorationSession' | 'retreatExperience' | 'corporateWellness';
  preferredDate?: string;
  preferredTime?: string;
  timezone: string;
  message: string;
  voiceNote?: File;
  howDidYouHear: string;
  termsAccepted: boolean;
}

const sessionOptions = [
  { value: 'privateGuidance', label: 'Private Guidance' },
  { value: 'healingHands', label: 'Healing Hands' },
  { value: 'restorationSession', label: 'Restoration Session' },
  { value: 'retreatExperience', label: 'Retreat Experience' },
  { value: 'corporateWellness', label: 'Corporate Wellness' },
];

const timezoneOptions = [
  { value: 'Africa/Johannesburg', label: 'South Africa (GMT+2)' },
  { value: 'GMT', label: 'GMT' },
  { value: 'America/New_York', label: 'Eastern Time (GMT-5)' },
  { value: 'Europe/London', label: 'London (GMT+0/+1)' },
  { value: 'Asia/Dubai', label: 'Dubai (GMT+4)' },
  { value: 'Asia/Kolkata', label: 'India (GMT+5:30)' },
];

const referralOptions = [
  'Website',
  'Social Media',
  'Friend/Family',
  'Testimonial',
  'Search Engine',
  'Other',
];

// ============================================
// COMPONENT
// ============================================

export const WhatsAppIntakeForm: React.FC = () => {
  const navigate = useNavigate();
  const { addIntake, setProcessing, isProcessing, addNotification } = useWhatsApp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const colors = designSystem.colors;
  const typography = designSystem.typography;

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<IntakeFormData>({
    defaultValues: {
      sessionType: 'privateGuidance',
      timezone: 'Africa/Johannesburg',
      termsAccepted: false,
    },
    mode: 'onChange',
  });

  const selectedSession = watch('sessionType');

  // ============================================
// HANDLERS
// ============================================

  const startRecording = () => {
    setRecording(true);
    // In production, this would access the microphone
    addNotification({
      id: `recording-${Date.now()}`,
      message: 'Voice recording feature requires browser microphone access',
      type: 'info',
    });
  };

  const stopRecording = () => {
    setRecording(false);
    // Simulate recording complete
    addNotification({
      id: `recording-complete-${Date.now()}`,
      message: 'Recording complete. Upload to continue.',
      type: 'success',
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith('audio/')) {
        setValue('voiceNote', file);
        setAudioUrl(URL.createObjectURL(file));
      } else {
        addNotification({
          id: `file-error-${Date.now()}`,
          message: 'Please upload an audio file',
          type: 'error',
        });
      }
    }
  };

  const onSubmit = async (data: IntakeFormData) => {
    setIsSubmitting(true);
    setProcessing(true);

    try {
      // Create intake object
      const intake = {
        id: `intake-${Date.now()}`,
        phone: data.phone,
        message: data.message,
        clientName: data.clientName,
        clientEmail: data.email,
        sessionType: data.sessionType,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        timezone: data.timezone,
        status: 'received' as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Add to store
      await addIntake(intake);

      // Show thank you
      setShowThankYou(true);

      addNotification({
        id: `intake-success-${Date.now()}`,
        message: 'Your request has been received. Nkgono Mamoya will review and respond within 24-48 hours.',
        type: 'success',
      });

      // In production, this would also trigger AI summarization
      // and send to WhatsApp API

    } catch (error) {
      addNotification({
        id: `intake-error-${Date.now()}`,
        message: 'Failed to submit your request. Please try again.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
      setProcessing(false);
    }
  };

  const getSessionDescription = (type: string) => {
    const descriptions: Record<string, string> = {
      privateGuidance: 'One-on-one guidance session with Nkgono Mamoya',
      healingHands: 'Healing hands energy work and restoration',
      restorationSession: 'Comprehensive restoration and clarity session',
      retreatExperience: 'Immersive retreat experience in Ladybrand',
      corporateWellness: 'Executive restoration and team alignment',
    };
    return descriptions[type] || '';
  };

  // ============================================
// RENDER
// ============================================

  if (showThankYou) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex items-center justify-center min-h-screen bg-stoneIvory"
      >
        <Card variant="premium" className="max-w-2xl mx-4 p-12 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-8">
              <HealingHandsIcon className="w-24 h-24 mx-auto mb-6" style={{ color: colors.lionGold }} />
            </div>
            <h1
              className={typography.h1.className}
              style={{ color: colors.riverMidnight }}
            >
              Thank You
            </h1>
            <p
              className={typography.body.className + ' mt-4 text-lg'}
              style={{ color: colors.healingGreen }}
            >
              Your request has been received
            </p>
            <p className={typography.body.className + ' mt-6 text-gray-600'}>
              Nkgono Mamoya will personally review your request and respond within 24-48 hours.
              You will receive a confirmation via WhatsApp shortly.
            </p>
            <div className="mt-10">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/')}
                startIcon={<LionIcon />}
              >
                Return Home
              </Button>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-stoneIvory py-16"
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1
            className={typography.h1.className}
            style={{ color: colors.riverMidnight }}
          >
            Begin Your Restoration Journey
          </h1>
          <p
            className={typography.subtitle.className + ' mt-4'}
            style={{ color: colors.healingGreen }}
          >
            Share your story, and Nkgono Mamoya will guide you to clarity.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="flex items-center gap-2 text-sm text-gray-500">
              <WhatsAppIcon className="w-5 h-5 text-green-500" />
              WhatsApp Concierge
            </span>
            <span className="text-sm text-gray-500">|</span>
            <span className="text-sm text-gray-500">Secure & Confidential</span>
          </div>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <motion.div
                className={`flex items-center ${s === step ? 'text-lionGold' : 'text-gray-300'}`}
                animate={{ scale: s === step ? 1.1 : 1 }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all ${
                      s === step
                        ? 'border-lionGold bg-lionGold bg-opacity-10'
                        : 'border-gray-200'
                    }`}
                  >
                    <span className={`font-bold ${s === step ? 'text-lionGold' : 'text-gray-400'}`}>
                      {s}
                    </span>
                  </div>
                  <span className={`mt-2 text-xs font-medium ${s === step ? 'text-lionGold' : 'text-gray-400'}`}>
                    {s === 1 ? 'Your Story' : s === 2 ? 'Your Needs' : 'Confirmation'}
                  </span>
                </div>
              </motion.div>
              {s < 3 && (
                <div
                  className={`w-16 sm:w-24 h-1 mx-2 rounded-full transition-all ${
                    s < step ? 'bg-lionGold' : 'bg-gray-200'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form Card */}
        <Card variant="form" className="p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  {/* Step 1: Contact Information */}
                  <h2
                    className={typography.h2.className + ' mb-8'}
                    style={{ color: colors.riverMidnight }}
                  >
                    Tell Us About Yourself
                  </h2>

                  <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className={typography.label.className}>
                        Full Name <span className="text-ancestralRed">*</span>
                      </label>
                      <Controller
                        name="clientName"
                        control={control}
                        rules={{ required: 'Name is required' }}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="text"
                            placeholder="Your full name"
                            className={typography.input.className}
                          />
                        )}
                      />
                      {errors.clientName && (
                        <p className="text-ancestralRed text-sm mt-1">{errors.clientName.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className={typography.label.className}>
                        Email Address <span className="text-ancestralRed">*</span>
                      </label>
                      <Controller
                        name="email"
                        control={control}
                        rules={{
                          required: 'Email is required',
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                          ,
                            message: 'Please enter a valid email',
                          },
                        }}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="email"
                            placeholder="your@email.com"
                            className={typography.input.className}
                          />
                        )}
                      />
                      {errors.email && (
                        <p className="text-ancestralRed text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={typography.label.className}>
                        WhatsApp Number <span className="text-ancestralRed">*</span>
                      </label>
                      <div className="flex gap-3">
                        <select
                          className={typography.input.className + ' w-20'}
                          defaultValue="+27"
                        >
                          <option value="+27">+27 (ZA)</option>
                          <option value="+1">+1 (US)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+91">+91 (IN)</option>
                        </select>
                        <Controller
                          name="phone"
                          control={control}
                          rules={{ required: 'Phone number is required' }}
                          render={({ field }) => (
                            <input
                              {...field}
                              type="tel"
                              placeholder="Phone number"
                              className={typography.input.className + ' flex-1'}
                            />
                          )}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-ancestralRed text-sm mt-1">{errors.phone.message}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">
                        We will contact you via WhatsApp
                      </p>
                    </div>

                    {/* How Did You Hear */}
                    <div>
                      <label className={typography.label.className}>
                        How did you hear about us?
                      </label>
                      <Controller
                        name="howDidYouHear"
                        control={control}
                        render={({ field }) => (
                          <select {...field} className={typography.input.className}>
                            {referralOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button variant="secondary" type="button" onClick={() => navigate('/')}>
                      Cancel
                    </Button>
                    <Button
                      variant="primary"
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!isValid}
                      endIcon={<RiverIcon />}
                    >
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* Step 2: Session Selection */}
                  <h2
                    className={typography.h2.className + ' mb-8'}
                    style={{ color: colors.riverMidnight }}
                  >
                    What Brings You To Restoration?
                  </h2>

                  <div className="space-y-6">
                    {/* Session Type */}
                    <div>
                      <label className={typography.label.className}>
                        Session Type <span className="text-ancestralRed">*</span>
                      </label>
                      <Controller
                        name="sessionType"
                        control={control}
                        render={({ field }) => (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {sessionOptions.map((option) => (
                              <label
                                key={option.value}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                  field.value === option.value
                                    ? 'border-lionGold bg-lionGold bg-opacity-5'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <input
                                  type="radio"
                                  {...field}
                                  value={option.value}
                                  className="hidden"
                                  onChange={() => field.onChange(option.value)}
                                />
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                      field.value === option.value
                                        ? 'border-lionGold bg-lionGold'
                                        : 'border-gray-300'
                                    }`}
                                  >
                                    {field.value === option.value && (
                                      <div className="w-3 h-3 rounded-full bg-lionGold" />
                                    )}
                                  </div>
                                  <div>
                                    <h4 className={`${typography.h4.className} text-riverMidnight ${field.value === option.value ? 'font-bold' : ''}`}>
                                      {option.label}
                                    </h4>
                                    <p className={typography.body.className + ' text-sm text-gray-500 mt-1'}>{
                                      getSessionDescription(option.value)
                                    }</p>
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        )}
                      />
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className={typography.label.className}>
                        Preferred Date
                      </label>
                      <Controller
                        name="preferredDate"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="date"
                            min={new Date().toISOString().split('T')[0]}
                            className={typography.input.className}
                          />
                        )}
                      />
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className={typography.label.className}>
                        Preferred Time
                      </label>
                      <Controller
                        name="preferredTime"
                        control={control}
                        render={({ field }) => (
                          <input
                            {...field}
                            type="time"
                            className={typography.input.className}
                          />
                        )}
                      />
                    </div>

                    {/* Timezone */}
                    <div>
                      <label className={typography.label.className}>
                        Your Timezone
                      </label>
                      <Controller
                        name="timezone"
                        control={control}
                        render={({ field }) => (
                          <select {...field} className={typography.input.className}>
                            {timezoneOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        )}
                      />
                    </div>

                    {/* Your Message */}
                    <div>
                      <label className={typography.label.className}>
                        Your Message <span className="text-ancestralRed">*</span>
                      </label>
                      <Controller
                        name="message"
                        control={control}
                        rules={{ required: 'Please share what brings you to restoration' }}
                        render={({ field }) => (
                          <textarea
                            {...field}
                            rows={5}
                            placeholder="Share what brings you to restoration. What would you like to achieve? What challenges are you facing?"
                            className={typography.input.className + ' resize-none'}
                          />
                        )}
                      />
                      {errors.message && (
                        <p className="text-ancestralRed text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Voice Note Upload */}
                    <div>
                      <label className={typography.label.className}>
                        Upload Voice Note (Optional)
                      </label>
                      <p className="text-sm text-gray-500 mb-3">
                        Share your story in your own voice. Nkgono will listen personally.
                      </p>
                      
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                        {audioUrl ? (
                          <div className="space-y-4">
                            <audio src={audioUrl} controls className="w-full" />
                            <Button
                              variant="secondary"
                              onClick={() => {
                                setAudioUrl(null);
                                setValue('voiceNote', undefined);
                              }}
                              startIcon={<LionIcon />}
                            >
                              Remove & Re-record
                            </Button>
                          </div>
                        ) : (
                          <>
                            <input
                              type="file"
                              accept="audio/*"
                              onChange={handleFileChange}
                              className="hidden"
                              id="voice-note-upload"
                            />
                            <label htmlFor="voice-note-upload" className="cursor-pointer">
                              <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-full border-2 border-lionGold border-dashed flex items-center justify-center">
                                  <svg className="w-8 h-8 text-lionGold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className={typography.body.className + ' text-lionGold font-medium'}>
                                    Upload Audio File
                                  </p>
                                  <p className={typography.body.className + ' text-sm text-gray-500'}>
                                    MP3, M4A, or WAV (Max 15MB)
                                  </p>
                                </div>
                              </div>
                            </label>
                            <p className="text-xs text-gray-400 mt-4">
                              Or record directly (requires microphone access)
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button variant="secondary" type="button" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button
                      variant="primary"
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!isValid || !watch('message')}
                      endIcon={<RiverIcon />}
                    >
                      Continue
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* Step 3: Confirmation */}
                  <h2
                    className={typography.h2.className + ' mb-8'}
                    style={{ color: colors.riverMidnight }}
                  >
                    Confirm Your Request
                  </h2>

                  <div className="space-y-6">
                    {/* Summary Card */}
                    <Card variant="subtle" className="p-6">
                      <h3 className={typography.h3.className + ' mb-4 text-riverMidnight'}>Request Summary</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Name</p>
                          <p className={typography.body.className}>{watch('clientName') || 'Not provided'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Email</p>
                          <p className={typography.body.className}>{watch('email') || 'Not provided'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Phone</p>
                          <p className={typography.body.className}>{watch('phone') || 'Not provided'}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-1">Session Type</p>
                          <p className={typography.body.className}>{
                            sessionOptions.find(s => s.value === selectedSession)?.label || 'Not selected'
                          }</p>
                        </div>
                        {watch('preferredDate') && (
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Preferred Date</p>
                            <p className={typography.body.className}>{watch('preferredDate')}</p>
                          </div>
                        )}
                        {watch('preferredTime') && (
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Preferred Time</p>
                            <p className={typography.body.className}>{watch('preferredTime')}</p>
                          </div>
                        )}
                      </div>

                      <div className="mt-6">
                        <p className="text-sm text-gray-500 mb-1">Your Message</p>
                        <p className={typography.body.className}>{watch('message') || 'Not provided'}</p>
                      </div>
                    </Card>

                    {/* Terms and Conditions */}
                    <Card variant="subtle" className="p-6">
                      <Controller
                        name="termsAccepted"
                        control={control}
                        rules={{ required: 'You must accept the terms to continue' }}
                        render={({ field }) => (
                          <label className="flex items-start gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              {...field}
                              className="w-5 h-5 mt-1 rounded border-2 border-gray-300 text-lionGold focus:ring-lionGold focus:ring-2"
                            />
                            <div>
                              <p className={typography.body.className + ' font-medium text-riverMidnight'}>{
                                'I accept the House of Restoration Terms and Conditions'
                              }</p>
                              <p className="text-sm text-gray-500 mt-2">
                                All information is kept strictly confidential. Nkgono Mamoya reviews each request personally.
                                Response time is typically 24-48 hours.
                              </p>
                            </div>
                          </label>
                        )}
                      />
                      {errors.termsAccepted && (
                        <p className="text-ancestralRed text-sm mt-2">{errors.termsAccepted.message}</p>
                      )}
                    </Card>
                  </div>

                  <div className="mt-8 flex justify-between">
                    <Button variant="secondary" type="button" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={isSubmitting || isProcessing || !watch('termsAccepted')}
                      isLoading={isSubmitting || isProcessing}
                      startIcon={<WhatsAppIcon />}
                    >
                      Submit Request
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </Card>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            <LionIcon className="w-4 h-4 inline mx-1" />
            Nkgono Mamoya - House of Restoration™ | Ladybrand, Free State, South Africa
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhatsAppIntakeForm;
