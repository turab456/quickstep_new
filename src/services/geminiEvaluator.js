/**
 * Quickstep English Academy — AI Diagnostic Test Evaluator Service
 * Powered by Google Gemini
 */

const DEFAULT_API_KEY =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_API_KEY)
const MODEL_NAME =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_GEMINI_MODEL)
export async function evaluateEnglishTest({ candidate, answers, mcqScore, totalMcqs }) {
  const prompt = `
You are the Chief Academic Evaluator and Senior Linguist at Quickstep English Academy (established 1995 in RT Nagar, Bengaluru).
Your task is to accurately assess a candidate's English language proficiency based on their diagnostic test results, map them to the international CEFR framework (A1, A2, B1, B2, C1), estimate their IELTS Band score, and recommend the best Quickstep course.

Candidate Profile:
- Name: ${candidate.name || 'Candidate'}
- Goal: ${candidate.goal || 'Fluency and career advancement'}
- Self-Identified Profile: ${candidate.profile || 'General Learner'}

Diagnostic Test Results:
- Multiple Choice Questions (Grammar, Vocabulary & Reading): Scored ${mcqScore} out of ${totalMcqs} correct.
- Candidate Written Response to Prompt ("Describe your primary goal for learning English and current challenges"):
"${answers.writtenResponse || 'No written response provided.'}"

Evaluation Rubric:
1. Grammar & Syntax: accuracy, clause coordination, tense consistency.
2. Lexical Resource: vocabulary range, precision, idiomatic collocations.
3. Written Cohesion & Coherence: logical flow, discourse markers.
4. CEFR Classification:
   - A1/A2 (Beginner to Elementary): Simple basic sentences, frequent grammar errors, limited vocabulary.
   - B1 (Intermediate): Understands main points, can express opinions, occasional errors with complex tenses.
   - B2 (Upper-Intermediate): Effective operational proficiency, good range, clear structured communication.
   - C1 (Advanced): Fluent, flexible language use, sophisticated vocabulary, rare minor slips.

Course Catalogue at Quickstep English Academy:
- "spoken-english": Spoken English & Communication Skills (Ideal for A1, A2, B1 building conversational confidence)
- "ielts-coaching": IELTS Coaching (Academic & General) (Ideal for B1, B2 aiming for Band 7+ / 8.5+)
- "business-english": Business English & Corporate Workplace Skills (Ideal for B1, B2 professionals)
- "german-language": German Language Training (CEFR A1-B2)
- "french-language": French Language Training (CEFR A1-B2)

IMPORTANT INSTRUCTIONS:
- You MUST respond ONLY with a single valid JSON object.
- Do NOT wrap in markdown code blocks like \`\`\`json or add conversational text.
- Follow this exact JSON schema:

{
  "cefrLevel": "B1",
  "cefrTitle": "Intermediate English",
  "ieltsBandEstimate": "5.5 - 6.0",
  "overallScorePercentage": 68,
  "summary": "2-3 sentences summarizing their communication proficiency and clarity.",
  "strengths": [
    "Specific strength 1 based on their text",
    "Specific strength 2 based on their test"
  ],
  "areasForImprovement": [
    "Specific improvement area 1",
    "Specific improvement area 2"
  ],
  "skillBreakdown": {
    "grammar": 65,
    "vocabulary": 70,
    "reading": 75,
    "expression": 62
  },
  "recommendedCourse": {
    "id": "spoken-english",
    "title": "Spoken English & Communication (Intermediate Cohort)",
    "reason": "Clear justification connecting their diagnosis to this course syllabus."
  }
}
`

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${DEFAULT_API_KEY}`

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.2,
          topP: 0.8,
          maxOutputTokens: 1000,
        },
      }),
    })

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}))
      throw new Error(errData.error?.message || `HTTP ${response.status}: Failed to evaluate with Gemini`)
    }

    const data = await response.json()
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || ''

    // Clean any markdown formatting if present
    const cleanedText = rawText
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim()

    const parsedResult = JSON.parse(cleanedText)
    return parsedResult
  } catch (error) {
    console.warn('Gemini Evaluator fallback triggered:', error)
    // Intelligent fallback estimation so candidate never experiences a broken UI
    return generateLocalFallbackReport({ mcqScore, totalMcqs, writtenText: answers.writtenResponse, candidate })
  }
}

/**
 * Heuristic fallback in case of rate-limiting or network outage
 */
function generateLocalFallbackReport({ mcqScore, totalMcqs, writtenText, candidate }) {
  const mcqPercentage = Math.round((mcqScore / totalMcqs) * 100)
  const wordCount = (writtenText || '').trim().split(/\s+/).filter(Boolean).length

  let cefrLevel = 'B1'
  let cefrTitle = 'Intermediate Fluency'
  let ieltsBand = '5.5 - 6.0'
  let courseId = 'spoken-english'
  let courseTitle = 'Spoken English & Fluency Training'

  if (mcqPercentage >= 80 && wordCount >= 25) {
    cefrLevel = 'B2'
    cefrTitle = 'Upper-Intermediate Operational English'
    ieltsBand = '6.5 - 7.0'
    courseId = candidate?.goal?.toLowerCase().includes('ielts') ? 'ielts-coaching' : 'business-english'
    courseTitle = candidate?.goal?.toLowerCase().includes('ielts') ? 'IELTS Coaching (Band 7+ Target)' : 'Business English & Workplace Fluency'
  } else if (mcqPercentage < 50) {
    cefrLevel = 'A2'
    cefrTitle = 'Elementary English'
    ieltsBand = '4.0 - 4.5'
    courseId = 'spoken-english'
    courseTitle = 'Spoken English & Communication (Foundation to Intermediate)'
  }

  return {
    cefrLevel,
    cefrTitle,
    ieltsBandEstimate: ieltsBand,
    overallScorePercentage: Math.min(Math.max(mcqPercentage, 45), 92),
    summary: `Demonstrates a solid ${cefrTitle} baseline with good communicative intent. Further structured practice will refine sentence agility and spontaneous fluency.`,
    strengths: [
      'Clear contextual understanding in reading and core grammar',
      'Demonstrated willingness to articulate ideas and share experiences',
    ],
    areasForImprovement: [
      'Expansion of advanced transitional phrases and idiomatic vocabulary',
      'Building spontaneous confidence without pausing for mental translation',
    ],
    skillBreakdown: {
      grammar: mcqPercentage,
      vocabulary: Math.min(mcqPercentage + 5, 95),
      reading: Math.min(mcqPercentage + 10, 95),
      expression: wordCount >= 30 ? 75 : 60,
    },
    recommendedCourse: {
      id: courseId,
      title: courseTitle,
      reason: 'Directly addresses your current level by bridging grammar understanding into spontaneous, professional speaking fluency.',
    },
  }
}
