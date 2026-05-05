import { LitElement, html, css } from "lit";

class MiCard extends LitElement {
  static properties = {
    src: { type: String },
    titulo: { type: String },
    descripcion: { type: String },
  };

  static styles = css`
    .card {
      background: #fff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .card:hover {
      transform: translateY(-8px) scale(1.02);
    }
    .card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
    .contenido {
      padding: 15px;
    }
  `;

  render() {
    return html`
      <div class="card">
        <img src="${this.src}" alt="${this.titulo}" />
        <div class="contenido">
          <h3>${this.titulo}</h3>
          <p>${this.descripcion}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("mi-card", MiCard);
