'use client'
import LogoBox from '@/components/LogoBox'
import AppMenu, { type AppMenuProps } from '@/components/topbar/AppMenu/page'
import StickyHeader from '@/components/topbar/AppMenu/StickyHeader'
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler'
import useToggle from '@/hooks/useToggle'
import { Suspense, type ReactNode } from 'react'
import { Button, Container } from 'react-bootstrap'
import FloatingSearch from './FloatingSearch'
import ThemeToggleDropdown from './ThemeToggleDropdown'

type TopNavigationBarProps = {
  containerFluid?: boolean
  navClassName?: string
  menuProps?: Omit<AppMenuProps, 'mobileMenuOpen'>
  children?: ReactNode
}

const TopNavigationBar = ({
  navClassName,
  menuProps,
  containerFluid,
  children,
  ...props
}: TopNavigationBarProps) => {
  const { isTrue: isMenuOpen, toggle: toggleMenu } = useToggle(window.innerWidth >= 1200)

  return (
    <StickyHeader className="header-absolute" {...props}>
      {children}
      <nav className={`navbar navbar-expand-xl ${navClassName ?? ''}`}>
        <Container fluid={containerFluid}>
          <LogoBox className="me-0" />

          <Suspense>
            <AppMenu mobileMenuOpen={isMenuOpen} {...menuProps} />
          </Suspense>

          <ul className="nav align-items-center ms-sm-2">
            <Suspense><ThemeToggleDropdown /></Suspense>

            <Suspense>
              <FloatingSearch />
            </Suspense>

            <li className="nav-item d-none d-sm-block ms-2">
              <Button variant="dark" className="btn mb-0">
                Start a Project
              </Button>
            </li>

            <li className="nav-item">
              <MobileNavbarToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>
          </ul>
        </Container>
      </nav>
    </StickyHeader>
  )
}

export default TopNavigationBar
