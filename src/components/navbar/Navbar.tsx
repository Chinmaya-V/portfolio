import { jura_font } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/about', label: 'About', icon: '/icons/about.svg', iconHover: '/icons/about-hover.svg' },
  {
    href: '#skills',
    label: 'Skills',
    icon: '/icons/skills.svg',
    iconHover: '/icons/skills-hover.svg',
  },
  {
    href: '#projects',
    label: 'Projects',
    icon: '/icons/projects.svg',
    iconHover: '/icons/projects-hover.svg',
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: '/icons/contact.svg',
    iconHover: '/icons/contact-hover.svg',
  },
  {
    href: '#achievements',
    label: 'Achievements',
    icon: '/icons/contact.svg',
    iconHover: '/icons/contact-hover.svg',
  },
]

const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 px-8 py-1 w-full h-12 z-50 bg-gradient-to-b from-zinc-100/20 to-transparent
      flex items-center justify-center backdrop-blur-sm text-gray-200 text-lg ${jura_font.className}`}>
      <div className="flex items-center justify-between w-full max-w-5xl">
        <Link href="/" className="flex items-center bg-white rounded-2xl">
          <Image src="/logo.svg" alt="logo" width={40} height={40} priority />
        </Link>

        <div className="flex items-center gap-8 not-sm:hidden">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="flex justify-center items-center gap-1 hover:text-purple-300 transition-colors duration-300">
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="#resume"
          className="hover:text-purple-300 bg-purple-500 rounded-2xl px-2 transition-colors duration-300">
          Resume
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
