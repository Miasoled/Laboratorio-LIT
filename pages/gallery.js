class GaleriaImagenes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const elementos = [
      {
        src: "https://images.unsplash.com/photo-1511044568932-338cba0ad803",
        titulo: "Maine Coon",
        descripcion: "Gato grande, peludo y muy cariñoso",
      },
      {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
        titulo: "Siamés",
        descripcion: "Gato elegante y comunicativo",
      },
      {
        src: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4",
        titulo: "Persa",
        descripcion: "Gato tranquilo de pelo largo",
      },
      {
        src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce",
        titulo: "Bengalí",
        descripcion: "Gato activo con patrón tipo leopardo",
      },
      {
        src: "https://images.ctfassets.net/denf86kkcx7r/5OtuxRbpeJQzVfQBtqeZHo/2bdeb42b0459898dc1b6f962ae89ec96/Fiche_race_British_Shorthair.jpg?fm=webp&w=913",
        titulo: "Británico de Pelo Corto",
        descripcion: "Gato robusto y relajado",
      },
      {
        src: "https://images.unsplash.com/photo-1501820488136-72669149e0d4",
        titulo: "Siberiano",
        descripcion: "Gato peludo y resistente",
      },
      {
        src: "https://www.zooplus.es/magazine/wp-content/uploads/2017/10/fotolia_121848146-1-1024x768.webp",
        titulo: "Ragdoll",
        descripcion: "Gato muy dócil y cariñoso",
      },
      {
        src: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
        titulo: "Esfinge",
        descripcion: "Gato sin pelo muy sociable",
      },
    ];

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 40px 20px;
          background: #f5f8fc;
          font-family: system-ui, sans-serif;
        }

        .titulo {
          text-align: center;
          font-size: 24px;
          font-weight: 700;
          color: #185FA5;
          margin-bottom: 30px;
        }

        .galeria {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          max-width: 1100px;
          margin: auto;
          align-items: start;
        }

        mi-card {
          transition: transform 0.25s ease;
        }

        mi-card:hover {
          transform: translateY(-6px);
        }
      </style>

      <div class="titulo">🐾 Galería de Mascotas 🐾</div>

      <div class="galeria">
        ${elementos
          .map(
            (e) => `
              <mi-card
                src="${e.src}"
                titulo="${e.titulo}"
                descripcion="${e.descripcion}"
              ></mi-card>
            `,
          )
          .join("")}
      </div>
    `;
  }
}

customElements.define("galeria-imagenes", GaleriaImagenes);
