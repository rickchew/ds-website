'use client'
import backgroundImg from '@/assets/images/bg/15.jpg'
import Link from 'next/link'
import { Col, Container, Form, FormControl, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <section className="position-relative z-index-2 pt-0">
      <Container className="position-relative">
        <div
          className="bg-dark rounded position-relative overflow-hidden p-4 p-sm-6"
          style={{
            background: `url(${backgroundImg.src}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <Row className="align-items-center position-relative">
            <Col md={6} xl={7} className="mb-4 mb-xl-0">
              <h2 className="text-white">Ready to build your digital business system?</h2>
              <p className="text-white mb-0">
                Tell us where you are in the loop — brand, website, automation, app, data or AI — and we&apos;ll show you the next step.
              </p>
            </Col>

            <Col md={6} xl={4} as={Form} className="ms-xl-auto">
              <FormControl className="mb-3" type="email" placeholder="your@email.com" />
              <Link href="/contact" className="btn btn-primary mb-0 d-grid">
                Start a Project
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default CTA
