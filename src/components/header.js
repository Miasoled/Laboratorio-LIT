import { LitElement, html, css } from "lit";

class MiHeader extends LitElement {
  static styles = css`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500&display=swap");

    :host {
      display: block;
      font-family: "DM Sans", sans-serif;
    }

    header {
      background: linear-gradient(135deg, #185fa5, #1e88e5);
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }

    .logo-icon {
      width: 34px;
      height: 34px;
      background: #185fa5;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 17px;
    }

    .logo-text {
      font-family: "Playfair Display", serif;
      font-size: 18px;
      color: #e6f1fb;
      font-weight: 700;
    }

    .logo-text em {
      color: #85b7eb;
      font-style: italic;
    }

    nav {
      display: flex;
      gap: 8px;
    }

    nav a {
      color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      font-weight: 500;
      padding: 8px 12px;
      border-radius: 8px;
      transition: all 0.25s ease;
    }

    nav a:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .nav-adopt {
      background: #185fa5;
      border-radius: 20px;
    }
  `;

  render() {
    return html`
      <header>
        <a class="logo" href="/">
          <div class="logo-icon">🐾</div>
          <span class="logo-text">Blog <em>Gatuno</em></span>
        </a>

        <nav>
          <a href="/">Inicio</a>
          <a href="/gallery">Galería</a>
          <a href="/blog">Blog</a>
          <a href="/contacto">Contacto</a>
          <a href="/adopcion" class="nav-adopt">Adopción</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("mi-header", MiHeader);
