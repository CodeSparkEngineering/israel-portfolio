'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type MagnetProps = {
  children: ReactNode
  /** How far outside the element edge the mouse still counts as "near" (desktop only). */
  padding?: number
  disabled?: boolean
  /** Higher strength = weaker pull (the offset is divided by it). */
  strength?: number
  /** Maximum displacement in px on each axis, so the element never drifts too far. */
  maxOffset?: number
  activeTransition?: string
  inactiveTransition?: string
  wrapperClassName?: string
  innerClassName?: string
}

const REST = { x: 0, y: 0 }
const clamp = (v: number, max: number) => Math.max(-max, Math.min(max, v))

/**
 * Pulls its content toward the pointer. Mouse: only when the cursor is near the
 * element. Touch: follows the finger anywhere on screen while it is down (page
 * scrolling keeps working because the listeners are passive), then springs back.
 */
export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  strength = 2,
  maxOffset = 80,
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

    const pull = (clientX: number, clientY: number, requireNear: boolean) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const distX = clientX - (rect.left + rect.width / 2)
      const distY = clientY - (rect.top + rect.height / 2)
      const near =
        !requireNear ||
        (Math.abs(distX) < rect.width / 2 + padding && Math.abs(distY) < rect.height / 2 + padding)

      if (near) {
        setActive(true)
        setOffset({ x: clamp(distX / strength, maxOffset), y: clamp(distY / strength, maxOffset) })
      } else {
        setActive(false)
        setOffset(REST)
      }
    }

    const onMouseMove = (e: MouseEvent) => pull(e.clientX, e.clientY, true)
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) pull(t.clientX, t.clientY, false)
    }
    const onTouchEnd = () => {
      setActive(false)
      setOffset(REST)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchstart', onTouchMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('touchcancel', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchstart', onTouchMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('touchcancel', onTouchEnd)
      // Reset so a re-enabled magnet does not resume from a stale offset.
      setActive(false)
      setOffset(REST)
    }
  }, [disabled, padding, strength, maxOffset])

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
