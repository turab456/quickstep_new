import { useState, useEffect } from 'react'
import logoImg from '../assets/quickstep-logo.png'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'IELTS Coaching', href: '#ielts' },
  { label: 'Languages', href: '#foreign-languages' },
  { label: 'Why Quickstep', href: '#why-us' },
  { label: 'Approach', href: '#methodology' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ onOpenAiTest }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'ielts', 'foreign-languages', 'why-us', 'methodology', 'faq', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 130) {
            setActiveSection('#' + sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
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
    <>
      {/* Top Utility Strip */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-notice">
            <i className="fas fa-shield-halved" aria-hidden="true"></i>
            <span>Established 1995 · NABET Accredited (QCI) · An ISO 9001:2015 Institute · RT Nagar, Bengaluru</span>
          </div>
          <div className="top-bar-links">
            <a href="tel:+919980933176" className="top-bar-link">
              <i className="fas fa-phone" aria-hidden="true"></i>
              <span>+91 99809 33176</span>
            </a>
            <a href="mailto:info@englishindia.com" className="top-bar-link">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span>info@englishindia.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header with Official Quickstep Wordmark */}
      <header className="header" id="home">
        <div className="container header-inner">
          <a
            href="#home"
            className="brand-logo-link"
            onClick={(e) => scrollTo(e, '#home')}
            aria-label="Quickstep English Academy Home"
          >
            <img
              src={logoImg}
              alt="Quickstep English Academy - NABET Accredited (QCI) An ISO 9001:2015"
              className="header-wordmark"
              width="1024"
              height="204"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-item ${activeSection === item.href ? 'active' : ''}`}
                onClick={(e) => scrollTo(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="header-actions">
            <button
              type="button"
              className="btn btn-ai-test btn-sm"
              onClick={onOpenAiTest}
              aria-label="Take Free AI English Test"
            >
              <i className="fas fa-wand-magic-sparkles" aria-hidden="true"></i>
              <span>AI English Test</span>
            </button>

            <button
              className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-drawer-header">
          <img
            src={logoImg}
            alt="Quickstep English Academy"
            className="drawer-wordmark"
            width="1024"
            height="204"
          />
          <button
            className="mobile-drawer-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="mobile-links">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={(e) => scrollTo(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="btn btn-ai-test"
          style={{ width: '100%', marginBottom: '12px', justifyContent: 'center' }}
          onClick={() => {
            setMobileOpen(false)
            onOpenAiTest()
          }}
        >
          <i className="fas fa-wand-magic-sparkles" aria-hidden="true"></i>
          <span>Take Free AI English Test</span>
        </button>

        <a
          href="#enquiry"
          className="btn btn-primary"
          style={{ width: '100%', marginBottom: '20px' }}
          onClick={(e) => scrollTo(e, '#enquiry')}
        >
          Book a Free Counselling
        </a>

        <div className="mobile-drawer-contact">
          <p>
            <i className="fas fa-location-dot" style={{ color: 'var(--gold)', marginRight: '8px' }}></i>
            11, 2nd Fl, 80 Feet Rd, RT Nagar, Bengaluru 560032
          </p>
          <p>
            <i className="fas fa-phone" style={{ color: 'var(--gold)', marginRight: '8px' }}></i>
            <a href="tel:+919980933176">+91 99809 33176</a>
          </p>
        </div>
      </div>
    </>
  )
}
