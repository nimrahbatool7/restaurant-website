import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <img src="/images/about.jpg" alt="About Us" className="about-image" />
        <div className="about-content">
          <h3>About Us</h3>
          <p>
            At My Restaurant, we serve authentic flavors made with fresh ingredients.
            Our chefs bring passion to every dish, ensuring a memorable dining experience.
          </p>
          <p>
            Whether you're here for a quick lunch or a family dinner, we promise you'll leave
            with a full heart and a happy stomach.
          </p>
        </div>
      </div>
    </section>
  );
}
