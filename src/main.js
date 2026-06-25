import './style.css'
import logoFull from './assets/logo-full-green.png'
import logoMark from './assets/logo-mark.png'

const site = {
  brand: 'MAAP Corporation',
  email: 'maaplogisticsags@gmail.com',
  phoneDisplay: '449 103 8676',
  phoneRaw: '524491038676',
  hero: {
    eyebrow: 'Logística y transporte terrestre',
    title: 'Más que transporte, somos tu aliado en cada envío.',
    description:
      'Coordinamos traslados locales, regionales y nacionales con enfoque en seguridad, puntualidad y atención personalizada.',
  },
  trust: {
    intro:
      'Transporte terrestre de carga con cobertura nacional. Compromiso, seguridad y eficiencia en cada entrega.',
    stats: [
      {
        value: '300+',
        title: 'Viajes realizados',
        text: 'Más de 300 servicios de transporte coordinados con seguimiento cercano.',
      },
      {
        value: '10+',
        title: 'Ciudades atendidas',
        text: 'Cobertura operativa en múltiples rutas y destinos estratégicos.',
      },
      {
        value: '98%',
        title: 'Entregas a tiempo',
        text: 'Operación enfocada en puntualidad, planeación y respuesta rápida.',
      },
      {
        value: '1:1',
        title: 'Servicio personalizado',
        text: 'Cada cliente recibe una solución ajustada a su operación y necesidad.',
      },
    ],
  },
  about: {
    label: 'Nosotros',
    title: 'Movemos tu carga con seguridad, puntualidad y confianza.',
    body: [
      'MAAP Corporation ofrece soluciones de transporte terrestre confiables para empresas que necesitan visibilidad, cumplimiento y atención directa.',
      'Nuestra operación se adapta a cada cliente para conectar origen y destino con procesos claros, comunicación constante y enfoque en servicio.',
    ],
  },
  missionVision: [
    {
      title: 'Misión',
      text: 'Brindar soluciones de transporte terrestre confiables, seguras y eficientes, adaptándonos a las necesidades logísticas de cada cliente y garantizando puntualidad y calidad en cada operación.',
    },
    {
      title: 'Visión',
      text: 'Consolidarnos como una empresa de transporte confiable y reconocida en la región del Bajío, expandiendo nuestras operaciones a nivel nacional mediante crecimiento sostenible, innovación logística y un servicio de alta calidad.',
    },
  ],
  values: [
    'Responsabilidad',
    'Puntualidad',
    'Compromiso con el cliente',
    'Confianza',
    'Seguridad',
    'Innovación operativa',
  ],
}

const whatsappMessage = encodeURIComponent(
  'Hola, me interesa conocer más sobre sus servicios de transporte. ¿Podrían brindarme información, por favor?',
)
const whatsappUrl = `https://wa.me/${site.phoneRaw}?text=${whatsappMessage}`
const mailtoUrl = `mailto:${site.email}`
const wallaceVideoUrl = `${import.meta.env.BASE_URL}wallace.mov`

const statCards = site.trust.stats
  .map(
    (stat) => `
      <article class="stat-card">
        <p class="stat-value">${stat.value}</p>
        <h3>${stat.title}</h3>
        <p>${stat.text}</p>
      </article>
    `,
  )
  .join('')

const missionVisionCards = site.missionVision
  .map(
    (item, index) => `
      <article class="panel panel-${index + 1}">
        <span class="panel-icon" aria-hidden="true">${index === 0 ? targetIcon() : eyeIcon()}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `,
  )
  .join('')

