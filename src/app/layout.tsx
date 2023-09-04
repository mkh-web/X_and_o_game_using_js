import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'XO',
  description: 'a page the help new employ to get cv',
  viewport:"width=device-width, initial-scale=1.0",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  )
}
