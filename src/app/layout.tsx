import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpteOne',
  description: 'Your option in fast and simple web apps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
          {children}
        <Footer />
      </body>
    </html>
  )
}
