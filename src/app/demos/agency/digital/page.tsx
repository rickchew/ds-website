import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import DigitalJourney from './components/DigitalJourney'
import Projects from './components/Projects'
import Statistics from './components/Statistics'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer3 from '@/components/footer/Footer3'

import React from 'react'

const page = () => (
  <>
    <TopNavigationBar
      menuProps={{ showContactUs: true, ulClassName: 'mx-auto' }}
      navClassName="px-lg-5"
      darkButton={{ text: 'Start a Project' }}
      showFloatingSearch
      containerFluid
      data-bs-theme="dark"
    />

    <main>
      <Hero />
      <Statistics />
      <About />
      <DigitalJourney />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
    </main>

    <Footer3 />
  </>
)

export default page
