"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; 

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const socialIcons = [
    { name: "Github", href: "https://github.com/Syedowais312/", icon: <FaGithub /> },
    { name: "Linkedin", href: "https://www.linkedin.com/in/syed-owais-569a872a6", icon: <FaLinkedin /> },
    { name: "Instagram", href: "https://www.instagram.com/syed.owais312/", icon: <FaInstagram /> },
    { name: "Twitter", href: "https://x.com/SyedOwais114058", icon: <FaTwitter /> },
    { name: "Leetcode", href: "https://leetcode.com/u/syed_owais312/", icon: <SiLeetcode /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener("click", handleSmoothScroll));
    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleSmoothScroll));
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-50 px-6 py-4 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0a0a]/95 border-[#00ff7f]/30 shadow-lg shadow-[#00ff7f]/10' 
        : 'bg-[#0a0a0a]/90 border-green-400/20'
    }`}>
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        
        {/* Logo */}
        <Link href="#" className="logo font-mono text-3xl md:text-4xl font-bold tracking-wide text-[#00ff7f] hover:scale-110 transition-transform duration-300 group">
          &lt;<span className="text-white group-hover:text-[#00ff7f] transition-colors">0</span>/<span className="text-white group-hover:text-[#00ff7f] transition-colors">S</span>&gt;
        </Link>
<div className="hidden md:flex items-center gap-4 text-white">
            {socialIcons.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00ff7f] transition-all text-xl hover:scale-125 duration-300"
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
        {/* Desktop Nav + Social Icons */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          {/* Nav Links */}
          <ul className="flex items-center gap-6 text-white font-medium">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="relative group hover:text-[#00ff7f] transition-colors duration-300 px-2 py-1"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00ff7f] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

         
          
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <button
          className="md:hidden text-white text-2xl hover:text-[#00ff7f] transition-colors duration-300 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block transition-all duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}>
            {isMenuOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <ul className="flex flex-col items-center gap-4 mt-4 text-white font-medium bg-black/95 backdrop-blur-md py-6 rounded-md border border-[#00ff7f]/20">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
          ].map(({ label, href }, index) => (
            <li 
              key={label}
              className={`transform transition-all duration-300 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Link
                href={href}
                className="relative group hover:text-[#00ff7f] transition-colors duration-300 px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00ff7f] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          
          {/* Social Icons in Mobile Menu */}
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#00ff7f]/20">
            {socialIcons.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00ff7f] transition-all text-xl hover:scale-125 duration-300"
                aria-label={name}
              >
                {icon}
              </a>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
}
