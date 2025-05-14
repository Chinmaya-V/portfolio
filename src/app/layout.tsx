import type { Metadata } from 'next'
import './globals.css'
import Background from '@/components/background/Background'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Frontend Web Developer with 4+ years of experience, specializing in React.js, Next.js, TypeScript, Context API, Redux, Zustand, Styled-components, Node.js, NestJS, and MSAL.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen min-w-screen flex flex-col relative overflow-x-hidden">
        <Background />
        {children}
      </body>
    </html>
  )
}
