const en = {
  meta: {
    title: 'Israel Vieira | Software & Automation, Engineering 3D Modeling, Google Ads',
    description:
      'Software and automation developer and engineering 3D modeler in Portugal: custom systems, process automation and AI agents, 3D modeling of mechanical parts for CAD and 3D printing, Google Ads management, Google Cloud and cybersecurity.',
    keywords: [
      'software developer',
      'custom software',
      'automation',
      'process automation',
      'AI agents',
      'engineering 3D modeling',
      'mechanical parts 3D modeling',
      'CAD',
      '3D printing',
      'Google Ads management',
      'Google Cloud',
      'GCP',
      'cybersecurity',
      'Portugal',
    ],
    jobTitle: 'Software & Automation Developer, Engineering 3D Modeler & Google Ads Manager',
    ogTagline: 'Software · Automation · Engineering 3D · Google Ads · Cloud & Security',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  language: { label: 'Language' },
  hero: {
    title: "Hi, i'm israel",
    /**
     * Manual font-size multiplier so the single-line title fills the same
     * width in every language. 1 = the English reference width.
     */
    titleScale: 1,
    tagline:
      'software and automation developer, engineering 3d modeler, google ads manager, google cloud and cybersecurity',
    portraitAlt: 'Israel Vieira, software developer and engineering 3D modeler',
  },
  buttons: {
    contact: 'Contact Me',
    live: 'Live Project',
  },
  about: {
    title: 'About me',
    text: 'I’m Israel, a software developer and engineering 3D modeler based in Portugal. I build custom systems, automations and AI agents; model mechanical parts and functional prototypes for CAD and 3D printing; and manage Google Ads campaigns. Trained in Google Cloud (GCP) and cybersecurity, with Google Skills badges in cloud engineering and secure networks. Let’s build something incredible together!',
  },
  services: {
    title: 'Services',
    items: [
      {
        number: '01',
        name: 'Software Development',
        description:
          'Custom web systems, dashboards, internal tools and APIs built around your process, with clean code that is 100% yours.',
      },
      {
        number: '02',
        name: 'Automation & AI Agents',
        description:
          'Scripts, bots, integrations and AI agents that remove repetitive work: data flows, reports and your tools talking to each other.',
      },
      {
        number: '03',
        name: 'Engineering 3D Modeling',
        description:
          'Mechanical parts, enclosures, brackets and functional prototypes modeled with real tolerances, ready for CAD, 3D printing and manufacturing.',
      },
      {
        number: '04',
        name: 'Technical Rendering & Animation',
        description:
          'Photorealistic renders, exploded views and assembly animations that explain a product before it exists.',
      },
      {
        number: '05',
        name: 'Web Development',
        description:
          'Fast, modern websites and landing pages with attention to performance, design and conversion.',
      },
      {
        number: '06',
        name: 'Google Ads Management',
        description:
          'Campaign setup and management on Google Ads: keyword strategy, conversion tracking and ongoing optimization to bring qualified leads.',
      },
      {
        number: '07',
        name: 'Cloud & Cybersecurity',
        description:
          'Deployments on Google Cloud (GCP), secure networks, access control, backups and security reviews for your systems.',
      },
    ],
    /** Links shown under a service (by number); each opens that service's page. */
    links: {
      ads: 'See campaign results',
      security: 'See examples of security assessments',
    },
  },
  credentials: {
    title: 'Google Cloud training & badges',
    intro: 'Hands-on badges earned on Google Skills, the official Google Cloud training platform.',
    link: 'See the full Google Skills profile',
  },
  projects: {
    title: 'Projects',
    items: {
      prontogo: {
        category: 'Client · Logistics website',
        name: 'ProntoGo',
        alt: 'ProntoGo website, express delivery and logistics in Aveiro, Portugal',
      },
      sparklab: {
        category: 'Own brand · 3D printing store',
        name: 'SparkLab',
        alt: 'SparkLab website, 3D printing on demand in Portugal',
      },
      codespark: {
        category: 'Own company · Software house',
        name: 'CodeSpark',
        alt: 'CodeSpark website, custom websites, apps and AI agents',
      },
    },
  },
  security: {
    title: 'Security',
    intro:
      'Authorized external security assessments of live SaaS platforms: reconnaissance, attack-surface mapping and vulnerability analysis, without credentials and without destructive actions. Each one ends in a report with findings by severity, prioritized fixes and a roadmap for the next phases.',
    note: 'Names, domains and identifiers are anonymized.',
    meta: {
      title: 'Security assessments | Israel Vieira',
      description:
        'Anonymized case studies of authorized external security assessments of SaaS platforms: attack-surface mapping, access control, OAuth2, e-mail and DNS hygiene, with findings by severity and prioritized fixes.',
    },
    back: 'Back to services',
    labels: {
      tested: 'What was tested',
      safe: 'Confirmed secure',
      delivered: 'Delivered',
      report: 'Sample report (PDF)',
    },
    cases: {
      marketplaces: {
        category: 'Client · External assessment · Brazil',
        name: 'Marketplace sales SaaS',
        summary:
          'Web platform with customer dashboard, .NET API, self-hosted helpdesk, automation and Stripe billing, behind Cloudflare.',
        severity: '1 high (authenticated only) · 8 low · 4 informational',
        stats: [
          { value: '6', label: 'subdomains' },
          { value: '91', label: 'API endpoints mapped' },
          { value: '13', label: 'findings' },
          { value: '0', label: 'critical' },
        ],
        tested: [
          'HTTP, DNS and WAF fingerprinting and subdomain enumeration',
          'API surface mapped from the public OpenAPI specification',
          'Access control on every GET endpoint, with and without valid IDs',
          'CORS, known CVEs in the helpdesk version, dangling DNS and subdomain takeover',
          'Automated scan with 11,204 nuclei templates',
        ],
        safe: [
          'No unauthenticated IDOR: customer, billing and order data protected',
          'No secrets leaked in the source code',
          'CORS does not reflect malicious origins',
          'WAF active and origin IP hidden',
        ],
        delivered:
          '6-page report with a known SQL injection in the helpdesk flagged for urgent verification, 8 hardening fixes (DMARC, HSTS, headers, Swagger, dangling DNS) and a 5-phase roadmap.',
      },
      construction: {
        category: 'Client · External assessment · Brazil',
        name: 'Construction management SaaS with AI agent',
        summary:
          'Next.js app, Fastify API, AI agent backend and a Model Context Protocol server with 148 tools behind OAuth2.',
        severity: '0 critical · 0 high · 1 medium · 2 low · 3 informational',
        stats: [
          { value: '5', label: 'subdomains' },
          { value: '148', label: 'MCP tools' },
          { value: '6', label: 'findings' },
          { value: '0', label: 'critical or high' },
        ],
        tested: [
          'Route discovery and JavaScript bundle mining for routes and secrets',
          'Unauthenticated access control on every resource endpoint',
          'OAuth2 flow of the MCP server: redirect_uri, PKCE and dynamic client registration',
          'Error handling, user enumeration and brute-force protection',
          'E-mail and DNS hygiene: SPF, DKIM and DMARC',
        ],
        safe: [
          'Every resource endpoint requires authentication',
          'CORS allowlist and OAuth redirect_uri allowlist enforced',
          'Strict CSP, X-Frame-Options and HSTS preload on the app',
          'Login rate limiting, no secrets in the frontend bundles, TLS 1.2 and 1.3',
        ],
        delivered:
          '6-page report with a DMARC and SPF fix to stop e-mail spoofing, PKCE hardening, and a roadmap covering multi-tenant IDOR, per-tool MCP authorization and prompt injection in the AI agent.',
      },
    },
  },
  ads: {
    title: 'Google Ads',
    intro:
      'A real Google Ads campaign I set up and manage for SparkLab, my own 3D printing brand in Portugal: keyword strategy, ads, targeting and ongoing optimization to bring quote requests at a low cost per lead.',
    period: 'Last 30 days',
    note: 'Real screenshots from the account; personal data removed.',
    back: 'Back to services',
    meta: {
      title: 'Google Ads results | Israel Vieira',
      description:
        'Real results of a Google Ads campaign managed by Israel Vieira for the SparkLab brand: spend, impressions, clicks, conversions and cost per lead, with dashboard screenshots.',
    },
    stats: [
      { value: '€62', label: 'Invested' },
      { value: '12.7k', label: 'Impressions' },
      { value: '267', label: 'Clicks' },
      { value: '30', label: 'Conversions' },
    ],
    highlights: [
      '€0.23 average cost per click',
      '€2.08 cost per conversion',
      '11% conversion rate',
    ],
    shots: {
      overview: 'Overview: campaign spend, impressions, clicks and conversions.',
      conversions: 'Conversions: 22 WhatsApp quote requests and 8 from the website.',
      impressions: 'Impressions and daily reach over the period.',
      searchTerms: 'Search terms that brought clicks and the ad shown.',
      locationBudget: 'Targeting across Portugal and a controlled daily budget.',
    },
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'What services does Israel offer?',
        a: 'Custom software development (web systems, dashboards, APIs), automation and AI agents, 3D modeling of engineering parts for CAD and 3D printing, technical rendering, web development, Google Ads campaign management, and Google Cloud deployments with a security focus.',
      },
      {
        q: 'Do you model engineering parts for 3D printing and CAD?',
        a: 'Yes. I model mechanical parts, enclosures, brackets, fixtures and functional prototypes with real dimensions and tolerances, delivered as STEP, STL or native CAD files, ready for 3D printing, CNC or injection molding. The focus is technical parts, not characters.',
      },
      {
        q: 'What kind of software do you build?',
        a: 'Web systems and internal tools built around your process: dashboards, management systems, integrations and APIs, plus automations and AI agents that remove manual work. Typical stack: Next.js, Node.js, Python, Supabase and Google Cloud.',
      },
      {
        q: 'What can you automate?',
        a: 'Repetitive processes: data entry, reports, spreadsheet syncing, WhatsApp and e-mail notifications, integrations between CRM, ERP and e-commerce, web data extraction, and AI agents that answer customers or triage requests. Tools: Python, Node.js, n8n, Zapier and APIs.',
      },
      {
        q: 'Do you manage Google Ads campaigns?',
        a: 'Yes. I set up and manage Google Ads campaigns end to end: keyword strategy, ad copy, conversion tracking and ongoing optimization to bring qualified leads at a lower cost per lead.',
      },
      {
        q: 'Do you have Google Cloud and cybersecurity experience?',
        a: 'Yes. I hold Google Skills badges in Cloud Engineering, Build a Secure Google Cloud Network, Implementing Cloud Load Balancing, Set Up an App Dev Environment on Google Cloud and Introduction to Security in the World of AI, and I apply secure networking, IAM and backup practices to the systems I deploy. I also run authorized external security assessments of web applications and APIs, delivered as a report with findings by severity and prioritized fixes.',
      },
      {
        q: 'Where are you based and how do we start?',
        a: 'I’m based in Portugal and work remotely. Send me a message on WhatsApp with a short description of your project and I’ll reply with the next steps.',
      },
    ],
  },
  contact: {
    title: 'Let’s talk',
    text: 'Have a project in mind? Send me a message on WhatsApp and I’ll get back to you soon.',
    cta: 'Chat on WhatsApp',
  },
  footer: {
    line: 'Israel Vieira · Software & Automation Developer, Engineering 3D Modeler & Google Ads Manager',
  },
}

export type Dictionary = typeof en
export default en
