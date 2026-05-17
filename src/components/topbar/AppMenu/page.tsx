import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Collapse, Dropdown, DropdownItem, DropdownToggle } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa6'

export type AppMenuProps = {
  mobileMenuOpen: boolean
  showMegaMenu?: boolean
  showResourceMenu?: boolean
  showContactUs?: boolean
  showDocs?: boolean
  ulClassName?: string
}

const SERVICES_ITEMS: { label: string; href: string }[] = [
  { label: 'AI-Ready Website', href: '/services/ai-ready-website' },
  { label: 'Brand Launch', href: '/services/brand-launch' },
  { label: 'Business Automation', href: '/services/business-automation' },
  { label: 'Custom App', href: '/services/custom-app' },
  { label: 'Data Intelligence', href: '/services/data-intelligence' },
  { label: 'AI Lab', href: '/services/ai-lab' },
  { label: 'IoT', href: '/services/iot' },
]

// Design Space Phase-1 nav per docs/site-structure.md §2.
// Mizzle's Demos/Pages/Portfolio dropdown components are kept in this folder but no longer rendered.
const OTHER_NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const AppMenu = ({ mobileMenuOpen, ulClassName }: AppMenuProps) => {
  const pathname = usePathname()
  const isServicesActive = pathname === '/services' || pathname?.startsWith('/services/')

  return (
    <Collapse in={mobileMenuOpen} className="navbar-collapse">
      <div>
        <ul className={`navbar-nav navbar-nav-scroll ${ulClassName ?? ''}`}>
          <Dropdown className="nav-item dropdown">
            <DropdownToggle
              as={Link}
              href="/services"
              variant="link"
              className={`nav-link mb-0 arrow-none d-flex w-100 justify-content-between align-items-center dropdown-toggle${isServicesActive ? ' active' : ''}`}
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-haspopup="true"
              aria-expanded="false">
              Services
              <FaAngleDown size={12} className="ms-1" />
            </DropdownToggle>
            <div className="dropdown-menu" data-bs-popper="static">
              {SERVICES_ITEMS.map((item) => (
                <DropdownItem
                  key={item.href}
                  as={Link}
                  className={`dropdown-item${pathname === item.href ? ' active' : ''}`}
                  href={item.href}>
                  {item.label}
                </DropdownItem>
              ))}
            </div>
          </Dropdown>

          {OTHER_NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <li key={item.href} className="nav-item">
                <Link className={`nav-link${isActive ? ' active' : ''}`} href={item.href}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Collapse>
  )
}

export default AppMenu
