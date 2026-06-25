// ============================================
// HOUSE OF RESTORATION - RETREAT REGISTRATION (MODULE 05)
// ============================================

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { colors, spacing, typography, borderRadius, shadows } from '../../styles/designSystem';
import { ResponsiveLayout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

const RetreatRegistration: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    attendees: 1, specialRequirements: '', dietaryRestrictions: [] as string[],
    emergencyContact: '', emergencyPhone: '', agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: any) => setFormData(prev => ({ ...prev, [field]: value }));
  const toggleDietary = (option: string) => {
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(option)
        ? prev.dietaryRestrictions.filter(d => d !== option)
        : [...prev.dietaryRestrictions, option],
    }));
  };

  const handleSubmit = () => { setSubmitted(true); };

  const containerStyle = { minHeight: '80vh', backgroundColor: colors.stoneIvory[900] };
  const inputStyle = { width: '100%', padding: '12px 16px', borderRadius: borderRadius.md, border: `1px solid ${colors.neutral.gray[300]}`, fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.base, outline: 'none', backgroundColor: colors.neutral.white };
  const labelStyle = { fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, color: colors.text.primary, marginBottom: spacing['1'], display: 'block' };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={containerStyle as React.CSSProperties}>
        <ResponsiveLayout variant="public">
          <div style={{ textAlign: 'center', padding: `${spacing['20']} 0`, maxWidth: 500, margin: '0 auto' }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ fontSize: '4rem', marginBottom: spacing['6'] }}>✨</motion.div>
            <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['4xl'], color: colors.text.primary, marginBottom: spacing['4'] }}>Registration Received!</h1>
            <p style={{ fontFamily: typography.fontFamily.body, fontSize: typography.fontSize.lg, color: colors.text.secondary, marginBottom: spacing['8'] }}>
              Thank you, {formData.firstName}. Your retreat registration has been submitted. Nkgono Mamoya will personally review and confirm your spot within 24 hours.
            </p>
            <div style={{ display: 'flex', gap: spacing['3'], justifyContent: 'center' }}>
              <Button variant="primary" onClick={() => navigate('/retreats')}>View All Retreats</Button>
              <Button variant="outline" onClick={() => navigate('/')}>Return Home</Button>
            </div>
          </div>
        </ResponsiveLayout>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={containerStyle as React.CSSProperties}>
      <ResponsiveLayout variant="public">
        <div style={{ maxWidth: 700, margin: '0 auto', padding: `${spacing['12']} 0` }}>
          {/* Header */}
          <Link to={`/retreats/${id}`} style={{ color: colors.lionGold[600], textDecoration: 'none', fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, letterSpacing: typography.letterSpacing.wider, textTransform: 'uppercase' }}>
            ← Back to Retreat
          </Link>
          <h1 style={{ fontFamily: typography.fontFamily.display, fontSize: typography.fontSize['4xl'], color: colors.text.primary, marginTop: spacing['4'], marginBottom: spacing['2'] }}>Retreat Registration</h1>
          <p style={{ color: colors.text.secondary, marginBottom: spacing['6'] }}>Complete the form below to reserve your spot.</p>

          {/* Progress Steps */}
          <div style={{ display: 'flex', gap: spacing['2'], marginBottom: spacing['8'] }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{ flex: 1, height: 4, borderRadius: 2, backgroundColor: s <= step ? colors.lionGold[600] : colors.neutral.gray[200], transition: 'background-color 0.3s' }} />
            ))}
          </div>

          <Card variant="form" style={{ padding: spacing['8'] }}>
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, color: colors.text.primary, marginBottom: spacing['6'] }}>Personal Information</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing['4'], marginBottom: spacing['4'] }}>
                  <div><label style={labelStyle}>First Name *</label><input style={inputStyle} value={formData.firstName} onChange={e => handleChange('firstName', e.target.value)} placeholder="Your first name" /></div>
                  <div><label style={labelStyle}>Last Name *</label><input style={inputStyle} value={formData.lastName} onChange={e => handleChange('lastName', e.target.value)} placeholder="Your last name" /></div>
                </div>
                <div style={{ marginBottom: spacing['4'] }}><label style={labelStyle}>Email *</label><input style={inputStyle} type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} placeholder="you@example.com" /></div>
                <div style={{ marginBottom: spacing['4'] }}><label style={labelStyle}>Phone *</label><input style={inputStyle} type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} placeholder="+27..." /></div>
                <div style={{ marginBottom: spacing['4'] }}><label style={labelStyle}>Number of Attendees</label>
                  <select style={inputStyle} value={formData.attendees} onChange={e => handleChange('attendees', Number(e.target.value))}>
                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>)}
                  </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: spacing['6'] }}>
                  <Button variant="primary" onClick={() => setStep(2)}>Continue →</Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Requirements */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, color: colors.text.primary, marginBottom: spacing['6'] }}>Requirements & Preferences</h2>
                <div style={{ marginBottom: spacing['6'] }}>
                  <label style={labelStyle}>Special Requirements</label>
                  <textarea style={{ ...inputStyle, minHeight: 100, resize: 'vertical' as const }} value={formData.specialRequirements} onChange={e => handleChange('specialRequirements', e.target.value)} placeholder="Any accessibility needs, health conditions, or special requests..." />
                </div>
                <div style={{ marginBottom: spacing['6'] }}>
                  <label style={labelStyle}>Dietary Restrictions</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: spacing['2'] }}>
                    {['Vegetarian', 'Vegan', 'Gluten-free', 'Halal', 'Kosher', 'Nut allergy', 'Other'].map(option => (
                      <Button key={option} variant={formData.dietaryRestrictions.includes(option) ? 'primary' : 'outline'} size="sm" onClick={() => toggleDietary(option)}>
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: spacing['6'] }}>
                  <Button variant="outline" onClick={() => setStep(1)}>← Back</Button>
                  <Button variant="primary" onClick={() => setStep(3)}>Continue →</Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Emergency & Confirm */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 style={{ fontFamily: typography.fontFamily.serif, fontSize: typography.fontSize.xl, color: colors.text.primary, marginBottom: spacing['6'] }}>Emergency Contact & Confirmation</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: spacing['4'], marginBottom: spacing['4'] }}>
                  <div><label style={labelStyle}>Emergency Contact Name</label><input style={inputStyle} value={formData.emergencyContact} onChange={e => handleChange('emergencyContact', e.target.value)} placeholder="Contact name" /></div>
                  <div><label style={labelStyle}>Emergency Contact Phone</label><input style={inputStyle} type="tel" value={formData.emergencyPhone} onChange={e => handleChange('emergencyPhone', e.target.value)} placeholder="+27..." /></div>
                </div>
                <div style={{ marginBottom: spacing['6'] }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: spacing['2'], cursor: 'pointer' }}>
                    <input type="checkbox" checked={formData.agreeTerms} onChange={e => handleChange('agreeTerms', e.target.checked)} style={{ marginTop: 4 }} />
                    <span style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}>I understand that registration is subject to confirmation by Nkgono Mamoya. I agree to the retreat terms and conditions, including the cancellation policy.</span>
                  </label>
                </div>
                <div style={{ backgroundColor: colors.riverMidnight[50], borderRadius: borderRadius.md, padding: spacing['4'], marginBottom: spacing['6'] }}>
                  <p style={{ fontSize: typography.fontSize.sm, color: colors.riverMidnight[700] }}>
                    <strong>Payment Info:</strong> After registration, you will receive an invoice via email. Payment can be made via EFT or card. Your spot is confirmed once payment is received.
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: spacing['6'] }}>
                  <Button variant="outline" onClick={() => setStep(2)}>← Back</Button>
                  <Button variant="primary" size="lg" onClick={handleSubmit} disabled={!formData.agreeTerms || !formData.firstName || !formData.email}>
                    Submit Registration ✨
                  </Button>
                </div>
              </motion.div>
            )}
          </Card>
        </div>
      </ResponsiveLayout>
    </motion.div>
  );
};

export default RetreatRegistration;