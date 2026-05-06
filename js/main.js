/* ════════════════════════════════════════════
   ECOLOGICAL PASSIVE BUILDING — main.js
   ════════════════════════════════════════════ */

/* ── 1. TRANSLATIONS ─────────────────────── */
const TRANSLATIONS = {
  es: {
    /* NAV */
    'nav.home':     'Hogar',
    'nav.about':    'Sobre Nosotros',
    'nav.plan':     'Proyectos Sobre Plano',
    'nav.license':  'Proyectos con Licencia',
    'nav.materials':'Materiales',
    'nav.jobs':     'Empleo',
    'nav.contact':  'Contacto',
    /* INDEX HERO */
    'hero.eyebrow': 'Constructora Ecológica Premium · Desde 1994',
    'hero.h1':      'Edificio <em>ecológico</em> y pasivo',
    'hero.p':       'Constructores · Diseñadores · Arquitectos. Más de 30 años convirtiendo sueños en villas únicas, en perfecta armonía con la naturaleza.',
    'hero.btn1':    'Sobre Nosotros →',
    'hero.btn2':    'Ver Proyectos',
    'hero.stat1l':  'Años de experiencia',
    'hero.stat2l':  'Proyectos entregados',
    'hero.stat3l':  'Certificación energética',
    'hero.stat4l':  'Países',
    /* SERVICES */
    'svc.h3.1':  'Construcción ecológica',
    'svc.p.1':   'Contamos con una larga lista de contratistas profesionales con los que nuestros ingenieros y arquitectos disfrutan trabajando en la mayoría de nuestros proyectos.',
    'svc.h3.2':  'Diseño y construcción',
    'svc.p.2':   'Nuestra especialización nos permite diseñar y construir cualquier tipo de proyecto, por lo que somos considerados los mejores del mercado.',
    'svc.h3.3':  'Servicios de construcción',
    'svc.p.3':   'La construcción ecológica pasiva proporciona servicios de construcción de alta calidad teniendo en cuenta todos los aspectos de eficiencia energética.',
    'svc.h3.4':  'Servicios previos a la construcción',
    'svc.p.4':   'Antes de que comience la construcción, dedicamos tiempo a la planificación inicial para sopesar de antemano todos los aspectos financieros y de eficiencia.',
    /* ABOUT SNIPPET */
    'about.tag':   'Sobre Nosotros',
    'about.h2':    'Más de 30 años creando el hogar de tus sueños',
    'about.quote': '"La perfección existe, es algo que se puede ver y sentir, son las villas que construimos".',
    'about.p':     'Somos una constructora ecológica que construye villas unifamiliares, adosadas y casas a medida, con un equipo de arquitectos, diseñadores y técnicos que combinan sus talentos para ofrecer la máxima calidad de construcción.',
    'about.li1':   '<strong>Diseño personalizado:</strong> cada villa refleja los gustos únicos de su propietario.',
    'about.li2':   '<strong>Tecnología Passive House:</strong> reducción de hasta el 90% en consumo energético.',
    'about.li3':   '<strong>Materiales ecológicos:</strong> seleccionados para garantizar sostenibilidad y durabilidad.',
    'about.btn':   'Conoce nuestro equipo →',
    /* CTA BANNER */
    'cta.h2':  '¿Listo para construir tu villa perfecta?',
    'cta.p':   'Usted lo sueña y nosotros lo diseñamos. Contacte con nuestro equipo para recibir asesoramiento personalizado sin compromiso.',
    'cta.btn': 'Hablar con un experto →',
    /* FOOTER */
    'footer.tagline': 'Construimos villas ecológicas únicas, diseñadas a medida para hacer realidad los sueños de nuestros clientes desde hace más de 30 años.',
    'footer.col1':    'Sobre Nosotros',
    'footer.col2':    'Información',
    'footer.col3':    'Contacto',
    'footer.copy':    '© 2026 Ecological Passive Building · Todos los derechos reservados',
  },
  en: {
    'nav.home':     'Home',
    'nav.about':    'About Us',
    'nav.plan':     'Off-Plan Projects',
    'nav.license':  'Licensed Projects',
    'nav.materials':'Materials',
    'nav.jobs':     'Jobs',
    'nav.contact':  'Contact',
    'hero.eyebrow': 'Premium Ecological Builder · Since 1994',
    'hero.h1':      'Ecological and <em>passive</em> building',
    'hero.p':       'Builders · Designers · Architects. Over 30 years turning dreams into unique villas, in perfect harmony with nature.',
    'hero.btn1':    'About Us →',
    'hero.btn2':    'View Projects',
    'hero.stat1l':  'Years of experience',
    'hero.stat2l':  'Delivered projects',
    'hero.stat3l':  'Energy certification',
    'hero.stat4l':  'Countries',
    'svc.h3.1':  'Ecological construction',
    'svc.p.1':   'We have a long list of professional contractors with whom our engineers and architects enjoy working on the majority of our projects.',
    'svc.h3.2':  'Design & construction',
    'svc.p.2':   'Our specialisation allows us to design and build any type of project, which is why we are considered the best in the market.',
    'svc.h3.3':  'Construction services',
    'svc.p.3':   'Ecological passive construction provides high quality construction services taking into account all aspects of energy efficiency.',
    'svc.h3.4':  'Pre-construction services',
    'svc.p.4':   'Before construction begins, we spend time on initial planning to consider all financial and efficiency aspects in advance.',
    'about.tag':   'About Us',
    'about.h2':    'Over 30 years creating the home of your dreams',
    'about.quote': '"Perfection exists, it is something you can see and feel — it is the villas we build."',
    'about.p':     'We are an ecological builder constructing detached villas, townhouses and bespoke homes with a team of architects, designers and technicians combining their talents to deliver the highest quality construction.',
    'about.li1':   '<strong>Custom design:</strong> every villa reflects the unique tastes of its owner.',
    'about.li2':   '<strong>Passive House technology:</strong> up to 90% reduction in energy consumption.',
    'about.li3':   '<strong>Ecological materials:</strong> chosen to guarantee sustainability and durability.',
    'about.btn':   'Meet our team →',
    'cta.h2':  'Ready to build your perfect villa?',
    'cta.p':   'You dream it and we design it. Contact our team for personalised advice with no commitment.',
    'cta.btn': 'Speak to an expert →',
    'footer.tagline': 'We build unique ecological villas, custom-designed to make our clients\' dreams a reality for over 30 years.',
    'footer.col1':    'About Us',
    'footer.col2':    'Information',
    'footer.col3':    'Contact',
    'footer.copy':    '© 2026 Ecological Passive Building · All rights reserved',
  },
  nl: {
    'nav.home':     'Home',
    'nav.about':    'Over Ons',
    'nav.plan':     'Projecten op Tekening',
    'nav.license':  'Gelicentieerde Projecten',
    'nav.materials':'Materialen',
    'nav.jobs':     'Vacatures',
    'nav.contact':  'Contact',
    'hero.eyebrow': 'Premium Ecologische Bouwer · Sinds 1994',
    'hero.h1':      'Ecologisch en <em>passief</em> bouwen',
    'hero.p':       'Bouwers · Ontwerpers · Architecten. Meer dan 30 jaar dromen omzetten in unieke villa\'s, in perfecte harmonie met de natuur.',
    'hero.btn1':    'Over Ons →',
    'hero.btn2':    'Projecten Bekijken',
    'hero.stat1l':  'Jaar ervaring',
    'hero.stat2l':  'Opgeleverde projecten',
    'hero.stat3l':  'Energiecertificering',
    'hero.stat4l':  'Landen',
    'svc.h3.1':  'Ecologische bouw',
    'svc.p.1':   'We hebben een uitgebreide lijst van professionele aannemers met wie onze ingenieurs en architecten graag samenwerken aan de meeste van onze projecten.',
    'svc.h3.2':  'Ontwerp en bouw',
    'svc.p.2':   'Onze specialisatie stelt ons in staat elk type project te ontwerpen en te bouwen, waardoor we als de besten op de markt worden beschouwd.',
    'svc.h3.3':  'Bouwdiensten',
    'svc.p.3':   'Ecologische passieve bouw biedt hoogwaardige bouwdiensten waarbij alle aspecten van energieëfficiëntie in aanmerking worden genomen.',
    'svc.h3.4':  'Diensten voor de bouw',
    'svc.p.4':   'Voordat de bouw begint, besteden we tijd aan de initiële planning om alle financiële en efficiëntieaspecten van tevoren te evalueren.',
    'about.tag':   'Over Ons',
    'about.h2':    'Meer dan 30 jaar uw droomhuis creëren',
    'about.quote': '"Perfectie bestaat, het is iets wat je kunt zien en voelen — het zijn de villa\'s die we bouwen."',
    'about.p':     'Wij zijn een ecologische bouwer die vrijstaande villa\'s, aaneengesloten woningen en maatwerk huizen bouwt met een team van architecten, ontwerpers en technici.',
    'about.li1':   '<strong>Persoonlijk ontwerp:</strong> elke villa weerspiegelt de unieke smaak van de eigenaar.',
    'about.li2':   '<strong>Passief Huis technologie:</strong> tot 90% minder energieverbruik.',
    'about.li3':   '<strong>Ecologische materialen:</strong> geselecteerd voor duurzaamheid en levensduur.',
    'about.btn':   'Maak kennis met ons team →',
    'cta.h2':  'Klaar om uw perfecte villa te bouwen?',
    'cta.p':   'U droomt het en wij ontwerpen het. Neem contact op met ons team voor persoonlijk advies zonder verplichtingen.',
    'cta.btn': 'Spreek met een expert →',
    'footer.tagline': 'Wij bouwen unieke ecologische villa\'s, op maat ontworpen om de dromen van onze klanten meer dan 30 jaar lang werkelijkheid te maken.',
    'footer.col1':    'Over Ons',
    'footer.col2':    'Informatie',
    'footer.col3':    'Contact',
    'footer.copy':    '© 2026 Ecological Passive Building · Alle rechten voorbehouden',
  }
};

