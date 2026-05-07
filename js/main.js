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
    'svc.h3.1': 'Construcción ecológica',
    'svc.p.1':  'Contamos con una larga lista de contratistas profesionales con los que nuestros ingenieros y arquitectos disfrutan trabajando en la mayoría de nuestros proyectos.',
    'svc.h3.2': 'Diseño y construcción',
    'svc.p.2':  'Nuestra especialización nos permite diseñar y construir cualquier tipo de proyecto, por lo que somos considerados los mejores del mercado.',
    'svc.h3.3': 'Servicios de construcción',
    'svc.p.3':  'La construcción ecológica pasiva proporciona servicios de construcción de alta calidad teniendo en cuenta todos los aspectos de eficiencia energética.',
    'svc.h3.4': 'Servicios previos a la construcción',
    'svc.p.4':  'Antes de que comience la construcción, dedicamos tiempo a la planificación inicial para sopesar de antemano todos los aspectos financieros y de eficiencia.',
    /* INDEX ABOUT SNIPPET */
    'about.tag':   'Sobre Nosotros',
    'about.h2':    'Más de 30 años creando el hogar de tus sueños',
    'about.quote': '"La perfección existe, es algo que se puede ver y sentir, son las villas que construimos".',
    'about.p':     'Somos una constructora ecológica que construye villas unifamiliares, adosadas y casas a medida, con un equipo de arquitectos, diseñadores y técnicos que combinan sus talentos para ofrecer la máxima calidad de construcción.',
    'about.li1':   '<strong>Diseño personalizado:</strong> cada villa refleja los gustos únicos de su propietario.',
    'about.li2':   '<strong>Tecnología Passive House:</strong> reducción de hasta el 90% en consumo energético.',
    'about.li3':   '<strong>Materiales ecológicos:</strong> seleccionados para garantizar sostenibilidad y durabilidad.',
    'about.btn':   'Conoce nuestro equipo →',
    /* INDEX FEATURED PROJECTS */
    'feat.tag':       'Proyectos Destacados',
    'feat.h2':        'Villas diseñadas a la perfección',
    'feat.lead':      'Cada proyecto es único, diseñado y construido a medida para reflejar los sueños de nuestros clientes.',
    'feat.badge.plan':'Sobre Plano',
    'feat.badge.lic': 'Con Licencia',
    'feat.c1.cat':    'Villa Unifamiliar',
    'feat.c1.desc':   'Diseño moderno de una planta con jardín perimetral, piscina y orientación sur para máximo aprovechamiento solar.',
    'feat.c2.cat':    'Villa Premium',
    'feat.c2.desc':   'Gran villa con piscina desbordante, bodega y domótica integral. Materiales premium de origen ecológico.',
    'feat.c3.cat':    'Urbanización',
    'feat.c3.desc':   '8 villas unifamiliares en parcelas de 500 m² en Granada capital. Licencia aprobada, inicio de obra inmediato.',
    'feat.rooms4':    '4 hab.',
    'feat.rooms5':    '5 hab.',
    'feat.bath3':     '3 baños',
    'feat.bath4':     '4 baños',
    'feat.units8':    '8 villas',
    'feat.viewbtn':   'Ver proyecto →',
    'feat.allplan':   'Todos los proyectos sobre plano →',
    'feat.alllic':    'Proyectos con licencia →',
    /* INDEX CTA BANNER */
    'cta.h2':  '¿Listo para construir tu villa perfecta?',
    'cta.p':   'Usted lo sueña y nosotros lo diseñamos. Contacte con nuestro equipo para recibir asesoramiento personalizado sin compromiso.',
    'cta.btn': 'Hablar con un experto →',
    /* FOOTER */
    'footer.tagline': 'Construimos villas ecológicas únicas, diseñadas a medida para hacer realidad los sueños de nuestros clientes desde hace más de 30 años.',
    'footer.col1':    'Sobre Nosotros',
    'footer.col2':    'Información',
    'footer.col3':    'Contacto',
    'footer.copy':    '© 2026 Ecological Passive Building · Todos los derechos reservados',

    /* ── SOBRE NOSOTROS ── */
    'sn.tag1':    'Nuestra historia',
    'sn.h2':      'Más de 30 años construyendo la perfección',
    'sn.quote':   '"La perfección existe, es algo que se puede ver y sentir, son las villas que construimos".',
    'sn.p1':      'Durante más de 30 años, la convicción de que la perfección existe nos ha impulsado a trabajar con mayor dedicación. Hoy, podemos afirmar con orgullo que nos especializamos en convertir los sueños de nuestros clientes en realidad.',
    'sn.p2':      'Somos una constructora ecológica que construye villas unifamiliares, adosadas y casas adosadas a medida, con un equipo de arquitectos, diseñadores y técnicos que combinan sus talentos para ofrecer la máxima calidad de construcción, creando el paraíso perfecto para disfrutar de una vida plena.',
    'sn.p3':      'Seamos realistas, usted desea una villa que sea un verdadero hogar para su familia, no una copia de la villa de otra persona, y por eso, el proceso de construcción se realiza en equipo. <strong>¡Usted lo sueña y nosotros lo diseñamos para usted!</strong>',
    'sn.badge':   'Entregados con éxito',
    'sn.stat1':   'Años de experiencia',
    'sn.stat2':   'Proyectos entregados',
    'sn.stat3':   'Certificación energética',
    'sn.stat4':   'Oficinas en Europa',
    'sn.tag2':    'Nuestros valores',
    'sn.h2_2':    'Lo que nos define',
    'sn.lead2':   'Cada villa que construimos es el resultado de estos pilares que guían cada decisión de nuestro equipo.',
    'sn.v1.h3':   'Arquitectura de vanguardia',
    'sn.v1.p':    'Diseños únicos y modernos que reflejan la personalidad y el estilo de vida de cada cliente, sin límites creativos.',
    'sn.v2.h3':   'Eficiencia energética',
    'sn.v2.p':    'Tecnología passive house que reduce hasta un 90% el consumo energético. Certificación A+ en todos nuestros proyectos.',
    'sn.v3.h3':   'Construcción sostenible',
    'sn.v3.p':    'Materiales ecológicos certificados (LEED, FSC) que minimizan el impacto ambiental y garantizan la salud del hogar.',
    'sn.v4.h3':   'Proceso en equipo',
    'sn.v4.p':    'Trabajamos codo con codo con el cliente en cada etapa: diseño, materiales, construcción y entrega de llaves.',
    'sn.v5.h3':   'Innovación tecnológica',
    'sn.v5.p':    'Utilizamos las últimas tecnologías en construcción: BIM, paneles SIP, ICF, geotermia y energía solar integrada.',
    'sn.v6.h3':   'Presencia internacional',
    'sn.v6.p':    'Oficinas en Granada, Málaga y Londres, atendiéndote tanto en España como en el Reino Unido con total fluidez.',
    'sn.tag3':    'Nuestro equipo',
    'sn.h2_3':    'Las personas detrás de cada villa',
    'sn.lead3':   'Un equipo multidisciplinar de profesionales apasionados por la construcción ecológica y el diseño de excelencia.',
    'sn.role1':   'Director General & Fundador',
    'sn.role2':   'Directora de Arquitectura',
    'sn.role3':   'Jefe de Obra Senior',
    'sn.cta.h2':  '¿Hablamos de tu proyecto?',
    'sn.cta.p':   'Nuestro equipo está listo para escucharte y diseñar la villa de tus sueños.',
    'sn.cta.btn': 'Contactar ahora →',

    /* ── MATERIALES ── */
    'mat.tag1':   'Calidad ecológica',
    'mat.h2':     'Materiales que cuidan tu hogar y el planeta',
    'mat.p1':     'Seleccionamos cuidadosamente cada material para garantizar el máximo rendimiento energético, la sostenibilidad medioambiental y la durabilidad de tu hogar durante generaciones.',
    'mat.p2':     'Todos nuestros materiales cuentan con certificaciones internacionales que avalan su respeto al medioambiente, su baja emisión de CO₂ y su contribución a la salud de los ocupantes.',
    'mat.tag2':   'Catálogo de materiales',
    'mat.h2_2':   'Cada material, una decisión consciente',
    'mat.c1.name':'Bloque ICF',
    'mat.c1.desc':'Bloques de hormigón de poliestireno expandido para aislamiento máximo y estructura robusta. Reduce hasta un 70% la pérdida de calor.',
    'mat.c1.tag': 'Estructura',
    'mat.c2.name':'Panel SIP',
    'mat.c2.desc':'Paneles estructurales aislantes de alta eficiencia para muros, cubiertas y suelos. Montaje rápido y precisión milimétrica.',
    'mat.c2.tag': 'Cerramiento',
    'mat.c3.name':'Celulosa reciclada',
    'mat.c3.desc':'Aislante térmico y acústico a base de papel reciclado. 100% ecológico, transpirable y libre de compuestos químicos nocivos.',
    'mat.c3.tag': 'Aislamiento',
    'mat.c4.name':'Madera certificada FSC',
    'mat.c4.desc':'Estructuras y acabados en madera procedente de bosques gestionados sosteniblemente. Sello FSC garantizado.',
    'mat.c4.tag': 'Estructura',
    'mat.c5.name':'Paneles fotovoltaicos',
    'mat.c5.desc':'Instalación de energía solar integrada en cubierta para autoconsumo total o parcial. Reduce la factura eléctrica hasta un 90%.',
    'mat.c5.tag': 'Energía',
    'mat.c6.name':'Sistema de geotermia',
    'mat.c6.desc':'Bomba de calor geotérmica para climatización ultra-eficiente aprovechando la temperatura constante del subsuelo.',
    'mat.c6.tag': 'Climatización',
    'mat.c7.name':'Triple acristalamiento',
    'mat.c7.desc':'Ventanas de triple vidrio con rotura de puente térmico para eliminar pérdidas energéticas y aislar del ruido exterior.',
    'mat.c7.tag': 'Carpintería',
    'mat.c8.name':'Cemento bajo en CO₂',
    'mat.c8.desc':'Cementos con áridos reciclados que reducen la huella de carbono de la cimentación hasta un 40%.',
    'mat.c8.tag': 'Cimentación',
    'mat.c9.name':'Ventilación con recuperación',
    'mat.c9.desc':'Sistema VMC de doble flujo que recupera más del 90% del calor del aire extraído, manteniendo la calidad del aire interior.',
    'mat.c9.tag': 'Ventilación',
    'mat.tag3':   'Eficiencia energética',
    'mat.h2_3':   'Construimos casas que producen su propia energía',
    'mat.p3':     'Nuestras viviendas están diseñadas bajo los estándares más exigentes de eficiencia energética, combinando el aislamiento pasivo con la generación activa de energía renovable.',
    'mat.f1':     '<strong>Certificación nZEB:</strong> consumo energético casi nulo conforme a la directiva europea.',
    'mat.f2':     '<strong>Calificación A+:</strong> la más alta clasificación energética en España.',
    'mat.f3':     '<strong>Ahorro hasta 90%:</strong> en factura eléctrica respecto a una vivienda convencional.',
    'mat.f4':     '<strong>Huella de carbono mínima:</strong> construcción y uso con impacto ambiental mínimo.',
    'mat.cta':    'Consultar especificaciones →',

    /* ── PROYECTOS SOBRE PLANO ── */
    'pp.tag':       'Diseña tu villa',
    'pp.h2':        'Elige tu modelo y personalízalo',
    'pp.lead':      'Selecciona uno de nuestros modelos base y nuestro equipo de arquitectos lo adaptará completamente a tus gustos, necesidades y terreno.',
    'pp.badge1':    'Disponible',
    'pp.badge2':    'Premium',
    'pp.c1.cat':    'Villa Unifamiliar',
    'pp.c1.desc':   'Diseño moderno de una planta con jardín perimetral y piscina. Orientación sur para máximo aprovechamiento solar pasivo.',
    'pp.c2.cat':    'Casa Adosada',
    'pp.c2.desc':   'Adosado de dos plantas con terraza privada, garaje integrado y sistema de geotermia. Certificación energética A+.',
    'pp.c3.cat':    'Villa Premium',
    'pp.c3.desc':   'Gran villa con piscina desbordante, bodega, cine y domótica integral. Materiales premium de origen 100% ecológico.',
    'pp.c4.cat':    'Villa Compacta',
    'pp.c4.desc':   'Solución eficiente para parcelas medianas. Diseño inteligente que maximiza el espacio interior y la luz natural.',
    'pp.c5.cat':    'Villa Dúplex',
    'pp.c5.desc':   'Dos viviendas independientes en un mismo edificio. Ideal para familias ampliadas o como inversión de alquiler turístico.',
    'pp.c6.cat':    'Villa Panorámica',
    'pp.c6.desc':   'Diseñada para terrenos en pendiente con vistas panorámicas. Piscina infinity, terrazas escalonadas y jardín mediterráneo.',
    'pp.btn':       'Solicitar información →',
    'pp.proc.tag':  'Proceso',
    'pp.proc.h2':   '¿Cómo funciona un proyecto sobre plano?',
    'pp.step1.h3':  'Consulta inicial',
    'pp.step1.p':   'Nos reunimos contigo para entender tus necesidades, gustos, terreno y presupuesto.',
    'pp.step2.h3':  'Diseño personalizado',
    'pp.step2.p':   'Nuestros arquitectos crean el diseño adaptado a ti, con renders 3D y planos detallados.',
    'pp.step3.h3':  'Construcción y entrega',
    'pp.step3.p':   'Gestionamos todo el proceso constructivo con seguimiento semanal hasta la entrega de llaves.',
    'pp.cta':       'Iniciar mi proyecto →',

    /* ── PROYECTOS CON LICENCIA ── */
    'pl.tag':       'Seguridad jurídica total',
    'pl.h2':        'Proyectos listos para comenzar obras',
    'pl.lead':      'Todos nuestros proyectos con licencia tienen la aprobación administrativa necesaria para iniciar la construcción de inmediato, garantizando tu inversión desde el primer día.',
    'pl.approved':  'Licencia aprobada',
    'pl.progress':  'En construcción',
    'pl.p1.name':   'Residencial El Encinar',
    'pl.p1.desc':   'Urbanización de 8 villas unifamiliares en parcelas individuales de 500 m² en Granada capital. Cada villa cuenta con jardín privado, garaje y zona de piscina. Inicio de obra inmediato disponible.',
    'pl.p2.name':   'Costa Luz Málaga',
    'pl.p2.desc':   'Complejo exclusivo de 4 adosados de lujo en primera línea de costa en Marbella. Incluye plazas de garaje, piscina comunitaria y jardines paisajísticos. Entrega estimada 2026.',
    'pl.p3.name':   'Villas La Cañada',
    'pl.p3.desc':   'Proyecto de 6 villas sostenibles en zona residencial tranquila de Alhaurín. Cada villa incluye jardín privado y sistema fotovoltaico integrado para autoconsumo total.',
    'pl.p4.name':   'Cortijo Moderno',
    'pl.p4.desc':   'Rehabilitación y obra nueva de cortijo andaluz con diseño contemporáneo. Materiales tradicionales combinados con tecnología passive house de última generación.',
    'pl.btn':       'Solicitar información →',
    'pl.why.tag':   '¿Por qué con licencia?',
    'pl.why.h2':    'Ventajas de comprar con licencia ya aprobada',
    'pl.why.f1':    '<strong>Inicio inmediato:</strong> no esperas meses por trámites administrativos.',
    'pl.why.f2':    '<strong>Seguridad jurídica:</strong> licencia municipal aprobada, cumple toda la normativa urbanística.',
    'pl.why.f3':    '<strong>Precio fijo:</strong> proyecto definido = estimación de costes precisa desde el primer momento.',
    'pl.why.f4':    '<strong>Plazos garantizados:</strong> con obra planificada los plazos de entrega son mucho más predecibles.',
    'pl.why.btn':   'Consultar disponibilidad →',

    /* ── CONTACTO ── */
    'ct.tag':         'Estamos aquí para ti',
    'ct.h2':          'Hablemos de tu proyecto',
    'ct.lead':        'Nuestro equipo está disponible para resolver todas tus dudas y ayudarte a dar el primer paso hacia tu villa perfecta.',
    'ct.office1':     '🇪🇸 Sede Central — Granada',
    'ct.office2':     '🇬🇧 Oficina Londres',
    'ct.office3':     '🏭 Almacén — Málaga',
    'ct.tel.label':   'NÚMERO DE TELÉFONO DE LA OFICINA',
    'ct.mob.label':   'NÚMERO DE TELÉFONO MÓVIL',
    'ct.email.label': 'CORREOS ELECTRÓNICOS',
    'ct.form.title':  'Envíanos un mensaje',
    'ct.form.sub':    'Te responderemos en menos de 24 horas laborables.',
    'ct.form.fname':  'Nombre *',
    'ct.form.lname':  'Apellidos *',
    'ct.form.email':  'Correo electrónico *',
    'ct.form.phone':  'Teléfono',
    'ct.form.subj':   'Asunto *',
    'ct.form.msg':    'Mensaje *',
    'ct.form.btn':    'Enviar mensaje →',
    'ct.form.ok':     '✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo muy pronto.',

    /* ── EMPLEO ── */
    'emp.tag1':   'Trabaja con nosotros',
    'emp.h2':     '¿Apasionado por la construcción sostenible?',
    'emp.p':      'En Ecological Passive Building buscamos profesionales comprometidos con la excelencia, la innovación y el cuidado del medioambiente. Formamos un equipo multidisciplinar donde cada persona aporta valor único.',
    'emp.f1':     '<strong>Proyectos únicos:</strong> cada villa es un reto diferente y una oportunidad de aprender.',
    'emp.f2':     '<strong>Formación continua:</strong> invertimos en el desarrollo profesional de nuestro equipo.',
    'emp.f3':     '<strong>Impacto real:</strong> contribuyes activamente a un futuro más sostenible con cada proyecto.',
    'emp.tag2':   'Ofertas actuales',
    'emp.h2_2':   'Posiciones abiertas',
    'emp.lead2':  'Consulta nuestras vacantes y envía tu candidatura. Respondemos a todos los perfiles recibidos.',
    'emp.all':    'Todos',
    'emp.tag3':   'Candidatura espontánea',
    'emp.h2_3':   '¿No encuentras tu perfil?',
    'emp.lead3':  'Si no ves una oferta que encaje contigo pero crees que puedes aportar valor a nuestro equipo, escríbenos igualmente. Guardamos todos los perfiles para futuras oportunidades.',
    'emp.spont':  'Enviar candidatura espontánea →',
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
    'svc.h3.1': 'Ecological construction',
    'svc.p.1':  'We have a long list of professional contractors with whom our engineers and architects enjoy working on the majority of our projects.',
    'svc.h3.2': 'Design & construction',
    'svc.p.2':  'Our specialisation allows us to design and build any type of project, which is why we are considered the best in the market.',
    'svc.h3.3': 'Construction services',
    'svc.p.3':  'Ecological passive construction provides high quality construction services taking into account all aspects of energy efficiency.',
    'svc.h3.4': 'Pre-construction services',
    'svc.p.4':  'Before construction begins, we spend time on initial planning to consider all financial and efficiency aspects in advance.',
    'about.tag':   'About Us',
    'about.h2':    'Over 30 years creating the home of your dreams',
    'about.quote': '"Perfection exists, it is something you can see and feel — it is the villas we build."',
    'about.p':     'We are an ecological builder constructing detached villas, townhouses and bespoke homes with a team of architects, designers and technicians combining their talents to deliver the highest quality construction.',
    'about.li1':   '<strong>Custom design:</strong> every villa reflects the unique tastes of its owner.',
    'about.li2':   '<strong>Passive House technology:</strong> up to 90% reduction in energy consumption.',
    'about.li3':   '<strong>Ecological materials:</strong> chosen to guarantee sustainability and durability.',
    'about.btn':   'Meet our team →',
    'feat.tag':       'Featured Projects',
    'feat.h2':        'Villas designed to perfection',
    'feat.lead':      'Every project is unique, designed and built bespoke to reflect our clients\' dreams.',
    'feat.badge.plan':'Off-Plan',
    'feat.badge.lic': 'Licensed',
    'feat.c1.cat':    'Detached Villa',
    'feat.c1.desc':   'Modern single-storey design with perimeter garden, pool and south-facing orientation for maximum solar gain.',
    'feat.c2.cat':    'Premium Villa',
    'feat.c2.desc':   'Grand villa with overflow pool, wine cellar and full home automation. Premium materials of ecological origin.',
    'feat.c3.cat':    'Development',
    'feat.c3.desc':   '8 detached villas on 500 m² plots in Granada city. Licence approved, immediate construction start.',
    'feat.rooms4':    '4 bed',
    'feat.rooms5':    '5 bed',
    'feat.bath3':     '3 baths',
    'feat.bath4':     '4 baths',
    'feat.units8':    '8 villas',
    'feat.viewbtn':   'View project →',
    'feat.allplan':   'All off-plan projects →',
    'feat.alllic':    'Licensed projects →',
    'cta.h2':  'Ready to build your perfect villa?',
    'cta.p':   'You dream it and we design it. Contact our team for personalised advice with no commitment.',
    'cta.btn': 'Speak to an expert →',
    'footer.tagline': 'We build unique ecological villas, custom-designed to make our clients\' dreams a reality for over 30 years.',
    'footer.col1':    'About Us',
    'footer.col2':    'Information',
    'footer.col3':    'Contact',
    'footer.copy':    '© 2026 Ecological Passive Building · All rights reserved',

    'sn.tag1':    'Our story',
    'sn.h2':      'Over 30 years building perfection',
    'sn.quote':   '"Perfection exists, it is something you can see and feel — it is the villas we build."',
    'sn.p1':      'For over 30 years, the conviction that perfection exists has driven us to work with greater dedication. Today, we can proudly say we specialise in turning our clients\' dreams into reality.',
    'sn.p2':      'We are an ecological builder constructing detached villas, townhouses and bespoke homes with a team of architects, designers and technicians combining their talents to deliver the highest quality construction, creating the perfect paradise for a fulfilling life.',
    'sn.p3':      'Let\'s be realistic — you want a villa that is a true home for your family, not a copy of someone else\'s villa, and that is why the construction process is carried out as a team. <strong>You dream it and we design it for you!</strong>',
    'sn.badge':   'Successfully delivered',
    'sn.stat1':   'Years of experience',
    'sn.stat2':   'Delivered projects',
    'sn.stat3':   'Energy certification',
    'sn.stat4':   'European offices',
    'sn.tag2':    'Our values',
    'sn.h2_2':    'What defines us',
    'sn.lead2':   'Every villa we build is the result of these pillars that guide every decision our team makes.',
    'sn.v1.h3':   'Avant-garde architecture',
    'sn.v1.p':    'Unique, modern designs that reflect the personality and lifestyle of each client, without creative limits.',
    'sn.v2.h3':   'Energy efficiency',
    'sn.v2.p':    'Passive house technology that reduces energy consumption by up to 90%. A+ certification on all our projects.',
    'sn.v3.h3':   'Sustainable construction',
    'sn.v3.p':    'Certified ecological materials (LEED, FSC) that minimise environmental impact and guarantee a healthy home.',
    'sn.v4.h3':   'Team process',
    'sn.v4.p':    'We work side by side with the client at every stage: design, materials, construction and key handover.',
    'sn.v5.h3':   'Technological innovation',
    'sn.v5.p':    'We use the latest construction technologies: BIM, SIP panels, ICF, geothermal energy and integrated solar power.',
    'sn.v6.h3':   'International presence',
    'sn.v6.p':    'Offices in Granada, Málaga and London, serving you in both Spain and the United Kingdom with full fluency.',
    'sn.tag3':    'Our team',
    'sn.h2_3':    'The people behind every villa',
    'sn.lead3':   'A multidisciplinary team of professionals passionate about ecological construction and excellence in design.',
    'sn.role1':   'CEO & Founder',
    'sn.role2':   'Head of Architecture',
    'sn.role3':   'Senior Site Manager',
    'sn.cta.h2':  'Shall we talk about your project?',
    'sn.cta.p':   'Our team is ready to listen and design the villa of your dreams.',
    'sn.cta.btn': 'Contact us now →',

    'mat.tag1':   'Ecological quality',
    'mat.h2':     'Materials that care for your home and the planet',
    'mat.p1':     'We carefully select every material to guarantee maximum energy performance, environmental sustainability and the durability of your home for generations.',
    'mat.p2':     'All our materials hold international certifications that validate their environmental respect, low CO₂ emissions and contribution to the health of occupants.',
    'mat.tag2':   'Materials catalogue',
    'mat.h2_2':   'Every material, a conscious decision',
    'mat.c1.name':'ICF Block',
    'mat.c1.desc':'Expanded polystyrene concrete blocks for maximum insulation and robust structure. Reduces heat loss by up to 70%.',
    'mat.c1.tag': 'Structure',
    'mat.c2.name':'SIP Panel',
    'mat.c2.desc':'High-efficiency structural insulated panels for walls, roofs and floors. Fast assembly and millimetre precision.',
    'mat.c2.tag': 'Cladding',
    'mat.c3.name':'Recycled cellulose',
    'mat.c3.desc':'Thermal and acoustic insulation made from recycled paper. 100% ecological, breathable and free of harmful chemicals.',
    'mat.c3.tag': 'Insulation',
    'mat.c4.name':'FSC certified timber',
    'mat.c4.desc':'Structures and finishes in timber from sustainably managed forests. FSC seal guaranteed.',
    'mat.c4.tag': 'Structure',
    'mat.c5.name':'Photovoltaic panels',
    'mat.c5.desc':'Roof-integrated solar energy installation for full or partial self-consumption. Reduces electricity bills by up to 90%.',
    'mat.c5.tag': 'Energy',
    'mat.c6.name':'Geothermal system',
    'mat.c6.desc':'Geothermal heat pump for ultra-efficient climate control using the constant temperature of the subsoil.',
    'mat.c6.tag': 'Climate control',
    'mat.c7.name':'Triple glazing',
    'mat.c7.desc':'Triple-pane windows with thermal break to eliminate energy losses and block external noise.',
    'mat.c7.tag': 'Joinery',
    'mat.c8.name':'Low-CO₂ cement',
    'mat.c8.desc':'Cements with recycled aggregates that reduce the carbon footprint of foundations by up to 40%.',
    'mat.c8.tag': 'Foundation',
    'mat.c9.name':'Heat recovery ventilation',
    'mat.c9.desc':'Double-flow VMC system that recovers more than 90% of the heat from extracted air, maintaining indoor air quality.',
    'mat.c9.tag': 'Ventilation',
    'mat.tag3':   'Energy efficiency',
    'mat.h2_3':   'We build homes that produce their own energy',
    'mat.p3':     'Our homes are designed to the most demanding energy efficiency standards, combining passive insulation with active renewable energy generation.',
    'mat.f1':     '<strong>nZEB certification:</strong> near-zero energy consumption in line with the European directive.',
    'mat.f2':     '<strong>A+ rating:</strong> the highest energy classification in Spain.',
    'mat.f3':     '<strong>Up to 90% savings:</strong> on electricity bills compared to a conventional home.',
    'mat.f4':     '<strong>Minimal carbon footprint:</strong> construction and use with minimum environmental impact.',
    'mat.cta':    'Request specifications →',

    'pp.tag':       'Design your villa',
    'pp.h2':        'Choose your model and customise it',
    'pp.lead':      'Select one of our base models and our team of architects will adapt it completely to your tastes, needs and plot.',
    'pp.badge1':    'Available',
    'pp.badge2':    'Premium',
    'pp.c1.cat':    'Detached Villa',
    'pp.c1.desc':   'Modern single-storey design with perimeter garden and pool. South-facing for maximum passive solar gain.',
    'pp.c2.cat':    'Townhouse',
    'pp.c2.desc':   'Two-storey townhouse with private terrace, integrated garage and geothermal system. A+ energy certification.',
    'pp.c3.cat':    'Premium Villa',
    'pp.c3.desc':   'Grand villa with overflow pool, wine cellar, cinema room and full home automation. 100% ecological premium materials.',
    'pp.c4.cat':    'Compact Villa',
    'pp.c4.desc':   'Efficient solution for medium plots. Intelligent design maximising interior space and natural light.',
    'pp.c5.cat':    'Duplex Villa',
    'pp.c5.desc':   'Two independent homes in one building. Ideal for extended families or as a holiday rental investment.',
    'pp.c6.cat':    'Panoramic Villa',
    'pp.c6.desc':   'Designed for sloping plots with panoramic views. Infinity pool, terraced levels and Mediterranean garden.',
    'pp.btn':       'Request information →',
    'pp.proc.tag':  'Process',
    'pp.proc.h2':   'How does an off-plan project work?',
    'pp.step1.h3':  'Initial consultation',
    'pp.step1.p':   'We meet with you to understand your needs, tastes, plot and budget.',
    'pp.step2.h3':  'Custom design',
    'pp.step2.p':   'Our architects create a design tailored to you, with 3D renders and detailed plans.',
    'pp.step3.h3':  'Construction & handover',
    'pp.step3.p':   'We manage the entire construction process with weekly updates until key handover.',
    'pp.cta':       'Start my project →',

    'pl.tag':       'Full legal certainty',
    'pl.h2':        'Projects ready to break ground',
    'pl.lead':      'All our licensed projects have the necessary administrative approval to begin construction immediately, protecting your investment from day one.',
    'pl.approved':  'Licence approved',
    'pl.progress':  'Under construction',
    'pl.p1.name':   'Residencial El Encinar',
    'pl.p1.desc':   'Development of 8 detached villas on individual 500 m² plots in Granada city. Each villa includes a private garden, garage and pool area. Immediate construction start available.',
    'pl.p2.name':   'Costa Luz Málaga',
    'pl.p2.desc':   'Exclusive complex of 4 luxury townhouses on the Marbella seafront. Includes parking spaces, communal pool and landscaped gardens. Estimated delivery 2026.',
    'pl.p3.name':   'Villas La Cañada',
    'pl.p3.desc':   'Project of 6 sustainable villas in a quiet residential area of Alhaurín. Each villa includes a private garden and integrated photovoltaic system for full self-consumption.',
    'pl.p4.name':   'Cortijo Moderno',
    'pl.p4.desc':   'Renovation and new build of an Andalusian farmhouse with contemporary design. Traditional materials combined with the latest passive house technology.',
    'pl.btn':       'Request information →',
    'pl.why.tag':   'Why licensed?',
    'pl.why.h2':    'Advantages of buying with an approved licence',
    'pl.why.f1':    '<strong>Immediate start:</strong> no waiting months for administrative procedures.',
    'pl.why.f2':    '<strong>Legal certainty:</strong> approved municipal licence, fully compliant with planning regulations.',
    'pl.why.f3':    '<strong>Fixed price:</strong> defined project = precise cost estimate from day one.',
    'pl.why.f4':    '<strong>Guaranteed timelines:</strong> with a planned build, delivery schedules are far more predictable.',
    'pl.why.btn':   'Check availability →',

    'ct.tag':         'We are here for you',
    'ct.h2':          'Let\'s talk about your project',
    'ct.lead':        'Our team is available to answer all your questions and help you take the first step towards your perfect villa.',
    'ct.office1':     '🇪🇸 Head Office — Granada',
    'ct.office2':     '🇬🇧 London Office',
    'ct.office3':     '🏭 Warehouse — Málaga',
    'ct.tel.label':   'OFFICE PHONE NUMBER',
    'ct.mob.label':   'MOBILE PHONE NUMBER',
    'ct.email.label': 'EMAIL ADDRESSES',
    'ct.form.title':  'Send us a message',
    'ct.form.sub':    'We will reply within 24 working hours.',
    'ct.form.fname':  'First name *',
    'ct.form.lname':  'Last name *',
    'ct.form.email':  'Email address *',
    'ct.form.phone':  'Phone',
    'ct.form.subj':   'Subject *',
    'ct.form.msg':    'Message *',
    'ct.form.btn':    'Send message →',
    'ct.form.ok':     '✅ Message sent successfully! We will be in touch very soon.',

    'emp.tag1':   'Work with us',
    'emp.h2':     'Passionate about sustainable construction?',
    'emp.p':      'At Ecological Passive Building we look for professionals committed to excellence, innovation and environmental care. We are a multidisciplinary team where every person brings unique value.',
    'emp.f1':     '<strong>Unique projects:</strong> every villa is a different challenge and an opportunity to learn.',
    'emp.f2':     '<strong>Continuous training:</strong> we invest in the professional development of our team.',
    'emp.f3':     '<strong>Real impact:</strong> you actively contribute to a more sustainable future with every project.',
    'emp.tag2':   'Current openings',
    'emp.h2_2':   'Open positions',
    'emp.lead2':  'Browse our vacancies and submit your application. We respond to every profile received.',
    'emp.all':    'All',
    'emp.tag3':   'Spontaneous application',
    'emp.h2_3':   'Don\'t see your profile?',
    'emp.lead3':  'If you don\'t see a role that fits you but believe you can add value to our team, write to us anyway. We keep all profiles for future opportunities.',
    'emp.spont':  'Send spontaneous application →',
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
    'svc.h3.1': 'Ecologische bouw',
    'svc.p.1':  'We hebben een uitgebreide lijst van professionele aannemers met wie onze ingenieurs en architecten graag samenwerken aan de meeste van onze projecten.',
    'svc.h3.2': 'Ontwerp en bouw',
    'svc.p.2':  'Onze specialisatie stelt ons in staat elk type project te ontwerpen en te bouwen, waardoor we als de besten op de markt worden beschouwd.',
    'svc.h3.3': 'Bouwdiensten',
    'svc.p.3':  'Ecologische passieve bouw biedt hoogwaardige bouwdiensten waarbij alle aspecten van energieëfficiëntie in aanmerking worden genomen.',
    'svc.h3.4': 'Diensten vóór de bouw',
    'svc.p.4':  'Voordat de bouw begint, besteden we tijd aan de initiële planning om alle financiële en efficiëntieaspecten van tevoren te evalueren.',
    'about.tag':   'Over Ons',
    'about.h2':    'Meer dan 30 jaar uw droomhuis creëren',
    'about.quote': '"Perfectie bestaat, het is iets wat je kunt zien en voelen — het zijn de villa\'s die we bouwen."',
    'about.p':     'Wij zijn een ecologische bouwer die vrijstaande villa\'s, rijtjeshuizen en maatwerk woningen bouwt met een team van architecten, ontwerpers en technici die hun talenten bundelen voor de hoogste bouwkwaliteit.',
    'about.li1':   '<strong>Persoonlijk ontwerp:</strong> elke villa weerspiegelt de unieke smaak van de eigenaar.',
    'about.li2':   '<strong>Passief Huis technologie:</strong> tot 90% minder energieverbruik.',
    'about.li3':   '<strong>Ecologische materialen:</strong> geselecteerd voor duurzaamheid en levensduur.',
    'about.btn':   'Maak kennis met ons team →',
    'feat.tag':       'Uitgelichte Projecten',
    'feat.h2':        'Villa\'s ontworpen tot in de perfectie',
    'feat.lead':      'Elk project is uniek, op maat ontworpen en gebouwd om de dromen van onze klanten te weerspiegelen.',
    'feat.badge.plan':'Op Tekening',
    'feat.badge.lic': 'Gelicentieerd',
    'feat.c1.cat':    'Vrijstaande Villa',
    'feat.c1.desc':   'Modern gelijkvloers ontwerp met perimeteruin, zwembad en zuidgerichte oriëntatie voor maximale zonnewinst.',
    'feat.c2.cat':    'Premium Villa',
    'feat.c2.desc':   'Grote villa met overloopzwembad, wijnkelder en volledige domotica. Premium materialen van ecologische oorsprong.',
    'feat.c3.cat':    'Ontwikkeling',
    'feat.c3.desc':   '8 vrijstaande villa\'s op kavels van 500 m² in Granada-stad. Vergunning goedgekeurd, directe bouwstart.',
    'feat.rooms4':    '4 slpk.',
    'feat.rooms5':    '5 slpk.',
    'feat.bath3':     '3 badk.',
    'feat.bath4':     '4 badk.',
    'feat.units8':    '8 villa\'s',
    'feat.viewbtn':   'Project bekijken →',
    'feat.allplan':   'Alle projecten op tekening →',
    'feat.alllic':    'Gelicentieerde projecten →',
    'cta.h2':  'Klaar om uw perfecte villa te bouwen?',
    'cta.p':   'U droomt het en wij ontwerpen het. Neem contact op met ons team voor persoonlijk advies zonder verplichtingen.',
    'cta.btn': 'Spreek met een expert →',
    'footer.tagline': 'Wij bouwen unieke ecologische villa\'s, op maat ontworpen om de dromen van onze klanten meer dan 30 jaar lang werkelijkheid te maken.',
    'footer.col1':    'Over Ons',
    'footer.col2':    'Informatie',
    'footer.col3':    'Contact',
    'footer.copy':    '© 2026 Ecological Passive Building · Alle rechten voorbehouden',

    'sn.tag1':    'Ons verhaal',
    'sn.h2':      'Meer dan 30 jaar perfectie bouwen',
    'sn.quote':   '"Perfectie bestaat, het is iets wat je kunt zien en voelen — het zijn de villa\'s die we bouwen."',
    'sn.p1':      'Al meer dan 30 jaar drijft de overtuiging dat perfectie bestaat ons aan om met meer toewijding te werken. Vandaag kunnen we trots zeggen dat we gespecialiseerd zijn in het omzetten van de dromen van onze klanten in werkelijkheid.',
    'sn.p2':      'Wij zijn een ecologische bouwer die vrijstaande villa\'s, rijtjeshuizen en maatwerk woningen bouwt met een team van architecten, ontwerpers en technici die hun talenten bundelen voor de hoogste bouwkwaliteit, het perfecte paradijs voor een vervuld leven.',
    'sn.p3':      'Laten we eerlijk zijn — u wilt een villa die een echt thuis is voor uw gezin, geen kopie van iemand anders zijn villa, en daarom wordt het bouwproces als een team uitgevoerd. <strong>U droomt het en wij ontwerpen het voor u!</strong>',
    'sn.badge':   'Met succes opgeleverd',
    'sn.stat1':   'Jaar ervaring',
    'sn.stat2':   'Opgeleverde projecten',
    'sn.stat3':   'Energiecertificering',
    'sn.stat4':   'Kantoren in Europa',
    'sn.tag2':    'Onze waarden',
    'sn.h2_2':    'Wat ons definieert',
    'sn.lead2':   'Elke villa die wij bouwen is het resultaat van deze pijlers die elke beslissing van ons team sturen.',
    'sn.v1.h3':   'Avant-garde architectuur',
    'sn.v1.p':    'Unieke, moderne ontwerpen die de persoonlijkheid en levensstijl van elke klant weerspiegelen, zonder creatieve beperkingen.',
    'sn.v2.h3':   'Energie-efficiëntie',
    'sn.v2.p':    'Passief huis technologie die het energieverbruik met maximaal 90% vermindert. A+ certificering op al onze projecten.',
    'sn.v3.h3':   'Duurzame bouw',
    'sn.v3.p':    'Gecertificeerde ecologische materialen (LEED, FSC) die de milieubelasting minimaliseren en een gezond huis garanderen.',
    'sn.v4.h3':   'Teamproces',
    'sn.v4.p':    'Wij werken zij aan zij met de klant in elke fase: ontwerp, materialen, bouw en sleuteloverdracht.',
    'sn.v5.h3':   'Technologische innovatie',
    'sn.v5.p':    'Wij gebruiken de nieuwste bouwtechnologieën: BIM, SIP-panelen, ICF, geothermie en geïntegreerde zonne-energie.',
    'sn.v6.h3':   'Internationale aanwezigheid',
    'sn.v6.p':    'Kantoren in Granada, Málaga en Londen, waar we u zowel in Spanje als in het Verenigd Koninkrijk volledig kunnen bedienen.',
    'sn.tag3':    'Ons team',
    'sn.h2_3':    'De mensen achter elke villa',
    'sn.lead3':   'Een multidisciplinair team van professionals die gepassioneerd zijn door ecologische bouw en uitstekend ontwerp.',
    'sn.role1':   'Algemeen Directeur & Oprichter',
    'sn.role2':   'Hoofd Architectuur',
    'sn.role3':   'Senior Uitvoerder',
    'sn.cta.h2':  'Zullen we het hebben over uw project?',
    'sn.cta.p':   'Ons team staat klaar om naar u te luisteren en de villa van uw dromen te ontwerpen.',
    'sn.cta.btn': 'Neem nu contact op →',

    'mat.tag1':   'Ecologische kwaliteit',
    'mat.h2':     'Materialen die zorgen voor uw huis en de planeet',
    'mat.p1':     'Wij selecteren elk materiaal zorgvuldig om maximale energieprestaties, milieuduurzaamheid en de levensduur van uw woning voor generaties te garanderen.',
    'mat.p2':     'Al onze materialen hebben internationale certificeringen die hun milieuvriendelijkheid, lage CO₂-uitstoot en bijdrage aan de gezondheid van de bewoners bevestigen.',
    'mat.tag2':   'Materialencatalogus',
    'mat.h2_2':   'Elk materiaal, een bewuste keuze',
    'mat.c1.name':'ICF-blok',
    'mat.c1.desc':'Geëxpandeerde polystyreen betonblokken voor maximale isolatie en robuuste structuur. Vermindert warmteverlies met maximaal 70%.',
    'mat.c1.tag': 'Structuur',
    'mat.c2.name':'SIP-paneel',
    'mat.c2.desc':'Hoogrendement constructieve isolatiepanelen voor wanden, daken en vloeren. Snelle montage en millimeternauwkeurigheid.',
    'mat.c2.tag': 'Gevel',
    'mat.c3.name':'Gerecyclede cellulose',
    'mat.c3.desc':'Thermische en akoestische isolatie op basis van gerecycled papier. 100% ecologisch, ademend en vrij van schadelijke chemicaliën.',
    'mat.c3.tag': 'Isolatie',
    'mat.c4.name':'FSC-gecertificeerd hout',
    'mat.c4.desc':'Constructies en afwerkingen in hout uit duurzaam beheerde bossen. FSC-keurmerk gegarandeerd.',
    'mat.c4.tag': 'Structuur',
    'mat.c5.name':'Fotovoltaïsche panelen',
    'mat.c5.desc':'In het dak geïntegreerde zonne-energieinstallatie voor volledig of gedeeltelijk eigen gebruik. Vermindert de energierekening met maximaal 90%.',
    'mat.c5.tag': 'Energie',
    'mat.c6.name':'Geothermisch systeem',
    'mat.c6.desc':'Geothermische warmtepomp voor ultra-efficiënte klimaatregeling met behulp van de constante temperatuur van de ondergrond.',
    'mat.c6.tag': 'Klimaatregeling',
    'mat.c7.name':'Drievoudige beglazing',
    'mat.c7.desc':'Driedubbel glas ramen met thermische onderbreking om energieverliezen te elimineren en omgevingsgeluid te blokkeren.',
    'mat.c7.tag': 'Schrijnwerk',
    'mat.c8.name':'Koolstofarme cement',
    'mat.c8.desc':'Cementen met gerecycleerde toeslagstoffen die de CO₂-voetafdruk van de fundering met maximaal 40% verminderen.',
    'mat.c8.tag': 'Fundering',
    'mat.c9.name':'Warmteterugwinning ventilatie',
    'mat.c9.desc':'Dubbelstrooms VMC-systeem dat meer dan 90% van de warmte uit de afvoerlucht terugwint en de binnenluchtkwaliteit behoudt.',
    'mat.c9.tag': 'Ventilatie',
    'mat.tag3':   'Energie-efficiëntie',
    'mat.h2_3':   'Wij bouwen huizen die hun eigen energie produceren',
    'mat.p3':     'Onze woningen zijn ontworpen volgens de strengste energie-efficiëntienormen, waarbij passieve isolatie wordt gecombineerd met actieve opwekking van hernieuwbare energie.',
    'mat.f1':     '<strong>nZEB-certificering:</strong> bijna nul energieverbruik conform de Europese richtlijn.',
    'mat.f2':     '<strong>A+-classificatie:</strong> de hoogste energieclassificatie in Spanje.',
    'mat.f3':     '<strong>Tot 90% besparing:</strong> op de energierekening vergeleken met een conventionele woning.',
    'mat.f4':     '<strong>Minimale CO₂-voetafdruk:</strong> bouw en gebruik met minimale milieu-impact.',
    'mat.cta':    'Specificaties opvragen →',

    'pp.tag':       'Ontwerp uw villa',
    'pp.h2':        'Kies uw model en personaliseer het',
    'pp.lead':      'Selecteer een van onze basismodellen en ons team van architecten past het volledig aan uw smaak, behoeften en kavel aan.',
    'pp.badge1':    'Beschikbaar',
    'pp.badge2':    'Premium',
    'pp.c1.cat':    'Vrijstaande Villa',
    'pp.c1.desc':   'Modern gelijkvloers ontwerp met perimeteruin en zwembad. Zuidgericht voor maximale passieve zonnewarmte.',
    'pp.c2.cat':    'Rijtjeshuis',
    'pp.c2.desc':   'Twee verdiepingen tellend rijtjeshuis met privéterras, inpandige garage en geothermisch systeem. A+ energiecertificering.',
    'pp.c3.cat':    'Premium Villa',
    'pp.c3.desc':   'Grote villa met overloopzwembad, wijnkelder, bioscoopzaal en volledige domotica. 100% ecologische premiummaterialen.',
    'pp.c4.cat':    'Compacte Villa',
    'pp.c4.desc':   'Efficiënte oplossing voor middelgrote kavels. Intelligent ontwerp dat de binnenruimte en het natuurlijk licht maximaliseert.',
    'pp.c5.cat':    'Duplexvilla',
    'pp.c5.desc':   'Twee onafhankelijke woningen in één gebouw. Ideaal voor uitgebreide gezinnen of als vakantieverhuurbelegging.',
    'pp.c6.cat':    'Panoramische Villa',
    'pp.c6.desc':   'Ontworpen voor hellende kavels met panoramisch uitzicht. Infinity-zwembad, terrasvormige niveaus en mediterrane tuin.',
    'pp.btn':       'Informatie aanvragen →',
    'pp.proc.tag':  'Proces',
    'pp.proc.h2':   'Hoe werkt een project op tekening?',
    'pp.step1.h3':  'Eerste consultatie',
    'pp.step1.p':   'Wij ontmoeten u om uw behoeften, smaak, kavel en budget te begrijpen.',
    'pp.step2.h3':  'Persoonlijk ontwerp',
    'pp.step2.p':   'Onze architecten maken een op u toegesneden ontwerp met 3D-renders en gedetailleerde tekeningen.',
    'pp.step3.h3':  'Bouw en oplevering',
    'pp.step3.p':   'Wij beheren het volledige bouwproces met wekelijkse updates tot de sleuteloverdracht.',
    'pp.cta':       'Mijn project starten →',

    'pl.tag':       'Volledige rechtszekerheid',
    'pl.h2':        'Projecten klaar om te beginnen',
    'pl.lead':      'Al onze gelicentieerde projecten hebben de nodige administratieve goedkeuring om onmiddellijk met de bouw te beginnen, uw investering vanaf dag één beschermend.',
    'pl.approved':  'Vergunning goedgekeurd',
    'pl.progress':  'In aanbouw',
    'pl.p1.name':   'Residencial El Encinar',
    'pl.p1.desc':   'Ontwikkeling van 8 vrijstaande villa\'s op individuele kavels van 500 m² in Granada-stad. Elke villa heeft een privétuin, garage en zwembadzone. Directe bouwstart beschikbaar.',
    'pl.p2.name':   'Costa Luz Málaga',
    'pl.p2.desc':   'Exclusief complex van 4 luxe rijtjeshuizen aan de Marbella-kust. Inclusief parkeerplaatsen, gemeenschappelijk zwembad en landschaptuinen. Geschatte oplevering 2026.',
    'pl.p3.name':   'Villas La Cañada',
    'pl.p3.desc':   'Project van 6 duurzame villa\'s in een rustige woonwijk van Alhaurín. Elke villa heeft een privétuin en geïntegreerd fotovoltaïsch systeem voor volledig eigen gebruik.',
    'pl.p4.name':   'Cortijo Moderno',
    'pl.p4.desc':   'Renovatie en nieuwbouw van een Andalusische boerderij met hedendaags ontwerp. Traditionele materialen gecombineerd met de nieuwste passive house-technologie.',
    'pl.btn':       'Informatie aanvragen →',
    'pl.why.tag':   'Waarom gelicentieerd?',
    'pl.why.h2':    'Voordelen van kopen met een goedgekeurde vergunning',
    'pl.why.f1':    '<strong>Directe start:</strong> geen maanden wachten op administratieve procedures.',
    'pl.why.f2':    '<strong>Rechtszekerheid:</strong> goedgekeurde gemeentelijke vergunning, volledig conform de stedenbouwkundige regelgeving.',
    'pl.why.f3':    '<strong>Vaste prijs:</strong> gedefinieerd project = nauwkeurige kostenraming vanaf dag één.',
    'pl.why.f4':    '<strong>Gegarandeerde termijnen:</strong> met een geplande bouw zijn opleveringstermijnen veel voorspelbaarder.',
    'pl.why.btn':   'Beschikbaarheid controleren →',

    'ct.tag':         'Wij zijn er voor u',
    'ct.h2':          'Laten we het over uw project hebben',
    'ct.lead':        'Ons team staat klaar om al uw vragen te beantwoorden en u te helpen de eerste stap te zetten naar uw perfecte villa.',
    'ct.office1':     '🇪🇸 Hoofdkantoor — Granada',
    'ct.office2':     '🇬🇧 Kantoor Londen',
    'ct.office3':     '🏭 Magazijn — Málaga',
    'ct.tel.label':   'KANTOORTELEFOON',
    'ct.mob.label':   'MOBIEL TELEFOONNUMMER',
    'ct.email.label': 'E-MAILADRESSEN',
    'ct.form.title':  'Stuur ons een bericht',
    'ct.form.sub':    'Wij antwoorden binnen 24 werkuren.',
    'ct.form.fname':  'Voornaam *',
    'ct.form.lname':  'Achternaam *',
    'ct.form.email':  'E-mailadres *',
    'ct.form.phone':  'Telefoon',
    'ct.form.subj':   'Onderwerp *',
    'ct.form.msg':    'Bericht *',
    'ct.form.btn':    'Bericht verzenden →',
    'ct.form.ok':     '✅ Bericht succesvol verzonden! Wij nemen zeer binnenkort contact met u op.',

    'emp.tag1':   'Werk met ons',
    'emp.h2':     'Gepassioneerd door duurzame bouw?',
    'emp.p':      'Bij Ecological Passive Building zoeken wij professionals die gecommitteerd zijn aan uitmuntendheid, innovatie en milieuzorg. Wij vormen een multidisciplinair team waar iedereen unieke waarde inbrengt.',
    'emp.f1':     '<strong>Unieke projecten:</strong> elke villa is een andere uitdaging en een kans om te leren.',
    'emp.f2':     '<strong>Voortdurende opleiding:</strong> wij investeren in de professionele ontwikkeling van ons team.',
    'emp.f3':     '<strong>Echte impact:</strong> u draagt actief bij aan een duurzamere toekomst met elk project.',
    'emp.tag2':   'Huidige vacatures',
    'emp.h2_2':   'Open posities',
    'emp.lead2':  'Bekijk onze vacatures en dien uw sollicitatie in. Wij reageren op elk ontvangen profiel.',
    'emp.all':    'Alle',
    'emp.tag3':   'Open sollicitatie',
    'emp.h2_3':   'Uw profiel niet gevonden?',
    'emp.lead3':  'Als u geen passende vacature ziet maar denkt waarde toe te kunnen voegen aan ons team, schrijf ons dan toch. Wij bewaren alle profielen voor toekomstige kansen.',
    'emp.spont':  'Open sollicitatie versturen →',
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
  document.documentElement.lang = lang;
}

