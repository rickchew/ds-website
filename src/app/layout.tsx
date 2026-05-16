import '@/assets/scss/style.scss'
import BackToTop from '@/components/BackToTop'
import PageWrapper from '@/components/PageWrapper'
import { DEFAULT_PAGE_TITLE } from '@/states/constants'
import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'

const Instrument = Instrument_Sans({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  weight: [ '400', '500','600', '700'],
})


export const metadata: Metadata = {
  title: {
    template: '%s | Design Space — AI Product, Data & Automation Studio',
    default: DEFAULT_PAGE_TITLE,
  },
  description:
    'Design Space helps companies build AI-ready websites, custom apps, automation workflows, data intelligence systems, and IoT-connected products.',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={Instrument.className}>
        <PageWrapper>
          {children}
          <BackToTop />
        </PageWrapper>
      </body>
    </html>
  )
}
