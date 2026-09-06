'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const GIFS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
]

const ROW_ONE = GIFS.slice(0, 11)
const ROW_TWO = GIFS.slice(11)

/** Extra travel allowed past the natural limits; the row springs back elastically. */
const DRAG_SLACK = 400

/**
 * One row: the outer div follows the page scroll (parallax), the inner motion.div can
 * be dragged with the mouse or a finger, with inertia. Vertical page scrolling keeps
 * working on touch because framer-motion sets touch-action: pan-y for drag="x".
 */
function Row({ images, offset }: { images: string[]; offset: number }) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [limit, setLimit] = useState(0)

  useEffect(() => {
    const measure = () => {
      const el = rowRef.current
      if (!el) return
      setLimit(Math.max(0, el.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const tripled = [...images, ...images, ...images]

  return (
    <div style={{ transform: `translateX(${offset}px)`, willChange: 'transform' }}>
      <motion.div
        ref={rowRef}
        drag="x"
        dragConstraints={{ left: -limit - DRAG_SLACK, right: DRAG_SLACK }}
        dragElastic={0.08}
        dragTransition={{ power: 0.25, timeConstant: 250 }}
        className="flex gap-3 w-max cursor-grab active:cursor-grabbing"
      >
        {tripled.map((src, i) => (
          // Animated GIFs gain nothing from the optimizer, so they are served as-is.
          <Image
            key={i}
            src={src}
            alt=""
            width={420}
            height={270}
            unoptimized
            loading="lazy"
            draggable={false}
            className="rounded-2xl object-cover shrink-0 pointer-events-none select-none w-[280px] h-[180px] sm:w-[420px] sm:h-[270px]"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    // "Reduce motion": no parallax, both rows sit at their natural position (dragging still works).
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.offsetTop
      setOffset(reduced ? 200 : (window.scrollY - sectionTop + window.innerHeight) * 0.3)
    }

    update()
    if (reduced) return
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <Row images={ROW_ONE} offset={offset - 200} />
        <Row images={ROW_TWO} offset={-(offset - 200)} />
      </div>
    </section>
  )
}
