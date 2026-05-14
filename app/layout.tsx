import type { Metadata, Viewport } from 'next'
import { Inter, Oswald, Noto_Sans_Georgian } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const oswald = Oswald({ 
  subsets: ["latin"],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: '--font-georgian',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'fyoosha | Toronto Rock Duo',
  description: 'An original instrumental recording duo exploring political rhetoric through a fusion of rock, jazz, classical, blues, and electronica.',
  generator: 'v0.app',
  keywords: ['fyoosha', 'Toronto', 'rock band', 'instrumental', 'guitar', 'drums', 'fusion'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${notoSansGeorgian.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
