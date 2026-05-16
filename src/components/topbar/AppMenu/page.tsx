import { Collapse } from 'react-bootstrap'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type AppMenuProps = {
  mobileMenuOpen: boolean
  showMegaMenu?: boolean
  showResourceMenu?: boolean
  showContactUs?: boolean
  showDocs?: boolean
  ulClassName?: string
}

// Design Space Phase-1 nav per docs/site-structure.md §2.
// Mizzle's Demos/Pages/Portfolio dropdown components are kept in this folder but no longer rendered.
const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const AppMenu = ({ mobileMenuOpen, ulClassName }: AppMenuProps) => {
  const pathname = usePathname()

  return (
    <Collapse in={mobileMenuOpen} className="navbar-collapse">
      <div>
        <ul className={`navbar-nav navbar-nav-scroll ${ulClassName ?? ''}`}>
          {NAV_ITEMS.map((item) => {
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
