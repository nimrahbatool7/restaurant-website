import './Specials.css';

export default function Specials() {
  const specials = [
    { name: "Strip Steak", price: "$25", image: "/images/special1.jpg" },
    { name: "dessert", price: "$30", image: "/images/special2.jpg" },
    { name: "Biryani", price: "$35", image: "/images/special3.jpg" },
    { name: "Butter Chicken", price: "$30", image: "/images/menu5.jpg" },
  ];

  return (
    <section id="specials" className="specials-section">
      <div className="specials-container">
        <h3 className="specials-title">Chef's Specials</h3>
        <div className="specials-grid">
          {specials.map((item, index) => (
            <div key={index} className="specials-item">
              <img src={item.image} alt={item.name} className="specials-image" />
              <div className="specials-details">
                <h4 className="specials-name">{item.name}</h4>
                <p className="specials-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
