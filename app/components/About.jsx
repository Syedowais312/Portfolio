"use client";
import React, { useEffect, useRef, useState } from 'react';

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="relative py-20">
      <div className="container">
        <h2 className={`section-title fade-in-up ${isVisible ? 'visible' : ''}`}>About Me</h2>
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className={`about-image fade-in-left ${isVisible ? 'visible' : ''}`}>
            <div className="profile-photo relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#00ff7f] shadow-[0_0_30px_rgba(0,255,127,0.3)] hover:shadow-[0_0_50px_rgba(0,255,127,0.5)] transition-all duration-300">
                <img 
                  src="/image.png" 
                  alt="Syed Owais" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className={`about-text fade-in-right ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Engineering the Future</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="opacity-90">
                I'm a driven <span className='text-[#00ff7f] font-semibold'>engineering student</span> with a strong foundation in software development, <span className='text-[#00ff7f] font-semibold'>full-stack web</span> and mobile apps, and AI-powered solutions. My passion lies in using technology to solve real-world challenges—from building voice-guided tools for the visually impaired to creating intelligent learning and environmental awareness platforms.
              </p>
              <p className="opacity-90">
                Currently pursuing my <span className='text-[#00ff7f] font-semibold'>Engineering degree</span>, I'm constantly experimenting with tools like React, Next.js, OpenCV, Unreal Engine, and Python-based AI models. I enjoy diving deep into system design, innovative UIs, and automation.
              </p>
              <p className="opacity-90">
                When I'm not coding or brainstorming hackathon ideas, <span className='text-[#00ff7f] font-semibold'>I love contributing to open-source</span>, exploring emerging tech, and building impactful projects with like-minded peers. I believe in learning by doing, staying future-ready, and making a difference through tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
