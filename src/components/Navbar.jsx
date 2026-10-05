import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, Award, Globe, Mail, User } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ascent', href: '#hero', icon: Compass },
    { name: 'Vision', href: '#profile', icon: User },
    { name: 'Leadership', href: '#skills', icon: Award },
    { name: 'Global', href: '#languages', icon: Globe },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1.25rem 2rem'
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.5rem',
          borderRadius: '9999px',
          background: scrolled ? 'rgba(6, 10, 23, 0.85)' : 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(245, 166, 35, 0.2)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
          transition: 'all 0.4s ease'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f5a623, #1e90ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#060a17',
              fontWeight: '800',
              fontSize: '1.1rem',
              letterSpacing: '-0.05em',
              boxShadow: '0 0 15px rgba(245, 166, 35, 0.5)'
            }}
          >
            ISI
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: '700', fontSize: '1rem', lineHeight: 1.2 }}>
              IRSHAD SHAMIL
            </div>
            <div style={{ color: '#f5a623', fontSize: '0.7rem', letterSpacing: '0.15em', fontWeight: '600' }}>
              FOUNDER OF HANOON ACADEMY
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '2rem'
          }}
          className="md-flex"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffd700')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                <Icon size={16} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="#contact"
            className="btn-antigravity"
            style={{
              padding: '0.6rem 1.4rem',
              fontSize: '0.85rem',
              textDecoration: 'none',
              display: 'none'
            }}
            className="md-inline-block"
          >
            Connect
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#f8fafc',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              marginTop: '0.75rem',
              background: 'rgba(6, 10, 23, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(245, 166, 35, 0.2)',
              borderRadius: '24px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: '#f8fafc',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem'
                  }}
                >
                  <Icon size={20} color="#f5a623" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-antigravity"
              style={{
                padding: '0.75rem',
                textAlign: 'center',
                textDecoration: 'none',
                marginTop: '0.5rem'
              }}
            >
              Connect Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-inline-block { display: inline-block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
}
