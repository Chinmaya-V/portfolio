'use client'
import SkillBar from '@/components/skill/skill-bar'
import StyledLines from '@/components/ui/styled-lines'
import { righteous_font, black_ops_one_font } from '@/utils/fonts'
import { motion } from 'motion/react'

export default function Home() {
	return (
		<section className="w-full h-full min-h-screen overflow-hidden flex max-md:flex-col justify-start items-start px-4 pt-[10%] max-sm:pt-[30%]">
			<div className="flex flex-col w-4/5 max-sm:w-full">
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.5, ease: 'easeIn', delay: 0.1 }}
					viewport={{ once: true }}
					className={`w-full text-4xl max-sm:text-2xl font-bold text-gray-300 ${righteous_font.className}`}
				>
					Hi, I am
				</motion.div>
				<motion.div
					whileInView={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 50 }}
					transition={{ duration: 0.5, ease: 'easeIn', delay: 0.3 }}
					viewport={{ once: true }}
					className={`w-full text-7xl max-sm:text-5xl font-bold text-gray-300 ${black_ops_one_font.className}`}
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

			<div className="mt-8 h-10 w-4/5 max-sm:w-5/6">
				<SkillBar />
			</div>
		</section>
	)
}
