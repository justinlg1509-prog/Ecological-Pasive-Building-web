/* Injects shared navbar + footer and calls main.js after */
(function () {
  const NAV_HTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="images/Logo.png" alt="Ecological Passive Building" width="140" height="56" />
    </a>
    <div class="nav-links" id="navLinks">
      <a href="index.html" data-i18n="nav.home">Hogar</a>
      <a href="sobre-nosotros.html" data-i18n="nav.about">Sobre Nosotros</a>
      <a href="proyectos-plano.html" data-i18n="nav.plan">Proyectos Sobre Plano</a>
      <a href="proyectos-licencia.html" data-i18n="nav.license">Proyectos con Licencia</a>
      <a href="materiales.html" data-i18n="nav.materials">Materiales</a>
      <a href="contacto.html" class="nav-cta" data-i18n="nav.contact">Contacto</a>
      <div class="nav-flags-mobile">
        <button class="lang-btn" data-lang="es" title="Español"><img src="images/es-flag.png" alt="" width="20" height="14" /> ES</button>
        <button class="lang-btn" data-lang="en" title="English"><img src="images/uk-flag.png" alt="" width="20" height="14" /> EN</button>
        <button class="lang-btn" data-lang="nl" title="Nederlands"><img src="images/nl-flag.png" alt="" width="20" height="14" /> NL</button>
      </div>
    </div>
    <div class="nav-flags">
      <button class="lang-btn" data-lang="es" title="Español"><img src="images/es-flag.png" alt="" width="20" height="14" /> ES</button>
      <button class="lang-btn" data-lang="en" title="English"><img src="images/uk-flag.png" alt="" width="20" height="14" /> EN</button>
      <button class="lang-btn" data-lang="nl" title="Nederlands"><img src="images/nl-flag.png" alt="" width="20" height="14" /> NL</button>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  const FOOTER_HTML = `
<div id="cookieBanner" class="cookie-banner" hidden>
  <div class="cookie-banner-inner">
    <p data-i18n="cookie.text">Utilizamos cookies propias y de terceros (Google Analytics) para analizar el tráfico y mejorar nuestros servicios. Puedes aceptarlas o rechazarlas. Más info en nuestra <a href="politica-cookies.html">Política de cookies</a>.</p>
    <div class="cookie-banner-actions">
      <button id="cookieReject" class="btn btn-outline" data-i18n="cookie.reject">Solo necesarias</button>
      <button id="cookieAccept" class="btn btn-primary" data-i18n="cookie.accept">Aceptar todas</button>
    </div>
  </div>
</div>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="images/Logo.png" alt="Construcciones Ecológicas &amp; Pasivas" width="140" height="56" />
        <div class="footer-group">D2 Grupo Diamante</div>
        <p data-i18n="footer.tagline">Construimos villas ecológicas únicas, diseñadas a medida para hacer realidad los sueños de nuestros clientes desde hace más de 30 años.</p>
      </div>
      <div class="footer-col">
        <h5 data-i18n="footer.col1">Sobre Nosotros</h5>
        <ul>
          <li><a href="index.html" data-i18n="nav.home">Hogar</a></li>
          <li><a href="sobre-nosotros.html" data-i18n="nav.about">Sobre Nosotros</a></li>
          <li><a href="proyectos-plano.html" data-i18n="nav.plan">Proyectos sobre plano</a></li>
          <li><a href="proyectos-licencia.html" data-i18n="nav.license">Proyectos con licencia</a></li>
          <li><a href="materiales.html" data-i18n="nav.materials">Materiales</a></li>
          <li><a href="villas-malaga.html" data-i18n="nav.malaga">Villas en Málaga</a></li>
          <li><a href="villas-marbella.html" data-i18n="nav.marbella">Villas en Marbella</a></li>
          <li><a href="villas-granada.html" data-i18n="nav.granada">Casas en Granada</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5 data-i18n="footer.col2">Información</h5>
        <ul>
          <li><a href="contacto.html" data-i18n="nav.contact">Contacto</a></li>
          <li><a href="precio-casa-pasiva.html" data-i18n="nav.price">Precio casa pasiva</a></li>
          <li><a href="preguntas-frecuentes.html" data-i18n="nav.faq">Preguntas frecuentes</a></li>
          <li><a href="politica-cookies.html">Política de cookies</a></li>
          <li><a href="politica-privacidad.html">Política de privacidad</a></li>
          <li><a href="aviso-legal.html">Aviso legal</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5 data-i18n="footer.col3">Contacto</h5>
        <div class="footer-contact-row">📍 <span data-i18n="footer.addr">Calle Cuarzo de Riviera 2, Apt 33 — 29649 Riviera del Sol, Málaga, España</span></div>
        <div class="footer-contact-row">📞 <a href="https://wa.me/34951661189" style="color:inherit;" target="_blank" rel="noopener">+34 951 661 189</a></div>
        <div class="footer-contact-row">📱 <a href="https://wa.me/34602697459" style="color:inherit;" target="_blank" rel="noopener">+34 602 697 459</a></div>
        <div class="footer-contact-row">📱 <a href="https://wa.me/34677820494" style="color:inherit;" target="_blank" rel="noopener">+34 677 820 494</a></div>
        <div class="footer-contact-row">📱 <a href="https://wa.me/34722240143" style="color:inherit;" target="_blank" rel="noopener">+34 722 240 143</a></div>
        <div class="footer-contact-row">📱 <a href="https://wa.me/447586059130" style="color:inherit;" target="_blank" rel="noopener">+44 7586 059 130</a></div>
        <div class="footer-contact-row">✉️ <a href="mailto:sales@ecologicalvillas.com" style="color:inherit;">sales@ecologicalvillas.com</a></div>
        <div class="footer-contact-row">✉️ <a href="mailto:ecologicalpassivebuilding@gmail.com" style="color:inherit;">ecologicalpassivebuilding@gmail.com</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer.copy">© 2026 Ecological Passive Building · Todos los derechos reservados</span>
      <span style="color:rgba(255,255,255,.4);">Riviera del Sol · Coin · Londres</span>
    </div>
  </div>
</footer>
<button id="scrollTop" aria-label="Volver arriba">↑</button>`;

  /* inject nav immediately (only the script tag exists in body at this point) */
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  /* defer footer until full DOM is parsed */
  document.addEventListener('DOMContentLoaded', function () {
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  });
})();
