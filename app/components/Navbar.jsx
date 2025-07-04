"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // For Leetcode

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialIcons = [
    { name: "Github", href: "https://github.com/Syedowais312/", icon: <FaGithub /> },
    { name: "Linkedin", href: "https://www.linkedin.com/in/syed-owais-569a872a6", icon: <FaLinkedin /> },
    { name: "Instagram", href: "https://www.instagram.com/syed.owais312/", icon: <FaInstagram /> },
    { name: "Twitter", href: "https://x.com/SyedOwais114058", icon: <FaTwitter /> },
    { name: "Leetcode", href: "https://leetcode.com/u/syed_owais312/", icon: <SiLeetcode /> },
  ];

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
    <nav className="fixed top-0 w-full bg-[#0a0a0a]/90 backdrop-blur border-b border-green-400/20 z-50 px-6 py-4">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto">
        
        {/* Logo */}
        <Link href="#" className="logo font-mono text-3xl md:text-4xl font-bold tracking-wide text-[#00ff7f]">
          &lt;<span className="text-white">0</span>/<span className="text-white">S</span>&gt;
        </Link>
<div className="flex items-center gap-4 text-white">
            {socialIcons.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition text-xl"
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
                  className="relative group hover:text-[#00ff7f] transition"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00ff7f] transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          
        </div>

        {/* Hamburger Icon (Mobile only) */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="flex flex-col items-center gap-4 mt-4 md:hidden text-white font-medium bg-black py-4 rounded-md">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
           
          ].map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative group hover:text-[#00ff7f] transition"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00ff7f] transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          {/* Social Icons (Mobile) */}
          <div className="flex gap-4 mt-2">
            {socialIcons.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 text-xl"
              >
                {icon}
              </a>
            ))}
          </div>
        </ul>
      )}
    </nav>
  );
}
