import type { CSSProperties } from 'react'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import Magnet from '@/components/Magnet'
import ContactButton from '@/components/ContactButton'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import portrait from '@/assets/portrait.png'
import { WHATSAPP_URL } from '@/data/contact'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'

type HeroSectionProps = { locale: Locale; dict: Dictionary }

const NAV_TEXT =
  'text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]'

export default function HeroSection({ locale, dict }: HeroSectionProps) {
  const { nav, hero, buttons, language } = dict

  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      {/* navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="w-full px-6 md:px-10 pt-6 md:pt-8 z-20">
        <ul className="flex items-center justify-between w-full gap-4">
          {nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${NAV_TEXT} transition-opacity duration-200 hover:opacity-70`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <LanguageSwitcher current={locale} label={language.label} className={NAV_TEXT} />
          </li>
        </ul>
      </FadeIn>

      {/* heading: one line that fills the width; --title-scale compensates for longer translations */}
      <div className="w-full overflow-hidden">
        <FadeIn
          as="h1"
          delay={0.15}
          y={40}
          className="hero-heading w-fit mx-auto font-black uppercase tracking-tight leading-none whitespace-nowrap text-center mt-6 sm:mt-4 md:-mt-5 text-[calc(11vw*var(--title-scale))] sm:text-[calc(12vw*var(--title-scale))] md:text-[calc(12.5vw*var(--title-scale))] lg:text-[calc(13.5vw*var(--title-scale))]"
          style={{ '--title-scale': hero.titleScale } as CSSProperties}
        >
          {hero.title}
        </FadeIn>
      </div>

      {/* bottom bar */}
      <div className="mt-auto w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[440px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {hero.tagline}
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton href={WHATSAPP_URL} label={buttons.contact} />
        </FadeIn>
      </div>

      {/* portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <Image
            src={portrait}
            alt={hero.portraitAlt}
            priority
            sizes="(min-width: 1024px) 520px, (min-width: 768px) 440px, (min-width: 640px) 360px, 280px"
            className="w-full h-auto select-none"
          />
        </Magnet>
      </FadeIn>
    </section>
  )
}
