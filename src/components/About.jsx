import tutoringImg from '../assets/tutoring-about.jpg'

const CORE_OBJECTIVES = [
  'Develop fluent and confident speaking skills',
  'Improve grammar accuracy and sentence formation',
  'Enhance vocabulary for personal, academic, and professional use',
  'Strengthen pronunciation, intonation, and listening skills',
  'Overcome hesitation and build lasting self-confidence in English',
]

export default function About() {
  return (
    <section className="about-section" id="about" aria-label="About Quickstep English Academy">
      <div className="container">
        <div className="about-grid">
          {/* Left: Documentary Tutoring Photography */}
          <div className="about-photo-col">
            <div className="about-photo-frame">
              <img
                src={tutoringImg}
                alt="Quickstep instructor mentoring an adult student with study materials in a library seminar room"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="about-photo-note">
              <strong>Student-Centric Approach:</strong> Every trainee receives personal attention,
              constructive feedback, and continuous support throughout their training journey.
            </div>
          </div>

          {/* Right: Authentic Narrative directly from Quickstep PDF */}
          <div className="about-content-col">
            <span className="section-tag">A Legacy of Trust & Excellence</span>
            <h2 className="section-title">A Pioneer in English Communication Training Since 1995</h2>

            <p>
              Founded in 1995, Quickstep English Academy has been a pioneer in adult skill development and
              English communication training in Bengaluru, widely known as India’s Silicon Valley. From its
              inception, the academy has been rooted in RT Nagar, making it one of the most established and
              respected English training institutions in the region.
            </p>

            <p>
              Over nearly three decades, Quickstep English Academy has transformed the communication skills of
              thousands of Indian and international students, helping them achieve academic, professional, and
              personal success. Every training program goes through rigorous research, evaluation, and refinement
              by a panel of expert linguists, educators, and industry professionals.
            </p>

            <div className="about-philosophy-quote">
              <blockquote>
                "Where quality training meets proven learning outcomes. Our training methodology is built
                around real-world communication needs to ensure fast, noticeable improvement."
              </blockquote>
              <cite>— Quickstep English Academy Institutional Commitment</cite>
            </div>

            <div className="about-outcomes-box">
              <h4>Measurable Communication Breakthroughs (PDF Core Objectives):</h4>
              <ul className="about-outcomes-list">
                {CORE_OBJECTIVES.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-badges-row">
              <div className="about-badge">
                <i className="fas fa-shield-halved" aria-hidden="true"></i>
                NABET Accredited (QCI)
              </div>
              <div className="about-badge">
                <i className="fas fa-certificate" aria-hidden="true"></i>
                An ISO 9001:2015 Institute
              </div>
              <div className="about-badge">
                <i className="fas fa-landmark" aria-hidden="true"></i>
                Rooted in RT Nagar Since 1995
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
