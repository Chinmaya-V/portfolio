'use client'
import HeroImage from '@/components/background/hero-image'
import StyledLines from '@/components/ui/styled-lines'
import { useNavbarStore } from '@/stores/navbar/navbarStore'
import { righteous_font, black_ops_one_font } from '@/utils/fonts'
import { motion, useInView } from 'motion/react'
import { useRef, useEffect } from 'react'

export default function Home() {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { amount: 0.1 })
	const { setLink } = useNavbarStore()
	useEffect(() => {
		if (isInView) {
			setLink('/')
		}
	}, [isInView, setLink])
	return (
		<section
			ref={ref}
			className="w-full h-full min-h-screen  overflow-hidden flex max-md:flex-col justify-start items-start px-4 pt-[10%] max-sm:pt-[30%]"
		>
			<div className="flex gap-1 flex-col w-1/2 max-sm:w-full">
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.5, ease: 'easeIn', delay: 0.1 }}
					viewport={{ once: true }}
					className={`w-full text-4xl max-sm:text-2xl font-bold text-gray-300 ${righteous_font.className}`}
				>
					Hi Visitor, I am
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
					viewport={{ once: true }}
					className={`w-full text-7xl max-lg:text-6xl max-sm:text-5xl font-bold text-gray-300 ${black_ops_one_font.className}`}
				>
					<span className="text-purple-600 bg-transparent">Chinmaya V</span>
				</motion.div>

				<StyledLines />

				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.5, ease: 'easeIn', delay: 0.7 }}
					viewport={{ once: true }}
					className={`w-full text-4xl max-sm:text-2xl font-bold text-gray-300 ${righteous_font.className}`}
				>
					A Fullstack Developer.
				</motion.div>
			</div>
			<div className="flex justify-center items-start h-full w-1/2 max-sm:w-5/6">
				<HeroImage />
			</div>
		</section>
	)
}
