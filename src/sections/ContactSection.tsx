import FadeIn from '@/components/FadeIn'
import ContactButton from '@/components/ContactButton'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { SOCIAL_LINKS, WHATSAPP_URL } from '@/data/contact'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'

type ContactSectionProps = {
  locale: Locale
  dict: Dictionary
  /** Path the footer language switcher should keep (subpages), '' for the home. */
  langPath?: string
}

export default function ContactSection({ locale, dict, langPath = '' }: ContactSectionProps) {
  const { contact, footer, language } = dict
  const year = new Date().getFullYear()

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 pt-24 sm:pt-32 md:pt-40 pb-8 md:pb-10 text-center"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading w-fit mx-auto font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {contact.title}
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.15}
        y={30}
        className="text-[#D7E2EA] font-light leading-relaxed max-w-[560px] mx-auto mt-8 sm:mt-10"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
      >
        {contact.text}
      </FadeIn>

      <FadeIn delay={0.3} y={20} className="mt-10 sm:mt-12 flex justify-center">
        <ContactButton href={WHATSAPP_URL} label={contact.cta} />
      </FadeIn>

      <footer className="mt-24 sm:mt-32 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D7E2EA]/15 pt-6 text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs">
        <span>
          © {year} {footer.line}
        </span>
        <div className="flex items-center gap-5 sm:gap-6">
          {/* GitHub / LinkedIn: set the URLs in src/data/contact.ts; empty ones are not rendered */}
          {SOCIAL_LINKS.length > 0 && (
            <ul className="flex items-center gap-5">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-3 -my-3 font-medium text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <LanguageSwitcher
            current={locale}
            label={language.label}
            path={langPath}
            className="font-medium"
          />
        </div>
      </footer>
    </section>
  )
}
