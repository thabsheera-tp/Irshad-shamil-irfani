import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Volume2, Sparkles, MessageSquare } from 'lucide-react';

const languagesData = [
  {
    code: 'en',
    name: 'English',
    native: 'English',
    fluency: 'Full Professional Proficiency',
    role: 'Academic Instruction & Global Discourse',
    quote: 'Connecting global scholarship with visionary educational standards.',
    gradient: 'linear-gradient(135deg, #1e90ff, #3b82f6)'
  },
  {
    code: 'ml',
    name: 'Malayalam',
    native: 'മലയാളം',
    fluency: 'Native / Bilingual Mastery',
    role: 'Keynotes & Regional Institutional Leadership',
    quote: 'ഹൃദയസ്പർശിയായ പ്രഭാഷണങ്ങളിലൂടെ ജനമനസ്സുകളെ ഉണർത്തുന്നു.',
    gradient: 'linear-gradient(135deg, #f5a623, #ffd700)'
  },
  {
    code: 'ta',
    name: 'Tamil',
    native: 'தமிழ்',
    fluency: 'Professional Eloquence',
    role: 'Community Outreach & Discourse',
    quote: 'அறிவும் அறமும் இணைந்த சமூக வழிகாட்டல்.',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
  },
  {
    code: 'ar',
    name: 'Arabic',
    native: 'العربية',
    fluency: 'Scholarly & Classical Mastery',
    role: 'Islamic Jurisprudence & Scriptural Interpretation',
    quote: 'العلم والتربية لإعداد أجيال نيرة بالفكر والأخلاق.',
    gradient: 'linear-gradient(135deg, #10b981, #059669)'
  }
];

export default function LanguagesSection() {
  const [activeLang, setActiveLang] = useState(languagesData[0]);

  return (
    <section
      id="languages"
      style={{
        position: 'relative',
        padding: '6rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        zIndex: 2,
        overflow: 'hidden'
      }}
    >
      {/* Background Globe Dot Pattern Grid */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(30, 144, 255, 0.08) 0%, rgba(245, 166, 35, 0.04) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative', zIndex: 1 }}
      >
        <span
          style={{
            color: '#06b6d4',
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem'
          }}
        >
          THE GLOBAL CITIZEN
        </span>
        <h2
          className="font-serif-title gold-gradient-text"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '700' }}
        >
          Linguistic Reach & Eloquence
        </h2>
        <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0.75rem auto 0 auto' }}>
          Fluent in four major languages to inspire diverse communities across global and regional spheres.
        </p>
      </motion.div>

      {/* Orbital Badge Container & Feature Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left: Interactive Orbital Language Sphere Nodes */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {languagesData.map((lang) => {
            const isSelected = activeLang.code === lang.code;
            return (
              <motion.div
                key={lang.code}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveLang(lang)}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '24px',
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #f5a623' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: isSelected ? 'rgba(30, 41, 59, 0.9)' : 'rgba(15, 23, 42, 0.5)',
                  boxShadow: isSelected ? '0 0 30px rgba(245, 166, 35, 0.3)' : 'none',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Glowing Corner Indicator */}
                {isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#ffd700',
                      boxShadow: '0 0 10px #ffd700'
                    }}
                  />
                )}

                <div
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    fontFamily: lang.code === 'ar' ? 'var(--font-arabic)' : 'var(--font-sans)',
                    color: '#fff',
                    marginBottom: '0.5rem'
                  }}
                >
                  {lang.native}
                </div>
                <div style={{ color: '#ffd700', fontWeight: '700', fontSize: '1.1rem' }}>
                  {lang.name}
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.25rem' }}>
                  {lang.fluency}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Active Language Showcase Card */}
        <motion.div
          key={activeLang.code}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card"
          style={{
            padding: '2.5rem',
            position: 'relative',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid rgba(245, 166, 35, 0.3)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '16px',
                background: activeLang.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 20px rgba(30, 144, 255, 0.4)'
              }}
            >
              <Globe size={26} color="#060a17" />
            </div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>
                {activeLang.name} ({activeLang.native})
              </h3>
              <p style={{ color: '#f5a623', fontSize: '0.85rem', fontWeight: '600' }}>
                {activeLang.role}
              </p>
            </div>
          </div>

          <div
            style={{
              padding: '1.5rem',
              borderRadius: '16px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderLeft: '4px solid #f5a623',
              marginBottom: '1.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffd700', marginBottom: '0.5rem' }}>
              <MessageSquare size={18} />
              <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
                Sample Expression
              </span>
            </div>
            <p
              style={{
                color: '#f8fafc',
                fontSize: activeLang.code === 'ar' ? '1.4rem' : '1.1rem',
                fontFamily: activeLang.code === 'ar' ? 'var(--font-arabic)' : 'var(--font-sans)',
                fontStyle: activeLang.code === 'ar' ? 'normal' : 'italic',
                lineHeight: 1.6
              }}
            >
              "{activeLang.quote}"
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={16} color="#06b6d4" />
              <span>Multi-Lingual Public Address</span>
            </div>
            <span style={{ color: '#ffd700', fontWeight: '600' }}>Mastery Grade</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
