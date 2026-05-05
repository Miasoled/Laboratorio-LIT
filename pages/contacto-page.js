class ContactoPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        contacto-page { display: block; max-width: 820px; margin: 32px auto; padding: 0 20px; font-family: system-ui, sans-serif; }
        h2 { font-size: 28px; color: #042C53; margin: 0 0 6px; }
        .sub { font-size: 14px; color: #378ADD; margin: 0 0 24px; }
        .contact-wrap { display: grid; grid-template-columns: 1fr 1fr; border-radius: 16px; overflow: hidden; border: 1px solid #e0e0e0; }
        .img-side { position: relative; min-height: 420px; }
        .img-side img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .img-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(4,44,83,0.88)); padding: 28px 24px 24px; }
        .overlay-title { font-size: 18px; color: #E6F1FB; margin: 0 0 10px; }
        .info-item { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
        .info-icon { width: 28px; height: 28px; background: rgba(255,255,255,0.12); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 13px; }
        .info-txt { font-size: 12px; color: #B5D4F4; }
        .form-side { background: white; padding: 32px 28px; display: flex; flex-direction: column; justify-content: center; }
        .form-label { font-size: 11px; font-weight: 500; color: #666; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 5px; display: block; }
        .field { margin-bottom: 16px; }
        .field input, .field textarea { width: 100%; box-sizing: border-box; padding: 10px 13px; border: 1px solid #dde; border-radius: 8px; font-size: 14px; outline: none; transition: border-color 0.2s; background: #f9f9fb; }
        .field input:focus, .field textarea:focus { border-color: #185FA5; background: white; }
        .field textarea { height: 110px; resize: vertical; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .send-btn { width: 100%; background: #185FA5; color: white; border: none; padding: 12px; border-radius: 8px; font-size: 14px; font-weight: 500; cursor: pointer; margin-top: 4px; }
        .send-btn:hover { background: #0C447C; }
        .success-msg { display: none; text-align: center; padding: 20px 0; }
        .success-msg .check { font-size: 40px; margin-bottom: 10px; }
        .success-msg p { color: #3B6D11; font-size: 15px; font-weight: 500; margin: 0; }
      </style>

      <h2>Contáctanos 🐾</h2>
      <p class="sub">¿Tienes preguntas sobre adopción o simplemente quieres saludar?</p>

      <div class="contact-wrap">
        <div class="img-side">
          <img src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=600&q=80" alt="Gatito" />
          <div class="img-overlay">
          </div>
        </div>

        <div class="form-side">
          <div id="form-content">
            <div class="field-row">
              <div class="field"><label class="form-label">Nombre</label><input type="text" placeholder="Tu nombre" /></div>
              <div class="field"><label class="form-label">Correo</label><input type="email" placeholder="tu@correo.com" /></div>
            </div>
            <div class="field"><label class="form-label">Asunto</label><input type="text" placeholder="¿En qué podemos ayudarte?" /></div>
            <div class="field"><label class="form-label">Mensaje</label><textarea placeholder="Cuéntanos todo lo que necesites..."></textarea></div>
            <button class="send-btn" onclick="this.closest('.form-side').querySelector('#form-content').style.display='none'; this.closest('.form-side').querySelector('.success-msg').style.display='block'">Enviar mensaje →</button>
          </div>
          <div class="success-msg">
            <div class="check">🐱</div>
            <p>¡Mensaje enviado! Pronto nos pondremos en contacto contigo.</p>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("contacto-page", ContactoPage);
