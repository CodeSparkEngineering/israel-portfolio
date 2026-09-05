export const locales = ['en', 'pt', 'es'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'
export const LOCALE_COOKIE = 'NEXT_LOCALE'

export function isLocale(value: string | undefined | null): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value)
}

/** Open Graph locale tags. `pt` targets Portugal, where the live projects are. */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  pt: 'pt_PT',
  es: 'es_ES',
}
