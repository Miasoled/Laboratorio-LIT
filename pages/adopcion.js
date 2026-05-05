import { LitElement, html, css } from "lit";

class AdopcionPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 960px;
      margin: 0 auto;
      padding: 32px 20px;
      font-family: system-ui, sans-serif;
    }

    h2 {
      text-align: center;
      color: #042c53;
      font-size: 28px;
      margin: 0 0 6px;
    }

    .sub {
      text-align: center;
      color: #378add;
      font-size: 14px;
      margin: 0 0 28px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
  `;

  get gatos() {
    return [
      {
        src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
        nombre: "Luna",
        info: "Hembra · 8 meses · Mestiza",
        desc: "Gatita curiosa y llena de energía.",
        disponible: true,
      },
      {
        src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400",
        nombre: "Miso",
        info: "Macho · 2 años · Atigrado",
        desc: "Perfecto para un hogar tranquilo.",
        disponible: true,
      },
      {
        src: "https://i.pinimg.com/736x/49/6c/9d/496c9d566862735ef8b75caeb8042703.jpg",
        nombre: "Canela",
        info: "Hembra · 4 meses · Naranja",
        desc: "Una bola de energía con mucho amor.",
        disponible: false,
      },
      {
        src: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400",
        nombre: "Nube",
        info: "Macho · 1 año · Blanco",
        desc: "Compañero ideal para alguien tranquilo.",
        disponible: true,
      },
      {
        src: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400",
        nombre: "Oreo",
        info: "Macho · 6 meses · Blanco y negro",
        desc: "Se lleva bien con perros.",
        disponible: true,
      },
      {
        src: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400",
        nombre: "Mochi",
        info: "Hembra · 3 años · Gris",
        desc: "Cariñosa y tranquila.",
        disponible: false,
      },
    ];
  }

  render() {
    return html`
      <h2>Adopta un gatito ฅ</h2>
      <p class="sub">Cada gatito merece un hogar lleno de amor.</p>

      <div class="grid">
        ${this.gatos.map(
          (g) => html`
            <cat-card
              .src=${g.src}
              .nombre=${g.nombre}
              .info=${g.info}
              .desc=${g.desc}
              .disponible=${g.disponible}
            ></cat-card>
          `,
        )}
      </div>
    `;
  }
}

customElements.define("adopcion-page", AdopcionPage);
