import classroomImg from '../assets/classroom-hero.jpg'

export default function Hero({ onOpenAiTest }) {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const offset = 80
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-academic" aria-label="Hero Section">
      <div className="container">
        <div className="hero-grid">
          {/* Left: Authentic Content Sourced from PDF Page 1 */}
          <div className="hero-content-col">
            <div className="hero-institution-badge">
              <i className="fas fa-landmark" aria-hidden="true"></i>
              Leading Skill-Based Education Since 1995 · RT Nagar, Bengaluru
            </div>

            <h1 className="hero-heading">
              The Most Trusted <em>Spoken English</em> & Language Training in Bengaluru
            </h1>

            <p className="hero-summary">
              Empowering students, working professionals, job seekers, and homemakers for over three decades.
              Improve your fluency, vocabulary, pronunciation, and self-confidence through structured,
              interactive, and practical language training.
            </p>

            <div className="hero-cta-group">
              <a
                href="#enquiry"
                className="btn btn-primary"
                onClick={(e) => scrollTo(e, '#enquiry')}
              >
                Enquire Now
              </a>
              <button
                type="button"
                className="btn btn-ai-hero"
                onClick={onOpenAiTest}
              >
                <i className="fas fa-wand-magic-sparkles" aria-hidden="true"></i> Free AI English Test
              </button>
              <a
                href="https://wa.me/919980933176?text=Hello%20Quickstep%20English%20Academy,%20I%20would%20like%20to%20enquire%20about%20your%20courses."
                className="btn btn-secondary--light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
              </a>
            </div>

            <div className="hero-proof-row">
              <div className="hero-proof-item">
                <i className="fas fa-circle-check" aria-hidden="true"></i>
                <span>30+ Years in RT Nagar</span>
              </div>
              <div className="hero-proof-item">
                <i className="fas fa-circle-check" aria-hidden="true"></i>
                <span>NABET Accredited (QCI)</span>
              </div>
              <div className="hero-proof-item">
                <i className="fas fa-circle-check" aria-hidden="true"></i>
                <span>An ISO 9001:2015 Institute</span>
              </div>
              <div className="hero-proof-item">
                <i className="fas fa-circle-check" aria-hidden="true"></i>
                <span>Classroom & Online Zoom</span>
              </div>
            </div>
          </div>

          {/* Right: Authentic Educational Classroom Image */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-frame">
              <img
                src={classroomImg}
                alt="Interactive Spoken English session at Quickstep English Academy in RT Nagar Bengaluru"
                loading="eager"
                width="640"
                height="480"
              />
            </div>
            <div className="hero-photo-caption">
              <span>Interactive, activity-based learning in RT Nagar, Bengaluru</span>
              <span>Flexible Batches: Weekday & Weekend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
