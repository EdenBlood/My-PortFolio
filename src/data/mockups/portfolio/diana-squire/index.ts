import MarketingIcon from '@/assets/mockups/portfolio/diana-squire/marketing.svg'
import BrandingIcon from '@/assets/mockups/portfolio/diana-squire/branding.svg'
import DigitalIcon from '@/assets/mockups/portfolio/diana-squire/digital-marketing.svg'

export type Service = {
  title: string
  description: string
  icon: any
  className?: string
}

export const services: Service[] = [
  {
    title: 'Marketing Digital',
    description:
      'Optimización de campañas en redes sociales y marketing de contenidos.',
    icon: MarketingIcon,
    className: 'fill-red-500'
  },
  {
    title: 'Gestión de Marca',
    description: 'Creación de identidad de marca y gestión de marcas.',
    icon: BrandingIcon,
    className: 'text-pink-500'
  },
  {
    title: 'Estrategias Digitales',
    description: 'Estrategias digitales para empresas y emprendedores.',
    icon: DigitalIcon,
    className: 'text-sky-500'
  }
]

export interface Experience {
  title: string
  slug: string
  company: string
  location: string
  date: string
  description: string
  skills: string[]
  learnings: string[]
  img: string
  descriptionHTML: string
  id: number
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Marketing Strategist & Project Lead (Freelance / In-house híbrido)',
    slug: 'marketing-strategist-project-lead',
    company: 'Nexo Creativo (clientes: startups y pymes)',
    location: 'Remoto / Rosario',
    date: 'Sep 2023 – Presente',
    descriptionHTML: `<p>Rol híbrido como estratega y líder de proyectos para startups y pymes. Realicé auditorías de marca y canales, diseñé estrategias anuales y lideré lanzamientos de producto. Coordiné equipos freelance y monté dashboards para seguimiento de KPIs.</p>

  <p><strong>Responsabilidades:</strong></p>
  <ul>
    <li>Auditoría de marketing y definición de posicionamiento de marca.</li>
    <li>Planificación y ejecución de lanzamientos y campañas integradas.</li>
    <li>Gestión de equipos remotos y briefing creativo para design, copy y video.</li>
    <li>Implementación de dashboards en Notion y Data Studio para reporting semanal.</li>
  </ul>

  <p><strong>Impactos concretos:</strong></p>
  <ul>
    <li>Para un cliente SaaS: <strong>reducción de CAC 28%</strong> y <strong>+45% MQLs</strong> en 4 meses combinando inbound y ads.</li>
    <li>Para una pyme retail: reestructuración del funnel que generó <strong>+30% de ventas online</strong> en tres campañas.</li>
    <li>Capacitaciones a equipos comerciales sobre uso de datos y storytelling de producto.</li>
  </ul>

  <p>Mi enfoque es <strong>priorizar iniciativas por impacto</strong>, conectar estrategia de marca con acciones de performance y mantener procesos escalables sin perder la consistencia del mensaje.</p>
`,
    description: `Lidero proyectos integrales de marketing para startups y marcas medianas. Trabajo como estratega y gestor de ejecución. Mis responsabilidades incluyen: auditoría de marca y canal, diseño de estrategia anual, planificación de lanzamientos de producto, creación de brief para campañas de performance y coordinación de equipos freelance (copy, diseño, video). Implementé dashboards en Notion y Data Studio para seguimiento de KPIs y entregables.

  Impactos concretos: para un cliente SaaS reduje CAC un 28% y aumenté MQLs un 45% en 4 meses a través de combinación de inbound + ads; para una pyme retail rediseñé el funnel de producto y aumenté ventas online un 30% en tres campañas. También realicé entrenamientos internos para equipos comerciales sobre uso de data y storytelling de producto.`,
    skills: [
      'Estrategia de marketing',
      'Brand positioning',
      'Performance + Inbound integration',
      'Planificación de lanzamientos',
      'Dashboards y reporting (Data Studio, Notion)',
      'Gestión de equipos remotos',
      'Briefing creativo y gestión de freelances'
    ],
    learnings: [
      'Cómo articular estrategia de marca con acciones de performance.',
      'Priorizar iniciativas por impacto y costo/beneficio.',
      'Modelos simples de atribución para tomar decisiones rápidas.',
      'Liderazgo de proyectos cross-funcionales y negociación con stakeholders.',
      'Escalar procesos sin perder consistencia en la voz de marca.'
    ],
    img: 'https://images.pexels.com/photos/7222867/pexels-photo-7222867.jpeg'
  },

  {
    id: 2,
    title: 'Digital Marketing Specialist',
    slug: 'digital-marketing-specialist',
    company: 'Vela Brands',
    location: 'Remoto / Buenos Aires',
    date: 'Sep 2022 – Ago 2023',
    descriptionHTML: `<p>Rol enfocado en performance y optimización de campañas. Diseñé y ejecuté estrategias pagas en <strong>Meta y Google Ads</strong> para ecommerce y servicios. Monté funnels de conversión y coordiné pruebas A/B con foco en reducción de CAC.</p>

  <p><strong>Tareas clave:</strong></p>
  <ul>
    <li>Configuración y optimización de campañas en Meta y Google.</li>
    <li>Implementación de tracking con <strong>Google Tag Manager</strong> y migración a <strong>GA4</strong>.</li>
    <li>Construcción de reportes y pipelines de datos básicos para toma de decisiones.</li>
    <li>Segmentación y automatizaciones de email marketing (HubSpot).</li>
  </ul>

  <p><strong>Resultados medibles:</strong></p>
  <ul>
    <li>Reducción promedio del <strong>CAC 22%</strong> en 3 meses para clientes seleccionados.</li>
    <li>Aumento del <strong>ROAS</strong> de 1.6x a <strong>2.8x</strong> en campañas de adquisición optimizadas.</li>
    <li>Incremento de la tasa de conversión promedio de <strong>1.2% a 2.1%</strong> tras ajustes en landing pages y tests.</li>
  </ul>

  <p>Aprendí a traducir hipótesis de CRO en tests accionables y a priorizar optimizaciones que impacten el LTV y el coste por lead.</p>
`,
    description: `Rol centrado en performance y optimización. Diseñé y ejecuté campañas pagas en Meta y Google para 5 clientes de ecommerce y servicios. Monté funnels de conversión y pages A/B con foco en reducción de CAC. Implementé tracking con Google Tag Manager y migré reportes a GA4. Coordiné con equipo de producto para mejorar UX en landing pages y logré aumentar la tasa de conversión promedio de 1.2% a 2.1% en los clientes principales.

    Resultados medibles: reducción promedio del CAC en 22% en 3 meses; incremento del ROAS de campañas de adquisición del 1.6x al 2.8x en clientes seleccionados. Además gestioné envíos de email marketing segmentado con HubSpot y diseñé automatizaciones de lead nurturing.`,
    skills: [
      'Google Ads',
      'Meta Ads',
      'GA4 + Google Tag Manager',
      'CRO (A/B testing)',
      'Email marketing (HubSpot)',
      'SQL básico para reporting',
      'Excel / Google Sheets avanzada'
    ],
    learnings: [
      'Cómo establecer hipótesis accionables para tests de CRO.',
      'Medición de canales y atribución práctica en presupuestos pequeños.',
      'Diseño de reportes que combinan métricas de negocio y de canal.',
      'Optimización de campañas con foco en LTV y coste por lead.'
    ],
    img: 'https://images.pexels.com/photos/7964426/pexels-photo-7964426.jpeg'
  },
  {
    id: 3,
    title: 'Content & Social Media Coordinator',
    slug: 'content-social-media-coordinator',
    company: 'Agencia Lumen',
    location: 'Rosario, Argentina',
    date: 'Sep 2021 – Ago 2022',
    descriptionHTML: `<p>Primera posición profesional en una agencia boutique. Me encargué de la <strong>creación y publicación de contenido orgánico</strong> para <strong>8 cuentas</strong> (B2B y B2C). Diseñé calendarios editoriales mensuales alineados a objetivos comerciales y coordiné la ejecución en equipo.</p>

  <p><strong>Responsabilidades principales:</strong></p>
  <ul>
    <li>Planificación de contenido y calendarización.</li>
    <li>Diseño de piezas (carousels, posts, reels) y edición de copy.</li>
    <li>Coordinación de pequeñas sesiones fotográficas y briefing con creativos.</li>
    <li>Gestión del proceso de aprobaciones con clientes.</li>
  </ul>

  <p><strong>Logros y resultados:</strong></p>
  <ul>
    <li>Relanzamiento de Instagram para una pyme con <strong>+48% de alcance</strong> en 3 meses.</li>
    <li>Campaña estacional que aumentó la interacción en <strong>+62%</strong>.</li>
    <li>Reducción del tiempo de entrega en <strong>30%</strong> al estandarizar procesos.</li>
  </ul>

  <p>También desarrollé <strong>plantillas reutilizables en Figma</strong> y un <strong>kit de voz de marca</strong> para asegurar consistencia entre clientes.</p>
`,
    description: `Primera posición profesional en marketing dentro de una agencia boutique. Me encargué de la creación y publicación de contenido orgánico para 8 cuentas de clientes B2B y B2C. Diseñé calendarios editoriales mensuales basados en objetivos comerciales. Generé piezas para redes (carrousels, reels adaptados y posts), edité copy y coordiné sesiones fotográficas básicas. Implementé un proceso de aprobación con clientes y reduje tiempos de entrega en 30%.

Proyectos clave: relanzamiento de perfil de Instagram para una pyme de consumo con +48% de alcance en 3 meses; campaña estacional para una marca local que aumentó interacción en un 62%. Desarrollé plantillas reutilizables en Figma y un kit de voz de marca para alinear comunicación.`,
    skills: [
      'Gestión de redes (Instagram, Facebook)',
      'Copywriting corto',
      'Diseño de piezas en Figma',
      'Calendario editorial',
      'Community management',
      'Briefing fotográfico'
    ],
    learnings: [
      'Importancia de procesos reproducibles para escalar producción de contenido.',
      'Cómo traducir objetivos de negocio a indicadores de redes sociales.',
      'Comunicación efectiva con clientes no técnicos.',
      'Control de tiempos y entregables en agencia.'
    ],
    img: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg'
  }
]
