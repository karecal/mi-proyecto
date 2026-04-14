class NewsletterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="newsletter">
        <h2>Do you have any questions?</h2>
        <h3>Let us help you!</h3>
        <form>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <a class="newsletter-suscribe" href="../pages/contact.html">
            <input type="button" value="Suscribe" />
          </a>
        </form>
      </section>
    `;
  }
}

customElements.define("newsletter-component", NewsletterComponent);
