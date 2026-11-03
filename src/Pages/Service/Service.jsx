
import React from "react";
import "./Service.css";
import indoorwall from "../../assets/indoorwall.jpg";
import outdoorwall from "../../assets/outdoorwall.jpg";
import herowall from "../../assets/herowall.jpg";
import artificialgrass from "../../assets/artificialgrass.jpg";


const services = [
  {
    id: 1,
    name: "High Pressure Misting System",
    image:outdoorwall,
    price: "₹1,00,000",
    unit: "Starting price",
    pressure: "High Pressure",
    coverage: "Up to 500 sq ft",
    icon: "💧",
    color: "mint",
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "Outdoor Misting System",
    image: outdoorwall,
    price: "₹70,000",
    unit: "Starting price",
    pressure: "Medium Pressure",
    coverage: "500-1500 sq ft",
    icon: "🌿",
    color: "peach",
    tag: "OUTDOOR",
  },
  {
    id: 3,
    name: "Low Pressure Misting System",
    image: indoorwall,
    price: "₹50,000",
    unit: "Starting price",
    pressure: "Low Pressure",
    coverage: "Up to 500 sq ft",
    icon: "🍃",
    color: "blue",
    tag: "ECO FRIENDLY",
  },
  {
    id: 4,
    name: "Industrial Misting System",
    image: herowall,
    price: "₹1,00,000",
    unit: "Starting price",
    pressure: "High Pressure",
    coverage: "Large Industrial Areas",
    icon: "🏭",
    color: "purple",
    tag: "INDUSTRIAL",
  },
  {
    id: 5,
    name: "Residential Misting System",
    image:artificialgrass,
    price: "₹80,000",
    unit: "Starting price",
    pressure: "High Pressure",
    coverage: "Up to 500 sq ft",
    icon: "🏡",
    color: "yellow",
    tag: "HOME SOLUTION",
  },
];

const categories = [
  { icon: "💧", title: "Misting Systems", color: "cat-green" },
  { icon: "☁️", title: "High Pressure Fogging", color: "cat-blue" },
  { icon: "🌬️", title: "Dust Suppression", color: "cat-purple" },
  { icon: "❄️", title: "Mist Cooling", color: "cat-cyan" },
  { icon: "☀️", title: "Outdoor Cooling", color: "cat-orange" },
];

const Service = () => {
  const handleQuote = (service) => {
    const phone = "91XXXXXXXXXX";

    const message = `Hello, I am interested in your ${service.name}. Please share the details and quotation.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="gt-services">

      {/* HERO SECTION */}
      <div className="gt-service-hero">

        <div className="gt-hero-decoration gt-circle-one"></div>
        <div className="gt-hero-decoration gt-circle-two"></div>

        <span className="gt-service-label">
          <span className="gt-label-dot"></span>
          OUR SERVICES
        </span>

        <h1>
          Professional <span>Misting &</span>
          <br />
          Cooling Systems
        </h1>

        <p>
          Complete range of misting, fogging, cooling, and dust
          suppression solutions for residential and commercial
          applications.
        </p>

        {/* CATEGORY ITEMS */}
        <div className="gt-category-list">
          {categories.map((category, index) => (
            <div
              className={`gt-category-card ${category.color}`}
              key={index}
            >
              <div className="gt-category-icon">
                {category.icon}
              </div>

              <h4>{category.title}</h4>
            </div>
          ))}
        </div>

      </div>

      {/* SERVICES PRODUCTS */}
      <div className="gt-service-products">

        <div className="gt-products-heading">
          <div>
            <span className="gt-small-label">WHAT WE OFFER</span>
            <h2>Explore Our Solutions</h2>
            <p>
              Smart cooling solutions designed for every space.
            </p>
          </div>

          <div className="gt-product-count">
            <span>05</span>
            <small>Premium Solutions</small>
          </div>
        </div>

        <div className="gt-service-grid">

          {services.map((service) => (
            <div
              className={`gt-service-card ${service.color}`}
              key={service.id}
            >

              {/* IMAGE */}
              <div className="gt-service-image">

                <img
                  src={service.image}
                  alt={service.name}
                />

                <span className="gt-service-tag">
                  {service.tag}
                </span>

                <div className="gt-image-icon">
                  {service.icon}
                </div>

              </div>

              {/* CONTENT */}
              <div className="gt-service-content">

                <h3>{service.name}</h3>

                {/* PRICE */}
                <div className="gt-price-area">

                  <div>
                    <span className="gt-price-label">
                      Starting From
                    </span>

                    <h2>{service.price}</h2>

                    <span className="gt-price-unit">
                      {service.unit}
                    </span>
                  </div>

                  <div className="gt-price-icon">
                    ₹
                  </div>

                </div>

                {/* DETAILS */}
                <div className="gt-service-details">

                  <div className="gt-detail-box">
                    <span>⚙️</span>
                    <div>
                      <small>Operating Pressure</small>
                      <strong>{service.pressure}</strong>
                    </div>
                  </div>

                  <div className="gt-detail-box">
                    <span>📐</span>
                    <div>
                      <small>Coverage Area</small>
                      <strong>{service.coverage}</strong>
                    </div>
                  </div>

                </div>

                {/* BUTTON */}
                <button
                  className="gt-quote-button"
                  onClick={() => handleQuote(service)}
                >
                  Get Free Quote
                  <span>↗</span>
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="gt-service-bottom">

          <div>
            <span className="gt-bottom-icon">🌱</span>
            <div>
              <h3>Need a Custom Cooling Solution?</h3>
              <p>
                Let's find the perfect solution for your space.
              </p>
            </div>
          </div>

          <button
            // onClick={() =>
            //   window.open(
            //     "https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20need%20a%20custom%20cooling%20solution.",
            //     "_blank"
            //   )
            // }
          >
            Contact Our Team <span>→</span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default Service;
