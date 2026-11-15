import logoImg from '../assets/quickstep-logo.png'

export default function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      const headerOffset = 80
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="footer-institutional" aria-label="Quickstep English Academy Footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Institutional Identity with Official Wordmark */}
          <div className="footer-col-brand">
            <div className="footer-logo-panel">
              <img
                src={logoImg}
                alt="Quickstep English Academy"
                className="footer-wordmark"
                width="1024"
                height="204"
              />
            </div>

            <p className="footer-brand-desc">
              Pioneering adult skill development and English communication in Bengaluru since 1995.
              Rooted in RT Nagar, empowering thousands of Indian and international learners for over three decades.
            </p>

            <div className="footer-accreditation-tags">
              <div className="footer-accreditation-tag">
                <i className="fas fa-shield-halved" aria-hidden="true"></i>
                <span>NABET Accredited — Quality Council of India (QCI)</span>
              </div>
              <div className="footer-accreditation-tag">
                <i className="fas fa-certificate" aria-hidden="true"></i>
                <span>An ISO 9001:2015 Certified Language Institution</span>
              </div>
            </div>
          </div>

          {/* Column 2: Academic Programs from PDF */}
          <div>
            <h4 className="footer-heading">Training Programs</h4>
            <div className="footer-link-list">
              <a href="#courses" onClick={(e) => scrollTo(e, '#courses')}>Spoken English Classes</a>
              <a href="#ielts" onClick={(e) => scrollTo(e, '#ielts')}>IELTS Coaching (Band 7+ / 8.5)</a>
              <a href="#foreign-languages" onClick={(e) => scrollTo(e, '#foreign-languages')}>German Language (A1–B2)</a>
              <a href="#foreign-languages" onClick={(e) => scrollTo(e, '#foreign-languages')}>French Language (CEFR A1–B2)</a>
              <a href="#foreign-languages" onClick={(e) => scrollTo(e, '#foreign-languages')}>Spanish Language Classes</a>
              <a href="#foreign-languages" onClick={(e) => scrollTo(e, '#foreign-languages')}>Arabic Language Training</a>
              <a href="#courses" onClick={(e) => scrollTo(e, '#courses')}>Business & Corporate English</a>
            </div>
          </div>

          {/* Column 3: Academy Directory */}
          <div>
            <h4 className="footer-heading">The Academy</h4>
            <div className="footer-link-list">
              <a href="#about" onClick={(e) => scrollTo(e, '#about')}>About Quickstep (Since 1995)</a>
              <a href="#why-us" onClick={(e) => scrollTo(e, '#why-us')}>Why Quickstep RT Nagar</a>
              <a href="#methodology" onClick={(e) => scrollTo(e, '#methodology')}>Student-Centric Approach</a>
              <a href="#testimonials" onClick={(e) => scrollTo(e, '#testimonials')}>Student Success Stories</a>
              <a href="#faq" onClick={(e) => scrollTo(e, '#faq')}>Admissions & Batch FAQ</a>
              <a href="#enquiry" onClick={(e) => scrollTo(e, '#enquiry')}>Book Free Level Assessment</a>
            </div>
          </div>

          {/* Column 4: Bengaluru Campus Contact */}
          <div>
            <h4 className="footer-heading">RT Nagar Campus</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <i className="fas fa-location-dot" aria-hidden="true"></i>
                <span>
                  11, 2nd Floor, 80 Feet Road,<br />
                  Above Unilet Store, P&T Colony,<br />
                  RT Nagar, Bengaluru 560032
                </span>
              </div>

              <div className="footer-contact-item">
                <i className="fas fa-phone" aria-hidden="true"></i>
                <span>
                  <a href="tel:+919980933176">+91 99809 33176</a><br />
                  <a href="tel:+917026560666">+91 70265 60666</a>
                </span>
              </div>

              <div className="footer-contact-item">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span>
                  <a href="mailto:info@englishindia.com">info@englishindia.com</a>
                </span>
              </div>

              <div className="footer-contact-item">
                <i className="fas fa-clock" aria-hidden="true"></i>
                <span>
                  Mon – Sat: 9:00 AM – 7:30 PM<br />
                  Sunday: 10:00 AM – 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Quickstep English Academy. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <span>Established 1995 · RT Nagar, Bengaluru · NABET QCI & ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
