'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import LiveProjectButton from '@/components/LiveProjectButton'
import { PROJECTS, type ProjectMedia } from '@/data/projects'
import type { Dictionary } from '@/i18n/get-dictionary'

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]'

// Card is max-w-6xl (1152px): first column takes 40%, second 60%.
const COL1_SIZES = '(min-width: 1152px) 440px, 40vw'
const COL2_SIZES = '(min-width: 1152px) 660px, 60vw'

type ProjectText = Dictionary['projects']['items'][ProjectMedia['key']]

type CardProps = {
  project: ProjectMedia
  text: ProjectText
  liveLabel: string
  index: number
  total: number
  progress: MotionValue<number>
}

function ProjectCard({ project, text, liveLabel, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(progress, [index / total, 1], [1, targetScale])

  return (
    <div className="sticky top-24 md:top-32 h-[85vh] flex items-start justify-center">
      <motion.article
        className={`${RADIUS} w-full border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 origin-top`}
        style={{
          scale,
          top: index * 28,
          position: 'relative',
          background: '#0C0C0C',
        }}
      >
        {/* top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm">
                {text.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {text.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.url} label={liveLabel} />
        </div>

        {/* image grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5" style={{ width: '40%' }}>
            <div className="relative w-full" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <Image
                src={project.col1[0]}
                alt={`${text.name} 1`}
                fill
                sizes={COL1_SIZES}
                className={`${RADIUS} object-cover`}
              />
            </div>
            <div className="relative w-full" style={{ height: 'clamp(160px, 22vw, 340px)' }}>
              <Image
                src={project.col1[1]}
                alt={`${text.name} 2`}
                fill
                sizes={COL1_SIZES}
                className={`${RADIUS} object-cover`}
              />
            </div>
          </div>

          <div className="relative" style={{ width: '60%' }}>
            <Image
              src={project.col2}
              alt={text.alt}
              fill
              sizes={COL2_SIZES}
              className={`${RADIUS} object-cover`}
            />
          </div>
        </div>
      </motion.article>
    </div>
  )
}

type ProjectsSectionProps = {
  projects: Dictionary['projects']
  liveLabel: string
}

export default function ProjectsSection({ projects, liveLabel }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading w-fit mx-auto font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {projects.title}
      </FadeIn>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.key}
            project={project}
            text={projects.items[project.key]}
            liveLabel={liveLabel}
            index={i}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
