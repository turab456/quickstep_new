export default function TrustBar() {
  return (
    <section className="credential-strip" aria-label="Institutional Accreditations">
      <div className="container">
        <div className="credential-grid">
          <div className="credential-item">
            <div className="credential-icon">
              <i className="fas fa-certificate" aria-hidden="true"></i>
            </div>
            <div className="credential-text">
              <strong>An ISO 9001:2015 Institute</strong>
              <span>Certified Educational Standards</span>
            </div>
          </div>

          <div className="credential-item">
            <div className="credential-icon">
              <i className="fas fa-shield-halved" aria-hidden="true"></i>
            </div>
            <div className="credential-text">
              <strong>NABET Accredited</strong>
              <span>Quality Council of India (QCI)</span>
            </div>
          </div>

          <div className="credential-item">
            <div className="credential-icon">
              <i className="fas fa-calendar-check" aria-hidden="true"></i>
            </div>
            <div className="credential-text">
              <strong>Founded in 1995</strong>
              <span>30+ Years in RT Nagar, Bengaluru</span>
            </div>
          </div>

          <div className="credential-item">
            <div className="credential-icon">
              <i className="fas fa-chalkboard-user" aria-hidden="true"></i>
            </div>
            <div className="credential-text">
              <strong>Classroom & Online Zoom</strong>
              <span>Flexible Morning, Evening & Weekend</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
