import './Reviews.css';

export default function Reviews() {
  const reviews = [
    { name: "Nimrah", text: "Absolutely loved the food! Highly recommend the seafood platter.", image: "/images/review1.jpg" },
    { name: "Batool", text: "Cozy ambiance and delicious desserts. Will come again!", image: "/images/review.jpg" },
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">
        <h3 className="reviews-title">Customer Reviews</h3>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img src={review.image} alt={review.name} className="review-image" />
              <div className="review-content">
                <p className="review-text">"{review.text}"</p>
                <p className="review-name">- {review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
