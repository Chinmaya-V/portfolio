'use client'
import { jura_font } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import IconDownload from '../icons/icon-download'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import IconMenu from '../icons/icon-menu'

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '#achievements', label: 'Achievements' },
]

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
            {isHover ? <IconDownload fill="#59168b" /> : <IconDownload />}
            Resume
          </button>
        </div>
      </nav>
      <nav
        className={`sm:hidden absolute top-0 px-8 py-1 w-full h-10 z-20 bg-gradient-to-t from-zinc-100/20 to-transparent
        flex items-center justify-between backdrop-blur-sm text-gray-200 text-lg ${jura_font.className}`}>
        <Link
          href="/"
          className="flex items-center w-fit rounded bg-purple-300 transition-colors duration-300">
          <Image src="/logo.svg" alt="logo" width={32} height={32} priority />
        </Link>

        <button>
          <IconMenu fill="#c084fc" />
        </button>
      </nav>
    </>
  )
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: false })
