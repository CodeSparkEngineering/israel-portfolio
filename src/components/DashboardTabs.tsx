'use client'

import { useId, useState } from 'react'
import type { KeyboardEvent } from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

export type DashboardTab = { key: string; label: string; caption: string; image: StaticImageData }

type DashboardTabsProps = { tabs: DashboardTab[]; label: string }

/**
 * One screenshot at a time: pill tabs with a sliding indicator and a crossfade between
 * images. Every image stays mounted (faded out), so switching never waits for a download.
 * Arrow keys move between tabs.
 */
export default function DashboardTabs({ tabs, label }: DashboardTabsProps) {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const id = useId()

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (active + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length
    setActive(next)
    document.getElementById(`${id}-tab-${tabs[next].key}`)?.focus()
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="flex flex-wrap justify-center gap-2"
      >
        {tabs.map((tab, i) => {
          const selected = i === active
          return (
            <button
              key={tab.key}
              id={`${id}-tab-${tab.key}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${id}-panel-${tab.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`relative cursor-pointer rounded-full px-4 py-2 text-xs sm:text-sm font-medium uppercase tracking-widest transition-colors duration-200 ${
                selected ? 'text-[#0C0C0C]' : 'text-[#D7E2EA]/70 hover:text-[#D7E2EA]'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId={`${id}-pill`}
                  className="absolute inset-0 rounded-full bg-[#D7E2EA]"
                  transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          )
        })}
      </div>

      <div
        className="relative mt-6 overflow-hidden rounded-3xl border border-[#D7E2EA]/15 bg-[#0C0C0C]"
        style={{ aspectRatio: '1374 / 752' }}
      >
        {tabs.map((tab, i) => {
          const selected = i === active
          return (
            <motion.div
              key={tab.key}
              id={`${id}-panel-${tab.key}`}
              role="tabpanel"
              aria-labelledby={`${id}-tab-${tab.key}`}
              aria-hidden={!selected}
              initial={false}
              animate={{ opacity: selected ? 1 : 0, scale: selected ? 1 : 0.985 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ pointerEvents: selected ? 'auto' : 'none' }}
              className="absolute inset-0"
            >
              <Image
                src={tab.image}
                alt={tab.caption}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </motion.div>
          )
        })}
      </div>

      <p aria-live="polite" className="mt-4 text-center text-[#D7E2EA]/60 font-light text-xs sm:text-sm">
        {tabs[active].caption}
      </p>
    </div>
  )
}
