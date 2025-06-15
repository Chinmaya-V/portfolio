'use client'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Background from '@/components/background/background'
import { usePathname } from 'next/navigation'
import React from 'react'

interface RootLayoutProps {
	children: React.ReactNode
	contact: React.ReactNode
	skills: React.ReactNode
	projects: React.ReactNode
}

export default function RootLayout({ children, contact, projects, skills }: RootLayoutProps) {
	const pathname = usePathname()
	const isHomePage = pathname === '/'
	return (
		<html lang="en">
			<head>
				<title>{'Chinmaya V | Portfolio'}</title>
				<meta
					name="description"
					content={
						'Frontend Web Developer with 4+ years of experience, specializing in React.js, Next.js, TypeScript, Context API, Redux, Zustand, Styled-components, Node.js, NestJS, and MSAL.'
					}
				/>
			</head>
			<body className="min-h-screen min-w-screen flex flex-col items-center relative overflow-x-hidden">
				<Background />
				<Navbar />
				{children}
				{isHomePage && (
					<>
						{skills}
						{projects}
						{contact}
					</>
				)}
			</body>
		</html>
	)
}
