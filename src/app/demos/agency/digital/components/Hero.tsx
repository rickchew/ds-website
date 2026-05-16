'use client'
import backgroundImg9 from '@/assets/images/bg/09.jpg'
import backgroundImg10 from '@/assets/images/bg/10.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import type { SwiperOptions } from 'swiper/types'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/swiper-bundle.css'


const Hero = () => {
  const swiperOptions: SwiperOptions = {
    modules: [EffectFade, Autoplay, Pagination],
    loop: true,
    effect: 'fade',
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }

  return (
    <section className="pt-0">
      <Swiper className="overflow-hidden" {...swiperOptions}>
        <SwiperSlide>
          <Card
            className="overflow-hidden min-vh-100 rounded-0"
            style={{
              background: `url(${backgroundImg10.src}) no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="bg-overlay bg-linear-overlay"></div>

            <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
              <Container>
                <Row>
                  <Col sm={11} lg={8} xl={7} className="text-center m-auto">
                    <span className="bg-white bg-opacity-10 text-white small rounded-3 px-3 py-2">AI Product, Data &amp; Automation Studio</span>

                    <h1 className="text-white display-4 my-4">
                      More than a website. A complete <span className="text-primary">digital business system</span>.
                    </h1>
                    <p className="text-white mb-5">
                      From brand and website to automation, custom apps, IoT, data and AI — built as one connected loop so every project compounds the last.
                    </p>
                    <Link className="btn btn-lg btn-primary icon-link icon-link-hover mb-0" href="/services">
                      Explore Services
                      <BsArrowRight className="bi" />
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </SwiperSlide>

        <SwiperSlide>
          <Card
            className="overflow-hidden min-vh-100 rounded-0"
            style={{
              background: `url(${backgroundImg9.src}) no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className="bg-overlay bg-linear-overlay"></div>

            <div className="position-relative z-index-2 d-flex flex-column m-auto h-100 py-9">
              <Container>
                <Row>
                  <Col sm={11} lg={8} className="mt-auto">
                    <h1 className="text-white display-4 mb-4">
                      Brand → Website → <span className="fw-light">Automation</span> → App → IoT → <span className="fw-light">Data</span> → AI → Growth
                    </h1>
                    <p className="text-white mb-5">
                      The Design Space Digital Loop. One studio. Ten connected layers. Twelve years building digital products in Borneo — now an AI Product, Data &amp; Automation Studio for SMEs ready to scale.
                    </p>
                    <Link className="btn btn-lg btn-primary icon-link icon-link-hover mb-0" href="/contact">
                      Book a Discovery Call
                      <BsArrowRight className="bi" />
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </Card>
        </SwiperSlide>

        <div className="swiper-pagination swiper-pagination-line position-absolute bottom-0 mb-3"></div>
      </Swiper>
    </section>
  )
}

export default Hero
