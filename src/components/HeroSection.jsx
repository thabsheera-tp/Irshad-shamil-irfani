import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 1.5rem 4rem 1.5rem',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      {/* Mountain Peak / Upward Horizon Silhouette Background Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '45vh',
          background: 'linear-gradient(to top, #060a17 20%, rgba(6, 10, 23, 0.8) 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Upward Glowing Mountain Silhouette SVG */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1400px',
          opacity: 0.25,
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <svg viewBox="0 0 1200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 300L250 140L450 210L600 30L780 200L1000 90L1200 300H0Z"
            fill="url(#mountainGrad)"
          />
          <defs>
            <linearGradient id="mountainGrad" x1="600" y1="30" x2="600" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5a623" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#1e90ff" stopOpacity="0.4" />
              <stop offset="1" stopColor="#060a17" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}
      >
        {/* Floating Antigravity Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            background: 'rgba(245, 166, 35, 0.1)',
            border: '1px solid rgba(245, 166, 35, 0.3)',
            backdropFilter: 'blur(10px)',
            marginBottom: '2rem',
            boxShadow: '0 0 20px rgba(245, 166, 35, 0.15)'
          }}
        >
          <Sparkles size={16} color="#ffd700" />
          <span style={{ color: '#ffd700', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            THE ANTIGRAVITY LEADER
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif-title gold-gradient-text"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: '700',
            lineHeight: 1.1,
            marginBottom: '1.25rem',
            letterSpacing: '0.01em',
            textShadow: '0 10px 40px rgba(0,0,0,0.8)'
          }}
        >
          IRSHAD SHAMIL IRFANI
        </motion.h1>

        {/* Subtitles: Glowing Titles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          <span
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              fontWeight: '700',
              letterSpacing: '0.15em',
              color: '#ffffff',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #ffffff, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            PRINCIPAL & DIRECTOR
          </span>
          <span style={{ color: '#f5a623', fontSize: '1.2rem', opacity: 0.7 }}>•</span>
          <span
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              fontWeight: '700',
              letterSpacing: '0.15em',
              color: '#ffd700',
              textTransform: 'uppercase',
              textShadow: '0 0 15px rgba(255, 215, 0, 0.4)'
            }}
          >
            ISLAMIC SPEAKER
          </span>
        </motion.div>

        {/* Vision Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: '#94a3b8',
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.7,
            fontWeight: '400'
          }}
        >
          Elevating minds, inspiring hearts, and shaping future generations through visionary educational leadership, moral guidance, and eloquence.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem'
          }}
        >
          <a
            href="#profile"
            className="btn-antigravity"
            style={{
              padding: '1rem 2.2rem',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span>Explore My Journey</span>
            <ArrowUpRight size={18} />
          </a>

          <a
            href="#skills"
            style={{
              padding: '0.95rem 2rem',
              fontSize: '0.95rem',
              fontWeight: '600',
              color: '#f8fafc',
              textDecoration: 'none',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(30, 144, 255, 0.5)';
              e.currentTarget.style.background = 'rgba(30, 144, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          >
            <Compass size={18} color="#1e90ff" />
            <span>Discover Vision</span>
          </a>
        </motion.div>

        {/* Floating Key Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '4.5rem',
            padding: '1.5rem',
            borderRadius: '24px',
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(245, 166, 35, 0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}
        >
          <div>
            <div className="gold-gradient-text" style={{ fontSize: '2.2rem', fontWeight: '800' }}>10+ Years</div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Educational Leadership
            </div>
          </div>
          <div>
            <div className="blue-gradient-text" style={{ fontSize: '2.2rem', fontWeight: '800' }}>5,000+</div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Students & Youth Mentored
            </div>
          </div>
          <div>
            <div className="gold-gradient-text" style={{ fontSize: '2.2rem', fontWeight: '800' }}>100+</div>
            <div style={{ color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Keynotes & Islamic Speeches
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
