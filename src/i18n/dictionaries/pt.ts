import type { Dictionary } from './en'

const pt: Dictionary = {
  meta: {
    title: 'Israel Vieira | Software e Automação, Modelagem 3D de Engenharia e Google Ads',
    description:
      'Desenvolvedor de software e automação e modelador 3D de engenharia em Portugal: sistemas sob medida, automação de processos e agentes de IA, modelagem 3D de peças mecânicas para CAD e impressão 3D, gestão de Google Ads, Google Cloud e cibersegurança.',
    keywords: [
      'desenvolvedor de software',
      'software sob medida',
      'automação',
      'automação de processos',
      'agentes de IA',
      'modelagem 3D de engenharia',
      'modelagem 3D de peças mecânicas',
      'CAD',
      'impressão 3D',
      'gestão de Google Ads',
      'Google Cloud',
      'GCP',
      'cibersegurança',
      'Portugal',
    ],
    jobTitle: 'Desenvolvedor de Software e Automação, Modelador 3D de Engenharia e Gestor de Google Ads',
    ogTagline: 'Software · Automação · 3D de Engenharia · Google Ads · Cloud e Segurança',
  },
  nav: [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#services' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ],
  language: { label: 'Idioma' },
  hero: {
    title: 'Olá, sou israel',
    titleScale: 0.8,
    tagline:
      'desenvolvedor de software e automação, modelagem 3d de engenharia, google ads, google cloud e cibersegurança',
    portraitAlt: 'Israel Vieira, desenvolvedor de software e modelador 3D de engenharia',
  },
  buttons: {
    contact: 'Fale comigo',
    live: 'Ver projeto',
  },
  about: {
    title: 'Sobre mim',
    text: 'Sou o Israel, desenvolvedor de software e modelador 3D de peças de engenharia, em Portugal. Crio sistemas sob medida, automações e agentes de IA; modelo peças mecânicas e protótipos funcionais para CAD e impressão 3D; e faço gestão de campanhas no Google Ads. Tenho formação em Google Cloud (GCP) e cibersegurança, com badges do Google Skills em engenharia cloud e redes seguras. Vamos construir algo incrível juntos!',
  },
  services: {
    title: 'Serviços',
    items: [
      {
        number: '01',
        name: 'Desenvolvimento de Software',
        description:
          'Sistemas web, dashboards, ferramentas internas e APIs construídos em torno do seu processo, com código limpo e 100% seu.',
      },
      {
        number: '02',
        name: 'Automação e Agentes de IA',
        description:
          'Scripts, bots, integrações e agentes de IA que eliminam trabalho repetitivo: fluxos de dados, relatórios e as suas ferramentas conversando entre si.',
      },
      {
        number: '03',
        name: 'Modelagem 3D de Engenharia',
        description:
          'Peças mecânicas, caixas, suportes e protótipos funcionais modelados com tolerâncias reais, prontos para CAD, impressão 3D e fabricação.',
      },
      {
        number: '04',
        name: 'Render Técnico e Animação',
        description:
          'Renders fotorrealistas, vistas explodidas e animações de montagem que explicam um produto antes de ele existir.',
      },
      {
        number: '05',
        name: 'Desenvolvimento Web',
        description:
          'Sites e landing pages rápidos e modernos, com atenção a performance, design e conversão.',
      },
      {
        number: '06',
        name: 'Gestão de Google Ads',
        description:
          'Configuração e gestão de campanhas no Google Ads: estratégia de palavras-chave, rastreamento de conversões e otimização contínua para trazer leads qualificados.',
      },
      {
        number: '07',
        name: 'Cloud e Cibersegurança',
        description:
          'Implantação no Google Cloud (GCP), redes seguras, controle de acesso, backups e revisão de segurança dos seus sistemas.',
      },
    ],
    links: {
      ads: 'Ver resultados de campanhas',
      security: 'Ver exemplos de avaliações de segurança',
    },
  },
  credentials: {
    title: 'Formação e badges Google Cloud',
    intro: 'Badges práticos conquistados no Google Skills, a plataforma oficial de treinamento do Google Cloud.',
    link: 'Ver o perfil completo no Google Skills',
  },
  projects: {
    title: 'Projetos',
    items: {
      prontogo: {
        category: 'Cliente · Site de logística',
        name: 'ProntoGo',
        alt: 'Site da ProntoGo, entregas expressas e logística em Aveiro, Portugal',
      },
      sparklab: {
        category: 'Marca própria · Loja de impressão 3D',
        name: 'SparkLab',
        alt: 'Site da SparkLab, impressão 3D sob encomenda em Portugal',
      },
      codespark: {
        category: 'Empresa própria · Software house',
        name: 'CodeSpark',
        alt: 'Site da CodeSpark, sites, aplicativos e agentes de IA sob medida',
      },
    },
  },
  security: {
    title: 'Segurança',
    intro:
      'Avaliações externas de segurança autorizadas em plataformas SaaS em produção: reconhecimento, mapeamento da superfície de ataque e análise de vulnerabilidades, sem credenciais e sem ações destrutivas. Cada uma termina num relatório com achados por severidade, correções priorizadas e roadmap das próximas fases.',
    note: 'Nomes, domínios e identificadores foram anonimizados.',
    meta: {
      title: 'Avaliações de segurança | Israel Vieira',
      description:
        'Estudos de caso anonimizados de avaliações externas de segurança autorizadas em plataformas SaaS: mapeamento da superfície de ataque, controle de acesso, OAuth2, higiene de e-mail e DNS, com achados por severidade e correções priorizadas.',
    },
    back: 'Voltar aos serviços',
    labels: {
      tested: 'O que foi testado',
      safe: 'Confirmado seguro',
      delivered: 'Entrega',
      report: 'Relatório de exemplo (PDF)',
    },
    cases: {
      marketplaces: {
        category: 'Cliente · Avaliação externa · Brasil',
        name: 'SaaS de vendas em marketplaces',
        summary:
          'Plataforma web com dashboard do cliente, API .NET, helpdesk self-hosted, automação e cobrança via Stripe, atrás do Cloudflare.',
        severity: '1 alto (só autenticado) · 8 baixos · 4 informativos',
        stats: [
          { value: '6', label: 'subdomínios' },
          { value: '91', label: 'endpoints de API mapeados' },
          { value: '13', label: 'achados' },
          { value: '0', label: 'críticos' },
        ],
        tested: [
          'Fingerprint de HTTP, DNS e WAF e enumeração de subdomínios',
          'Superfície da API mapeada a partir da especificação OpenAPI pública',
          'Controle de acesso em todos os endpoints GET, com e sem IDs válidos',
          'CORS, CVEs conhecidas na versão do helpdesk, DNS pendente e subdomain takeover',
          'Varredura automatizada com 11.204 templates do nuclei',
        ],
        safe: [
          'Sem IDOR não autenticado: dados de clientes, cobrança e pedidos protegidos',
          'Nenhum segredo vazado no código-fonte',
          'CORS não reflete origens maliciosas',
          'WAF ativo e IP de origem oculto',
        ],
        delivered:
          'Relatório de 6 páginas com uma SQL injection conhecida no helpdesk sinalizada para verificação urgente, 8 correções de hardening (DMARC, HSTS, headers, Swagger, DNS pendente) e roadmap em 5 fases.',
      },
      construction: {
        category: 'Cliente · Avaliação externa · Brasil',
        name: 'SaaS de gestão de obras com agente de IA',
        summary:
          'App Next.js, API Fastify, backend do agente de IA e servidor Model Context Protocol com 148 ferramentas atrás de OAuth2.',
        severity: '0 críticos · 0 altos · 1 médio · 2 baixos · 3 informativos',
        stats: [
          { value: '5', label: 'subdomínios' },
          { value: '148', label: 'ferramentas MCP' },
          { value: '6', label: 'achados' },
          { value: '0', label: 'críticos ou altos' },
        ],
        tested: [
          'Descoberta de rotas e mineração dos bundles JavaScript em busca de rotas e segredos',
          'Controle de acesso não autenticado em todos os endpoints de recurso',
          'Fluxo OAuth2 do servidor MCP: redirect_uri, PKCE e registro dinâmico de clientes',
          'Tratamento de erros, enumeração de usuários e proteção contra força bruta',
          'Higiene de e-mail e DNS: SPF, DKIM e DMARC',
        ],
        safe: [
          'Todos os endpoints de recurso exigem autenticação',
          'Allowlist de CORS e de redirect_uri do OAuth aplicadas',
          'CSP restritiva, X-Frame-Options e HSTS preload no app',
          'Rate limiting no login, sem segredos nos bundles do frontend, TLS 1.2 e 1.3',
        ],
        delivered:
          'Relatório de 6 páginas com correção de DMARC e SPF para impedir spoofing de e-mail, hardening do PKCE e roadmap cobrindo IDOR multi-tenant, autorização por ferramenta no MCP e injeção de prompt no agente de IA.',
      },
    },
  },
  ads: {
    title: 'Google Ads',
    intro:
      'Campanha real de Google Ads que eu configuro e faço a gestão para a SparkLab, a minha marca de impressão 3D em Portugal: estratégia de palavras-chave, anúncios, segmentação e otimização contínua para trazer pedidos de orçamento com baixo custo por lead.',
    period: 'Últimos 30 dias',
    note: 'Capturas reais da conta; dados pessoais removidos.',
    back: 'Voltar aos serviços',
    meta: {
      title: 'Resultados de Google Ads | Israel Vieira',
      description:
        'Resultados reais de uma campanha de Google Ads gerida por Israel Vieira para a marca SparkLab: investimento, impressões, cliques, conversões e custo por lead, com capturas do painel.',
    },
    stats: [
      { value: '€62', label: 'Investido' },
      { value: '12,7 mil', label: 'Impressões' },
      { value: '267', label: 'Cliques' },
      { value: '30', label: 'Conversões' },
    ],
    highlights: [
      'CPC médio de €0,23',
      'Custo por conversão de €2,08',
      'Taxa de conversão de 11%',
    ],
    shots: {
      overview: 'Visão geral: investimento, impressões, cliques e conversões da campanha.',
      conversions: 'Conversões: 22 pedidos de orçamento por WhatsApp e 8 pelo site.',
      impressions: 'Impressões e alcance diário ao longo do período.',
      searchTerms: 'Termos de busca que trouxeram cliques e o anúncio exibido.',
      locationBudget: 'Segmentação por Portugal e orçamento diário controlado.',
    },
    sections: {
      metrics: 'Resultados',
      dashboard: 'Painel da campanha',
      clients: 'Como os clientes nos encontram',
    },
    tabs: {
      overview: 'Visão geral',
      conversions: 'Conversões',
      impressions: 'Impressões',
      searchTerms: 'Termos de busca',
      locationBudget: 'Segmentação e orçamento',
    },
    tabsLabel: 'Capturas do painel da campanha',
    testimonials: {
      google: {
        quote: 'Pelo Google, estava em primeiro lugar.',
        who: 'Cliente · Portugal',
        caption: 'Conversa real: o cliente respondeu que nos encontrou pelo Google, em primeiro lugar.',
      },
      found: {
        quote: 'Encontrei a vossa empresa pelo Google.',
        who: 'Cliente · Portugal',
        caption: 'Conversa real: outro cliente respondeu que chegou pelo Google.',
      },
      ai: {
        quote: 'Andava à procura de uma empresa como a vossa e foi a que me foi recomendada pelo ChatGPT.',
        who: 'Cliente · Portugal',
        caption: 'Conversa real: este cliente chegou por recomendação do ChatGPT.',
      },
    },
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Quais serviços o Israel oferece?',
        a: 'Desenvolvimento de software sob medida (sistemas web, dashboards, APIs), automação e agentes de IA, modelagem 3D de peças de engenharia para CAD e impressão 3D, render técnico, desenvolvimento web, gestão de campanhas no Google Ads e implantações no Google Cloud com foco em segurança.',
      },
      {
        q: 'Você modela peças de engenharia para impressão 3D e CAD?',
        a: 'Sim. Modelo peças mecânicas, caixas, suportes, gabaritos e protótipos funcionais com dimensões e tolerâncias reais, entregues em STEP, STL ou arquivo CAD nativo, prontos para impressão 3D, CNC ou injeção. O foco é em peças técnicas, não em personagens.',
      },
      {
        q: 'Que tipo de software você desenvolve?',
        a: 'Sistemas web e ferramentas internas construídos em torno do seu processo: dashboards, sistemas de gestão, integrações e APIs, além de automações e agentes de IA que tiram o trabalho manual da frente. Stack habitual: Next.js, Node.js, Python, Supabase e Google Cloud.',
      },
      {
        q: 'O que você consegue automatizar?',
        a: 'Processos repetitivos: entrada de dados, relatórios, sincronização de planilhas, avisos por WhatsApp e e-mail, integrações entre CRM, ERP e e-commerce, coleta de dados na web e agentes de IA que atendem clientes ou classificam pedidos. Ferramentas: Python, Node.js, n8n, Zapier e APIs.',
      },
      {
        q: 'Você gerencia campanhas de Google Ads?',
        a: 'Sim. Configuro e gerencio campanhas de Google Ads de ponta a ponta: estratégia de palavras-chave, textos dos anúncios, rastreamento de conversões e otimização contínua para trazer leads qualificados com menor custo por lead.',
      },
      {
        q: 'Você tem experiência com Google Cloud e cibersegurança?',
        a: 'Sim. Tenho badges do Google Skills em Cloud Engineering, Build a Secure Google Cloud Network, Implementing Cloud Load Balancing, Set Up an App Dev Environment on Google Cloud e Introduction to Security in the World of AI, e aplico práticas de rede segura, IAM e backup nos sistemas que implanto. Também realizo avaliações externas de segurança autorizadas em aplicações web e APIs, entregues em relatório com achados por severidade e correções priorizadas.',
      },
      {
        q: 'Onde você está e como começamos?',
        a: 'Estou em Portugal e trabalho remotamente. Me manda uma mensagem no WhatsApp com uma breve descrição do projeto e eu respondo com os próximos passos.',
      },
    ],
  },
  contact: {
    title: 'Vamos conversar',
    text: 'Tem um projeto em mente? Me chama no WhatsApp que eu respondo rapidinho.',
    cta: 'Chamar no WhatsApp',
  },
  footer: {
    line: 'Israel Vieira · Desenvolvedor de Software e Automação, Modelador 3D de Engenharia e Gestor de Google Ads',
  },
}

export default pt
