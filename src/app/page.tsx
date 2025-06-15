'use client'
import HeroImage from '@/components/background/hero-image'
import IconRightCircleArrow from '@/components/icons/icon-right-circle-arrow'
import { ContainerTextFlip } from '@/components/ui/container-flip-text'
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
			className="w-full h-full overflow-hidden flex max-lg:flex-col justify-start items-start p-[5%]"
		>
			<div className="flex gap-1 flex-col w-6/10 max-lg:w-full">
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
					className={`w-full text-4xl max-sm:text-xl font-bold text-gray-300 ${righteous_font.className}`}
				>
					A Frontend Web Developer.
				</motion.div>

				<div className="flex items-center w-full text-2xl max-sm:text-base font-semibold text-gray-400 mt-2">
					I build web applications that are
					<ContainerTextFlip
						words={['modern.', 'sleek.', 'responsive.', 'scalable.', 'intuitive.']}
						className="flex items-center justify-center text-2xl max-sm:text-base text-purple-500"
					/>
				</div>
				<p className="w-full text-lg max-sm:text-base text-zinc-300 font-semibold mt-4 rounded-xl bg-gray-500/25 p-4">
					I specialize in building modern user interfaces with <span className="text-purple-400">React.js</span>,{' '}
					<span className="text-purple-400">Next.js</span>, and <span className="text-purple-400">TypeScript</span>,
					with a strong eye for detail and performance. Whether it&apos;s creating intuitive dashboards, dynamic tables,
					or seamless user experiences.
					<br />
					<br />
					On the backend, I build scalable APIs and robust server-side logic using{' '}
					<span className="text-purple-400">Node.js</span> and <span className="text-purple-400">NestJS</span>.
				</p>
				<div className="w-fit h-10 mt-4 flex justify-center items-center px-6 text-base text-gray-900 font-semibold bg-zinc-300/90 rounded-full border-2 border-purple-950 truncate">
					Let&apos;s build something great together&emsp;<IconRightCircleArrow fill="#4f46e5" size="24px" />
				</div>
			</div>
			<div className="flex justify-center items-start h-full max-lg:mt-20 max-lg:w-full">
				<HeroImage />
			</div>
		</section>
	)
}
