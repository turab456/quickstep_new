import { useState } from 'react'

const FAQS = [
  {
    q: 'Who can enroll in Quickstep Spoken English classes in RT Nagar Bengaluru?',
    a: 'Our courses are tailored for students, working professionals, job seekers, and homemakers. Whether you are a beginner looking to build basic grammar and vocabulary or an advanced speaker aiming to refine pronunciation and fluency, we customize modules to match your exact level.',
  },
  {
    q: 'What does the IELTS Coaching program at Quickstep include?',
    a: 'Our IELTS training covers both IELTS Academic and IELTS General Training exams across all four modules: Listening, Reading, Writing Task 1 & 2 Coaching, and real-time face-to-face Speaking practice. We provide the latest Cambridge IELTS practice materials, time-management strategies, and individual evaluation. Hundreds of Quickstep students have achieved Band 7+, Band 8.5 and higher.',
  },
  {
    q: 'Which foreign language courses does Quickstep offer?',
    a: 'Quickstep offers structured German (CEFR A1, A2, B1, B2 with Goethe/TestDaF prep), French (CEFR A1 to B2 for global studies and careers), Spanish (reading, writing, speaking, listening), and Arabic Language Training (beginner to advanced with native-level trainers). All courses follow international standards and award course certificates upon completion.',
  },
  {
    q: 'What certifications and accreditations does Quickstep English Academy hold?',
    a: 'Quickstep English Academy is accredited by NABET (National Accreditation Board of Education Training) under the Quality Council of India (QCI) and is an ISO 9001:2015 certified training institution, ensuring standardized educational quality since 1995.',
  },
  {
    q: 'Are classroom and online Zoom batches both available?',
    a: 'Yes. Students can choose in-person training at our RT Nagar centre (11, 2nd Floor, 80 Feet Road, Above Unilet Store) or join live, interactive virtual sessions via Zoom. We offer flexible morning, afternoon, evening, and weekend batches to accommodate both students and working professionals.',
  },
  {
    q: 'How does Quickstep ensure individual attention and student progress?',
    a: 'We strictly maintain small batch sizes. Our student-centric approach guarantees that each learner receives personal attention, one-on-one speaking time, daily vocabulary building, constructive feedback, and continuous support throughout their journey.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="faq-section" id="faq" aria-label="Frequently Asked Questions">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-tag">Admissions & Details</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-lead">
            Everything you need to know about our courses, IELTS coaching, foreign language programs,
            accreditations, and batch schedules.
          </p>
        </div>

        <div className="faq-container">
          {FAQS.map((faq, idx) => (
            <div
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              key={idx}
            >
              <button
                className="faq-question"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.q}</span>
                <i className="fas fa-chevron-down faq-icon" aria-hidden="true"></i>
              </button>
              {openIndex === idx && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
