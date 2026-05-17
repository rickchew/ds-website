import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { Card, CardBody } from 'react-bootstrap'

export type ShowcaseCardProps = {
  title: string
  subTitle: string
  brandImage: StaticImageData | string
  image: StaticImageData
  link: string
}

const resolveSrc = (src: StaticImageData | string) =>
  typeof src === 'string' ? src : src.src

const ShowcaseCard = ({ subTitle, brandImage, image, link, title }: ShowcaseCardProps) => {
  return (
    <Card className="card-img-scale bg-transparent overflow-hidden">
      <div className="position-absolute top-0 start-0 z-index-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={resolveSrc(brandImage)} className="m-4" alt="Client-img" style={{ height: '40px', width: 'auto' }} />
      </div>
      <div className="card-img-scale-wrapper rounded-3">
        <Image src={image} className="img-scale" alt="portfolio-img" loading="eager" />
      </div>
      <CardBody className="px-0 pb-0">
        <h5 className="mb-0">
          <Link href={link} className="heading-color stretched-link">
            {title}
          </Link>
        </h5>
        <small>{subTitle}</small>
      </CardBody>
    </Card>
  )
}

export default ShowcaseCard
