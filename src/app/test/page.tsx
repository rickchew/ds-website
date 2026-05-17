'use client'

import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from '@/app/about/v1/component/Hero'
import Footer3 from '@/components/footer/Footer3'

const TestPage = () => {
  return (
    <>
      <TopNavigationBar
        menuProps={{ ulClassName: 'mx-auto' }}
        navClassName="px-lg-5"
        containerFluid
        data-bs-theme="dark"
      />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
      </main>
      <Footer3 />
    </>
  )
}

export default TestPage
