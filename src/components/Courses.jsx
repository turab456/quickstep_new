import { useState } from 'react'

const COURSES_DATA = [
  {
    id: 'spoken-english',
    category: 'spoken',
    tag: 'FOUNDATIONAL TO ADVANCED',
    title: 'Spoken English & Communication',
    levelBadge: 'All Levels Welcome',
    audience: 'Students, Working Professionals, Job Seekers & Homemakers',
    description: 'Structured oral training designed to eliminate hesitation, build natural pronunciation, and develop spontaneous conversational fluency for everyday and workplace situations.',
    outcomes: [
      'Spontaneous speech fluency',
      'Grammar accuracy & sentence structure',
      'Pronunciation, intonation & clarity',
      'Overcoming hesitation & building confidence',
    ],
    mode: 'Classroom in RT Nagar & Online Zoom',
    timings: 'Morning, Evening & Weekend Batches',
  },
  {
    id: 'ielts-coaching',
    category: 'ielts',
    tag: 'CAMBRIDGE EXAM PREPARATION',
    title: 'IELTS Coaching (Academic & General)',
    levelBadge: 'Target: Band 7+, 8.0 & 8.5+',
    audience: 'Study Abroad Aspirants, Overseas PR Candidates & Global Careers',
    description: 'Intensive coaching across all four modules with certified trainers, Cambridge IELTS study materials, and regular mock evaluations with one-to-one feedback.',
    outcomes: [
      'IELTS Listening & Reading strategy drills',
      'Writing Task 1 & Task 2 structured coaching',
      'Face-to-face speaking interview simulations',
      'Time management & score-improvement strategies',
    ],
    mode: 'Classroom in RT Nagar & Online Zoom',
    timings: 'Regular & Intensive Weekend Batches',
  },
  {
    id: 'german-language',
    category: 'german',
    tag: 'CEFR INTERNATIONAL FRAMEWORK',
    title: 'German Language Training',
    levelBadge: 'A1 · A2 · B1 · B2',
    audience: 'Engineers, Medical Professionals, Students & Job Seekers in Germany',
    description: 'Master German with certified language trainers in RT Nagar. Covers grammar, phonetics, workplace conversation, and preparation for Goethe, TestDaF & TELC exams.',
    outcomes: [
      'German phonetics, grammar & vocabulary',
      'Conversations for daily & workplace use',
      'Goethe-Zertifikat & TestDaF exam prep',
      'Course Certificate upon completion',
    ],
    mode: 'Classroom in RT Nagar & Online Zoom',
    timings: 'Weekday & Weekend Batches',
  },
  {
    id: 'french-language',
    category: 'french-spanish',
    tag: 'CEFR INTERNATIONAL FRAMEWORK',
    title: 'French Language Training',
    levelBadge: 'A1 · A2 · B1 · B2',
    audience: 'Students Planning Studies Abroad, Global Professionals & Hobbyists',
    description: 'Structured to help you speak, read, write, and understand French through immersive, interactive training with expert trainers for university or career growth.',
    outcomes: [
      'Immersive speaking, listening & reading',
      'Grammar foundation & natural pronunciation',
      'DELF / DALF international certification prep',
      'Course Certificate upon completion',
    ],
    mode: 'Classroom in RT Nagar & Online Zoom',
    timings: 'Flexible Morning & Evening Batches',
  },
  {
    id: 'spanish-language',
    category: 'french-spanish',
    tag: 'GLOBAL COMMUNICATIVE SPANISH',
    title: 'Spanish Language Training',
    levelBadge: 'Beginner · Intermediate · Advanced',
    audience: 'Travelers, Study Abroad Candidates & Business Professionals',
    description: 'Master reading, writing, speaking, and listening skills with certified trainers. Practical, result-oriented classes focusing on real-world communication.',
    outcomes: [
      'Practical conversational fluency',
      'Grammar foundation & listening comprehension',
      'Real-world cultural communication nuances',
      'Course Certificate upon completion',
    ],
    mode: 'Classroom in RT Nagar & Online Zoom',
    timings: 'Weekday & Weekend Batches',
  },
  {
    id: 'arabic-language',
    category: 'arabic',
    tag: 'SPOKEN & PROFESSIONAL ARABIC',
    title: 'Arabic Language Training',
    levelBadge: 'Beginner to Advanced',
    audience: 'Gulf Job Aspirants, Business Professionals, Travelers & Learners',
    description: 'Enhance your linguistic skills with native-level Arabic trainers. Focuses on practical vocabulary to help you speak, read, write, and understand Arabic with confidence.',
    outcomes: [
      'Arabic alphabet, phonetics & speaking drills',
      'Real-life conversations for business & daily use',
      'Small group & one-to-one mentoring options',
      'Course Certificate upon completion',
    ],
    mode: 'Classroom in RT Nagar & Online Zoom',
    timings: 'Flexible Online & Offline Batches',
  },
  {
    id: 'business-english',
    category: 'business',
    tag: 'PROFESSIONAL DEVELOPMENT',
    title: 'Business English & Workplace Skills',
    levelBadge: 'Corporate & Executive Level',
    audience: 'Working Professionals, Corporate Executives & Job Aspirants',
    description: 'Tailored for corporate communication, boardroom presentations, formal email correspondence, meeting participation, and interview mastery in multinational environments.',
    outcomes: [
      'Professional email etiquette & business writing',
      'Executive presentation poise & public speaking',
      'Group discussion (GD) & job interview mastery',
      'Cross-functional communication confidence',
    ],
    mode: 'Classroom & Online Live Zoom',
    timings: 'Evening & Weekend Cohorts',
  },
]

