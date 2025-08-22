import './Gallery.css';

export default function Gallery() {
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/review.jpg",
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h3 className="gallery-title">Gallery</h3>
        <div className="gallery-grid">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Gallery ${index}`} className="gallery-image" />
          ))}
        </div>
      </div>
    </section>
  );
}
