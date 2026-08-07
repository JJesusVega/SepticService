export type Language = 'en' | 'es'

export type NavItem = {
  label: string
  href: string
}

export type ServiceItem = {
  title: string
  description: string
  slug: string
  detailTitle: string
  detailDescription: string
  highlights: string[]
}

export type GalleryItem = {
  title: string
  caption: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type TipItem = {
  title: string
  description: string
}
export type AreaItem = {
    title: string
    description: string
}

export type SiteContent = {
  nav: NavItem[]
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
  }
  about: {
    title: string
    body: string[]
    highlight: string
  }
  services: ServiceItem[]
  gallery: GalleryItem[]
  contact: {
    title: string
    description: string
    phone: string
    email: string
    address: string
    formTitle: string
  }
  faqs: FaqItem[]
  tips: TipItem[]
  footer: {
    brand: string
    note: string
    hours: string
    payments: string[]
  }
  area: AreaItem[]
}

export const siteContent: Record<Language, SiteContent> = {
  en: {
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Contact', href: '#contact' },
      { label: 'FAQs', href: '#faqs' },
      { label: 'Tips', href: '#tips' },
      { label: 'Area', href: '#area' },
    ],
    hero: {
      eyebrow: 'Reliable septic solutions for homes and businesses',
      title: 'Clean, dependable service from Sanchez Septic Services',
      description:
        'We provide fast septic pumping, inspections, and maintenance with a professional team that values punctuality, transparency, and long-term care.',
      primaryCta: 'Request a service',
      secondaryCta: 'Explore our services',
    },
    about: {
      title: 'About our company',
      body: [
        'Sanchez Septic Services is a locally trusted partner for septic tank pumping, repairs, and preventative maintenance. We bring a calm, respectful approach to every visit and focus on solutions that protect your property and your peace of mind.',
        'Our growing service model is designed to support both residential clients and future commercial contracts with flexible care plans and clear communication.',
      ],
      highlight: 'Built for dependable care today and scalable contract partnerships tomorrow.',
    },
    services: [
      {
        title: 'Septic Tank Cleaning',
        description: 'Thorough cleaning and safe removal of sludge to keep your system flowing efficiently.',
        slug: 'septic-tank-cleaning',
        detailTitle: 'Commercial Septic Tank Scouring & Debris Removal',
        detailDescription:
          'Heavy daily water usage in commercial properties demands high-capacity waste management. Our commercial tank cleaning service removes compacted sludge and heavy debris using industrial-strength vacuum equipment, preventing costly operational downtime and facility disruptions.',
        highlights: ['Safe sludge removal', 'Inspection included', 'Ideal for homes and commercial properties', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Septic System Installation',
        description: 'Professional installation of new systems designed for long-lasting performance.',
        slug: 'septic-system-installation',
        detailTitle: 'New septic systems built for long-term confidence',
        detailDescription:
          'Our team plans and installs systems with careful sizing, site assessment, and durable materials to match the property needs.',
        highlights: ['Custom system planning', 'Professional installation', 'Built for long-term reliability', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Septic Tank Maintenance',
        description: 'Preventive care plans that support healthier systems and fewer costly repairs.',
        slug: 'septic-tank-maintenance',
        detailTitle: 'Preventive maintenance that protects your investment',
        detailDescription:
          'Regular checkups, monitoring, and scheduled care help owners avoid breakdowns and extend the life of their septic system.',
        highlights: ['Scheduled service visits', 'Cost-saving maintenance', 'Better system longevity', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Septic System Repair',
        description: 'Reliable repairs for leaks, damage, and operational issues affecting daily use.',
        slug: 'septic-system-repair',
        detailTitle: 'Responsive repairs for damaged or failing systems',
        detailDescription:
          'We diagnose and repair common failures quickly so your system can resume normal operation without unnecessary delays.',
        highlights: ['Fast diagnostics', 'Leak and damage repair', 'Restores healthy operation', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Septic Tank Pumping',
        description: 'Routine pumping services for homes, rentals, and commercial properties.',
        slug: 'septic-tank-pumping',
        detailTitle: 'Routine pumping for practical, dependable service',
        detailDescription:
          'Scheduled pumping removes excess waste safely and supports steady system performance for properties of all sizes.',
        highlights: ['Routine waste removal', 'Home and business support', 'Keeps systems healthier', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Grease Trap Cleaning',
        description: 'Deep cleaning services that help kitchens and commercial sites stay compliant and efficient.',
        slug: 'grease-trap-cleaning',
        detailTitle: 'Grease trap cleaning for cleaner, safer operations',
        detailDescription:
          'We remove grease buildup and residue so kitchens and commercial sites can run cleaner, safer, and with less downtime.',
        highlights: ['Removes heavy buildup', 'Supports compliance', 'Protects drains and flow', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Grease Trap Pumping',
        description: 'Scheduled pumping to reduce buildup, odors, and overflow risk.',
        slug: 'grease-trap-pumping',
        detailTitle: 'Scheduled grease trap pumping that prevents overflow',
        detailDescription:
          'Regular pumping helps reduce odors, backups, and costly service disruptions in busy food-service environments.',
        highlights: ['Prevents overflow', 'Reduces odors', 'Keeps systems efficient', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Air Pump Installation',
        description: 'Residential and commercial aeration solutions with dependable installations for efficient wastewater treatment.',
        slug: 'air-pump-installation',
        detailTitle: 'Residential and commercial air pump installation for efficient treatment',
        detailDescription:
          'Residential wastewater systems require reliable air compression for active aeration, and commercial aerobic treatment demands continuous heavy-duty airflow. We install high-performance pumps and compressors designed to optimize waste breakdown, reduce energy costs, and suppress odors.',
        highlights: [
          'Residential Wastewater Air Compressor Setup: Advanced residential treatment systems require reliable air compression for active aeration. We install low-maintenance compressors designed to optimize waste breakdown while keeping energy costs down.',
          'Commercial Aeration Pump Installation: Commercial aerobic treatment demands continuous, heavy-duty airflow. We supply and install high-output aerator pumps built for demanding commercial duty cycles, ensuring consistent biological breakdown and odor suppression.',
          'Efficient aeration',
          'Payment methods: Cash, Banking Transfer, Deposit, Cheque',
        ],
      },
      {
        title: 'Air Pump Repair',
        description: 'Fast repair support for air systems that are underperforming or failing.',
        slug: 'air-pump-repair',
        detailTitle: 'Repairs that restore air system performance quickly',
        detailDescription:
          'Our team evaluates airflow issues and repairs the system to bring it back to steady operation.',
        highlights: ['Fast troubleshooting', 'Restores flow', 'Minimizes downtime', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Air Compressor Installation',
        description: 'Professional installation services for air compressor setups that support your system.',
        slug: 'air-compressor-installation',
        detailTitle: 'Air compressor installation with dependable setup',
        detailDescription:
          'We install compressor equipment carefully so it supports your septic system reliably and safely.',
        highlights: ['Professional setup', 'Reliable operation', 'Built for long service life', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Air Compressor Repair',
        description: 'Skilled repair work to restore performance and reduce downtime.',
        slug: 'air-compressor-repair',
        detailTitle: 'Air compressor repair for stable performance',
        detailDescription:
          'We inspect common failure points and repair compressors so they can return to dependable service.',
        highlights: ['Restores function', 'Reduces downtime', 'Skilled support', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Septic System Drain-Out',
        description: 'Complete drain-out service for systems that require major clearing or preparation.',
        slug: 'septic-system-drain-out',
        detailTitle: 'Full drain-out service for major clearing needs',
        detailDescription:
          'This service is ideal when a system needs significant clearing, preparation, or a major reset before continued use.',
        highlights: ['Major clearing support', 'Prepares system for use', 'Thorough service', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
      {
        title: 'Emergency Septic Services',
        description: 'Rapid response help when urgent septic problems need immediate attention.',
        slug: 'emergency-septic-services',
        detailTitle: 'Emergency support for urgent septic concerns',
        detailDescription:
          'When issues escalate quickly, we provide fast response and clear guidance to restore safety and normal operation.',
        highlights: ['Rapid response', 'Urgent support', 'Peace of mind', 'Payment methods: Cash, Banking Transfer, Deposit, Cheque'],
      },
    ],
    gallery: [
      { title: 'Residential service', caption: 'Prompt response and careful handling for every home visit.' },
      { title: 'System inspection', caption: 'Clear reporting and practical recommendations for each property.' },
      { title: 'Contract-ready support', caption: 'A scalable experience that can grow into larger service agreements.' },
    ],
    contact: {
      title: 'Contact us',
      description: 'Reach out for a quote, a scheduled inspection, or service support.',
      phone: '(555) 014-2024',
      email: 'service@sanchezseptics.com',
      address: 'Serving the local community with reliable on-site care',
      formTitle: 'Start a conversation',
    },
    faqs: [
      {
        question: 'How often should a septic tank be pumped?',
        answer: 'Most systems benefit from pumping every 3 to 5 years, depending on household size and usage.',
      },
      {
        question: 'Do you offer emergency assistance?',
        answer: 'Yes. We can help with urgent service needs and provide guidance on the next best step.',
      },
      {
        question: 'Can you support business and contract clients?',
        answer: 'Absolutely. Our process is designed to grow into recurring service partnerships and structured agreements.',
      },
    ],
    tips: [
      { title: 'Watch water use', description: 'Reduce overload by spreading laundry and high-water tasks through the week.' },
      { title: 'Protect your drain field', description: 'Avoid parking or heavy equipment over the area to prevent soil compaction.' },
      { title: 'Schedule inspections', description: 'Regular checks help prevent costly repairs and unexpected downtime.' },
    ],
    area: [
      { title: 'Tyler', description: 'Serving the city with reliable septic care and quick response support.' },
      { title: 'Flint', description: 'Dependable service for residential and commercial septic needs.' },
      { title: 'Frankston', description: 'Local support for routine maintenance and urgent service calls.' },
      { title: 'Chandler', description: 'Flexible care for installations, repairs, and pumping services.' },
      { title: 'Lindale', description: 'Trusted service for homeowners and property managers alike.' },
      { title: 'Mineola', description: 'Prompt septic solutions for homes and small businesses.' },
      { title: 'Winona', description: 'Reliable assistance for inspections, cleaning, and emergency support.' },
      { title: 'Longview', description: 'Professional septic service for busy properties and neighborhoods.' },
      { title: 'Canton', description: 'Coverage for maintenance plans and dependable repairs.' },
      { title: 'Athens', description: 'Responsive service throughout the area for all septic needs.' },
      { title: 'Henderson', description: 'Reliable support for routine care and emergency response.' },
      { title: 'Overton', description: 'Dependable septic service for local homes and properties.' },
      { title: 'Kilgore', description: 'Prompt care for maintenance, pumping, and repairs.' },
      { title: 'Grand Saline', description: 'Responsive service for inspections and ongoing system care.' },
    ],
    footer: {
      brand: 'Sanchez Septic Services',
      note: 'Professional septic care with a clean, modern approach.',
      hours: 'Attention hours: Monday to Saturday, 7:00 AM to 6:00 PM',
      payments: ['Cash', 'Banking Transfer', 'Deposit', 'Cheque'],
    },
  },
  es: {
    nav: [
      { label: 'Inicio', href: '#home' },
      { label: 'Nosotros', href: '#about' },
      { label: 'Servicios', href: '#services' },
      { label: 'Galería', href: '#gallery' },
      { label: 'Contacto', href: '#contact' },
      { label: 'Preguntas', href: '#faqs' },
      { label: 'Consejos', href: '#tips' },
      { label: 'Cobertura', href: '#cobertura' },
    ],
    hero: {
      eyebrow: 'Soluciones sépticas confiables para hogares y negocios',
      title: 'Servicio limpio y confiable de Sanchez Septic Services',
      description:
        'Ofrecemos bombeo, inspecciones y mantenimiento séptico con un equipo profesional que valora la puntualidad, la transparencia y el cuidado a largo plazo.',
      primaryCta: 'Solicitar un servicio',
      secondaryCta: 'Ver nuestros servicios',
    },
    about: {
      title: 'Sobre nuestra empresa',
      body: [
        'Sanchez Septic Services es un aliado de confianza para el bombeo, las reparaciones y el mantenimiento preventivo de tanques sépticos. Traemos un enfoque sereno y respetuoso a cada visita y nos enfocamos en soluciones que protegen su propiedad y su tranquilidad.',
        'Nuestro modelo de servicio en crecimiento está diseñado para apoyar tanto a clientes residenciales como a futuros contratos comerciales con planes de cuidado flexibles y comunicación clara.',
      ],
      highlight: 'Diseñado para un cuidado confiable hoy y alianzas de contrato en el futuro.',
    },
    services: [
      {
        title: 'Limpieza de tanque séptico',
        description: 'Limpieza exhaustiva y eliminación segura de lodos para mantener el sistema funcionando eficientemente.',
        slug: 'limpieza-tanque-septico',
        detailTitle: 'Limpieza completa de tanque séptico para un rendimiento confiable',
        detailDescription:
          'Retiramos los sólidos acumulados, inspeccionamos el estado del tanque y ayudamos a restaurar un flujo saludable antes de que los problemas se vuelvan costosos.',
        highlights: ['Eliminación segura de lodos', 'Inspección incluida', 'Ideal para hogares y propiedades comerciales'],
      },
      {
        title: 'Instalación de sistema séptico',
        description: 'Instalación profesional de nuevos sistemas diseñados para un rendimiento duradero.',
        slug: 'instalacion-sistema-septico',
        detailTitle: 'Nuevos sistemas sépticos construidos para confianza a largo plazo',
        detailDescription:
          'Nuestro equipo planifica e instala sistemas con un dimensionamiento cuidadoso, evaluación del sitio y materiales duraderos para ajustarse a las necesidades de la propiedad.',
        highlights: ['Planeación personalizada', 'Instalación profesional', 'Diseñado para confiabilidad duradera'],
      },
      {
        title: 'Mantenimiento de tanque séptico',
        description: 'Planes de cuidado preventivo que apoyan sistemas más saludables y menos reparaciones costosas.',
        slug: 'mantenimiento-tanque-septico',
        detailTitle: 'Mantenimiento preventivo que protege su inversión',
        detailDescription:
          'Los chequeos regulares, el monitoreo y la atención oportuna ayudan a evitar fallas y a extender la vida útil del sistema.',
        highlights: ['Visitas programadas', 'Mantenimiento que ahorra costos', 'Mayor duración del sistema'],
      },
      {
        title: 'Reparación de sistema séptico',
        description: 'Reparaciones confiables para fugas, daños y problemas operativos que afectan el uso diario.',
        slug: 'reparacion-sistema-septico',
        detailTitle: 'Reparaciones rápidas para sistemas dañados o en falla',
        detailDescription:
          'Diagnosticar y reparar fallas comunes rápidamente para que el sistema recupere su funcionamiento normal sin demoras innecesarias.',
        highlights: ['Diagnóstico rápido', 'Reparación de fugas y daños', 'Recupera el funcionamiento'],
      },
      {
        title: 'Bombeo de tanque séptico',
        description: 'Servicios de bombeo rutinario para hogares, alquileres y propiedades comerciales.',
        slug: 'bombeo-tanque-septico',
        detailTitle: 'Bombeo rutinario para un servicio práctico y confiable',
        detailDescription:
          'El bombeo programado elimina residuos en exceso de forma segura y apoya un rendimiento estable del sistema en propiedades de todos los tamaños.',
        highlights: ['Eliminación rutinaria de residuos', 'Soporte para hogares y negocios', 'Mantiene sistemas más saludables'],
      },
      {
        title: 'Limpieza de trampas de grasa',
        description: 'Servicios de limpieza profunda que ayudan a cocinas y sitios comerciales a mantenerse eficientes y cumpliendo normativas.',
        slug: 'limpieza-trampas-grasa',
        detailTitle: 'Limpieza de trampas de grasa para operaciones más limpias y seguras',
        detailDescription:
          'Retiramos acumulaciones de grasa y residuos para que cocinas y sitios comerciales puedan operar con más limpieza, seguridad y menos interrupciones.',
        highlights: ['Elimina acumulaciones pesadas', 'Apoya cumplimiento', 'Protege drenajes y flujo'],
      },
      {
        title: 'Bombeo de trampas de grasa',
        description: 'Mantenimiento programado para reducir acumulación, olores y riesgo de desbordamiento.',
        slug: 'bombeo-trampas-grasa',
        detailTitle: 'Bombeo programado de trampas de grasa para prevenir desbordamientos',
        detailDescription:
          'El bombeo regular ayuda a reducir olores, bloqueos y costosas interrupciones en ambientes de servicio de alimentos.',
        highlights: ['Previene desbordamientos', 'Reduce olores', 'Mantiene sistemas eficientes'],
      },
      {
        title: 'Instalación de bomba de aire',
        description: 'Soluciones de aireación residenciales y comerciales con instalaciones confiables para un tratamiento eficiente.',
        slug: 'instalacion-bomba-aire',
        detailTitle: 'Instalación de bombas de aire residenciales y comerciales para un tratamiento eficiente',
        detailDescription:
          'Los sistemas residenciales de aguas residuales requieren compresión fiable para una aireación activa, y el tratamiento aeróbico comercial exige un flujo continuo y de alto rendimiento. Instalamos bombas y compresores de alto desempeño diseñados para optimizar la degradación de residuos, reducir costos de energía y controlar olores.',
        highlights: [
          'Configuración residencial de compresor de aire para aguas residuales: los sistemas residenciales avanzados requieren compresión fiable para una aireación activa. Instalamos compresores de bajo mantenimiento diseñados para optimizar la degradación de residuos y mantener bajos los costos de energía.',
          'Instalación comercial de bomba de aireación: el tratamiento aeróbico comercial exige un flujo continuo y resistente. Suministramos e instalamos bombas aireadoras de alto rendimiento para ciclos de trabajo comerciales exigentes, garantizando una degradación biológica constante y supresión de olores.',
          'Aireación eficiente',
        ],
      },
      {
        title: 'Reparación de bomba de aire',
        description: 'Soporte rápido para sistemas de aire que están funcionando por debajo de su capacidad o fallan.',
        slug: 'reparacion-bomba-aire',
        detailTitle: 'Reparaciones que restauran el rendimiento del sistema de aire rápidamente',
        detailDescription:
          'Nuestro equipo evalúa los problemas de flujo de aire y repara el sistema para devolverlo a una operación estable.',
        highlights: ['Diagnóstico rápido', 'Restaura el flujo', 'Reduce tiempos de inactividad'],
      },
      {
        title: 'Instalación de compresor de aire',
        description: 'Servicios profesionales de instalación para equipos de compresión de aire que apoyan su sistema.',
        slug: 'instalacion-compresor-aire',
        detailTitle: 'Instalación de compresor de aire con configuración confiable',
        detailDescription:
          'Instalamos el equipo de compresión cuidadosamente para que apoye su sistema séptico de manera confiable y segura.',
        highlights: ['Instalación profesional', 'Operación confiable', 'Diseñado para larga vida útil'],
      },
      {
        title: 'Reparación de compresor de aire',
        description: 'Trabajo especializado para restaurar el rendimiento y reducir el tiempo de inactividad.',
        slug: 'reparacion-compresor-aire',
        detailTitle: 'Reparación de compresor de aire para un rendimiento estable',
        detailDescription:
          'Inspeccionamos los puntos de falla comunes y reparamos los compresores para que regresen a un servicio confiable.',
        highlights: ['Restaura la función', 'Reduce tiempos de inactividad', 'Soporte especializado'],
      },
      {
        title: 'Drenaje de sistema séptico',
        description: 'Servicio completo de vaciado para sistemas que requieren una limpieza mayor o preparación.',
        slug: 'drenaje-sistema-septico',
        detailTitle: 'Servicio completo de drenaje para necesidades importantes de limpieza',
        detailDescription:
          'Este servicio es ideal cuando un sistema necesita una limpieza importante, preparación o un reinicio antes de seguir utilizándose.',
        highlights: ['Soporte para limpieza mayor', 'Prepara el sistema para uso', 'Servicio exhaustivo'],
      },
      {
        title: 'Servicios sépticos de emergencia',
        description: 'Respuesta rápida cuando los problemas sépticos urgentes necesitan atención inmediata.',
        slug: 'servicios-septicos-emergencia',
        detailTitle: 'Soporte de emergencia para inquietudes sépticas urgentes',
        detailDescription:
          'Cuando los problemas escalan rápidamente, ofrecemos una respuesta ágil y orientación clara para restaurar la seguridad y el funcionamiento normal.',
        highlights: ['Respuesta rápida', 'Apoyo urgente', 'Tranquilidad'],
      },
    ],
    gallery: [
      { title: 'Servicio residencial', caption: 'Respuesta rápida y manejo cuidadoso en cada visita a domicilio.' },
      { title: 'Inspección del sistema', caption: 'Reportes claros y recomendaciones prácticas para cada propiedad.' },
      { title: 'Soporte listo para contratos', caption: 'Una experiencia escalable que puede crecer hacia acuerdos de servicio más amplios.' },
    ],
    contact: {
      title: 'Contáctanos',
      description: 'Escríbenos para solicitar una cotización, una inspección o apoyo de servicio.',
      phone: '(555) 014-2024',
      email: 'service@sanchezseptics.com',
      address: 'Atendiendo a la comunidad local con cuidado en sitio',
      formTitle: 'Inicia una conversación',
    },
    faqs: [
      {
        question: '¿Con qué frecuencia se debe bombear un tanque séptico?',
        answer: 'La mayoría de los sistemas se benefician de un bombeo cada 3 a 5 años, según el tamaño del hogar y el uso.',
      },
      {
        question: '¿Ofrecen asistencia de emergencia?',
        answer: 'Sí. Podemos ayudar con necesidades urgentes y ofrecer orientación sobre el siguiente paso.',
      },
      {
        question: '¿Pueden apoyar a negocios y clientes con contratos?',
        answer: 'Claro. Nuestro proceso está diseñado para crecer hacia alianzas de servicio recurrente y acuerdos estructurados.',
      },
    ],
    tips: [
      { title: 'Controla el consumo de agua', description: 'Reduce la sobrecarga repartiendo la ropa y las tareas con alto uso de agua durante la semana.' },
      { title: 'Protege el campo de drenaje', description: 'Evita estacionar o usar equipo pesado sobre el área para prevenir la compactación del suelo.' },
      { title: 'Programa inspecciones', description: 'Las revisiones regulares ayudan a prevenir reparaciones costosas y tiempos muertos inesperados.' },
    ],
    area: [
      { title: 'Área de servicio local', description: 'Atendemos con orgullo a las comunidades cercanas con cuidado séptico confiable.' },
      { title: 'Cobertura extendida', description: 'Nuestro equipo está disponible para áreas de servicio extendidas bajo solicitud.' },
    ],
    footer: {
      brand: 'Sanchez Septic Services',
      note: 'Cuidado séptico profesional con un enfoque limpio y moderno.',
      hours: 'Horario de atención: de lunes a sábado, de 7:00 AM a 6:00 PM',
      payments: ['Efectivo', 'Transferencia bancaria', 'Depósito', 'Cheque'],
    },
  },
}

export const languageOptions: Array<{ value: Language; label: string }> = [
  { value: 'en', label: 'EN' },
  { value: 'es', label: 'ES' },
]
