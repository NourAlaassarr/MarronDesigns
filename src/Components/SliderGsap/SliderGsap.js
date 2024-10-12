import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Horizontal.css'; // Make sure to include this CSS file

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const sections = ["ONE", "TWO", "THREE", "FOUR", "FIVE"]; // Define section names

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    // GSAP animation for snapping sections horizontally
    gsap.to(panels, {
      xPercent: -100 * (panels.length -1), // Horizontal scroll
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth // Dynamically calculate end
      }
    });

    // Scroll down arrow animation
    gsap.fromTo(
      ".scroll-down-arrow",
      { y: 0 },
      { y: 20, repeat: -1, yoyo: true, ease: "power1.inOut", duration: 1 }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="App">
    <div className="container">
      <div className="description panel blue">
        <h1>Horizontal Snapping Sections</h1>
        <p>Scroll horizontally to scrub the animation between sections.</p>
        <div className="scroll-down">
          SCROLL DOWN
          <div className="scroll-down-arrow">▼</div> {/* Scroll down arrow */}
        </div>
      </div>

      {sections.map((section, index) => (
        <section key={index} className={`panel ${['red', 'orange', 'purple', 'green', 'gray'][index]}`}>
          {section}
        </section>
      ))}
    </div>
  </div>

  );
};

export default HorizontalScroll;
