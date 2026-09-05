# Israel — 3D Modeler & Software Developer (portfólio)

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion.
Tema escuro `#0C0C0C`, fonte Kanit (via `next/font`), cinco seções: Hero, Marquee, About, Services, Projects.
Três idiomas: inglês (`/en`), português (`/pt`) e espanhol (`/es`).

## Desenvolvimento

Precisa de Node.js 20+ (https://nodejs.org).

```bash
npm install
npm run dev      # http://localhost:3000  (redireciona para /en, /pt ou /es)
npm run lint     # ESLint (regras do Next)
npm run build    # typecheck + build de produção em .next/
npm run start    # serve a build de produção
```

## Deploy

O projeto roda sem configuração na Vercel:

```bash
npx vercel          # preview
npx vercel --prod   # produção
```

Opcional: defina `NEXT_PUBLIC_SITE_URL` (ex.: `https://seudominio.com`) para as
tags canônicas e `hreflang` usarem o domínio final. Na Vercel isso já é inferido.

## Idiomas

- Cada idioma tem a própria URL (`/en`, `/pt`, `/es`), com `hreflang` e Open Graph por idioma.
- `src/proxy.ts` redireciona `/` para o idioma salvo no cookie `NEXT_LOCALE` ou,
  na primeira visita, para o idioma do navegador (`Accept-Language`). Fallback: inglês.
- Os textos ficam em `src/i18n/dictionaries/{en,pt,es}.ts`. O arquivo `en.ts` define o
  tipo `Dictionary`; os outros dois precisam ter exatamente as mesmas chaves.
- `hero.titleScale` em cada dicionário ajusta o tamanho do título do hero para o texto
  traduzido ocupar a mesma largura em uma linha.

## SEO e AEO

- Títulos, descrições e palavras-chave por idioma em `src/i18n/dictionaries/*` (`meta`).
- Dados estruturados schema.org em `src/seo/json-ld.ts`: Person (skills, badges, serviços),
  WebSite, ProfilePage e FAQPage, injetados na página.
- Seção FAQ (`src/sections/FaqSection.tsx`) com respostas no HTML, pensada para motores
  de resposta (Google AI, ChatGPT, Perplexity).
- Badges do Google Skills em `src/data/credentials.ts`, exibidos no fim de Serviços.
- `src/app/sitemap.ts` e `src/app/robots.ts` geram `/sitemap.xml` e `/robots.txt`.
- Imagem de compartilhamento por idioma em `src/app/[locale]/opengraph-image.tsx`
  (renderizada com `next/og` e as fontes Kanit em `src/assets/fonts`, licença OFL).

## Estrutura

```
src/
├─ proxy.ts                   detecção de idioma e redirecionamento
├─ i18n/
│  ├─ config.ts               lista de idiomas, cookie, locales do Open Graph
│  ├─ get-dictionary.ts       getDictionary(locale)
│  └─ dictionaries/           en.ts, pt.ts, es.ts
├─ data/projects.ts           projetos (URL + imagens); textos vêm dos dicionários
├─ data/contact.ts            link do WhatsApp usado em todos os botões de contato
├─ assets/
│  ├─ portrait.png            retrato do hero (PNG com transparência)
│  └─ projects/               imagens dos projetos
├─ app/
│  ├─ [locale]/layout.tsx     <html lang>, fonte Kanit, metadata por idioma
│  ├─ [locale]/page.tsx       ordem das seções
│  ├─ [locale]/not-found.tsx  página 404
│  ├─ globals.css             Tailwind v4, reset global, .hero-heading
│  └─ icon.svg                favicon
├─ components/
│  ├─ FadeIn.tsx              wrapper whileInView                     [client]
│  ├─ Magnet.tsx              efeito magnético do cursor              [client]
│  ├─ AnimatedText.tsx        revelação caractere a caractere         [client]
│  ├─ LanguageSwitcher.tsx    links EN / PT / ES
│  ├─ ContactButton.tsx       pílula com gradiente
│  └─ LiveProjectButton.tsx   pílula outline que abre o site do projeto
└─ sections/
   ├─ HeroSection.tsx
   ├─ MarqueeSection.tsx      duas fileiras dirigidas pelo scroll     [client]
   ├─ AboutSection.tsx
   ├─ ServicesSection.tsx
   ├─ ProjectsSection.tsx     card stack sticky com scale             [client]
   └─ ContactSection.tsx      chamada para o WhatsApp + rodapé
```

`[client]` = arquivo começa com `'use client'` porque usa hooks ou Framer Motion.
Os demais são Server Components e viram HTML estático na build.

## Notas

- O retrato do hero foi gerado no Higgsfield a partir de uma foto. Variações
  alternativas ficam em `design/`.
- As capas dos projetos são mockups gerados no Higgsfield a partir dos próprios sites;
  as imagens menores são cópias locais das fotos dos sites (ProntoGo e SparkLab).
  Variações e originais ficam em `design/projects/`.
- As props 3D da seção About e os GIFs do marquee ainda são remotos
  (figma.site e motionsites.ai), então o primeiro carregamento precisa de internet.
- Os GIFs do marquee são servidos direto (`unoptimized`), porque GIF animado não
  ganha nada com o otimizador.
- `preview.html` é o bundle antigo da versão Vite e não é mais usado.
