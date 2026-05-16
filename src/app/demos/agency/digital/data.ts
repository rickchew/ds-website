import { StatisticType, ProjectType, ServiceType, StepType, TestimonialType, BlogType } from '@/app/demos/agency/digital/types'

import serviceImg1 from '@/assets/images/services/4by3/01.jpg'
import serviceImg2 from '@/assets/images/services/4by3/02.jpg'
import serviceImg3 from '@/assets/images/services/4by3/03.jpg'
import serviceImg4 from '@/assets/images/services/4by3/04.jpg'
import serviceImg5 from '@/assets/images/services/4by3/05.jpg'
import serviceImg6 from '@/assets/images/services/4by3/06.jpg'

import project1 from '@/assets/images/portfolio/list/01.jpg'
import project2 from '@/assets/images/portfolio/list/02.jpg'
import project3 from '@/assets/images/portfolio/list/03.jpg'
import project4 from '@/assets/images/portfolio/list/04.jpg'

import avatar2 from '@/assets/images/avatar/02.jpg'
import avatar4 from '@/assets/images/avatar/04.jpg'
import avatar5 from '@/assets/images/avatar/05.jpg'
import avatar6 from '@/assets/images/avatar/06.jpg'
import avatar9 from '@/assets/images/avatar/09.jpg'

import blogImg3 from '@/assets/images/blog/4by3/03.jpg'
import blogImg7 from '@/assets/images/blog/4by3/07.jpg'
import blogImg8 from '@/assets/images/blog/4by3/08.jpg'

import { BsBullseye, BsHeadset, BsRocketTakeoff, BsSearch } from 'react-icons/bs'

export const services: ServiceType[] = [
  {
    title: 'Brand Launch',
    description: 'Brand strategy, naming, logo, identity, profile, pitch deck — built to scale across every layer below.',
    image: serviceImg1,
    url: '/services/brand-launch',
  },
  {
    title: 'AI-Ready Website',
    description: 'Fast, accessible, structured for AI search and agents. Not a brochure — a system entry point.',
    image: serviceImg2,
    url: '/services/ai-ready-website',
  },
  {
    title: 'Business Automation',
    description: 'WhatsApp, CRM, sales follow-up, billing and reporting workflows that run themselves.',
    image: serviceImg3,
    url: '/services/business-automation',
  },
  {
    title: 'Custom Web & Mobile App',
    description: 'Booking, membership, dealer, loyalty, payment, portals and dashboards on a reusable feature library.',
    image: serviceImg4,
    url: '/services/custom-app',
  },
  {
    title: 'IoT Hardware-to-Cloud',
    description: 'Sensors, devices and gateways connected to the cloud with dashboards and alerts that close the loop.',
    image: serviceImg5,
    url: '/services/iot',
  },
  {
    title: 'Data Intelligence',
    description: 'Pipelines, warehouses, dashboards and monthly insight reports. Your data, decision-ready.',
    image: serviceImg6,
    url: '/services/data-intelligence',
  },
  {
    title: 'AI & Deep Learning Lab',
    description: 'Agents, vision, language and predictive models — production-grade, not demos.',
    image: serviceImg1,
    url: '/services/ai-lab',
  },
]

export const steps: StepType[] = [
  {
    title: 'Discovery and Consultation',
    description: 'We begin by getting to know your unique requirements, goals, and challenges.',
    icon: BsSearch,
  },
  {
    title: 'Planning and Strategy',
    description: 'We define project milestones and deliverables to keep the process on track.',
    icon: BsBullseye,
  },
  {
    title: 'Deployment and Launch',
    description: 'We ensure a smooth transition to the live, providing support every step of the way.',
    icon: BsRocketTakeoff,
  },
  {
    title: 'Support and Maintenance',
    description: 'We offer ongoing support and maintenance services to keep your software running.',
    icon: BsHeadset,
  },
]

// Outcome metrics are 1st-draft placeholders (see docs/home.md [ASSET-2..5]) — confirm with Rick.
export const projects: ProjectType[] = [
  {
    name: 'Hiro — a laundry brand rebuilt as a connected operating system',
    category: 'Hiro · Laundry · One order touches one system, not five tools',
    image: project1,
    url: '/case-studies/hiro',
  },
  {
    name: 'Seng Heng Shipping — from paper-and-WhatsApp ops to a custom shipping platform',
    category: 'Seng Heng Shipping · Logistics · One source of truth for jobs, fleet and billing',
    image: project2,
    url: '/case-studies/seng-heng-shipping',
  },
  {
    name: 'Staycay — brand, booking site and automation shipped as one system',
    category: 'Staycay · Hospitality · Brand, booking and back-office launched together',
    image: project3,
    url: '/case-studies/staycay',
  },
  {
    name: 'Custom Business Systems — bespoke platforms from one reusable engine',
    category: 'Multi-industry · Loyalty · e-Wallet · Dealer management · IoT',
    image: project4,
    url: '/case-studies/custom-business-systems',
  },
]

export const statData: StatisticType[] = [
  {
    title: 'Building digital products in Borneo · since 2014',
    stat: 12,
    suffix: ' yrs',
  },
  {
    title: 'Google rating across 9 reviews',
    stat: 5,
    suffix: '.0★',
  },
  {
    title: 'One studio, one connected loop',
    stat: 7,
    suffix: ' pillars',
  },
]

export const testimonials: TestimonialType[] = [
  {
    title: 'A studio that thinks like an operator',
    comment:
      'Design Space didn\'t just hand us a website — they redesigned how the business runs. Brand, app and back-office automation came out of one team, on one system.',
    rating: 5,
    user: {
      firstName: 'Operator',
      lastName: 'Hiro',
      role: 'Google review · 5.0★',
      avatar: avatar4,
    },
  },
  {
    title: 'Twelve years of execution speaks for itself',
    comment:
      'We came in needing a website. We left with a CRM, automated follow-up and a dashboard that finally tells us what is happening across our outlets.',
    rating: 5,
    user: {
      firstName: 'SME',
      lastName: 'Owner',
      role: 'Google review · 5.0★',
      avatar: avatar5,
    },
  },
  {
    title: 'They actually understood our operations',
    comment:
      'From paper dockets and WhatsApp groups to a single platform tracking jobs, fleet and billing. The team in Miri knows how SMEs in Borneo actually work.',
    rating: 5,
    user: {
      firstName: 'Logistics',
      lastName: 'Client',
      role: 'Google review · 5.0★',
      avatar: avatar6,
    },
  },
]

export const blogs: BlogType[] = [
  {
    title: 'Sleek and Responsive - Designing with Bootstrap and Mizzle',
    category: 'Technology',
    publishedAt: {
      date: 15,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar2,
      firstName: 'Emma',
      lastName: 'Watson',
    },
    image: blogImg3,
    url: '/blog/single/v2',
  },
  {
    title: 'Mastering HTML Website Templates - Unleash Your Creativity with Bootstrap',
    category: 'Research',
    publishedAt: {
      date: 12,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar4,
      firstName: 'Louis',
      lastName: 'Ferguson',
    },
    image: blogImg8,
    url: '/blog/single/v2',
  },
  {
    title: 'Effortless Web Design with Mizzle - Unlock Your Creative Potential',
    category: 'Design',
    publishedAt: {
      date: 8,
      month: 'April',
      year: 2024,
    },
    publishedBy: {
      avatar: avatar9,
      firstName: 'Allen',
      lastName: 'Smith',
    },
    image: blogImg7,
    url: '/blog/single/v2',
  },
]
