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
    'hero.tagline': 'hacemos tu mundo <span style="color:#4caf50">VERDE</span> de nuevo',
    'hero.eyebrow': 'CONSTRUCTOR ECOLÓGICO PREMIUM',
    'hero.h1':      'Casas Pasivas y Villas <em>Ecológicas</em>',
    'hero.p':       'Arquitectos · Diseñadores · Constructores. Más de 30 años convirtiendo sueños en villas ecológicas únicas, en perfecta armonía con la naturaleza.',
    'hero.btn1':    'Sobre Nosotros →',
    'hero.btn2':    'Ver Proyectos',
    'hero.stat1l':  'Años de experiencia',
    'hero.stat2l':  'Proyectos entregados',
    'hero.stat3l':  'Certificación energética',
    'hero.stat4l':  'Países',
    /* SERVICES */
    'svc.h3.1': 'Construcción ecológica',
    'svc.p.1':  '¡Tenemos una larga lista de contratistas profesionales con los que nuestros ingenieros y arquitectos disfrutan trabajando en la mayoría de nuestros proyectos!',
    'svc.h3.2': 'Diseño y construcción',
    'svc.p.2':  'Nuestra especialización nos permite diseñar y construir cualquier tipo de proyecto, por lo que somos considerados los mejores del mercado.',
    'svc.h3.3': 'Servicios de construcción',
    'svc.p.3':  'La construcción ecológica pasiva proporciona servicios de construcción de alta calidad teniendo en cuenta todos los aspectos de eficiencia energética.',
    'svc.h3.4': 'Servicios previos a la construcción',
    'svc.p.4':  'Antes de que comience la construcción, dedicamos tiempo a la planificación inicial para sopesar de antemano todos los aspectos financieros y de eficiencia.',
    /* INDEX ABOUT SNIPPET */
    'about.tag':   'Sobre Nosotros',
    'about.h2':    'Más de 30 años perfeccionando construcciones',
    'about.quote': '"La perfección existe, es algo que se puede ver y sentir: son las villas que construimos."',
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
    'sn.h2':      'Más de 30 años perfeccionando construcciones',
    'sn.quote':   '"La perfección existe, es algo que se puede ver y sentir: son las villas que construimos."',
    'sn.p1':      'Desde hace más de 30 años, la convicción de que la perfección existe nos impulsa a trabajar con mayor dedicación. Hoy podemos decir con orgullo que nos especializamos en convertir los sueños de nuestros clientes en realidad.',
    'sn.p2':      'Somos una empresa de construcción ecológica que construye villas y casas adosadas ecológicas independientes a medida con un equipo de arquitectos, diseñadores y técnicos que combinan sus talentos para ofrecer una construcción de la más alta calidad, creando el paraíso perfecto para una vida plena.',
    'sn.p3':      'Seamos realistas: usted quiere una villa que sea un verdadero hogar para su familia, no una copia de la villa de otra persona, y es por eso que el proceso de construcción se lleva a cabo en equipo.',
    'sn.dream':   '¡Tú lo sueñas y nosotros lo diseñamos para ti!',
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
    'pp.h2':        'Tu villa ecológica, diseñada y construida sobre plano',
    'pp.lead':      'Te presentamos uno de nuestros proyectos sobre plano. Y si buscas algo único, diseñamos y construimos tu villa ecológica totalmente a medida, según tu terreno, tus gustos y tus necesidades.',
    'pp.badge1':    'Disponible',
    'pp.badge2':    'Premium',
    'pp.v38.cat':   'Villa de lujo sobre plano',
    'pp.v38.desc':  'Villa de lujo sobre plano en el exclusivo Marbella Club Golf (Benahavís), sobre una parcela de 6.000 m² con vistas al mar y al golf. Proyecto y licencias aprobados.',
    'pp.v38.beds':  '5 dormitorios',
    'pp.v38.baths': '5 baños',
    'pp.v38.toilet': '1 aseo',
    'pp.moreinfo':  'Más información →',
    'pp.v38.modal.desc': 'Proyecto sobre plano con licencias aprobadas en una de las zonas más exclusivas de Marbella: el Marbella Club Golf, en Benahavís. Se levanta sobre una parcela de 6.000 m² con vistas al mar, al golf y a la casa club. La urbanización, con seguridad de alto nivel, cuenta con centro ecuestre, casa club y un prestigioso campo de golf de 18 hoyos con más de 70 años de historia. Integrada en la ladera y rodeada de 5.000 m² de bosque, la villa se distribuye en 3 plantas con 770 m² interiores y 357 m² de terrazas.',
    'pp.v38.f1':    '<strong>Planta inferior:</strong> bodega, garaje para 5 coches, gimnasio y 3 suites con vestidor y baño, con vistas al bosque.',
    'pp.v38.f2':    '<strong>Planta principal:</strong> salón, comedor y dos cocinas con orientación sur, y piscina climatizada de 75 m² rebosante por tres lados.',
    'pp.v38.f3':    '<strong>Planta superior:</strong> dormitorio principal en suite (84 m²) con 127 m² de terrazas, jacuzzi y pérgola bioclimática.',
    'pp.v38.f4':    '<strong>Ubicación Zen:</strong> a 15 km de Puerto Banús, 4 km de Cancelada y 13 km de Estepona, con ventanales de suelo a techo integrados en la naturaleza.',
    'pp.modal.contactbtn': 'Solicitar información sobre esta villa →',
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
    'pl.spec.surf': 'Superficie',
    'pl.spec.bed':  'Dormitorios',
    'pl.spec.loc':  'Ubicación',
    'pl.v005.desc': 'Villa pasiva de lujo sobre plano en primera línea de golf en La Cala Golf (La Cala de Mijas), a 6,7 km de la playa. Proyecto y licencias aprobados: obra lista para empezar.',
    'pl.v005.cat':  'Villa pasiva — 1ª línea de golf',
    'pl.v005.modal.desc': 'Villa ecológica de lujo sobre plano en primera línea de golf en La Cala Golf, a 6,7 km de las playas de La Cala de Mijas. Proyecto y licencias aprobados: la construcción puede comenzar cuando el cliente lo desee. Se distribuye en 2 plantas más un amplio solárium con terraza y piscina, e incluye 5 dormitorios, un estudio/dormitorio, 3 baños, aseo de invitados y cocina totalmente equipada.',
    'pl.v005.f1':   '<strong>Envolvente passive house:</strong> estanqueidad al aire, diseño sin puentes térmicos y aislamiento excepcional.',
    'pl.v005.f2':   '<strong>Climatización eficiente:</strong> aerotermia, aire acondicionado y ventilación con recuperación de calor de alto rendimiento.',
    'pl.v005.f3':   '<strong>Acabados premium:</strong> gres porcelánico GRESPANIA (1200×1200, 800×800, 600×600) y revestimientos COVERLAM; baños totalmente equipados.',
    'pl.v005.f4':   '<strong>Llave en mano:</strong> diseñamos y construimos a tu medida, en construcción ecológica o tradicional, según tus ideas.',
    'pl.v043.desc': 'VILLA SANTIAGO: villa de lujo de una sola planta sobre una parcela de 2.772 m² en la exclusiva zona Kings & Queens de Sotogrande (Cádiz). Licencia y proyecto aprobados.',
    'pl.v043.cat':  'Villa de lujo — Sotogrande',
    'pl.v043.modal.desc': 'Conocida como VILLA SANTIAGO, se ubica en una parcela de 2.772 m² en la exclusiva zona Kings & Queens de Sotogrande (Cádiz), uno de los enclaves residenciales más exclusivos de Europa. Combina simetrías, patios y ritmos clásicos con espacios contemporáneos y tecnología de vanguardia, como ventanas practicables que transforman las estancias en porches. A pocos minutos de playas de ensueño y del prestigioso Real Club de Golf Sotogrande.',
    'pl.v043.f1':   '<strong>Diseño en una sola planta:</strong> 6 dormitorios con baño en suite, pensado para el confort y la funcionalidad.',
    'pl.v043.f2':   '<strong>Casa de invitados opcional:</strong> 2 dormitorios y 2 baños adicionales, independientes y privados.',
    'pl.v043.f3':   '<strong>Zonas exteriores:</strong> tres salones al aire libre, piscina, zona chill-out en la azotea y barbacoa empotrada en el patio.',
    'pl.v043.f4':   '<strong>Deporte y bienestar:</strong> pista de pádel con paredes de cristal, plataforma de yoga, gimnasio al aire libre y duchas exteriores.',
    'pl.v049.desc': 'Villa contemporánea sobre plano en Atalaya de Río Verde, a poca distancia a pie de Puerto Banús. Licencia y proyecto aprobados. Doble altura y vistas al mar.',
    'pl.v049.cat':  'Villa contemporánea — Puerto Banús',
    'pl.v049.modal.desc': 'Villa contemporánea sobre plano en Atalaya de Río Verde, a poca distancia a pie de Puerto Banús. Licencia y proyecto aprobados. Arquitectura de doble altura con grandes ventanales, ascensor que conecta el sótano con la azotea de 88 m², y vistas excepcionales al mar y a Puerto Banús. Se distribuye en planta baja, primera planta, sótano y azotea, con piscina de 4×14 m y carport para 3 coches.',
    'pl.v049.f1':   '<strong>Planta baja:</strong> salón diáfano de 77 m² de doble altura, cocina abierta con comedor, lavadero y un dormitorio en suite.',
    'pl.v049.f2':   '<strong>Primera planta:</strong> entresuelo de 22 m² con vistas al mar, dormitorio principal con vestidor y baño, y 2 dormitorios más en suite.',
    'pl.v049.f3':   '<strong>Sótano de 196 m²:</strong> gimnasio, sala de juegos, bar y bodega, con patios ingleses que aportan luz natural.',
    'pl.v049.f4':   '<strong>Azotea de 88 m²:</strong> accesible por ascensor; piscina de 4×14 m y carport para 3 coches.',
    'pl.spec.price': 'Precio',
    'pl.moreinfo':  'Más información →',
    'pl.modal.contactbtn': 'Solicitar información sobre esta villa →',
    'pl.btn':       'Solicitar información →',
    'pl.why.tag':   '¿Por qué con licencia?',
    'pl.why.h2':    'Ventajas de comprar con licencia ya aprobada',
    'pl.why.f1':    '<strong>Inicio inmediato:</strong> no esperas meses por trámites administrativos.',
    'pl.why.f2':    '<strong>Seguridad jurídica:</strong> licencia municipal aprobada, cumple toda la normativa urbanística.',
    'pl.why.f3':    '<strong>Precio fijo:</strong> proyecto definido = estimación de costes precisa desde el primer momento.',
    'pl.why.f4':    '<strong>Plazos garantizados:</strong> con obra planificada los plazos de entrega son mucho más predecibles.',
    'pl.why.btn':   'Consultar disponibilidad →',

    /* ── CONTACTO ── */
    'ct.companyname': 'CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.',
    'ct.tag':         'Estamos aquí para ti',
    'ct.h2':          'Hablemos de tu proyecto',
    'ct.lead':        'Nuestro equipo está disponible para resolver todas tus dudas y ayudarte a dar el primer paso hacia tu villa perfecta.',
    'ct.office1':     '🇪🇸 Sede Central — España',
    'ct.office2':     '🇬🇧 Oficina Londres',
    'ct.office3':     '🏭 Almacén — España',
    'ct.office4':     '🇪🇸 Oficina Granada — España',
    'ct.tel.label':   'TELÉFONO OFICINA',
    'ct.mob.label':   'MÓVILES',
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
    'ct.msg.ph':      'Cuéntanos sobre tu proyecto, terreno, necesidades…',
    'ct.subj.placeholder': 'Selecciona un asunto…',
    'ct.subj.1':      'Información sobre proyectos sobre plano',
    'ct.subj.2':      'Información sobre proyectos con licencia',
    'ct.subj.3':      'Presupuesto personalizado',
    'ct.subj.4':      'Materiales y construcción',
    'ct.subj.5':      'Consulta general',
    'ct.subj.6':      'Otros',

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
    'emp.f.arch':   'Arquitectura',
    'emp.f.site':   'Obra',
    'emp.f.admin':  'Administración',
    'emp.f.sales':  'Comercial',
    'emp.empty':    'No hay ofertas en esta categoría actualmente.',
    'emp.published':'Publicado:',
    'emp.apply':    'Aplicar →',
    'emp.apply.send':'Enviar candidatura →',
    'emp.apply.ok': '✅ ¡Candidatura enviada! Revisaremos tu perfil y nos pondremos en contacto contigo.',
    'emp.cover.label':'Carta de presentación *',
    'emp.cover.ph':   'Cuéntanos por qué eres el candidato ideal…',
    'emp.cv.label':   'Enlace a CV o portfolio (LinkedIn, etc.)',
    'emp.cvfile.label':'Adjuntar CV (PDF, Word) — opcional',
    'emp.cvfile.hint':'Tamaño máximo 5 MB.',
    'emp.cvfile.tooBig':'El archivo es demasiado grande. Tamaño máximo 5 MB.',
    'emp.ph.fname':   'Tu nombre',
    'emp.ph.lname':   'Tus apellidos',
    /* ── FOOTER (extra) ── */
    'footer.addr':    'Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, España',
    /* ── COOKIE BANNER ── */
    'cookie.text':    'Utilizamos cookies propias y de terceros (Google Analytics) para analizar el tráfico y mejorar nuestros servicios. Puedes aceptarlas o rechazarlas. Más info en nuestra <a href="politica-cookies.html">Política de cookies</a>.',
    'cookie.accept':  'Aceptar todas',
    'cookie.reject':  'Solo necesarias',

    /* ── LEGAL — común ── */
    'legal.updated':  'Última actualización: mayo de 2026',

    /* ── AVISO LEGAL ── */
    'al.title':  'Aviso Legal',
    'al.1.h':    '1. Datos identificativos del titular',
    'al.1.p':    'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se pone en conocimiento de los usuarios la siguiente información:<br><br><strong>Razón social:</strong> CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.<br><strong>Nombre comercial:</strong> Ecological Passive Building<br><strong>CIF:</strong> B-88873567<br><strong>Domicilio social:</strong> Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, España<br><strong>Teléfono:</strong> <a href="https://wa.me/34951661189" style="color:var(--green-mid);">+34 951 661 189</a><br><strong>Correo electrónico:</strong> <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a><br><strong>Sitio web:</strong> www.ecologicalpassivebuilding.es',
    'al.2.h':    '2. Objeto y ámbito de aplicación',
    'al.2.p':    'El presente aviso legal regula el uso del sitio web <strong>www.ecologicalpassivebuilding.es</strong> (en adelante, "el Sitio Web"), titularidad de CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L. El acceso y uso del Sitio Web implica la aceptación plena y sin reservas de las presentes condiciones. Si no está de acuerdo con ellas, le rogamos que abandone el Sitio Web.',
    'al.3.h':    '3. Condiciones de uso',
    'al.3.p':    'El usuario se compromete a hacer un uso adecuado de los contenidos y servicios del Sitio Web y, en particular, a no emplearlos para:',
    'al.3.ul':   '<li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li><li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico o que atente contra los derechos humanos.</li><li>Provocar daños en los sistemas físicos y lógicos del titular o de terceros.</li><li>Introducir o difundir virus informáticos o cualquier otro sistema físico o lógico que pueda producir daños.</li><li>Intentar acceder, utilizar y/o manipular los datos del titular, terceros proveedores u otros usuarios.</li>',
    'al.4.h':    '4. Propiedad intelectual e industrial',
    'al.4.p1':   'Todos los contenidos del Sitio Web —incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente— son propiedad intelectual de <strong>CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.</strong> o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.',
    'al.4.p2':   'Queda expresamente prohibida la reproducción, distribución, comunicación pública y transformación de la totalidad o parte de los contenidos del Sitio Web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización previa y por escrito del titular.',
    'al.5.h':    '5. Exclusión de responsabilidad',
    'al.5.p':    'El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo:',
    'al.5.ul':   '<li>Errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</li><li>El uso que los usuarios hagan de los materiales del Sitio Web, ya sean prohibidos o permitidos, en infracción de los derechos de propiedad intelectual e industrial del titular.</li><li>Los daños producidos a equipos informáticos durante el acceso al Sitio Web.</li><li>Los contenidos de páginas de terceros a las que se pueda acceder a través de enlaces desde el Sitio Web.</li>',
    'al.6.h':    '6. Legislación aplicable y jurisdicción',
    'al.6.p':    'Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier conflicto o controversia derivada del acceso o uso del Sitio Web, las partes se someten a los Juzgados y Tribunales de la ciudad de <strong>Granada</strong>, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, salvo que la normativa aplicable establezca otro fuero imperativo.',
    'al.7.h':    '7. Modificación del aviso legal',
    'al.7.p':    'El titular se reserva el derecho a modificar, en cualquier momento y sin previo aviso, el presente aviso legal, así como cualesquiera otras condiciones particulares. Las modificaciones entrarán en vigor desde su publicación en el Sitio Web. Le recomendamos revisar periódicamente esta página.',

    /* ── POLÍTICA DE PRIVACIDAD ── */
    'pp.title':  'Política de Privacidad',
    'pp.1.h':    '1. Responsable del tratamiento',
    'pp.1.p':    '<strong>Denominación social:</strong> CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.<br><strong>Nombre comercial:</strong> Ecological Passive Building<br><strong>CIF:</strong> B-88873567<br><strong>Domicilio social:</strong> Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, España<br><strong>Email:</strong> <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a><br><strong>Teléfono:</strong> <a href="https://wa.me/34951661189" style="color:var(--green-mid);">+34 951 661 189</a>',
    'pp.2.h':    '2. Datos que recopilamos',
    'pp.2.p':    'Recopilamos los datos personales que usted nos facilita voluntariamente a través de los formularios de nuestra web:',
    'pp.2.ul':   '<li><strong>Formulario de contacto:</strong> nombre, apellidos, correo electrónico, teléfono (opcional), asunto y mensaje.</li><li><strong>Formulario de candidatura de empleo:</strong> nombre, apellidos, correo electrónico, teléfono (opcional), carta de presentación y enlace a CV/portfolio.</li><li><strong>Candidatura espontánea:</strong> datos incluidos en el correo electrónico que nos envíe.</li><li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y duración de la visita (datos anónimos vía Google Analytics).</li>',
    'pp.3.h':    '3. Finalidad del tratamiento',
    'pp.3.p':    'Tratamos sus datos con las siguientes finalidades:',
    'pp.3.ul':   '<li>Atender y gestionar las consultas, solicitudes de información y presupuestos que nos remite.</li><li>Gestionar los procesos de selección de personal cuando solicita alguna de nuestras ofertas de empleo o envía una candidatura espontánea.</li><li>Mejorar nuestros servicios y la experiencia de navegación a través de estadísticas anónimas.</li><li>Cumplir con las obligaciones legales que nos sean aplicables.</li>',
    'pp.4.h':    '4. Base legal del tratamiento',
    'pp.4.p':    'La base legal para el tratamiento de sus datos es el <strong>consentimiento</strong> que usted otorga al enviarnos el formulario (art. 6.1.a RGPD), así como el <strong>interés legítimo</strong> del responsable para la gestión de consultas comerciales (art. 6.1.f RGPD). Para las candidaturas de empleo, la base legal es la ejecución de medidas precontractuales a petición del interesado (art. 6.1.b RGPD).',
    'pp.5.h':    '5. Conservación de los datos',
    'pp.5.p':    'Conservaremos sus datos durante el tiempo necesario para atender su solicitud y, posteriormente, durante los plazos legales de prescripción aplicables. Las candidaturas de empleo se conservarán durante un máximo de <strong>12 meses</strong> desde su recepción, salvo que usted solicite su supresión antes.',
    'pp.6.h':    '6. Comunicación de datos a terceros',
    'pp.6.p':    'No cedemos sus datos personales a terceros, salvo obligación legal. Para el envío de formularios utilizamos el servicio <strong>FormSubmit</strong> (formsubmit.co), que actúa como encargado del tratamiento bajo acuerdo de confidencialidad. Para estadísticas de navegación utilizamos <strong>Google Analytics</strong>, servicio de Google LLC, que puede transferir datos a servidores en EE.UU. bajo las garantías del Marco de Privacidad de Datos UE–EE.UU.',
    'pp.7.h':    '7. Sus derechos',
    'pp.7.p':    'Conforme al RGPD y la LOPDGDD, usted tiene derecho a:',
    'pp.7.ul':   '<li><strong>Acceso:</strong> conocer qué datos personales suyos tratamos.</li><li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li><li><strong>Supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li><li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li><li><strong>Limitación:</strong> solicitar la restricción del tratamiento de sus datos.</li><li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado y legible por máquina.</li><li><strong>Retirar el consentimiento</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>',
    'pp.7.p2':   'Para ejercer estos derechos, puede dirigirse a: <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a>. También tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos</strong> (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.',
    'pp.8.h':    '8. Seguridad',
    'pp.8.p':    'Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos contra el acceso no autorizado, la pérdida accidental, la destrucción o el daño, de conformidad con el artículo 32 del RGPD.',
    'pp.9.h':    '9. Cambios en esta política',
    'pp.9.p':    'Podemos revisar esta política de privacidad periódicamente. La versión actualizada siempre estará disponible en esta página. Le recomendamos revisarla con regularidad.',

    /* ── POLÍTICA DE COOKIES ── */
    'pc.title':  'Política de Cookies',
    'pc.1.h':    '1. ¿Qué son las cookies?',
    'pc.1.p':    'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Permiten que el sitio recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que visite el sitio o navegue de una página a otra.',
    'pc.2.h':    '2. ¿Qué cookies utilizamos?',
    'pc.2.p':    'En <strong>Ecological Passive Building</strong> utilizamos las siguientes categorías de cookies:',
    'pc.table.name':     'Nombre',
    'pc.table.type':     'Tipo',
    'pc.table.purpose':  'Finalidad',
    'pc.table.duration': 'Duración',
    'pc.r1.type':        'Técnica / Funcional',
    'pc.r1.purpose':     'Almacena el idioma seleccionado por el usuario (ES, EN o NL)',
    'pc.r1.duration':    'Sesión / Persistente',
    'pc.r2.type':        'Analítica (Google Analytics)',
    'pc.r2.purpose':     'Estadísticas anónimas de visitas y comportamiento de navegación',
    'pc.r2.duration':    '2 años / 24 horas',
    'pc.r3.type':        'Analítica / Publicidad',
    'pc.r3.purpose':     'Vincula la actividad de la sesión con campañas de Google Ads',
    'pc.r3.duration':    '90 días',
    'pc.3.h':    '3. Cookies técnicas y estrictamente necesarias',
    'pc.3.p':    'Estas cookies son imprescindibles para el correcto funcionamiento del sitio web. Sin ellas, no podríamos ofrecerle algunos servicios como recordar el idioma seleccionado. No requieren su consentimiento previo conforme al artículo 22.2 de la LSSI.',
    'pc.4.h':    '4. Cookies analíticas',
    'pc.4.p':    'Utilizamos Google Analytics para obtener información estadística anónima sobre el uso del sitio. Los datos recopilados son agregados y no permiten identificarle personalmente. Puede optar por no ser rastreado mediante la extensión de inhabilitación de Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" style="color:var(--green-mid);">tools.google.com/dlpage/gaoptout</a>.',
    'pc.5.h':    '5. ¿Cómo puede controlar las cookies?',
    'pc.5.p':    'Puede configurar su navegador para rechazar todas o algunas cookies, o para que le avise cuando se envíen. Tenga en cuenta que si desactiva o rechaza las cookies, algunas partes del sitio web pueden volverse inaccesibles o no funcionar correctamente.',
    'pc.6.h':    '6. Actualizaciones de esta política',
    'pc.6.p':    'Podemos actualizar esta política de cookies para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o reglamentarias. Le recomendamos que revise periódicamente esta página para estar informado sobre nuestro uso de cookies.',
    'pc.7.h':    '7. Contacto',
    'pc.7.p':    'Si tiene alguna pregunta sobre nuestro uso de cookies, puede contactarnos en:',
    'pc.7.p2':   '<strong>CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.</strong><br>Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, España<br>Email: <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a>',
  },

  en: {
    'nav.home':     'Home',
    'nav.about':    'About Us',
    'nav.plan':     'Off-Plan Projects',
    'nav.license':  'Licensed Projects',
    'nav.materials':'Materials',
    'nav.jobs':     'Jobs',
    'nav.contact':  'Contact',
    'hero.tagline': 'we make your world <span style="color:#4caf50">GREEN</span> again',
    'hero.eyebrow': 'PREMIUM ECOLOGICAL CONSTRUCTOR',
    'hero.h1':      'Passive Houses &amp; Ecological <em>Villas</em>',
    'hero.p':       'Architects · Designers · Constructors. Over 30 years turning dreams into unique ecological villas, in perfect harmony with nature.',
    'hero.btn1':    'About Us →',
    'hero.btn2':    'View Projects',
    'hero.stat1l':  'Years of experience',
    'hero.stat2l':  'Delivered projects',
    'hero.stat3l':  'Energy certification',
    'hero.stat4l':  'Countries',
    'svc.h3.1': 'Ecological construction',
    'svc.p.1':  'We have a long list of professional contractors with whom our engineers and architects enjoy working on the majority of our projects!',
    'svc.h3.2': 'Design & construction',
    'svc.p.2':  'Our specialisation allows us to design and build any type of project, which is why we are considered the best in the market.',
    'svc.h3.3': 'Construction services',
    'svc.p.3':  'Ecological passive construction provides high quality construction services taking into account all aspects of energy efficiency.',
    'svc.h3.4': 'Pre-construction services',
    'svc.p.4':  'Before construction begins, we spend time on initial planning to consider all financial and efficiency aspects in advance.',
    'about.tag':   'About Us',
    'about.h2':    'Over 30 years perfecting constructions',
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
    'sn.h2':      'Over 30 years perfecting constructions',
    'sn.quote':   '"Perfection exists, it is something you can see and feel — it is the villas we build."',
    'sn.p1':      'For over 30 years, the conviction that perfection exists has driven us to work with greater dedication. Today, we can proudly say we specialise in turning our clients\' dreams into reality.',
    'sn.p2':      'We are an ecological construction company that build bespoke detached ecological villas and townhouses with a team of architects, designers and technicians combining their talents to deliver the highest quality construction, creating the perfect paradise for a fulfilling life.',
    'sn.p3':      'Let\'s be realistic — you want a villa that is a true home for your family, not a copy of someone else\'s villa, and that is why the construction process is carried out as a team.',
    'sn.dream':   'You dream it and we design it for you!',
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
    'pp.h2':        'Your ecological villa, designed and built off-plan',
    'pp.lead':      'Here is one of our off-plan projects. And if you are looking for something unique, we design and build your ecological villa entirely to measure, based on your plot, tastes and needs.',
    'pp.badge1':    'Available',
    'pp.badge2':    'Premium',
    'pp.v38.cat':   'Luxury off-plan villa',
    'pp.v38.desc':  'Luxury off-plan villa in the exclusive Marbella Club Golf (Benahavís), on a 6,000 m² plot with sea and golf views. Project and licences approved.',
    'pp.v38.beds':  '5 bedrooms',
    'pp.v38.baths': '5 bathrooms',
    'pp.v38.toilet': '1 guest toilet',
    'pp.moreinfo':  'More information →',
    'pp.v38.modal.desc': 'Off-plan project with approved licences in one of the most exclusive areas of Marbella: the Marbella Club Golf, in Benahavís. It sits on a 6,000 m² plot with views of the sea, the golf course and the clubhouse. This high-security gated community features an equestrian centre, a charming clubhouse and a renowned 18-hole golf course with over 70 years of history. Set into the hillside and surrounded by 5,000 m² of woodland, the villa spans 3 floors with 770 m² of interior space and 357 m² of terraces.',
    'pp.v38.f1':    '<strong>Lower floor:</strong> wine cellar, garage for 5 cars, gym and 3 suites with dressing room and bathroom, overlooking the woodland.',
    'pp.v38.f2':    '<strong>Main floor:</strong> living room, dining area and two kitchens facing south, with a 75 m² heated pool overflowing on three sides.',
    'pp.v38.f3':    '<strong>Upper floor:</strong> master bedroom en suite (84 m²) with 127 m² of terraces, a built-in jacuzzi and a bioclimatic pergola.',
    'pp.v38.f4':    '<strong>Zen location:</strong> 15 km from Puerto Banús, 4 km from Cancelada and 13 km from Estepona, with floor-to-ceiling windows integrated with nature.',
    'pp.modal.contactbtn': 'Request information about this villa →',
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
    'pl.spec.surf': 'Area',
    'pl.spec.bed':  'Bedrooms',
    'pl.spec.loc':  'Location',
    'pl.v005.desc': 'Luxury passive off-plan villa, golf frontline at La Cala Golf (La Cala de Mijas), 6.7 km from the beach. Project and licences approved: ready to build.',
    'pl.v005.cat':  'Passive villa — golf frontline',
    'pl.v005.modal.desc': 'Luxury ecological off-plan villa on the golf frontline at La Cala Golf, 6.7 km from the beaches of La Cala de Mijas. Project and licences approved, so construction can start whenever the client wishes. Laid out over 2 floors plus a large solarium with terrace and pool, it offers 5 bedrooms, a studio/bedroom, 3 bathrooms, a guest toilet and a fully fitted kitchen.',
    'pl.v005.f1':   '<strong>Passive-house envelope:</strong> airtight building shell, thermal-bridge-free design and exceptional insulation.',
    'pl.v005.f2':   '<strong>Efficient climate control:</strong> aerothermal system, air conditioning and highly efficient heat-recovery ventilation.',
    'pl.v005.f3':   '<strong>Premium finishes:</strong> GRESPANIA porcelain tiles (1200×1200, 800×800, 600×600) and COVERLAM cladding; fully fitted bathrooms.',
    'pl.v005.f4':   '<strong>Key-in-hand:</strong> we design and build to your measure, ecological or traditional construction, based on your ideas.',
    'pl.v043.desc': 'VILLA SANTIAGO: single-storey luxury villa on a 2,772 m² plot in the exclusive Kings & Queens area of Sotogrande (Cádiz). Licence and project approved.',
    'pl.v043.cat':  'Luxury villa — Sotogrande',
    'pl.v043.modal.desc': 'Known as VILLA SANTIAGO, set on a 2,772 m² plot in the exclusive Kings & Queens area of Sotogrande (Cádiz), one of the most exclusive residential enclaves in Europe. It blends symmetries, courtyards and classical rhythms with contemporary spaces and cutting-edge technology, such as pocket windows that turn rooms into porches. Just minutes from dream beaches and the prestigious Real Club de Golf Sotogrande.',
    'pl.v043.f1':   '<strong>Single-storey design:</strong> 6 en-suite bedrooms, designed for comfort and functionality.',
    'pl.v043.f2':   '<strong>Optional guest house:</strong> 2 additional bedrooms and 2 bathrooms, separate and private.',
    'pl.v043.f3':   '<strong>Outdoor areas:</strong> three outdoor living areas, swimming pool, rooftop lounge and a built-in barbecue in the courtyard.',
    'pl.v043.f4':   '<strong>Sport & wellness:</strong> glass-walled paddle court, yoga platform, outdoor gym and outdoor showers.',
    'pl.v049.desc': 'Contemporary off-plan villa in Atalaya de Rio Verde, within walking distance of Puerto Banús. Licence and project approved. Double-height design with sea views.',
    'pl.v049.cat':  'Contemporary villa — Puerto Banús',
    'pl.v049.modal.desc': 'Contemporary off-plan villa in Atalaya de Rio Verde, within walking distance of Puerto Banús. Licence and project approved. Double-height architecture with large floor-to-ceiling windows, a lift connecting the basement to the 88 m² roof terrace, and exceptional views over the sea and Puerto Banús. Arranged over ground floor, first floor, basement and roof terrace, with a 4×14 m pool and a carport for 3 cars.',
    'pl.v049.f1':   '<strong>Ground floor:</strong> open-plan 77 m² double-height living room, open kitchen with dining area, utility room and an en-suite bedroom.',
    'pl.v049.f2':   '<strong>First floor:</strong> 22 m² mezzanine with sea views, master bedroom with dressing room and bathroom, plus 2 further en-suite bedrooms.',
    'pl.v049.f3':   '<strong>196 m² basement:</strong> gym, playroom, bar and wine cellar, with English patios bringing in natural light.',
    'pl.v049.f4':   '<strong>88 m² roof terrace:</strong> accessible by lift; 4×14 m pool and a carport for 3 cars.',
    'pl.spec.price': 'Price',
    'pl.moreinfo':  'More information →',
    'pl.modal.contactbtn': 'Request information about this villa →',
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
    'ct.companyname': 'CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.',
    'ct.office1':     '🇪🇸 Head Office — Spain',
    'ct.office2':     '🇬🇧 London Office',
    'ct.office3':     '🏭 Warehouse — Spain',
    'ct.office4':     '🇪🇸 Granada Office — Spain',
    'ct.tel.label':   'OFFICE PHONE',
    'ct.mob.label':   'MOBILE PHONES',
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
    'ct.msg.ph':      'Tell us about your project, plot, requirements…',
    'ct.subj.placeholder': 'Select a subject…',
    'ct.subj.1':      'Information about off-plan projects',
    'ct.subj.2':      'Information about licensed projects',
    'ct.subj.3':      'Custom quote',
    'ct.subj.4':      'Materials and construction',
    'ct.subj.5':      'General enquiry',
    'ct.subj.6':      'Other',

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
    'emp.f.arch':   'Architecture',
    'emp.f.site':   'Site',
    'emp.f.admin':  'Administration',
    'emp.f.sales':  'Sales',
    'emp.empty':    'There are no openings in this category at the moment.',
    'emp.published':'Posted:',
    'emp.apply':    'Apply →',
    'emp.apply.send':'Send application →',
    'emp.apply.ok': '✅ Application sent! We will review your profile and get back to you.',
    'emp.cover.label':'Cover letter *',
    'emp.cover.ph':   'Tell us why you are the ideal candidate…',
    'emp.cv.label':   'Link to CV or portfolio (LinkedIn, etc.)',
    'emp.cvfile.label':'Attach CV (PDF, Word) — optional',
    'emp.cvfile.hint':'Maximum size 5 MB.',
    'emp.cvfile.tooBig':'The file is too large. Maximum size 5 MB.',
    'emp.ph.fname':   'Your first name',
    'emp.ph.lname':   'Your last name',
    'footer.addr':    'Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, Spain',
    'cookie.text':    'We use our own and third-party cookies (Google Analytics) to analyse traffic and improve our services. You can accept or reject them. More info in our <a href="politica-cookies.html">Cookie Policy</a>.',
    'cookie.accept':  'Accept all',
    'cookie.reject':  'Essential only',

    /* ── LEGAL — common ── */
    'legal.updated':  'Last updated: May 2026',

    /* ── LEGAL NOTICE ── */
    'al.title':  'Legal Notice',
    'al.1.h':    '1. Owner identification',
    'al.1.p':    'In compliance with Article 10 of Spanish Law 34/2002 of 11 July, on Information Society Services and Electronic Commerce (LSSI-CE), users are informed of the following:<br><br><strong>Company name:</strong> CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.<br><strong>Trading name:</strong> Ecological Passive Building<br><strong>Company tax ID (CIF):</strong> B-88873567<br><strong>Registered address:</strong> Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, Spain<br><strong>Phone:</strong> <a href="https://wa.me/34951661189" style="color:var(--green-mid);">+34 951 661 189</a><br><strong>Email:</strong> <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a><br><strong>Website:</strong> www.ecologicalpassivebuilding.es',
    'al.2.h':    '2. Purpose and scope',
    'al.2.p':    'This legal notice governs the use of the website <strong>www.ecologicalpassivebuilding.es</strong> (hereinafter, "the Website"), owned by CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L. Accessing and using the Website implies full acceptance of these terms. If you do not agree, please leave the Website.',
    'al.3.h':    '3. Terms of use',
    'al.3.p':    'The user undertakes to make appropriate use of the contents and services of the Website and, in particular, not to use them to:',
    'al.3.ul':   '<li>Engage in unlawful activities or activities contrary to good faith and public order.</li><li>Distribute content of a racist, xenophobic, pornographic nature or that infringes human rights.</li><li>Cause damage to the physical or logical systems of the owner or third parties.</li><li>Introduce or spread computer viruses or any other physical or logical system that may cause damage.</li><li>Attempt to access, use or manipulate data of the owner, third-party providers or other users.</li>',
    'al.4.h':    '4. Intellectual and industrial property',
    'al.4.p1':   'All contents of the Website — including, without limitation, texts, photographs, graphics, images, icons, technology, software, links and other audiovisual or sound contents, as well as their graphic design and source code — are the intellectual property of <strong>CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.</strong> or of third parties, without any exploitation rights being transferred to the user.',
    'al.4.p2':   'The reproduction, distribution, public communication and transformation of the contents of the Website, in whole or in part, for commercial purposes and on any medium, is expressly prohibited without the prior written authorisation of the owner.',
    'al.5.h':    '5. Disclaimer of liability',
    'al.5.p':    'The owner shall not be liable, in any case, for any damages arising from, by way of example:',
    'al.5.ul':   '<li>Errors or omissions in the contents, unavailability of the portal or the transmission of viruses or malicious programs, despite having adopted all necessary technological measures to prevent it.</li><li>The use by users of the materials on the Website, whether prohibited or permitted, in infringement of the owner\'s intellectual and industrial property rights.</li><li>Damage caused to computer equipment during access to the Website.</li><li>The contents of third-party pages accessible via links from the Website.</li>',
    'al.6.h':    '6. Applicable law and jurisdiction',
    'al.6.p':    'These conditions are governed by Spanish law. For the resolution of any dispute arising from the access or use of the Website, the parties submit to the Courts and Tribunals of the city of <strong>Granada</strong>, expressly waiving any other jurisdiction that may correspond to them, unless mandatory law states otherwise.',
    'al.7.h':    '7. Amendments to this legal notice',
    'al.7.p':    'The owner reserves the right to modify this legal notice at any time and without prior notice. Amendments will take effect upon publication on the Website. We recommend that you review this page periodically.',

    /* ── PRIVACY POLICY ── */
    'pp.title':  'Privacy Policy',
    'pp.1.h':    '1. Data controller',
    'pp.1.p':    '<strong>Company name:</strong> CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.<br><strong>Trading name:</strong> Ecological Passive Building<br><strong>Company tax ID (CIF):</strong> B-88873567<br><strong>Registered address:</strong> Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, Spain<br><strong>Email:</strong> <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a><br><strong>Phone:</strong> <a href="https://wa.me/34951661189" style="color:var(--green-mid);">+34 951 661 189</a>',
    'pp.2.h':    '2. Data we collect',
    'pp.2.p':    'We collect the personal data you voluntarily provide through the forms on our website:',
    'pp.2.ul':   '<li><strong>Contact form:</strong> first name, last name, email, phone (optional), subject and message.</li><li><strong>Job application form:</strong> first name, last name, email, phone (optional), cover letter and link to CV/portfolio.</li><li><strong>Spontaneous applications:</strong> data included in the email you send us.</li><li><strong>Browsing data:</strong> IP address, browser type, pages visited and visit duration (anonymous data via Google Analytics).</li>',
    'pp.3.h':    '3. Purposes of processing',
    'pp.3.p':    'We process your data for the following purposes:',
    'pp.3.ul':   '<li>To handle enquiries, information requests and quotations you send us.</li><li>To manage personnel selection processes when you apply to one of our job offers or send a spontaneous application.</li><li>To improve our services and browsing experience through anonymous statistics.</li><li>To comply with applicable legal obligations.</li>',
    'pp.4.h':    '4. Legal basis for processing',
    'pp.4.p':    'The legal basis for processing your data is the <strong>consent</strong> you give when sending us the form (art. 6.1.a GDPR), as well as the <strong>legitimate interest</strong> of the controller for the management of commercial enquiries (art. 6.1.f GDPR). For job applications, the legal basis is the performance of pre-contractual measures at the request of the data subject (art. 6.1.b GDPR).',
    'pp.5.h':    '5. Data retention',
    'pp.5.p':    'We will keep your data for the time necessary to attend to your request and, subsequently, during the applicable legal limitation periods. Job applications will be kept for a maximum of <strong>12 months</strong> from receipt, unless you request their earlier deletion.',
    'pp.6.h':    '6. Disclosure to third parties',
    'pp.6.p':    'We do not transfer your personal data to third parties, except by legal obligation. For form submission we use the <strong>FormSubmit</strong> service (formsubmit.co), acting as data processor under a confidentiality agreement. For browsing statistics we use <strong>Google Analytics</strong>, a service of Google LLC, which may transfer data to servers in the USA under the EU–US Data Privacy Framework.',
    'pp.7.h':    '7. Your rights',
    'pp.7.p':    'Under the GDPR and Spanish LOPDGDD, you have the right to:',
    'pp.7.ul':   '<li><strong>Access:</strong> know what personal data of yours we process.</li><li><strong>Rectification:</strong> correct inaccurate or incomplete data.</li><li><strong>Erasure:</strong> request deletion of your data when no longer necessary.</li><li><strong>Objection:</strong> object to the processing of your data in certain circumstances.</li><li><strong>Restriction:</strong> request the restriction of the processing of your data.</li><li><strong>Portability:</strong> receive your data in a structured, machine-readable format.</li><li><strong>Withdraw consent</strong> at any time, without affecting the lawfulness of prior processing.</li>',
    'pp.7.p2':   'To exercise these rights, please contact: <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a>. You also have the right to lodge a complaint with the <strong>Spanish Data Protection Agency</strong> (www.aepd.es) if you consider that the processing does not comply with current regulations.',
    'pp.8.h':    '8. Security',
    'pp.8.p':    'We apply appropriate technical and organisational measures to protect your data against unauthorised access, accidental loss, destruction or damage, in accordance with article 32 of the GDPR.',
    'pp.9.h':    '9. Changes to this policy',
    'pp.9.p':    'We may revise this privacy policy periodically. The updated version will always be available on this page. We recommend reviewing it regularly.',

    /* ── COOKIE POLICY ── */
    'pc.title':  'Cookie Policy',
    'pc.1.h':    '1. What are cookies?',
    'pc.1.p':    'Cookies are small text files stored on your device (computer, tablet or mobile) when you visit a website. They allow the site to remember your actions and preferences for a period of time, so you do not have to re-enter them each time you visit the site or move between pages.',
    'pc.2.h':    '2. Which cookies do we use?',
    'pc.2.p':    'At <strong>Ecological Passive Building</strong> we use the following categories of cookies:',
    'pc.table.name':     'Name',
    'pc.table.type':     'Type',
    'pc.table.purpose':  'Purpose',
    'pc.table.duration': 'Duration',
    'pc.r1.type':        'Technical / Functional',
    'pc.r1.purpose':     'Stores the language selected by the user (ES, EN or NL)',
    'pc.r1.duration':    'Session / Persistent',
    'pc.r2.type':        'Analytics (Google Analytics)',
    'pc.r2.purpose':     'Anonymous statistics of visits and browsing behaviour',
    'pc.r2.duration':    '2 years / 24 hours',
    'pc.r3.type':        'Analytics / Advertising',
    'pc.r3.purpose':     'Links session activity with Google Ads campaigns',
    'pc.r3.duration':    '90 days',
    'pc.3.h':    '3. Strictly necessary technical cookies',
    'pc.3.p':    'These cookies are essential for the correct operation of the website. Without them we could not offer some services such as remembering your selected language. They do not require your prior consent under article 22.2 of the LSSI.',
    'pc.4.h':    '4. Analytics cookies',
    'pc.4.p':    'We use Google Analytics to obtain anonymous statistical information about the use of the site. The data collected is aggregated and does not allow you to be personally identified. You can opt out via the Google Analytics opt-out extension: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" style="color:var(--green-mid);">tools.google.com/dlpage/gaoptout</a>.',
    'pc.5.h':    '5. How can you control cookies?',
    'pc.5.p':    'You can configure your browser to reject all or some cookies, or to warn you when they are sent. Please note that if you disable or reject cookies, some parts of the website may become inaccessible or not work correctly.',
    'pc.6.h':    '6. Updates to this policy',
    'pc.6.p':    'We may update this cookie policy to reflect changes in the cookies we use or for other operational, legal or regulatory reasons. We recommend that you review this page periodically.',
    'pc.7.h':    '7. Contact',
    'pc.7.p':    'If you have any questions about our use of cookies, you can contact us at:',
    'pc.7.p2':   '<strong>CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.</strong><br>Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, Spain<br>Email: <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a>',
  },

  nl: {
    'nav.home':     'Home',
    'nav.about':    'Over Ons',
    'nav.plan':     'Projecten op Tekening',
    'nav.license':  'Gelicentieerde Projecten',
    'nav.materials':'Materialen',
    'nav.jobs':     'Vacatures',
    'nav.contact':  'Contact',
    'hero.tagline': 'wij maken jouw wereld weer <span style="color:#4caf50">GROEN</span>',
    'hero.eyebrow': 'PREMIUM ECOLOGISCHE BOUWER',
    'hero.h1':      'Passieve Huizen &amp; Ecologische <em>Villa\'s</em>',
    'hero.p':       'Architecten · Ontwerpers · Bouwers. Meer dan 30 jaar dromen omzetten in unieke ecologische villa\'s, in perfecte harmonie met de natuur.',
    'hero.btn1':    'Over Ons →',
    'hero.btn2':    'Projecten Bekijken',
    'hero.stat1l':  'Jaar ervaring',
    'hero.stat2l':  'Opgeleverde projecten',
    'hero.stat3l':  'Energiecertificering',
    'hero.stat4l':  'Landen',
    'svc.h3.1': 'Ecologische bouw',
    'svc.p.1':  'Wij hebben een uitgebreide lijst van professionele aannemers met wie onze ingenieurs en architecten graag samenwerken aan de meeste van onze projecten!',
    'svc.h3.2': 'Ontwerp en bouw',
    'svc.p.2':  'Onze specialisatie stelt ons in staat elk type project te ontwerpen en te bouwen, waardoor we als de besten op de markt worden beschouwd.',
    'svc.h3.3': 'Bouwdiensten',
    'svc.p.3':  'Ecologische passieve bouw biedt hoogwaardige bouwdiensten waarbij alle aspecten van energie-efficiëntie in aanmerking worden genomen.',
    'svc.h3.4': 'Diensten vóór de bouw',
    'svc.p.4':  'Voordat de bouw begint, besteden we tijd aan de initiële planning om alle financiële en efficiëntieaspecten van tevoren te evalueren.',
    'about.tag':   'Over Ons',
    'about.h2':    'Meer dan 30 jaar ervaring in het perfectioneren van constructies',
    'about.quote': '"Perfectie bestaat, het is iets wat je kunt zien en voelen – dat zijn de villa\'s die wij bouwen."',
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
    'feat.c1.desc':   'Modern gelijkvloers ontwerp met perimetertuin, zwembad en zuidgerichte oriëntatie voor maximale zonnewinst.',
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
    'sn.h2':      'Meer dan 30 jaar ervaring in het perfectioneren van constructies',
    'sn.quote':   '"Perfectie bestaat, het is iets wat je kunt zien en voelen – dat zijn de villa\'s die wij bouwen."',
    'sn.p1':      'Al meer dan 30 jaar drijft de overtuiging dat perfectie bestaat ons ertoe om met nog grotere toewijding te werken. Vandaag de dag kunnen we met trots zeggen dat we gespecialiseerd zijn in het realiseren van de dromen van onze klanten.',
    'sn.p2':      'Wij zijn een ecologisch bouwbedrijf dat op maat gemaakte, vrijstaande, ecologische villa\'s en herenhuizen bouwt. Ons team van architecten, ontwerpers en technici bundelt hun talenten om de hoogste kwaliteit te leveren en zo het perfecte paradijs te creëren voor een vervullend leven.',
    'sn.p3':      'Laten we realistisch zijn: u wilt een villa die echt een thuis is voor uw gezin, geen kopie van de villa van iemand anders. Daarom voeren we het bouwproces als team uit.',
    'sn.dream':   'U droomt ervan en wij ontwerpen het voor u!',
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
    'mat.c5.desc':'In het dak geïntegreerde zonne-energie-installatie voor volledig of gedeeltelijk eigen gebruik. Vermindert de energierekening met maximaal 90%.',
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
    'pp.h2':        'Uw ecologische villa, ontworpen en gebouwd op tekening',
    'pp.lead':      'Dit is een van onze projecten op tekening. En als u op zoek bent naar iets unieks, ontwerpen en bouwen wij uw ecologische villa volledig op maat, op basis van uw kavel, smaak en wensen.',
    'pp.badge1':    'Beschikbaar',
    'pp.badge2':    'Premium',
    'pp.v38.cat':   'Luxe villa op tekening',
    'pp.v38.desc':  'Luxe villa op tekening in het exclusieve Marbella Club Golf (Benahavís), op een kavel van 6.000 m² met uitzicht op zee en golf. Project en vergunningen goedgekeurd.',
    'pp.v38.beds':  '5 slaapkamers',
    'pp.v38.baths': '5 badkamers',
    'pp.v38.toilet': '1 gastentoilet',
    'pp.moreinfo':  'Meer informatie →',
    'pp.v38.modal.desc': 'Project op tekening met goedgekeurde vergunningen in een van de meest exclusieve gebieden van Marbella: de Marbella Club Golf in Benahavís. Het ligt op een kavel van 6.000 m² met uitzicht op zee, de golfbaan en het clubhuis. Deze beveiligde community beschikt over een manege, een sfeervol clubhuis en een gerenommeerde 18-holes golfbaan met meer dan 70 jaar geschiedenis. Ingebed in de heuvel en omgeven door 5.000 m² bos, telt de villa 3 verdiepingen met 770 m² binnenruimte en 357 m² terrassen.',
    'pp.v38.f1':    '<strong>Onderverdieping:</strong> wijnkelder, garage voor 5 auto\'s, fitnessruimte en 3 suites met dressing en badkamer, met uitzicht op het bos.',
    'pp.v38.f2':    '<strong>Hoofdverdieping:</strong> woonkamer, eetkamer en twee keukens op het zuiden, met een verwarmd zwembad van 75 m² dat aan drie zijden overloopt.',
    'pp.v38.f3':    '<strong>Bovenverdieping:</strong> master slaapkamer en suite (84 m²) met 127 m² terrassen, ingebouwde jacuzzi en bioklimatologische pergola.',
    'pp.v38.f4':    '<strong>Zen-locatie:</strong> 15 km van Puerto Banús, 4 km van Cancelada en 13 km van Estepona, met raampartijen van vloer tot plafond geïntegreerd met de natuur.',
    'pp.modal.contactbtn': 'Informatie aanvragen over deze villa →',
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
    'pl.spec.surf': 'Oppervlak',
    'pl.spec.bed':  'Slaapkamers',
    'pl.spec.loc':  'Locatie',
    'pl.v005.desc': 'Luxe passieve villa op tekening, eerste lijn golf in La Cala Golf (La Cala de Mijas), op 6,7 km van het strand. Project en vergunningen goedgekeurd: klaar om te bouwen.',
    'pl.v005.cat':  'Passieve villa — eerste lijn golf',
    'pl.v005.modal.desc': 'Luxe ecologische villa op tekening, eerste lijn golf in La Cala Golf, op 6,7 km van de stranden van La Cala de Mijas. Project en vergunningen goedgekeurd, dus de bouw kan starten wanneer de klant dat wil. Verdeeld over 2 verdiepingen plus een ruim solarium met terras en zwembad, met 5 slaapkamers, een studio/slaapkamer, 3 badkamers, een gastentoilet en een volledig uitgeruste keuken.',
    'pl.v005.f1':   '<strong>Passiefhuis-schil:</strong> luchtdichte gebouwschil, ontwerp zonder koudebruggen en uitzonderlijke isolatie.',
    'pl.v005.f2':   '<strong>Efficiënte klimaatregeling:</strong> aerothermie, airconditioning en hoogrendement ventilatie met warmteterugwinning.',
    'pl.v005.f3':   '<strong>Premium afwerking:</strong> GRESPANIA-tegels (1200×1200, 800×800, 600×600) en COVERLAM-bekleding; volledig uitgeruste badkamers.',
    'pl.v005.f4':   '<strong>Sleutel-op-de-deur:</strong> we ontwerpen en bouwen op maat, ecologisch of traditioneel, volgens uw ideeën.',
    'pl.v043.desc': 'VILLA SANTIAGO: gelijkvloerse luxevilla op een kavel van 2.772 m² in de exclusieve Kings & Queens-wijk van Sotogrande (Cádiz). Vergunning en project goedgekeurd.',
    'pl.v043.cat':  'Luxevilla — Sotogrande',
    'pl.v043.modal.desc': 'Bekend als VILLA SANTIAGO, gelegen op een kavel van 2.772 m² in de exclusieve Kings & Queens-wijk van Sotogrande (Cádiz), een van de meest exclusieve woonenclaves van Europa. Combineert symmetrieën, binnenplaatsen en klassieke ritmes met eigentijdse ruimtes en geavanceerde technologie, zoals zakramen die kamers in portieken veranderen. Op enkele minuten van droomstranden en de prestigieuze Real Club de Golf Sotogrande.',
    'pl.v043.f1':   '<strong>Gelijkvloers ontwerp:</strong> 6 slaapkamers met ensuite badkamer, ontworpen voor comfort en functionaliteit.',
    'pl.v043.f2':   '<strong>Optioneel gastenverblijf:</strong> 2 extra slaapkamers en 2 badkamers, apart en privé.',
    'pl.v043.f3':   '<strong>Buitenruimtes:</strong> drie buitenleefruimtes, zwembad, dakloungegedeelte en een ingebouwde barbecue op de binnenplaats.',
    'pl.v043.f4':   '<strong>Sport & wellness:</strong> padelbaan met glazen wanden, yogaplatform, buitenfitness en buitendouches.',
    'pl.v049.desc': 'Hedendaagse villa op tekening in Atalaya de Rio Verde, op loopafstand van Puerto Banús. Vergunning en project goedgekeurd. Dubbele hoogte met zeezicht.',
    'pl.v049.cat':  'Hedendaagse villa — Puerto Banús',
    'pl.v049.modal.desc': 'Hedendaagse villa op tekening in Atalaya de Rio Verde, op loopafstand van Puerto Banús. Vergunning en project goedgekeurd. Architectuur met dubbele hoogte en grote raampartijen, een lift die de kelder met het dakterras van 88 m² verbindt, en uitzonderlijk uitzicht over zee en Puerto Banús. Verdeeld over begane grond, eerste verdieping, kelder en dakterras, met een zwembad van 4×14 m en een carport voor 3 auto\'s.',
    'pl.v049.f1':   '<strong>Begane grond:</strong> open woonkamer van 77 m² met dubbele hoogte, open keuken met eethoek, bijkeuken en een slaapkamer en suite.',
    'pl.v049.f2':   '<strong>Eerste verdieping:</strong> mezzanine van 22 m² met zeezicht, master slaapkamer met dressing en badkamer, plus 2 extra slaapkamers en suite.',
    'pl.v049.f3':   '<strong>Kelder van 196 m²:</strong> fitnessruimte, speelkamer, bar en wijnkelder, met Engelse patio\'s die natuurlijk licht binnenbrengen.',
    'pl.v049.f4':   '<strong>Dakterras van 88 m²:</strong> bereikbaar met de lift; zwembad van 4×14 m en carport voor 3 auto\'s.',
    'pl.spec.price': 'Prijs',
    'pl.moreinfo':  'Meer informatie →',
    'pl.modal.contactbtn': 'Informatie aanvragen over deze villa →',
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
    'ct.companyname': 'CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.',
    'ct.office1':     '🇪🇸 Hoofdkantoor — Spanje',
    'ct.office2':     '🇬🇧 Kantoor Londen',
    'ct.office3':     '🏭 Magazijn — Spanje',
    'ct.office4':     '🇪🇸 Kantoor Granada — Spanje',
    'ct.tel.label':   'KANTOORTELEFOON',
    'ct.mob.label':   'MOBIELE NUMMERS',
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
    'ct.msg.ph':      'Vertel ons over uw project, kavel, behoeften…',
    'ct.subj.placeholder': 'Selecteer een onderwerp…',
    'ct.subj.1':      'Informatie over projecten op tekening',
    'ct.subj.2':      'Informatie over gelicentieerde projecten',
    'ct.subj.3':      'Persoonlijke offerte',
    'ct.subj.4':      'Materialen en bouw',
    'ct.subj.5':      'Algemene vraag',
    'ct.subj.6':      'Anders',

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
    'emp.f.arch':   'Architectuur',
    'emp.f.site':   'Bouwplaats',
    'emp.f.admin':  'Administratie',
    'emp.f.sales':  'Commercieel',
    'emp.empty':    'Er zijn momenteel geen vacatures in deze categorie.',
    'emp.published':'Geplaatst:',
    'emp.apply':    'Solliciteren →',
    'emp.apply.send':'Sollicitatie versturen →',
    'emp.apply.ok': '✅ Sollicitatie verzonden! Wij bekijken uw profiel en nemen contact met u op.',
    'emp.cover.label':'Motivatiebrief *',
    'emp.cover.ph':   'Vertel ons waarom u de ideale kandidaat bent…',
    'emp.cv.label':   'Link naar CV of portfolio (LinkedIn, etc.)',
    'emp.cvfile.label':'CV bijvoegen (PDF, Word) — optioneel',
    'emp.cvfile.hint':'Maximale grootte 5 MB.',
    'emp.cvfile.tooBig':'Het bestand is te groot. Maximale grootte 5 MB.',
    'emp.ph.fname':   'Uw voornaam',
    'emp.ph.lname':   'Uw achternaam',
    'footer.addr':    'Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, Spanje',
    'cookie.text':    'Wij gebruiken eigen cookies en cookies van derden (Google Analytics) om het verkeer te analyseren en onze diensten te verbeteren. U kunt ze accepteren of weigeren. Meer info in ons <a href="politica-cookies.html">Cookiebeleid</a>.',
    'cookie.accept':  'Alles accepteren',
    'cookie.reject':  'Alleen noodzakelijke',

    /* ── LEGAL — algemeen ── */
    'legal.updated':  'Laatst bijgewerkt: mei 2026',

    /* ── JURIDISCHE KENNISGEVING ── */
    'al.title':  'Juridische Kennisgeving',
    'al.1.h':    '1. Gegevens van de eigenaar',
    'al.1.p':    'In overeenstemming met artikel 10 van de Spaanse Wet 34/2002 van 11 juli, inzake Diensten van de Informatiemaatschappij en Elektronische Handel (LSSI-CE), wordt de volgende informatie ter beschikking gesteld:<br><br><strong>Bedrijfsnaam:</strong> CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.<br><strong>Handelsnaam:</strong> Ecological Passive Building<br><strong>Fiscaal nummer (CIF):</strong> B-88873567<br><strong>Maatschappelijke zetel:</strong> Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, Spanje<br><strong>Telefoon:</strong> <a href="https://wa.me/34951661189" style="color:var(--green-mid);">+34 951 661 189</a><br><strong>E-mail:</strong> <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a><br><strong>Website:</strong> www.ecologicalpassivebuilding.es',
    'al.2.h':    '2. Doel en toepassingsgebied',
    'al.2.p':    'Deze juridische kennisgeving regelt het gebruik van de website <strong>www.ecologicalpassivebuilding.es</strong> (hierna "de Website"), eigendom van CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L. Toegang tot en gebruik van de Website impliceert de volledige aanvaarding van deze voorwaarden. Als u niet akkoord gaat, verzoeken wij u de Website te verlaten.',
    'al.3.h':    '3. Gebruiksvoorwaarden',
    'al.3.p':    'De gebruiker verbindt zich ertoe de inhoud en diensten van de Website op gepaste wijze te gebruiken en in het bijzonder niet om:',
    'al.3.ul':   '<li>Onwettige activiteiten te ondernemen die in strijd zijn met de goede trouw en de openbare orde.</li><li>Racistische, xenofobe, pornografische inhoud te verspreiden of inhoud die de mensenrechten schendt.</li><li>Schade toe te brengen aan de fysieke of logische systemen van de eigenaar of derden.</li><li>Computervirussen of andere fysieke of logische systemen te introduceren die schade kunnen veroorzaken.</li><li>Te proberen toegang te krijgen tot, te gebruiken en/of te manipuleren van gegevens van de eigenaar, derden of andere gebruikers.</li>',
    'al.4.h':    '4. Intellectuele en industriële eigendom',
    'al.4.p1':   'Alle inhoud van de Website — inclusief, zonder beperking, teksten, foto\'s, afbeeldingen, iconen, technologie, software, links en andere audiovisuele of geluidsinhoud, evenals het grafisch ontwerp en de broncode — is intellectueel eigendom van <strong>CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.</strong> of van derden, zonder dat enig exploitatierecht aan de gebruiker wordt overgedragen.',
    'al.4.p2':   'De reproductie, distributie, openbare mededeling en transformatie van de inhoud van de Website, geheel of gedeeltelijk, voor commerciële doeleinden, op welke drager dan ook en met welk technisch middel dan ook, is uitdrukkelijk verboden zonder voorafgaande schriftelijke toestemming van de eigenaar.',
    'al.5.h':    '5. Uitsluiting van aansprakelijkheid',
    'al.5.p':    'De eigenaar is in geen geval aansprakelijk voor schade van welke aard ook die kan ontstaan, bij wijze van voorbeeld:',
    'al.5.ul':   '<li>Fouten of weglatingen in de inhoud, onbeschikbaarheid van het portaal of de overdracht van virussen of kwaadaardige programma\'s in de inhoud, ondanks het feit dat alle noodzakelijke technologische maatregelen zijn genomen om dit te voorkomen.</li><li>Het gebruik door gebruikers van het materiaal op de Website, al dan niet verboden, in strijd met de intellectuele en industriële eigendomsrechten van de eigenaar.</li><li>Schade aan computerapparatuur tijdens toegang tot de Website.</li><li>De inhoud van pagina\'s van derden die via links vanaf de Website toegankelijk zijn.</li>',
    'al.6.h':    '6. Toepasselijk recht en jurisdictie',
    'al.6.p':    'Deze voorwaarden worden beheerst door het Spaanse recht. Voor de beslechting van enig geschil dat voortvloeit uit de toegang tot of het gebruik van de Website, onderwerpen de partijen zich aan de rechtbanken van de stad <strong>Granada</strong>, met uitdrukkelijke afstand van elke andere bevoegde rechtbank, tenzij dwingend recht anders bepaalt.',
    'al.7.h':    '7. Wijzigingen aan deze juridische kennisgeving',
    'al.7.p':    'De eigenaar behoudt zich het recht voor om deze juridische kennisgeving op elk moment en zonder voorafgaande kennisgeving te wijzigen. Wijzigingen worden van kracht na publicatie op de Website. Wij raden u aan deze pagina regelmatig te raadplegen.',

    /* ── PRIVACYBELEID ── */
    'pp.title':  'Privacybeleid',
    'pp.1.h':    '1. Verwerkingsverantwoordelijke',
    'pp.1.p':    '<strong>Bedrijfsnaam:</strong> CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.<br><strong>Handelsnaam:</strong> Ecological Passive Building<br><strong>Fiscaal nummer (CIF):</strong> B-88873567<br><strong>Maatschappelijke zetel:</strong> Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, Spanje<br><strong>E-mail:</strong> <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a><br><strong>Telefoon:</strong> <a href="https://wa.me/34951661189" style="color:var(--green-mid);">+34 951 661 189</a>',
    'pp.2.h':    '2. Welke gegevens verzamelen wij?',
    'pp.2.p':    'Wij verzamelen persoonsgegevens die u vrijwillig via de formulieren op onze website verstrekt:',
    'pp.2.ul':   '<li><strong>Contactformulier:</strong> voornaam, achternaam, e-mail, telefoon (optioneel), onderwerp en bericht.</li><li><strong>Sollicitatieformulier:</strong> voornaam, achternaam, e-mail, telefoon (optioneel), motivatiebrief en link naar CV/portfolio.</li><li><strong>Open sollicitatie:</strong> gegevens opgenomen in de e-mail die u ons stuurt.</li><li><strong>Navigatiegegevens:</strong> IP-adres, browsertype, bezochte pagina\'s en bezoekduur (anonieme gegevens via Google Analytics).</li>',
    'pp.3.h':    '3. Doel van de verwerking',
    'pp.3.p':    'Wij verwerken uw gegevens voor de volgende doeleinden:',
    'pp.3.ul':   '<li>Het afhandelen van vragen, informatieverzoeken en offertes die u ons toestuurt.</li><li>Het beheren van personeelsselectieprocessen wanneer u solliciteert op een van onze vacatures of een open sollicitatie stuurt.</li><li>Het verbeteren van onze diensten en de gebruikservaring via anonieme statistieken.</li><li>Het voldoen aan toepasselijke wettelijke verplichtingen.</li>',
    'pp.4.h':    '4. Rechtsgrond voor de verwerking',
    'pp.4.p':    'De rechtsgrond voor de verwerking van uw gegevens is uw <strong>toestemming</strong> bij het verzenden van het formulier (art. 6.1.a AVG), evenals het <strong>gerechtvaardigd belang</strong> van de verantwoordelijke voor het beheer van commerciële vragen (art. 6.1.f AVG). Voor sollicitaties is de rechtsgrond de uitvoering van precontractuele maatregelen op verzoek van de betrokkene (art. 6.1.b AVG).',
    'pp.5.h':    '5. Bewaring van de gegevens',
    'pp.5.p':    'Wij bewaren uw gegevens gedurende de tijd die nodig is om uw verzoek te behandelen en, vervolgens, gedurende de toepasselijke wettelijke verjaringstermijnen. Sollicitaties worden maximaal <strong>12 maanden</strong> bewaard vanaf ontvangst, tenzij u eerder om verwijdering verzoekt.',
    'pp.6.h':    '6. Doorgifte aan derden',
    'pp.6.p':    'Wij geven uw persoonsgegevens niet door aan derden, tenzij wettelijk verplicht. Voor het verzenden van formulieren gebruiken wij de dienst <strong>FormSubmit</strong> (formsubmit.co), die optreedt als verwerker onder een vertrouwelijkheidsovereenkomst. Voor browsingstatistieken gebruiken wij <strong>Google Analytics</strong>, een dienst van Google LLC, die gegevens kan overdragen naar servers in de VS onder de waarborgen van het EU–VS Data Privacy Framework.',
    'pp.7.h':    '7. Uw rechten',
    'pp.7.p':    'Conform de AVG en de Spaanse LOPDGDD heeft u recht op:',
    'pp.7.ul':   '<li><strong>Inzage:</strong> weten welke persoonsgegevens van u worden verwerkt.</li><li><strong>Rectificatie:</strong> onjuiste of onvolledige gegevens corrigeren.</li><li><strong>Verwijdering:</strong> verzoeken om verwijdering van uw gegevens wanneer deze niet langer nodig zijn.</li><li><strong>Bezwaar:</strong> bezwaar maken tegen de verwerking onder bepaalde omstandigheden.</li><li><strong>Beperking:</strong> verzoeken om beperking van de verwerking van uw gegevens.</li><li><strong>Overdraagbaarheid:</strong> uw gegevens ontvangen in een gestructureerd, machineleesbaar formaat.</li><li><strong>Toestemming intrekken</strong> op elk moment, zonder dat dit de rechtmatigheid van eerdere verwerking aantast.</li>',
    'pp.7.p2':   'Om deze rechten uit te oefenen, kunt u contact opnemen via: <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a>. U heeft ook het recht een klacht in te dienen bij het <strong>Spaanse Agentschap voor Gegevensbescherming</strong> (www.aepd.es) als u van mening bent dat de verwerking niet voldoet aan de geldende regelgeving.',
    'pp.8.h':    '8. Beveiliging',
    'pp.8.p':    'Wij passen passende technische en organisatorische maatregelen toe om uw gegevens te beschermen tegen ongeoorloofde toegang, onbedoeld verlies, vernietiging of schade, in overeenstemming met artikel 32 van de AVG.',
    'pp.9.h':    '9. Wijzigingen in dit beleid',
    'pp.9.p':    'Wij kunnen dit privacybeleid periodiek herzien. De bijgewerkte versie is altijd beschikbaar op deze pagina. Wij raden u aan dit regelmatig te raadplegen.',

    /* ── COOKIEBELEID ── */
    'pc.title':  'Cookiebeleid',
    'pc.1.h':    '1. Wat zijn cookies?',
    'pc.1.p':    'Cookies zijn kleine tekstbestanden die op uw apparaat (computer, tablet of mobiel) worden opgeslagen wanneer u een website bezoekt. Ze stellen de site in staat uw acties en voorkeuren gedurende een periode te onthouden, zodat u deze niet telkens opnieuw hoeft in te voeren bij elk bezoek of bij navigeren tussen pagina\'s.',
    'pc.2.h':    '2. Welke cookies gebruiken wij?',
    'pc.2.p':    'Bij <strong>Ecological Passive Building</strong> gebruiken wij de volgende categorieën cookies:',
    'pc.table.name':     'Naam',
    'pc.table.type':     'Type',
    'pc.table.purpose':  'Doel',
    'pc.table.duration': 'Duur',
    'pc.r1.type':        'Technisch / Functioneel',
    'pc.r1.purpose':     'Slaat de door de gebruiker geselecteerde taal op (ES, EN of NL)',
    'pc.r1.duration':    'Sessie / Permanent',
    'pc.r2.type':        'Analytisch (Google Analytics)',
    'pc.r2.purpose':     'Anonieme statistieken van bezoeken en surfgedrag',
    'pc.r2.duration':    '2 jaar / 24 uur',
    'pc.r3.type':        'Analytisch / Reclame',
    'pc.r3.purpose':     'Koppelt sessieactiviteit aan Google Ads-campagnes',
    'pc.r3.duration':    '90 dagen',
    'pc.3.h':    '3. Strikt noodzakelijke technische cookies',
    'pc.3.p':    'Deze cookies zijn essentieel voor de correcte werking van de website. Zonder deze cookies kunnen wij sommige diensten niet aanbieden, zoals het onthouden van de geselecteerde taal. Ze vereisen geen voorafgaande toestemming volgens artikel 22.2 van de LSSI.',
    'pc.4.h':    '4. Analytische cookies',
    'pc.4.p':    'Wij gebruiken Google Analytics om anonieme statistische informatie te verkrijgen over het gebruik van de site. De verzamelde gegevens zijn geaggregeerd en stellen u niet in staat persoonlijk te worden geïdentificeerd. U kunt zich afmelden via de opt-out extensie van Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" style="color:var(--green-mid);">tools.google.com/dlpage/gaoptout</a>.',
    'pc.5.h':    '5. Hoe kunt u cookies beheren?',
    'pc.5.p':    'U kunt uw browser configureren om alle of sommige cookies te weigeren, of om u te waarschuwen wanneer ze worden verzonden. Houd er rekening mee dat als u cookies uitschakelt of weigert, sommige delen van de website ontoegankelijk kunnen worden of niet correct kunnen functioneren.',
    'pc.6.h':    '6. Updates van dit beleid',
    'pc.6.p':    'Wij kunnen dit cookiebeleid bijwerken om wijzigingen in de gebruikte cookies of om andere operationele, juridische of regelgevende redenen weer te geven. Wij raden u aan deze pagina regelmatig te raadplegen.',
    'pc.7.h':    '7. Contact',
    'pc.7.p':    'Als u vragen heeft over ons gebruik van cookies, kunt u contact met ons opnemen via:',
    'pc.7.p2':   '<strong>CONSTRUCCIONES ECOLOGICAS Y PASIVAS 2026 S.L.</strong><br>Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, Spanje<br>E-mail: <a href="mailto:sales@ecologicalvillas.com" style="color:var(--green-mid);">sales@ecologicalvillas.com</a>',
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
      } else if (el.tagName === 'OPTION') {
        el.textContent = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  /* re-render jobs list with localized labels */
  if (typeof renderJobs === 'function' && document.getElementById('jobsGrid')) {
    const active = document.querySelector('.filter-btn.active');
    renderJobs(active ? active.dataset.filter : 'all');
  }
}

