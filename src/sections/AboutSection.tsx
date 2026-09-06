import Image from 'next/image'
import FadeIn from '@/components/FadeIn'
import AnimatedText from '@/components/AnimatedText'
import ContactButton from '@/components/ContactButton'
import { WHATSAPP_URL } from '@/data/contact'
import type { Dictionary } from '@/i18n/get-dictionary'
import moon from '@/assets/props/moon.png'
import smiley from '@/assets/props/smiley.png'
import lego from '@/assets/props/lego.png'
import cursor from '@/assets/props/cursor.png'

type AboutSectionProps = { dict: Dictionary }

export default function AboutSection({ dict }: AboutSectionProps) {
  const { about, buttons } = dict

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* decorative 3D props */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <Image
          src={moon}
          alt=""
          sizes="(min-width: 768px) 210px, (min-width: 640px) 160px, 120px"
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <Image
          src={smiley}
          alt=""
          sizes="(min-width: 768px) 180px, (min-width: 640px) 140px, 100px"
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <Image
          src={lego}
          alt=""
          sizes="(min-width: 768px) 210px, (min-width: 640px) 160px, 120px"
          className="w-full h-auto"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <Image
          src={cursor}
          alt=""
          sizes="(min-width: 768px) 220px, (min-width: 640px) 170px, 130px"
          className="w-full h-auto"
        />
      </FadeIn>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {about.title}
          </FadeIn>

          <AnimatedText
            text={about.text}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <ContactButton href={WHATSAPP_URL} label={buttons.contact} />
      </div>
    </section>
  )
}
