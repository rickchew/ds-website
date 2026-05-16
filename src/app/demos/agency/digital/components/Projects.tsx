import { Col, Container, Row } from 'react-bootstrap'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className="pb-0">
      <Container>
        <Row className="align-items-center g-4 mb-4 mb-sm-5">
          <Col md={6} lg={5}>
            <h2 className="mb-0">Real work, real industries — across Borneo and beyond.</h2>
          </Col>
          <Col md={6} lg={5} className="ms-auto text-md-end">
            <Link href="/case-studies" className="btn btn-lg btn-dark mb-0">
              See all case studies
            </Link>
          </Col>
        </Row>

        <Row className="g-4 g-md-5">
          {projects.map((project, idx) => (
            <Col md={6} key={idx}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Projects