/* helper to read translation in current language */
function tr(key, fallback) {
  const lang = localStorage.getItem('epb_lang') || 'es';
  const t = TRANSLATIONS[lang] || TRANSLATIONS.es;
  return t[key] !== undefined ? t[key] : (fallback !== undefined ? fallback : key);
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
/* Galerías de fotos de villas (DEMO con fotos disponibles; sustituir por las reales).
   TODO: el cliente debe enviar las fotos reales de cada villa; reemplazar las listas de abajo. */
const _galPool = ['villa-38.webp','villa-005.webp','villa-043.webp','villa-049.webp','imagen-1.webp','imagen-2.webp','about-us.webp','hero-plano.webp','hero-licencia.webp','hero-nosotros.webp','hero-materiales.webp','hero-contacto.webp'];
function _mkGallery(lead) {
  const rest = _galPool.filter(x => x !== lead);
  return [lead, ...rest, ...rest].slice(0, 15);
}
const VILLA_GALLERIES = {
  modalVilla38:  _mkGallery('villa-38.webp'),
  modalVilla005: _mkGallery('villa-005.webp'),
  modalVilla043: _mkGallery('villa-043.webp'),
  modalVilla049: _mkGallery('villa-049.webp')
};
/* Cuadrícula de miniaturas dentro del modal (clic en una → abre el lightbox) */
function buildThumbGrid(gridEl) {
  if (gridEl.dataset.built) return;
  const imgs = VILLA_GALLERIES[gridEl.dataset.gallery] || [];
  if (!imgs.length) return;
  const name = (gridEl.dataset.gallery || 'Villa').replace('modalVilla', 'Villa ');
  gridEl.innerHTML = imgs.map((src, i) =>
    `<button type="button" class="vt-thumb" data-idx="${i}" aria-label="Ampliar foto ${i + 1} de ${imgs.length}"><img src="images/${src}" alt="${name} — foto ${i + 1}" loading="lazy"></button>`
  ).join('');
  gridEl.dataset.built = '1';
}

/* ── LIGHTBOX (visor de fotos a pantalla completa, accesible) ── */
let _lb = null, _lbImgs = [], _lbIdx = 0, _lbTrigger = null;
function _buildLightbox() {
  if (_lb) return _lb;
  _lb = document.createElement('div');
  _lb.className = 'lightbox';
  _lb.setAttribute('role', 'dialog');
  _lb.setAttribute('aria-modal', 'true');
  _lb.setAttribute('aria-label', 'Galería de fotos');
  _lb.innerHTML =
    '<button class="lb-close" type="button" aria-label="Cerrar galería">✕</button>' +
    '<button class="lb-prev" type="button" aria-label="Foto anterior">‹</button>' +
    '<figure class="lb-stage"><img class="lb-img" alt=""><figcaption class="lb-count"></figcaption></figure>' +
    '<button class="lb-next" type="button" aria-label="Foto siguiente">›</button>' +
    '<div class="lb-thumbs"></div>';
  document.body.appendChild(_lb);
  _lb.addEventListener('click', e => {
    if (e.target === _lb || e.target.closest('.lb-close')) { closeLightbox(); return; }
    if (e.target.closest('.lb-prev')) { lbGo(-1); return; }
    if (e.target.closest('.lb-next')) { lbGo(1); return; }
    const t = e.target.closest('.lb-thumb');
    if (t) lbSet(parseInt(t.dataset.idx, 10));
  });
  /* swipe en móvil */
  let x0 = null;
  const stage = _lb.querySelector('.lb-stage');
  stage.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) lbGo(dx < 0 ? 1 : -1);
    x0 = null;
  }, { passive: true });
  return _lb;
}
function openLightbox(imgs, idx, trigger) {
  if (!imgs || !imgs.length) return;
  _buildLightbox();
  _lbImgs = imgs;
  _lbTrigger = trigger || null;
  _lb.querySelector('.lb-thumbs').innerHTML = imgs.map((src, i) =>
    `<button type="button" class="lb-thumb" data-idx="${i}" aria-label="Foto ${i + 1}"><img src="images/${src}" alt=""></button>`
  ).join('');
  lbSet(idx || 0);
  _lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', _lbKey);
  _lb.querySelector('.lb-close').focus();
}
function closeLightbox() {
  if (!_lb) return;
  _lb.classList.remove('open');
  document.removeEventListener('keydown', _lbKey);
  /* si hay un modal abierto detrás, mantener el scroll bloqueado */
  document.body.style.overflow = document.querySelector('.modal-overlay.open') ? 'hidden' : '';
  if (_lbTrigger && typeof _lbTrigger.focus === 'function') _lbTrigger.focus();
}
function lbSet(i) {
  if (!_lbImgs.length) return;
  _lbIdx = (i + _lbImgs.length) % _lbImgs.length;
  const img = _lb.querySelector('.lb-img');
  img.src = 'images/' + _lbImgs[_lbIdx];
  img.alt = 'Foto ' + (_lbIdx + 1) + ' de ' + _lbImgs.length;
  _lb.querySelector('.lb-count').textContent = (_lbIdx + 1) + ' / ' + _lbImgs.length;
  _lb.querySelectorAll('.lb-thumb').forEach((t, ti) => t.classList.toggle('active', ti === _lbIdx));
  const active = _lb.querySelector('.lb-thumb.active');
  if (active) active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
}
function lbGo(d) { lbSet(_lbIdx + d); }
function _lbKey(e) {
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowLeft') lbGo(-1);
  else if (e.key === 'ArrowRight') lbGo(1);
}
/* clic en una miniatura de la cuadrícula del modal → abre el lightbox */
document.addEventListener('click', e => {
  const thumb = e.target.closest('.vt-thumb');
  if (!thumb) return;
  const grid = thumb.closest('.villa-thumbs');
  const imgs = VILLA_GALLERIES[grid && grid.dataset.gallery] || [];
  openLightbox(imgs, parseInt(thumb.dataset.idx, 10), thumb);
});

