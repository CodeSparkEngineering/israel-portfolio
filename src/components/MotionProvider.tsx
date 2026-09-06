'use client'

import type { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'

/**
 * Makes every framer-motion animation honor the visitor's "reduce motion" system
 * setting: movement is skipped, opacity fades still play.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
