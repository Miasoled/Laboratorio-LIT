import { LitElement, html, css } from "lit";

class MiCard extends LitElement {
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
    h3 {
      margin: 0 0 8px;
      font-size: 18px;
      color: #222;
    }
    p {
      margin: 0;
      font-size: 14px;
      color: #666;
    }
  `;
  render() {
    return html`
      <div class="card">
        <img src="${src}" alt="${titulo}" />
        <div class="contenido">
          <h3>${titulo}</h3>
          <p>${descripcion}</p>
        </div>
      </div>
    `;
  }
}
