import './Reservations.css';

export default function Reservations() {
  return (
    <section id="reservations" className="reservations-section">
      <div className="reservations-container">
        <h3 className="reservations-title">🍷 Book a Table</h3>
        <p className="reservations-subtitle">
          Reserve your spot for an unforgettable dining experience.
        </p>

        <form className="reservations-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email" required />
          <input type="date" required />
          <input type="time" required />
          <button type="submit">Reserve Now</button>
        </form>
      </div>
    </section>
  );
}
