import { NavbarBrand } from 'react-bootstrap'
import { BsRocketTakeoff } from 'react-icons/bs'

type LogoBoxProps = {
  className?: string
  smallIcon?: boolean
  imageClassName?: string
}

// Text-based wordmark used until Rick supplies the SVG lockup (see docs/brief.md "Still outstanding").
// Format: rocket icon + "design" (light) + "space" (bold).
const LogoBox = ({ className, smallIcon }: LogoBoxProps) => {
  if (smallIcon) {
    return <BsRocketTakeoff className={className ?? ''} size={28} />
  }
  return (
    <NavbarBrand className={`d-inline-flex align-items-center gap-2 ${className ?? ''}`} href="/">
      <BsRocketTakeoff size={22} className="text-primary" />
      <span className="fs-4 lh-1 heading-color">
        <span className="fw-light">design</span>
        <span className="fw-bold">space</span>
      </span>
    </NavbarBrand>
  )
}

export default LogoBox
