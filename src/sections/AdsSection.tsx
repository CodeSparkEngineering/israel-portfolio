import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import CountUp from '@/components/CountUp'
import DashboardTabs from '@/components/DashboardTabs'
import ContactButton from '@/components/ContactButton'
import { WHATSAPP_URL } from '@/data/contact'
import { AD_PROOF, AD_SHOTS } from '@/data/ads'
import type { Dictionary } from '@/i18n/get-dictionary'

type AdsSectionProps = {
  dict: Dictionary
  /** h1 when the section is the page itself (/ads), h2 inside another page. */
  headingTag?: 'h1' | 'h2'
}

type EyebrowProps = { children: string; as: 'h2' | 'h3' }

/** Small centered label with a short brand-colored rule, opening each block. */
function Eyebrow({ children, as: Tag }: EyebrowProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span
        aria-hidden
        className="h-px w-10"
        style={{ background: 'linear-gradient(90deg, #B600A8, #FF7A1A)' }}
      />
      <Tag className="text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-xs sm:text-sm text-center">
        {children}
      </Tag>
    </div>
  )
}

const CARD = 'rounded-3xl border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03]'

/**
 * Real results of a Google Ads campaign (own brand SparkLab) in three blocks: headline
 * metrics that count up, the dashboard screenshots behind tabs, and the client chats
 * that show how they found us. Numbers and texts come from the dictionaries.
 */
export default function AdsSection({ dict, headingTag = 'h2' }: AdsSectionProps) {
  const { ads, buttons } = dict
  const blockTag = headingTag === 'h1' ? 'h2' : 'h3'

  return (
    <section
      id="ads"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as={headingTag}
        delay={0}
        y={40}
        className="hero-heading w-fit mx-auto font-black uppercase leading-none tracking-tight text-center"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {ads.title}
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.1}
        y={30}
        className="text-[#D7E2EA]/80 font-light text-center leading-relaxed max-w-[680px] mx-auto mt-8 sm:mt-10"
        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
      >
        {ads.intro}
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.18}
        y={16}
        className="mt-4 text-center text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs sm:text-sm"
      >
        {ads.period}
      </FadeIn>

      {/* 1. headline metrics */}
      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-24">
        <FadeIn y={20}>
          <Eyebrow as={blockTag}>{ads.sections.metrics}</Eyebrow>
        </FadeIn>

        <dl className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {ads.stats.map((stat, i) => (
            <FadeIn
              key={stat.label}
              delay={i * 0.08}
              y={24}
              lift
              className={`${CARD} flex flex-col-reverse px-5 py-6 sm:px-6 sm:py-7 text-center`}
            >
              <dt className="mt-2 text-[#D7E2EA]/60 font-light uppercase tracking-widest text-[0.65rem] sm:text-xs">
                {stat.label}
              </dt>
              <dd
                className="hero-heading font-black leading-none"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
              >
                <CountUp value={stat.value} />
              </dd>
            </FadeIn>
          ))}
        </dl>

        <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
          {ads.highlights.map((item, i) => (
            <FadeIn
              as="li"
              key={item}
              delay={0.3 + i * 0.08}
              y={12}
              className="rounded-full border border-[#D7E2EA]/20 px-4 py-2 text-[#D7E2EA]/85 text-xs sm:text-sm font-medium"
            >
              {item}
            </FadeIn>
          ))}
        </ul>
      </div>

      {/* 2. dashboard screenshots behind tabs */}
      <div className="max-w-5xl mx-auto mt-20 sm:mt-24 md:mt-28">
        <FadeIn y={20}>
          <Eyebrow as={blockTag}>{ads.sections.dashboard}</Eyebrow>
        </FadeIn>

        <FadeIn y={24} delay={0.1} className="mt-8 sm:mt-10">
          <DashboardTabs
            label={ads.tabsLabel}
            tabs={AD_SHOTS.map((shot) => ({
              key: shot.key,
              image: shot.image,
              label: ads.tabs[shot.key],
              caption: ads.shots[shot.key],
            }))}
          />
        </FadeIn>

        <p className="mt-4 text-center text-[#D7E2EA]/40 font-light uppercase tracking-widest text-xs">
          {ads.note}
        </p>
      </div>

      {/* 3. how clients found us: real (redacted) chats; a snap carousel on phones */}
      <div className="max-w-5xl mx-auto mt-20 sm:mt-24 md:mt-28">
        <FadeIn y={20}>
          <Eyebrow as={blockTag}>{ads.sections.clients}</Eyebrow>
        </FadeIn>

        <ul className="mt-8 sm:mt-10 -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {AD_PROOF.map((proof, i) => {
            const text = ads.testimonials[proof.key]
            return (
              <FadeIn
                as="li"
                key={proof.key}
                delay={i * 0.1}
                y={28}
                lift
                className={`${CARD} snap-center shrink-0 w-[78vw] max-w-[340px] md:w-auto md:max-w-none flex flex-col overflow-hidden`}
              >
                <div className="relative aspect-[3/4] bg-[#0C0C0C]">
                  <Image
                    src={proof.image}
                    alt={text.caption}
                    fill
                    sizes="(min-width: 768px) 320px, 78vw"
                    className="object-contain object-top"
                  />
                </div>
                <div className="p-5 sm:p-6 border-t border-[#D7E2EA]/10">
                  <p className="text-[#D7E2EA]/45 font-light text-xs">{text.caption}</p>
                  <p
                    className="mt-3 text-[#D7E2EA] font-light leading-relaxed"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                  >
                    “{text.quote}”
                  </p>
                  <p className="mt-3 text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs">
                    {text.who}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </ul>
      </div>

      <FadeIn delay={0.1} y={20} className="mt-16 sm:mt-20 flex justify-center">
        <ContactButton href={WHATSAPP_URL} label={buttons.contact} />
      </FadeIn>
    </section>
  )
}
