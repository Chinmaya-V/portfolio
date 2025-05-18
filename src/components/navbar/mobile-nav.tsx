'use client'
import React from 'react'
import { MOBILE_NAV_ITEMS } from './nav-items'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const MobileNav = ({ pathname = '/' }) => {
  return (
    <div className="w-full flex gap-2 px-1 justify-evenly items-center">
      {MOBILE_NAV_ITEMS.map(({ href, label, icon }) => {
        const isActive = pathname === href
        return (
          <Link
            key={label}
            href={href}
            className={`w-10 h-10 rounded flex flex-col items-center justify-center transition-all duration-200 ${
              isActive
                ? 'bg-purple-600/75 z-30 scale-125 shadow-[0_4px_24px_4px_rgba(139,92,246,0.7)]'
                : ''
            }`}>
            {icon({ size: '24px', fill: isActive ? '#ffffff' : '#581c87' })}
            <p className="text-[8px]">{label}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default dynamic(() => Promise.resolve(MobileNav), { ssr: false })
