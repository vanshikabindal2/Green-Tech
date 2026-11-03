
import React from "react";
import "./Products.css";

import outdoorwall from "../../assets/outdoorwall.jpg";
import indoorwall from "../../assets/indoorwall.jpg";
import pvcplanter from "../../assets/pvcplanter.jpg";
import greenwall from "../../assets/greenwall.jpg";
import biopanel from "../../assets/biopanel.jpg";
import artificialgrass from "../../assets/artificialgrass.jpg";
import terracegarden from "../../assets/terracegarden.jpg";
import herowall from "../../assets/herowall.jpg";
import Slider from "../Sliderproduct/slider";

const products = [
  {
    id: 1,
    name: "Vertical Outdoor Wall",
    image: outdoorwall,
    description:
      "Bio-felt outdoor wall with live plants, weather-resistant frame and drip irrigation system.",
    price: "₹850",
    unit: "per sq ft",
  },
  {
    id: 2,
    name: "Bio Wall Service",
    image: greenwall,
    description:
      "End-to-end bio wall design, installation and annual maintenance services.",
    price: "₹1,200",
    unit: "per sq ft",
  },
  {
    id: 3,
    name: "Vertical Indoor Wall Garden",
    image: indoorwall,
    description:
      "Premium indoor vertical garden with natural plants and integrated LED grow lights.",
    price: "₹950",
    unit: "per sq ft",
  },
  {
    id: 4,
    name: "PVC Planter Vertical Garden",
    image: pvcplanter,
    description:
      "Modular PVC pots on wire frame, lightweight, easy to install and maintain.",
    price: "₹450",
    unit: "per sq ft",
  },
  {
    id: 5,
    name: "Bio Wall Panel Set",
    image: biopanel,
    description:
      "Pre-planted modular bio panels. Plug-and-play installation, ready in hours.",
    price: "₹1,400",
    unit: "per panel (2x2 ft)",
  },
  {
    id: 6,
    name: "Artificial Grass Wall",
    image: artificialgrass,
    description:
      "Zero-maintenance UV-stable artificial grass walls with optional flower accents.",
    price: "₹180",
    unit: "per sq ft",
  },
  {
    id: 7,
    name: "Green Wall (Facade)",
    image: herowall,
    description:
      "Large-format exterior facade green walls with automated irrigation & drainage.",
    price: "₹1,350",
    unit: "per sq ft",
  },
  {
    id: 8,
    name: "Terrace Garden Service",
    image: terracegarden,
    description:
      "Turnkey terrace garden design — waterproofing, planters, plants and lighting.",
    price: "₹350",
    unit: "per sq ft",
  },
];

const Products = () => {
  const handleQuote = (product) => {
    const message = `Hello, I am interested in ${product.name}. Please share more details and pricing.`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <section className="products-section">
        <div className="products-heading">
          <span className="products-tag">OUR COLLECTION</span>

          <h1>Premium Wall Solutions</h1>

          <p>
            Choose from our carefully curated selection of vertical
            garden systems for every space and budget.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-content">
                <h3>{product.name}</h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-price">
                  <h2>{product.price}</h2>
                  <span>{product.unit}</span>
                </div>

                <button
                  className="quote-btn"
                  onClick={() => handleQuote(product)}
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Slider />
    </>
  );
};

export default Products;
