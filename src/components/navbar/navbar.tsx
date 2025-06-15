'use client'
import { jura_font } from '@/utils/fonts'
import IconDownload from '../icons/icon-download'
import { MouseEvent, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import MobileNav from './mobile-nav'
import { NAV_ITEMS } from './nav-items'
import { useRouter } from 'next/navigation'
import { useNavbarStore } from '@/stores/navbar/navbarStore'

const NavLinks = ({ href, label }: { href: string; label: string }) => {
	const { link, setLink } = useNavbarStore()
	const router = useRouter()

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (href === link) return
		setLink(href)
		router.replace(href)
	}

	useEffect(() => {
		const path = window.location.pathname + window.location.hash
		if (path === href) {
			setLink(href)
		}
	}, [href, setLink])

	return (
		<button
			id={label}
			onClick={handleClick}
			className={`icon-wrapper flex justify-center items-center gap-2
                   hover:text-purple-400 hover:underline underline-offset-2
                  ${href === link ? 'text-purple-400 underline' : 'text-gray-200'}`}
		>
			{label}
		</button>
	)
}

const Navbar = () => {
	const [isHover, setIsHover] = useState(false)

	return (
		<>
			<nav
				className={`not-sm:hidden fixed top-0 left-0 px-8 py-1 w-full h-16 z-20 bg-gradient-to-b from-zinc-100/20 to-transparent
          flex items-center justify-center backdrop-blur-sm text-gray-200 text-lg ${jura_font.className}`}
			>
				<div className="flex items-center justify-end-safe gap-4 w-full max-w-5xl">
					<div className="flex items-center gap-4 ">
						{NAV_ITEMS.map(({ href, label }, index) => {
							return <NavLinks key={`key_${label}-${index}`} href={href} label={label} />
						})}
					</div>

					<button
						className={`flex gap-1 items-center justify-center hover:scale-105 font-semibold transition-transform duration-300
          bg-purple-400 px-4 py-1 rounded hover:text-purple-900`}
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
					>
						{isHover ? <IconDownload fill="#59168b" size="24px" /> : <IconDownload size="24px" />}
						Resume
					</button>
				</div>
			</nav>
			<div
				className={`sm:hidden fixed bottom-2 px-8 py-1 w-[90%] h-14 z-20 bg-white/50 rounded-2xl p-2
        flex items-center justify-center gap-2 backdrop-blur-sm text-gray-200 text-lg ${jura_font.className}`}
			>
				<MobileNav />
			</div>
		</>
	)
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
