import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Background image in HTML */}
      <img
        src="/images/hero.jpg"
        alt="Restaurant"
        className="hero-bg"
      />
      <div className="hero-overlay">
        <h2 className="hero-title">Welcome to My Restaurant</h2>
        <p className="hero-text">
          Delicious food, cozy ambiance, and warm hospitality.
        </p>
        <a href="#menu" className="hero-button">
          Explore Menu
        </a>
      </div>
    </section>
  );
}
