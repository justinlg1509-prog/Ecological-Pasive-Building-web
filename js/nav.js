/* Injects shared navbar + footer and calls main.js after */
(function () {
  const NAV_HTML = `
<nav id="navbar">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="images/Logo.png" alt="Ecological Passive Building" />
    </a>
    <div class="nav-links" id="navLinks">
      <a href="index.html" data-i18n="nav.home">Hogar</a>
      <a href="sobre-nosotros.html" data-i18n="nav.about">Sobre Nosotros</a>
      <a href="proyectos-plano.html" data-i18n="nav.plan">Proyectos Sobre Plano</a>
      <a href="proyectos-licencia.html" data-i18n="nav.license">Proyectos con Licencia</a>
      <a href="materiales.html" data-i18n="nav.materials">Materiales</a>
      <a href="empleo.html" data-i18n="nav.jobs">Empleo</a>
      <a href="contacto.html" class="nav-cta" data-i18n="nav.contact">Contacto</a>
    </div>
    <div class="nav-right">
      <div class="nav-flags">
        <button class="lang-btn" data-lang="es" title="Español">🇪🇸 ES</button>
        <button class="lang-btn" data-lang="en" title="English">🇬🇧 EN</button>
        <button class="lang-btn" data-lang="nl" title="Nederlands">🇳🇱 NL</button>
      </div>
      <button class="hamburger" id="hamburger" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="images/Logo.png" alt="Ecological Passive Building" />
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
        </ul>
      </div>
      <div class="footer-col">
        <h5 data-i18n="footer.col2">Información</h5>
        <ul>
          <li><a href="contacto.html" data-i18n="nav.contact">Contacto</a></li>
          <li><a href="empleo.html" data-i18n="nav.jobs">Empleo</a></li>
          <li><a href="politica-cookies.html">Política de cookies</a></li>
          <li><a href="politica-privacidad.html">Política de privacidad</a></li>
          <li><a href="aviso-legal.html">Aviso legal</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5 data-i18n="footer.col3">Contacto</h5>
        <div class="footer-contact-row">📍 <span>Mijas, España</span></div>
        <div class="footer-contact-row">📞 <a href="https://wa.me/34951661189" style="color:inherit;" target="_blank" rel="noopener">+34 951 661 189</a></div>
        <div class="footer-contact-row">📱 <a href="https://wa.me/34602697459" style="color:inherit;" target="_blank" rel="noopener">+34 602 697 459</a></div>
        <div class="footer-contact-row">📱 <a href="https://wa.me/34722240143" style="color:inherit;" target="_blank" rel="noopener">+34 722 240 143</a></div>
        <div class="footer-contact-row">📱 <a href="https://wa.me/447586059130" style="color:inherit;" target="_blank" rel="noopener">+44 7586 059130</a></div>
        <div class="footer-contact-row">✉️ <a href="mailto:info@ecologicalpassivebuilding.es" style="color:inherit;">info@ecologicalpassivebuilding.es</a></div>
        <div class="footer-contact-row">✉️ <a href="mailto:sales@ecologicalpassivebuilding.es" style="color:inherit;">sales@ecologicalpassivebuilding.es</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer.copy">© 2026 Ecological Passive Building · Todos los derechos reservados</span>
      <span style="color:rgba(255,255,255,.4);">Granada · Málaga · Londres</span>
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
