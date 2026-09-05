'use client'

import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

type CharProps = {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}

/** One character: an invisible placeholder holds the space, an absolute span animates. */
function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  )
}

type Token = { text: string; start: number; isSpace: boolean }

/**
 * Split on whitespace but keep it, so words stay unbreakable while characters animate.
 * Each token carries its character offset so the reveal progresses across the whole text.
 */
function tokenize(text: string): Token[] {
  const tokens: Token[] = []
  let cursor = 0
  for (const part of text.split(/(\s+)/)) {
    if (!part) continue
    tokens.push({ text: part, start: cursor, isSpace: /^\s+$/.test(part) })
    cursor += part.length
  }
  return tokens
}

type AnimatedTextProps = {
  text: string
  className?: string
  style?: CSSProperties
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const tokens = tokenize(text)
  const total = text.length

  return (
    <p ref={ref} className={className} style={style}>
      {tokens.map((token, ti) => {
        if (token.isSpace) {
          return (
            <span key={ti} style={{ whiteSpace: 'pre' }}>
              {token.text}
            </span>
          )
        }
        return (
          <span key={ti} className="inline-block">
            {token.text.split('').map((char, ci) => {
              const i = token.start + ci
              return (
                <Char
                  key={ci}
                  char={char}
                  progress={scrollYProgress}
                  range={[i / total, (i + 1) / total]}
                />
              )
            })}
          </span>
        )
      })}
    </p>
  )
}
