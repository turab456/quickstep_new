import { useState } from 'react'
import { evaluateEnglishTest } from '../services/geminiEvaluator'

const DIAGNOSTIC_QUESTIONS = [
  {
    id: 1,
    type: 'mcq',
    category: 'Grammar (Tenses & Aspects)',
    question: 'By the time the evening batch started at our centre, the instructor _____ the syllabus overview.',
    options: [
      { id: 'A', text: 'has already concluded' },
      { id: 'B', text: 'had already concluded', isCorrect: true },
      { id: 'C', text: 'already concluded' },
      { id: 'D', text: 'was already concluded' },
    ],
  },
  {
    id: 2,
    type: 'mcq',
    category: 'Grammar (Conditionals)',
    question: 'If she _____ more time on mock speaking sessions, she would have cleared the interview with ease.',
    options: [
      { id: 'A', text: 'invested' },
      { id: 'B', text: 'would invest' },
      { id: 'C', text: 'had invested', isCorrect: true },
      { id: 'D', text: 'has invested' },
    ],
  },
  {
    id: 3,
    type: 'mcq',
    category: 'Vocabulary (Workplace Collocations)',
    question: 'The executive committee met this morning to _____ the proposed quarterly expansion plan.',
    options: [
      { id: 'A', text: 'scrutinize', isCorrect: true },
      { id: 'B', text: 'fabricate' },
      { id: 'C', text: 'concoct' },
      { id: 'D', text: 'speculate' },
    ],
  },
  {
    id: 4,
    type: 'mcq',
    category: 'Grammar (Prepositions & Dependent Structures)',
    question: 'The candidates were praised for being capable _____ handling challenging cross-examination questions.',
    options: [
      { id: 'A', text: 'to' },
      { id: 'B', text: 'for' },
      { id: 'C', text: 'of', isCorrect: true },
      { id: 'D', text: 'with' },
    ],
  },
  {
    id: 5,
    type: 'mcq',
    category: 'Vocabulary (Phrasal Verbs)',
    question: 'Despite sudden traffic delays in Bengaluru, the seminar participants _____ their presentation without panic.',
    options: [
      { id: 'A', text: 'carried on with', isCorrect: true },
      { id: 'B', text: 'backed out of' },
      { id: 'C', text: 'gave away to' },
      { id: 'D', text: 'fell through on' },
    ],
  },
  {
    id: 6,
    type: 'mcq',
    category: 'Reading Comprehension',
    passage:
      'Language acquisition studies emphasize that grammatical competence alone does not produce conversational ease. True communicative fluency emerges when learners engage in spontaneous oral interaction, as active verbal retrieval builds cognitive pathways that eliminate the hesitation caused by mental translation.',
    question: 'According to the passage, what is the primary benefit of spontaneous oral interaction?',
    options: [
      { id: 'A', text: 'It completely eliminates the necessity of learning grammar rules.' },
      { id: 'B', text: 'It builds cognitive retrieval pathways that reduce hesitations caused by mental translation.', isCorrect: true },
      { id: 'C', text: 'It allows students to pass written examinations without study.' },
      { id: 'D', text: 'It is exclusively useful for native English speakers.' },
    ],
  },
  {
    id: 7,
    type: 'written',
    category: 'Written Expression & Coherence',
    prompt:
      'In 3 to 5 sentences, describe your primary goal for improving your English (such as career promotion, study abroad/IELTS, or everyday fluency) and the main challenge you currently experience when speaking or writing.',
    minWords: 20,
  },
]

const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1']

