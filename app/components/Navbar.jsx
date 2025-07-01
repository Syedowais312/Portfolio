"use client";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <Link href="#" className="logo"><span className="text-[#00ff7f] font-mono text-2xl font-bold tracking-wide">
  &lt;<span className="text-white">0</span>/<span className="text-white">S</span>&gt;
</span>
</Link>
        <ul className="nav-links">
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
