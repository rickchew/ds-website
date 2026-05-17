'use client'
import PageBreadcrumb from '@/components/PageBreadcrumb'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import WebsiteOverview from './components/WebsiteOverview'
import LightBoxSection from './components/LightBoxSection'
import WebsiteResult from './components/WebsiteResult'
import Testimonial from './components/Testimonial'
import RelatedWorksSwiper from '../components/RelatedWorksSwiper'
import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import { usePathname } from 'next/navigation'

const CASE_COPY: Record<string, { title: string; lede: string; crumb: string }> = {
  hiro: {
    title: 'Hiro — a laundry brand rebuilt as a connected operating system',
    lede: 'We designed the brand, the app, the CRM, the dealer-management layer and the automation that ties them together — so one laundry order touches one system, not five tools.',
    crumb: 'Hiro',
  },
  'seng-heng-shipping': {
    title: 'Seng Heng Shipping — from paper-and-WhatsApp ops to a custom shipping platform',
    lede: 'A bespoke platform tracking jobs, fleet and billing end-to-end — replacing scattered spreadsheets, paper dockets and group chats with a single source of truth.',
    crumb: 'Seng Heng Shipping',
  },
  staycay: {
    title: 'Staycay — brand, booking site and automation shipped as one system',
    lede: 'A Borneo staycation operator launched with the brand identity, the booking platform and the back-office automation built and integrated together from day one.',
    crumb: 'Staycay',
  },
  'custom-business-systems': {
    title: 'Custom Business Systems — bespoke platforms from one reusable engine',
    lede: 'Loyalty, e-wallet, dealer management and IoT systems for operators across industries — engineered on a shared feature library so each new build starts further down the road.',
    crumb: 'Custom Business Systems',
  },
}

const Page = () => {
  const pathname = usePathname() ?? ''
  const slug = pathname.split('/').filter(Boolean).pop() ?? ''
  const copy = CASE_COPY[slug] ?? {
    title: 'Transforming Ideas into Reality',
    lede: 'Case study placeholder. Pick a specific case from /case-studies.',
    crumb: 'Case study',
  }
  return (
    <>
      <TopNavigationBar menuProps={{ showContactUs: true, showDocs: true, ulClassName: 'mx-auto' }} />

      <main>
        <section className="pt-xl-9">
          <Container className="pt-4 pt-xl-0">
            <Row>
              <Col md={9} className="mx-auto text-center">
                <div className="d-flex justify-content-center position-relative mb-4">
                  <PageBreadcrumb breadcrumbClassName="pb-0 mb-0" items={['Home', 'Case Studies', copy.crumb]} />
                </div>
                <h1 className="mb-4">{copy.title}</h1>
                <p>{copy.lede}</p>
              </Col>

              <WebsiteOverview />

              <LightBoxSection />

              <WebsiteResult />

              <Testimonial />
            </Row>
          </Container>
        </section>

        <RelatedWorksSwiper />
      </main>

      <Footer1 />
    </>
  )
}

export default Page
