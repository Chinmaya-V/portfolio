'use client'
import { useNavbarStore } from '@/stores/navbar/navbarStore'
import { jura_font } from '@/utils/fonts'
import { useInView } from 'motion/react'
import React, { useEffect, useRef } from 'react'

const SkillsSection = () => {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { amount: 0.1 })
	const { setLink } = useNavbarStore()
	useEffect(() => {
		if (isInView) {
			setLink('/#skills')
		}
	}, [isInView, setLink])

	return (
		<section
			ref={ref}
			id="skills"
			className="flex items-center justify-center w-full h-full min-h-screen overflow-hidden"
		>
			<div className={`text-4xl ${jura_font.className} font-bold text-white`}>{'My Skills'}</div>
		</section>
	)
}

export default SkillsSection
