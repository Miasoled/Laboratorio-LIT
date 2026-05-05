import { LitElement, html, css } from "lit";

class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 960px;
      margin: 0 auto;
      padding: 32px 20px;
      font-family: system-ui, sans-serif;
    }

    .hero {
      background: #042c53;
      border-radius: 16px;
      padding: 48px 40px;
      display: flex;
      align-items: center;
      gap: 32px;
      margin-bottom: 32px;
    }

    .hero-title {
      font-family: "Playfair Display", serif;
      font-size: 42px;
      color: #e6f1fb;
      margin: 0 0 12px;
    }

    .hero-title em {
      color: #85b7eb;
    }

    .hero-sub {
      font-size: 15px;
      color: #85b7eb;
      margin: 0;
    }

    .hero-img-wrap {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px dashed #185fa5;
    }

    .hero-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .section-title {
      font-family: "Playfair Display", serif;
      font-size: 22px;
      color: #185fa5;
      margin-bottom: 16px;
    }

    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      margin-bottom: 32px;
    }

    .feat-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 20px 16px;
    }

    .feat-icon {
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
    }

    .banner {
      background: #e6f1fb;
      border-radius: 12px;
      padding: 28px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .banner-btn {
      background: #185fa5;
      color: white;
      border: none;
      padding: 10px 22px;
      border-radius: 20px;
      cursor: pointer;
    }
  `;

  irContacto() {
    window.history.pushState({}, "", "/contacto");
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  render() {
    return html`
      <div class="hero">
        <div style="flex:1;">
          <h1 class="hero-title">Todo sobre los <em>gatitos</em></h1>
          <p class="hero-sub">Descubre el mundo felino</p>
        </div>
        <div class="hero-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400"
          />
        </div>
      </div>

      <p class="section-title">¿Qué encontrarás aquí?</p>

      <div class="cards-grid">
        <div class="feat-card">
          <div class="feat-icon">🐾</div>
          <p class="feat-name">Razas</p>
          <p class="feat-desc">Explora gatos</p>
        </div>

        <div class="feat-card">
          <div class="feat-icon">❤️</div>
          <p class="feat-name">Cuidados</p>
          <p class="feat-desc">Tips útiles</p>
        </div>

        <div class="feat-card">
          <div class="feat-icon">📖</div>
          <p class="feat-name">Blog</p>
          <p class="feat-desc">Aprende más</p>
        </div>
      </div>

      <div class="banner">
        <div>
          <strong>¿Tienes un gato?</strong>
        </div>
        <button class="banner-btn" @click=${this.irContacto}>
          Contáctanos
        </button>
      </div>
    `;
  }
}

customElements.define("home-page", HomePage);
