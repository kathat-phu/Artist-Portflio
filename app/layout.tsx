import type { Metadata } from 'next'
import { Cormorant_Garamond, Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Kathat Phutsorn',
  description: 'Artist Portfolio — Kathat Phutsorn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${cormorant.variable} ${playfair.variable} ${montserrat.variable} font-sans h-full bg-white text-black`}
      >
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 h-full lg:ml-0 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
