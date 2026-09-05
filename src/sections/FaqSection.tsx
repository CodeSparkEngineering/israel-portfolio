import FadeIn from '@/components/FadeIn'
import type { Dictionary } from '@/i18n/get-dictionary'

type FaqSectionProps = { dict: Dictionary }

/**
 * Frequently asked questions. Native <details> keeps every answer in the HTML
 * (good for search and answer engines) with no JavaScript needed to open them.
 */
export default function FaqSection({ dict }: FaqSectionProps) {
  const { faq } = dict

  return (
    <section
      id="faq"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading w-fit mx-auto font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {faq.title}
      </FadeIn>

      <div className="max-w-3xl mx-auto border-y border-[#D7E2EA]/15 divide-y divide-[#D7E2EA]/15">
        {faq.items.map((item, i) => (
          <FadeIn key={item.q} delay={Math.min(i * 0.06, 0.3)} y={20}>
            <details className="group py-5 sm:py-6">
              <summary
                className="flex items-start justify-between gap-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[#D7E2EA] font-medium leading-snug"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
              >
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="shrink-0 text-2xl leading-none text-[#D7E2EA]/60 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p
                className="mt-4 text-[#D7E2EA]/70 font-light leading-relaxed max-w-2xl"
                style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
              >
                {item.a}
              </p>
            </details>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
