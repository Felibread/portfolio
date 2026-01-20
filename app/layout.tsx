import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Felipe Damasceno | Full Stack Developer',
  description: 'Full Stack Developer specialized in React, Next.js, TypeScript and Node.js. Building modern, high-performance, and well-structured web applications.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Web Developer', 'Felipe Damasceno'],
  authors: [{ name: 'Felipe Damasceno' }],
  openGraph: {
    title: 'Felipe Damasceno | Full Stack Developer',
    description: 'Full Stack Developer specialized in React, Next.js, TypeScript and Node.js.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
