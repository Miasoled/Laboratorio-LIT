import { LitElement, html, css } from "lit";

class CatCard extends LitElement {
  static properties = {
    src: { type: String },
    nombre: { type: String },
    info: { type: String },
    desc: { type: String },
    disponible: { type: Boolean },
  };

  constructor() {
    super();
    this.src = "";
    this.nombre = "Sin nombre";
    this.info = "";
    this.desc = "";
    this.disponible = true;
  }

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
    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
    }
    .badge {
      margin: 12px 15px 0;
      display: inline-block;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 10px;
    }
    .disponible {
      background: #eaf3de;
      color: #3b6d11;
    }
    .reservado {
      background: #faeeda;
      color: #854f0b;
    }
    .contenido {
      padding: 10px 15px 15px;
    }
    h3 {
      margin: 0 0 4px;
      font-size: 18px;
      color: #222;
    }
    .info {
      margin: 0 0 6px;
      font-size: 12px;
      color: #999;
    }
    p {
      margin: 0 0 12px;
      font-size: 14px;
      color: #666;
    }
    button {
      width: 100%;
      background: #185fa5;
      color: white;
      border: none;
      padding: 9px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
    button.reservado {
      background: #f0f0f0;
      color: #999;
      cursor: default;
    }
  `;

  irContacto() {
    window.history.pushState({}, "", "/contacto");
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.src}" alt="${this.nombre}" />
        <span class="badge ${this.disponible ? "disponible" : "reservado"}">
          ${this.disponible ? "Disponible" : "Reservado"}
        </span>
        <div class="contenido">
          <h3>${this.nombre}</h3>
          <p class="info">${this.info}</p>
          <p>${this.desc}</p>
          <button
            class="${this.disponible ? "" : "reservado"}"
            ?disabled=${!this.disponible}
            @click=${this.disponible ? this.irContacto : null}
          >
            ${this.disponible ? "Quiero adoptarlo" : "Ya reservado"}
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("cat-card", CatCard);