/* attach click handlers immediately (navbar already in DOM) */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

/* apply saved language after footer is injected (DOMContentLoaded) */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('epb_lang') || 'es';
  applyLang(savedLang);
});


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
    submitBtn.textContent = '…';

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
      } else throw new Error('network');
    } catch {
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
    submitBtn.textContent = '…';

    const data = {
      puesto:       document.getElementById('modalJobTitle')?.textContent || '',
      nombre:       (applyForm.querySelector('#aFname')?.value || '') + ' ' + (applyForm.querySelector('#aLname')?.value || ''),
      email:        applyForm.querySelector('#aEmail')?.value || '',
      telefono:     applyForm.querySelector('#aPhone')?.value || '',
      presentacion: applyForm.querySelector('#aCover')?.value || '',
      cv:           applyForm.querySelector('#aCV')?.value || '',
      _subject:     'Nueva candidatura web – Ecological Passive Building',
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


/* ── 8. SCROLL REVEAL ──────────────────── */
function initScrollReveal() {
  const selectors = [
    '.section-header',
    '.split-text', '.split-img',
    '.feature-item',
    '.grid-3 > *', '.grid-2 > *',
    '.services-carousel',
    '.team-card', '.material-card', '.project-card', '.license-card', '.job-card',
    '.numbers-bar', '.cert-strip > *',
    '.office-card',
    '.contact-form-box', '.contact-info',
    'blockquote',
  ].join(', ');

  const els = document.querySelectorAll(selectors);
  els.forEach(el => el.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', initScrollReveal);


/* ── 9. SERVICES CAROUSEL ──────────────── */
function initServicesCarousel() {
  const track    = document.getElementById('servicesTrack');
  const prevBtn  = document.getElementById('svcPrev');
  const nextBtn  = document.getElementById('svcNext');
  const dotsWrap = document.getElementById('servicesDots');
  const progress = document.getElementById('svcProgress');
  if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

  const slides = track.querySelectorAll('.service-card');
  const total = slides.length;
  if (!total) return;

  /* slide is 84% wide → centered: leftOffset = (100 - 84)/2 = 8% */
  const SLIDE_W = 84;
  const OFFSET  = (100 - SLIDE_W) / 2; /* = 8 */

  let index = 0;
  let autoTimer;

  /* build dots */
  dotsWrap.innerHTML = '';
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
    d.setAttribute('aria-label', 'Slide ' + (i + 1));
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
  });

  function update() {
    track.style.transform = `translateX(calc(${OFFSET}% - ${index * SLIDE_W}%))`;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) =>
      d.classList.toggle('is-active', i === index)
    );
    restartProgress();
  }

  function restartProgress() {
    if (!progress) return;
    progress.classList.remove('run');
    /* force reflow so the animation restarts */
    void progress.offsetWidth;
    progress.classList.add('run');
  }

  function goTo(i) { index = (i + total) % total; update(); resetAuto(); }
  function next()  { goTo(index + 1); }
  function prev()  { goTo(index - 1); }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  /* keyboard nav */
  track.parentElement.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });

  /* swipe on touch */
  let startX = 0, deltaX = 0, justSwiped = false;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; deltaX = 0; }, { passive: true });
  track.addEventListener('touchmove',  e => { deltaX = e.touches[0].clientX - startX; }, { passive: true });
  track.addEventListener('touchend',   () => {
    if (Math.abs(deltaX) > 50) {
      (deltaX < 0 ? next : prev)();
      justSwiped = true;
      setTimeout(() => { justSwiped = false; }, 400);
    }
  });

  /* click on a non-active slide jumps to it */
  slides.forEach((s, i) => s.addEventListener('click', () => {
    if (justSwiped) return;
    if (i !== index) goTo(i);
  }));

  /* autoplay — runs continuously, even on hover */
  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(next, 6000);
  }

  update();
  resetAuto();
}

document.addEventListener('DOMContentLoaded', initServicesCarousel);
