import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">📩 Get in Touch</h2>
      <p className="contact-subtitle">
        We’d love to hear from you! Send us a message or find us on the map.
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <img src="/images/about.jpg" alt="Map" className="contact-map" />
      </div>
    </section>
  );
}
