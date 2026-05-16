'use client'
import pattern2 from '@/assets/images/elements/bg-pattern-2.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Col, Container, Row } from 'react-bootstrap'

const PILLAR_COPY: Record<string, { title: string; sub: string }> = {
  'brand-launch': {
    title: 'Brand Launch',
    sub: 'Brand strategy, naming, identity, profile and pitch decks — built to scale across every layer of the Digital Loop.',
  },
  'ai-ready-website': {
    title: 'AI-Ready Website',
    sub: 'Fast, accessible and structured for AI search and agents. Not a brochure — a system entry point.',
  },
  'business-automation': {
    title: 'Business Automation',
    sub: 'WhatsApp, CRM, sales follow-up, billing and reporting workflows that run themselves.',
  },
  'custom-app': {
    title: 'Custom Web & Mobile App',
    sub: 'Booking, membership, dealer, loyalty, payment, portals and dashboards on a reusable feature library.',
  },
  iot: {
    title: 'IoT Hardware-to-Cloud',
    sub: 'Sensors, devices and gateways connected to the cloud with dashboards and alerts that close the loop.',
  },
  'data-intelligence': {
    title: 'Data Intelligence',
    sub: 'Pipelines, warehouses, dashboards and monthly insight reports. Your data, decision-ready.',
  },
  'ai-lab': {
    title: 'AI & Deep Learning Lab',
    sub: 'Agents, vision, language and predictive models — production-grade, not demos.',
  },
}

const Hero = () => {
  const pathname = usePathname() ?? ''
  const slug = pathname.split('/').filter(Boolean).pop() ?? ''
  const copy = PILLAR_COPY[slug] ?? {
    title: 'Our services',
    sub: 'Seven service pillars, one connected studio.',
  }
  return (
    <section
      className="bg-dark pt-lg-8 pt-xl-9"
      style={{ backgroundImage: `url(${pattern2.src})`, backgroundPosition: 'center left', backgroundSize: 'cover' }}
      data-bs-theme="dark">
      <Container className="position-relative pt-4 pt-lg-0">
        <Row className="align-items-center">
          <Col md={7} xl={6}>
            <h1 className="mb-4">{copy.title}</h1>
            <p className="mb-4">{copy.sub}</p>
          </Col>
          <Col md={4} className="ms-auto text-md-end">
            <Link href="/contact" className="btn btn-lg btn-primary mb-6 mb-md-0">
              Start a Project
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
