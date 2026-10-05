import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Send, MapPin, Sparkles, CheckCircle2, MessageSquare, ArrowUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactFooter() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Trigger confetti celebrate
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f5a623', '#ffd700', '#1e90ff', '#06b6d4']
        });
      } catch (err) {
        console.log(err);
      }
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        background: '#040710',
        borderTop: '1px solid rgba(245, 166, 35, 0.2)',
        padding: '6rem 1.5rem 2rem 1.5rem',
        zIndex: 2,
        overflow: 'hidden'
      }}
    >
      {/* Glow Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(245, 166, 35, 0.12) 0%, rgba(30, 144, 255, 0.08) 50%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            marginBottom: '5rem'
          }}
        >
          {/* Left Column: Invitation & Direct Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
                LET'S CONNECT & COLLABORATE
              </span>
              <h2
                className="font-serif-title gold-gradient-text"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '700', marginBottom: '1.25rem' }}
              >
                Elevate Educational & Spiritual Horizons
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Whether you are seeking institutional direction, keynote addresses for your academy or community, teacher training seminars, or youth mentorship—reach out directly.
              </p>
            </motion.div>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <a
                href="tel:+919544242498"
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  textDecoration: 'none',
                  borderRadius: '16px'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(245, 166, 35, 0.15)',
                    border: '1px solid rgba(245, 166, 35, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Phone size={22} color="#f5a623" />
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    Direct Phone / WhatsApp
                  </div>
                  <div style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700' }}>
                    +91 95442 42498
                  </div>
                </div>
              </a>

              <a
                href="mailto:Irshadkkptpba@gmail.com"
                className="glass-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.25rem',
                  textDecoration: 'none',
                  borderRadius: '16px'
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(30, 144, 255, 0.15)',
                    border: '1px solid rgba(30, 144, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Mail size={22} color="#1e90ff" />
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    Official Email
                  </div>
                  <div style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700' }}>
                    Irshadkkptpba@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Liquid Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card"
            style={{ padding: '2.5rem', position: 'relative' }}
          >
            <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
              Inquire about speaking engagements, institutional consulting, or training.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '3rem 1.5rem',
                  borderRadius: '20px',
                  background: 'rgba(245, 166, 35, 0.1)',
                  border: '1px solid rgba(245, 166, 35, 0.3)'
                }}
              >
                <CheckCircle2 size={50} color="#ffd700" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                  Message Transmitted!
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>
                  Thank you for reaching out to Irshad Shamil Irfani. We will respond promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-antigravity"
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '0.85rem',
                    marginTop: '1.5rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your full name"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@example.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ color: '#94a3b8', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                    Message / Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Share your inquiry or invitation details..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.1rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-antigravity"
                  style={{
                    padding: '1rem',
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    marginTop: '0.5rem'
                  }}
                >
                  {loading ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer Bottom Copyright & Ascent Button */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}
        >
          <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Irshad Shamil Irfani. All Rights Reserved. Crafted with Antigravity 3D Metaphor.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#94a3b8',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            <span>Ascend to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