function applyLang(lang) {
  localStorage.setItem('epb_lang', lang);
  const t = TRANSLATIONS[lang] || TRANSLATIONS.es;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  /* update <html lang> */
  document.documentElement.lang = lang;
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* restore saved language */
const savedLang = localStorage.getItem('epb_lang') || 'es';
applyLang(savedLang);


/* ── 2. NAVBAR ──────────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

/* highlight current page */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();


/* ── 3. SCROLL TOP ──────────────────────── */
const scrollBtn = document.getElementById('scrollTop');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 300);
  }, { passive: true });
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ── 4. MODALS ──────────────────────────── */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(overlay.id); });
});
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const ov = btn.closest('.modal-overlay');
    if (ov) closeModal(ov.id);
  });
});


/* ── 5. CONTACT FORM → FormSubmit.co ───── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!e.target.checkValidity()) { e.target.reportValidity(); return; }

    const submitBtn = contactForm.querySelector('[type=submit]');
    const successEl = document.getElementById('formSuccess');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';

    const data = {
      nombre:   (contactForm.querySelector('#fname')?.value || '') + ' ' + (contactForm.querySelector('#lname')?.value || ''),
      email:    contactForm.querySelector('#cemail')?.value || '',
      telefono: contactForm.querySelector('#cphone')?.value || '',
      asunto:   contactForm.querySelector('#subject')?.value || '',
      mensaje:  contactForm.querySelector('#message')?.value || '',
      _subject: 'Nuevo mensaje web – Ecological Passive Building',
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@ecologicalpassivebuilding.es', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        successEl.style.display = 'block';
        e.target.reset();
        setTimeout(() => { successEl.style.display = 'none'; }, 7000);
      } else {
        throw new Error('network');
      }
    } catch {
      /* fallback: open mail client */
      window.location.href =
        `mailto:info@ecologicalpassivebuilding.es?subject=${encodeURIComponent(data._subject)}&body=${encodeURIComponent(data.mensaje)}`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar mensaje →';
    }
  });
}


