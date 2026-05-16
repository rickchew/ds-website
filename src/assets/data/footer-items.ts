import type { IconType } from 'react-icons'
import { BsBoxArrowUpRight, BsEnvelope, BsFileEarmarkTextFill, BsGeoAlt, BsPuzzleFill, BsStickiesFill, BsTelephone } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6'

import flagUK from '@/assets/images/flags/uk.svg'
import flagGR from '@/assets/images/flags/gr.svg'
import flagSP from '@/assets/images/flags/sp.svg'

type FooterLinkType = {
  name: string
  link?: string
  badge?: string
  icon?: IconType
}

type SocialMediaLink = {
  icon: IconType
  iconClassName: string
}

type LanguageType = {
  flag: string
  name: string
}

type ContactType = {
  title: string
  icon: IconType
  description: string
}

export const quickLinks: FooterLinkType[] = [
  {
    name: 'About us',
    link: '/about/v1',
  },
  {
    name: 'Contact us',
    link: '/contact/v1',
  },
  {
    name: 'Career',
    link: '/career',
    badge: '2 Job',
  },
  {
    name: 'Career detail',
    link: '/career/single',
  },
  {
    name: 'Become a partner',
    link: '/contact/v1',
  },
  {
    name: 'Sign in',
    link: '/auth/sign-in',
  },
  {
    name: 'Sign up',
    link: '/auth/sign-up',
  },
]

export const quickLinks2: FooterLinkType[] = [
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Case Studies',
    link: '/case-studies',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

export const quickLinks3: FooterLinkType[] = [
  {
    name: 'About us',
    link: '/about/v1',
  },
  {
    name: 'Contact us',
    link: '/contact/v1',
  },
  {
    name: 'Career',
    link: '/career',
  },
  {
    name: 'Career detail',
    link: '/career/single',
  },
  {
    name: 'Become a partner',
    link: '/contact/v1',
  },
  {
    name: 'Sign up',
    link: '/auth/sign-up',
  },
  {
    name: 'Cookie',
  },
]

export const quickLinks4: FooterLinkType[] = [
  {
    name: 'Brand Launch',
    link: '/services/brand-launch',
  },
  {
    name: 'AI-Ready Website',
    link: '/services/ai-ready-website',
  },
  {
    name: 'Business Automation',
    link: '/services/business-automation',
  },
  {
    name: 'Custom App',
    link: '/services/custom-app',
  },
]

export const communityLinks: FooterLinkType[] = [
  {
    name: 'IoT Hardware-to-Cloud',
    link: '/services/iot',
  },
  {
    name: 'Data Intelligence',
    link: '/services/data-intelligence',
  },
  {
    name: 'AI & Deep Learning Lab',
    link: '/services/ai-lab',
  },
  {
    name: 'Book a Discovery Call',
    link: '/contact',
  },
  {
    name: 'Privacy',
    link: '/privacy',
  },
  {
    name: 'Terms',
    link: '/terms',
  },
]

export const communityLinks2 = [
  {
    title: 'Explore Services',
    icon: BsFileEarmarkTextFill,
    variant: 'bg-warning',
  },
  {
    title: 'Case Studies',
    icon: BsStickiesFill,
    variant: 'bg-success',
  },
  {
    title: 'Start a Project',
    icon: BsPuzzleFill,
    variant: 'bg-info',
  },
]

export const socialMediaLinks: SocialMediaLink[] = [
  { icon: FaFacebookF, iconClassName: 'bg-facebook' },
  { icon: FaInstagram, iconClassName: 'bg-instagram' },
  { icon: FaTwitter, iconClassName: 'bg-twitter' },
  { icon: FaLinkedinIn, iconClassName: 'bg-linkedin' },
  { icon: FaYoutube, iconClassName: 'bg-youtube' },
]

export const contactDetail = {
  address: 'Pusat, Lot 8004, 2nd Floor, Block 11, Bandar Baru Permyjaya, 98000 Miri, Sarawak',
  contact: '016-589 7771',
  email: 'hello@designspace.my',
  weekDays: 'Mon – Fri: 8:00 am – 5:00 pm',
  weekEnds: 'Sat: 8:00 am – 12:00 pm · Sun: Closed',
}

export const contactDetails2: ContactType[] = [
  {
    title: 'Give us a call',
    icon: BsTelephone,
    description: contactDetail.contact,
  },
  {
    title: 'Send us an email',
    icon: BsEnvelope,
    description: contactDetail.email,
  },
  {
    title: 'Visit us in',
    icon: BsGeoAlt,
    description: contactDetail.address,
  },
]

export const translationLanguages: LanguageType[] = [
  { name: 'English', flag: flagUK },
  { name: 'German', flag: flagGR },
  { name: 'French', flag: flagSP },
]
