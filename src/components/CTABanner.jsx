export default function CTABanner() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) {
      const offset = 72
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="cta-banner" aria-label="Call to action">
      <div className="container">
        <h2 className="cta-banner-title">Ready to Start Your English Journey?</h2>
        <p className="cta-banner-subtitle">
          Get in touch for a free counselling session — we'll help you find the right course.
        </p>
        <div className="cta-banner-actions">
          <a href="#enquiry" className="btn btn-primary" onClick={(e) => scrollTo(e, '#enquiry')}>
            <i className="fas fa-paper-plane" aria-hidden="true"></i>
            Enquire Now
          </a>
          <a href="tel:+919980933176" className="btn btn-outline">
            <i className="fas fa-phone" aria-hidden="true"></i>
            Call +91 99809 33176
          </a>
        </div>
      </div>
    </section>
  )
}
