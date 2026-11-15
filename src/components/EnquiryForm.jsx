import { useState } from 'react'

const COURSE_OPTIONS = [
  'Spoken English & Communication Skills',
  'IELTS Coaching (Academic & General Training)',
  'German Language Training (A1, A2, B1, B2)',
  'French Language Training (CEFR Levels)',
  'Spanish Language Training',
  'Arabic Language Training',
  'Business English & Corporate Communication',
  'Written English & Practical Grammar',
]

const LEARNER_PROFILES = [
  'Student (School / College / University)',
  'Working Professional / Corporate Executive',
  'Job Seeker / Interview Candidate',
  'Study Abroad / Immigration / PR Aspirant',
  'Homemaker / Personal Fluency',
]

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    profile: '',
    mode: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 6000)
    setFormData({
      name: '',
      phone: '',
      email: '',
      course: '',
      profile: '',
      mode: '',
      message: '',
    })
  }

  return (
    <section className="admissions-section" id="enquiry" aria-label="Admissions & Campus Consultation">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-tag">Admissions & Consultation</span>
          <h2 className="section-title">Schedule a Level Assessment & Free Consultation</h2>
          <p className="section-lead">
            Connect directly with our academic team in RT Nagar, Bengaluru to discuss syllabus details,
            batch availability, and your language goals.
          </p>
        </div>

        {/* Clean Open Editorial Contact & Admissions Grid */}
        <div className="contact-admissions-grid">
          {/* Left Column: Direct, Scannable Contact Information */}
          <div className="contact-info-panel">
            <span className="section-tag">Visit Our Centre</span>
            <h3 className="contact-main-heading">Contact Quickstep</h3>
            <p className="contact-sub-lead">
              In-person academic counselling at our RT Nagar centre or interactive Zoom consultations available.
            </p>

            <div className="contact-items-list">
              <div className="contact-entry">
                <span className="contact-entry-label">
                  <i className="fas fa-location-dot" aria-hidden="true"></i> Campus Address
                </span>
                <p className="contact-entry-value">
                  11, 2nd Floor, 80 Feet Road,<br />
                  Above Unilet Store, P&T Colony,<br />
                  RT Nagar, Bengaluru 560032
                </p>
              </div>

              <div className="contact-entry">
                <span className="contact-entry-label">
                  <i className="fas fa-phone" aria-hidden="true"></i> Call Us
                </span>
                <p className="contact-entry-value">
                  <a href="tel:+919980933176" className="contact-phone-link">+91 99809 33176</a>
                  <span className="contact-separator">/</span>
                  <a href="tel:+917026560666" className="contact-phone-link">+91 70265 60666</a>
                </p>
              </div>

              <div className="contact-entry">
                <span className="contact-entry-label">
                  <i className="fas fa-envelope" aria-hidden="true"></i> Email
                </span>
                <p className="contact-entry-value">
                  <a href="mailto:info@englishindia.com">info@englishindia.com</a>
                </p>
              </div>

              <div className="contact-entry">
                <span className="contact-entry-label">
                  <i className="fas fa-clock" aria-hidden="true"></i> Office Hours
                </span>
                <p className="contact-entry-value">
                  Mon – Sat: 9:00 AM to 7:30 PM<br />
                  Sunday: 10:00 AM to 2:00 PM
                </p>
              </div>
            </div>

            {/* Direct Mobile-Friendly Action Buttons */}
            <div className="contact-action-row">
              <a href="tel:+919980933176" className="btn btn-primary contact-action-btn">
                <i className="fas fa-phone" aria-hidden="true"></i> Call Now
              </a>
              <a
                href="https://wa.me/919980933176?text=Hello%20Quickstep%20English%20Academy,%20I%20would%20like%20to%20enquire%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline contact-action-btn"
              >
                <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp Us
              </a>
              <a
                href="https://maps.google.com/?q=Quickstep+English+Centre+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-directions-link"
              >
                Get Directions <i className="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
              </a>
            </div>

            {/* Location Map - Positioned below the action buttons as a supportive visual preview */}
            <div className="contact-map-container">
              <iframe
                className="contact-map-frame"
                title="Quickstep English Academy Campus Location in RT Nagar"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.279899320286!2d77.59258757577546!3d13.017849613840742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1657c7932c07%3A0x6a2dfa03b30646c0!2sQuickstep%20English%20Centre!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Clean Admissions Form */}
          <div className="admissions-form-panel">
            <h3>Admissions Enquiry</h3>
            <p className="admissions-form-subtitle">
              Fill in your details below and an academic counselor will connect with you promptly.
            </p>

            {submitted && (
              <div className="form-success-banner" role="alert">
                <i className="fas fa-circle-check" aria-hidden="true"></i>
                <span>Thank you. Your enquiry has been received. Our admissions team will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="enq-name">Candidate Name *</label>
                  <input
                    type="text"
                    id="enq-name"
                    name="name"
                    className="form-control"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enq-phone">Contact Number *</label>
                  <input
                    type="tel"
                    id="enq-phone"
                    name="phone"
                    className="form-control"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="enq-email">Email Address</label>
                  <input
                    type="email"
                    id="enq-email"
                    name="email"
                    className="form-control"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enq-profile">I am a... *</label>
                  <select
                    id="enq-profile"
                    name="profile"
                    className="form-control"
                    value={formData.profile}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your profile</option>
                    {LEARNER_PROFILES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="enq-course">Course of Interest *</label>
                  <select
                    id="enq-course"
                    name="course"
                    className="form-control"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a course</option>
                    {COURSE_OPTIONS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="enq-mode">Preferred Format *</label>
                  <select
                    id="enq-mode"
                    name="mode"
                    className="form-control"
                    value={formData.mode}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select study format</option>
                    <option value="Classroom (RT Nagar, Bengaluru)">Classroom (RT Nagar, Bengaluru)</option>
                    <option value="Online Live (Zoom)">Online Live (Zoom)</option>
                    <option value="Open to Either">Open to Either</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="enq-message">Specific Learning Goals / Preferred Timings</label>
                <textarea
                  id="enq-message"
                  name="message"
                  className="form-control"
                  rows={3}
                  placeholder="E.g., IELTS target band 7.5, weekend spoken English batch, beginner German..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit-btn">
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
                Submit Admissions Enquiry
              </button>

              <p className="form-privacy-note">
                <i className="fas fa-lock" style={{ marginRight: '5px' }}></i>
                Quickstep English Academy respects your privacy. We only use your information for course counselling.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
