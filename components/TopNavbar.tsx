'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/pages/menu', label: 'MENU' },
  { href: '/pages/contact', label: 'CONTACT' },
]

const TopNavbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(180deg,#4f0f21_0%,#65152a_100%)] text-white shadow-[0_10px_30px_rgba(48,6,17,0.25)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/juicy-burger-icon.png"
            alt="Juicy Burger"
            width={42}
            height={42}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-[11px] font-medium tracking-[0.22em] transition-colors',
                  isActive ? 'text-white' : 'text-white/75 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'rounded-xl px-3 py-2 text-sm tracking-[0.18em] transition-colors',
                    isActive ? 'bg-white/12 text-white' : 'text-white/80 hover:bg-white/8 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default TopNavbar