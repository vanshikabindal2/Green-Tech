
import React from "react";
import { Link } from "react-router-dom";

import {
  FiCheck,
  FiArrowRight,
} from "react-icons/fi";

import "./About.css";

import outdoorwall from "../../assets/outdoorwall.jpg";
import indoorwall from "../../assets/indoorwall.jpg";
const About = () => {
  const features = [
    "Vertical Gardens & Living Walls",
    "Custom Green Wall Design",
    "Professional Installation",
    "Expert Plant Selection",
    "Smart Irrigation Systems",
    "Long-term Maintenance",
  ];

  return (
    <section className="gt-about">

      <div className="gt-about-container">

        {/* SECTION HEADER */}
        <div className="gt-about-heading">

          <span className="gt-about-label">
            <span className="gt-leaf-icon">❧</span>
            Our Story
          </span>

          <h1>
            About Our <span>Company</span>
          </h1>

          <p>
            14+ Years of Creating Beautiful, Sustainable Green Walls
          </p>

          <div className="gt-heading-line"></div>

        </div>

        {/* MAIN CONTENT */}
        <div className="gt-about-grid">

          {/* LEFT CONTENT */}
          <div className="gt-about-left">

            {/* EXPERIENCE CARD */}
            <div className="gt-experience-card">

              <div className="gt-experience-icon">
                <span className="gt-leaf-icon">❧</span>
              </div>

              <div>
                <h2>14+</h2>
                <h4>Years of Experience</h4>
                <p>Creating Premium Green Walls</p>
              </div>

            </div>

            {/* DESCRIPTION */}
            <div className="gt-about-description">

              <p>
                With over 14 years of experience, we specialize in
                creating innovative green wall and vertical garden
                solutions that transform ordinary spaces into vibrant,
                living environments. Our expertise combines thoughtful
                design, quality plants, reliable installation, and
                professional maintenance to deliver green spaces that
                are both beautiful and sustainable.
              </p>

              <p>
                From commercial buildings and corporate spaces to
                outdoor environments and architectural projects, we
                create customized green wall solutions designed to
                complement the character of every space. Our goal is
                to bring nature closer to people while enhancing the
                visual appeal and environmental quality of modern
                buildings.
              </p>

            </div>

            {/* FEATURES */}
            <div className="gt-about-features">

              <h3>
                Transforming Spaces with <span>Green Walls</span>
              </h3>

              <div className="gt-feature-grid">

                {features.map((feature, index) => (
                  <div className="gt-feature-item" key={index}>

                    <span className="gt-feature-check">
                      <FiCheck />
                    </span>

                    <p>{feature}</p>

                  </div>
                ))}

              </div>

            </div>

            {/* BUTTON */}
            <Link to="/services" className="gt-about-button">
              Explore Our Services
              <FiArrowRight />
            </Link>

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="gt-about-right">

            {/* MAIN IMAGE */}
            <div className="gt-about-image-main">

              <img
                src={outdoorwall}
                alt="Beautiful vertical green wall"
              />

              <div className="gt-image-overlay">
                <span>GREEN LIVING</span>
                <h3>Nature Meets Modern Design</h3>
              </div>

            </div>

            {/* SMALL IMAGE */}
            <div className="gt-about-image-small">

              <img
                src={indoorwall}
                alt="Premium indoor green wall"
              />

            </div>

            {/* FLOATING BADGE */}
            <div className="gt-image-experience">

              <span className="gt-leaf-icon">❧</span>

              <div>
                <strong>14+</strong>
                <span>Years of Excellence</span>
              </div>

            </div>

            {/* DECORATIVE CIRCLE */}
            <div className="gt-about-circle"></div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
