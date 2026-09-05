import { NextResponse, type NextRequest } from 'next/server'
import { LOCALE_COOKIE, defaultLocale, isLocale, type Locale } from '@/i18n/config'

const ONE_YEAR = 60 * 60 * 24 * 365

/** Pick the best supported locale from an Accept-Language header. */
function negotiate(header: string | null): Locale {
  if (!header) return defaultLocale
  const candidates = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=')
      return { tag: tag.toLowerCase(), q: q ? Number.parseFloat(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { tag } of candidates) {
    const base = tag.split('-')[0]
    if (isLocale(base)) return base
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1] ?? ''

  // Already localized: let it through and remember the choice.
  if (isLocale(first)) {
    const response = NextResponse.next()
    if (request.cookies.get(LOCALE_COOKIE)?.value !== first) {
      response.cookies.set(LOCALE_COOKIE, first, { path: '/', maxAge: ONE_YEAR, sameSite: 'lax' })
    }
    return response
  }

  // Not localized: cookie first, then the browser language, then the default.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value
  const locale = isLocale(saved) ? saved : negotiate(request.headers.get('accept-language'))

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (icon.svg, images...).
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
