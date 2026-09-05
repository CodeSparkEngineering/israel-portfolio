import type { StaticImageData } from 'next/image'
import prontogoCover from '@/assets/projects/prontogo-cover.jpg'
import prontogoVan from '@/assets/projects/prontogo-van.webp'
import prontogoCourier from '@/assets/projects/prontogo-courier.webp'
import sparklabCover from '@/assets/projects/sparklab-cover.jpg'
import sparklabDragonLamp from '@/assets/projects/sparklab-dragon-lamp.webp'
import sparklabDragon from '@/assets/projects/sparklab-dragon.webp'
import codesparkCover from '@/assets/projects/codespark-cover.jpg'
import codesparkSitesApps from '@/assets/projects/codespark-sites-apps.jpg'
import codesparkAi from '@/assets/projects/codespark-ai.jpg'

export type ProjectKey = 'prontogo' | 'sparklab' | 'codespark'

export type ProjectMedia = {
  key: ProjectKey
  number: string
  url: string
  /** Two stacked images in the narrow column. */
  col1: [StaticImageData, StaticImageData]
  /** Large cover image in the wide column. */
  col2: StaticImageData
}

/** Language-independent project data. Names, categories and alt texts live in the dictionaries. */
export const PROJECTS: ProjectMedia[] = [
  {
    key: 'prontogo',
    number: '01',
    url: 'https://prontogo.pt/',
    col1: [prontogoVan, prontogoCourier],
    col2: prontogoCover,
  },
  {
    key: 'sparklab',
    number: '02',
    url: 'https://www.sparklab3d.pt/',
    col1: [sparklabDragonLamp, sparklabDragon],
    col2: sparklabCover,
  },
  {
    key: 'codespark',
    number: '03',
    url: 'https://www.codesparkengineering.com/',
    col1: [codesparkSitesApps, codesparkAi],
    col2: codesparkCover,
  },
]
