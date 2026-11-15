import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Courses from './components/Courses'
import IELTSSpotlight from './components/IELTSSpotlight'
import WhyUs from './components/WhyUs'
import Methodology from './components/Methodology'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import EnquiryForm from './components/EnquiryForm'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import WhatsAppFloat from './components/WhatsAppFloat'
import AIEnglishTestModal from './components/AIEnglishTestModal'

export default function App() {
  const [isAiTestOpen, setIsAiTestOpen] = useState(false)

  return (
    <>
      <Header onOpenAiTest={() => setIsAiTestOpen(true)} />
      <main>
        <Hero onOpenAiTest={() => setIsAiTestOpen(true)} />
        <TrustBar />
        <About />
        <Courses />
        <IELTSSpotlight />
        <WhyUs />
        <Methodology />
        <Testimonials />
        <FAQ />
        <EnquiryForm />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
      <AIEnglishTestModal
        isOpen={isAiTestOpen}
        onClose={() => setIsAiTestOpen(false)}
      />
    </>
  )
}
