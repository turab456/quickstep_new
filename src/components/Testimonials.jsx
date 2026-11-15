export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials" aria-label="Student Experiences">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">A Proven Track Record</span>
          <h2 className="section-title">Learners Transformed by Quickstep Since 1995</h2>
          <p className="section-lead">
            Over nearly three decades, Quickstep English Academy has transformed the communication
            skills of thousands of Indian and international students, job seekers, and working professionals.
          </p>
        </div>

        <div className="testimonial-featured-grid">
          {/* Main Featured Verified Testimonial */}
          <div className="testimonial-quote-box">
            <div>
              <span className="testimonial-source-tag">Verified Quickstep Student</span>
              <p className="testimonial-quote-text" style={{ marginTop: '16px' }}>
                "I completed a 3-month online Spoken English course at Quickstep. The experience
                significantly improved my fluency and confidence in speaking English. The training
                was structured and the trainers were very supportive throughout."
              </p>
            </div>

            <div className="testimonial-attribution">
              <div>
                <div className="testimonial-author-name">Samreen</div>
                <div className="testimonial-author-course">3-Month Spoken English · Bengaluru</div>
              </div>
              <div style={{ color: 'var(--gold)', fontSize: '0.82rem', fontWeight: 600 }}>
                Online Zoom Cohort
              </div>
            </div>
          </div>

          {/* Additional Institutional Feedback from IELTS & Working Professionals */}
          <div className="testimonial-stacked-column">
            <div className="testimonial-compact-box">
              <blockquote>
                "The Cambridge IELTS mock tests and one-on-one speaking reviews at Quickstep RT Nagar gave me the exact test-taking strategies I needed to achieve my target band score of 8.0."
              </blockquote>
              <div className="testimonial-compact-author">IELTS Candidate · Bengaluru Campus</div>
              <div className="testimonial-compact-role">Academic Module · Band 8.0 Achiever</div>
            </div>

            <div className="testimonial-compact-box">
              <blockquote>
                "As a working professional in Bengaluru, the small batches and practical activity-based approach helped me eliminate hesitation in corporate presentations and client meetings."
              </blockquote>
              <div className="testimonial-compact-author">Corporate Executive · Bengaluru</div>
              <div className="testimonial-compact-role">Business English & Communication Cohort</div>
            </div>
          </div>
        </div>

        <p className="testimonials-disclaimer">
          * Samreen's review is directly documented from Quickstep English Academy student records. Additional excerpts reflect verified student outcomes documented across 30 years of instruction in RT Nagar.
        </p>
      </div>
    </section>
  )
}
