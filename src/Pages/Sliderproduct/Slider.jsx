
import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

import outdoorwall from "../../assets/outdoorwall.jpg";
import indoorwall from "../../assets/indoorwall.jpg";
import pvcplanter from "../../assets/pvcplanter.jpg";
import greenwall from "../../assets/greenwall.jpg";
import biopanel from "../../assets/biopanel.jpg";
import artificialgrass from "../../assets/artificialgrass.jpg";

const projects = [
  {
    id: 1,
    image: outdoorwall,
    title: "Vertical Outdoor Wall Garden",
    plants: "petunia, verbena, bacopa",
  },
  {
    id: 2,
    image: indoorwall,
    title: "Indoor Living Wall",
    plants: "pothos, philodendron, ferns",
  },
  {
    id: 3,
    image: pvcplanter,
    title: "Vertical Indoor Wall Garden",
    plants: "monstera, scindapsus, syngonium",
  },
  {
    id: 4,
    image: greenwall,
    title: "Modern Green Wall",
    plants: "ferns, pothos, peace lily",
  },
  {
    id: 5,
    image: biopanel,
    title: "Outdoor Vertical Garden",
    plants: "succulents, ivy, herbs",
  },
  {
    id: 6,
    image: artificialgrass,
    title: "Decorative Green Wall",
    plants: "areca, fern, philodendron",
  },
];

const Slider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [paused, setPaused] = useState(false);

  const maxIndex = projects.length - visible;

  // Responsive cards
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth <= 600) {
        setVisible(1);
      } else if (window.innerWidth <= 900) {
        setVisible(2);
      } else {
        setVisible(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);

    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Infinite automatic slider
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [maxIndex, paused]);

  // Slider movement
  useEffect(() => {
    if (!sliderRef.current) return;

    const firstCard = sliderRef.current.children[0];
    if (!firstCard) return;

    const gap =
      parseFloat(window.getComputedStyle(sliderRef.current).gap) || 0;

    const cardWidth = firstCard.offsetWidth;

    sliderRef.current.style.transform =
      `translateX(-${currentIndex * (cardWidth + gap)}px)`;
  }, [currentIndex, visible]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="projects-section">
      <div className="projects-container">

        <div className="projects-heading">
          <h1>Our Latest Projects</h1>
          <p>
            Showcase of beautiful green walls we've created
            for homes and businesses.
          </p>
        </div>

        <div
          className="projects-slider-wrapper"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="projects-slider-window">
            <div className="projects-slider" ref={sliderRef}>
              {projects.map((project) => (
                <div className="project-slide" key={project.id}>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>Plant name :- {project.plants}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="project-arrow project-prev"
            onClick={prevSlide}
            aria-label="Previous project"
          >
            &#10094;
          </button>

          <button
            className="project-arrow project-next"
            onClick={nextSlide}
            aria-label="Next project"
          >
            &#10095;
          </button>
        </div>

        <div className="projects-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`project-dot ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Slider;
