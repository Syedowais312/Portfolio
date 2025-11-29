"use client";
import React, { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Create floating particles
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 15 + "s";
        particle.style.animationDuration = (Math.random() * 10 + 10) + "s";
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".floating-element");

      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const terminalTexts = [
      ">Full Stack Web Developer",
      ">AI/ML Enthusiast",
      ">Open Source Contributor",
      ">Hackathon Builder",
      ">Game Developer (Unreal Engine)",
      ">Tech Explorer",
      ">Code, Create, Innovate, Repeat...",
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
    <section id="home" className="hero relative overflow-hidden">
      {/* Animated Particle Background */}
      <div id="particles" className="particles"></div>
      
      {/* Floating Icons with enhanced animations */}
      <div className="floating-element" style={{ top: "20%", left: "10%" }}>
        <div className="tech-icon pulse hover-lift">⚙</div>
      </div>
      <div className="floating-element" style={{ top: "60%", right: "10%" }}>
        <div className="tech-icon pulse hover-lift" style={{ animationDelay: "1s" }}>🔧</div>
      </div>
      <div className="floating-element" style={{ bottom: "20%", left: "15%" }}>
        <div className="tech-icon pulse hover-lift" style={{ animationDelay: "2s" }}>💻</div>
      </div>
      
      <div className="floating-element" style={{ bottom: "30%", right: "30%" }}>
        <div className="tech-icon pulse hover-lift" style={{ animationDelay: "1.5s" }}>⚡</div>
      </div>

      {/* Hero Content with fade-in animations */}
      <div className={`hero-content ${isVisible ? 'visible' : ''} fade-in-up`}>
        <h1 className="typing-text gradient-text text-5xl md:text-7xl font-bold mb-6">
          Hi! I'm <span className="text-white">Syed Owais</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 fade-in-up" style={{ animationDelay: "0.3s" }}>
          Engineering Student | Problem Solver | Future Innovator
        </p>
        <div className="terminal mb-8 fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="terminal-content">
            <div className="typing-animation text-lg md:text-xl" id="terminal-text">
              &lt; Building the future, one line of code at a time...
            </div>
          </div>
        </div>
        <div className="fade-in-up" style={{ animationDelay: "0.9s" }}>
          <a href="#projects" className="cta-button hover-lift inline-block">
            <span className="relative z-10">View My Work</span>
          </a>
        </div>
      </div>
    </section>
  );
}