/* ── 6. APPLY FORM ──────────────────────── */
const applyForm = document.getElementById('applyForm');
if (applyForm) {
  applyForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!e.target.checkValidity()) { e.target.reportValidity(); return; }

    const submitBtn = applyForm.querySelector('[type=submit]');
    const successEl = document.getElementById('applySuccess');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando…';

    const data = {
      puesto:        document.getElementById('modalJobTitle')?.textContent || '',
      nombre:        (applyForm.querySelector('#aFname')?.value || '') + ' ' + (applyForm.querySelector('#aLname')?.value || ''),
      email:         applyForm.querySelector('#aEmail')?.value || '',
      telefono:      applyForm.querySelector('#aPhone')?.value || '',
      presentacion:  applyForm.querySelector('#aCover')?.value || '',
      cv:            applyForm.querySelector('#aCV')?.value || '',
      _subject:      'Nueva candidatura web – Ecological Passive Building',
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@ecologicalpassivebuilding.es', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        successEl.style.display = 'block';
        applyForm.reset();
      } else throw new Error();
    } catch {
      window.location.href =
        `mailto:info@ecologicalpassivebuilding.es?subject=${encodeURIComponent(data._subject)}&body=${encodeURIComponent(data.presentacion)}`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar candidatura →';
    }
  });
}


/* ── 7. JOBS ────────────────────────────── */
function renderJobs(filter) {
  const jobs = window.JOBS || [];
  const filtered = filter === 'all' ? jobs : jobs.filter(j => j.cat === filter);
  const grid = document.getElementById('jobsGrid');
  if (!grid) return;
  if (!filtered.length) {
    grid.innerHTML = '<p style="color:var(--gray-600);padding:32px 0;">No hay ofertas en esta categoría actualmente.</p>';
    return;
  }
  grid.innerHTML = filtered.map(j => `
    <div class="job-card">
      <div class="job-left">
        <div class="job-dept">${j.catLabel}</div>
        <div class="job-title">${j.title}</div>
        <div class="job-tags">
          <span class="job-tag">📍 ${j.loc}</span>
          <span class="job-tag">📄 ${j.type}</span>
          ${j.salary ? `<span class="job-tag neutral">💰 ${j.salary}</span>` : ''}
        </div>
      </div>
      <div class="job-right">
        <span class="job-date">Publicado: ${j.date}</span>
        <button class="btn btn-primary" style="padding:10px 22px;font-size:.82rem;" onclick="openApplyModal(${j.id})">
          Aplicar →
        </button>
      </div>
    </div>`).join('');
}

function openApplyModal(id) {
  const job = (window.JOBS || []).find(j => j.id === id);
  if (!job) return;
  document.getElementById('modalJobCat').textContent  = job.catLabel;
  document.getElementById('modalJobTitle').textContent = job.title;
  document.getElementById('modalJobDesc').textContent  = job.desc;
  const s = document.getElementById('applySuccess');
  if (s) s.style.display = 'none';
  const f = document.getElementById('applyForm');
  if (f) f.reset();
  openModal('applyModal');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderJobs(btn.dataset.filter);
  });
});

if (document.getElementById('jobsGrid')) renderJobs('all');