export default function AIEnglishTestModal({ isOpen, onClose }) {
  const [step, setStep] = useState('profile') // 'profile' | 'test' | 'evaluating' | 'result'
  const [currentQIndex, setCurrentQIndex] = useState(0)

  const [candidate, setCandidate] = useState({
    name: '',
    phone: '',
    email: '',
    goal: 'Spoken English & Everyday Fluency',
  })

  const [answers, setAnswers] = useState({})
  const [evaluationResult, setEvaluationResult] = useState(null)
  const [evaluatingStageText, setEvaluatingStageText] = useState('Evaluating grammatical precision and clause syntax...')

  if (!isOpen) return null

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    if (!candidate.name || !candidate.phone) return
    setStep('test')
    setCurrentQIndex(0)
  }

  const handleAnswerSelect = (qId, optionId) => {
    setAnswers((prev) => ({ ...prev, [qId]: optionId }))
  }

  const handleTextAnswerChange = (qId, text) => {
    setAnswers((prev) => ({ ...prev, [qId]: text }))
  }

  const handleNextQuestion = () => {
    if (currentQIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentQIndex((prev) => prev + 1)
    } else {
      runEvaluation()
    }
  }

  const handlePrevQuestion = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex((prev) => prev - 1)
    }
  }

  const handleRetake = () => {
    setStep('profile')
    setCurrentQIndex(0)
    setAnswers({})
    setEvaluationResult(null)
  }

  const runEvaluation = async () => {
    setStep('evaluating')

    const stages = [
      'Evaluating grammatical precision and clause syntax...',
      'Assessing lexical resource and contextual collocations...',
      'Analyzing coherence, cohesion, and written expression...',
      'Benchmarking against CEFR & IELTS academic standards...',
    ]

    let stageIdx = 0
    const interval = setInterval(() => {
      stageIdx++
      if (stageIdx < stages.length) {
        setEvaluatingStageText(stages[stageIdx])
      }
    }, 900)

    let mcqScore = 0
    const mcqQuestions = DIAGNOSTIC_QUESTIONS.filter((q) => q.type === 'mcq')
    mcqQuestions.forEach((q) => {
      const correctOpt = q.options.find((o) => o.isCorrect)
      if (answers[q.id] === correctOpt?.id) {
        mcqScore++
      }
    })

    try {
      const result = await evaluateEnglishTest({
        candidate,
        answers: {
          ...answers,
          writtenResponse: answers[7] || '',
        },
        mcqScore,
        totalMcqs: mcqQuestions.length,
      })

      clearInterval(interval)
      setEvaluationResult(result)
      setStep('result')
    } catch (err) {
      clearInterval(interval)
      console.error(err)
      setStep('result')
    }
  }

  const handleBookConsultation = () => {
    onClose()
    const enquiryEl = document.querySelector('#enquiry')
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' })
      const nameInput = document.querySelector('#enq-name')
      const phoneInput = document.querySelector('#enq-phone')
      const emailInput = document.querySelector('#enq-email')
      const msgInput = document.querySelector('#enq-message')

      if (nameInput) nameInput.value = candidate.name
      if (phoneInput) phoneInput.value = candidate.phone
      if (emailInput && candidate.email) emailInput.value = candidate.email
      if (msgInput && evaluationResult) {
        msgInput.value = `Diagnostic Assessment: Level ${evaluationResult.cefrLevel} (${evaluationResult.cefrTitle}), IELTS Band ${evaluationResult.ieltsBandEstimate}. Recommended: ${evaluationResult.recommendedCourse?.title}.`
      }
    }
  }

  const handleShareToWhatsApp = () => {
    if (!evaluationResult) return
    const text = encodeURIComponent(
      `Hello Quickstep English Academy! My name is ${candidate.name}. I just completed your Academic English Diagnostic Assessment:\n\n` +
      `• CEFR Level: ${evaluationResult.cefrLevel} (${evaluationResult.cefrTitle})\n` +
      `• IELTS Band Estimate: ${evaluationResult.ieltsBandEstimate}\n` +
      `• Diagnostic Accuracy: ${evaluationResult.overallScorePercentage}%\n` +
      `• Recommended Course: ${evaluationResult.recommendedCourse?.title}\n\n` +
      `I would like to schedule my free in-person counselling session at RT Nagar.`
    )
    window.open(`https://wa.me/919980933176?text=${text}`, '_blank')
  }

  const currentQ = DIAGNOSTIC_QUESTIONS[currentQIndex]
  const currentWrittenText = answers[7] || ''
  const writtenWordCount = currentWrittenText.trim().split(/\s+/).filter(Boolean).length

  return (
    <div className="test-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-test-title">
      <div className="test-modal-container">
        {/* Clean Institutional Modal Header */}
        <div className="test-modal-header">
          <div className="modal-header-brand">
            <div className="header-eyebrow-row">
              <span className="diagnostic-header-tag">
                <i className="fas fa-award" aria-hidden="true"></i> Quickstep Academic Assessment
              </span>
              <span className="diagnostic-inst-tag">CEFR & Cambridge IELTS Standard · RT Nagar, Bengaluru</span>
            </div>
            <h2 id="modal-test-title" className="test-modal-title">
              {step === 'result' ? 'English Proficiency Diagnostic Report' : 'English Diagnostic Assessment'}
            </h2>
          </div>
          <button className="test-modal-close" onClick={onClose} aria-label="Close Assessment">
            <i className="fas fa-xmark" aria-hidden="true"></i>
          </button>
        </div>

        {/* STEP 1: Candidate Registration / Profile */}
        {step === 'profile' && (
          <div className="test-modal-body">
            <div className="test-intro-box">
              <div className="intro-badge-pill">
                <i className="fas fa-graduation-cap" aria-hidden="true"></i> 5-Minute Academic Assessment
              </div>
              <h3>Benchmark Your English Proficiency</h3>
              <p>
                Complete our diagnostic assessment evaluated against the Common European Framework
                of Reference (CEFR) and Cambridge IELTS scales. Receive an instant competency breakdown
                and customized course recommendation.
              </p>
              <div className="test-highlights-strip">
                <span><i className="fas fa-circle-check" aria-hidden="true"></i> CEFR Levels A1–C1</span>
                <span><i className="fas fa-circle-check" aria-hidden="true"></i> IELTS Band Prediction</span>
                <span><i className="fas fa-circle-check" aria-hidden="true"></i> Instant Syllabus Roadmap</span>
              </div>
            </div>

            <form onSubmit={handleProfileSubmit} className="test-profile-form">
              <div className="form-group">
                <label htmlFor="cand-name">Candidate Full Name *</label>
                <input
                  type="text"
                  id="cand-name"
                  required
                  placeholder="e.g. Priya Sharma"
                  className="form-control"
                  value={candidate.name}
                  onChange={(e) => setCandidate({ ...candidate, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cand-phone">WhatsApp / Mobile Number *</label>
                  <input
                    type="tel"
                    id="cand-phone"
                    required
                    placeholder="+91 98765 43210"
                    className="form-control"
                    value={candidate.phone}
                    onChange={(e) => setCandidate({ ...candidate, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cand-email">Email Address</label>
                  <input
                    type="email"
                    id="cand-email"
                    placeholder="name@example.com"
                    className="form-control"
                    value={candidate.email}
                    onChange={(e) => setCandidate({ ...candidate, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="cand-goal">Primary Learning Focus</label>
                <select
                  id="cand-goal"
                  className="form-control"
                  value={candidate.goal}
                  onChange={(e) => setCandidate({ ...candidate, goal: e.target.value })}
                >
                  <option value="Spoken English & Everyday Fluency">Spoken English & Everyday Fluency</option>
                  <option value="IELTS Coaching for Study Abroad / PR">IELTS Coaching for Study Abroad / PR</option>
                  <option value="Corporate & Business English">Corporate & Business English</option>
                  <option value="Job Interview Preparation">Job Interview Preparation</option>
                  <option value="Foreign Language (German/French/Arabic)">Foreign Language (German/French/Arabic)</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary test-start-btn">
                <span>Start Diagnostic Assessment</span>
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>

              <div className="test-sample-preview-row">
                <button
                  type="button"
                  className="preview-sample-btn"
                  onClick={() => {
                    setCandidate({
                      name: 'Priya Sharma',
                      phone: '+91 98765 43210',
                      email: 'priya.sharma@example.com',
                      goal: 'Spoken English & Everyday Fluency',
                    })
                    setEvaluationResult({
                      cefrLevel: 'B2',
                      cefrTitle: 'Upper-Intermediate English',
                      ieltsBandEstimate: '6.5 - 7.0',
                      overallScorePercentage: 82,
                      summary: 'Demonstrates solid operational command with effective sentence construction and good vocabulary range. Minor hesitation appears in spontaneous speech transitions, and advanced complex clauses require targeted practice to achieve complete C1 fluency.',
                      strengths: [
                        'Effective syntactic control and accurate clause coordination',
                        'Contextual lexical range suitable for professional environments',
                        'Consistent coherence in reading comprehension and written expression'
                      ],
                      areasForImprovement: [
                        'Mastery of nuanced conditional clauses and inversion structures',
                        'Eliminating hesitation pauses during spontaneous discussions',
                        'Expanding idiomatic workplace phrasal collocations'
                      ],
                      skillBreakdown: {
                        grammar: 85,
                        vocabulary: 80,
                        reading: 88,
                        expression: 75,
                      },
                      recommendedCourse: {
                        id: 'spoken-english',
                        title: 'Spoken English & Workplace Communication (Advanced Cohort)',
                        reason: 'Tailored for B2 learners to bridge foundational grammar into unhesitating conversational fluency, executive presentations, and confident workplace interactions.'
                      }
                    })
                    setStep('result')
                  }}
                >
                  <i className="fas fa-file-circle-check" aria-hidden="true"></i> Preview Sample Assessment Report
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: Diagnostic Questions */}
        {step === 'test' && currentQ && (
          <div className="test-modal-body">
            <div className="test-progress-bar-wrap">
              <div className="test-progress-info">
                <span>Question {currentQIndex + 1} of {DIAGNOSTIC_QUESTIONS.length}</span>
                <span className="test-q-category">{currentQ.category}</span>
              </div>
              <div className="test-progress-track">
                <div
                  className="test-progress-fill"
                  style={{
                    width: `${((currentQIndex + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="test-question-box">
              {currentQ.passage && (
                <div className="test-reading-passage">
                  <span className="passage-label">Contextual Reading Passage:</span>
                  <p>{currentQ.passage}</p>
                </div>
              )}

              <h3 className="test-question-text">
                {currentQ.type === 'written' ? currentQ.prompt : currentQ.question}
              </h3>

              {currentQ.type === 'mcq' && (
                <div className="test-options-list">
                  {currentQ.options.map((opt) => {
                    const isSelected = answers[currentQ.id] === opt.id
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        className={`test-option-item ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleAnswerSelect(currentQ.id, opt.id)}
                      >
                        <span className="option-letter">{opt.id}</span>
                        <span className="option-text">{opt.text}</span>
                        {isSelected && <i className="fas fa-check option-check" aria-hidden="true"></i>}
                      </button>
                    )
                  })}
                </div>
              )}

              {currentQ.type === 'written' && (
                <div className="test-writing-wrap">
                  <textarea
                    rows={5}
                    className="form-control test-writing-textarea"
                    placeholder="Type your response here (minimum 20 words for linguistic accuracy)..."
                    value={currentWrittenText}
                    onChange={(e) => handleTextAnswerChange(currentQ.id, e.target.value)}
                  ></textarea>
                  <div className="writing-counter">
                    <span>Word Count: <strong>{writtenWordCount}</strong> words</span>
                    {writtenWordCount < currentQ.minWords && (
                      <span className="writing-hint">
                        (Please write {currentQ.minWords - writtenWordCount} more words for analysis)
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="test-nav-actions">
              {currentQIndex > 0 ? (
                <button type="button" className="btn btn-outline" onClick={handlePrevQuestion}>
                  <i className="fas fa-arrow-left" aria-hidden="true"></i> Previous
                </button>
              ) : <div></div>}

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleNextQuestion}
                disabled={
                  currentQ.type === 'mcq'
                    ? !answers[currentQ.id]
                    : writtenWordCount < (currentQ.minWords || 10)
                }
              >
                {currentQIndex === DIAGNOSTIC_QUESTIONS.length - 1 ? (
                  <>Submit for Academic Evaluation <i className="fas fa-file-signature" aria-hidden="true"></i></>
                ) : (
                  <>Next Question <i className="fas fa-arrow-right" aria-hidden="true"></i></>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Evaluating State */}
        {step === 'evaluating' && (
          <div className="test-modal-body test-evaluating-body">
            <div className="test-loading-spinner">
              <div className="spinner-core"></div>
              <i className="fas fa-graduation-cap spinner-icon" aria-hidden="true"></i>
            </div>
            <h3>Evaluating Your Diagnostic Assessment</h3>
            <p className="evaluating-model-tag">Academic Evaluation System · CEFR Standard</p>
            <div className="evaluating-status-box">
              <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
              <span>{evaluatingStageText}</span>
            </div>
          </div>
        )}

        {/* STEP 4: Production-Grade Result Scorecard */}
        {step === 'result' && evaluationResult && (
          <div className="test-modal-body test-result-body">
            {/* Candidate Metadata Strip */}
            <div className="report-meta-strip">
              <div className="report-meta-item">
                <span className="meta-label">Candidate</span>
                <strong className="meta-val">{candidate.name || 'Candidate'}</strong>
              </div>
              <div className="report-meta-item">
                <span className="meta-label">Assessment Standard</span>
                <strong className="meta-val">CEFR & Cambridge IELTS</strong>
              </div>
              <div className="report-meta-item">
                <span className="meta-label">Institution</span>
                <strong className="meta-val">Quickstep English Academy</strong>
              </div>
              <div className="report-meta-item">
                <span className="meta-label">Accreditation</span>
                <strong className="meta-val">NABET (QCI) & ISO 9001:2015</strong>
              </div>
            </div>

            {/* Benchmark Primary Card */}
            <div className="report-primary-card">
              <div className="cefr-hero-col">
                <span className="card-micro-tag">Primary Assessment Result</span>
                <div className="cefr-grade-row">
                  <span className="cefr-level-badge">{evaluationResult.cefrLevel}</span>
                  <div className="cefr-title-group">
                    <h3 className="cefr-title-text">{evaluationResult.cefrTitle}</h3>
                    <span className="cefr-sub-text">Common European Framework of Reference (CEFR)</span>
                  </div>
                </div>

                {/* Interactive CEFR Scale Tracker */}
                <div className="cefr-scale-tracker" aria-label="CEFR Scale Indicator">
                  {[
                    { code: 'A1', label: 'Beginner' },
                    { code: 'A2', label: 'Elementary' },
                    { code: 'B1', label: 'Intermediate' },
                    { code: 'B2', label: 'Upper-Int' },
                    { code: 'C1', label: 'Advanced' },
                  ].map((stepObj) => {
                    const isCurrent = evaluationResult.cefrLevel === stepObj.code
                    return (
                      <div key={stepObj.code} className={`scale-step ${isCurrent ? 'active' : ''}`}>
                        <span className="scale-pill">
                          <strong>{stepObj.code}</strong>
                          <span className="scale-pill-label">{stepObj.label}</span>
                        </span>
                        {isCurrent && <span className="scale-indicator">Your Level</span>}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Secondary Metrics Column */}
              <div className="report-metrics-col">
                <div className="metric-box">
                  <span className="metric-box-label">Estimated IELTS Band</span>
                  <strong className="metric-box-val">{evaluationResult.ieltsBandEstimate}</strong>
                  <span className="metric-box-hint">Academic & General Scale</span>
                </div>
                <div className="metric-box">
                  <span className="metric-box-label">Diagnostic Accuracy</span>
                  <strong className="metric-box-val">{evaluationResult.overallScorePercentage}%</strong>
                  <span className="metric-box-hint">Tested Core Competencies</span>
                </div>
              </div>
            </div>

            {/* Academic Evaluation Summary */}
            <div className="report-summary-block">
              <h4 className="summary-block-heading">
                <i className="fas fa-file-lines" aria-hidden="true"></i> Academic Diagnostic Summary
              </h4>
              <p className="summary-block-text">{evaluationResult.summary}</p>
            </div>

            {/* Core Competencies Breakdown */}
            <div className="skill-breakdown-card">
              <h4 className="skill-section-heading">
                <i className="fas fa-chart-simple" aria-hidden="true"></i> Core Competency Evaluation
              </h4>
              <div className="skill-bars-grid">
                {Object.entries(evaluationResult.skillBreakdown || {}).map(([skill, val]) => {
                  let rating = 'Foundational'
                  let ratingClass = 'chip-foundational'
                  if (val >= 80) {
                    rating = 'Proficient'
                    ratingClass = 'chip-proficient'
                  } else if (val >= 65) {
                    rating = 'Operational'
                    ratingClass = 'chip-operational'
                  } else if (val >= 50) {
                    rating = 'Developing'
                    ratingClass = 'chip-developing'
                  }

                  return (
                    <div className="skill-bar-item" key={skill}>
                      <div className="skill-bar-header">
                        <span className="skill-name">
                          {skill === 'grammar' ? 'Grammar & Clause Syntax' :
                           skill === 'vocabulary' ? 'Lexical Resource & Vocabulary' :
                           skill === 'reading' ? 'Reading Comprehension' :
                           'Written Expression & Cohesion'}
                        </span>
                        <div className="skill-val-group">
                          <span className={`skill-rating-chip ${ratingClass}`}>{rating}</span>
                          <span className="skill-val">{val}%</span>
                        </div>
                      </div>
                      <div className="skill-bar-track">
                        <div className="skill-bar-fill" style={{ width: `${val}%` }}></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Diagnostic Findings: Strengths & Focus Areas */}
            <div className="result-feedback-grid">
              <div className="feedback-col strengths-col">
                <div className="feedback-col-header">
                  <div className="feedback-icon-wrap strengths-icon-wrap">
                    <i className="fas fa-check" aria-hidden="true"></i>
                  </div>
                  <h5>Demonstrated Competencies</h5>
                </div>
                <ul>
                  {evaluationResult.strengths?.map((s, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle" aria-hidden="true"></i>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="feedback-col improvements-col">
                <div className="feedback-col-header">
                  <div className="feedback-icon-wrap improvements-icon-wrap">
                    <i className="fas fa-bullseye" aria-hidden="true"></i>
                  </div>
                  <h5>Priority Growth Areas</h5>
                </div>
                <ul>
                  {evaluationResult.areasForImprovement?.map((a, idx) => (
                    <li key={idx}>
                      <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Pathway Card */}
            <div className="recommended-pathway-card">
              <div className="pathway-card-content">
                <span className="pathway-eyebrow">
                  <i className="fas fa-compass" aria-hidden="true"></i> Recommended Learning Pathway
                </span>
                <h4 className="pathway-course-title">{evaluationResult.recommendedCourse?.title}</h4>
                <p className="pathway-rationale">{evaluationResult.recommendedCourse?.reason}</p>
                <div className="pathway-tags-row">
                  <span><i className="fas fa-location-dot" aria-hidden="true"></i> Classroom in RT Nagar & Live Online Batches</span>
                  <span><i className="fas fa-clock" aria-hidden="true"></i> Flexible Morning & Evening Schedules</span>
                  <span><i className="fas fa-user-check" aria-hidden="true"></i> Small Cohorts for Personal Mentoring</span>
                </div>
              </div>

              {/* Action Buttons with Proper Spacing & No Truncation */}
              <div className="report-actions-row">
                <button
                  type="button"
                  className="btn btn-primary pathway-primary-btn"
                  onClick={handleBookConsultation}
                >
                  <span>Book Free Counselling in RT Nagar</span>
                  <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </button>

                <button
                  type="button"
                  className="btn btn-outline pathway-secondary-btn"
                  onClick={handleShareToWhatsApp}
                >
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  <span>Send Report via WhatsApp</span>
                </button>
              </div>

              <div className="report-footer-subactions">
                <button type="button" className="retake-link-btn" onClick={handleRetake}>
                  <i className="fas fa-rotate-right" aria-hidden="true"></i> Retake Diagnostic Assessment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
