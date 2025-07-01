"use client";
import { useEffect,usestate } from "react";
import React from 'react'

export default function Hero() {
     
  return(
    <section id="home" className="hero">
        <div className="floating-element">
            <div className="tech-icon">⚙</div>
        </div>
        <div className="floating-element">
            <div className="tech-icon">🔧</div>
        </div>
        <div className="floating-element">
            <div className="tech-icon">💻</div>
        </div>
        
        <div className="hero-content">
            <h1 className="typing-text">Syed Owais</h1>
            <p>Engineering Student | Problem Solver | Future Innovator</p>
            <div className="terminal">
                <div className="terminal-content">
                    <div className="typing-animation" id="terminal-text"> &lt; Building the future, one line of code at a time...</div>
                </div>
            </div>
            <a href="#projects" className="cta-button">View My Work</a>
        </div>
    </section>

  )
}
