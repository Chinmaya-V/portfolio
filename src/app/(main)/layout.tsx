import type { Metadata } from 'next'
import '../globals.css'
import Navbar from '@/components/navbar/navbar'
import Background from '@/components/background/background'

export const metadata: Metadata = {
	title: 'Chinmaya V | Portfolio',
	description:
		'Frontend Web Developer with 4+ years of experience, specializing in React.js, Next.js, TypeScript, Context API, Redux, Zustand, Styled-components, Node.js, NestJS, and MSAL.',
}

interface RootLayoutProps {
	children: React.ReactNode
	contact: React.ReactNode
	skills: React.ReactNode
	projects: React.ReactNode
}

export default function RootLayout({ children, contact, projects, skills }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className="min-h-screen min-w-screen flex flex-col items-center relative overflow-x-hidden">
				<Background />
				<Navbar />
				{children}
				{skills}
				{projects}
				{contact}
			</body>
		</html>
	)
}