function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.querySelectorAll('.villa-thumbs').forEach(buildThumbGrid);
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
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
/* delegated modal openers — no inline onclick, so the CSP can forbid inline scripts */
document.addEventListener('click', e => {
  const opener = e.target.closest('[data-modal]');
  if (opener) { openModal(opener.dataset.modal); return; }
  const applier = e.target.closest('[data-apply]');
  if (applier) openApplyModal(parseInt(applier.dataset.apply, 10));
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
      const res = await fetch('https://formsubmit.co/ajax/sales@ecologicalvillas.com', {
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
        `mailto:sales@ecologicalvillas.com?subject=${encodeURIComponent(data._subject)}&body=${encodeURIComponent(data.mensaje)}`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = tr('ct.form.btn', 'Enviar mensaje →');
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
    const errorEl   = document.getElementById('applyError');
    if (errorEl) errorEl.style.display = 'none';

    const fileInput = applyForm.querySelector('#aCVfile');
    const file = fileInput?.files?.[0] || null;
    /* validate file size: 5 MB max */
    if (file && file.size > 5 * 1024 * 1024) {
      const msg = tr('emp.cvfile.tooBig', 'El archivo es demasiado grande. Tamaño máximo 5 MB.');
      if (errorEl) { errorEl.textContent = msg; errorEl.style.display = 'block'; }
      else alert(msg);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = '…';

    const subject = 'Nueva candidatura web – Ecological Passive Building';
    const fullName = (applyForm.querySelector('#aFname')?.value || '') + ' ' + (applyForm.querySelector('#aLname')?.value || '');
    const email    = applyForm.querySelector('#aEmail')?.value || '';
    const phone    = applyForm.querySelector('#aPhone')?.value || '';
    const cover    = applyForm.querySelector('#aCover')?.value || '';
    const cvUrl    = applyForm.querySelector('#aCV')?.value || '';
    const puesto   = document.getElementById('modalJobTitle')?.textContent || '';

    /* Build FormData for multipart submission (required for file uploads) */
    const fd = new FormData();
    fd.append('puesto', puesto);
    fd.append('nombre', fullName.trim());
    fd.append('email', email);
    fd.append('telefono', phone);
    fd.append('presentacion', cover);
    fd.append('cv_url', cvUrl);
    if (file) fd.append('cv_archivo', file, file.name);
    fd.append('_subject', subject);
    fd.append('_captcha', 'false');
    fd.append('_template', 'table');

    try {
      const res = await fetch('https://formsubmit.co/sales@ecologicalvillas.com', {
        method: 'POST',
        body: fd,
      });
      if (res.ok || res.type === 'opaqueredirect') {
        successEl.style.display = 'block';
        applyForm.reset();
      } else {
        throw new Error('network');
      }
    } catch {
      /* fallback: mailto (without attachment — browsers cannot pre-attach files) */
      const body = [
        'Puesto: ' + puesto,
        'Nombre: ' + fullName,
        'Email: ' + email,
        'Teléfono: ' + phone,
        '',
        'Carta de presentación:',
        cover,
        '',
        cvUrl ? 'CV / Portfolio: ' + cvUrl : '',
        file ? '(Adjunte manualmente el CV: ' + file.name + ')' : '',
      ].join('\n');
      window.location.href =
        `mailto:sales@ecologicalvillas.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = tr('emp.apply.send', 'Enviar candidatura →');
    }
  });
}


/* ── 7. JOBS ────────────────────────────── */
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
/* return the i18n block for a job in the active language, with fallback to ES */
function jobI18n(job) {
  const lang = localStorage.getItem('epb_lang') || 'es';
  const i = job.i18n || {};
  return i[lang] || i.es || {};
}
function jobSalary(job) {
  const t = jobI18n(job);
  if (t.salaryText) return t.salaryText;
  if (!job.salary) return '';
  return job.salary + (t.salarySuffix || '');
}
function renderJobs(filter) {
  const jobs = window.JOBS || [];
  const filtered = filter === 'all' ? jobs : jobs.filter(j => j.cat === filter);
  const grid = document.getElementById('jobsGrid');
  if (!grid) return;
  if (!filtered.length) {
    grid.innerHTML = `<p style="color:var(--gray-600);padding:32px 0;">${tr('emp.empty', 'No hay ofertas en esta categoría actualmente.')}</p>`;
    return;
  }
  const lblPub  = tr('emp.published', 'Publicado:');
  const lblApply = tr('emp.apply', 'Aplicar →');
  grid.innerHTML = filtered.map(j => {
    const t = jobI18n(j);
    const sal = jobSalary(j);
    return `
    <div class="job-card">
      <div class="job-left">
        <div class="job-dept">${escapeHtml(t.catLabel || '')}</div>
        <div class="job-title">${escapeHtml(t.title || '')}</div>
        <div class="job-tags">
          <span class="job-tag">📍 ${escapeHtml(j.loc)}</span>
          <span class="job-tag">📄 ${escapeHtml(t.type || '')}</span>
          ${sal ? `<span class="job-tag neutral">💰 ${escapeHtml(sal)}</span>` : ''}
        </div>
      </div>
      <div class="job-right">
        <span class="job-date">${lblPub} ${escapeHtml(j.date)}</span>
        <button class="btn btn-primary" style="padding:10px 22px;font-size:.82rem;" data-apply="${j.id}">
          ${lblApply}
        </button>
      </div>
    </div>`;
  }).join('');
}

function openApplyModal(id) {
  const job = (window.JOBS || []).find(j => j.id === id);
  if (!job) return;
  const t = jobI18n(job);
  document.getElementById('modalJobCat').textContent  = t.catLabel || '';
  document.getElementById('modalJobTitle').textContent = t.title || '';
  document.getElementById('modalJobDesc').textContent  = t.desc || '';
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


/* ── 10. COOKIE CONSENT ──────────────────── */
const COOKIE_KEY = 'epb_cookie_consent';

function loadAnalytics() {
  if (window._gaLoaded) return;
  window._gaLoaded = true;
  /* Google Analytics 4 — replace G-XXXXXXXXXX with the actual measurement ID before going live */
  const GA_ID = window.GA_ID || 'G-XXXXXXXXXX';
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return; /* not configured yet */
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { anonymize_ip: true });
}

function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;
  const consent = localStorage.getItem(COOKIE_KEY);
  if (consent === 'accepted') {
    loadAnalytics();
    return;
  }
  if (consent === 'rejected') return;
  banner.hidden = false;
  document.getElementById('cookieAccept')?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    banner.hidden = true;
    loadAnalytics();
  });
  document.getElementById('cookieReject')?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    banner.hidden = true;
  });
}

document.addEventListener('DOMContentLoaded', initCookieBanner);
