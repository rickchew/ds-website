import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row>
          <Col lg={11} className="mx-auto">
            <Row className="g-4 g-lg-5 align-items-center">
              <Col md={6} lg={4} className="text-center">
                <div className="icon-xxl bg-primary rounded-circle mx-auto mb-n7" style={{ width: '150px', height: '150px' }}></div>
                <span className="heading-color fw-bold" style={{ fontSize: '6rem', lineHeight: 1.25 }}>
                  12
                </span>
                <h6 className="w-50 mx-auto">Years building digital products in Borneo</h6>
              </Col>

              <Col md={6} lg={4}>
                <h6 className="text-body fw-normal">Since 2014</h6>
                <h3>Most agencies stop at the website. We keep going.</h3>
              </Col>

              <Col lg={4}>
                <p className="mb-4">
                  The brand looks good. The site launches. The invoice clears. Then your business is on its own — to figure out the CRM,
                  automations, app, data and AI layer that actually compound growth. We built Design Space to close that gap.
                </p>
                <Link href="/about" className="btn btn-dark mb-0">
                  About Design Space
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
