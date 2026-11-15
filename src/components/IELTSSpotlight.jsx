export default function IELTSSpotlight() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      const headerOffset = 84
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="ielts-spotlight-section" id="ielts" aria-label="IELTS Coaching Feature">
      <div className="container">
        <div className="ielts-grid">
          {/* Left Column: Academic Credentials & Modules */}
          <div className="ielts-content">
            <span className="section-tag" style={{ color: 'var(--gold-accent)' }}>
              Top IELTS Coaching Centre in Bengaluru
            </span>
            <h2>Achieve Your Desired Band Score with Expert IELTS Coaching</h2>
            <p>
              Whether you are planning to study abroad, migrate, or enhance career opportunities, our IELTS
              coaching classes in RT Nagar Bengaluru provide the guidance you need to achieve your target band score.
            </p>

            <div className="ielts-features-list">
              <div className="ielts-feature-item">
                <i className="fas fa-headphones" aria-hidden="true"></i>
                <span><strong>IELTS Listening:</strong> Accent training & audio strategy drills</span>
              </div>
              <div className="ielts-feature-item">
                <i className="fas fa-book-open-reader" aria-hidden="true"></i>
                <span><strong>IELTS Reading:</strong> Skimming, scanning & time management</span>
              </div>
              <div className="ielts-feature-item">
                <i className="fas fa-pen-fancy" aria-hidden="true"></i>
                <span><strong>IELTS Writing:</strong> Task 1 & Task 2 essay structure coaching</span>
              </div>
              <div className="ielts-feature-item">
                <i className="fas fa-comments" aria-hidden="true"></i>
                <span><strong>IELTS Speaking:</strong> Face-to-face mock interview practice</span>
              </div>
            </div>

            <a
              href="#enquiry"
              className="btn btn-primary"
              onClick={(e) => scrollTo(e, '#enquiry')}
            >
              Enroll in Upcoming IELTS Batch <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }} aria-hidden="true"></i>
            </a>
          </div>

          {/* Right Column: Track Record Panel from PDF Page 3 */}
          <div className="ielts-box-panel">
            <h4>Proven Track Record: Band 7+ & 8.5+</h4>
            <p>
              Hundreds of students have successfully achieved Band 7+, Band 8.5 and higher with our
              structured, result-oriented training approach in RT Nagar.
            </p>

            <div className="ielts-stat-highlights">
              <div className="ielts-stat-item">
                <strong>Band 7+ / 8.5</strong>
                <span>Proven Score Record</span>
              </div>
              <div className="ielts-stat-item">
                <strong>Cambridge</strong>
                <span>Official Test Materials</span>
              </div>
              <div className="ielts-stat-item">
                <strong>1-on-1</strong>
                <span>Speaking & Writing Critiques</span>
              </div>
              <div className="ielts-stat-item">
                <strong>30+ Years</strong>
                <span>Training Excellence</span>
              </div>
            </div>

            <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.7)' }}>
              <i className="fas fa-check-double" style={{ color: 'var(--gold-accent)', marginRight: '6px' }}></i>
              Academic & General Training modules · Morning, Evening & Weekend Batches
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
