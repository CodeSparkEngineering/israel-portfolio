import FadeIn from '@/components/FadeIn'
import { SECURITY_CASES } from '@/data/security'
import type { Dictionary } from '@/i18n/get-dictionary'

type SecuritySectionProps = {
  dict: Dictionary
  /** h1 when the section is the page itself (/security), h2 inside another page. */
  headingTag?: 'h1' | 'h2'
}

type ListProps = { title: string; items: string[]; accent: string }

/** Titled bullet list; the bullet color tells "tested" apart from "confirmed secure". */
function List({ title, items, accent }: ListProps) {
  return (
    <div>
      <h4 className="text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-xs sm:text-sm">
        {title}
      </h4>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-[#D7E2EA]/85 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}
          >
            <span
              aria-hidden
              className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: accent }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Anonymized case studies of authorized external security assessments. Text only:
 * no images, no extra JavaScript. Numbers and texts come from the dictionaries.
 */
export default function SecuritySection({ dict, headingTag = 'h2' }: SecuritySectionProps) {
  const { security } = dict

  return (
    <section
      id="security"
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
        {security.title}
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.1}
        y={30}
        className="text-[#D7E2EA]/80 font-light text-center leading-relaxed max-w-[680px] mx-auto mt-8 sm:mt-10"
        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
      >
        {security.intro}
      </FadeIn>

      <div className="max-w-6xl mx-auto mt-14 sm:mt-16 md:mt-20 flex flex-col gap-6 sm:gap-8">
        {SECURITY_CASES.map((item, i) => {
          const text = security.cases[item.key]

          return (
            <FadeIn key={item.key} delay={Math.min(i * 0.1, 0.2)} y={30}>
              <article className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#D7E2EA]/30 p-6 sm:p-8 md:p-12">
                {/* header, same anatomy as a project card */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                  <span
                    className="font-black leading-none text-[#D7E2EA] min-w-[1.3em]"
                    style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  >
                    {item.number}
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

                <p
                  className="mt-6 text-[#D7E2EA]/80 font-light leading-relaxed max-w-3xl"
                  style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
                >
                  {text.summary}
                </p>

                {/* key numbers */}
                <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {text.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse rounded-3xl border border-[#D7E2EA]/15 px-5 py-4 sm:px-6 sm:py-5"
                    >
                      <dt className="mt-2 text-[#D7E2EA]/60 font-light uppercase tracking-widest text-[0.65rem] sm:text-xs">
                        {stat.label}
                      </dt>
                      <dd
                        className="font-black leading-none text-[#D7E2EA]"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                      >
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm">
                  {text.severity}
                </p>

                <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-12">
                  <List title={security.labels.tested} items={text.tested} accent="rgba(215, 226, 234, 0.6)" />
                  <List title={security.labels.safe} items={text.safe} accent="#B600A8" />
                </div>

                <div className="mt-8 border-t border-[#D7E2EA]/15 pt-6">
                  <h4 className="text-[#D7E2EA]/60 font-medium uppercase tracking-widest text-xs sm:text-sm">
                    {security.labels.delivered}
                  </h4>
                  <p
                    className="mt-3 text-[#D7E2EA]/85 font-light leading-relaxed max-w-3xl"
                    style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)' }}
                  >
                    {text.delivered}
                  </p>
                  {item.reportUrl !== '' && (
                    <a
                      href={item.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 py-3 -mb-3 inline-block text-[#D7E2EA] font-medium uppercase tracking-widest text-xs sm:text-sm underline underline-offset-4 transition-opacity duration-200 hover:opacity-60"
                    >
                      {security.labels.report} →
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          )
        })}
      </div>

      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="mt-8 sm:mt-10 text-center text-[#D7E2EA]/40 font-light uppercase tracking-widest text-xs"
      >
        {security.note}
      </FadeIn>
    </section>
  )
}
