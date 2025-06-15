'use client'
import { useNavbarStore } from '@/stores/navbar/navbarStore'
import { jura_font } from '@/utils/fonts'
import { useInView } from 'motion/react'
import React, { useEffect, useRef } from 'react'

const ContactSection = () => {
	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, { amount: 0.1 })
	const { setLink } = useNavbarStore()
	useEffect(() => {
		if (isInView) {
			setLink('/#contact')
		}
	}, [isInView, setLink])
	return (
		<section ref={ref} id="contact" className="flex items-center justify-center w-full h-full min-h-screen overflow-hidden">
			<div className={`text-4xl ${jura_font.className} font-bold text-white`}>{"Let's get in touch!"}</div>
		</section>
	)
}

export default ContactSection
