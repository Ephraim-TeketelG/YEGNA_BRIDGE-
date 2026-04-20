import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'YegnaBridge | Not Charity. Family.',
  description: 'YegnaBridge - Creating bridges of compassion and community care. Join our mission to serve families with dignity, love, and hope.',
  keywords: 'charity, community, outreach, Ethiopia, compassion, family',
  authors: [{ name: 'YegnaBridge' }],
  openGraph: {
    title: 'YegnaBridge | Not Charity. Family.',
    description: 'Creating bridges of compassion and community care. Join our mission to serve families with dignity, love, and hope.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YegnaBridge | Not Charity. Family.',
    description: 'Creating bridges of compassion and community care.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#1E40AF',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
