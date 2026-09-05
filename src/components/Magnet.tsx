'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  /** How far outside the element edge the cursor still counts as "near". */
  padding?: number
  disabled?: boolean
  /** Higher strength = weaker pull (the offset is divided by it). */
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  wrapperClassName?: string
  innerClassName?: string
}

const REST = { x: 0, y: 0 }

export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const [offset, setOffset] = useState(REST)

  useEffect(() => {
    if (disabled) return

    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY

      const near =
        Math.abs(distX) < rect.width / 2 + padding && Math.abs(distY) < rect.height / 2 + padding

      if (near) {
        setActive(true)
        setOffset({ x: distX / strength, y: distY / strength })
      } else {
        setActive(false)
        setOffset(REST)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      // Reset so a re-enabled magnet does not resume from a stale offset.
      setActive(false)
      setOffset(REST)
    }
  }, [disabled, padding, strength])

  const shown = disabled ? REST : offset
  const isActive = !disabled && active

  return (
    <div ref={ref} className={wrapperClassName}>
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${shown.x}px, ${shown.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
