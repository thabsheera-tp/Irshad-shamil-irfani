import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, Mic, Laptop, BookCheck, Compass, Sparkles, X, ChevronRight } from 'lucide-react';

const skillsData = [
  {
    id: 'leadership',
    title: 'Educational Leadership',
    icon: Award,
    category: 'Executive Management',
    short: 'Directing academic vision, institutional strategy, and administrative excellence.',
    description: 'Proven capability in heading educational institutions as Principal & Director. Architecting long-term academic roadmaps, optimizing organizational workflows, and fostering an environment of continuous growth and ethical integrity.',
    highlights: ['Institutional Governance', 'Strategic Planning', 'Policy Formulation', 'Quality Assurance'],
    color: '#f5a623'
  },
  {
    id: 'motivation',
    title: 'Teacher Motivation & Training',
    icon: Users,
    category: 'Pedagogical Excellence',
    short: 'Inspiring educators through impactful workshops, coaching, and growth mindsets.',
    description: 'Empowering faculty through structured professional development, empathy-driven leadership, and motivational seminars that reignite passion for teaching and student engagement.',
    highlights: ['Faculty Mentorship', 'Performance Coaching', 'Interactive Workshops', 'Pedagogy Elevation'],
    color: '#1e90ff'
  },
  {
    id: 'speaking',
    title: 'Islamic Speaker & Scholar',
    icon: Mic,
    category: 'Public Eloquence',
    short: 'Delivering inspiring keynotes on faith, character development, and social harmony.',
    description: 'Renowned for captivating discourses that bridge traditional Islamic jurisprudence and modern challenges. Addressing youth, families, and academic gatherings with clarity, warmth, and profound moral vision.',
    highlights: ['Keynote Addresses', 'Youth Counseling', 'Moral Philosophy', 'Community Discourse'],
    color: '#ffd700'
  },
  {
    id: 'technology',
    title: 'Computer Skills & EdTech',
    icon: Laptop,
    category: 'Digital Innovation',
    short: 'Integrating modern software, digital platforms, and tech solutions into education.',
    description: 'Proficient across modern digital productivity suites, school management software, digital presentation tools, and e-learning integration to streamline administrative tasks and enrich classroom experiences.',
    highlights: ['Digital Management Tools', 'E-Learning Systems', 'Data Analytics', 'IT Infrastructure'],
    color: '#06b6d4'
  },
  {
    id: 'curriculum',
    title: 'Curriculum & Pedagogy',
    icon: BookCheck,
    category: 'Academic Design',
    short: 'Designing holistic curricula integrating moral values with academic rigor.',
    description: 'Developing balanced educational frameworks that pair rigorous academic subjects with value-based character building, ensuring well-rounded student development.',
    highlights: ['Holistic Syllabus', 'Value-Based Education', 'Assessment Frameworks', 'Student Engagement'],
    color: '#a855f7'
  },
  {
    id: 'mentorship',
    title: 'Youth Mentorship',
    icon: Compass,
    category: 'Character Guidance',
    short: 'Guiding young minds toward academic ambition, strong identity, and purpose.',
    description: 'Providing compassionate guidance to students and young leaders, helping them navigate life choices, career trajectories, and spiritual grounding.',
    highlights: ['Career Counseling', 'Character Building', 'Leadership Academies', 'Personal Development'],
    color: '#ec4899'
  }
];

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        padding: '6rem 1.5rem',
        maxWidth: '1280px',
        margin: '0 auto',
        zIndex: 2
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span
          style={{
            color: '#1e90ff',
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem'
          }}
        >
          CORE COMPETENCIES
        </span>
        <h2
          className="font-serif-title gold-gradient-text"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: '700' }}
        >
          Leadership & Expertise
        </h2>
        <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0.75rem auto 0 auto' }}>
          Interactive floating holographic cards showcasing core domains of leadership and public impact.
        </p>
      </motion.div>

      {/* Holographic Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}
      >
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedSkill(skill)}
              className="glass-card hologram-card"
              style={{
                padding: '2rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative'
              }}
            >
              {/* Top Accent Icon */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '16px',
                      background: `rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(
                        skill.color.slice(3, 5),
                        16
                      )}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.15)`,
                      border: `1px solid ${skill.color}50`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 20px ${skill.color}30`
                    }}
                  >
                    <Icon size={24} color={skill.color} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      letterSpacing: '0.1em',
                      color: skill.color,
                      textTransform: 'uppercase',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {skill.category}
                  </span>
                </div>

                <h3
                  style={{
                    color: '#f8fafc',
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    marginBottom: '0.75rem'
                  }}
                >
                  {skill.title}
                </h3>
                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}
                >
                  {skill.short}
                </p>
              </div>

              {/* Card Footer Link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: skill.color,
                  fontWeight: '600',
                  fontSize: '0.85rem'
                }}
              >
                <span>Discover Core Insights</span>
                <ChevronRight size={16} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(6, 10, 23, 0.85)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '640px',
                padding: '2.5rem',
                position: 'relative',
                border: `1px solid ${selectedSkill.color}60`,
                boxShadow: `0 30px 80px ${selectedSkill.color}30`
              }}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '20px',
                    background: `rgba(${parseInt(selectedSkill.color.slice(1, 3), 16)}, ${parseInt(
                      selectedSkill.color.slice(3, 5),
                      16
                    )}, ${parseInt(selectedSkill.color.slice(5, 7), 16)}, 0.2)`,
                    border: `1px solid ${selectedSkill.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {React.createElement(selectedSkill.icon, { size: 28, color: selectedSkill.color })}
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '700' }}>
                    {selectedSkill.title}
                  </h3>
                  <span style={{ color: selectedSkill.color, fontSize: '0.85rem', fontWeight: '600' }}>
                    {selectedSkill.category}
                  </span>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                {selectedSkill.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem' }}>
                  Key Pillars & Focus Areas
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {selectedSkill.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#94a3b8',
                        fontSize: '0.9rem',
                        padding: '0.6rem 1rem',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.03)'
                      }}
                    >
                      <Sparkles size={14} color={selectedSkill.color} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="btn-antigravity"
                style={{
                  width: '100%',
                  padding: '0.9rem',
                  fontSize: '0.95rem',
                  marginTop: '1rem',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Close Insights
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
