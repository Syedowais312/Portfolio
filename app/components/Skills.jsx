"use client";
import React from "react";

export default function Skills() {
  function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    bar.style.transform = 'scaleX(1)';
                    bar.style.transformOrigin = 'left';
                    bar.style.transition = 'transform 1.5s ease-in-out';
                }
            });
        }
  return (
    <section id="skills">
      <div className="container  ">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid ">

          {/* 🚀 Programming Languages */}
         <div className="skill-category">
          <h3>programming Languages</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {[
        { name: "C++", src: "/icons/Cplus.svg" },
        { name: "Python", src: "/icons/Python.svg" },
        { name: "JavaScript", src: "/icons/javascript.svg" },
        { name: "C", src: "/icons/C_programming.svg" },
        { name: "HTML", src: "/icons/Html.svg" },
        { name: "CSS", src: "/icons/Css.svg" },
      ].map(({ name, src }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center bg-[#0e0e0e] rounded-xl h-32 hover:shadow-[0_0_25px_#00ff7f] transition-shadow duration-300"
        >
          <img
            src={src}
            alt={name}
            title={name}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <p className="mt-2 text-sm font-medium text-center">{name}</p>
        </div>
      ))}
    </div>


            
          </div>
          
        </div>
        <div className="skill-category">
          <h3>framework & Tools</h3>
 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {[
        { name: "Node.js", src: "/FTIcons/Node.js.svg" },
        { name: "React", src: "/FTIcons/React.svg" },
        { name: "Next.js", src: "/FTIcons/Nextjs.svg" },
        { name: "Django", src: "/FTIcons/Django.svg" },
        { name: "Unreal Engine", src: "/FTIcons/unreal-engine.svg" },
        { name: "Tailwind CSS", src: "/FTIcons/tailwindcss.svg" },
        { name: "Bootstrap", src: "/FTIcons/bootstrap.svg" },
         { name: "Github", src: "/FTIcons/github-white-icon.svg" },
        { name: "TailwindCss", src: "/FTIcons/tailwindcss.svg" },
        { name: "Git", src: "/FTIcons/git.svg" },
        { name: "express.js", src: "/FTIcons/express-js.svg" },
      ].map(({ name, src }) => (
        <div
          key={name}
          className="flex flex-col items-center justify-center bg-[#0e0e0e] rounded-xl h-32 hover:shadow-[0_0_25px_#00ff7f] transition-shadow duration-300"
        >
          <img
            src={src}
            alt={name}
            title={name}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <p className="mt-2 text-sm font-medium text-center">{name}</p>
        </div>
      ))}
    </div>
  </div>
      </div>
      
    </section>
  );
}
