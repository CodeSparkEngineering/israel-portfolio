import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { isLocale, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { PERSON_SHORT_NAME } from '@/seo/site'

export const alt = 'Israel Vieira — software developer, engineering 3D modeler and Google Ads manager'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = { params: Promise<{ locale: string }> }

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params
  const dict = getDictionary(isLocale(locale) ? locale : 'en')

  const root = process.cwd()
  const [black, medium, portrait] = await Promise.all([
    readFile(join(root, 'src/assets/fonts/Kanit-Black.ttf')),
    readFile(join(root, 'src/assets/fonts/Kanit-Medium.ttf')),
    readFile(join(root, 'src/assets/portrait.png')),
  ])
  const portraitSrc = `data:image/png;base64,${portrait.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0C0C0C',
          backgroundImage:
            'radial-gradient(circle at 78% 60%, rgba(182,0,168,0.35) 0%, rgba(182,0,168,0) 55%)',
          fontFamily: 'Kanit',
          color: '#F4F7FA',
          position: 'relative',
        }}
      >
        {/* text column */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '64px 0 64px 72px',
            width: 720,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: '#D7E2EA',
              opacity: 0.7,
            }}
          >
            {dict.hero.title.toUpperCase()}
          </div>
          <div
            style={{
              marginTop: 14,
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.95,
              textTransform: 'uppercase',
              letterSpacing: -2,
              color: '#FFFFFF',
            }}
          >
            {PERSON_SHORT_NAME}
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.25,
              color: '#FF7A1A',
            }}
          >
            {dict.meta.ogTagline}
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 22,
              fontWeight: 500,
              lineHeight: 1.35,
              color: '#D7E2EA',
              opacity: 0.8,
              maxWidth: 620,
            }}
          >
            {dict.meta.jobTitle}
          </div>
        </div>

        {/* portrait, bottom-right, slightly cropped like the hero */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={portraitSrc}
          alt=""
          width={520}
          height={650}
          style={{ position: 'absolute', right: 40, bottom: -60, objectFit: 'contain' }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Kanit', data: black, weight: 900, style: 'normal' },
        { name: 'Kanit', data: medium, weight: 500, style: 'normal' },
      ],
    },
  )
}
