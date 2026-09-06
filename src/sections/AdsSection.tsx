import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import ContactButton from '@/components/ContactButton'
import { WHATSAPP_URL } from '@/data/contact'
import { AD_PROOF, AD_SHOTS } from '@/data/ads'
import type { Dictionary } from '@/i18n/get-dictionary'

type AdsSectionProps = {
  dict: Dictionary
  /** h1 when the section is the page itself (/ads), h2 inside another page. */
  headingTag?: 'h1' | 'h2'
}

/**
 * Real results of an authorized Google Ads campaign (own brand SparkLab), shown as
 * headline metrics plus the cropped dashboard screenshots. Numbers and captions come
 * from the dictionaries.
 */
export default function AdsSection({ dict, headingTag = 'h2' }: AdsSectionProps) {
  const { ads, buttons } = dict

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

      <div className="max-w-5xl mx-auto mt-4 text-center">
        <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs sm:text-sm">
          {ads.period}
        </span>
      </div>

      {/* headline metrics */}
      <dl className="max-w-5xl mx-auto mt-12 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {ads.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col-reverse rounded-3xl border border-[#D7E2EA]/15 px-5 py-6 sm:px-6 sm:py-7 text-center"
          >
            <dt className="mt-2 text-[#D7E2EA]/60 font-light uppercase tracking-widest text-[0.65rem] sm:text-xs">
              {stat.label}
            </dt>
            <dd
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* efficiency highlights */}
      <ul className="max-w-5xl mx-auto mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
        {ads.highlights.map((item) => (
          <li
            key={item}
            className="rounded-full border border-[#D7E2EA]/20 px-4 py-2 text-[#D7E2EA]/85 text-xs sm:text-sm font-medium"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* dashboard screenshots */}
      <div className="max-w-5xl mx-auto mt-14 sm:mt-16 md:mt-20 flex flex-col gap-10 sm:gap-14">
        {AD_SHOTS.map((shot, i) => (
          <FadeIn key={shot.key} delay={Math.min(i * 0.08, 0.24)} y={30}>
            <figure>
              <div className="overflow-hidden rounded-3xl border border-[#D7E2EA]/15">
                <Image
                  src={shot.image}
                  alt={ads.shots[shot.key]}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-3 text-[#D7E2EA]/60 font-light text-center text-xs sm:text-sm">
                {ads.shots[shot.key]}
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>

      <p className="mt-8 sm:mt-10 text-center text-[#D7E2EA]/40 font-light uppercase tracking-widest text-xs">
        {ads.note}
      </p>

      {/* anonymized client testimonials (found via Google) */}
      <div className="max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-24">
        <h2 className="text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-xs sm:text-sm text-center">
          {ads.testimonials.heading}
        </h2>
        <ul className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-4 sm:gap-6">
          {ads.testimonials.items.map((item) => (
            <FadeIn as="li" key={item.quote} y={24} className="rounded-3xl border border-[#D7E2EA]/15 p-6 sm:p-8">
              <p
                className="text-[#D7E2EA] font-light leading-relaxed"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
              >
                “{item.quote}”
              </p>
              <p className="mt-4 text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs">
                {item.who}
              </p>
            </FadeIn>
          ))}
        </ul>

        {/* the real (redacted) WhatsApp chats behind the quotes */}
        <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
          {AD_PROOF.map((proof) => (
            <FadeIn key={proof.key} y={24} className="w-full max-w-[340px]">
              <figure>
                <div className="overflow-hidden rounded-3xl border border-[#D7E2EA]/15">
                  <Image
                    src={proof.image}
                    alt={ads.proof[proof.key]}
                    sizes="(min-width: 640px) 340px, 100vw"
                    className="w-full h-auto"
                  />
                </div>
                <figcaption className="mt-3 text-[#D7E2EA]/50 font-light text-center text-xs sm:text-sm">
                  {ads.proof[proof.key]}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={0.1} y={20} className="mt-12 sm:mt-14 flex justify-center">
        <ContactButton href={WHATSAPP_URL} label={buttons.contact} />
      </FadeIn>
    </section>
  )
}
