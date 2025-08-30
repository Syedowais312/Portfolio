"use client";
import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
   
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".floating-element");

      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
   
    const terminalTexts = [
      ">Full Stack Web Developer",
  ">AI/ML Enthusiast",
  ">OPen source contributor",
  ">Hackathon Builder ",
  ">Game Developer (Unreal Engine)",
  ">Tech Explorer ",
  "> Code, Create, Innovate, Repeat...",
    ];

    let textIndex = 0;
    let charIndex = 0;
    const terminalElement = document.getElementById("terminal-text");

    function typeText() {
      if (!terminalElement) return;

      if (charIndex < terminalTexts[textIndex].length) {
        terminalElement.textContent = terminalTexts[textIndex].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, 50);
      } else {
        setTimeout(() => {
          charIndex = 0;
          textIndex = (textIndex + 1) % terminalTexts.length;
          terminalElement.textContent = "";
          typeText();
        }, 2000);
      }
    }

    setTimeout(typeText, 1000);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Floating Icons */}
      
      <div className="floating-element">
        <div className="tech-icon">⚙</div>
      </div>
      <div className="floating-element">
        <div className="tech-icon">🔧</div>
      </div>
      <div className="floating-element">
        <div className="tech-icon">💻</div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="typing-text"> Hi! i'm Syed Owais</h1>
        <p>Engineering Student | Problem Solver | Future Innovator</p>
        <div className="terminal">
          <div className="terminal-content">
            <div className="typing-animation" id="terminal-text">
              &lt; Building the future, one line of code at a time...
            </div>
          </div>
        </div>
        <a href="#projects" className="cta-button">
          View My Work
        </a>
      </div>
    </section>
  );
}
