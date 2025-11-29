"use client";
import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const socialLinks = [
    { name: "Github", href: "https://github.com/Syedowais312/", icon: FaGithub, color: "hover:text-gray-400" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/syed-owais-569a872a6", icon: FaLinkedin, color: "hover:text-blue-400" },
    { name: "Instagram", href: "https://www.instagram.com/syed.owais312/", icon: FaInstagram, color: "hover:text-pink-400" },
    { name: "Twitter", href: "https://x.com/SyedOwais114058", icon: FaTwitter, color: "hover:text-blue-400" },
    { name: "Leetcode", href: "https://leetcode.com/u/syed_owais312/", icon: SiLeetcode, color: "hover:text-orange-400" },
    { name: "Email", href: "mailto:syedowais312sf@gmail.com", icon: FaEnvelope, color: "hover:text-red-400" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-20">
      <div className="container">
        <h2 className={`section-title fade-in-up ${isVisible ? 'visible' : ''}`}>Let's Connect</h2>
        <div className={`contact-content fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? Let's build something amazing together!
          </p>
          
          {/* Terminal Component */}
          <div className={`terminal mb-12 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <div className="terminal-content">
              <div className="text-green-400">$ whoami</div>
              <div className="text-white">syed_owais_sf</div>
              <div className="text-green-400">$ cat life.txt</div>
              <div className="typing-animation text-[#00ff7f]">"The magic you are looking for is in the work you are avoiding"</div>
            </div>
          </div>

          {/* Social Links */}
         
        </div>
      </div>
    </section>
  )
}
