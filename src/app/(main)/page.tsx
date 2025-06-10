'use client'
import StyledLines from '@/components/ui/styled-lines'
import { righteous_font, black_ops_one_font } from '@/utils/fonts'
import { motion } from 'motion/react'

export default function Home() {
	return (
		<section
			id="home"
			className="flex flex-col w-full h-full min-h-screen overflow-hidden justify-start items-center pt-[10%] max-sm:pt-[30%]"
		>
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0.1, y: 50 }}
				transition={{ duration: 0.5, ease: 'circIn', delay: 0.5 }}
				viewport={{ once: true }}
				className={`w-fit text-8xl max-sm:text-6xl font-bold text-gray-300 ${black_ops_one_font.className}`}
			>
				CHINMAYA V
			</motion.div>
			<StyledLines />
			<motion.div
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -50 }}
				transition={{ duration: 0.5, ease: 'circIn', delay: 0.7 }}
				viewport={{ once: true }}
				className={`w-fit text-4xl max-sm:text-3xl font-bold text-gray-300 ${righteous_font.className}`}
			>
				A Fullstack Developer.
			</motion.div>
		</section>
	)
}
