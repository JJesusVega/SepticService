import { useMemo, useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import heroImage from './assets/hero.png'
import septicTankCleaningImage from './assets/Septic-Tank-Cleaning.png'
import septicTankEmergencyImage from './assets/Septic Tank Emergency.png'
import septicTankPumpingImage from './assets/Pumping Septic Tank.png'
import septicTankRepairImage from './assets/Pump septic tank repair.png'
import septicTankMaintenanceImage from './assets/Septic Tank Maintance.png'
import residentialTankImage from './assets/Residential Tank.png'
import pipesInstallationImage from './assets/pipes installation.png'
import sprinklerInstallationImage from './assets/sprinkles installation.png'
import { languageOptions, siteContent, type Language, type SiteContent } from './domain/siteContent'

const createIllustration = (label: string, icon: string, accent: string) => {
  const safeLabel = label.replace(/&/g, '&amp;')
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" rx="40" fill="#fffaf9" />
      <rect x="56" y="56" width="688" height="388" rx="30" fill="${accent}" opacity="0.1" />
      <circle cx="620" cy="170" r="118" fill="${accent}" opacity="0.18" />
      <rect x="170" y="190" width="260" height="120" rx="24" fill="white" stroke="${accent}" stroke-width="8" />
      <rect x="214" y="224" width="176" height="18" rx="9" fill="${accent}" opacity="0.8" />
      <rect x="214" y="258" width="118" height="16" rx="8" fill="${accent}" opacity="0.55" />
      <text x="400" y="390" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="44" font-weight="700" fill="${accent}">${icon}</text>
      <text x="400" y="440" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="600" fill="#5d2f2f">${safeLabel}</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const getServiceIllustration = (slug: string) => {
  switch (slug) {
    case 'septic-tank-cleaning':
      return septicTankCleaningImage
    case 'septic-system-installation':
      return pipesInstallationImage
    case 'septic-tank-maintenance':
      return septicTankMaintenanceImage
    case 'septic-system-repair':
      return septicTankRepairImage
    case 'septic-tank-pumping':
      return septicTankPumpingImage
    case 'grease-trap-cleaning':
      return residentialTankImage
    case 'grease-trap-pumping':
      return septicTankPumpingImage
    case 'air-pump-installation':
      return sprinklerInstallationImage
    case 'air-pump-repair':
      return septicTankRepairImage
    case 'air-compressor-installation':
      return pipesInstallationImage
    case 'air-compressor-repair':
      return septicTankRepairImage
    case 'septic-system-drain-out':
      return residentialTankImage
    case 'emergency-septic-services':
      return septicTankEmergencyImage
    default:
      return septicTankCleaningImage
  }
}

const getTipIllustration = (title: string) => {
  if (title.toLowerCase().includes('water')) {
    return createIllustration('Water Care', '💧', '#b42318')
  }
  if (title.toLowerCase().includes('drain')) {
    return createIllustration('Drain Protection', '🌿', '#8f2a24')
  }
  return createIllustration('Inspection Tips', '🗓️', '#a3412f')
}

type ServiceDetailRouteProps = {
  content: SiteContent
  language: Language
}

function ServiceDetailRoute({ content, language }: ServiceDetailRouteProps) {
  const { slug } = useParams()
  const service = content.services.find((item) => item.slug === slug)

  if (!service) {
    return (
      <section className="section">
        <p>{language === 'en' ? 'Service not found.' : 'Servicio no encontrado.'}</p>
      </section>
    )
  }

  return (
    <section className="section service-detail-section">
      <Link className="back-link" to="/services">← {language === 'en' ? 'Back to services' : 'Volver a servicios'}</Link>
      <div className="service-detail-card">
        <div className="service-detail-content">
          <div className="service-detail-copy">
            <p className="eyebrow">{language === 'en' ? 'Service detail' : 'Detalle del servicio'}</p>
            <h2>{service.detailTitle}</h2>
            <p>{service.detailDescription}</p>
            <ul>{service.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </div>
          <img className="service-detail-image" src={getServiceIllustration(service.slug)} alt={service.title} />
        </div>
      </div>
    </section>
  )
}

function AppShell() {
  const [language, setLanguage] = useState<Language>('en')
  const [servicesOpen, setServicesOpen] = useState(false)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)

  const content = useMemo(() => siteContent[language], [language])

  const areaMapQuery = useMemo(() => {
    if (!selectedArea) {
      return content.area.map((item) => `${item.title}, TX`).join('|')
    }

    return `${selectedArea}, TX`
  }, [content.area, selectedArea])

  const mapEmbedUrl = useMemo(() => {
    return `https://www.google.com/maps?q=${encodeURIComponent(areaMapQuery)}&output=embed&markers=size:mid%7Ccolor:red%7Clabel:S`
  }, [areaMapQuery])

  return (
    <div className="app-shell">
      <header className="topbar" id="home">
        <div className="brand-block">
          <span className="brand-mark">SS</span>
          <div>
            <p className="brand-name">Sanchez Septic Services</p>
            <p className="brand-subtitle">Reliable septic care</p>
          </div>
        </div>

        <nav className="main-nav" aria-label="Primary navigation">
          <Link to="/">{language === 'en' ? 'Home' : 'Inicio'}</Link>
          <Link to="/about">{language === 'en' ? 'About' : 'Nosotros'}</Link>
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-dropdown-button"
              onClick={() => setServicesOpen((value) => !value)}
            >
              {language === 'en' ? 'Services' : 'Servicios'}
            </button>
            {servicesOpen ? (
              <div className="nav-dropdown-menu">
                <Link to="/services" onClick={() => setServicesOpen(false)}>
                  {language === 'en' ? 'All services' : 'Todos los servicios'}
                </Link>
                {content.services.map((item) => (
                  <Link key={item.slug} to={`/services/${item.slug}`} onClick={() => setServicesOpen(false)}>
                    {item.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link to="/gallery">{language === 'en' ? 'Gallery' : 'Galería'}</Link>
          <Link to="/contact">{language === 'en' ? 'Contact' : 'Contacto'}</Link>
          <Link to="/faqs">{language === 'en' ? 'FAQs' : 'Preguntas'}</Link>
          <Link to="/tips">{language === 'en' ? 'Tips' : 'Consejos'}</Link>
          <Link to="/area">{language === 'en' ? 'Area' : 'Cobertura'}</Link>
        </nav>

        <div className="lang-switcher" aria-label="Language selector">
          {languageOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={option.value === language ? 'active' : ''}
              onClick={() => setLanguage(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="hero-card">
                  <div className="hero-copy">
                    <p className="eyebrow">{content.hero.eyebrow}</p>
                    <h1>{content.hero.title}</h1>
                    <p className="hero-description">{content.hero.description}</p>
                    <div className="hero-actions">
                      <Link className="primary-btn" to="/contact">
                        {content.hero.primaryCta}
                      </Link>
                      <Link className="secondary-btn" to="/services">
                        {content.hero.secondaryCta}
                      </Link>
                    </div>
                  </div>
                  <div className="hero-panel" aria-label="Service overview">
                    <div className="hero-visual">
                      <img className="hero-image" src={heroImage} alt="Septic service equipment and care" />
                    </div>
                    <div className="panel-pill">24/7 response</div>
                    <div className="panel-pill">Licensed support</div>
                    <div className="panel-pill">Contract-ready care</div>
                  </div>
                </section>

                <section className="section" id="about">
                  <div className="section-heading">
                    <p className="eyebrow">{content.about.title}</p>
                    <h2>{content.about.title}</h2>
                  </div>
                  <div className="about-grid">
                    <div>
                      {content.about.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="highlight-card">{content.about.highlight}</div>
                  </div>
                </section>

                <section className="section" id="services">
                  <div className="section-heading">
                    <p className="eyebrow">{content.hero.secondaryCta}</p>
                    <h2>{content.nav[2].label}</h2>
                  </div>
                  <div className="card-grid">
                    {content.services.slice(0, 6).map((service) => (
                      <article key={service.title} className="info-card">
                        <img className="card-image" src={getServiceIllustration(service.slug)} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <Link className="secondary-btn service-link" to={`/services/${service.slug}`}>
                          {language === 'en' ? 'View details' : 'Ver detalles'}
                        </Link>
                      </article>
                    ))}
                  </div>
                </section>
              </>
            }
          />
          <Route path="/about" element={<section className="section"><div className="section-heading"><p className="eyebrow">{content.about.title}</p><h2>{content.about.title}</h2></div><div className="about-grid"><div>{content.about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="highlight-card">{content.about.highlight}</div></div></section>} />
          <Route
            path="/services"
            element={
              <section className="section" id="services">
                <div className="section-heading">
                  <p className="eyebrow">{language === 'en' ? 'Services' : 'Servicios'}</p>
                  <h2>{language === 'en' ? 'Explore our services' : 'Explora nuestros servicios'}</h2>
                </div>
                <div className="card-grid">
                  {content.services.map((service) => (
                    <article key={service.title} className="info-card">
                      <img className="card-image" src={getServiceIllustration(service.slug)} alt={service.title} />
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <Link className="secondary-btn service-link" to={`/services/${service.slug}`}>
                        {language === 'en' ? 'View details' : 'Ver detalles'}
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            }
          />
          <Route path="/services/:slug" element={<ServiceDetailRoute content={content} language={language} />} />
          <Route path="/gallery" element={<section className="section" id="gallery"><div className="section-heading"><p className="eyebrow">{content.nav[3].label}</p><h2>{content.nav[3].label}</h2></div><div className="card-grid">{content.gallery.map((item) => <article key={item.title} className="gallery-card"><h3>{item.title}</h3><p>{item.caption}</p></article>)}</div></section>} />
          <Route path="/contact" element={<section className="section contact-section" id="contact"><div className="section-heading"><p className="eyebrow">{content.contact.title}</p><h2>{content.contact.formTitle}</h2></div><div className="contact-grid"><div className="info-card"><p>{content.contact.description}</p><p>{content.contact.phone}</p><p>{content.contact.email}</p><p>{content.contact.address}</p></div><form className="contact-form"><label><span>{language === 'en' ? 'Name' : 'Nombre'}</span><input type="text" placeholder={language === 'en' ? 'Your name' : 'Tu nombre'} /></label><label><span>{language === 'en' ? 'Email' : 'Correo'}</span><input type="email" placeholder={language === 'en' ? 'you@example.com' : 'tu@ejemplo.com'} /></label><label><span>{language === 'en' ? 'Message' : 'Mensaje'}</span><textarea rows={4} placeholder={language === 'en' ? 'Tell us how we can help' : 'Cuéntanos cómo podemos ayudar'} /></label><button type="submit" className="primary-btn">{language === 'en' ? 'Send request' : 'Enviar solicitud'}</button></form></div></section>} />
          <Route path="/faqs" element={<section className="section" id="faqs"><div className="section-heading"><p className="eyebrow">{content.nav[5].label}</p><h2>{content.nav[5].label}</h2></div><div className="card-grid">{content.faqs.map((item) => <article key={item.question} className="info-card"><h3>{item.question}</h3><p>{item.answer}</p></article>)}</div></section>} />
          <Route path="/tips" element={<section className="section" id="tips"><div className="section-heading"><p className="eyebrow">{content.nav[6].label}</p><h2>{content.nav[6].label}</h2></div><div className="card-grid">{content.tips.map((tip) => <article key={tip.title} className="info-card"><img className="card-image" src={getTipIllustration(tip.title)} alt={tip.title} /><h3>{tip.title}</h3><p>{tip.description}</p></article>)}</div></section>} />
          <Route path="/area" element={<section className="section" id="area"><div className="section-heading"><p className="eyebrow">{content.nav[7].label}</p><h2>{content.nav[7].label}</h2></div><div className="area-layout"><div className="info-card area-summary-card"><h3>{language === 'en' ? 'Service areas' : 'Áreas de servicio'}</h3><ul className="area-list"><li><button type="button" className={`area-list-button ${selectedArea === null ? 'active' : ''}`} onClick={() => setSelectedArea(null)} aria-pressed={selectedArea === null}><span className="area-marker" aria-hidden="true"><svg viewBox="0 0 64 64" role="img"><rect x="12" y="18" width="40" height="28" rx="6" fill="#b42318" /><rect x="22" y="12" width="20" height="10" rx="4" fill="#7a4a4a" /><rect x="28" y="24" width="8" height="14" rx="2" fill="#fff" /></svg></span><span className="area-list-content"><span>{language === 'en' ? 'All locations' : 'Todas las ubicaciones'}</span><p>{language === 'en' ? 'Show the full covered service area.' : 'Muestra toda el área de servicio cubierta.'}</p></span></button></li>{content.area.map((item) => <li key={item.title}><button type="button" className={`area-list-button ${selectedArea === item.title ? 'active' : ''}`} onClick={() => setSelectedArea(item.title)} aria-pressed={selectedArea === item.title}><span className="area-marker" aria-hidden="true"><svg viewBox="0 0 64 64" role="img"><rect x="12" y="18" width="40" height="28" rx="6" fill="#b42318" /><rect x="22" y="12" width="20" height="10" rx="4" fill="#7a4a4a" /><rect x="28" y="24" width="8" height="14" rx="2" fill="#fff" /></svg></span><span className="area-list-content"><span>{item.title}</span><p>{item.description}</p></span></button></li>)}</ul></div><div className="map-card"><iframe title="Service area map" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>} />
        
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <p>{content.footer.brand}</p>
          <p>{content.footer.note}</p>
        </div>
        <div className="footer-details">
          <p>{content.footer.hours}</p>
          <p>{language === 'en' ? 'Payments accepted:' : 'Métodos de pago aceptados:'} {content.footer.payments.join(', ')}</p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
