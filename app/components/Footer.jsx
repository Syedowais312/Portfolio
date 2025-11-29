"use client";
import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-transparent to-[#0a0a0a] border-t border-[#00ff7f]/20 py-8">
      <div className="container text-center">
        <p className="text-gray-400 mb-2">
          &copy; 2025 <span className="text-[#00ff7f] font-semibold">Syed Owais</span>. Built with passion and code.
        </p>
        <p className="text-gray-500 text-sm">
          All rights reserved
        </p>
        <div className="mt-4 flex justify-center items-center gap-2 text-gray-500">
          <span className="text-xs">Made with</span>
         
        </div>
      </div>
    </footer>
  )
}
