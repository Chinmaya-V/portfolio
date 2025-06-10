'use client'
import React, { MouseEvent, useEffect } from 'react'
import { NAV_ITEMS } from './nav-items'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useNavbarStore } from '@/stores/navbar/navbarStore'

const NavLinks = ({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: ({
    fill,
    size,
  }: {
    fill?: string | undefined
    size?: string | undefined
  }) => React.JSX.Element
}) => {
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
      className={`w-10 h-10 rounded flex flex-col items-center justify-center transition-all duration-200 ${
        href === link
          ? 'bg-purple-600/75 z-30 scale-125 shadow-[0_4px_24px_4px_rgba(139,92,246,0.7)]'
          : ''
      }`}>
      {icon({ size: '24px', fill: href === link ? '#ffffff' : '#581c87' })}
      <p className="text-[8px]">{label}</p>
    </button>
  )
}

const MobileNav = () => {
  return (
    <div className="w-full flex gap-2 px-1 justify-evenly items-center">
      {NAV_ITEMS.map(({ href, label, icon }) => {
        return <NavLinks key={label} href={href} label={label} icon={icon} />
      })}
    </div>
  )
}

export default dynamic(() => Promise.resolve(MobileNav), { ssr: false })
