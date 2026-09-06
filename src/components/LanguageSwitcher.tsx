import { Fragment } from 'react'
import Link from 'next/link'
import { locales, type Locale } from '@/i18n/config'

type LanguageSwitcherProps = {
  current: Locale
  label: string
  /** Path after the locale, so a subpage switches to the same subpage ('' = home). */
  path?: string
  className?: string
}

/** EN / PT / ES links. Each locale lives at its own URL, so this is plain navigation. */
export default function LanguageSwitcher({
  current,
  label,
  path = '',
  className = '',
}: LanguageSwitcherProps) {
  return (
    <div role="group" aria-label={label} className={`flex items-center gap-2 ${className}`}>
      {locales.map((locale, i) => (
        <Fragment key={locale}>
          {i > 0 && (
            <span aria-hidden className="opacity-40">
              /
            </span>
          )}
          <Link
            href={`/${locale}${path}`}
            hrefLang={locale}
            aria-current={locale === current ? 'page' : undefined}
            className={`inline-block py-3 -my-3 transition-opacity duration-200 hover:opacity-100 ${
              locale === current ? 'opacity-100' : 'opacity-50'
            }`}
          >
            {locale}
          </Link>
        </Fragment>
      ))}
    </div>
  )
}
