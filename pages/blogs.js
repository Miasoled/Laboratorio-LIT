class BlogPage extends HTMLElement {
  connectedCallback() {
    const posts = [
      {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400",
        tag: "Comportamiento",
        titulo: "¿Por qué tu gato te trae 'regalos'?",
        desc: "Entiende el instinto cazador detrás de este peculiar gesto de amor.",
        fecha: "10 abril 2026 · 3 min",
      },
      {
        src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400",
        tag: "Alimentación",
        titulo: "Los 5 alimentos que jamás debes darle a tu gato",
        desc: "Algunos alimentos humanos son tóxicos para los felinos.",
        fecha: "5 abril 2026 · 5 min",
      },
      {
        src: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=400",
        tag: "Curiosidades",
        titulo: "Gatos y el antiguo Egipto",
        desc: "Los egipcios veneraban a los gatos como dioses.",
        fecha: "1 abril 2026 · 6 min",
      },
      {
        src: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=400",
        tag: "Salud",
        titulo: "Señales de que tu gato necesita al veterinario",
        desc: "Aprende a identificar síntomas a tiempo.",
        fecha: "28 marzo 2026 · 4 min",
      },
      {
        src: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=400",
        tag: "Razas",
        titulo: "Las 5 razas más cariñosas del mundo",
        desc: "¿Buscas compañía constante? Estas razas son para ti.",
        fecha: "20 marzo 2026 · 3 min",
      },
      {
        src: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=400",
        tag: "Consejos",
        titulo: "Cómo presentar un gato nuevo en casa",
        desc: "La introducción correcta puede marcar la diferencia.",
        fecha: "15 marzo 2026 · 5 min",
      },
    ];

    this.innerHTML = `
      <style>
        blog-page { display: block; max-width: 960px; margin: 0 auto; padding: 32px 20px; font-family: 'DM Sans', sans-serif; }
        .blog-header h2 { font-size: 28px; color: #042C53; margin: 0 0 4px; }
        .blog-header p { font-size: 14px; color: #378ADD; margin: 0 0 28px; }
        .featured { display: grid; grid-template-columns: 1fr 1fr; border-radius: 14px; overflow: hidden; border: 1px solid #dde; margin-bottom: 32px; }
        .featured img { width: 100%; height: 100%; object-fit: cover; min-height: 220px; display: block; }
        .feat-body { background: #042C53; padding: 28px; display: flex; flex-direction: column; justify-content: center; }
        .feat-tag { display: inline-block; background: #185FA5; color: #B5D4F4; font-size: 10px; letter-spacing: 1px; text-transform: uppercase; padding: 3px 10px; border-radius: 12px; margin-bottom: 12px; }
        .feat-body h3 { font-size: 20px; color: #E6F1FB; line-height: 1.3; margin: 0 0 10px; }
        .feat-body p { font-size: 13px; color: #85B7EB; line-height: 1.7; margin: 0 0 16px; }
        .feat-body small { color: #378ADD; font-size: 12px; }
        .posts-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .post-card { border: 1px solid #eee; border-radius: 12px; overflow: hidden; background: white; }
        .post-card img { width: 100%; height: 140px; object-fit: cover; display: block; }
        .post-body { padding: 14px; }
        .post-tag { display: inline-block; background: #E6F1FB; color: #185FA5; font-size: 10px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; padding: 2px 8px; border-radius: 10px; margin-bottom: 8px; }
        .post-body h4 { font-size: 14px; color: #1a1a2e; margin: 0 0 6px; line-height: 1.35; }
        .post-body p { font-size: 12px; color: #666; line-height: 1.6; margin: 0 0 8px; }
        .post-body small { font-size: 11px; color: #999; }
      </style>

      <div class="blog-header">
        <h2>Blog Felino 🐾</h2>
        <p>Artículos, curiosidades y consejos del mundo gatuno</p>
      </div>

      <div class="featured">
        <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600" alt="Destacado" />
        <div class="feat-body">
          <span class="feat-tag">✨ Destacado</span>
          <h3>¿Por qué los gatos ronronean? La ciencia detrás del sonido más reconfortante</h3>
          <p>El ronroneo no solo indica felicidad — tiene propiedades terapéuticas para el gato y su dueño.</p>
          <small>15 abril 2026 · 4 min de lectura</small>
        </div>
      </div>

      <div class="posts-grid">
        ${posts
          .map(
            (p) => `
          <div class="post-card">
            <img src="${p.src}" alt="${p.titulo}" />
            <div class="post-body">
              <span class="post-tag">${p.tag}</span>
              <h4>${p.titulo}</h4>
              <p>${p.desc}</p>
              <small>${p.fecha}</small>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
    this.innerHTML = "<h2> Personalizar esta page blogs </h2>";
  }
}
customElements.define("blog-page", BlogPage);
