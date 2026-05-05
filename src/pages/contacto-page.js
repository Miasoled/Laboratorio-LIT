import { LitElement, html, css } from "lit";

class ContactoPage extends LitElement {
  static properties = {
    enviado: { type: Boolean },
  };

  constructor() {
    super();
    this.enviado = false;
  }

  static styles = css`
    :host {
      display: block;
      max-width: 820px;
      margin: 32px auto;
      padding: 0 20px;
      font-family: system-ui, sans-serif;
    }

    h2 {
      font-size: 28px;
      color: #042c53;
      margin: 0 0 6px;
    }

    .sub {
      font-size: 14px;
      color: #378add;
      margin: 0 0 24px;
    }

    .contact-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid #e0e0e0;
    }

    .img-side img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      min-height: 420px;
    }

    .form-side {
      background: white;
      padding: 32px 28px;
    }

    .field {
      margin-bottom: 16px;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #dde;
      border-radius: 8px;
      font-size: 14px;
    }

    textarea {
      height: 110px;
    }

    .field-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    button {
      width: 100%;
      background: #185fa5;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      cursor: pointer;
    }

    .success {
      text-align: center;
      padding: 40px;
      color: #3b6d11;
    }
  `;

  enviar() {
    this.enviado = true;
  }

  render() {
    return html`
      <h2>Contáctanos 🐾</h2>
      <p class="sub">¿Tienes preguntas?</p>

      <div class="contact-wrap">
        <div class="img-side">
          <img
            src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=600&q=80"
          />
        </div>

        <div class="form-side">
          ${this.enviado
            ? html`
                <div class="success">
                  <div>🐱</div>
                  <p>Mensaje enviado</p>
                </div>
              `
            : html`
                <div class="field-row">
                  <div class="field"><input placeholder="Nombre" /></div>
                  <div class="field"><input placeholder="Correo" /></div>
                </div>
                <div class="field"><input placeholder="Asunto" /></div>
                <div class="field">
                  <textarea placeholder="Mensaje"></textarea>
                </div>
                <button @click=${this.enviar}>Enviar</button>
              `}
        </div>
      </div>
    `;
  }
}

customElements.define("contacto-page", ContactoPage);
