import { Metadata } from 'next'
import { Fira_Code, Inter } from 'next/font/google'
import { Analytics } from '../components/analytics'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { MobileNav } from '../components/mobileNav'
import './styles/codeblock.css'
import './styles/globals.css'

const FontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const FontFiraCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://freya117-com.vercel.app'),
  title: {
    default: 'Freya Tan | Spatial Intelligence — vision, language, and simulation',
    template: '%s | Freya Tan',
  },
  description:
    'Freya Tan — incoming CS PhD at NYU (VIDA Center). Spatial AI, vision-language models, and machine learning for understanding cities and the people in them.',
  openGraph: {
    title: 'Freya Tan',
    description:
      'Spatial Intelligence — vision, language, and simulation.',
    url: 'https://freya117-com.vercel.app',
    siteName: 'Freya Tan',
    images: [],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: 'Freya Tan',
    description:
      'Spatial Intelligence — vision, language, and simulation.',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/static/favicon.ico',
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        className={`${FontInter.variable} ${FontFiraCode.variable} font-sans flex flex-col min-h-screen relative`}
      >
        <MobileNav />
        <Header />
        <main className="container flex-grow max-w-screen-lg px-5 m-auto mt-16 sm:px-12 md:px-20">
          {children}
        </main>
        <Footer />
        <Analytics />
        <BackgroundNoise />
      </body>
    </html>
  )
}

function BackgroundNoise() {
  return (
    <div className="absolute inset-0 -z-20 opacity-80 h-full mix-blend-overlay noise-bg"></div>
  )
}
