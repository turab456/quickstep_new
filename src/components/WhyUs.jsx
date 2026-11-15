const WHY_POINTS = [
  {
    index: '01 / EXPERTISE',
    title: '30+ Years of Expertise in English Training',
    desc: 'Founded in 1995, Quickstep English Academy has three decades of proven educational excellence, rooted continuously in RT Nagar, Bengaluru.',
  },
  {
    index: '02 / TRAINERS',
    title: 'Highly Experienced & Certified Trainers',
    desc: 'Our faculty members bring extensive pedagogical expertise and specialized certifications in ESL, IELTS coaching, and foreign languages.',
  },
  {
    index: '03 / CURRICULUM',
    title: 'Updated Curriculum Based on Latest Trends',
    desc: 'Every training program is regularly reviewed and refined by our academic panel of expert linguists, educators, and industry professionals.',
  },
  {
    index: '04 / METHODOLOGY',
    title: 'Practical, Activity-Based Learning',
    desc: 'Classrooms are interactive and engaging. Students practice English through real-life simulations, discussions, and role-plays in a safe, supportive environment.',
  },
  {
    index: '05 / ATTENTION',
    title: 'Small Batches for Personalized Attention',
    desc: 'We maintain strictly limited batch sizes so that every individual trainee receives personal guidance, individual feedback, and continuous support.',
  },
  {
    index: '06 / FLEXIBILITY',
    title: 'Flexible Timings for Students & Professionals',
    desc: 'Offering regular morning, afternoon, evening, and weekend batches, available both in our RT Nagar classroom and live online via Zoom.',
  },
  {
    index: '07 / RESULTS',
    title: 'Proven Track Record of Student Success',
    desc: 'Thousands of Indian and international learners have successfully progressed in their careers, university admissions, and IELTS band scores (Band 7+ and 8.5+).',
  },
]

export default function WhyUs() {
  return (
    <section className="why-section" id="why-us" aria-label="Why Choose Quickstep">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Trust & Recognition</span>
          <h2 className="section-title">Why Quickstep English Academy is the Best in RT Nagar</h2>
          <p className="section-lead">
            Directly from our founding principles: empowering learners with industry-ready skills,
            expert training, and career-focused programs since 1995.
          </p>
        </div>

        <div className="why-grid">
          {WHY_POINTS.map((item, idx) => (
            <div className="why-card" key={idx}>
              <span className="why-card-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
