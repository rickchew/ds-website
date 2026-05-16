import { Col, Container, Row } from 'react-bootstrap'
import { BsPatchCheck } from 'react-icons/bs'

const Hero = () => {
  const list = ['12 years in Borneo', 'Based in Miri, Sarawak', '5.0★ on Google · 9 reviews', 'AI Product, Data & Automation Studio']

  return (
    <section className="bg-dark pt-sm-8 pb-9" data-bs-theme="dark">
      <Container className="pt-4 pt-sm-0">
        <Row className="g-4 g-xxl-5">
          <Col lg={8}>
            <h1 className="mb-0 lh-base">From creative studio to AI Product, Data &amp; Automation Studio.</h1>
            <p className="mb-0 mt-4">
              Twelve years building digital products in Borneo. We started as a brand and web studio in 2014. Today we&apos;re an integrated AI, data, automation and IoT studio — same team, same maroon, broader loop.
            </p>
          </Col>
          <Col lg={4} xl={3} className="ms-auto position-relative">
            <ul className="list-group list-group-borderless mb-4">
              {list.map((item, idx) => (
                <li key={idx} className="list-group-item d-flex heading-color pb-0 icons-center">
                  <BsPatchCheck className="text-primary me-2" />
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
