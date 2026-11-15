const METHODOLOGY_PILLARS = [
  {
    step: 'STAGE 01',
    title: 'Individual Need Evaluation',
    desc: 'We assess each learner’s baseline fluency, grammar accuracy, and communication goals to customize modules for beginners, intermediate, or advanced speakers.',
  },
  {
    step: 'STAGE 02',
    title: 'Research-Based Modules',
    desc: 'Students receive comprehensive, research-backed study materials and structured course modules prepared and continually updated by language specialists.',
  },
  {
    step: 'STAGE 03',
    title: 'Safe, Interactive Practice',
    desc: 'Classrooms are engaging and supportive. Learners speak, debate, and role-play in a comfortable setting with real-time feedback from certified trainers.',
  },
  {
    step: 'STAGE 04',
    title: 'Guaranteed Visible Improvement',
    desc: 'Continuous progress evaluations and personalized critiques ensure noticeable fluency breakthroughs, culminating in an official completion certificate.',
  },
]

export default function Methodology() {
  return (
    <section className="methodology-section" id="methodology" aria-label="Student-Centric Methodology">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-tag">Teaching Philosophy</span>
          <h2 className="section-title">Student-Centric Learning for Guaranteed Improvement</h2>
          <p className="section-lead">
            At Quickstep, true success begins with personalized attention and high-quality education.
            Our classrooms allow students to practice in an encouraging, safe, and structured environment.
          </p>
        </div>

        <div className="stages-timeline">
          {METHODOLOGY_PILLARS.map((s, i) => (
            <div className="stage-card" key={i}>
              <span className="stage-step-marker">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
