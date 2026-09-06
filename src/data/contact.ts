/** Public contact channels shown on the site. */
export const WHATSAPP_URL = 'https://wa.me/message/D4VY7QSTGWJXO1'

/**
 * Profiles linked in the footer and listed as `sameAs` in the JSON-LD.
 * Fill in the full URL (https://github.com/...); an empty string hides that link.
 */
export const GITHUB_URL = ''
export const LINKEDIN_URL = ''

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: GITHUB_URL },
  { label: 'LinkedIn', href: LINKEDIN_URL },
].filter((link) => link.href !== '')
