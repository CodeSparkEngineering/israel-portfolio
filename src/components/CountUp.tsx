'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

type Parsed = { prefix: string; target: number; decimals: number; separator: string; suffix: string }

/** Splits "€62", "12,7 mil" or "12.7k" into the number and the text around it. */
function parse(value: string): Parsed | null {
  const match = /^([^\d]*)(\d+)(?:([.,])(\d+))?(.*)$/.exec(value)
  if (!match) return null
  const [, prefix, int, separator = '', frac = '', suffix] = match
  return {
    prefix,
    target: Number(`${int}.${frac || '0'}`),
    decimals: frac.length,
    separator,
    suffix,
  }
}

function format({ prefix, decimals, separator, suffix }: Parsed, n: number) {
  return `${prefix}${n.toFixed(decimals).replace('.', separator)}${suffix}`
}

type CountUpProps = { value: string; className?: string; style?: CSSProperties }

/**
 * Counts from 0 up to the number inside `value` the first time it scrolls into view.
 * Renders the final value on the server and under "reduce motion".
 */
export default function CountUp({ value, className, style }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const parsed = useMemo(() => parse(value), [value])
  const [shown, setShown] = useState(value)

  useEffect(() => {
    if (!inView || !parsed || reduce) return
    const controls = animate(0, parsed.target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => setShown(format(parsed, n)),
    })
    return () => controls.stop()
  }, [inView, parsed, reduce])

  return (
    <span ref={ref} className={className} style={style}>
      {shown}
    </span>
  )
}
