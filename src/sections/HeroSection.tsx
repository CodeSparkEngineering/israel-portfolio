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
  'text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem]'

export default function HeroSection({ locale, dict }: HeroSectionProps) {
  const { nav, hero, buttons, language } = dict

  return (
    <section
      className="relative min-h-svh sm:min-h-0 sm:h-screen flex flex-col"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
    >
      {/* navbar: on phones the language switcher drops to its own centered row */}
      <FadeIn as="nav" delay={0} y={-20} className="w-full px-6 md:px-10 pt-6 md:pt-8 z-20">
        <ul className="flex flex-wrap items-center justify-between w-full gap-x-4 gap-y-3">
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
          <li className="basis-full flex justify-center sm:basis-auto sm:block">
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
          className="hero-heading w-fit mx-auto font-black uppercase tracking-tight leading-none whitespace-nowrap text-center mt-8 sm:mt-4 md:-mt-5 text-[calc(13vw*var(--title-scale))] sm:text-[calc(12vw*var(--title-scale))] md:text-[calc(12.5vw*var(--title-scale))] lg:text-[calc(13.5vw*var(--title-scale))]"
          style={{ '--title-scale': hero.titleScale } as CSSProperties}
        >
          {hero.title}
        </FadeIn>
      </div>

      {/* portrait: in the flow right under the title on phones, anchored to the bottom from sm up */}
      <FadeIn
        delay={0.6}
        y={30}
        className="relative mx-auto mt-6 w-[300px] z-10 sm:absolute sm:mt-0 sm:left-1/2 sm:-translate-x-1/2 sm:bottom-0 sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet
          padding={200}
          strength={2.2}
          maxOffset={90}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <Image
            src={portrait}
            alt={hero.portraitAlt}
            priority
            sizes="(min-width: 1024px) 520px, (min-width: 768px) 440px, (min-width: 640px) 360px, 300px"
            className="w-full h-auto select-none"
          />
        </Magnet>
      </FadeIn>

      {/* bottom bar: stacked on phones, side by side from sm up */}
      <div className="mt-auto w-full px-6 md:px-10 pt-8 pb-8 sm:pt-0 sm:pb-8 md:pb-10 flex flex-col items-start gap-6 sm:flex-row sm:justify-between sm:items-end z-20">
        <FadeIn
          as="p"
          delay={0.35}
          y={20}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[300px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[440px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {hero.tagline}
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton href={WHATSAPP_URL} label={buttons.contact} className="whitespace-nowrap" />
        </FadeIn>
      </div>
    </section>
  )
}
