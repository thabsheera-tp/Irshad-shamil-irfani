import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Target, HeartHandshake, Shield, Sparkles, BookOpen } from 'lucide-react';

export default function ProfileSection() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left - card.width / 2;
    const y = e.clientY - card.top - card.height / 2;
    setRotateX(-y * 0.04);
    setRotateY(x * 0.04);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="profile"
      style={{
        position: 'relative',
        padding: '6rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        zIndex: 2
      }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span
          style={{
            color: '#f5a623',
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem'
          }}
        >
          PROFILE & PHILOSOPHY
        </span>
        <h2
          className="font-serif-title gold-gradient-text"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '700' }}
        >
          The Visionary Leader
        </h2>
        <div
          style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, #f5a623, #1e90ff)',
            margin: '1rem auto 0 auto',
            borderRadius: '2px'
          }}
        />
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}
      >
        {/* Left Column: 3D Parallax Portrait with Orbiting Aura */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ perspective: 1000, display: 'flex', justifyContent: 'center' }}
        >
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '440px',
              height: '520px',
              borderRadius: '28px',
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.15s ease-out',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
              cursor: 'pointer'
            }}
          >
            {/* Glowing Orbiting Rings */}
            <div
              className="animate-orbit"
              style={{
                position: 'absolute',
                top: '-5%',
                left: '-5%',
                right: '-5%',
                bottom: '-5%',
                borderRadius: '50%',
                border: '2px dashed rgba(245, 166, 35, 0.4)',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />
            <div
              className="animate-pulse-slow"
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                right: '-15px',
                bottom: '-15px',
                borderRadius: '36px',
                background: 'radial-gradient(circle, rgba(30, 144, 255, 0.25) 0%, rgba(245, 166, 35, 0.15) 50%, transparent 70%)',
                filter: 'blur(20px)',
                zIndex: 0
              }}
            />

            {/* Profile Frame & Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '2px solid rgba(245, 166, 35, 0.3)',
                background: '#0c1222',
                zIndex: 2
              }}
            >
              <img
                src="/irshad shamil irfani.jpeg"
                alt="Irshad Shamil Irfani - Principal & Director"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  transition: 'transform 0.5s ease',
                  filter: 'contrast(1.05) brightness(1.02)'
                }}
              />

              {/* Gradient Overlay for Portrait */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(6, 10, 23, 0.95) 0%, rgba(6, 10, 23, 0.2) 40%, transparent 100%)'
                }}
              />

              {/* Floating Badge on Portrait */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                <div style={{ color: '#ffd700', fontWeight: '700', fontSize: '1.1rem' }}>
                  Irshad Shamil Irfani
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                  Principal & Director | Islamic Scholar
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Content Hovering Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-card"
          style={{ padding: '2.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(245, 166, 35, 0.15)',
                border: '1px solid rgba(245, 166, 35, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Sparkles size={20} color="#f5a623" />
            </div>
            <div>
              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700' }}>
                Executive Leadership Profile
              </h3>
              <p style={{ color: '#f5a623', fontSize: '0.85rem' }}>
                Empowering Minds, Inspiring Ethics
              </p>
            </div>
          </div>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              marginBottom: '2rem'
            }}
          >
            A dedicated and visionary educational leader serving as <strong>Principal & Director</strong>, combined with deep commitment as a renowned <strong>Islamic Speaker</strong>. With an established track record in teacher motivation, strategic institutional management, and community enlightenment, Irshad Shamil Irfani bridges classical wisdom with modern educational methodologies to elevate institutions and nurture compassionate, competent leaders of tomorrow.
          </p>

          {/* Pillars of Leadership Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            <div
              style={{
                padding: '1.2rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <Target size={22} color="#1e90ff" style={{ marginBottom: '0.5rem' }} />
              <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>Strategic Vision</div>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                Transformative curriculum design & institutional growth.
              </div>
            </div>

            <div
              style={{
                padding: '1.2rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <HeartHandshake size={22} color="#f5a623" style={{ marginBottom: '0.5rem' }} />
              <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>Teacher Motivation</div>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                Mentoring educators to ignite student curiosity.
              </div>
            </div>

            <div
              style={{
                padding: '1.2rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <BookOpen size={22} color="#06b6d4" style={{ marginBottom: '0.5rem' }} />
              <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>Islamic Speaker</div>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                Eloquent discourses on faith, ethics & morality.
              </div>
            </div>

            <div
              style={{
                padding: '1.2rem',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <Shield size={22} color="#ffd700" style={{ marginBottom: '0.5rem' }} />
              <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>Digital Integration</div>
              <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                Leveraging tech for seamless administration.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
