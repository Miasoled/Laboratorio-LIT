import { LitElement, html, css } from "lit";

class MiFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: "DM Sans", sans-serif;
    }

    footer {
      background: linear-gradient(135deg, #185fa5, #136cbb);
      color: white;
      padding: 30px 24px;
      box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.15);
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
      padding-top: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
    }

    p {
      margin: 0;
      font-size: 13px;
      opacity: 0.85;
    }

    .heart {
      color: #ff6b6b;
    }
  `;

  render() {
    return html`
      <footer>
        <div class="footer-bottom">
          <p>© 2026 Blog Gatuno · Todos los derechos reservados</p>
          <span
            >Hecho con <span class="heart">♥</span> para los amantes de los
            gatos</span
          >
        </div>
      </footer>
    `;
  }
}

customElements.define("mi-footer", MiFooter);
