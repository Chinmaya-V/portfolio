'use client'
import { jura_font } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import IconDownload from '../icons/icon-download'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import MobileNav from './mobile-nav'
import { NAV_ITEMS } from './nav-items'

const Navbar = () => {
  const [isHover, setIsHover] = useState(false)
  return (
    <>
      <nav
        className={`not-sm:hidden fixed top-0 px-8 py-1 w-full h-16 z-20 bg-gradient-to-b from-zinc-100/20 to-transparent
          flex items-center justify-center backdrop-blur-sm text-gray-200 text-lg ${jura_font.className}`}>
        <div className="flex items-center justify-between w-full max-w-5xl">
          <Link
            href="/"
            className="flex items-center bg-zinc-400 rounded-lg p-1 hover:bg-gray-100 transition-colors duration-300">
            <Image src="/logo.svg" alt="logo" width={40} height={40} priority />
          </Link>

          <div className="flex items-center gap-8 ">
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={`icon-wrapper flex justify-center items-center gap-2 hover:text-purple-400 hover:underline underline-offset-2 `}>
                {label}
              </Link>
            ))}
          </div>

          <button
            className={`flex gap-1 items-center justify-center hover:scale-105 font-semibold transition-transform duration-300
          bg-purple-400 px-4 py-1 rounded hover:text-purple-900`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            {isHover ? <IconDownload fill="#59168b" size="24px" /> : <IconDownload size="24px" />}
            Resume
          </button>
        </div>
      </nav>
      <div
        className={`sm:hidden fixed bottom-2 px-8 py-1 w-[90%] h-14 z-20 bg-white/50 rounded-2xl p-2
        flex items-center justify-center gap-2 backdrop-blur-sm text-gray-200 text-lg ${jura_font.className}`}>
        <MobileNav />
      </div>
    </>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
