class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        home-page {
          display: block;
          max-width: 960px;
          margin: 0 auto;
          padding: 32px 20px;
        }

        .hero {
          background: #042C53;
          border-radius: 16px;
          padding: 48px 40px;
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 32px;
        }

        .hero-badge {
          display: inline-block;
          background: #185FA5;
          color: #B5D4F4;
          font-size: 11px;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 16px;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          color: #E6F1FB;
          margin: 0 0 12px;
        }

        .hero-title em {
          color: #85B7EB;
        }

        .hero-sub {
          font-size: 15px;
          color: #85B7EB;
          margin: 0;
        }

        .hero-img-wrap {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px dashed #185FA5;
        }

        .hero-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: #185FA5;
s        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 32px;
        }

        .feat-card {
          background: white;
          border: 1px solid #E0E0E0;
          border-radius: 12px;
          padding: 20px 16px;
        }

        .feat-icon {
          width: 40px;
          height: 40px;
          background: #E6F1FB;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 12px;
        }

        .feat-name {
          font-size: 14px;
          font-weight: 500;
          margin: 0 0 6px;
        }

        .feat-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .banner {
          background: #E6F1FB;
          border-radius: 12px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .banner-txt {
          font-size: 15px;
          color: #042C53;
          line-height: 1.5;
        }

        .banner-txt strong {
          display: block;
          font-size: 18px;
          margin-bottom: 4px;
        }

        .banner-btn {
          background: #185FA5;
          color: #E6F1FB;
          border: none;
          padding: 10px 22px;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
        }
      </style>

      <div class="hero">
        <div style="flex:1;">
          <h1 class="hero-title">Todo sobre<br>los <em>gatitos</em></h1>
          <p class="hero-sub">Descubre razas, cuidados, curiosidades y más. Tu guía completa del mundo felino.</p>
        </div>
        <div class="hero-img-wrap">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&q=80" alt="Gatito" />
        </div>
      </div>

      <p class="section-title">¿Qué encontrarás aquí?</p>
      <div class="cards-grid">
        <div class="feat-card">
          <div class="feat-icon">ᨐฅ</div>
          <p class="feat-name">Razas del mundo</p>
          <p class="feat-desc">Explora las razas más populares con fotos y descripciones detalladas.</p>
        </div>
        <div class="feat-card">
          <div class="feat-icon">♡</div>
          <p class="feat-name">Cuidados y salud</p>
          <p class="feat-desc">Tips esenciales para mantener a tu gato feliz y saludable cada día.</p>
        </div>
        <div class="feat-card">
          <div class="feat-icon">🕮</div>
          <p class="feat-name">Blog felino</p>
          <p class="feat-desc">Artículos sobre comportamiento, alimentación y curiosidades gatunos.</p>
        </div>
      </div>

      <div class="banner">
        <div class="banner-txt">
          <strong>¿Tienes un gatito especial?</strong>
          Escríbenos, nos encantaría conocer su historia y compartirla.
        </div>
        <button class="banner-btn" onclick="location.hash='/contacto'">Contáctanos</button>
      </div>
    `;
    this.innerHTML = "<h2> Personalizar esta page </h2>";
  }
}
customElements.define("home-page", HomePage);
