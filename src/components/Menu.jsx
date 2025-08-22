import './Menu.css';

export default function Menu() {
  const items = [
    { name: "Grilled Salmon", price: "$15", image: "/images/menu1.jpg" },
    { name: "Pasta Alfredo", price: "$12", image: "/images/menu2.jpg" },
    { name: "Seafood ", price: "$10", image: "/images/menu3.jpg" },
    { name: "Classic Tomato Pasta", price: "$20", image: "/images/menu1 (2).jpg" },
    { name: "Mixed Grill Seafood", price: "$15", image: "/images/menu3 (2).jpg" },
    { name: "Platter", price: "$25", image: "/images/menu4.jpg" },
    { name: "Butter Chicken", price: "$10", image: "/images/menu5.jpg" },
    { name: "Malai Kofta with Naan", price: "$20", image: "/images/menu6.jpg" },
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <h3 className="menu-title">Our Menu</h3>
        <div className="menu-grid">
          {items.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-details">
                <h4 className="menu-name">{item.name}</h4>
                <p className="menu-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
