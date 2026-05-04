'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useState } from 'react'
import { artworkSeries } from '@/lib/data'

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="2" y1="6" x2="20" y2="6" />
      <line x1="2" y1="11" x2="20" y2="11" />
      <line x1="2" y1="16" x2="20" y2="16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="3" y1="3" x2="19" y2="19" />
      <line x1="19" y1="3" x2="3" y2="19" />
    </svg>
  )
}

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const isArtworkPage = pathname === '/artwork' || pathname === '/'
  const isBiographyPage = pathname === '/biography'
  const isContactPage = pathname === '/contact'

  const activeSeries = searchParams.get('series') || (isArtworkPage ? 'dissolving-blur' : null)

  return (
    <div className="flex flex-col h-full px-8 py-8">
      {/* Logo — Cormorant Garamond 32px Italic */}
      <div className="mb-8">
        <Link
          href="/artwork"
          onClick={onClose}
          className="font-logo italic text-[32px] leading-tight text-black hover:opacity-70 transition-opacity"
        >
          Kathat Phutsorn
        </Link>
      </div>

      {/* Artwork section — H1: Playfair Display 32px Bold */}
      <div className="flex-1">
        <h2 className="font-heading font-bold text-ds-h1 mb-4 leading-tight">
          <Link
            href="/artwork"
            onClick={onClose}
            className="hover:opacity-70 transition-opacity"
          >
            Artwork
          </Link>
        </h2>

        {/* Series links — Montserrat Caption 12px */}
        <nav className="flex flex-col gap-1.5">
          {artworkSeries.map((series) => {
            const isActive = isArtworkPage && activeSeries === series.id
            return (
              <Link
                key={series.id}
                href={`/artwork?series=${series.id}`}
                onClick={onClose}
                className={`font-sans text-ds-caption leading-snug transition-colors ${
                  isActive
                    ? 'font-bold text-black'
                    : 'font-normal text-ds-grey hover:text-black'
                }`}
              >
                {series.title}
                <br />
                ({series.years})
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom nav */}
      <div className="mt-auto">
        <div className="border-t border-ds-border mb-5" />
        <nav className="flex flex-col gap-3">
          <Link
            href="/biography"
            onClick={onClose}
            className={`font-sans text-ds-caption transition-colors ${
              isBiographyPage
                ? 'font-bold text-black'
                : 'font-normal text-ds-grey hover:text-black'
            }`}
          >
            Biography
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className={`font-sans text-ds-caption transition-colors ${
              isContactPage
                ? 'font-bold text-black'
                : 'font-normal text-ds-grey hover:text-black'
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="mt-6 text-ds-grey hover:text-black transition-colors">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white flex items-center justify-between px-6 py-4 border-b border-ds-border">
        <Link
          href="/artwork"
          className="font-logo italic text-[32px] leading-tight text-black"
        >
          Kathat Phutsorn
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="text-black"
          aria-label="Open menu"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-ds-overlay/30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide-in sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setMobileOpen(false)}
            className="text-black"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>
        <Suspense fallback={<div className="p-8 font-sans text-ds-caption text-ds-grey">Loading…</div>}>
          <SidebarContent onClose={() => setMobileOpen(false)} />
        </Suspense>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-60 flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
        <Suspense fallback={<div className="flex-1" />}>
          <SidebarContent />
        </Suspense>
      </aside>
    </>
  )
}
