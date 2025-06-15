'use client'
import React from 'react'
import './styles.css'
import Image from 'next/image'
import { motion } from 'motion/react'

const HeroImage = () => {
	return (
		<motion.div
			animate={{
				y: [50, -60, 0],
				x: [0, 40, -40],
				scale: [0.9, 1, 1.1],
				transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' },
			}}
			className="w-full h-full blob_pattern"
		>
			<Image src="/astronaut.png" alt="Hero Image" width={450} height={450} />
		</motion.div>
	)
}

export default HeroImage