const valuePills = site.values
  .map((value, index) => `<li class="value-pill value-pill-${(index % 3) + 1}">${value}</li>`)
  .join('')

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Ir al inicio de ${site.brand}">
      <img class="brand-logo brand-logo-full" src="${logoFull}" alt="Logo de ${site.brand}" />
      <img class="brand-logo brand-logo-mark" src="${logoMark}" alt="Isotipo de ${site.brand}" />
    </a>

    <nav class="nav" aria-label="Principal">
      <a href="#inicio">Inicio</a>
      <a href="#nosotros">Nosotros</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <main>
    <section class="hero-section" id="inicio">
      <div class="hero-backdrop" aria-hidden="true">
        <span class="grid"></span>
        <span class="beam beam-1"></span>
        <span class="beam beam-2"></span>
        <span class="beam beam-3"></span>
      </div>

      <div class="hero-content container">
        <div class="hero-copy">
          <p class="eyebrow">${site.hero.eyebrow}</p>
          <h1>${site.hero.title}</h1>
          <p class="hero-text">${site.hero.description}</p>

          <div class="hero-actions">
            <a class="button button-primary" href="${whatsappUrl}" target="_blank" rel="noreferrer">Enviar mensaje</a>
            <a class="button button-secondary" href="#nosotros">Conocer más</a>
          </div>
        </div>

        <aside class="hero-card" aria-label="Resumen de servicio">
          <img class="hero-mark" src="${logoMark}" alt="Isotipo MAAP" />
          <p class="hero-card-label">Cobertura y servicio</p>
          <ul>
            <li>Servicio local, regional y nacional</li>
            <li>Atención personalizada en cada operación</li>
            <li>Enlace directo por WhatsApp y correo</li>
          </ul>
        </aside>
      </div>
    </section>

    <section class="video-band" aria-label="Video de operación MAAP">
      <div class="video-band-shell">
        <video class="video-band-media" autoplay muted loop playsinline preload="metadata">
          <source src="${wallaceVideoUrl}" type="video/quicktime" />
          <source src="${wallaceVideoUrl}" type="video/mp4" />
        </video>
        <div class="video-band-overlay" aria-hidden="true"></div>
      </div>
    </section>

    <section class="trust-section container" aria-labelledby="confianza-title">
      <div class="section-intro">
        <p class="eyebrow">Confianza operativa</p>
        <h2 id="confianza-title">Resultados que respaldan cada entrega.</h2>
        <p>${site.trust.intro}</p>
      </div>

      <div class="stats-grid">
        ${statCards}
      </div>
    </section>

    <section class="about-section" id="nosotros">
      <div class="container about-grid">
        <div>
          <p class="eyebrow">${site.about.label}</p>
          <h2>${site.about.title}</h2>
        </div>

        <div class="about-copy">
          ${site.about.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </div>
      </div>
    </section>

    <section class="mission-section container" aria-labelledby="mision-vision-title">
      <div class="section-intro narrow">
        <p class="eyebrow">Dirección de la empresa</p>
        <h2 id="mision-vision-title">Operación con propósito, crecimiento con visión.</h2>
      </div>

      <div class="panels-grid">
        ${missionVisionCards}
      </div>
    </section>

    <section class="values-section">
      <div class="container values-grid">
        <div class="values-copy">
          <p class="eyebrow">De nosotros</p>
          <h2>Nuestros valores</h2>
          <p>
            Estos principios impulsan cada decisión y cada trayecto. Buscamos relaciones duraderas, servicio excepcional y mejora continua.
          </p>
        </div>

        <ul class="values-list" aria-label="Valores de MAAP Corporation">
          ${valuePills}
        </ul>
      </div>
    </section>

    <section class="contact-section container" id="contacto">
      <div class="contact-copy contact-copy-minimal">
        <h2>Envíanos un mensaje y coordinemos tu siguiente movimiento.</h2>
      </div>

      <div class="contact-card">
        <a class="contact-item" href="${mailtoUrl}">
          <span class="contact-icon" aria-hidden="true">${mailIcon()}</span>
          <span>
            <strong>Correo</strong>
            <small>${site.email}</small>
          </span>
        </a>

        <a class="contact-item" href="${whatsappUrl}" target="_blank" rel="noreferrer">
          <span class="contact-icon contact-icon--whatsapp" aria-hidden="true">${whatsappIcon()}</span>
          <span>
            <strong>WhatsApp</strong>
            <small>${site.phoneDisplay}</small>
          </span>
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-content">
      <img src="${logoFull}" alt="Logo de ${site.brand}" />
      <div>
        <p>${site.brand}</p>
        <a href="${mailtoUrl}">${site.email}</a>
      </div>
      <a class="footer-link" href="${whatsappUrl}" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
    </div>
  </footer>
`

function targetIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="8"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 8v4l3 3"></path>
    </svg>
  `
}

function eyeIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `
}

function mailIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <path d="m4 7 8 6 8-6"></path>
    </svg>
  `
}

function whatsappIcon() {
  return `
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.93 7.93 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.57 6.57 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.474.205.843.327 1.13.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  `
}
