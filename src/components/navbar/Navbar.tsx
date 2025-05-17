import { jura_font } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/about', label: 'About' },
  {
    href: '#skills',
    label: 'Skills',
  },
  {
    href: '#projects',
    label: 'Projects',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
  {
    href: '#achievements',
    label: 'Achievements',
  },
]

const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 px-8 py-1 w-full h-16 z-50 bg-gradient-to-b from-zinc-100/20 to-transparent
      flex items-center justify-center backdrop-blur-sm text-gray-200 text-lg ${jura_font.className}`}>
      <div className="flex items-center justify-between w-full max-w-5xl">
        <Link
          href="/"
          className="flex items-center bg-zinc-400 rounded-lg p-1 hover:bg-gray-100 transition-colors duration-300">
          <Image src="/logo.svg" alt="logo" width={40} height={40} priority />
        </Link>

        <div className="flex items-center gap-8 not-sm:hidden">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={`icon-wrapper flex justify-center items-center gap-2 hover:text-purple-400 hover:underline underline-offset-2 `}>
              {label}
            </Link>
          ))}
        </div>

        <button className="not-sm:hidden hover:scale-105 font-semibold bg-purple-400 px-2 transition-transform duration-300">
          Resume
        </button>
      </div>
    </nav>
  )
}

export default Navbar
