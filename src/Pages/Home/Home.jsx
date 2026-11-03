import React, { useEffect, useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Home.css";
import About from "../About/About";
// Apni slider images yahan import karo
import indoorwall from '../../assets/indoorwall.jpg';
import outdoorwall from "../../assets/outdoorwall.jpg";
import greenwall from "../../assets/greenwall.jpg";
import Products from "../Products/Products";
import Service from "../Service/Service";
import Gallery from "../Gallery/Gallery";
const slides = [
  {
    image: indoorwall,
    tag: "🌿 Premium Green Wall Solutions Since 2015",
    title1: "Transform Your",
    title2: "Walls Into Nature",
    description:
      "Create stunning vertical gardens that bring life, beauty, and sustainability to any space. From residential to commercial installations.",
    feature: "Premium Bio Walls",
  },
  {
    image: outdoorwall,
    tag: "🌿 Bring Nature Into Your Space",
    title1: "Experience The",
    title2: "Power Of Green",
    description:
      "Transform your surroundings with beautiful green walls and innovative vertical garden solutions.",
    feature: "Luxury Green Walls",
  },
  {
    image: greenwall,
    tag: "🌿 Sustainable Green Living",
    title1: "Make Your Space",
    title2: "Naturally Beautiful",
    description:
      "Discover premium green wall installations designed to make every space fresh, beautiful and sustainable.",
    feature: "Modern Green Gardens",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[current];

  return (
    <>
    <section className="green-hero">

      {/* BACKGROUND SLIDER */}
      <div className="green-hero-background">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`green-hero-slide ${
              current === index ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="green-hero-overlay"></div>

      {/* HERO CONTENT */}
      <div className="green-hero-content" key={current}>

        <div className="green-hero-tag">
          <span>🌿</span>
          {activeSlide.tag.replace("🌿 ", "")}
        </div>

        <h1>
          {activeSlide.title1}
          <span>{activeSlide.title2}</span>
        </h1>

        <p>{activeSlide.description}</p>

        <div className="green-hero-buttons">

          <Link to="/products" className="green-explore-btn">
            Explore Products <FiArrowRight />
          </Link>

          <Link to="/contact" className="green-consult-btn">
            Free Consultation
          </Link>

        </div>

      </div>

      {/* BOTTOM CONTENT */}
      <div className="green-hero-bottom">

        {/* STATISTICS */}
        <div className="green-hero-stats">

          <div className="green-stat">
            <h2>500+</h2>
            <span>Projects</span>
            <span>Completed</span>
          </div>

          <div className="green-stat">
            <h2>10+</h2>
            <span>Years Experience</span>
          </div>

          <div className="green-stat">
            <h2>4.9★</h2>
            <span>Client Rated</span>
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="green-scroll-indicator">
          <span></span>
        </div>

        {/* FEATURED INSTALLATION */}
        <div className="green-featured">
          <small>FEATURED INSTALLATION</small>
          <h3>{activeSlide.feature}</h3>
        </div>

      </div>

      {/* SLIDER CONTROLS */}
      <div className="green-slider-controls">

        <button onClick={prevSlide} aria-label="Previous slide">
          <FiChevronLeft />
        </button>

        <button onClick={nextSlide} aria-label="Next slide">
          <FiChevronRight />
        </button>

      </div>

      {/* SLIDE INDICATORS */}
      <div className="green-slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={current === index ? "active" : ""}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
    <About/>
    <Products/>
    <Gallery/>
    <Service/>
    </>
  );
};

export default Home;