import { jura_font } from '@/utils/fonts'
import Image from 'next/image'
import Link from 'next/link'
import IconAbout from '../ui/icons/icon-about'
import IconSkills from '../ui/icons/icon-skills'
import IconProjects from '../ui/icons/icon-projects'
import IconContact from '../ui/icons/icon-contact'
import IconAchievements from '../ui/icons/icon-achievements'

const NAV_ITEMS = [
  { href: '/about', label: 'About', icon: <IconAbout /> },
  {
    href: '#skills',
    label: 'Skills',
    icon: <IconSkills />,
  },
  {
    href: '#projects',
    label: 'Projects',
    icon: <IconProjects />,
  },
  {
    href: '#contact',
    label: 'Contact',
    icon: <IconContact />,
  },
  {
    href: '#achievements',
    label: 'Achievements',
    icon: <IconAchievements />,
  },
]

const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 px-8 py-1 w-full h-12 z-50 bg-gradient-to-b from-zinc-100/20 to-transparent
      flex items-center justify-center backdrop-blur-sm text-gray-200 text-lg ${jura_font.className}`}>
      <div className="flex items-center justify-between w-full max-w-5xl">
        <Link
          href="/"
          className="flex items-center bg-zinc-400 rounded-full p-1 hover:bg-gray-100 transition-colors duration-300">
          <Image src="/logo.svg" alt="logo" width={40} height={40} priority />
        </Link>

        <div className="flex items-center gap-8 not-sm:hidden">
          {NAV_ITEMS.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={`flex justify-center items-center gap-2 hover:text-purple-400`}>
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
