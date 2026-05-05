import { LitElement, html, css } from "lit";

class BlogPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      max-width: 960px;
      margin: 0 auto;
      padding: 32px 20px;
      font-family: "DM Sans", sans-serif;
    }

    .blog-header h2 {
      font-size: 28px;
      color: #042c53;
      margin: 0 0 4px;
    }

    .blog-header p {
      font-size: 14px;
      color: #378add;
      margin: 0 0 28px;
    }

    .featured {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid #dde;
      margin-bottom: 32px;
    }

    .featured img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 220px;
    }

    .feat-body {
      background: #042c53;
      padding: 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .feat-tag {
      background: #185fa5;
      color: #b5d4f4;
      font-size: 10px;
      padding: 3px 10px;
      border-radius: 12px;
      margin-bottom: 12px;
    }

    .feat-body h3 {
      font-size: 20px;
      color: #e6f1fb;
      margin: 0 0 10px;
    }

    .feat-body p {
      font-size: 13px;
      color: #85b7eb;
      margin: 0 0 16px;
    }

    .feat-body small {
      color: #378add;
      font-size: 12px;
    }

    .posts-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .post-card {
      border: 1px solid #eee;
      border-radius: 12px;
      overflow: hidden;
      background: white;
    }

    .post-card img {
      width: 100%;
      height: 140px;
      object-fit: cover;
    }

    .post-body {
      padding: 14px;
    }

    .post-tag {
      background: #e6f1fb;
      color: #185fa5;
      font-size: 10px;
      padding: 2px 8px;
      border-radius: 10px;
      margin-bottom: 8px;
      display: inline-block;
    }

    .post-body h4 {
      font-size: 14px;
      margin: 0 0 6px;
    }

    .post-body p {
      font-size: 12px;
      color: #666;
      margin: 0 0 8px;
    }

    .post-body small {
      font-size: 11px;
      color: #999;
    }
  `;

  get posts() {
    return [
      {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400",
        tag: "Comportamiento",
        titulo: "¿Por qué tu gato te trae 'regalos'?",
        desc: "Entiende el instinto cazador detrás de este gesto.",
        fecha: "10 abril 2026 · 3 min",
      },
      {
        src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400",
        tag: "Alimentación",
        titulo: "Alimentos prohibidos para gatos",
        desc: "Algunos alimentos son tóxicos.",
        fecha: "5 abril 2026 · 5 min",
      },
      {
        src: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=400",
        tag: "Curiosidades",
        titulo: "Gatos en Egipto",
        desc: "Fueron venerados como dioses.",
        fecha: "1 abril 2026 · 6 min",
      },
    ];
  }

  render() {
    return html`
      <div class="blog-header">
        <h2>Blog Felino 🐾</h2>
        <p>Artículos del mundo gatuno</p>
      </div>

      <div class="featured">
        <img
          src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600"
        />
        <div class="feat-body">
          <span class="feat-tag">✨ Destacado</span>
          <h3>¿Por qué los gatos ronronean?</h3>
          <p>El ronroneo tiene beneficios terapéuticos.</p>
          <small>15 abril 2026 · 4 min</small>
        </div>
      </div>

      <div class="posts-grid">
        ${this.posts.map(
          (p) => html`
            <div class="post-card">
              <img src="${p.src}" />
              <div class="post-body">
                <span class="post-tag">${p.tag}</span>
                <h4>${p.titulo}</h4>
                <p>${p.desc}</p>
                <small>${p.fecha}</small>
              </div>
            </div>
          `,
        )}
      </div>
    `;
  }
}

customElements.define("blog-page", BlogPage);
