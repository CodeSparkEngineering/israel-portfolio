import type { StaticImageData } from 'next/image'
import overview from '@/assets/ads/ads-overview.webp'
import conversions from '@/assets/ads/ads-conversions.webp'
import impressions from '@/assets/ads/ads-impressions.webp'
import searchTerms from '@/assets/ads/ads-search-terms.webp'
import locationBudget from '@/assets/ads/ads-location-budget.webp'

export type AdShotKey =
  | 'overview'
  | 'conversions'
  | 'impressions'
  | 'searchTerms'
  | 'locationBudget'

export type AdShot = { key: AdShotKey; image: StaticImageData }

/** Path of the Google Ads results page under each locale: /en/ads, /pt/ads, /es/ads. */
export const ADS_PATH = '/ads'

/**
 * Real dashboard screenshots of the SparkLab (own brand) campaign, cropped to remove
 * the account header (e-mail and customer id). Captions live in the dictionaries.
 */
export const AD_SHOTS: AdShot[] = [
  { key: 'overview', image: overview },
  { key: 'conversions', image: conversions },
  { key: 'impressions', image: impressions },
  { key: 'searchTerms', image: searchTerms },
  { key: 'locationBudget', image: locationBudget },
]
