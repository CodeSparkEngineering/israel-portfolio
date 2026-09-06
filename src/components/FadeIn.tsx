'use client'

import type { CSSProperties, ReactNode } from 'react'
import { motion } from 'framer-motion'

// Static lookup keeps the component identity stable across renders
// (react-hooks/static-components) instead of calling motion.create() in render.
const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  nav: motion.nav,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  li: motion.li,
} as const

export type FadeInTag = keyof typeof MOTION_TAGS

type FadeInProps = {
  children: ReactNode
  /** HTML tag to render. Add more tags to MOTION_TAGS if needed. */
  as?: FadeInTag
  delay?: number
  duration?: number
  x?: number
  y?: number
  /** Lift the element a few pixels on hover (cards). */
  lift?: boolean
  className?: string
  style?: CSSProperties
}

export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  lift = false,
  className,
  style,
}: FadeInProps) {
  const MotionTag = MOTION_TAGS[as]

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      whileHover={lift ? { y: -6, transition: { duration: 0.25, delay: 0 } } : undefined}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