const CATEGORIES = [
  { id: 'all', label: 'All Courses' },
  { id: 'spoken', label: 'Spoken English' },
  { id: 'ielts', label: 'IELTS Preparation' },
  { id: 'german', label: 'German Language' },
  { id: 'french-spanish', label: 'French & Spanish' },
  { id: 'arabic', label: 'Arabic Language' },
  { id: 'business', label: 'Business English' },
]

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredCourses = activeCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === activeCategory)

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const offset = 84
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="courses-section" id="courses" aria-label="Course Programs">
      <div className="container">
        {/* Asymmetric / Editorial Section Header */}
        <div className="courses-header-editorial">
          <div className="courses-header-main">
            <span className="section-tag">Academic Programmes</span>
            <h2 className="courses-editorial-title">
              Industry-Relevant,<br />Result-Oriented Training
            </h2>
            <p className="courses-editorial-lead">
              Every program is curated by our academic panel of linguists and educators
              to build real-world communication confidence and proven learning outcomes.
            </p>
          </div>

          <div className="courses-header-badges">
            <div className="courses-badge-pill">
              <i className="fas fa-certificate" aria-hidden="true"></i>
              <span>NABET (QCI) & ISO 9001:2015</span>
            </div>
            <div className="courses-badge-pill">
              <i className="fas fa-chalkboard-user" aria-hidden="true"></i>
              <span>Classroom in RT Nagar & Zoom Online</span>
            </div>
            <div className="courses-badge-pill">
              <i className="fas fa-calendar-check" aria-hidden="true"></i>
              <span>Morning, Evening & Weekend Batches</span>
            </div>
          </div>
        </div>

        {/* Clean Single-Row Horizontal Scrollable Category Navigation */}
        <div className="course-nav-container">
          <nav className="course-category-nav" role="tablist" aria-label="Filter courses by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`cat-nav-item ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                role="tab"
                aria-selected={activeCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Redesigned Structured Course Cards Catalogue */}
        <div className="courses-catalogue-grid">
          {filteredCourses.map((c) => (
            <article
              className="catalogue-course-card"
              key={c.id}
              id={c.id === 'ielts-coaching' ? 'ielts' : c.id === 'german-language' ? 'foreign-languages' : undefined}
            >
              <div className="card-top-header">
                <div className="card-tag-row">
                  <span className="card-eyebrow-tag">{c.tag}</span>
                  <span className="card-level-chip">{c.levelBadge}</span>
                </div>
                <h3 className="card-course-title">{c.title}</h3>
              </div>

              <p className="card-course-description">{c.description}</p>

              <div className="card-info-segment">
                <div className="info-segment-row">
                  <span className="segment-label">Ideal For:</span>
                  <span className="segment-value">{c.audience}</span>
                </div>

                <div className="info-outcomes-block">
                  <span className="segment-label">You Will Develop:</span>
                  <ul className="segment-outcomes-list">
                    {c.outcomes.map((o, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check" aria-hidden="true"></i>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card-bottom-bar">
                <div className="card-meta-chips">
                  <span>
                    <i className="fas fa-location-dot" aria-hidden="true"></i>
                    {c.mode}
                  </span>
                  <span>
                    <i className="fas fa-clock" aria-hidden="true"></i>
                    {c.timings}
                  </span>
                </div>

                <a
                  href="#enquiry"
                  className="btn btn-primary card-cta-btn"
                  onClick={(e) => scrollTo(e, '#enquiry')}
                >
                  Enquire About This Course <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
