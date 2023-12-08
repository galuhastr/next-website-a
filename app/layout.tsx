import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'Jasa Travel',
  description: 'Portal Jasa Travel Terus Maju',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
