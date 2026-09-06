export type SecurityCaseKey = 'marketplaces' | 'construction'

export type SecurityCase = {
  key: SecurityCaseKey
  number: string
  /**
   * Anonymized sample report served from /public/reports (e.g. '/reports/nexovenda.pdf').
   * Empty string = no link. Only publish a PDF whose domains are reserved names
   * (*.example, *.invalid) so no real third party is implicated.
   */
  reportUrl: string
}

/** Path of the security page under each locale: /en/security, /pt/security, /es/security. */
export const SECURITY_PATH = '/security'

/** Language-independent data. Texts, stats and labels live in the dictionaries. */
export const SECURITY_CASES: SecurityCase[] = [
  { key: 'marketplaces', number: '01', reportUrl: '' },
  { key: 'construction', number: '02', reportUrl: '' },
]
