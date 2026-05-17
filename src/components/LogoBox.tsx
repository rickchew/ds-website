import Image from 'next/image'
import { NavbarBrand } from 'react-bootstrap'
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'

type LogoBoxProps = {
  className?: string
}

const LogoBox = ({ className }: LogoBoxProps) => {
  return (
    <NavbarBrand className={`d-inline-flex align-items-center ${className ?? ''}`} href="/">
      <Image src={logoDark} alt="Design Space" height={28} style={{ width: 'auto' }} className="light-mode-item navbar-brand-item" />
      <Image src={logoLight} alt="Design Space" height={28} style={{ width: 'auto' }} className="dark-mode-item navbar-brand-item" />
    </NavbarBrand>
  )
}

export default LogoBox
